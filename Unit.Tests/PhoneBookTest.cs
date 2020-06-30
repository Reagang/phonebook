using API.Controllers;
using API.Helper;
using API.ViewModels;
using AutoMapper;
using Core.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Unit.Tests
{
    public class PhoneBookTest
    {
        private readonly PhoneBookController _controller;
        private readonly Mock<IPhonebookRepository> _phonebook;
        private readonly Mock<IHttpContextAccessor> _accessor;
        private readonly IMapper _mapper;

        private readonly List<PhonebookListViewModel> _phonebookLists;

        public PhoneBookTest()
        {
            _phonebook = new Mock<IPhonebookRepository>();
            var session = Mock.Of<ISession>();
            var httpContext = Mock.Of<HttpContext>(x => x.Session == session);

            _accessor = new Mock<IHttpContextAccessor>();
            _accessor.Setup(x => x.HttpContext).Returns(httpContext);
            _mapper = new MapperConfiguration(c => c.AddProfile<AutoMapperProfiles>()).CreateMapper();

            _controller = new PhoneBookController(_phonebook.Object, _mapper);
        }
        
        [Fact]
        public async Task Get_ReturnsOkResult()
        {
            var result = await _controller.Get();
            var okResult = result as OkObjectResult;

            // assert
            Assert.NotNull(okResult);
            Assert.True(okResult is OkObjectResult);
            Assert.Equal(StatusCodes.Status200OK, okResult.StatusCode);

        }

        [Fact]
        public void Add_InvalidObjectPassed_ReturnsBadRequest()
        {
            // Arrange
            var nameMissingItem = new PhonebookEntryViewModel()
            {
                Name = "Test",
                Number = "12"
            };
            _controller.ModelState.AddModelError("Name", "Required");

            // Act
            var badResponse = _controller.Post(nameMissingItem);

            // Assert
            Assert.IsType<BadRequestObjectResult>(badResponse.Result);
        }

        [Fact]
        public void Add_ValidObjectPassed_ReturnedResponseHasCreatedItem()
        {
            // Arrange
            var testItem = new PhonebookEntryViewModel()
            {
                Name = "John",
                Surname = "Black",
                Number = "22"
            };

            // Act
            var createdResponse = _controller.Post(testItem);

            // Assert
           // var result = createdResponse.Result as OkObjectResult;
            Assert.IsType<OkObjectResult>(createdResponse.Result);
            //Assert.IsType<PhonebookEntryViewModel>(result);
        }

    }
}

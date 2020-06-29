﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhoneBookController : ControllerBase
    {
        private readonly IPhonebookRepository _repo;
        private readonly IMapper _mapper;

        public PhoneBookController(IPhonebookRepository repo,IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }
        // GET: api/<PhoneBookController>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var person = await _repo.GetPhonebookList();

            var phonebookList = _mapper.Map<IEnumerable<PhonebookListDto>>(person);
            return Ok(phonebookList);
        }

        // GET api/<PhoneBookController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<PhoneBookController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            
        }

        // PUT api/<PhoneBookController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PhoneBookController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

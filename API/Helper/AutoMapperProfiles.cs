using API.ViewModels;
using AutoMapper;
using Core.Dtos;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Helper
{
    public class AutoMapperProfiles:Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Person, PhonebookListViewModel>()
                .ForMember(dest => dest.Number, 
                opt => opt.MapFrom(src => src.Phones.FirstOrDefault(p => p.IsActive == true).Number));

            CreateMap<Phone, PersonPhoneViewModel>();

            CreateMap<Person, PhonebookEntryViewModel>()
            .ForMember(dest => dest.Number,
            opt => opt.MapFrom(src => src.Phones.FirstOrDefault(p => p.IsActive == true).Number));

            CreateMap<Person, PhonebookEntryRequestDto>()
               .ForMember(dest => dest.Number,
               opt => opt.MapFrom(src => src.Phones.FirstOrDefault(p => p.IsActive == true).Number));

            CreateMap<PhonebookEntryViewModel, PhonebookEntryRequestDto>();
            
        }
    }
}

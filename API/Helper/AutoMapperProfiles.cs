using API.Dtos;
using API.Models;
using AutoMapper;
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
            CreateMap<Person, PhonebookListDto>()
                .ForMember(dest => dest.Number, 
                opt => opt.MapFrom(src => src.Phones.FirstOrDefault(p => p.IsActive == true).Number));
            CreateMap<Phone, PersonPhoneDto>();
        }
    }
}

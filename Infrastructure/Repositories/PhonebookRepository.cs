﻿using Core.Dtos;
using Core.Interfaces;
using Core.Models;
using Infrastructure.EntityFrameworkCore.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
    public class PhonebookRepository : IPhonebookRepository
    {
        private readonly DataContext _context;

        public PhonebookRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Person>> GetPhonebookList()
        {
            try
            {
                return await _context.Person.Include(p => p.Phones).OrderByDescending(o => o.CreationTime).ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }


        }
        public async Task<bool> AddPhoneBookEntry(PhonebookEntryRequestDto personPhoneDto)
        {
            try
            {
                Person p = new Person();
                p.Name = personPhoneDto.Name;
                p.Surname = personPhoneDto.Surname;
                p.IsActive = true;
                List<Phone> phList = new List<Phone>();

                Phone ph = new Phone()
                {
                    Number = personPhoneDto.Number,
                    IsActive = true
                };
                phList.Add(ph);
                p.Phones = phList;

                _context.Person.Add(p);
                await _context.SaveChangesAsync();
                return true;
            }
            catch (Exception ex)
            {
                return false;
            }
        }
    }
}
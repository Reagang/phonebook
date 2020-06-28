using API.Dtos;
using API.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
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
                return await _context.Person.Include(p => p.Phones).ToListAsync();
            }
            catch (Exception ex)
            {
                throw;
            }
            

        }
    }
}

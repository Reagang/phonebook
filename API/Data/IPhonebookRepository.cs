using API.Dtos;
using API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Data
{
    public interface IPhonebookRepository
    {
        Task<IEnumerable<Person>> GetPhonebookList();
        Task<bool> AddPhoneBookEntry(PhonebookEntryRequest personPhoneDto);
    }
}

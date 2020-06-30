using Core.Dtos;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core.Interfaces
{
    public interface IPhonebookRepository
    {
        Task<IEnumerable<Person>> GetPhonebookList();
        Task<bool> AddPhoneBookEntry(PhonebookEntryRequestDto personPhoneDto);
    }
}

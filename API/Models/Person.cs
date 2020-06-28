using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }
        public DateTime CreationTime { get; set; }
        public bool IsActive { get; set; }
        public ICollection<Phone> Phones { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public string Number { get; set; }
        
        public DateTime CreationTime { get; set; }
        public bool IsActive { get; set; }

        public Person Person { get; set; }
        public int PersonId { get; set; }
    }
}

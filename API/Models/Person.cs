using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Person
    {
        public virtual int Id { get; set; }

        public virtual string Name { get; set; }

        public virtual string Surname { get; set; }
        public DateTime CreationTime { get; set; }
        public virtual bool IsActive { get; set; }
    }
}

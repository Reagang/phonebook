using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Phone
    {
        public virtual int PersonId { get; set; }
        public virtual string Number { get; set; }
        public virtual Person Person { get; set; }
        public DateTime CreationTime { get; set; }
        public virtual bool IsActive { get; set; }
    }
}

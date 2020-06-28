using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace API.Models
{
    public class Person
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Surname { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreationTime { get; set; }
        [DefaultValue(1)]
        public bool IsActive { get; set; }
        public ICollection<Phone> Phones { get; set; }
    }
}

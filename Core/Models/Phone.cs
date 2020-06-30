using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
    public class Phone
    {
        public int Id { get; set; }
        public string Number { get; set; }
        [DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreationTime { get; set; }
        [DefaultValue(1)]
        public bool IsActive { get; set; }

        public Person Person { get; set; }
        public int PersonId { get; set; }
    }
}

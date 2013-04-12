using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace windows.Models
{
    public class Icons
    {
        public List<Icon> icons = new List<Icon>(); 
        public Icons()
        {
            this.icons.Add(new Icon("Eminem", "Music"));
            this.icons.Add(new Icon("Dostoevskii", "Text"));
        }
    }

    public class Icon
    {
        public string Name {get; set;}
        public string Type{get; set;}
    
        public Icon(string name, string type)
        {
            this.Name = name;
            this.Type = type;
        }
    }
}
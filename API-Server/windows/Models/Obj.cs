using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace windows.Models
{
    public class Obj
    {
        //public string Path;
        public List<File> icons;
        //public string[] Dirs;
        //public string Parent;
    }

    public class File
    {
        public string name;
        public string type;
    }


    public static class Sys
    {
        public static string TypeOfIcon(string s)
        {
            switch (s)
            {
                case "txt":
                case "ini":
                    return "text";

                case "mp3":
                    return "music";
            }
            return "none";
        }
    }
}
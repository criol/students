using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;

namespace windows.Models
{
    public class CreateTree
    {
        List<string> fileList = new List<string>();
        public List<string> start()
        {
            CreateTree p = new CreateTree();
            p.Create(@"D:\TTT", true);
            return p.fileList;
        }

        public void Create(string Dir, bool Sub)
        {
            string[] files = Directory.GetFiles(Dir);
            foreach (string file in files)
                fileList.Add(file);
            if (Sub)
                foreach (string folder in Directory.GetDirectories(Dir))
                    Create(folder, Sub);
        }
    }
}
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Base_ChatContacks
    {
        private string _headicon;

        public string HeadIcon
        {
            set { _headicon = value; }
            get { return _headicon; }
        }

        private string reNickName;

        public string ReNickName
        {
            set { reNickName = value; }
            get { return reNickName; }
        }
    }
}

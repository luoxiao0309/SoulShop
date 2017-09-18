using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Product_Comment
    {
        private string nickName;

        public string NickName
        {
            set { nickName = value; }
            get { return nickName; }
        }

        private string headIcon;

        public string HeadIcon
        {
            set { headIcon = value; }
            get { return headIcon; }
        }
    }
}

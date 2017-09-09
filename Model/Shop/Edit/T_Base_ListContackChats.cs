using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Base_ListContackChats
    {
        private string contackName;

        public string ContackName
        {
            set { contackName = value; }
            get { return contackName; }
        }

        private List<T_Base_ChatOnline> listChatOnline;

        public List<T_Base_ChatOnline> ListChatOnline
        {
            set { listChatOnline = value; }
            get { return listChatOnline; }
        }
    }
}

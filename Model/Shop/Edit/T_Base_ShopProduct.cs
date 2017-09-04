using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Base_ShopProduct
    {
        private List<T_ShopProduct_Pic> picList;
        
        public List<T_ShopProduct_Pic> PicList
        {
            set { picList = value; }
            get { return picList; }
        }
    }
}

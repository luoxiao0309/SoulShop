using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{ 
    public partial class T_Base_SaleProduct
    {
        private T_Base_ShopProduct shopProduct;

        public T_Base_ShopProduct ShopProduct
        {
            set { shopProduct = value; }
            get { return shopProduct; }
        }
    }
}

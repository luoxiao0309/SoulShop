using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Base_OrderItem
    {
        private Model.T_Base_ShopProduct shopProduct;

        public Model.T_Base_ShopProduct ShopProduct
        {
            get { return shopProduct; }
            set { shopProduct = value; }
        }
    }
}

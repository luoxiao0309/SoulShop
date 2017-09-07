using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.Model
{
    public partial class T_Base_ShopProduct
    {
        //图片了列表
        private List<T_ShopProduct_Pic> picList;
        
        public List<T_ShopProduct_Pic> PicList
        {
            set { picList = value; }
            get { return picList; }
        }

        //源商品信息
        private T_Base_Product orProduct;

        public T_Base_Product OrProduct
        {
            set { orProduct = value; }
            get { return orProduct; }
        }
    }
}

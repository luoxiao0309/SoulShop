using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ShopProduct
    {
        public List<Model.T_Base_ShopProduct> GetModelList(string strWhere)
        {
            DAL.T_Base_ShopProduct dalShopProduct = new DAL.T_Base_ShopProduct();
            DataSet ds = dalShopProduct.GetList(strWhere);

            List<Model.T_Base_ShopProduct> listShopProduct = new List<Model.T_Base_ShopProduct>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Base_ShopProduct shopProduct = dalShopProduct.DataRowToModel(dr);
                //根据上架商品ID获得图片
                DAL.T_ShopProduct_Pic dalSProductPic = new DAL.T_ShopProduct_Pic();
                //保存图片列表数据
                shopProduct.PicList = dalSProductPic.GetModelList("ShopProductID=" + shopProduct.ID);
                listShopProduct.Add(shopProduct);
            }
            
            return listShopProduct;
        }
    }
}

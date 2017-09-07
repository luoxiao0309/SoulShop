using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ShopCart
    {
        public List<Model.T_Base_ShopCart> GetModelList(string strWhere)
        {
            DAL.T_Base_ShopCart dalShopCart = new DAL.T_Base_ShopCart();
            DataSet ds = dalShopCart.GetList(strWhere);

            List<Model.T_Base_ShopCart> listShopCart = new List<Model.T_Base_ShopCart>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listShopCart.Add(dalShopCart.DataRowToModel(dr));
            }

            return listShopCart;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_ShopProduct_Pic
    {
        public List<Model.T_ShopProduct_Pic> GetModelList(string strWhere)
        {
            DAL.T_ShopProduct_Pic dalSProductPic = new DAL.T_ShopProduct_Pic();
            DataSet ds = dalSProductPic.GetList(strWhere);

            List<Model.T_ShopProduct_Pic> listSProductPic = new List<Model.T_ShopProduct_Pic>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listSProductPic.Add(dalSProductPic.DataRowToModel(dr));
            }

            return listSProductPic;
        }
    }
}

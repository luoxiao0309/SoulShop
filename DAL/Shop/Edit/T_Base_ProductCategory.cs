using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ProductCategory
    {
        public List<Model.T_Base_ProductCategory> GetModelList(string strWhere)
        {
            DAL.T_Base_ProductCategory dalProductCategory = new DAL.T_Base_ProductCategory();
            DataSet ds = dalProductCategory.GetList(strWhere);

            List<Model.T_Base_ProductCategory> listProductCategory = new List<Model.T_Base_ProductCategory>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listProductCategory.Add(dalProductCategory.DataRowToModel(dr));
            }

            return listProductCategory;
        }
    }
}

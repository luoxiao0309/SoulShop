using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_OrderHead
    {
        public List<Model.T_Base_OrderHead> GetModelList(string strWhere)
        {
            DAL.T_Base_OrderHead dalOrderHead = new DAL.T_Base_OrderHead();
            DataSet ds = dalOrderHead.GetList(strWhere);

            List<Model.T_Base_OrderHead> listOrderHead = new List<Model.T_Base_OrderHead>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Base_OrderHead orderHead = dalOrderHead.DataRowToModel(dr);
                listOrderHead.Add(orderHead);
            }

            return listOrderHead;
        }
    }
}

using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_OrderItem
    {
        public List<Model.T_Base_OrderItem> GetModelList(string strWhere)
        {
            DAL.T_Base_OrderItem dalOrderItem = new DAL.T_Base_OrderItem();
            DataSet ds = dalOrderItem.GetList(strWhere);

            List<Model.T_Base_OrderItem> listOrderItem = new List<Model.T_Base_OrderItem>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Base_OrderItem orderItem = dalOrderItem.DataRowToModel(dr);      
                listOrderItem.Add(orderItem);
            }

            return listOrderItem;
        }
    }
}

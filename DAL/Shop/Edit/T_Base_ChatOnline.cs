using Maticsoft.DBUtility;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ChatOnline
    {
        public List<Model.T_Base_ChatOnline> GetModelList(string strWhere)
        {
            DAL.T_Base_ChatOnline dalShopCart = new DAL.T_Base_ChatOnline();
            DataSet ds = dalShopCart.GetList(strWhere);

            List<Model.T_Base_ChatOnline> listChatOnline = new List<Model.T_Base_ChatOnline>();
            
            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listChatOnline.Add(dalShopCart.DataRowToModel(dr));
            }

            return listChatOnline;
        }

        public bool UpdateReadSign(string senderName, string receiverName)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("update T_Base_ChatOnline set IsChecked=1 where ");
            strSql.Append("SenderName=@SenderName and ReceiverName=@ReceiverName or ");
            strSql.Append("ReceiverName=@SenderName and SenderName=@ReceiverName");

            SqlParameter[] parameters = {
                new SqlParameter("@SenderName", SqlDbType.NVarChar, 20),
                new SqlParameter("@ReceiverName", SqlDbType.NVarChar, 20)
            };

            parameters[0].Value = senderName;
            parameters[1].Value = receiverName;

            int rows = DbHelperSQL.ExecuteSql(strSql.ToString(), parameters);
            if (rows > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}

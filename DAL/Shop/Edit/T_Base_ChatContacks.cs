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
    public partial class T_Base_ChatContacks
    {
        //获取DateSet
        public DataSet GetListByView(string strWhere)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select ConackName,OwnerName,ID,HeadIcon ");
            strSql.Append(" FROM V_ChatContacks_Buyer ");
            if (strWhere.Trim() != "")
            {
                strSql.Append(" where " + strWhere);
            }
            return DbHelperSQL.Query(strSql.ToString());
        }

        //获取Model列表
        public List<Model.T_Base_ChatContacks> GetModelListByOwnerName(string strWhere)
        {
            DAL.T_Base_ChatContacks dalChatContacks = new DAL.T_Base_ChatContacks();
            DataSet ds = dalChatContacks.GetListByView(strWhere);

            List<Model.T_Base_ChatContacks> listChatContacks = new List<Model.T_Base_ChatContacks>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Base_ChatContacks chatContacks = new Model.T_Base_ChatContacks();

                chatContacks.ID = Convert.ToInt32(dr["ID"]);
                chatContacks.ConackName = Convert.ToString(dr["ConackName"]);
                chatContacks.OwnerName = Convert.ToString(dr["OwnerName"]);
                chatContacks.HeadIcon = Convert.ToString(dr["HeadIcon"]);

                listChatContacks.Add(chatContacks);
            }

            return listChatContacks;
        }

        public bool ExistsByOwnerAndSender(string ownerName, string conackName)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select count(1) from T_Base_ChatContacks");
            strSql.Append(" where OwnerName=@OwnerName and ConackName=@ConackName");
            SqlParameter[] parameters = {
                    new SqlParameter("@OwnerName", SqlDbType.NVarChar, 50),
                    new SqlParameter("@ConackName", SqlDbType.NVarChar, 50)
            };
            parameters[0].Value = ownerName;
            parameters[1].Value = conackName;

            return DbHelperSQL.Exists(strSql.ToString(), parameters);
        }
    }
}

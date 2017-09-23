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
    public partial class T_Base_Address
    {
        public List<Model.T_Base_Address> GetModelList(string strWhere)
        {
            DAL.T_Base_Address dalAddress = new DAL.T_Base_Address();
            DataSet ds = dalAddress.GetList(strWhere);

            List<Model.T_Base_Address> listAddress = new List<Model.T_Base_Address>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                listAddress.Add(dalAddress.DataRowToModel(dr));
            }

            return listAddress;
        }

        public Model.T_Base_Address GetModelByIsDefault(string buyerID)
        {
            StringBuilder strSql = new StringBuilder();
            strSql.Append("select  top 1 ID,Address,Name,Phone,BuyerID,IsDefault from T_Base_Address ");
            strSql.Append(" where BuyerID=@BuyerID and IsDefault=1");
            SqlParameter[] parameters = {
                    new SqlParameter("@BuyerID", SqlDbType.NVarChar,20)
            };
            parameters[0].Value = buyerID;

            SoulShop.Model.T_Base_Address model = new SoulShop.Model.T_Base_Address();
            DataSet ds = DbHelperSQL.Query(strSql.ToString(), parameters);
            if (ds.Tables[0].Rows.Count > 0)
            {
                return DataRowToModel(ds.Tables[0].Rows[0]);
            }
            else
            {
                return null;
            }
        }
    }
}

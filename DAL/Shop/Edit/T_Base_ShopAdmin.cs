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
    public partial class T_Base_ShopAdmin
    {
        public SoulShop.Model.T_Base_ShopAdmin GetModelByID(string ID)
        {

            StringBuilder strSql = new StringBuilder();
            strSql.Append("select  top 1 ShopID,ID,Password,ShopName,OwnerID,OwnerName,OwnerPhone,OwnerQQ,OwnerAddress,AreaID,Freeze,Checking,HeadIcon from T_Base_ShopAdmin ");
            strSql.Append(" where ID=@ID ");
            SqlParameter[] parameters = {new SqlParameter("@ID", SqlDbType.NVarChar,20)};  
            parameters[0].Value = ID;

            SoulShop.Model.T_Base_ShopAdmin model = new SoulShop.Model.T_Base_ShopAdmin();
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

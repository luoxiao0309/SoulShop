using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SoulShop.DAL
{
    public partial class T_Base_ChatContacks
    {
        //获取Model列表
        public List<Model.T_Base_ChatContacks> GetModelListByOwnerName(string strWhere)
        {
            DAL.T_Base_ChatContacks dalChatContacks = new DAL.T_Base_ChatContacks();
            DataSet ds = dalChatContacks.GetList(strWhere);

            List<Model.T_Base_ChatContacks> listChatContacks = new List<Model.T_Base_ChatContacks>();

            foreach (DataRow dr in ds.Tables[0].Rows)
            {
                Model.T_Base_ChatContacks chatContacks = dalChatContacks.DataRowToModel(dr);
                listChatContacks.Add(chatContacks);
            }

            return listChatContacks;
        }
    }
}

using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SoulShop.Startup))]
namespace SoulShop
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

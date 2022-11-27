export const routerName = {
  /**
   * 菜单
   */
  menu: 'pages/menu/index',
  /**
   * 购物车
   */
  cart: 'pages/cart/index',
  /**
   * 用户
   */
  user: 'pages/user/index',
};

export default {
  pages: Object.values(routerName),
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
        {
            pagePath: routerName.menu,
            text: '菜单',
            iconPath: './assets/images/tabbar/caidan.png',
            selectedIconPath: './assets/images/tabbar/caidan-active.png',
        },
        {
            pagePath: routerName.cart,
            text: '购物车',
            iconPath: './assets/images/tabbar/gouwuche.png',
            selectedIconPath: './assets/images/tabbar/gouwuche-active.png',
        },
        {
          pagePath: routerName.user,
          text: '用户',
          iconPath: './assets/images/tabbar/wode.png',
          selectedIconPath: './assets/images/tabbar/wode-active.png',
      },
    ],
    color: '#cdcdcd',
    selectedColor: '#1296db',
  },
}

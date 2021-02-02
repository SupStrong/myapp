export default {
  pages: [
      'pages/index/index',
      'pages/grouping/index',
      'pages/scan/index',
      'pages/news/index',
      'pages/my/index',
      'pages/static/index',
      'pages/cooy/index',

  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#1cbbb4',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  "tabBar": {
    "color": "white",
    "backgroundColor": "#1cbbb4",
    "selectedColor": "#222222",
    "borderStyle": "white",
    "list": [{
            "text": "首页",
            "pagePath": "pages/index/index",
            "iconPath": "./assets/images/tabbar/index.png",
            "selectedIconPath": "./assets/images/tabbar/index01.png"
        },
        {
            "text": "分组",
            "pagePath": "pages/grouping/index",
            "iconPath": "./assets/images/tabbar/grouping.png",
            "selectedIconPath": "./assets/images/tabbar/grouping01.png"
        },
        {
            "text": "识别",
            "pagePath": "pages/scan/index",
            "iconPath": "./assets/images/tabbar/scan.png",
            "selectedIconPath": "./assets/images/tabbar/scan01.png"
        },
        {
            "text": "新闻资讯",
            "pagePath": "pages/news/index",
            "iconPath": "./assets/images/tabbar/news.png",
            "selectedIconPath": "./assets/images/tabbar/news01.png"
        },
        {
          "text": "我的",
          "pagePath": "pages/my/index",
          "iconPath": "./assets/images/tabbar/my.png",
          "selectedIconPath": "./assets/images/tabbar/my01.png"
      }
    ],
  },
}

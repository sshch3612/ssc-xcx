import React from '@react';


import "./pages/index/index";

import "./pages/main/my/index";

class Demo extends React.Component {
    //定一个主题颜色：#00FF99
    config = {
        window: {
            backgroundTextStyle: '',
            navigationBarBackgroundColor: '#00FF99',//导航栏背景颜色，如 #000000
            navigationBarTitleText: '步步生金',//导航栏标题文字内容
            navigationBarTextStyle: 'black ',//导航栏标题颜色，仅支持 black / white
            backgroundColor:'',//窗口的背景色.默认#ffffff
            backgroundTextStyle:'',//下拉 loading 的样式，仅支持 dark / light

        },
        tabBar: {
            'color': '#929292',//tab 上的文字默认颜色
            'selectedColor': '#00FF99',//tab 上的文字选中时的颜色
            'borderStyle': 'black',//tabbar上边框的颜色， 仅支持 black / white
            'backgroundColor': '#ffffff',//tab 的背景色
             'position':'',//tabBar的位置，仅支持 bottom / top,，默认bottom
            'list': [ //tab 的列表，详见 list 属性说明，最少2个、最多5个 tab
                {
                    'pagePath': 'pages/index/index', //页面路径
                    'iconPath': 'assets/image/homepage_normal.png',//iocon 路径
                    'selectedIconPath': 'assets/image/homepage_select.png',//选中时icon路径
                    'text': '首页',//tab 上按钮文字
                    'selected': true //默认选中
                },
                {
                    'pagePath': 'pages/main/my/index', //页面路径
                    'iconPath': 'assets/image/uc_normal.png',//iocon 路径
                    'selectedIconPath': 'assets/image/uc_select.png',//选中时icon路径
                    'text': '步步生金',//tab 上按钮文字
                }
            ]
        }
    };
    globalData = {
        ufo: 'ufo'
    };
    onLaunch() {
        // eslint-disable-next-line
        console.log('App launched');
    }
    
}
//这样写相当于为每一个页面组件的外面都加上一个<Provider />，如果你想在页面上用到store里的数据，
//需要用react-redux的connect方法包一下，详见pages/demo/syntax/redux
// React.applyAppStore(store);
// eslint-disable-next-line
App(new Demo());

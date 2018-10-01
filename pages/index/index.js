import React from '@react';

class P  extends React.Component{
    constructor(props){
        super(props);
    }
    config = {
        backgroundColor: '#fff',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '首页',//导航栏标题文字内容
        navigationBarTextStyle: 'black',
        // enablePullDownRefresh:'',//是否全局开启下拉刷新。默认false
        // disableScroll:''//设置为 true 则页面整体不能上下滚动；默认false
    };
    render(){
        return(
            <div>
                页面一
            </div>
        )
    }
}
export  default P;
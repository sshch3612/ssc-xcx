/**
 * Created by sushaochun on 2018/10/1.
 */
import React from "@react";

class P extends React.Component{
    constructor(props){
        super(props);
    }
    config = {
        backgroundColor: '#fff',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: '步步生金',//导航栏标题文字内容
        navigationBarTextStyle: 'black',
        // enablePullDownRefresh:'',//是否全局开启下拉刷新。
        // disableScroll:''//设置为 true 则页面整体不能上下滚动；
    }
    render(){
        return (
            <div>
                测试页面二
            </div>
        )
    }
}

export default P;
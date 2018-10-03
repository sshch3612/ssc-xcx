/**
 * Created by sushaochun on 2018/10/3.
 */

import React from "@react";
import 'weapp-async-await';
import Test from "./test"


//数据异步渲染加载
class asynComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            status:"loading",
            imgload:props.imgload || "data:image/svg+xml;base64,PHN2ZyBjbGFzc05hbWU9Imxkcy1zcGlubmVyIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIHRyYW5zZm9ybT0icm90YXRlKDAgNTAgNTApIj4KICAgIDxyZWN0IHg9IjQ3IiB5PSIyMiIgcng9IjkuNCIgcnk9IjQuNCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM4Y2QwZTUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuOTE2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMCA1MCA1MCkiPgogICAgPHJlY3QgeD0iNDciIHk9IjIyIiByeD0iOS40IiByeT0iNC40IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzhjZDBlNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDkwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjU4MzMzMzMzMzMzMzMzMzRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTUwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjQxNjY2NjY2NjY2NjY2NjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjMzMzMzMzMzMzMzMzMzMzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMjQwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICAgIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI3MCA1MCA1MCkiPgogICAgPHJlY3QgeD0iNDciIHk9IjIyIiByeD0iOS40IiByeT0iNC40IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzhjZDBlNSI+CiAgICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgzMDAgNTAgNTApIj4KICAgIDxyZWN0IHg9IjQ3IiB5PSIyMiIgcng9IjkuNCIgcnk9IjQuNCIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM4Y2QwZTUiPgogICAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMDgzMzMzMzMzMzMzMzMzMzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzMwIDUwIDUwKSI+CiAgICA8cmVjdCB4PSI0NyIgeT0iMjIiIHJ4PSI5LjQiIHJ5PSI0LjQiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjOGNkMGU1Ij4KICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogICAgPC9yZWN0Pgo8L2c+PC9zdmc+",
            imgheight:props.imgheight || '90px',
            imgwidth:props.imgwidth || '90px'
        };
    }

    datapromise(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve("加载成功")
            },2000)
        })
    }
    async loding(){
        let result = await this.datapromise();
        this.setState({
            status:"success"
        })
    }
    componentDidMount(){
        console.log("组Didmount")
        //异步加载的代码
        this.loding();


    }
    render(){
        var {imgload,imgheight,imgwidth} = this.props
        if(this.state.status==="loading"){
            return(
                <div style={{height:'100%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <image src={this.state.imgload} style={{height:this.state.imgheight,width:this.state.imgwidth}}></image>
                </div>
            )
        }else{
            return(
                <div>
                    加载成功
                </div>
            )
        }
    }
}
export  default asynComponent;

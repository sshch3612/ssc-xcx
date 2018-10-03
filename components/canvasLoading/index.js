/**
 * Created by sushaochun on 2018/10/2.
 */
import React from "@react";

class canvasLoading extends  React.Component{
    constructor(props){
        super(props)
        this.state = {
            height:this.props.height || 300,
            width:this.props.width || 225,
            //定义背景圆的颜色及边框宽度
            bgcircle:this.props.bgcircle||[125,125,90,0,Math.PI*2],
            bgcolor:this.props.bgcolor|| "#CCCCCC",
            bgLineWidth: this.props.bgLineWidth|| 6,
            startAngle:this.props.startAngle || Math.PI*3/4,
            endAngle:this.props.endAngle || Math.PI*9/4,
            LoaderColor:this.props.LoaderColor || '#00ff33',
            LoaderLineWidth:this.props.LoaderLineWidth || 8,
            Timeout:this.props.Timeout || 50

        }
        this.ctx = null;
    }
    componentWillMount(){
        console.log("WillMount")
        this.ctx = React.api.createCanvasContext('canvasLoading');
        this.Drawarc(this.ctx);
    }

    componentDidMount(){
        console.log("DidMount",333)
        var timeout = this.state.Timeout;
        var startAngle = this.state.startAngle;
        var circleAngle = startAngle+Math.PI/18;;
        var endAngle = this.state.endAngle;
        var arccircle = this.state.bgcircle.slice(0,3);
        var Timer = setInterval(()=>{
            this.ctx.beginPath();
            this.ctx.arc(...[...arccircle,startAngle,circleAngle]);
            this.ctx.setStrokeStyle(this.state.LoaderColor)
            this.ctx.setLineWidth(this.state.LoaderLineWidth)
            this.ctx.stroke(this.state.LoaderLineWidth);
            this.ctx.draw(true)
            circleAngle += Math.PI/18;
            if(circleAngle >= endAngle){
                console.log(circleAngle);
                console.log("取消定时器")
                clearInterval(Timer);
            }
        },timeout)
    };

    Drawarc(ctx){
        ctx.beginPath();
        ctx.arc(...this.state.bgcircle);
        ctx.setStrokeStyle(this.state.bgcolor)
        ctx.setLineWidth(this.state.bgLineWidth)
        ctx.stroke();
        ctx.draw()
    }
    DatatoAngle(data){
        //    总data/总angle = data/angle
    }

    render(){
        return(
                <canvas className="circle_step" canvas-id="canvasLoading" style={{height:this.state.height+'px',width:this.state.width+'px'}}>
                </canvas>
            )

    }
}

export default canvasLoading;
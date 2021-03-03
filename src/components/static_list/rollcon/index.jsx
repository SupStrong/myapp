import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";
import './index.scss'

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class RollCon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollData:{
        interval: null,
        pace: 1.2, //滚动速度
        interval: 20, //时间间隔
        size: 24, //字体大小in px
        length: 0, //字体宽度
        offsetLeft: 0, //
        windowWidth: 0,
    },
    modelStatus:false
    };
  }
  componentWillUnmount () { 
  }
  componentDidMount () {
    // this.startMarquee();

  }
  componentDidShow () { 
    this.getData()
   }

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

    //根据viewId查询view的宽度
  //停止跑马灯
  stopMarquee() {
    var that = this;
     let {scrollData:data} = this.state;
    //清除旧的定时器
    if (data != null) {
    clearInterval(that.interval);
    }
  }

  //执行跑马灯动画
  excuseAnimation() {
    let that = this;
    let {scrollData:data} = this.state;
    if (data.length > data.windowWidth) {
    //设置循环
    let interval = setInterval(function() {
    if (data.offsetLeft <= 0) {
      if (data.offsetLeft >= -data.length) {
        data.offsetLeft = data.offsetLeft - data.pace
      } else {
        data.offsetLeft = data.windowWidth
      }
    } else {
      data.offsetLeft = data.offsetLeft - data.pace
    }
    that.setState({
        scrollData: data
      })
    }, data.interval);
    }
  }

  //开始跑马灯
  startMarquee(){
    var that = this;
    let {scrollData:data} = this.state;
    that.stopMarquee();
    //初始化数据
    data.windowWidth = Taro.getSystemInfoSync().windowWidth;
    setTimeout(function(){
      const queryAllWidth = Taro.createSelectorQuery();
      queryAllWidth.select('.notice-tips').boundingClientRect((res) => {
      data.length = res.width - 90;
        that.excuseAnimation();
      }).exec();
    },1000)
  }
  // 
  canModelStatus(is_bool = false){
    this.setState({
      modelStatus:is_bool
    });
  }
  
  render () {
    const { scrollData, modelStatus } = this.state;
    return (
      <View>
        <View className="rollCon">
          <View className='box'> 
            <View className="notice-box fl-row-center">
              <Text className="iconfont icon-gonggao G-color-white" />
              <Text className="G-color-white notice-box-text G-Fsize-12">公告</Text>
            </View>
            <View className="notice-tips G-Fsize-14 G-color-white" style={`margin-left:${scrollData.offsetLeft}px`}>
            请问你是谁哈哈哈哈哈哈哈哈哈请问你是哈哈哈哈哈哈哈哈是哈哈哈哈哈哈哈哈
            </View>
            <View className="notice-right fl-row-center" onClick={this.canModelStatus.bind(this,true)}>
                <Text className="iconfont icon-xiangyou G-color-white"></Text>
            </View>
          </View>
        </View>
        <View className={`model-dialog fl-row-center ${modelStatus ? 'show' : ''}`} onClick={this.canModelStatus.bind(this,false)}>
          <View className="dialog-box">
　　我欣赏我的祖国，是因为中国曾经经历了多少沧桑、经历了多少风风雨雨啊;
我们伟大的祖国，疆域辽阔，人口众多，历史悠久，物产丰饶。在这片神奇的神州大
地上，勇敢。智慧的中华儿女共同劳动和生活，创造了辉煌的建设业绩，谱写了一篇又一
篇的灿烂时代篇章。在这片神奇的土地上，因为有了家，使这个世界变得温暖。因为有了爱
，使世界变得安静，变得更加和平。因为有了朋友的帮助，使世界的孩子们感受到友谊所带来
的快乐。在这篇土地上，我们彼此过得快乐，彼此过得幸福。</View>
        </View>
      </View>
    )
  }
}

export { RollCon };

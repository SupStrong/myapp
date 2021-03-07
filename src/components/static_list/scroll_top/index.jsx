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

class ScrollTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentList:[{name:'欢迎进入小程序111'},{name:'欢迎进入小程序222'}],
      listI: -1,
      content: '欢迎进入小程序',
      animationData:''
    };
  }
  componentWillUnmount () { 
  }
  componentDidMount () {
    // this.startMarquee();
    setInterval(() => {
      this.update(this.getListInfo())
    }, 5000)

  }
  componentDidShow () { 
    // this.getData()
   }

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  update(content) {
    var that = this
    var animation = wx.createAnimation()
    // 旧消息向上平移
    animation.translateY(-20).step({
      duration: 1000,
      timingFunction: 'ease-in'
    })
    // 为了实现下一条新内容向上平移的效果，必须把内容很快平移到下方，并且不能被用户看见，这里其原理类似轮播图的思路。
    // 实现方法：动画时间设置为1ms，过渡效果设置为’动画第一帧就跳至结束状态直到结束‘
    animation.opacity(0).translateY(20).step({
      duration: 1,
      timingFunction: 'step-start'
    })
    // 新消息向上平移的同时恢复透明
    animation.opacity(1).translateY(0).step({
      duration: 1000,
      timingFunction: 'ease-out'
    })
    that.setState({
      animationData: animation.export()
    })
    // 更新内容的延时必须大于第一步动画时间
    setTimeout(() => {
      that.setState({
        content: content
      })
    }, 1000)
  }
  getListInfo() {
    if (this.state.listI >= this.state.contentList.length - 1) {
      this.state.listI = -1
      this.getListInfo()
    } else {
      this.state.listI++
    }
    return this.state.contentList[this.state.listI].name
  }

  
  render () {
    const { content, animationData } = this.state;
    return (
      <View className="G-Mt-5">
        <View className="notification_bar">
          <View className="gong">公</View>
          <View className="gao">告</View>
          {/* <Image class="bar_left" src="/img/lb20.png" /> */}
          <View className="bar_text" animation={animationData}>{content}</View>
        </View>
      </View>
    )
  }
}

export { ScrollTop };

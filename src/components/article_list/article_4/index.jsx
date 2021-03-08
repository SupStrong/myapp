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

class ArticleFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentWillUnmount () { 
  }

  componentDidShow () { 
    this.getData()
  }
  toRegister() {
    console.log("123");
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="article-4 G-Mt-5">
        <View className="register">
          <View className="one" onClick={this.toRegister.bind(this)}>
            <Image className="oneImg" src="https://www.nbt.cloud/image/weichat/index/huiyuan.png" />
            <View className="oneRegister">会员注册</View>
            <View className="oneTips">Member registration</View>
          </View>

          <View className="one" onClick={this.toRegister.bind(this)}>
            <Image className="oneImg" src="https://www.nbt.cloud/image/weichat/index/daili.png" />
            <View className="oneRegister">代理注册</View>
            <View className="oneTips">Agent registration</View>
          </View>
        </View>

        <View className="register G-Mt-5">
          <View className="one">
            <Image className="oneImg" src="https://www.nbt.cloud/image/weichat/index/nbt.png" />
            <View className="oneRegister">关于脑贝特</View>
            <View className="oneTips">About us</View>
          </View>

          <View className="one">
            <Image className="oneImg" src="https://www.nbt.cloud/image/weichat/index/jixunying.png" />
            <View className="oneRegister">集训营</View>
            <View className="oneTips">Training camp</View>
          </View>
        </View>
      </View>
    )
  }
}

export { ArticleFour };

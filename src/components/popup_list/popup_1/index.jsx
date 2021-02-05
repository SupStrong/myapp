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

class PopupBoxOne extends Component {
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

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    const { isUser=true } = this.state
    return (
      <View className="msg-show fl-column-center" hidden={isUser}>
        <View className="content-show">
            <View className="title fl-column-center">
                <View className="G-color-white G-Fsize-14">消息提醒</View>
            </View>
            <View className="list" style="height:300rpx;">
                <View className="list-tips">
                    <Image className="list-tips-img" src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1603365312,3218205429&fm=26&gp=0.jpg"></Image>
                    <View className="list-tips-text">轻松iu全·轻松iu全·轻松iu全·轻松iu全·轻松iu全·</View>
                </View>
            </View>
            <Button bindgetuserinfo="bindGetUserInfo" className="msg-show-btn" open-Type="getUserInfo">立即授权</Button>
        </View>
      </View>
    )
  }
}

export { PopupBoxOne };

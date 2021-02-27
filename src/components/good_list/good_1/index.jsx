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

class GoodsListOne extends Component {
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
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="goods-1">
        <View className="goods-title-item">
          <View className="title-text"></View>
          <View className="title-icon"></View>
        </View>
        <View className="goods-list-item">
          <View><Image src="" /></View>
          <View>柚子茶柚子茶柚子茶柚子茶</View>
          <View></View>
        </View>
    </View>
    )
  }
}

export { GoodsListOne };

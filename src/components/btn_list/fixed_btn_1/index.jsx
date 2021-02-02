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

class FixedBtnOne extends Component {
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
      <View className="fixed-btn-float">
        <View className="fixed-btn-foot">
            <View className="footer">切换经纪人</View>
        </View>
    </View>
    )
  }
}

export { FixedBtnOne };

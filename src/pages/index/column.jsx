import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";

import './index.scss'
let statusConfigData = [
    {
      iconPath: "iconshipinhuida",
      text: "喜欢",
      type: 0
    },
    {
      iconPath: "iconpingfen2",
      text: "收藏",
      type: 1
    },
    {
      iconPath: " iconpingfen2 active",
      text: "分享",
      type: 2
    }
  ];
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class Index extends Component {
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

 

  tabStatus(data, question_id) {
      console.log("88");
  }

  render () {
    return (
      <View className='index'>
          <View className='problem-share'>
            {statusConfigData.map(item =>
                <View
                    className='share-btn'
                    onClick={this.tabStatus.bind(this,item)}
                >
                    <View className={`iconfont ${item.iconPath}`}></View>
                    <Text className='text G-Fsize-14'>{item.text}</Text>
                </View>
            )}
          </View>
      </View>
    )
  }
}

export default Index
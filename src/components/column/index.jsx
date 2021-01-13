import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";

import "./index.scss";
import wxPng from "../column/wx.png";
let statusConfigData = [
  {
    iconPath: "icon-aixin active_red",
    text: "喜欢",
    type: 0
  },
  {
    iconPath: "icon-shoucang active_orange",
    text: "收藏",
    type: 1
  }
];
class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { message, extClass='', btnMessage='' } = this.props;
    return (
      <View className='index'>
          <View className='problem-share G-bg-white'>
            <View className="problem-left">
                <Text className="G-Fsize-14 G-color-1cbbb4 problem-left-tags">#动物世界</Text>
                <Text className="G-Fsize-14 G-color-1cbbb4 problem-left-tags">#猿猴</Text>
            </View>
            <View className="problem-right">
              <View className='share-btn' >
                  <View className='iconfont icon-aixin active_red'></View>
                  <Text className='text G-Fsize-12'>100</Text>
              </View>
              <View className='share-btn' >
                    <View className='iconfont icon-shoucang active_orange'></View>
                    <Text className='text G-Fsize-12'>100</Text>
                </View>
              <View className='share-btn' >
                    <Image className='images G-Fsize-12' src={wxPng} />
              </View>
            </View>
          </View>
      </View>
    );
  }
}

export { Column };

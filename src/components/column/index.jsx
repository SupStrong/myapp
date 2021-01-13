import React, { Component } from "react";
import { View, Image, Text } from "@tarojs/components";

import "./index.scss";
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
class Column extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let { message, extClass='', btnMessage='' } = this.props;
    return (
      <View className='index'>
          <View className='problem-share'>
            {statusConfigData.map(item =>
                <View
                    className='share-btn'
                >
                    <View className={`iconfont G-color-white ${item.iconPath}`}></View>
                    <Text className='text G-Fsize-14 G-color-white'>{item.text}</Text>
                </View>
            )}
          </View>
      </View>
    );
  }
}

export { Column };

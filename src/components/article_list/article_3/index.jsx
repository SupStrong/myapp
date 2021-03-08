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

class ArticleThree extends Component {
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
  toDetail() {
    console.log("123")
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="myclass G-Mt-5">
        <Image onClick={this.toDetail.bind(this)} className="classLeft" src="https://www.nbt.cloud/image/weichat/home/myClass.png" />
        <Image className="classRight" src="https://www.nbt.cloud/image/weichat/home/myClass.png" />
      </View>
    )
  }
}

export { ArticleThree };

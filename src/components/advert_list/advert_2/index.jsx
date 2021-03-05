import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video,ScrollView } from "@tarojs/components";
import './index.scss'

let dataArr = [
  {
    path:'',
    image:'https://www.nbt.cloud/image/weichat/index/st0.png',
    appid:''
  },
  {
    path:'',
    image:'https://www.nbt.cloud/image/weichat/index/st1.png',
    appid:''
  },
  {
    path:'',
    image:'https://www.nbt.cloud/image/weichat/index/st2.png',
    appid:''
  }
]
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class AdvertTwo extends Component {
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
    console.log('111');
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="banner G-Mt-5 fl-row-center">
        <Image src={'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2084611613,3484876585&fm=26&gp=0.jpg'}/>
      </View>
    )
  }
}

export { AdvertTwo };

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

class AdvertOne extends Component {
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
      <View className="goods-1 G-Mt-5">
       <View class="title">图文课程</View>
        <View class="imgStudy G-Mt-10">
            <ScrollView scroll-x style="width: 100%;height: 200rpx;" >
                {dataArr.map((item,index) => (
                  <Image class="study" src={item.image} onClick={this.toDetail.bind(this)} />
                ))}
            </ScrollView>
        </View>
      </View>
    )
  }
}

export { AdvertOne };

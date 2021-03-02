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

class SwiperTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recommendList: [],
    heatList: [],
    cardCur: 0,
    bookUrl: 'book',
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg'
    }, {
      id: 1,
      type: 'image',
      url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614394312&t=8a56d12104362963f81febf226acab39',
    },
    {
      id: 2,
      type: 'image',
      url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg',
    }]
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
    const { swiperList, cardCur, isPlay, hotList } = this.state
    return (
      <Swiper class={`card-swiper ${DotStyle?'square-dot':'round-dot'}`} indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" bindchange="cardSwiper" indicator-color="#8799a3" indicator-active-color="#0081ff">
      {swiperList.map((item,index) =>(
        <SwiperItem class={`${cardCur==index?'cur':''}`}>
            <View class="swiper-item">
              <Image src={item.url} style='width:100%;' mode="aspectFill"></Image>
            </View>
        </SwiperItem>
      ))}
    </Swiper>
    )
  }
}

export { SwiperTwo };

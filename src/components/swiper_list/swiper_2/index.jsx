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
    this.getData();
    this.towerSwiper('swiperList');
  }
  DotStyle(e) {
    this.setState({
      DotStyle: e.detail.value
    })
  }
  cardSwiper(e) {
    this.setState({
      cardCur: e.detail.current
    })
  }
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setState({
      swiperList: list
    })
  }
  // towerSwiper触摸开始
  towerStart(e) {
    this.setState({
      towerStart: e.touches[0].pageX
    })
  }
  // towerSwiper计算方向
  towerMove(e) {
    this.setState({
      direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
    })
  }
  // towerSwiper计算滚动
  towerEnd(e) {
    let direction = this.data.direction;
    let list = this.data.swiperList;
    if (direction == 'right') {
      let mLeft = list[0].mLeft;
      let zIndex = list[0].zIndex;
      for (let i = 1; i < list.length; i++) {
        list[i - 1].mLeft = list[i].mLeft
        list[i - 1].zIndex = list[i].zIndex
      }
      list[list.length - 1].mLeft = mLeft;
      list[list.length - 1].zIndex = zIndex;
      this.setState({
        swiperList: list
      })
    } else {
      let mLeft = list[list.length - 1].mLeft;
      let zIndex = list[list.length - 1].zIndex;
      for (let i = list.length - 1; i > 0; i--) {
        list[i].mLeft = list[i - 1].mLeft
        list[i].zIndex = list[i - 1].zIndex
      }
      list[0].mLeft = mLeft;
      list[0].zIndex = zIndex;
      this.setState({
        swiperList: list
      })
    }
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { swiperList, cardCur} = this.state
    return (
      <Swiper class={`card-swiper round-dot`} indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500" onChange={this.cardSwiper.bind(this)} indicator-color="#8799a3" indicator-active-color="#0081ff">
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

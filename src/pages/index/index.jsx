import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";
import { add, minus, asyncAdd } from '../../actions/counter'
import { VideoEl } from "../../components/videoel";
import { Article } from "../../components/article";
import './index.scss'

const tabList= [{
  title: '搞笑',
  val: 0
}, {
  title: '视频',
  val: 1
}, {
  title: '文章',
  val: 2
},{
  title: '小知识',
  val: 2
}]

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
      currentListIdx: 0,
      isControls:false,
      isPlay: false,
      hotList:[
        {title:'嘻嘻嘻回家好好',id:1},
        {title:'嘻嘻嘻回家好好',id:1}
      ]
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

  canSwiperIndex(e){
    const index = e.detail.current;
    this.setState({
      currentListIdx: index,
    });
  }
  changeIdx(n) {
    if (n == this.state.currentListIdx) {
      return false
    }
    console.log(n);
    this.setState({
      currentListIdx: n,
    });
  }
  async getData(){
    // videoContext = Taro.createVideoContext('answerVideo');
  }

  goQuestionDes(question_id) {
    Taro.navigateTo({
      url: `/pages/question/details/index?id=${question_id}`,
    });
  }

  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className='index'>
        <View className='tab fl-row-center'>
          {tabList.map((item, idx) =>
            (
              <View key={idx} className={`tab-item ${currentListIdx == idx ? 'active' : ''}`} onClick={this.changeIdx.bind(this, idx)}>{item.title}</View>)
          )
          }
        </View>
        <Swiper
          className='list-swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          current={currentListIdx}
          easingFunction='easeOutCubic'
          onAnimationFinish={this.canSwiperIndex.bind(this)}
          >
          <SwiperItem>
            <VideoEl></VideoEl>
          </SwiperItem>
          <SwiperItem>
            <Article listData={hotList}></Article>
          </SwiperItem>
          <SwiperItem>
          3
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>4</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Index
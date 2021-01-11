import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";
import { add, minus, asyncAdd } from '../../actions/counter'
import ColumnNav from "./column";
import './index.scss'
let innerAudioContext = null;
let videoContext = null
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
    videoContext = Taro.createVideoContext('answerVideo');
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
            <View className="list-funny G-Mt-5">
              <View className="list-funny-item">
                <View className='video'>
                  <View className='video-paly'>
                    <Video id='answerVideo' src={'https://cw100.oss-cn-beijing.aliyuncs.com/renovation/202012/03/PTeDSc87He'}
                      object-fit='cover'
                      controls={false}
                      direction='0'
                      enablePlayGesture={true}
                      show-center-play-btn={false}
                      onPlay={() => {
                        this.setState({ isPlay: false, isControls: true })
                      }}
                      onPause={() => {
                        this.setState({ isPlay: true, isControls: false })
                      }}
                      onEnded={() => {
                        videoContext.exitFullScreen()
                      }}
                    >
                    </Video>
                    {isPlay ? <View className="video-title G-color-white">你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨</View> : null}
                    {
                      isPlay ? 
                      <View className='play' onClick={() => { videoContext.play() }}>
                        <View className='iconfont iconshipin'></View>
                      </View> 
                      : 
                      null
                    }
                  </View>
                </View>
                <ColumnNav></ColumnNav>
              </View>
            </View>
          </SwiperItem>
          <SwiperItem>
              <View className="list-article">
                <View className="list-article-item">
                {
                  hotList.map((item,idx) =>
                    <View className='list-item G-Mt-5' key={idx} >
                      <View className='item-con fl-row-grid' onClick={this.goQuestionDes.bind(this,item.id)}>
                        <View className='title G-Fsize-18 G-color-white'>你好啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你好啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</View>
                        <View className='cover-place'>
                            <Image className='source-cover' src={'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3806232450,3077456550&fm=26&gp=0.jpg'} />
                            <Image className='source-cover' style="left:16px" src={'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2567670815,24101428&fm=26&gp=0.jpg'} />
                            <Image className='source-cover' style="left:32px" src={'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3849299870,82529265&fm=26&gp=0.jpg'} />
                            <Image className='source-cover' style="left:48px" src={'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=805208618,905828614&fm=26&gp=0.jpg'} />
                        </View>
                      </View>
                      <ColumnNav></ColumnNav>
                    </View>
                  )
                }
                </View>
              </View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
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
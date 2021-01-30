import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Input,Button,Swiper, SwiperItem } from "@tarojs/components";
import { add, minus, asyncAdd } from '../../actions/counter'
import './index.scss'
import mobileImg from "./mobile.png";
import wxImg from "./wx.png";
import noticeImg from "./notice.png";

const tabList= [{
  title: '综合',
  val: 0
}, {
  title: '最新',
  val: 1
}, {
  title: '价格',
  val: 2
},{
  title: '销量',
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
      scrollData:{
          interval: null,
          pace: 1.2, //滚动速度
          interval: 20, //时间间隔
          size: 24, //字体大小in px
          length: 0, //字体宽度
          offsetLeft: 0, //
          windowWidth: 0,
      },
      feedData: [{
        id: 1001,
        name: "母乳喂养",
        checked: false
      },
      {
        id: 1002,
        name: "全奶粉",
        checked: false
      },
      {
        id: 1003,
        name: "混合喂养",
        checked: false
      }
    ],
      modelStatus:false
    };
  }
  componentDidMount () { 
     this.startMarquee();
  }

  componentDidShow () { 
    this.getData();
  }

  componentDidHide () { 
  }

  componentWillReceiveProps (nextProps) {
  }


  //根据viewId查询view的宽度
  //停止跑马灯
  stopMarquee() {
    var that = this;
     let {scrollData:data} = this.state;
    //清除旧的定时器
    if (data != null) {
    clearInterval(that.interval);
    }
  }

  //执行跑马灯动画
  excuseAnimation() {
  let that = this;
  let {scrollData:data} = this.state;
  if (data.length > data.windowWidth) {
   //设置循环
   let interval = setInterval(function() {
   if (data.offsetLeft <= 0) {
    if (data.offsetLeft >= -data.length) {
      data.offsetLeft = data.offsetLeft - data.pace
    } else {
      data.offsetLeft = data.windowWidth
    }
   } else {
    data.offsetLeft = data.offsetLeft - data.pace
   }
   that.setState({
      scrollData: data
    })
   }, data.interval);
  }
  }

  //开始跑马灯
  startMarquee(){
  var that = this;
  let {scrollData:data} = this.state;
  that.stopMarquee();
  //初始化数据
  data.windowWidth = Taro.getSystemInfoSync().windowWidth;
  setTimeout(function(){
    const queryAllWidth = Taro.createSelectorQuery();
    queryAllWidth.select('.notice-tips').boundingClientRect((res) => {
     data.length = res.width - 90;
     that.excuseAnimation();
    }).exec();
  },1000)
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
    this.setState({
      currentListIdx: n,
    });
  }
  
  canModelStatus(is_bool = false){
    this.setState({
      modelStatus:is_bool
    });
  }

  async getData(){
  }

  goQuestionDes(question_id) {
    Taro.navigateTo({
      url: `/pages/question/details/index?id=${question_id}`,
    });
  }

  render () {
    const { currentListIdx, scrollData,modelStatus, isPlay, hotList } = this.state
    return (
      <View className='index'>
        {/* 
        // 搜索框 
        */}
        <View className='search-con G-bg-white'>
          <View className='search-con-input' >
            <View className='iconfont icon-sousuo G-color-a7adb6'></View>
            <Text className='search-con-text search-con-icon G-color-a7adb6'>搜索</Text>
          </View>
        </View>
        <View class="search-con-1">
          <Text className='search-con-text-1 G-Fsize-14 G-color-a7adb6'>搜索</Text>
          <View className='iconfont icon-sousuo G-color-a7adb6 G-Fsize-14 search-con-icon-1'></View>
        </View>
        {/* 
        // 选择
        */}
        <View className='tab G-bg-white fl-row-center'>
          {tabList.map((item, idx) =>
            (
                <View key={idx} className={`tab-item ${currentListIdx == idx ? 'active' : ''}`} onClick={this.changeIdx.bind(this, idx)}>
                  {item.title}
                  {item.title == '价格' && <View className="tab-icon">
                    <Text className="iconfont icon-shang"></Text>
                    <Text className="iconfont icon-xiala"></Text>
                  </View>}
                </View>
            )  
          )
          }
        </View>
        <View class="type-navbar">
        {tabList.map((item, idx) =>
            (
              <View className="type-box fl-row-center">
                <View className="type-navbar-item type-item-on G-Fsize-14">
                    {item.title}
                </View>
            </View>
            )  
          )
          }
        </View>
        {/* 
        //  轮播
        */}
        <Swiper
          className='swiper-item-box'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            {/* <View className='demo-text-1'></View> */}
            <Image className="swiper-item-img" src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg' />
          </SwiperItem>
          <SwiperItem>
            <Image className="swiper-item-img" src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fa0.att.hudong.com%2F52%2F62%2F31300542679117141195629117826.jpg&refer=http%3A%2F%2Fa0.att.hudong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1614394312&t=8a56d12104362963f81febf226acab39' />
          </SwiperItem>
          <SwiperItem>
            <Image className="swiper-item-img" src='https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3363295869,2467511306&fm=26&gp=0.jpg' />
          </SwiperItem>
        </Swiper>
        {/* 
        //  跑马灯
        */}
        {/* <View className="rollCon">
          <View className='box'> 
            <View className="notice-box fl-row-center">
              <Text className="iconfont icon-gonggao G-color-white" />
              <Text className="G-color-white notice-box-text G-Fsize-12">公告</Text>
            </View>
            <View className="notice-tips G-Fsize-14 G-color-white" style={`margin-left:${scrollData.offsetLeft}px`}>
            请问你是谁哈哈哈哈哈哈哈哈哈请问你是哈哈哈哈哈哈哈哈是哈哈哈哈哈哈哈哈
            </View>
            <View className="notice-right fl-row-center" onClick={this.canModelStatus.bind(this,true)}>
               <Text className="iconfont icon-xiangyou G-color-white"></Text>
            </View>
          </View>
        </View> */}
        {/* 
        弹出框
        */}
        <View className={`model-dialog fl-row-center ${modelStatus ? 'show' : ''}`} onClick={this.canModelStatus.bind(this,false)}>
          <View className="dialog-box">12121</View>
        </View>
        {/* 
          固定小icon
        */}
        {/* <Image src={mobileImg} className='mobile-btn fl-column-center' onClick={this.goAskQuestion}></Image>
        <Image src={wxImg} className='wechat-btn fl-column-center' onClick={this.goAskQuestion}></Image> */}
        {/* 
          列表
        */}
        {/* <View className="cu-list">
          <View className="cu-item">
            <View className="content align-center">
              <Image className="content-image" src={wxImg} />
              <Text>销售服务</Text>
            </View>
          </View>
          <View className="cu-item">
            <View className="content align-center">
              <Image className="content-image" src={wxImg} />
              <Text>销售服务112</Text>
            </View>
          </View>
        </View> */}
        {/* 
        表单
        */}
        <View className="connect_select_box">
        <View className="connect_select_form select_row">
          <Text className="connect_select_radio_title G-Fsize-14 G-color-a7adb6">喂养方式:</Text>
          <Button className="connect_select_radio_button G-Fsize-14 G-color-a7adb6">母乳喂养</Button>
          {/* <Button className="connect_select_radio_button active">第二个</Button> */}
          <Button className="connect_select_radio_button active G-Fsize-14">第十三个</Button>
        </View>
        </View>
      </View>
    )
  }
}

export default Index
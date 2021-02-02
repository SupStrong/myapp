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
import { SearchOne } from "../../components/search_list/search_1";
import { SearchTwo } from "../../components/search_list/search_2";
import { SearchThree } from "../../components/search_list/search_3";

import { TabOne } from "../../components/tab_list/tab_1";
import { TabTwo } from "../../components/tab_list/tab_2";
import { SwiperOne } from "../../components/swiper_list/swiper_1";
import { RollCon } from "../../components/static_list/rollcon";
import { FixedBtnOne } from "../../components/btn_list/fixed_btn_1";



// import { Article } from "../../components/article";


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
  }

  componentDidShow () { 
    this.getData();
  }

  componentDidHide () { 
  }

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
        {/* <SearchOne></SearchOne> */}
        {/* <SearchTwo></SearchTwo> */}
        {/* <SearchThree></SearchThree> */}
        {/* 
        // 选择
        */}
        <TabOne></TabOne>
        <TabTwo></TabTwo>
        {/* 
        //  轮播
        */}
        <SwiperOne></SwiperOne>

        {/* 
        //  跑马灯
        */}
        {/* <RollCon></RollCon> */}

        {/* 
        弹出框
        */}
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
        {/* <View className="connect_select_box">
          <View className="connect_select_form select_row">
            <Text className="connect_select_radio_title G-Fsize-14 G-color-a7adb6">喂养方式:</Text>
            <Button className="connect_select_radio_button G-Fsize-14 G-color-a7adb6">母乳喂养</Button>
            <Button className="connect_select_radio_button active G-Fsize-14">第十三个</Button>
          </View>
        </View> */}
        {/* <FixedBtnOne></FixedBtnOne> */}
      </View>
    )
  }
}

export default Index
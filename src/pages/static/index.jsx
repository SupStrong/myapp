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


// article_3
import { TabOne } from "../../components/tab_list/tab_1";
import { TabTwo } from "../../components/tab_list/tab_2";
import { TabThree } from "../../components/tab_list/tab_3";

// import { TabFour } from "../../components/tab_list/tab_3"
// 导航栏
import { NavListOne } from "../../components/nav_list/nav_1";
import { NavListTwo } from "../../components/nav_list/nav_2";

// 广告
import { ArticleOne } from "../../components/article_list/article_1";
import { ArticleTwo } from "../../components/article_list/article_2";
import { ArticleThree } from "../../components/article_list/article_3";
import { ArticleFour } from "../../components/article_list/article_4";
import { ArticleFive } from "../../components/article_list/article_5";

// 商品列表
import { GoodsListOne } from "../../components/good_list/good_1";


import { SwiperOne } from "../../components/swiper_list/swiper_1";
import { SwiperTwo } from "../../components/swiper_list/swiper_2";

import { RollCon } from "../../components/static_list/rollcon";
import { ScrollTop } from "../../components/static_list/scroll_top";
import { DropSide } from "../../components/static_list/drop_side";

import { FixedBtnOne } from "../../components/btn_list/fixed_btn_1";
import { PopupBoxOne } from "../../components/popup_list/popup_1";
import { PopupBoxTwo } from "../../components/popup_list/popup_2";
// 收缩提示
import { ShrinkOne } from "../../components/shrink_list/shrink_1";


// import { Article } from "../../components/article";

// 下拉 DropDownOne
// import { DropDownOne } from "../../components/dropdown_list/dropdown_1";

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
      modelStatus:false,
      isShow:0
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
  goMobile(){
    this.setState({
      isShow:true
    });
    console.log(this.state.isShow);
  }
  async getData(){
  }
  closePopup(value){
    console.log(value);
    this.setState({
      isShow:value
    });
  }
  goQuestionDes(question_id) {
    Taro.navigateTo({
      url: `/pages/question/details/index?id=${question_id}`,
    });
  }

  render () {
    const { currentListIdx, scrollData,modelStatus, isPlay, hotList,isShow } = this.state
    return (
      <View className='index'>
        {/* 
        // 搜索框 
        */}
        {/* <SearchOne></SearchOne> */}
        {/* <SearchTwo></SearchTwo> */}
        {/* <SearchThree></SearchThree> */}
        {/* 
        // 选择 tab
        */}
        {/* <TabOne></TabOne> */}
        {/* <TabTwo></TabTwo> */}
        {/* <TabThree></TabThree> */}
        {/* <TabFour></TabFour> */}
        {/* 
        //  跑马灯
        */}
        {/* <RollCon></RollCon> */}
        {/* 
        //  轮播 
        */} 
        {/* <SwiperOne></SwiperOne> */}
        <SwiperTwo></SwiperTwo>
        {/* 
           导航栏 nav
        */}
         <NavListOne></NavListOne>
         {/* <NavListTwo></NavListTwo> */}
        {/*  */}
         {/* <ScrollTop></ScrollTop> */}
         {/* <DropSide></DropSide> */}
         {/* 广告 */}
         {/* <ArticleOne></ArticleOne>
         <ArticleTwo></ArticleTwo>
         <ArticleThree></ArticleThree>
         <ArticleFour></ArticleFour>
         <ArticleFive></ArticleFive> */}
         
        {/* <RollCon></RollCon> */}
        {/* 
        下拉框
        */}
        {/* <DropDownOne></DropDownOne> */}
        {/* 
        弹出框
        */}
        {/* 
          固定小icon
        */}
        <View className="mobile-btn">
          <Image src={mobileImg} className='mobile-btn fl-column-center' onClick={this.goMobile.bind(this)}></Image>
        </View>
        {/* <View className="wechat-btn">
          <Image src={wxImg}  className='wechat-btn-img fl-column-center' onClick={this.goAskQuestion}>
          </Image>
          <Button className="wechat-btn-service" open-type="contact"></Button>
        </View> */}
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
          商品列表
        */}
        {/* <GoodsListOne></GoodsListOne> */}
        {/* 
        表单
        */}
        {/* <FixedBtnOne></FixedBtnOne> */}
        {/* 
        弹窗 
        */}
        {/* <PopupBoxOne></PopupBoxOne> */}
        {/* <PopupBoxTwo setShow={isShow} setPopupShow={this.closePopup.bind(this)}></PopupBoxTwo> */}
        {/* 收缩提示 */}
        {/* <ShrinkOne></ShrinkOne> */}
      </View>
    )
  }
}

export default Index
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

class ShrinkOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData:[{
        id:'1',
        title:'报名条件',
        text:'湖南将选取部分县重点帮扶乡村振兴，支持湘赣边区创建有效衔接示范区；安徽提出实施乡村产业振兴计划，打造千亿级产值农业产业化集群；四川围绕建设宜居宜业乡村，统筹县域城镇和村庄规划建设……在近段时间召开的地方两会上，乡村振兴成为关注点。',
        isShow:false,
      },
      {
        id:'2',
        title:'报名时间',
        text:'2011-10-11 20:20:20',
        isShow:false
      }]
    };
  }
  componentWillUnmount () { 
  }

  componentDidShow () { 
    this.getData()
  }
  showClass(c_id){ 
    let { postData } = this.state;
    let c_item = postData.find((item) => item.id == c_id);
    c_item['isShow'] = !c_item['isShow'];
    this.setState({
      postData
    })
  }

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    const { postData } = this.state
    return (
      <View>
        {postData.map((item, idx) =>(
            <>
              <View className="classroom" onClick={this.showClass.bind(this,item.id)} data-index={item.id}>
                  <View className="sign"></View>
                  <View className="class-title">{item.title}</View>
                  <View className="icon-class">
                      {item.isShow ? 
                      <Text className="iconfont icon-xiangyou1"></Text>
                       : 
                      <Text className="iconfont icon-xiangxia"></Text>}
                  </View>
              </View>
              <View class={`class-detail ${item.isShow ? 'animation' : ''}`}>{item.text}</View> 
              {/* {item.isShow ? <View class="class-detail animation"></View> : null} */}
            </>
        ))}
      </View>
      
    )
  }
}

export { ShrinkOne };

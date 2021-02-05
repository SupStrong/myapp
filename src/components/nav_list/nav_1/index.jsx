import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View,Text, Image } from "@tarojs/components";
import './index.scss'
import timePng from './time.png'
let iconList = [[{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
}],[{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
},{
  icon:timePng,
  title:'签到有礼'
}]]
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)
class NavListOne extends Component {
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

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="single-box">
        {iconList.map((item,index) => 
          (
            <View className="more">
              {item.map((i_item,i_inex) => 
              (
                <View className="fl-column-center box">
                  <View className="fl-column-center box-image">
                    <Image className="box-image-item" src={i_item.icon}></Image>
                  </View>
                  <View className="fl-row-center G-Fsize-12 G-color-333 G-Mt-10">{i_item.title}</View>
                </View>
              ))}
            </View>
          ))}
      </View>
    )
  }
}

export { NavListOne };

import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button } from "@tarojs/components";
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'
const tabList= [{
  title: '关注',
  val: 0
}, {
  title: '推荐',
  val: 1
}, {
  title: '热榜',
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
      currentListIdx: 1,
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  changeIdx(n) {
    if (n == this.state.currentListIdx) {
      return false
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { currentListIdx } = this.state
    return (
      <View className='index'>
        <View className='tab fl-row-center'>
          {tabList.map((item, idx) =>
            (
              <View key={idx} className={`tab-item ${currentListIdx == idx ? 'active' : ''}`} onClick={this.changeIdx.bind(this, idx)}>{item.title}</View>)
          )
          }
          <View className='tab-item' onClick={this.linkToTime}>倒计时</View>
        </View>
      </View>
    )
  }
}

export default Index
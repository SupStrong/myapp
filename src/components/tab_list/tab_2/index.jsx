import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";
import './index.scss'

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

class TabTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListIdx:0
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

  changeIdx(n) {
    if (n == this.state.currentListIdx) {
      return false
    }
    this.setState({
      currentListIdx: n,
    });
  }
  
  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View class="type-navbar">
        {tabList.map((item, idx) =>
          (
            <View className="type-box fl-row-center">
              <View className={`type-navbar-item c G-Fsize-14 ${currentListIdx == idx ? 'type-item-on' : ''}`} onClick={this.changeIdx.bind(this, idx)}>
                  {item.title}
              </View>
          </View>
          )  
        )
        }
      </View>
    )
  }
}

export { TabTwo };

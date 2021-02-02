import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Input, Button ,Icon } from "@tarojs/components";
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

class SearchThree extends Component {
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
      <View class="search G-fx-c">
          <Icon size="14" type="search" className="search-icon"></Icon>
          <Input confirmType="search" className="search-input" name="keyword" disabled placeholder="请输入相关职位名称" placeholderClass="search_plac" type="text"></Input>
          <Button className="search-btn" formType="submit">搜索</Button>
      </View>
    )
  }
}

export { SearchThree };
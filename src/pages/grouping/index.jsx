import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, Button } from "@tarojs/components";
import { add, minus, asyncAdd } from '../../actions/counter'

import './index.scss'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cateItemsData: [
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
      ],
      cateItems:['123','222','111']
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {cateItemsData ,cateItems } = this.state;
    return (
      <View className='index'>
        <View className="nav_left">
          {
            cateItems.map((item, idx) => 
              <View className="nav_left_items">{item}</View>
            )
          }
        </View>
        <View className="nav_right">
          <View className="listBrand">
            {
            cateItemsData.map((item, idx) => 
              <View className="brand">
                <Image className='img' src={'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3806232450,3077456550&fm=26&gp=0.jpg'} />
                <View className="brandName G-one-cloum">123</View>
              </View>
            )
            }
          </View>
        </View>
    </View>
    )
  }
}

export default Index
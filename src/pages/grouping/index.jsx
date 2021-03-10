import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, ScrollView, Block } from "@tarojs/components";
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
      navLeftItems:[
        "热门推荐",
        "手机数码",
        "女装内衣",
        "男装内衣",
        "家用电器",
        "鞋靴箱包",
        "运动户外",
        "电脑办公",
        "美妆护肤",
        "个护清洁",
        "生活充值",
        "家用建材",
        "家居家纺"
      ],
      navRightItems:[
          [
              {
                  "title":"热门分类",
                  "desc":[
                      {
                          "text":"U盘",
                          "img":"/image/classNameify/usb.png"
                      },
                      {
                          "text":"牛奶",
                          "img":"/image/classNameify/milk.png"
                      },
                      {
                          "text":"充电宝",
                          "img":"/image/classNameify/power.png"
                      },
                      {
                          "text":"洗衣液",
                          "img":"/image/classNameify/laundry.png"
                      },
                      {
                          "text":"男士内裤",
                          "img":"/image/classNameify/briefs.png"
                      },
                      {
                          "text":"耳机",
                          "img":"/image/classNameify/headset.png"
                      },
                      {
                          "text":"路由器",
                          "img":"/image/classNameify/router.png"
                      },
                      {
                          "text":"吃鸡神器",
                          "img":"/image/classNameify/game.png"
                      },
                      {
                          "text":"剃须刀",
                          "img":"/image/classNameify/shaver.png"
                      },
                      {
                          "text":"大闸蟹",
                          "img":"/image/classNameify/crab.png"
                      }
                  ]
              },
              {
                  "title":"热卖手机",
                  "desc":[
                      {
                          "text":"小米",
                          "img":"/image/classNameify/miphone.png"
                      },
                      {
                          "text":"华为",
                          "img":"/image/classNameify/huawei.png"
                      },
                      {
                          "text":"vivo",
                          "img":"/image/classNameify/phone.png"
                      }
                  ]
              },
              {
                  "title":"家电热搜",
                  "desc":[
                      {
                          "text":"微波炉",
                          "img":"/image/classNameify/microwave.png"
                      },
                      {
                          "text":"电饭煲",
                          "img":"/image/classNameify/cooker.png"
                      }
                  ]
              }
          ],
          [
              {
                  "title":"手机品牌",
                  "desc":[
                      {
                          "text":"小米",
                          "img":"/image/classNameify/miphone.png"
                      },
                      {
                          "text":"华为",
                          "img":"/image/classNameify/huawei.png"
                      },
                      {
                          "text":"vivo",
                          "img":"/image/classNameify/phone.png"
                      }
                  ]
              },
              {
                  "title":"手机配件",
                  "desc":[
                      {
                          "text":"充电宝",
                          "img":"/image/classNameify/power.png"
                      },
                      {
                          "text":"耳机",
                          "img":"/image/classNameify/headset.png"
                      },
                      {
                          "text":"吃鸡神器",
                          "img":"/image/classNameify/game.png"
                      }
                  ]
              }
          ]
      ],
      curIndex:0
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  switchRightTab(e) {
    let index = parseInt(e.currentTarget.dataset.index);
    this.setState({
      curIndex: index
    })
  }

  showListView(e) {
    let txt = e.currentTarget.dataset.txt;
    //导航跳转方法
    // wx.navigateTo({
    //   url: '/pages/list/index?title='+txt,
    // })
  }
  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {navLeftItems ,navRightItems,curIndex } = this.state;
    return (
      <View className='index'>
       <View className="category">
        <ScrollView className="nav-left" scroll-y="true">
          {navLeftItems.map((item,index) =>(
            <Block>
              <View className={`nav-left-items ${curIndex == index ? 'nav-left-item-active' : ''}`} data-index="{{index}}" onClick={this.switchRightTab.bind(this)}>
              {item}
              </View>
            </Block>
          ))}
        </ScrollView>
        <ScrollView className="nav-right" scroll-y="true">
          {navRightItems[curIndex] ? (
            <View>
              {navRightItems[curIndex].map((item,index) =>(
                <Block key={index}>
                  <View className="jd-category">
                    <View>{item.title}</View>
                    <View className="jd-category-wrap">
                      {item.desc.map((i_item,i_index) =>(
                        <Block item={i_item} key={i_index}>
                        <View className="jd-category-style" data-txt={i_item.text} onClick={this.showListView.bind(this)}>
                          <Image className="list-img" src={i_item.img} />
                          <Text className="list-text">{i_item.text}</Text>
                        </View>
                      </Block>  
                      ))}
                    </View>
                  </View>
                </Block>
              ))}
            </View>
          ) : null }
        </ScrollView>
      </View>
 
      </View>
    )
  }
}

export default Index
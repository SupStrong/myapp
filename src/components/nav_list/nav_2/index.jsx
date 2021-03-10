import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View,Text, Image,ScrollView,Block } from "@tarojs/components";
import './index.scss'
import onePng from './1.png'
import twoPng from './2.png'
import threePng from './3.png'
import fourPng from './4.png'
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)
class NavListTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr:[
        {
            "id":2,
            "name":"自营库",
            "sort_order":1,
            "status":1,
            "link":null,
            "add_time":null,
            "namee":null,
            "t_id":2,
            "pic":"https://symc.shengguweb.com/uploads/images/20200415/379bb26e77aab0460c8ccf00dcff6d97.png",
        },
        {
            "id":1,
            "name":"长青库",
            "sort_order":2,
            "status":1,
            "link":null,
            "add_time":null,
            "namee":null,
            "t_id":2,
            "pic":"https://symc.shengguweb.com/uploads/images/20200415/9983f2f02ab157ff80b7d72a76de20de.png",
        },
        {
            "id":4,
            "name":"东贸库",
            "sort_order":3,
            "status":1,
            "link":null,
            "add_time":null,
            "namee":null,
            "t_id":1,
            "pic":"https://symc.shengguweb.com/uploads/images/20200415/ff17295fdee66b1bcf682059a0088bd1.png",
        },
        {
            "id":5,
            "name":"永强库",
            "sort_order":4,
            "status":1,
            "link":null,
            "add_time":null,
            "namee":null,
            "t_id":1,
            "pic":"https://symc.shengguweb.com/uploads/images/20200415/632b738d7b85b1b6ccb31b7dabd13dd4.png",
        },
        {
            "id":6,
            "name":"敬请期待",
            "sort_order":5,
            "status":1,
            "link":null,
            "add_time":null,
            "namee":null,
            "t_id":1,
            "pic":"https://symc.shengguweb.com/uploads/images/20200429/03bb93394f757baca702dab640911487.png",
        }
      ]
    };
  }
  componentWillUnmount () { 
  }

  componentDidShow () { 
    this.getData()
   }
  warehouse(e){
    console.log("2");
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    const { dataArr } = this.state
    return (
      <View className="page-section-spacing G-Mt-5">
        <ScrollView className="scroll-view-h" scroll-x="true" style="width: 100%">
            {dataArr.map((item,index) =>(
              <Block key={index}>
                  <View className="scroll-view-item-h" onClick={this.warehouse.bind(this)}>
                  <View className="warehouseImg">
                    <Image src={item.pic}></Image>
                  </View>
                  <View className="warehouseName">
                  {item.name}
                  </View>
                </View>
              </Block>
              ))}
        </ScrollView>
      </View>

    )
  }
}

export { NavListTwo };

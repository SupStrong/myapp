import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, Block,Video } from "@tarojs/components";
import './index.scss'
import jia_1 from './jia20.png'
import jian_2 from './jian20.png'
import tu_3 from './tu220.png'
import x_4 from './x44.png'
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class PopupBoxTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArr:{
        "info":{
            "id":53,
            "goods_name":"娃哈哈",
            "cate_id_1":1,
            "cate_id_2":11,
            "cate_id_3":46,
            "stock":20,
            "sales":0,
            "ssales":10,
            "img_id":"https://symc.shengguweb.com/",
            "img_ids":"",
            "spec":2,
            "price_1":"0.00",
            "price_2":"0.00",
            "price_3":"0.00",
            "price_4":"0.00",
            "price_5":"0.00",
            "type":1,
            "message":"2222",
            "content":"",
            "d_id":0,
            "yprice":null,
            "sort_order":1,
            "status":1,
            "add_time":1591348829,
            "price":null,
            "is_ji":-1,
            "integral":"0.00",
            "store_id":0,
            "is_t":0,
            "is_x":1,
            "liulan":47,
            "unit":"个",
            "tax":0,
            "freight":"0.00",
            "sliulan":0,
            "tong":0,
            "tong_id":"1,2",
            "collect":0
        },
      }, 
      number:1,
      spec:[
        {
            "id":187,
            "spec_name":"重量",
            "con":[
                {
                    "id":189,
                    "spec_name":"3kg"
                },
                {
                    "id":188,
                    "spec_name":"1kg"
                }
            ]
        }
    ]
    };
  }
  componentWillUnmount () { 
  }

  componentDidShow () { 
    this.getData()
   }
  close (){
    this.setState({
      isShow:false
    })
  }
  spec(e){
    var that = this
    var index = e.currentTarget.dataset.index
    var indexOne = e.currentTarget.dataset.indexOne
    var spec = this.state.spec;
      for(var n = 0;n < spec[index].con.length;n++){
        if(n != indexOne){
          spec[index].con[n].type = false
        } else{
          spec[index].con[n].type = true
        }
        if( n + 1 == spec[index].con.length){
          that.setState({
            spec: spec
          })
        }
      }
  }
  onClick(){
    var spec = this.state.spec
    spec.number = this.state.number
    // this.triggerEvent('onClick',spec)
    this.setState({
      isShow:true
    })
  }
  onAdd(){
    this.setState({
      number: this.state.number++
    })
  }
  reduce(){
    if(this.state.number > 1){
      this.setState({
        number: this.state.number--
      })
    }
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  render () {
    const { spec,number } = this.state
    const { shows = 0 } = this.props
    console.log(shows);
    return (
      <>
      {shows == 1 ? 
      <View className="specsPopup maskOne">
        <View className="specsPopupOne">
          <View className="specsPopupSpecs">
            <View className="specsPopupTt">
              <View className="specsPopupGoodsImg">
                <Image src={tu_3}></Image>
              </View>
              <View className="specsPopupTitle">
                <View className="specsPopupPrice">
                  <View className="specsPopupIcon fontColor">￥</View>
                  <View className="specsPopupPriceNum fontColor">220</View>
                </View>
                <View className="specsPopupStock">
                  库存 2200件
                </View>
              </View>
            </View>
            <View className="specsPopupClose" onClick={this.close.bind(this)}>
              <Image src={x_4}></Image>
            </View>
          </View>
          <View className="specsPopupTwo">
            {spec.map((item,index)=>(
              <>
                <Block key={index}>
                  <View className="specsPopupSpecsText">
                    {item.spec_name}
                  </View>
                  <View className="specsPopupSpecsNum">
                    {item.con.map((i_item,i_index) =>(
                    <>
                      <Block key={i_index}>
                        <View className={`specsPopupList ${i_item.type == true?'specsPopupListOne':''}`} onClick={this.spec.bind(this)} data-index={index} data-indexOne={i_index}>
                          {i_item.spec_name}
                        </View>
                      </Block>
                    </>
                    ))}
                  </View>
                </Block>
              </>
            ))}
          </View>
          <View className="specsPopupNum">
            <View className="specsPopupNumText">
              数量
            </View>
            <View className="specsPopupNumAdd">
              <View className="specsPopupNumAddImg" onClick={this.reduce.bind(this)}>
                <Image src={jian_2}></Image>
              </View>
              <View className="specsPopupNumOne">{number}</View>
              <View className="specsPopupNumAddImg" onClick={this.onAdd.bind(this)}>
                <Image src={jia_1}></Image>
              </View>
            </View>
          </View>
        </View>
        <View className="specsPopupButton" onClick={this.onClick.bind(this)}>
          <View className="specsPopupText">确定</View>
        </View>
      </View>
      :null}
      </>   
    )
  }
}

export { PopupBoxTwo };

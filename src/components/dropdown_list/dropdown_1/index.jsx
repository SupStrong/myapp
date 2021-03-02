import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video,Block,ScrollView } from "@tarojs/components";
import './index.scss'
import TopredImg from './top-red.png'
import BottomImg from './buttom.png'
import DuiImg from './dui.png'

function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class DropDownOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCars: !0,
      isSort: !0,
      isPrice: !0,
      isType: 0,
      loadMore: "",
      list: [],
      house_list: [],
      housetypelist: [{
        name: "初中",
        id: 1
      }, {
          name: "高中",
          id: 2
      }, {
          name: "中技",
          id: 3
      }, {
          name: "中专",
          id: 4
      }, {
          name: "大专",
          id: 5
      }, {
          name: "本科",
          id: 6
      }, {
          name: "硕士",
          id: 7
      }, {
          name: "博士",
          id: 8
      }, {
          name: "博后",
          id: 9
      }],
      houseareaid: 0,
      housepriceid: 0,
      housetype: 0,
      page: 1,
      title: "",
      typeid: 0,
      carid: 0,
      priceid: 0
    };
  }
  componentWillUnmount () { 
  }

  componentDidShow () { 
    this.getData()
   }

  componentDidHide () { }
    selectCars() {
        this.setState({
            isSort: !0,
            isPrice: !0,
            isType: !0,
            isCars: !this.state.isCars
        });
    }
    selectPrice() {
        this.setState({
            isSort: !0,
            isCars: !0,
            isType: !0,
            isPrice: !this.state.isPrice
        });
    }
    selectType() {
        this.setState({
            isSort: !0,
            isCars: !0,
            isPrice: !0,
            isType: !this.state.isType
        });
    }
    selecttypeitem(t){
      var e = t.currentTarget.id, a = t.currentTarget.dataset.title;
      console.log(t);
      this.setState({
          typeid: e,
          isType: !0,
          typetitle: a
      })
  }
  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { isSort, isCars, isPrice, isType,title,price,typetitle = '',typeid,carid,priceid,housetypelist } = this.state
    return (
      <View>
        <View className="list_sort">
          <View onClick={this.selectCars.bind(this)} className={`sort_list' ${isCars?'':'select'}`}>
              <Text>{title==''?'区域':title}</Text>
              <Image src={`${isCars? BottomImg:''}`} />
          </View>
          <View onClick={this.selectPrice.bind(this)} className={`sort_list' ${isPrice?'':'select'}`}>
              <Text>{price==''?'职业类别':price}</Text>
              <Image src={`${isPrice? BottomImg :TopredImg}`} />
          </View>
          <View onClick={this.selectType.bind(this)} className={`sort_list' ${!isType?'':'select'}`}>
              <Text>{typetitle==''?'学历':typetitle}</Text>
              <Image src={`${!isType? BottomImg : TopredImg}`} />
          </View>
        </View>
        {/*  */}
      {isType ? <View className="select_sort" hidden={isType}>
            <ScrollView className="bigWrap" scrollY="true" style="height:600rpx; left: 0; top:0; bottom: 0; right: 0;padding:0 10px">
                <View onClick={this.selecttypeitem.bind(this)} className={`select_cars_list ${typeid==0?'colorred':''}`} data-title="不限" id="0">
                    <Text>不限</Text>
                    {typeid == 0 && <Image src={DuiImg} />}
                </View>
                {housetypelist.map((item, idx) =>
                  (
                    <View>
                        {item.id == typeid ?
                          <View onClick={this.selecttypeitem.bind(this)} className="select_cars_list colorred"  data-title={item.name} id={`${item.id}`}>
                              <Text>{item.name}</Text>
                              <Image src={DuiImg} />
                          </View> :
                          <View onClick={this.selecttypeitem.bind(this)} className="select_cars_list"  data-title={item.name} id={`${item.id}`}>
                              <Text>{item.name}</Text>
                          </View>
                        }
                    </View>
                  )  
                )}
            </ScrollView>
        </View> : null}
        
      </View>
      
    )
  }
}

export { DropDownOne };

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

class ArticleFive extends Component {
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
  seckill(){
    console.log("!");
  }
  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }
  
  render () {
    const { currentListIdx, isControls, isPlay, hotList } = this.state
    return (
      <View className="article-5 G-Mt-5">
        <View className="arrondi">
          <View className="arrondi-left" onClick={this.seckill.bind(this)}>
            <Image src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3815183919,1036258231&fm=26&gp=0.jpg" />
          </View>
          <View className="arrondiRight">
            <View className="arrondi-right" onClick={this.seckill.bind(this)} data-id="1">
              <Image src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3765049683,2494398758&fm=26&gp=0.jpg" />
            </View>
            <View className="arrondi-right" onClick={this.seckill.bind(this)} data-id="2">
              <Image src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.shenyanglawyer.com.cn%2Fimg.php%3Fpic1.win4000.com%2Fwallpaper%2F4%2F5480056682ab6.jpg&refer=http%3A%2F%2Fwww.shenyanglawyer.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1617714217&t=2b34820536950945aa044433fb17bd75" />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export { ArticleFive };

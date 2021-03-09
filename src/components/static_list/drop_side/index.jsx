import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { View, Image, Text, Button,Swiper, SwiperItem,Video } from "@tarojs/components";
import './index.scss'

let startX = '';
function mapStateToProps(state) {
  return {
  };
}
function mapDispatchToProps(dispatch) {
  return {
  };
}
@connect(mapStateToProps, mapDispatchToProps)

class DropSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      questionList: [
        {
            "id":227,
            "title":"戴森是个什么东东，好不好"
        },
        {
            "id":226,
            "title":"戴森好不好"
        },
        {
            "id":225,
            "title":"我购买了兰舍和戴森看一下能不能匹配上"
        }
    ],
      xTrans: 0,
      bye: false,
      come: false,
      trans: true,
    };
  }
  componentWillUnmount () { 
  }
  componentDidMount () {
    // this.startMarquee();

  }
  componentDidShow () { 
    this.getData()
   }

  componentDidHide () { }

  componentWillReceiveProps (nextProps) {
  }

  getCurrentPlace(event) {
    startX = event.touches[0].clientX;
    this.setState({
      bye: false,
      come: false,
      trans: true
    })
  }
  changePlace(event) {
    this.setState(
      {
        xTrans: event.touches[0].clientX - startX
      }
    )
  }
  removePlace(e) {
    e.preventDefault()
    if (Math.abs(this.state.xTrans) > 90) {
      this.setState({
        bye: true,
      })
      setTimeout(() => {
        this.setState({
          come: true,
          trans: false,
          xTrans: 0
        })
        this.cutQuestion()
      }, 80);
    } else {
      this.setState({
        xTrans: 0
      })
    }
  }
  async cutQuestion() {
    let questionList = [];
    if (this.state.questionList.length <= 2) {
      if (this.state.page != 0) {
        await this.getQuestionItem()
      } else {
        this.setState({ page: 1 }, async () => {
          await this.getQuestionItem()
        })
      }
    }
    questionList = [...this.state.questionList];
    questionList.splice(0, 1)

    this.setState({ questionList })
  }
  async getQuestionItem() {
    let { data, message, status } = await API_QUESTION_U_ANSWER({
      page: this.state.page
    })
    if (!status) {
      showPopup(message)
      return false
    }
    let questionList = [...this.state.questionList, ...data.items]
    this.setState({
      questionList,
      page: data.next_page
    })

  }
  goQuestion() {
    let id = this.state.questionList.length > 0 ? this.state.questionList[0].id : ''
    Taro.setStorageSync('mine_choose_question', id)
    Taro.navigateTo({
      url: `/pages/question/details/index?id=${id}`,
    });
  }  
  render () {
    let bottomTit
    if (this.state.questionList.length == 1) {
      bottomTit = this.state.questionList[0].title
    } else if (this.state.questionList.length > 1) {
      bottomTit = this.state.questionList[1].title
    }
    return (
      <View className="drop-side G-Mt-5">
        <View className='card-index'>
          <View className='card-con'>
            <View className='bottom-cover' >
              <View className='swiperview'>
                <View className='title G-Fsize-14'>{bottomTit}</View>
              </View>
              <View className='sign G-Fsize-12'>滑动换一个</View>
              <View className='btn G-Fsize-14'>回答问题</View>
            </View>
            <View
              className={` top-cover ${this.state.come ? 'come' : ''} ${this.state.bye ? 'bye' : ''} ${this.state.trans ? 'trans' : ''} `}
              style={`transform:translateX(${this.state.xTrans}px)`}
              onTouchStart={this.getCurrentPlace.bind(this)}
              onTouchMove={this.changePlace.bind(this)}
              onTouchEnd={this.removePlace.bind(this)}
            >
              <View className='swiperview'>
                {
                  this.state.questionList.map((item, index) => (
                    index == 0 && <View className='title G-Fsize-14'>{item.title}</View>
                  ))
                }
              </View>
              <View className='sign G-Fsize-12'>滑动换一个</View>
              <View className='btn G-Fsize-14' onClick={this.goQuestion.bind(this)}>回答问题</View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export { DropSide };

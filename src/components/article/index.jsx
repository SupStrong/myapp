import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";

import "./index.scss";
import { Column } from '../column';

class Article extends Component {
  constructor(props) {
    super(props);
  }

  goQuestionDes(question_id) {
    Taro.navigateTo({
      url: `/pages/question/details/index?id=${question_id}`,
    });
  }

  render() {
    let { listData } = this.props;
    console.log(listData,"listData");
    return (
      <View className="list-article">
        <View className="list-article-item">
        {
          listData.map((item,idx) =>
            <View className='list-item G-Mt-5' key={idx} >
              <View className='item-con fl-row-grid' onClick={this.goQuestionDes.bind(this,item.id)}>
                <View className='title G-Fsize-18'>你好啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈你好啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</View>
                <View className='cover-place'>
                    <Image className='source-cover' src={'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3806232450,3077456550&fm=26&gp=0.jpg'} />
                    <Image className='source-cover' style="left:16px" src={'https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2567670815,24101428&fm=26&gp=0.jpg'} />
                    <Image className='source-cover' style="left:32px" src={'https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3849299870,82529265&fm=26&gp=0.jpg'} />
                    <Image className='source-cover' style="left:48px" src={'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=805208618,905828614&fm=26&gp=0.jpg'} />
                </View>
              </View>
              <Column message='嘻嘻和' />
            </View>
          )
        }
        </View>
      </View>
    );
  }
}

export { Article };

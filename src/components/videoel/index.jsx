import React, { Component } from "react";
import { View, Image, Video } from "@tarojs/components";

import "./index.scss";
// import { Column } from "./column";

class VideoEl extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { message, extClass='', btnMessage='' } = this.props;
    return (
      <View className="list-funny">
        <View className="list-funny-item">
        <View className='video'>
          <View className='video-paly'>
            <Video id='answerVideo' src={'https://cw100.oss-cn-beijing.aliyuncs.com/renovation/202012/03/PTeDSc87He'}
              object-fit='cover'
              controls={false}
              direction='0'
              enablePlayGesture={true}
              show-center-play-btn={false}
              onPlay={() => {
                this.setState({ isPlay: false, isControls: true })
              }}
              onPause={() => {
                this.setState({ isPlay: true, isControls: false })
              }}
              onEnded={() => {
                videoContext.exitFullScreen()
              }}
            >
            </Video>
            {isPlay ? <View className="video-title G-color-white">你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨你好阿萨</View> : null}
            {
              isPlay ? 
              <View className='play' onClick={() => { videoContext.play() }}>
                <View className='iconfont iconshipin'></View>
              </View> 
              : 
              null
            }
          </View>
        </View>
        <Column></Column>
      </View>
    </View>
    );
  }
}

export { VideoEl };

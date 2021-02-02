import Taro from "@tarojs/taro";
import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Text, Input,Picker,RadioGroup,Radio,Label,CheckboxGroup,Checkbox,Textarea } from "@tarojs/components";
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
        title: "",
        special: "",
        imagelist: [],
        uploadimagelist: [ "", "", "", "", "", "" ],
        true1: !0,
        true2: !0,
        true3: !0,
        true4: !0,
        true5: !0,
        true6: !0,
        arealist: [],
        areaidindex: 0,
        jobcate: [],
        jobcateid: 0,
        toplist: [],
        areaid: 0,
        toplistid: 0,
        sex: 1,
        speciallist: [ {
            name: "五险一金",
            checked: !1
        }, {
            name: "补充医疗保险",
            checked: !1
        }, {
            name: "员工旅游",
            checked: !1
        }, {
            name: "交通补贴",
            checked: !1
        }, {
            name: "餐饮补贴",
            checked: !1
        }, {
            name: "出国机会",
            checked: !1
        }, {
            name: "年终奖金",
            checked: !1
        }, {
            name: "定期体检",
            checked: !1
        } ],
        birthday: [ "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990" ],
        birthdayindex: -1,
        birthdayname: "",
        education: [ "初中以上", "高中以上", "中技以上", "中专以上", "大专以上", "本科以上", "硕士以上", "博士以上", "博后" ],
        educationindex: 0,
        educationname: "",
        express: [ "无经验", "1年以下", "1-3年", "3-5年", "5-10年", "10年以上" ],
        expressindex: -1,
        expressname: "",
        currentstatus: [ "我目前已离职,可快速到岗", "我目前在职，但考虑换个新环境", "观望有好的机会再考虑", "目前暂无跳槽打算", "应届毕业生" ],
        currentstatusindex: -1,
        currentstatusname: "",
        worktype: [ "全职", "兼职", "实习" ],
        worktypeindex: -1,
        worktypename: "",
        money: [ "1千~2千/月", "1千~2千/月", "2千~3千/月", "3千~4千/月", "4千~5千/月", "5千~1万/月", "1万以上/月" ],
        moneyindex: -1,
        moneyname: "",
        id: 0,
        cateItems:['123','222','111'],
        groupNav:0
    };
  }
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  checkboxChange = e => {
      console.log(e.detail.value);
  }
  radioChange = e => {
      console.log(e.detail.value);
  }
  bindEducationChange = e => {
      this.setState({
        educationindex:e.detail.value,
        educationname: this.state.education[e.detail.value]
      })
  }
  render () {
    const {jobcate,education,educationname,educationindex,speciallist } = this.state;
    return (
      <View className='container'>
        <View className="main fl-column-center">
          <View className="title G-Fsize-14">招聘职位编辑</View>
          <View className="list G-bg-white fl-column-center ">
            <View className="item G-flex-cb">
                <View className="name G-Fsize-14">工作职位</View>
                <View className="selectitem">
                    <Input name="jobtitle" className="G-Fsize-14" placeholder="请输入意向职位" type="text" value=""></Input>
                </View>
            </View>
            <View className="item G-flex-cb">
                <View className="name G-Fsize-14">学历要求</View>
                <View className="selectitem">
                    <Picker onChange={this.bindEducationChange} range={education} rangeKey="" value={educationindex}>
                        <View className="picker G-Fsize-14">{educationname || '请选择学历要求'}</View>
                    </Picker>
                </View>
            </View>
            <View className="item G-bg-white G-flex-cb">
                <View className="name G-Fsize-14">性 别</View>
                <View className="selectitem">
                    <RadioGroup onChange={this.radioChange} className="radio-group ">
                        <Label className="radio G-Fsize-14 G-Mr-5">
                            <Radio checked="" value="1"></Radio>男</Label>
                        <Label className="radio G-Fsize-14 G-Mr-5">
                            <Radio checked="" value="2"></Radio>女</Label>
                        <Label className="radio G-Fsize-14">
                            <Radio checked="" value="0"></Radio>不限</Label>
                    </RadioGroup>
                </View>
            </View>
          </View>
        </View>
        <View className="main fl-column-center">
            <View className="title G-Fsize-14">特色服务</View>
            <View className="checklist G-bg-white">
                <CheckboxGroup className="multiple-select " onChange={this.checkboxChange}>
                    {speciallist.map((item, idx) =>(
                        <View className="checkitem G-Fsize-14 G-Mt-10">
                            <Checkbox checked={item.checked?true:false} name="special" className="G-Fsize-14" value="{{item.name}}"></Checkbox>{item.name}
                        </View>
                    ))}
                </CheckboxGroup>
            </View>
        </View>
        <View className="main fl-column-center">
            <View className="title G-Fsize-14">职位描述</View>
            <View className="list G-bg-white fl-column-center">
                <View className="item">
                    <View className="selectitem" style="width:100%;">
                        <Textarea className="textarea G-Fsize-14" name="content" placeholder="请填写自我介绍及工作经历" value='11'></Textarea>
                    </View>
                </View>
            </View>
        </View>
      </View>
    )
  }
}

export default Index
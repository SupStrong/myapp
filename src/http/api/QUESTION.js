import Http from '../config'


const http = new Http()

//获取问答列表
export const API_QUESTION_LIST = (data) => http.get(`question/list`, data)


//提交问题
export const API_QUESTION_SAVE = (data) => http.post(`question/save`, data)

//删除问题
export const API_QUESTION_DELETE = (data) => http.post(`question/delete/${data.id}`, data)

//获取问题详情
export const API_QUESTION_SHOW = (data) => http.get(`question/show/${data.id}`, data)

//获取回答详情
export const API_ANSWER_SHOW = (data) => http.get(`answer/show/${data.id}`, data)

//个人中心活动显示问题接口
export const API_QUESTION_U_ANSWER= (data) => http.get(`question/u-answer`, data)

//问题热榜列表
export const API_QUESTION_HOST_LIST= (data) => http.get(`question/hot-list`, data)


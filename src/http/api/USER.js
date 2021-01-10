import Http from '../config'


const http = new Http()

//工长个人信息详情
export const API_USER_SHOW = (data) => http.get(`user/show`, data)

//工长认证
export const API_USER_CREAT = (data) => http.post(`user/create`, data)

//获取我的提问列表
export const API_USER_QUESTION = (data) => http.get(`user/question`, { page: data.page })

//我的关注工长列表
export const API_USER_ATTENTION_LIST = (data) => http.get(`user/attention-person`, data)

//我的回答
export const API_USER_ANSWER = (data) => http.get(`user/answer`, data)

//我的回答
export const API_USER_INCOME = () => http.get(`user/income`, {})

//我的钱包（详情）
export const API_USER_CASH = () => http.get(`user/cash`)

//我的钱包（收益历史记录）
export const API_USER_INCOME_HISTORY = (data) => http.get(`user/income-history`,{page:data.page})

//我的钱包（提现记录）
export const API_USER_CASH_LIST = (data) => http.get(`user/cash-list`,{page:data.page})

//我的钱包（确认提现接口）
export const API_USER_AFFIRM_CASH = () => http.post(`user/affirm-cash`)



//收益排行
export const API_INCOME_LIST = (data) => http.get(`income/list`, { page: data.page })

//修改个人资料单独修改

export const API_USER_PROFILE = (data) => http.post(`user/profile`,{field:data.field,value:data.value})

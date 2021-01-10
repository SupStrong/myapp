import Http from '../config'


const http = new Http()

//获取回答列表
export const  API_ANSWER_LIST =  (data) => http.get(`answer/list`, data)



//获取回答详情
export const  API_ANSWER_SHOW =  (data) => http.get(`answer/show/${data.id}`,data)


//提交回答
export const  API_ANSWER_CREAT =  (data) => http.post(`answer/create`,data)


//关注人的回答列表
export const  API_ANSWER_USER_ATTENTION =  (data) => http.get(`answer/user-attention`,data)

//回答推荐列表
export const  API_ANSWER_COMMAND_LIST =  (data) => http.get(`answer/command-list`,data)
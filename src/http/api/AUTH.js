import Http from '../config'


const http = new Http()

//授权
export const  API_AUTH_LOGIN =  (data) => http.post(`auth/authorize`, data)

//新授权 手机号快捷登陆
export const  API_AUTH_LOGIN_UNIONID =  (data) => http.post(`auth/login/unionid`, data)
//新授权 手机号验证码登陆
export const  API_AUTH_LOGIN_MOBILE =  (data) => http.post(`auth/login/mobile`, data)

//发送验证码
export const  API_AUTH_SEND_CODE =  (data) => http.post(`auth/send/code`, data)
let appid = ''
switch(process.env.TARO_ENV){
    case 'tt':
        appid='ttd10ca7b14e371b06'//tt
        break;
    case 'weapp':
        appid='wx15f18d98acb429b8'//weapp
        break;
    default:
        appid='wx15f18d98acb429b8'//weapp
}

export default {
    //baseUrl: 'https://mockapi.eolinker.com/ZbRXHuXb2491109610b2a430271b695bf4dd989b4ec7506/',
    // baseUrl: 'https://renovation.chuwei100.com.cn/api/',
    // imgUrl: 'https://renovation.chuwei100.com.cn',
    baseUrl: 'https://renovation.cw100.com/api/',
    imgUrl: 'https://renovation.cw100.com',
    // baseUrl: 'http://renovation.cw100.cn/api/',
    // imgUrl: 'http://renovation.cw100.cn',
    appid,
    Accept: 'application/vnd.package.v4+cus_json',
    //微信formid
    formId: JSON.stringify({
        'ask': 'NwM_KbJ9rAebYLrvxuZSUeSD2SATciE0OixgktG6ZMs', //用户提问进展通知
        'answer': 'yjrsBliac4C-3V8K8YSDrqfXkBlQvv2DLAHChyk8gEc', //问题回复提醒
        'zan': 'N42hVI_PO65t1NTSBXbYmehvV9Lcmb8yUy5BUxpPbhE', //回答被点赞通知
        'comment': 'sCsFdRh_QqFYvkf_d12oVsn7rNfv6tAThBaUnGC_WSY', //收到评论通知	
    }),
    //头条formid
    ttFormId:JSON.stringify({
        'follow': 'MSG1140621474f8a617c61edcf36bfa50327ae5be813907', //关注的问题回答通知
        'answer': 'MSG11406218c77c47987c313b4087b604ebece899913907', //问题回复提醒
    })
}

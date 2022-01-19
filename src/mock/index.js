import Mock from 'mockjs'

const Random=Mock.Random

let Result={
    code:200,
    msg:'操作成功',
    data:null
}

Mock.mock('/captcha','get',()=>{
    Result.data={
        token:Random.string(32),
        captchaImg:Random.dataImage('120x30', '7nf5w')
    }
    return Result
})

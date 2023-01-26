const EXPRESS = require('express');
const ROUTER = EXPRESS.Router();
const USER = require('../models/user');
const path = require('path');

//회원가입
//이메일 인증은 어떻게 구현하지?
//일단 나중에 고려하자

// 얠 어떻게 하지?;;;;;;;;;;;;
ROUTER.get('/', async(req, res) => {
    res.sendFile(path.join(__dirname, '../views/signup/signup.html'));
})

// http://localhost:8080/signup
ROUTER.post('/', async(req, res) => {

    //유효성 체크 꼭 해야함
    //특히 비밀번호

    // https://goodmemory.tistory.com/136

    let userInfo = {
        "id" : req.body.id, 
        "password" : req.body.password,
        "profileImg" : req.body.profileImg,
        "nickname" : req.body.nickname,
        "email" : req.body.email,
        "github" : req.body.github
    }
    
    await USER.signUp.setPersonalInformation(userInfo, (err, data) => {
        try {
            res.json(data);
        }
        catch(err)  {
            console.log(err);
        }
    })
})

module.exports = ROUTER;
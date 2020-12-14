const jwt = require('jsonwebtoken');
const cookie = require('cookie')


const validToken = (req,res,next) =>{
try{
if(req.headers.cookie){
const cookies = cookie.parse(req.headers.cookie)
let token = cookies.musicjwt
if(token){
    jwt.verify(token,process.env.JETSECRET, (error,decoded)=>{
        if(err)
        {
            res.status(403).send('Access denied')
        }
        else{
            req.decoded=decoded;
            next()
        }
    })
}
}

}
catch(err){res.status(403).send('Access denied')}
}

module.exports = {validToken};
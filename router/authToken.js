const jwt = require('jsonwebtoken')
var jsonReturn = (res, status, message, user) => {
    res.json({
        "status": status,
        "message": message,
        "__": user
    })
}
module.exports.verifyTokenAdmin = (req, res, next) => {
    var bearerHeader = req.headers.authorization;
    console.log(bearerHeader)
    if (typeof bearerHeader === 'undefined')
        return jsonReturn(res, false, "Token undefined")
    var bearer = bearerHeader.split(' ')
    var bearerToken = bearer[1]
    req.token = bearerToken
    jwt.verify(bearerToken, 'votong123', (err, autData) => {
        if (err)
            return jsonReturn(res, false, "Token invalid")
        if (autData.infor.admin !== true)
            jsonReturn(res, false, "Do not have permission")
        //jsonReturn(res, true, "Auth token success", autData)
        next()
    })
}
module.exports.verifyTokenUser = (req, res, next) => {
    var bearerHeader = req.headers.authorization;
    console.log(bearerHeader)
    if (typeof bearerHeader === 'undefined')
        return jsonReturn(res, false, "Token undefined")
    var bearer = bearerHeader.split(' ')
    var bearerToken = bearer[1]
    req.token = bearerToken
    jwt.verify(bearerToken, 'votong123', (err, autData) => {
        if (err)
            return jsonReturn(res, false, "Token invalid")
       // jsonReturn(res, true, "Auth token success", autData)
        next()
    })
}
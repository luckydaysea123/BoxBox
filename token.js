// app.post('/login', (req, res) => {
//     var fileInfor = {
//         filename: req.body.filename,
//         password: req.body.password
//     }
//     jwt.sign({ fileInfor }, 'shhhhh', { expiresIn: '30s' }, function (err, token) {
//         console.log(token);
//         res.json({
//             token: token
//         })
//     });
// })

// function verifyToken(req, res, next) {
//     var bearerHeader = req.headers.authorization;
//     console.log(bearerHeader)
//     if (typeof bearerHeader !== 'undefined') {
//         var bearer = bearerHeader.split(' ')
//         var bearerToken = bearer[1]
//         req.token = bearerToken
//         jwt.verify(bearerToken, 'shhhhh', (err, autData) => {
//             if (err)
//                 res.json({ msg: 'wrong token' })
//             else
//                 res.json(autData)
//         })
//         next()
//     } else {
//         res.send('Auth false')
//     }
// }

// app.get('/private', verifyToken, (req, res) => {
//     res.send('this is private page')
// })
// app.post('/hash', (req, res) => {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err)
//             res.send('err hash')
//         else
//             res.send(hash)
//     })
// })
// app.post('/compare', (req, res) => {
//     bcrypt.compare(req.body.password, req.body.hash, (err, rs) => {
//         if (err)
//             res.send('err compare')
//         else
//             res.send(rs)
//     })
// })
const jwt = require('jsonwebtoken');

const checkAuth =(req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        const deceodeToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = deceodeToken;
        next();
    } catch (e) {
        return res.status(401).json({
            'message' : 'Invalid or expired token provide!',
            'error' : e
        });
    }
}

module.exports = {
    checkAuth
}
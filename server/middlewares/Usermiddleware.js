const jsonwebtoken = require('jsonwebtoken');

const Usermiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'Authorization header is missing',
            });
        }

        const token = authHeader.split(' ')[1]; 
        

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET);

        if (!verified) {
            return res.status(401).json({
                success: false,
                message: 'Invalid token',
            });
        }

        req.body.userId = verified.userId; 
        next();
    } catch (e) {
        return res.status(403).json({
            success: false,
            message: 'Token verification failed: ' + e.message,
        });
    }
};

module.exports = Usermiddleware;

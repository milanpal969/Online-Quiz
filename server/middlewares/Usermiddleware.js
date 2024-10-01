const jsonwebtoken = require('jsonwebtoken');

const Usermiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        console.log(authHeader);

        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: 'Authorization header is missing',
            });
        }

        const token = authHeader.split(' ')[1]; // Get the token part after 'Bearer'
        

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

        req.body.userId = verified.userId; // Attach userId to the request
        next();
    } catch (e) {
        return res.status(403).json({
            success: false,
            message: 'Token verification failed: ' + e.message,
        });
    }
};

module.exports = Usermiddleware;

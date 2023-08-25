const dotenv = require("dotenv");
const admin = require("firebase-admin");
const path = require("path");

const { findUserByEmail } = require("../services/userServices");

dotenv.config({ path: path.join(process.cwd(), ".env") });

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const verifyToken = async (req, res, next) => {
    try {
        if (!req.headers?.authorization?.startsWith("Bearer ")) {
            throw new Error("Bearer token not found");
        }

        const idToken = req.headers.authorization.split(" ")[1];
        const decodedUser = await admin.auth().verifyIdToken(idToken);
        const user = await findUserByEmail(decodedUser.email);
        req.user = {
            email: decodedUser.email,
            role: user.role
        };
        next();

    } catch (error) {
        res.status(401).json({
            success: false,
            message: "User is not authorized",
            error: error.message
        });
    }
};

module.exports = verifyToken;
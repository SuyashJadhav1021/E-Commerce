import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({
        success: false,
        msg: "User is not authorized login again",
      });
    } else {
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);

      req.body.userId = verifiedToken.id;
      next();
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export default auth;

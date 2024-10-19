import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    if (!token) {
      return res.json({ success: false, msg: "User is not authorized" });
    } else {
      const verifiedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
      if (
        verifiedToken !==
        process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD
      ) {
        return res.json({ success: false, msg: "Not authorized login again" });
      }
      next();
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error.message });
  }
};

export default adminAuth;

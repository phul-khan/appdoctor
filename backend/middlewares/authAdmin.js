import jwt from 'jsonwebtoken';

const authAdmin = async (req, res, next) => {
  try {
    const { atoken } = req.headers;

    if (!atoken) {
      return res.json({ success: false, message: "Token not found" });
    }

    const token_decode = jwt.verify(atoken, process.env.JWT_SECRET);


    next();
  } catch (error) {
    console.log("error here")
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authAdmin;

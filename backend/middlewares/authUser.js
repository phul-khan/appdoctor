
import jwt from 'jsonwebtoken';

const authUser = async (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
        console.log("token not found")
      return res.json({ success: false, message: "Token not found" });
    }
    else{
        console.log("token found")
    }

    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = token_decode.id
    console.log("token decoded",token_decode)

    // console.log("the decoded",email)
    next();


  } catch (error) {
    console.log("error here")
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export default authUser;

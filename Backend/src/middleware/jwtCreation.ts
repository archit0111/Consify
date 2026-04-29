// import jwt from 'jsonwebtoken';

// function createJwt(user,res:Response){
//     const token = jwt.sign(
//         {userId : user._id , role : user.role},
//         process.env.TOKENSECRET,
//         {expiresIn : "1min"}
//     )
//     const refreshToken = jwt.sign(
//         {userId : user._id},
//         process.env.REFRESHTOKENSECRET,
//         {expiresIn:'7d'}
//     )
//     user.refreshToken = refreshToken;
//     user.save();
//     return res.status(200).json({message:"Login successfuly!", token:token, refreshToken:refreshToken});
// }

// export default createJwt
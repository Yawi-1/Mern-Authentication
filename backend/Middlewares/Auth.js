import jwt from 'jsonwebtoken';

export const ensureAuthenticated = async(req,res,next)=>{
    const auth  = req.headers['authorization'];
    if(!auth){
        return res.status(401).json({message:'Unauthorized'});
    }

   try {
     const decode = jwt.verify(auth,process.env.JWT_SECRET_KEY);
     console.log('Decode ', decode);
     req.user = decode;
     next();
   } catch (error) {
   res.status(401).json({
        message:"Unauthorized jwt TOken",
        success:false
    })
   }
}
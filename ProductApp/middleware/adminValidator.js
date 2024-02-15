const adminValidator=(req,res,next)=>{
    if(req.user.role==="admin"){
        next();
    }
    else{
        res.this.status(403).json({error:"Available for Admin Only"})
    }
}
module.exports={
    adminValidator,
}
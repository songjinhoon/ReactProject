const checkLoggedIn = (ctx, next) => {
    if(ctx.state.user){
       return next(); 
    }else{
        ctx.status = 401;
        return;
    }
};

export default checkLoggedIn;
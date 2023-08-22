module.exports.signin=function(req,res){
    res.render('Signin',{title:'Sign In'});
};
module.exports.register=function(req,res){
    res.render('register',{title:'Register'});
};
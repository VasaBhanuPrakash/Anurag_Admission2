module.exports.homelist=function(req,res){
    res.render('location-list',{title:'Home'});
};
module.exports.locationinfo=function(req,res){
    res.render('location-info',{title:'AnuragCET'});
};
module.exports.addReview=function(req,res){
    res.render('student',{title:'Student Information'});
};
var bearer = require('passport-http-bearer').Strategy;
const Pros = require('./models/pros');

module.exports = function(passport){
    passport.use(new bearer({},
    function(token,done){
        Pros.findOne({_id : token},function(err,user){
            if(!user){
                return done(null,false);
            }else{
                return done(null,true);
            }
            
        })        
    }))
}
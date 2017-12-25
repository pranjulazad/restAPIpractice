const express = require('express');
const Pros = require('../models/pros');
const router = express.Router();
const passport = require('passport');

router.get('/pros',passport.authenticate('bearer',{session : false}),(req,res,next)=>{
    Pros.geoNear({type : 'Point',coordinates:[parseFloat(req.query.lng),parseFloat(req.query.lat)]},
    {maxDistance : 100000, spherical : true}).then(function(pros){
        res.send(pros);
    });
});

router.post('/pros',passport.authenticate('bearer',{session : false}),(req,res,next)=>{
    //var pros = new Pros(req.body);
    //pros.save();
    Pros.create(req.body).then((pros)=>{
        res1.send(pros)
    }).catch(next);
    
});

router.put('/pros/:id',passport.authenticate('bearer',{session : false}),(req,res,next)=>{
    Pros.findByIdAndUpdate({_id : req.params.id},req.body).then(function(pros){
        res.send(pros);
    }).catch(next);
}); 

router.delete('/pros/:id',passport.authenticate('bearer',{session : false}),(req,res,next)=>{
    Pros.findByIdAndRemove({_id : req.params.id}).then(function(pros){
        if(pros == null){
            res.send("Data Not Exist");
        }else
            res.send(pros);
    }).catch(next);
});

module.exports = router;
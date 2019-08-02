const express = require('express');
let bodyParser = require('body-parser');
let db = require('../models');
let router = express.Router();


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/colAdd', (req, res)=>{
    let plant_id = req.body.plant_id;
    let user_id = req.body.user_id;
    console.log(`user ID ${user_id}`)
    //check for duplication
    db.collection.findAll({ where: { plant_id: plant_id, user_id: user_id }})
    .then((result) => {
      if(result.length === 0) {
        db.collection.create({user_id: user_id, plant_id: plant_id})
        res.send('added to database')
      }
      else { 
        return res.status(422).send('plant is already in collection')
      }
    })
    .catch(err => console.log(err))
});

router.post('/collection', (req, res)=>{
  let plant_id = req.body.plant_id;
  let user_id = req.body.user_id;
  db.collection.findAll({where : {user_id: user_id}})
  .then((result) =>{
    console.log(result)
    res.send(result)
  })
})

module.exports = router;
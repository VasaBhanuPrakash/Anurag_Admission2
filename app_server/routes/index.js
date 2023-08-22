var express = require('express');
var router = express.Router();
var ctrllocations = require('../controller/location');
var ctrlothers=require('../controller/others');
var ctrlsign=require('../controller/signin');
/* GET home page. */
router.get('/', ctrllocations.homelist);
router.get('/location',ctrllocations.locationinfo);
router.get('/location2',ctrllocations.addReview);
router.get('/about',ctrlothers.about);
router.get('/signin',ctrlsign.signin);
router.get('/register',ctrlsign.register);
module.exports = router;

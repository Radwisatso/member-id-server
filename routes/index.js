const router = require("express").Router();
const awardRoute = require('./awardRoute')

router.use('/award', awardRoute)

module.exports = router;

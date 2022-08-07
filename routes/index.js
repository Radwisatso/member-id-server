const router = require("express").Router();
const awardRoute = require('./awardRoute')
const userRoute = require('./userRoute')

router.use('/awards', awardRoute)
router.use('/users', userRoute)

module.exports = router;

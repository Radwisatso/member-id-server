const router = require("express").Router();
const AwardController = require("../controllers/awardController");

router.get('/', AwardController.getAll)

module.exports = router;

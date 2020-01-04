const router = require("express").Router();
const websiteRoutes = require("./websites");

// Book routes
router.use("/websites", websiteRoutes);

module.exports = router;

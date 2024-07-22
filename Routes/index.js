// const express = require("express")
// const router = express.Router();
// const ApplicationRoute = require("./ApplicationRoute")
// const intern = require("./internshipRout")
// const job = require("./jobRoute")
// const admin = require("./admin")
// const avatarRoute = require('./routes/avatarRoute');



// router.get("/", (req, res) => {
//     res.send("the is backend")
// })
// router.use('/application', ApplicationRoute);
// router.use('/internship', intern);
// router.use('/job', job);
// router.use('/admin', admin);
// app.use('/api/avatar', avatarRoute); // Avatar routes


// module.exports = router;

const express = require("express");
const router = express.Router();
const applicationRoute = require("./applicationRoute");
const internshipRoute = require("./internshipRout");
const jobRoute = require("./jobRoute");
const adminRoute = require("./admin");
const avatarRoute = require("./avatarRoute");

router.get("/", (req, res) => {
    res.send("This is the backend");
});

router.use('/application', applicationRoute);
router.use('/internship', internshipRoute);
router.use('/job', jobRoute);
router.use('/admin', adminRoute);
router.use('/avatar', avatarRoute); // Avatar routes

module.exports = router;


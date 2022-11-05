const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname,  "build", "../public/index.html"));
    });
  }

module.exports = router;
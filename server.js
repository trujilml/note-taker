const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());



app.listen(PORT, () => {
    console.log(`API server now on port ${port}!`);
});
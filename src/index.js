const config = require("./config/config.js")
const app = require("./app.js")

const PORT = config.PORT || 4000;

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`);
}); 
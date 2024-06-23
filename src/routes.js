const hotel = require('./components/hotel/network.js');
const flight = require('./components/flight/network.js');


const routes = (app)=>{
    app.use("/api/v1", hotel);
    app.use("/api/v1", flight);
}

// export default routes;
module.exports = routes;
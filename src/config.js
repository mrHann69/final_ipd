const config = {
  BACKEND_URI: "http://192.168.1.3:4000/api/v1", //process.env.REACT_APP_BACKEND_URI,
  TOKEN_SECRET: process.env.REACT_APP_TOKEN_SECRET,
};

(() => {
  console.log("config 💥💥💥💥💥", config);
})();

export default config;

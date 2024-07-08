const config = {
  BACKEND_URI: process.env.REACT_APP_BACKEND_URI,
  TOKEN_SECRET: process.env.REACT_APP_TOKEN_SECRET,
};

(() => {
  console.log("config 💥💥💥💥💥", config);
})();

export default config;

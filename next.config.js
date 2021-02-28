//
module.exports = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/actions-sample4" : "",
  env: {
    MY_BASE_PATH: process.env.NODE_ENV === "production" ? "/actions-sample4" : "",    
    MY_SITE_NAME: "CMS Sample",    
  },  
}
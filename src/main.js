import Vue from "vue";
import App from "./App.vue";
import router from "./router";

/**
 // TIP
 this is all you need to do to inlcude sass in our design
 however unless you selected 'use CSS preprocessors' when 
 nitiating the project, you will need to add 2 packages:
 'node-sass' and'sass-loader' using `npm install <package-name>`

 also note, with webpack, you don't need to add vendor prefixes
 like -webkit-xx or -moz-xx. If you'd like to develop for all including
 older ones, you can set this in package.json under 'browserslist'.
 webpack will automatically add these prefixes appropriately
 in the output code.

 */

import "./sass/app.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

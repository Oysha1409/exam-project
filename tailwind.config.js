const withMT = require("@material-tailwind/react/utils/withMT");
 /**  @type {import('tailwindcss').Config} */
 
//  export default {
   
   module.exports = withMT({
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       container: {
         center: true,
         padding: "1rem"
       },
       extend: {
         colors: {
           dark: "rgb(21,12,1)",
           orange: "rgb(220,120,11)"
         }
       },
     },
     plugins: [],
   });
//  }

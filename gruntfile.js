module.exports = function(grunt) {
    grunt.initConfig({
           C:{
                public:{
                     bsFiles: {
                          src:['public/**/*']
                     },
                     options:{
                          server:{
                               baseDir: "public"
                          }
                     }
                }
           }
 
 
   });
 
  
 

   grunt.loadNpmTasks('grunt-browser-sync');
   
 };
 
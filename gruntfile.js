module.exports = function(grunt) {
    grunt.initConfig({
           browserSync:{
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
 
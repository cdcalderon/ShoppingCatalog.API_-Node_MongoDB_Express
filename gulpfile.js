/**
 * Created by cdcalderon on 6/30/15.
 */
var gulp = require('gulp'),
    nodemon = require ('gulp-nodemon');


gulp.task('default', function(){
   nodemon({
       script: 'app.js',
       ext: 'js',
       env: {
           PORT: 8001
       },
       ignore: ['./node_modules']
   })
   .on('restart', function(){
       console.log('Restarting Server...');
   });
});


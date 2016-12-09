var gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
del = require('del'),
usemin = require('gulp-usemin');

gulp.task('deleteDist', function(){
  return gulp.task('./dist');
})
gulp.task('optimizeImages',['deleteDist'], function(){
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    multipass: true
  }))
  .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('usemin',['deleteDist'], function(){
  return gulp.src('./app/index.html')
  .pipe(usemin())
  .pipe(gulp.dest('./dist'))
})
gulp.task('build',['deleteDist', 'optimizeImages','usemin'])

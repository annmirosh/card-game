var requireDir = require('require-dir'),
    gulp = require('gulp');

// Require all tasks in gulpfile.js/tasks, including subfolders
requireDir('./tasks', {recurse: true});

gulp.task('default', ['watch']);
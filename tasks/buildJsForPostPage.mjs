import gulp from 'gulp';
import concat from 'gulp-concat';
import hashToFilename from '../plugins/hashToFilename.mjs';
import minifyJs from '../plugins/minifyJs.mjs';

const { src } = gulp;

export default function buildJsForPostPage(cb) {
  const names = ['public/js/prism.js', 'public/js/post.js'];
  src(names)
    .pipe(concat('post.js'))
    .pipe(minifyJs())
    .pipe(hashToFilename('js'))
    .pipe(gulp.dest('build/js', { overwrite: true }))
    .on('finish', () => {
      cb();
    })
    .on('error', (err) => {
      cb(err);
    });
}

const gulp = require("gulp");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const connect = require("gulp-connect");

gulp.task("server", function () {
  connect.server({
    root: "public",
    livereload: true,
    port: 8085,
  });
});

gulp.task("hello", function (done) {
  console.log("Hello world");
  done();
});

gulp.task("js", function () {
  return gulp
    .src("./src/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./public"))
    .pipe(connect.reload());
});

gulp.task("watch", function () {
  gulp.watch("./src/**/*.js", gulp.series("js"));
  gulp.watch("./src/**/*.html", gulp.series("html"));
});

gulp.task("html", () => {
  return gulp
    .src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./public"))
    .pipe(connect.reload());
});

gulp.task("default", gulp.parallel(["server", "watch"]));

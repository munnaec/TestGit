const gulp=require("gulp");
const git = require("gulp-git");//for git 

//Git hub code
/*gulp.task("init",function(){
    console.log(argv.comment);
  });
  */
  gulp.task('add', function(){
      return gulp.src('https://github.com/munnaec/TestGit')    
      .pipe(
        git.add()
      //console.log(git.add() )
      );
   });
  
   gulp.task('commit', function(){
      return gulp.src('https://github.com/munnaec/TestGit')    
      .pipe(git.commit('Send Comment')); 
    });
  
    gulp.task('push', function(){
      git.push('master', function (err) {
            if (err) throw err;  }); 
  });
  
  gulp.task('clone', function(){
    git.clone('https://github.com/munnaec/TestGit', 
    function (err) {
      console.log(err);
    //  if (err) throw err;
    });
  });
  
  gulp.task('gitsend',['init','add','commit','push']);
   
  //End of git 
  
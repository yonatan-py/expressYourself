module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('./build/package.json'),
        coffee:{
          src: "src",
          dest: "build"
        },
        watch: {
            scripts: {
              files: ['**/*.coffee'],
              tasks: ['coffee'],
              options: {
                  spawn: false,
              }
            }
        }
  });

  grunt.registerTask('coffee', 'A sample task that logs stuff.', function() {
      var _files = grunt.config('coffee');
      var src = _files.src;
      var dst = _files.dest;

      try{

            var spawn = require('child_process').spawn;
            var command;

            

            // run the coffee
            command = "coffee --compile --output " + dst + " " + src;
            console.log(command);
            spawn('sh', ['-c', command], { stdio: 'inherit' });
            
            command = "cp -fr " + src + "/views " + dst + "/views";
            console.log(command);
            spawn('sh', ['-c', command], { stdio: 'inherit' });
            
            var done = this.async();
            setTimeout(function(){
                
                command = ' for x in `ps ux | grep node | grep app.js | cut  -d" " -f3`; do  kill $x; done';
                console.log(command);
                spawn('sh', ['-c', command], { stdio: 'inherit' });
                command = 'node ./build/app.js';
                console.log(command);
                spawn('sh', ['-c', command], { stdio: 'inherit' });
                
                // // end make sure Brackets is running
             
                // command = "if [ -z `ps ux | grep brackatir | grep js` 2> /dev/null ] ; then  `node ./brackatir.js` ; fi;";
                // console.log(command);
                // spawn('sh', ['-c', command], { stdio: 'inherit' });

                done();
                return true;
            },300);



      }
      catch (e){
        console.log(e);
        return true;
      }
      return true;
  });


  // Default task(s).
  grunt.registerTask('default', ['coffee', 'watch']);
  grunt.loadNpmTasks('grunt-contrib-watch');

};

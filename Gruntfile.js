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

      var spawn = require('child_process').spawn;
      var command = "coffee --compile --output " + dst + " " + src;
      spawn('sh', ['-c', command], { stdio: 'inherit' });
      command = "cp -fr " + src + "/views " + dst + "/views";
      spawn('sh', ['-c', command], { stdio: 'inherit' });

      command = 'kill `ps ux | grep node | grep js | cut -d" " -f3`';

      spawn('sh', ['-c', command], { stdio: 'inherit' });
      command = 'node ./build/app.js';
      spawn('sh', ['-c', command], { stdio: 'inherit' });

      return true;
  });

  // Default task(s).
  grunt.registerTask('default', ['coffee']);
  grunt.loadNpmTasks('grunt-contrib-watch');

};

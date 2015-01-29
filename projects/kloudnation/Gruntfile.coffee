module.exports = (grunt) ->
	# -[ Config ]---------------------------------------
	grunt.initConfig {
		watch:
			options: livereload: true
			grunt: files: 'Gruntfile.coffee'
			jade:
				files: ['./*.jade']
				tasks: ['jade']
		jade: compile: files: 
			'./WebFetch.html': './WebFetch.jade'
			'./index.html'   : './index.jade'
	}
	
	# -[ Tasks ]----------------------------------------
	grunt.loadNpmTasks 'grunt-contrib-watch' 
	grunt.loadNpmTasks 'grunt-contrib-jade' 
	
	# -[ Default ]--------------------------------------
	grunt.registerTask 'default', ['watch']
	
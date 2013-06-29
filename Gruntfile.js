/*!
 *  Gruntfile.js configuration
 */

'use strict';

module.exports = function ( grunt ) {

	/*
	 * Grunt init
	 */
	grunt.initConfig({

		/*
		 * Grunt JSON for project
		 */
		pkg: grunt.file.readJSON( 'config.json' ),

		/*
		 * Credit banner
		 */
		tag: {
			banner: "/*!\n" +
					" *  <%= pkg.title %> v<%= pkg.version %>\n" +
					" *  <%= pkg.description %>\n" +
					" *  Project: <%= pkg.homepage %>\n" +
					" *  by <%= pkg.author.name %>: <%= pkg.author.url %>\n" +
					" *\n" +
					" *  Copyright <%= pkg.year %> <%= pkg.author.name %>." +
					" <%= pkg.licenses[0].type %> licensed.\n" +
					" */\n"
		},

		/*
		 * Concat
		 */
		concat: {
			dist: {
				src: ["src/fluidvids.js"],
				dest: "dist/fluidvids.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		},

		/*
		 * jsHint
		 */
		jshint: {
			files: ["src/fluidvids.js"],
			options: {
				jshintrc: ".jshintrc"
			}
		},

		/*
		 * UglifyJS
		 */
		uglify: {
			files: {
				src: ["dist/fluidvids.js"],
				dest: "dist/fluidvids.min.js"
			},
			options: {
				banner: "<%= tag.banner %>"
			}
		}

	});

	/*
	 * NodeJS grunt tasks
	 */
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-uglify");

	/*
	 * Register tasks
	 */
	grunt.registerTask("default", ["jshint", "concat", "uglify"]);
	grunt.registerTask("travis", ["jshint"]);

};
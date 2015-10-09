/*global module:false*/
module.exports = function(grunt) {
  'use strict';
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    conf: {
      name: 'publick-nateyolles',
      dist: 'src/main/resources/jcr_root/etc/clientlibs/nateyolles',
      src: 'src'
    },
    concat: {
      options: {
        stripBanners: false,
      },
      'js': {
        src: [
          'build/js/jquery.min.js',
          'build/js/jquery.easing.1.3.min.js',
          'build/js/bootstrap.min.js',
          'build/js/jquery.flexslider-min.js',
          'build/js/detectmobilebrowser.min.js',
          'build/js/wow.min.js',
          'build/js/jquery.sticky.js',
          'build/js/jquery.stellar.min.js',
          'build/js/jquery.mb.YTPlayer.min.js',
          'build/js/waypoints.min.js',
          'build/js/jqBootstrapValidation.js',
          'build/js/custom.js',
          'build/js/twitter.js',
          'build/js/facebook.js',
          'build/js/googleplus.js',
          'build/js/linkedin.js',
          'build/js/gist-embed.min.js',
        ],
        dest: 'build/js/<%=pkg.name%>.min.js'
      },
      'css': {
        src: [
          'build/css/bootstrap.css',
          'build/css/style.css',
          'build/css/YTPlayer.css',
          'build/css/flexslider.css',
          'build/css/font-awesome.css',
          'build/css/animate.css'
        ],
        dest: 'build/css/<%=pkg.name%>.css'
      }
    },
    uglify: {
      'dist' : {
        files: {
          'build/js/<%=pkg.name%>.min.js' : ['build/js/<%=pkg.name%>.min.js']
        }
      }
    },
    compass: {
      dist: {
        options: {
          sassDir: 'build/scss',
          cssDir: 'build/css',
          environment: 'production',
          relativeAssets: true,
          noLineComments: false
        }
      }
    },
    cssmin: {
      minify: {
        expand: true,
        src: ['build/css/<%=pkg.name%>.css'],
        ext: '.min.css'
      }
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: 'build/css',
            src: ['<%=pkg.name%>.min.css'],
            dest: '<%=conf.dist%>/css'
          },
          {
            expand: true,
            cwd: 'build/js',
            src: ['<%=pkg.name%>.min.js'],
            dest: '<%=conf.dist%>/js'
          }
        ]
      }
    }
  });

  grunt.registerTask('build', [
    'compass:dist',
    'concat:js',
    'concat:css',
    'uglify:dist',
    'cssmin',
    'copy:dist'
  ]);
};
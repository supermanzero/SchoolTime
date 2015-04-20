/*global module*/
'use strict';
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            build: {
                options: {
                    appDir: './',
                    baseUrl: './test',
                    dir: './build',
                    /*optimize: 'uglify2',
                     generateSourceMaps: false,
                     preserveLicenseComments: false,*/
                    // useSourceUrl: true,
//                    optimizeCss: 'standard',
                    paths: {
                        'a': 'a',
                        'b': 'b'
                    },
                    shim: {

                    },
                    modules: [{
                        name: 'b'
                    }]
                }
            }
        },
        cssmin: {
            options: {
                //文件内容的分隔符
                separator: ';',
                stripBanners: true,
                banner: '/*' +' Created by <%= pkg.author %> on <%= grunt.template.today("yyyy/mm/dd") %> '+'*/'
            },

            /* 压缩css */
            minify: {
                options: {
                    keepSpecialComments: 0, /* 删除所有注释 */
                    banner: '/*' +' Created by <%= pkg.author %> on <%= grunt.template.today("yyyy/mm/dd") %> '+'*/'
                },
                files: {
                    'css/min.css': ['css/*.css']
                }
            },
            /* 合并css */
            compress: {
                files: {
                    './assets/work/css/1.css': [
                        "./assets/work/css/*.css"
                    ]
                }
            }
        },
        concat: {
            options: {
                separator: ';',
                stripBanners: true
            },
            js: {
                src: [
                    "src/js/*.js"
                ],
                dest: "dist/html/js/app.js"
            },
            css:{
                src: [
                    "./assets/work/css/public.css",
                    "./assets/work/css/base.css",					
                    "./assets/work/css/uikit.css",
                    "./assets/work/css/easydropdown.css",
                    "./assets/work/css/personstyle.css",
                    "./assets/work/css/papers.css",
                    "./assets/work/css/work-core.css",
                    "./assets/work/css/work-correct.css"
                ],
                dest: "./assets/work/css/work.css"
            }
        },
        watch: {
            stylesheets: {
                files: './assets/work/css/*.css',
                tasks: ['concat:css']
            },
            hbs:{
                files:"./assets/js/core/template/*.handlebars",
                tasks:["handlebars"]
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "JST",
                    amd:true
                },
                files: {
                    "./assets/js/core/template/course.js": ["./assets/js/core/template/*.hbs"]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');


    // 注册任务
    grunt.registerTask('default', ['handlebars']);
//    grunt.registerTask('default', ['watch:hbs']);
//    grunt.registerTask('default', ['handlebars']);
};
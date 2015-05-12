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
        },
        uglify: {
            options: {
                //文件内容的分隔符
                mangle: true,
                separator: ';',
                stripBanners: true,
                banner: '/*' +' Created by <%= pkg.author %> on <%= grunt.template.today("yyyy/mm/dd") %> '+'*/'
            },
            build: {
                files: {
                    './assets/js/lib/jquery.datetimepicker/jquery.datetimepicker.min.js': ['./assets/js/lib/jquery.datetimepicker/jquery.datetimepicker.js']
                }
            },
            buildall: {//任务三：按原文件结构压缩js文件夹内所有JS文件
                files: [{
                    expand:true,
                    cwd:'js',//js目录下
                    src:'**/*.js',//所有js文件
                    dest: 'output/js'//输出到此目录下
                }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // 注册任务
    grunt.registerTask('default', ['uglify:build']);
//    grunt.registerTask('default', ['watch:hbs']);
//    grunt.registerTask('default', ['handlebars']);
};
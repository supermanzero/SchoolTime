/**
 * Created by Administrator on 2015/5/5.
 */
define(["core/template/course"],function (course) {

    var timetable=timetable || {}

    timetable.sequence=function(){
        $("select[name='tabletype']").on("change",function(){
            if($(this).val()=="0"){
                $(".class-select").removeClass("hide")
                $(".teach-select").addClass("hide")
            }
            if($(this).val()=="1"){
                $(".teach-select").removeClass("hide")
                $(".class-select").addClass("hide")
            }
            if($(this).val()=="2"){
                $(".teach-select,.class-select").addClass("hide")
            }
        })

        /*课程表*/
        var data = {
            "school":"广州市荔湾区环翠园小学",
            "semester":"2015年第一学期",
            "grade":"5",
            "class":"1",
            "timetable": [
                {"activity":"早读", "joint": "","starttime":"08:00","endtime":"08:45","mon":{"name":"","teach":""},"tues":{"name":"","teach":""},"wed":{"name":"","teach":""},"thurs":{"name":"","teach":""},"fri":{"name":"","teach":""}},
                {"activity":"", "joint": "第一节","starttime":"08:00","endtime":"08:45","mon":{"name":"语文","teach":"张老师","map":"a1","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"tues":{"name":"语文","teach":"张老师","map":"a2","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"wed":{"name":"语文","teach":"张老师","map":"a3","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"thurs":{"name":"语文","teach":"张老师","map":"a4","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"fri":{"name":"语文","teach":"张老师","map":"a5","drop":"drop","cls":{"item":"item","assigned":"assigned"}}},
                {"activity":"", "joint": "第二节","starttime":"08:00","endtime":"08:45","mon":{"name":"语文","teach":"张老师","map":"b1","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"tues":{"name":"语文","teach":"张老师","map":"b2","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"wed":{"name":"语文","teach":"张老师","map":"b3","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"thurs":{"name":"语文","teach":"张老师","map":"b4","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"fri":{"name":"语文","teach":"张老师","map":"b5","drop":"drop","cls":{"item":"item","assigned":"assigned"}}},
                {"activity":"","joint": "第三节","starttime":"08:00","endtime":"08:45","mon":{"name":"语文","teach":"张老师","map":"c1","drop":"nodrop","cls":{"item":"","assigned":""}},"tues":{"name":"语文","teach":"张老师","map":"c2","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"wed":{"name":"语文","teach":"张老师","map":"c3","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"thurs":{"name":"语文","teach":"张老师","map":"c4","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"fri":{"name":"语文","teach":"张老师","map":"c5","drop":"drop","cls":{"item":"item","assigned":"assigned"}}},
                {"activity":"","joint": "第三节","starttime":"08:00","endtime":"08:45","mon":{"name":"语文","teach":"张老师","map":"c1","drop":"nodrop","cls":{"item":"","assigned":""}},"tues":{"name":"语文","teach":"张老师","map":"c2","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"wed":{"name":"语文","teach":"张老师","map":"c3","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"thurs":{"name":"语文","teach":"张老师","map":"c4","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"fri":{"name":"语文","teach":"张老师","map":"c5","drop":"drop","cls":{"item":"item","assigned":"assigned"}}},
                {"activity":"午休","joint": "","starttime":"12:00","endtime":"14:00","mon":{"name":"语文","teach":"张老师","map":"c1","drop":"nodrop","cls":{"item":"","assigned":""}},"tues":{"name":"语文","teach":"张老师","map":"c2","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"wed":{"name":"语文","teach":"张老师","map":"c3","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"thurs":{"name":"语文","teach":"张老师","map":"c4","drop":"drop","cls":{"item":"item","assigned":"assigned"}},"fri":{"name":"语文","teach":"张老师","map":"c5","drop":"drop","cls":{"item":"item","assigned":"assigned"}}}
            ]};

        /*待排课程*/
        var teach_data = { "course": [
            { "name": "语文", "teach": "张老师" },
            { "name": "数学", "teach": "刘老师" },
            { "name": "英语", "teach": "张老师" },
            { "name": "历史", "teach": "刘老师" },
            { "name": "生物", "teach": "刘老师" },
            { "name": "地理", "teach": "刘老师" }
        ]};

        var changteach={
            teach:["吴老师","张老师","王老师"]
        }

//        var timetable_view=course["timetable_view"](data);
//        $("#timetable-view").append(timetable_view)


        var change_teach_tpl=course["timetable_view"](data);
        $(".change-teach tbody").append(change_teach_tpl).find("td").on("mouseover","p[select]",function(){
            $(this).css({"cursor":"pointer"})
        }).on("click","p[select]",function(){
                if($(this).next("select").length<1){
                    var teachdata=course["changTeach"](changteach);
                    console.log(teachdata)
                    $(this).after(teachdata)
                }
                var that=$(this);
                $(this).hide().closest("td").addClass("on").find("select").focus().on("focusout",function(event){
                    that.text($(this).val()).show();
                    $(this).closest("td").removeClass("on");
                    console.log($(this).val())
                })

        })
        $.nmManual("#change-teach", {closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition fa fa-times-circle fa-2x" title="close"></a>'});


        var compiledTemplate = course["course"](teach_data);
        $(".drop-nav").find("fieldset").append(compiledTemplate);
        var timetable=course["timetable"](data);
        $("#timetable").append(timetable);
        $(".cp-button[data-dialog='#timetable']").on("click",function(){
            $.nmTop().close()
            $.nmManual(($(this).attr("data-dialog"))+"-dialog", {closeButton: '<a href="#" class="nyroModalClose nyroModalCloseButton nmReposition fa fa-times-circle fa-2x" title="close"></a>'});
        })


        easyloader.load(["draggable","droppable"],function(){
            $(function(){
                $('.drop-nav .item').draggable({
                    revert:true,
                    proxy:'clone'
                });
                $('.timetable .item').draggable({
                    revert:true,
                    proxy:'clone'
                });

                $('.timetable td.drop').droppable({
                    onDragEnter:function(){
                        $(this).addClass('over');
                    },
                    onDragLeave:function(){
                        $(this).removeClass('over');
                    },
                    onDrop:function(e,source){
                        if ($(source).hasClass('assigned')){
                            $(this).removeClass('over');
                            console.log(000)
                            return
                        } else {
                            var c = $(source).clone().addClass('assigned');
                            $(this).empty().append(c);
                            c.draggable({
                                revert:true
                            });
                            $(this).removeClass('over')
                            console.log(1111)
                        }
                    }
                });
                $('.drop-nav').droppable({
                    accept:'.assigned',
                    onDragEnter:function(e,source){
                        $(source).addClass('trash');
                    },
                    onDragLeave:function(e,source){
                        $(source).removeClass('trash');
                    },
                    onDrop:function(e,source){
                        $(source).remove();
                    }
                });
            });
        })
    }

    timetable.views=function(){
        /*小班视图*/
        var classdata={"classdata":[
            {
                "class":"一年级1班",
                "timetable":[
                    {"joint": "第一节","mon":"语文","tues":"数学","wed":"语文","thurs":"数学","fri":"语文"},
                    {"joint": "第二节","mon":"数学","tues":"语文","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第三节","mon":"语文","tues":"数学","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第四节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第五节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第六节","mon":"语文","tues":"语文","wed":"语文","thurs":"数学","fri":"语文"}
                ]
            },
            {
                "class":"一年级2班",
                "timetable":[
                    {"joint": "第一节","mon":"语文","tues":"数学","wed":"语文","thurs":"数学","fri":"语文"},
                    {"joint": "第二节","mon":"数学","tues":"语文","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第三节","mon":"语文","tues":"数学","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第四节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第五节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第六节","mon":"语文","tues":"语文","wed":"语文","thurs":"数学","fri":"语文"}
                ]
            },
            {
                "class":"一年级3班",
                "timetable":[
                    {"joint": "第一节","mon":"语文","tues":"数学","wed":"语文","thurs":"数学","fri":"语文"},
                    {"joint": "第二节","mon":"数学","tues":"语文","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第三节","mon":"语文","tues":"数学","wed":"语文","thurs":"语文","fri":"语文"},
                    {"joint": "第四节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第五节","mon":"语文","tues":"语文","wed":"数学","thurs":"语文","fri":"语文"},
                    {"joint": "第六节","mon":"语文","tues":"语文","wed":"语文","thurs":"数学","fri":"语文"}
                ]
            }
        ]}

        /*总视图*/
        var alltable={
            "class":["一年级1班","一年级2班","一年级3班"],
            "course":[
                {"week":"周一","jointcount":"3","activity":"早读","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]},
                {"week":"","jointcount":"","activity":"第一节","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]},
                {"week":"","jointcount":"","activity":"第二节","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]},
                {"week":"周二","jointcount":"3","activity":"早读","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]},
                {"week":"","jointcount":"","activity":"第一节","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]},
                {"week":"","jointcount":"","activity":"第二节","starttime":"08:00","endtime":"08:45","jointcourse":[{"name":"语文","teach":"吴老师"},{"name":"语文2","teach":"吴老师"},{"name":"语文3","teach":"吴老师"}]}
            ]
        }

        var classdatatlp=course["class"](classdata);
        $(".pub-table-list").append(classdatatlp);

        var alltabletlp=course["all_class_table"](alltable);
        $(".course-info-bd").append(alltabletlp);
    }
    return timetable;
});
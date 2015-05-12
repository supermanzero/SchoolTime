/**
 * Created by Administrator on 2015/4/9.
 * 设置课时
 */
define(["lib/jquery.datetimepicker/jquery.datetimepicker.min"], function () {

    var coursetime = coursetime || {};

    var toggleadd = true;

    coursetime.get_courseid = function () {
        var id_count = parseInt(($("[data-courseid]").last().attr("data-courseid")) || 0);
        return id_count
    }

    coursetime.add_course = function () {
        if (!toggleadd) {
            return
        }
        var id_count = coursetime.get_courseid();
        var tlp = '<tr> <td><span data-courseid=' + (++id_count) + '>' + (id_count) + '</span></td> <td class="middle" id="timepicker-box"</td> <td> <button class="yui3-u cp-button save-course">确定</button> </td> </tr>';
        var dom = $(".course-time-tbody").append(tlp);
        $("#timepicker-box").append($("#timepicker").show()).removeAttr("id");
        toggleadd = false;
    };

    coursetime.save_course = function () {
        var start = ($("#date_timepicker_start").val());
        var end = ($("#date_timepicker_end").val());
        if (start && end) {
            var starttime = $("#date_timepicker_start").attr("date-time");
            var endtime = $("#date_timepicker_end").attr("date-time");
            if(parseInt(starttime)>parseInt(endtime)){
                alert("时间顺序错误喽！")
                $("#date_timepicker_end").focus()
                return
            }
            var end = $("#date_timepicker_end").val();
            var lasttr = $(this).closest("tr").prev().attr("data-endtime");
            if (parseInt(lasttr) > parseInt(starttime)) {
                alert("与前面课程时间重复啦！");
                $("#date_timepicker_start").focus()
                return
            }
            $(this).closest("tr").attr({"data-starttime": starttime, "data-endtime": endtime});
            $("#timepicker").after(start + '-' + end).hide();
            $(this).after("<button class='yui3-u cp-button del-course'>删除</button>").remove();
            $(".course-time-tbody").append($("#timepicker"));
            toggleadd = true;

            console.log(starttime);
            console.log(endtime);
        }
    };

    coursetime.del_course = function () {
        if (!toggleadd) {
            return
        }
        var tr = $(this).closest("tr");
        var id = parseInt(tr.find("span[data-courseid]").attr("data-courseid"));
        console.log(id);
        id_count = id - 1;
        tr.nextAll("tr").remove();
        tr.remove();
    }

    coursetime.init = function () {
        $(".date_timepicker_start,.date_timepicker_end").on("keydown", function () {
            window.event.returnValue = false;
        })
        jQuery('#date_timepicker_start').datetimepicker({
            step: 1,
            datepicker: false,
            onChangeDateTime: function (ct, d) {
                $(d).attr({"date-time": ct.dateFormat("Hi")});
                console.log(ct.dateFormat("Hi"));
            },
            onShow: function (ct) {
                this.setOptions({
                    maxTime: jQuery('#date_timepicker_end').val() ? jQuery('#date_timepicker_end').val() : false
                })
            },
            format: 'H:i'
        });
        jQuery('#date_timepicker_end').datetimepicker({
            step: 1,
            datepicker: false,
            onChangeDateTime: function (ct, d) {
                $(d).attr({"date-time": ct.dateFormat("Hi")})
                console.log(ct.dateFormat("Hi"))
            },
            onShow: function (ct) {
                this.setOptions({
                    minTime: jQuery('#date_timepicker_start').val() ? jQuery('#date_timepicker_start').val() : false
                })
            },
            format: 'H:i'
        });

        $(".add-course").on("click", coursetime.add_course);
        $(".course-time-tbody").on("click", ".save-course", coursetime.save_course).on("click", ".del-course", coursetime.del_course);
    }
    return coursetime;
});
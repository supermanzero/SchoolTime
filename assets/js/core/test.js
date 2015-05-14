define(function() {
    var dt=dt || {};
    dt.out=function(){
        console.log(123)
    };
    dt.kk=function(){
        console.log("kk")
    };
    return dt
});

var alltable={
    "class":["一年级1班","一年级2班","一年级3班"],
    "course":[
        {"week":"周一","jointcount":"3","activity":"早读","starttime":"08:00","endtime":"08:45","jointcourse":["语文","数学","空"]},
        {"week":"","jointcount":"","activity":"第一节","starttime":"08:00","endtime":"08:45","jointcourse":["语文","数学","空"]},
        {"week":"","jointcount":"","activity":"第二节","starttime":"08:00","endtime":"08:45","jointcourse":["语文","数学","空"]}
    ]
}
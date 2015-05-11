/**
 * Created by Administrator on 2015/4/9.
 * 设置教师组
 */
define(["easyui/easyloader"],function () {

    var Teachgroup=Teachgroup || {};

    Teachgroup.addteach=function(){
        var tlp='<tr> <td> <input type="text" name="" class="easyui-validatebox teachgroup-val" data-options="required:true,missingMessage:\'不能为空\'"/> </td> <td> <button class="yui3-u cp-button save-teachgroup">确定</button> </td> </tr>';
        var dom=$("#getTeachgroup-tbody").append(tlp);
        $.parser.parse(dom);
    }

    Teachgroup.saveteach=function(input){
        if(!(Teachgroup.getval($(this)).validatebox('isValid'))){
            return
        }
        Teachgroup.getval($(this)).after("<p>"+Teachgroup.getval($(this)).val()+"</p>").remove();
        $(this).after("<button class='yui3-u cp-button del-teachgroup'>删除</button>").remove();
    }

    Teachgroup.delteach=function(){
        $(this).closest("tr").remove()
    }

    Teachgroup.getval=function(dom){
        return $(dom).closest("tr").find(".teachgroup-val")
    }

    Teachgroup.init=function(){
        easyloader.load(["validatebox"])
        $("#getTeachgroup-tbody").on("click",".save-teachgroup",Teachgroup.saveteach).on("click",".del-teachgroup",Teachgroup.delteach)
        $(".getTeachgroup tfoot").on("click",".add-teachgroup",Teachgroup.addteach)
    }
    return Teachgroup;
});
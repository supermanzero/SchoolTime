/**
 * Created by Administrator on 2015/4/9.
 */
define(["easyui/easyloader"],function () {
    return function(){
        easyloader.load("datagrid",function(){
            $("#dg").datagrid({
                rownumbers:true,
                selectOnCheck:false,
                iconCls: 'icon-edit',
                singleSelect: true,
                toolbar: '#tb',
                url: json_url,
                method: 'get',
                onClickRow: onClickRow
            })
            var editIndex = undefined;
            function endEditing(){
                if (editIndex == undefined){return true}
//        console.log($('#dg').datagrid('validateRow', editIndex))
                if ($('#dg').datagrid('validateRow', editIndex)){
                    var ed = $('#dg').datagrid('getEditor', {index:editIndex});
//            var productname = $(ed.target).combobox('getText');
//            $('#dg').datagrid('getRows')[editIndex]['productname'] = productname;
                    $('#dg').datagrid('endEdit', editIndex);
                    editIndex = undefined;
                    return true;
                } else {
                    return false;
                }
            }
            function onClickRow(index){
                if (editIndex != index){
                    if (endEditing()){
                        $('#dg').datagrid('selectRow', index)
                            .datagrid('beginEdit', index);
                        editIndex = index;
                    } else {
                        $('#dg').datagrid('selectRow', editIndex);
                    }
                }
            }
            function append(){
                if (endEditing()){
                    $('#dg').datagrid('appendRow',{status:'P'});
                    editIndex = $('#dg').datagrid('getRows').length-1;
                    $('#dg').datagrid('selectRow', editIndex)
                        .datagrid('beginEdit', editIndex);
                }
            }
            function removeit(){
                if (editIndex == undefined){return}
                $('#dg').datagrid('cancelEdit', editIndex)
                    .datagrid('deleteRow', editIndex);
                editIndex = undefined;
            }
            function accept(){
                if (endEditing()){
                    $('#dg').datagrid('acceptChanges');
                }
            }
            function reject(){
                $('#dg').datagrid('rejectChanges');
                editIndex = undefined;
            }
            function getChanges(){
                var rows = $('#dg').datagrid('getChanges');
                alert(rows.length+' rows are changed!');
            }

            function del(){
                var rows = $('#dg').datagrid("getChecked");	//获取你选择的所有行
                //循环所选的行
                for(var i =0;i<rows.length;i++){
                    var index = $('#dg').datagrid('getRowIndex',rows[i]);//获取某行的行号
                    $('#dg').datagrid('deleteRow',index);	//通过行号移除该行
                }
            }

            $("#dg").show()
            $(".toolbar").on("click",".addteach",function(){
                append()
            }).on("click",".removeteach",function(){
                del()
            }).on("click",".saveteach",function(){
                accept()
            })
        });
    }();
});
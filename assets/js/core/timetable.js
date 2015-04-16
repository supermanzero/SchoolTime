/**
 * Created by Administrator on 2015/4/15.
 */
easyloader.load(["draggable","droppable"],function(){
    $(function(){
        $('.left .item').draggable({
            revert:true,
            proxy:'clone'
        });
        $('.right .item').draggable({
            revert:true,
            proxy:'clone'
        });

        $('.right td.drop').droppable({
            onDragEnter:function(){
                $(this).addClass('over');
            },
            onDragLeave:function(){
                $(this).removeClass('over');
            },
            onDrop:function(e,source){
                if($(source).hasClass('assigned')){
                    $(this).removeClass('over');
                    console.log($(this))
                    return
                }
                $(this).removeClass('over');
//                console.log(e,source)
                if ($(source).hasClass('assigned')){
                    $(this).append(source);
                } else {
                    var c = $(source).clone().addClass('assigned');
                    $(this).empty().append(c);
                    c.draggable({
                        revert:true
                    });
                }
            }
        });
        $('.left').droppable({
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
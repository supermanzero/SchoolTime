define(["easyui/easyloader","../lib/artDialog4/jquery.artDialog.js"],function(){
    return{
        init: function(){
            this.dialog();
            this.tabFunc();
            this.placeholder();
        },
        data: function(){
           /* *
           * 树形菜单的数据格式：
           *每个节点都拥有以下属性：
           *id：节点id，对载入远程数据很重要。
           *text：显示在节点的文本。
           *state：节点状态，'open' or 'closed'，默认为'open'。当设置为'closed'时，拥有子节点的节点将会从远程站点载入它们。
           *checked：表明节点是否被选择。
           *attributes：可以为节点添加的自定义属性。
           *children：子节点，必须用数组定义。
           * */
            return {
                grade : [{
                    "id":1,
                    "text":"全校",
                    "children":[{
                        "text":"一年级",
                        "children": [{
                            "text": "一年级（1）班",
                            "checked":true
                        },{
                            "text": "一年级（2）班"
                        }]
                    },{
                        "text":"二年级",
                        "state":"closed",
                        "children": [{
                            "text": "二年级（1）班"
                        },{
                            "text": "二年级（2）班"
                        }]
                    }]
                }],
                sbubject : [{
                    "id":1,
                    "text":"全部科目",
                    "children":[{
                        "text":"语文"
                    },{
                        "text": "数学"
                    }]
                }],
                teacher: [{
                    "id":1,
                    "text":"全选",
                    "children":[{
                        "text":"语文组",
                        "children": [{
                            "text": "张三"
                        }]
                    },{
                        "text": "数学组",
                        "state":"closed",
                        "children": [{
                            "text": "张三"
                        }]
                    }],
                "checked":true
                }]
            }
        },
        dialog: function(){
            var obj = this;
            $('.constraint-btn').on('click', function(){
                var $_constraint = document.getElementById('constraint');
                art.dialog({
                    content: $_constraint,
                    title: '添加约束条件',
                    width: '554px',
                    //height:'260px',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.5,   // 透明度'
                    init: function(){

                    }
                });
            });

            $('.choose-obj').on('click', function(){
            var $_object = document.getElementById('object');
            art.dialog({
                content: $_object,
                title: '选择对象',
                width: '454px',
                lock: true,
                background: '#000', // 背景色
                opacity: 0.5,   // 透明度
                init: function(){
                    var $_ExitBtn = $('.exitBnt'),
                        than = this;
                    $_ExitBtn.on('click', function(){
                        than.close();
                    })
                    obj.tree();
                }
            });
            })

            $('.choose-school').on('click', function(){
                var $_school = document.getElementById('school');
                art.dialog({
                    content: $_school,
                    title: '选择对象',
                    width: '272px',
                    lock: true,
                    background: '#000', // 背景色
                    opacity: 0.5,   // 透明度
                    init: function(){
                        var $_ExitBtn = $('.exitBnt'),
                            than = this;
                        $_ExitBtn.on('click', function(){
                            than.close();
                        })
                        obj.tree();
                    }
                });
            })
        },
        tabFunc: function(){
            $('.tab-menu').find('.tab-menu-list').on('click', function(){
                var that = $(this),
                     index = that.index();
                that.addClass('active').siblings().removeClass('active');
                that.parent().parent().parent().children('.tab-content').children('.tab-box').hide().eq(index).show();
            })
        },
        tree:function(){
            var data = this.data();
            easyloader.load("tree",function(){
                $('#grade').tree({
                    method: 'post',
                    //url:'tree_data.json'
                    data: data.grade
                });
                $('#sbubject').tree({
                    //url:'tree_data.json'
                    data: data.sbubject
                });
                $('#teacher').tree({
                    //url:'tree_data.json'
                    data: data.teacher
                });
                $('#class').tree({
                    //url:'tree_data.json'
                    data: data.grade
                });
            });
        },
        placeholder: function(){
            if( !('placeholder' in document.createElement('input')) ){
                $('input[placeholder],textarea[placeholder]').each(function(){
                    var that = $(this),
                        text= that.attr('placeholder');
                    if(that.val()===""){
                        that.val(text).addClass('placeholder');
                    }
                    that.focus(function(){
                        if(that.val()===text){
                            that.val("").removeClass('placeholder');
                        }
                    })
                        .blur(function(){
                            if(that.val()===""){
                                that.val(text).addClass('placeholder');
                            }
                        })
                        .closest('form').submit(function(){
                            if(that.val() === text){
                                that.val('');
                            }
                        });
                });
            }
        }
    };
})
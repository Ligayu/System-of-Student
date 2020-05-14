(function () {
  // 需要不需要写jQuery入口函数? 可以不写
  // 1. 渲染页面
  // 1.1 一打开页面的时候,就应该要发送ajax请求
  // 1.2 将服务器响应回来的数据渲染到页面上
  // 1.3 使用模板引擎将数据渲染到页面上
  // 1.1 发送ajax请求,获取页面中的数据

  render() // 由于一打开页面，就要页面数据，所以先调用一次
  function render() {
    $.ajax({
      type: 'get',
      url: '../api/findUsers.php',
      success: function (res) {
        // console.log(res); //返回的是一个对象
        // console.log(typeof res);
        if (res.code == 0) {
          //1.2  调用方法将数据与模板绑定
          var htmlStr = template('userList', res)
          // 1.3 将数据渲染到页面上
          $('tbody').html(htmlStr)
          window.list = res.list; //获取到的数据赋值给list
        }
      }
    })
  }

  // 2. 添加学生数据
  // 2.1 给添加按钮注册事件
  // 2.2 事件触发时,要弹出模态框 用模态框收集数据
  // 2.3 单击模态框的确定按钮的时候,要向服务器发送数据
  // 2.4 接收服务器响应回来的数据
  // 2.5 如果添加成功,则刷新页面 意味着重新获取所有的数据渲染在页面上

  // 2.1 给添加按钮注册事件
  $('.btn-add').on('click', function () {
    // 2.2 弹出模态框
    $('.addModal').modal('show')

    // 要将之前的数据清空
    $('#myForm').get(0).reset()
  })

  // 2.3 给模态框中的确定按钮注册事件
  $('.btn-sure-edit').on('click', function () {

    var id = $('input[name=id]').val()
    var url = ''
    // 2.4 发送请求
    $.ajax({
      type: 'post',
      url: id ? '../api/updateUser.php' : '../api/saveUser.php',
      data: $('#myForm').serialize(),
      // serialize()方法，会将form表单中所有具有name属性的input select textarea中的值一并获取，并拼接成字符串 'name=tom&sex=女&academy=前端&introduce=好人'
      dataType: 'json',
      success: function (res) {
        console.log(res);
        console.log(typeof res);
        if (res.code == 0) {
          // 2.5 隐藏模态框
          $('.addModal').modal('hide')
          // 2.6 将添加的新数据也要显示在页面上
          render()
          $('#myForm input[name],#myForm textarea').val('')
        }
      }
    })
  })

  // 3. 删除用户
  // 3.1 给删除按钮注册事件
  // 3.2 弹出模态框 询问是否删除 单击确定才是真正的删除
  // 3.3 当单击模态框的确定按钮的时候，才会发送请求真正的删除数据 根据id来删除数据
  // 3.4 记得获取id 发送给服务器
  // 3.5 接收服务器响应回来的数据，渲染页面

  // 3.1 给删除按钮注册事件
  // 模板生成的数据，相当于是动态创建出来的元素
  // 动态创建出来的元素，不能直接注册事件，得使用委托
  $('tbody').on('click', '.btn-del', function () {
    // 3.2 弹出模态框
    $('.delModal').modal('show')

    // 获取当前按钮所有的那条数据的id
    window.id = $(this).data('id')
  })

  $('.btn-sure-delete').on('click', function () {
    $.ajax({
      url: '../api/removeUser.php',
      type: 'get',
      data: {
        sId: id
      },
      dataType: 'json',
      success: function (res) {
        if (res.code == 0)
          $('.delModal').modal('hide');
        render();
      }
    })
  })


  //更新学生信息
  $('tbody').on('click', '.btn-update', function () {
    $('.addModal').modal('show');
    $('.add-modal-title').html('更新学生信息');
    var index = $(this).data('index');

    var updDate = list[index];//上面获取到的list是个数组
    console.log(list);
    console.log(updDate);

    //设置页面上的数据
    $('#myForm input[name=id]').val(updDate.id); //设置了一个id在隐藏域
    $('#myForm input[name=name]').val(updDate.name);
    $('#myForm input[name=sex]').val(updDate.sex);
    $('#myForm input[name=academy]').val(updDate.academy);
    $('#myForm textarea[name=introduce]').val(updDate.introduce);

  })

  $('.btn-sure-edit').on('click', function () {
    var id = $('input[name=id]').val(); //判断id是否为空
    console.log(id);

    $.ajax({
      url: id ? '../api/updateUser.php' : '../api/saveUser.php',
      tyep: 'post',
      data: $('#myForm').serialize(),
      success: function (res) {
        if (res.code == 0) {
          $('.addModal').modal('hide');
          $('#myForm input[name],#myForm textarea').val('')
          render();
        }
      }
    })
  })
}())
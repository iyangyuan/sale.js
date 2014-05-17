Sale.js -- 快速创建促销样式
=============
  
相关链接：
-------------
  
[Sale.js效果演示地址](http://www.kpdown.com/salejs "Sale.js Demo 开辟软件站赞助")
  
简介：
-------------
  
对于一个用于产品展示、销售的网站而言，很可能需要一种促销的特效。   
一般而言，我们会在商品图片前加一个促销栏，写上一些促销标语、原价、折扣价等。   
如果您的网站比较旧，或者您的新网站没有考虑这个功能，那么后期再加的话，可能需要费一番心思。  
`Sale.js`正是为此而生，她可以轻松的帮您添加促销样式，只需要您做很少的事情。  
  
特性：
-------------
  
`Sale.js`依赖`jQuery`，以`jQuery`插件的形式封装。  
`Sale.js`可以在任意块级元素上添加促销样式，而不影响原有元素。  
`Sale.js`体积小巧，使用方便。  
  
使用说明：
-------------
  
引入`Sale.js`的`css`、`js`文件(不要忘记引入`jQuery`)： 
  
    <!-- sale.js样式 -->
    <link rel="stylesheet" href="css/sale.min.css">
    <!-- 引入Sale.js -->
    <script src="js/sale.min.js"></script>
  
在需要添加促销栏的块级元素中添加如下属性：  
  
`data-mtitle` 主标题  
`data-etitle` 副标题  
`data-oprice` 原价  
`data-nprice` 现价  
  
利用js初始化促销栏：  
  
    $(document).ready(function(){
      //在所有class包含sale-item的元素上调用sale.js
      $(".sale-item").sale({
        //sale栏高度
        //必选
        //例如：50px
        height: "50px",
        //底部圆角半径
        //可选，默认为直角
        //例如：5px;
        radius: "",
        //现价字体大小
        //可选，默认继承父元素字体大小。
        //例如：16px
        fontSize: "16px",
        //现价颜色
        //可选，默认绿色
        //例如：#CC3333
        color: "#CC3333"
      });
    });
  
完整示例：
-------------
  
    <!DOCTYPE HTML>
    <html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <title>Sale.js Demo -- YangYuan</title>
      <!-- 其他样式 -->
      <link href="css/reset.css" rel="stylesheet" media="screen">
      <link href="css/style.css" rel="stylesheet" media="screen">
      <link rel="stylesheet" type="text/css" href="fancybox/jquery.fancybox-1.3.4.css" media="screen" />
      <!-- sale.js样式 -->
      <link rel="stylesheet" href="css/sale.min.css">
    </head>

    <body>
    <div id="page">
      <aside id="sidebar">
        <nav><a class="logo" href="#top" id="nav-logo"><span>www.kpdown.com</span>Sale.js</a>
          <ul>
          <li class="active" id="nav-1"><a href="#home">Home</a></li>
            <li id="nav-2"><a href="#work">Work</a></li>
            <li id="nav-3"><a href="#about">About</a></li>
            <li id="nav-4"><a href="#contact">Contact</a></li>
          </ul>
          <div class="bg_bottom"></div>
        </nav>
      </aside>
      <div id="main-content">
        <section id="top"></section><!-- do not remove ;)-->
        <section id="work" class="clearfix">
          <header>
            <h2>My Work</h2>
          </header>
          <ul class="projects list">
            <li>
              <!-- 在适当的元素上填写data-mtitle等属性 -->
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_1.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_2.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li class="last">
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_3.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_4.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_5.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li class="last">
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_6.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_7.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li>
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_8.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
            <li class="last">
              <figure class="sale-item" data-mtitle="限时低价" data-etitle="赠送限量礼盒" data-oprice="300" data-nprice="99">
                <a href="images/pricing_table_3.jpg" rel="work">
                  <img src="images/work_img_9.jpg" alt="Image" />
                </a>
                <figcaption>
                  <a href="javascript:void(0);">Visit Livesite<span>&nbsp;&rarr;</span></a>
                </figcaption>
              </figure>
            </li>
          </ul>
        </section> <!--end section-->
        
      </div>
    </div>
    <!-- 引入其他js -->
    <script type="text/javascript" src="js/jquery-1.4.3.min.js"></script> 
    <script type="text/javascript" src="fancybox/jquery.mousewheel-3.0.4.pack.js"></script>
    <script type="text/javascript" src="fancybox/jquery.fancybox-1.3.4.pack.js"></script>
    <!-- 引入Sale.js -->
    <script src="js/sale.min.js"></script>
    <script type="text/javascript">
        
        //利用js加载sale栏
        $(document).ready(function(){
          //在所有class包含sale-item的元素上调用sale.js
          $(".sale-item").sale({
            //sale栏高度
            //必选
            //例如：50px
            height: "50px",
            //底部圆角半径
            //可选，默认为直角
            //例如：5px;
            radius: "",
            //现价字体大小
            //可选，默认继承父元素字体大小。
            //例如：16px
            fontSize: "16px",
            //现价颜色
            //可选，默认绿色
            //例如：#CC3333
            color: "#CC3333"
          });
        });
        
      </script>
    </body>
    </html>
  
(function($){
  $.fn.extend({
    sale: function (params){
      var _s = this;
      var saleHtml =  "<div class='item-top-content-outter'>"+
                        "<div class='item-top-content-inner'>"+
                        "<div class='item-product'>"+
                            "<div class='item-top-title'>"+
                                "<h2 id='mainTitle'>"+
                                "@mainTitle"+
                                "</h2>"+
                                "<p id='extraTitle' class='subdescription'>"+
                                "@extraTitle"+
                                "</p>"+
                            "</div>"+
                        "</div>"+
                        "<div class='item-product-price'>"+
                            "<span id='newPrice' class='price-num'>"+
                            "@newPrice"+
                            "</span>"+
                            "<p id='oldPrice' class='subdescription'>"+
                            "@oldPrice"+
                            "</p>"+
                            "<div class='old-price'>"+
                            "</div>"+
                        "</div>"+
                        "</div>"+
                      "</div>";
      var _tag;
      var mainCss;
      var newPriceCss = {};
      var $saleHtml;
      var mainTitle;
      var extraTitle;
      var newPrice;
      var oldPrice;
      var radius = params.radius;
      var saleHeight = params.height;
      var saleColor = params.color;
      var saleFontSize = params.fontSize;
      for(var i=0;i<_s.length;i++){
        _tag = $(_s[i]);
        mainCss = {height: saleHeight};
        //获取信息
        mainTitle = _tag.attr("data-mtitle") || " ";
        saleHtml = saleHtml.replace("@mainTitle",mainTitle);
        extraTitle = _tag.attr("data-etitle") || " ";
        saleHtml = saleHtml.replace("@extraTitle",extraTitle);
        newPrice = _tag.attr("data-nprice") || " ";
        saleHtml = saleHtml.replace("@newPrice",newPrice);
        oldPrice = _tag.attr("data-oprice") || " ";
        saleHtml = saleHtml.replace("@oldPrice",oldPrice);
        //计算位置
        $saleHtml = $(saleHtml);
        mainCss.left = _tag.offset().left+"px";
        mainCss.top = (_tag.offset().top+_tag.outerHeight()-parseInt(mainCss.height))+"px";
        mainCss.width = _tag.outerWidth()+"px";
        //附加样式
        if(radius){
          mainCss.borderRadius = "0 0 "+radius+" "+radius;
        }
        if(saleColor){
          newPriceCss.color = saleColor;
        }
        if(saleFontSize){
          newPriceCss.fontSize = saleFontSize;
        }
        $saleHtml.find("#newPrice").css(newPriceCss);
        $saleHtml.css(mainCss);
        //填入页面
        $saleHtml.appendTo("body");
      }
    }
  });
})(jQuery);
function SetHome(obj,url){
  try{
    obj.style.behavior='url(#default#homepage)';
    obj.setHomePage(url);
  }catch(e){
    if(window.netscape){
     try{
       netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
     }catch(e){
       alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
     }
    }else{
    alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
    }
 }
}

function AddFavorite(title, url) {
 try {
   window.external.addFavorite(url, title);
 }
catch (e) {
   try {
    window.sidebar.addPanel(title, url, "");
  }
   catch (e) {
     alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请进入新网站后使用Ctrl+D进行添加");
   }
 }
}

function DY_scroll(wraper,prev,next,img,speed,or)
 { 
  var wraper = $(wraper);
  var prev = $(prev);
  var next = $(next);
  var img = $(img).find('ul');
  var w = img.find('li').outerWidth(true);
  var s = speed;
  next.click(function()
       {
        img.animate({'margin-left':-w},function()
        {
		   img.find('li').eq(0).appendTo(img);
		   img.css({'margin-left':0});
        });
        });
  prev.click(function()
       {
			img.find('li:last').prependTo(img);
			img.css({'margin-left':-w});
			img.animate({'margin-left':0});
        });
  if (or == true)
  {
   ad = setInterval(function() { next.click();},s*1000);
   wraper.hover(function(){clearInterval(ad);},function(){ad = setInterval(function() { next.click();},s*1000);});
 
  }
 }
 
$(function(){
	var cname="";
	$("#topnav li").hover(function(){
		cname=$(this).attr("class");
		if(!cname){$(this).addClass("hover");}
		$("dl",this).show();
	},function(){
		$("dl",this).hide();
		if(!cname){$(this).removeClass("hover");}
	});
	//
	DY_scroll('.pro_width','.arrow_left','.arrow_right','.pro_width',5,true);

})


function checksearch(the)
{  
	if ($.trim(the.key.value)=='')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
	if ($.trim(the.key.value)=='请输入关键字')
	{   alert('请输入关键字');
		the.key.focus();
		the.key.value='';
		return false
	}
}



wow = new WOW({
  animateClass: 'animated',
  offset: 100
});
wow.init();
document.getElementById('moar').onclick = function() {
  var section = document.createElement('section');
  section.className = 'section--purple wow fadeInDown';
  this.parentNode.insertBefore(section, this);
};


// Header
$(function(){
  $.ajax({
      url:"header.html",
      type:"get",
      success: function(res) {
          $(res).replaceAll("#header")
      }
  })
})

//Footer
$(function(){
  $.ajax({
      url:"footer.html",
      type:"get",
      success: function(res) {
          $(res).replaceAll("#footer")
      }
  })
})



$(function(){
  //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
  $(function () {
      $(window).scroll(function(){
          if ($(window).scrollTop()>100){
              $("#toTop").fadeIn(1500);
          }
          else
          {
              $("#toTop").fadeOut(1500);
          }
      });
      //当点击跳转链接后，回到页面顶部位置
      $("#toTop").click(function(){
          $('body,html').animate({scrollTop:0},1000);
          return false;
      });
  });
});


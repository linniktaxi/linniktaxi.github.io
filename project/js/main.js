$(document).ready(function(){
	
	$(".button").click(function(){
		$(this).next(".tariffs-inner").addClass("active").siblings(".tariffs-inner").removeClass("active"); 
		$(this).find("img").attr({"src":"project/images/checked.png", "class":"checked"})
		.parent().next().addClass("active")
		.parent(this).siblings(".button").find("img").attr({"src":"project/images/notchecked.png", "class":"not_checked"})
		.parent().next().removeClass("active");
	})
	
	$("#submit").click(function(){
		if ( $(".taxi4-static").hasClass("start") ) {
			$(".success").html("<p>Ваша машина уже в пути!</p>");
		}
	
		$(".back").addClass("block");
		setTimeout(function(){
			$(".taxi4-static").addClass("start");
		}, 2000);
		return false;
	});
	
	$(".exit").click(function(){
		$(".back").removeClass("block");
	});
	
	$(window).scroll(function(){
		if ( $(window).width() > 767) {
			if ( $(this).scrollTop() > 70 ) {
				$(".menu-tel").css("position","fixed");
				$(".bg-form").css("padding-top","100px");
			}
			else if ( $(this).scrollTop() <= 70 ) {
				$(".menu-tel").css("position","static");
				$(".bg-form").css("padding-top","25px");
			}
		}
		if ( $(window).width() <= 767) {
			$(".menu-tel").css({"position":"static","top":"0"});
			$(".bg-form").css("padding-top","25px");	
		}	
	});
	
});
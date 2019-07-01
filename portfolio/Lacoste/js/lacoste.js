window.onload = function() {
    var header = document.querySelector("header");
	
	var headerMenu = document.querySelector(".header_menu");
	
	
	var subMen = header.querySelector(".sub_men");
	var btns = headerMenu.querySelector(".header_menu_btns");
	var btn = headerMenu.querySelectorAll(".header_menu_btns > div");

	var subWomen = header.querySelector(".sub_women");
	var subKids = header.querySelector(".sub_kids");
	var subevent = header.querySelector(".sub_event");
	console.log(btn)

	

	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("mouseenter", enterWork);
		btn[i].addEventListener("mouseleave", leaveWork);
	}
	
	
	function enterWork(e) {
		console.log(e.target);
		
		if (e.target.tagName === "DIV") {
			e.target.classList.add("on");console.log("a")
			
		}else {return;}
		
		
	}
	function leaveWork(e) {
		console.log("leave");
	}
}
	


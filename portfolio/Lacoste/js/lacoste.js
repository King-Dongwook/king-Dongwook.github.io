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
		e.target.classList.remove("on")
	}

	// 우선 햄버거메뉴먼저 할래
	searchMenu();
	function searchMenu() {
		var htmlEl = document.querySelector("html");
		var headerSmall = document.querySelector(".header_small");
		var search = headerSmall.querySelector(".search_small");
		var white = headerSmall.querySelector(".white");
		var whiteClose = white.querySelector(".close")


		console.log(search);

		search.onclick = function(e) {
			e.preventDefault();
			if (white.classList.contains("on")) {
				white.classList.remove("on");
				htmlEl.style.overflow = "scroll";
			} else {
				white.style.display = "block";
				white.classList.add("on");
				htmlEl.style.overflow = "hidden";
			}
			
		}
		whiteClose.onclick = function(e) {
			e.preventDefault();
			white.classList.remove("on");			
			htmlEl.style.overflow = "scroll";
			white.style.display = "none";
		}
	}
}
	


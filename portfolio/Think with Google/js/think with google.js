window.onload = function() {
    var nav = document.querySelector("nav");
    var navMenu = nav.querySelectorAll(".nav_menu");
    var navSubs = document.querySelector(".nav_menu_sub");
    var btn;
    


    for (var i = 0; i < navMenu.length; i++) {
        navMenu[i].addEventListener("mouseenter", enterWork);
        navMenu[i].addEventListener("mouseleave", leaveWork);			
    }
    var a;
    function enterWork(e) {
        var subMenu = e.target.querySelector(".nav_menu_sub");
        e.target.children[0].classList.add("on");
        if (!subMenu) {return;}
        subMenu.classList.add("on");
        
        a = subMenu;			
    }
    function leaveWork(e) {			
        e.target.children[0].classList.remove("on");
        if (!a) {return;}
        a.classList.remove("on");			
    }
    
    
    var search = document.querySelector(".search");
    var searchSub = document.querySelector(".search_sub");
    var header = document.querySelector("header");
    var mainEl = document.querySelector("main");
    console.log(mainEl)

    search.addEventListener("click", clickWork);

    function clickWork() {
        
        if ( searchSub.className !== "search_sub on" ) {
            searchSub.classList.add("on");
            header.style.zIndex = "20"; 
            mainEl.classList.add("down");

        } else {console.log(searchSub);
            searchSub.classList.remove("on");
            header.style.zIndex = "20"; 
            mainEl.classList.remove("down");
            
        }
        
    }

    var htmlEl = document.querySelector("html");
    var menuSmall = htmlEl.querySelector(".menu_small");
    var sideMenu = htmlEl.querySelector(".side_menu");
    var cancel = sideMenu.querySelector(".cancel");
    var black = htmlEl.querySelector(".black");

    menuSmall.addEventListener("click", smallWork);
    cancel.addEventListener("click", cancelWork);

    function smallWork() {
        sideMenu.classList.add("on");
        htmlEl.style.overflow = "hidden"
        black.classList.add("on");

        console.log(menuSmall)
    }
    function cancelWork() {
        sideMenu.classList.remove("on");
        htmlEl.style.overflow = "scroll"
        black.classList.remove("on");
    }
}


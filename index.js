let navtoggle =false;
function navbar(){
    if(navtoggle===false){
        document.getElementById("nav-links").style.height="250px";
        document.getElementById("icon").classList.remove("fa-bars");
        document.getElementById("icon").classList.add("fa-xmark");

        navtoggle=true;
    }
    else{
        document.getElementById("nav-links").style.height="0px";
        document.getElementById("icon").classList.remove("fa-xmark");
        document.getElementById("icon").classList.add("fa-bars");
        navtoggle=false;
    }
}
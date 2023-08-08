function myNav()
{
    let bar=document.getElementById("bar");
    let nav=document.querySelector(".nav");
    bar.onclick=()=>{
        if(nav.style.right=="0%")
        {
            nav.style.right="-50%";
            bar.src="images/menu.png";
            
        }
        else{
            nav.style.right="0%"
            bar.src="images/x.png";
        }
    }
}

myNav();

function myHeader()
{
    let header=document.getElementById("header");
   
    window.addEventListener("scroll",function(){

        if(window.scrollY>0)
        {
            console.log("hello");
            header.classList.add("active");
            document.getElementById("items").style.color="#1a1717";

        }
        else{
            header.classList.remove("active");
        }
    })
}
myHeader();


function totop()
{
    let top=document.querySelector(".top");
    window.onscroll=()=>{
        if(window.scrollY>100 || document.documentElement.scrollTop>100){
            top.style.display="block";
        }
        else{
            top.style.display="none";
        }
    }

    top.onclick=()=>{
        scrollTo(0,0)
    }
}
totop();
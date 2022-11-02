    // ============== OUVRIR ET FERMER LE TOGGEL =============== //

    var navigation = document.querySelector('nav')
    document.querySelector('.toggle').onclick = function(){
    this.classList.toggle('active');
    navigation.classList.toggle('active');
    }

    window.addEventListener('scroll',()=>{
    navigation.classList.remove('active')
    document.querySelector('.toggle').classList.remove('active')

    })


    document.querySelector('section').addEventListener('click',()=>{
    navigation.classList.remove('active')
    document.querySelector('.toggle').classList.remove('active')
    })



// ======= ANIMATION SUR NAVBAR ======= //

var menu = document.querySelector('header');
var menu_nav = document.querySelector('nav .menu a');

addEventListener('scroll', ()=>{
    if(scrollY > 300){
        menu.classList.add('header')
        menu.style.zIndex=100
    }
    else
        menu.classList.remove('header')
})



    // =================== ABOUT DARK AND LIGHT MODE =================//

    var btn = document.getElementById('btn1')
        btn.addEventListener('click',()=>{
            var body = document.querySelector('body')
            body.classList.add('light')
            var body = document.querySelector('body')
            body.classList.remove('dark')
            
        })
        
        var btn = document.getElementById('btn2')
        btn.addEventListener('click',()=>{
            var body = document.querySelector('body')
            body.classList.add('dark')
            var body = document.querySelector('body')
            body.classList.remove('light')
            
        })

        

// ------------------------------------------------------------------



var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove",function(e){
    cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX +
    "px; top:"+e.clientY +"px;";
})




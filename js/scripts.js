console.log("Hi everyOne");

/* SCROLL DOWN / UP DEL NAVBAR::AFTER BARRA DE COLORES*/

window.addEventListener("scroll",function() {
    /* añade la etiqueta a la variable */
    var header = document.querySelector("header");
    /* si scrollY>0 (desplazamiento) añadimos una clase */
        header.classList.toggle("scroll-barraColores-down",window.scrollY>0);        
        header.classList.toggle("scroll-barraColores-up",window.scrollY==0);
}) 



/* SCROLL DOWN / UP DEL NAVBAR - LOGO*/

window.addEventListener("scroll",function() {
    /* añade la etiqueta a la variable */
    var header_logo = this.document.getElementById("logo");
    console.log(header_logo);
    /* si scrollY>0 (desplazamiento) añadimos una clase */
        header_logo.classList.toggle("scroll-logo-down",window.scrollY>0);        
        header_logo.classList.toggle("scroll-logo-up",window.scrollY==0);
}) 


/* SCROLL DOWN / UP DEL NAVBAR - CONTACT*/

window.addEventListener("scroll",function() {
    /* añade la etiqueta a la variable */
    var header_contact = this.document.getElementById("contact");
    console.log(header_contact);
    /* si scrollY>0 (desplazamiento) añadimos una clase */
        header_contact.classList.toggle("scroll-contact-down",window.scrollY>0);        
        header_contact.classList.toggle("scroll-contact-up",window.scrollY==0);
}) 

/* SCROLL DOWN / UP DEL NAVBAR - RRSS*/

window.addEventListener("scroll",function() {
    /* añade la etiqueta a la variable */
    var header_rrss = this.document.getElementById("rrss");
    console.log(header_rrss);
    /* si scrollY>0 (desplazamiento) añadimos una clase */
        header_rrss.classList.toggle("scroll-rrss-down",window.scrollY>0);        
        header_rrss.classList.toggle("scroll-rrss-up",window.scrollY==0);

    /* modificar visibilidad */
}) 

/* /////////////////////////////////////////////////////////////////// */
/*  Desplegar y cerrar el navbar en formato celular */ 
       
            let menuList = document.getElementById("menuList")
            menuList.style.maxHeight = "0px";

            function toogleMenu(){
                if (menuList.style.maxHeight == "0px") {

                        menuList.style.maxHeight = "1000px";

                } else {
                        menuList.style.maxHeight = "0px";
                }
            }
/* /////////////////////////////////////////////////////////////////// */
 /* control del tiempo entre slides del carousel */ 
    document.addEventListener('DOMContentLoaded', function () {
            var myCarousel = document.getElementById('myCarousel');
            var carousel = new bootstrap.Carousel(myCarousel,
                {
                    interval: 5000, // Intervalo de tiempo en milisegundos entre cada diapositiva 
                    wrap: true
                });
        });

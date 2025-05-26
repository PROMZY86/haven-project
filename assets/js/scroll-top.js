    const scrollToTopBtn = document.getElementById("element-scroll-to-top-btn");
    window.onscroll = function(){
        if(document.body.scrollTop > 400 || document.documentElement.scrollTop > 400){
        scrollToTopBtn.style.display = "block";
        }else{
         scrollToTopBtn.style.display = "none";  
        }
    };

  function scrollToTop() {
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1000); // Added delay of 300ms
}
class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
     
  }
  
    
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
       
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
  
      }
      
      return this;
    }
  
  
  }
  
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  
  
  mobileNavbar.init();
  function calculate(){
    var imc = document.querySelector(".imc")
    var altura = document.getElementById("altura").value; 
    var peso = document.getElementById("peso").value; 
    var res = peso/ (altura**2).toFixed(2);
    console.log(res)
    var resultadoimc = res.toFixed(2)

    if(res < 18.5){
        imc.textContent = resultadoimc + (" você está magro!");
    }else if(res <24.9){
        imc.textContent = resultadoimc + (" você está saudável!");
    }
    else if(res <29.9){
        imc.textContent = resultadoimc + (" você está sobrepeso!");
    }
    else if(res <39.9){
        imc.textContent = resultadoimc + (" você está OBESO IGUAL O ARTHUR!");
    }
    else if(res <49.9){
        imc.textContent = resultadoimc + (" você está MUITO OBESO IGUAL O ARTHUR");
    }
    
}
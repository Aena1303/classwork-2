const burgerCreator = () => {
  const backdrop = document.querySelector(".backdrop");
  const mobileBtn = document.querySelector(".mobile-btn");
  const nav = document.querySelector(".nav"); 

  mobileBtn.addEventListener("click", () => {
    backdrop.classList.toggle("show-backdrop");
    mobileBtn.classList.toggle("show-mobile-btn");
    nav.classList.toggle("show-nav"); 
  });

  backdrop.addEventListener("click", () => {
    backdrop.classList.remove("show-backdrop");
    mobileBtn.classList.remove("show-mobile-btn");
    nav.classList.remove("show-nav"); 
  });

  nav.addEventListener("click", () => {
    backdrop.classList.remove("show-backdrop");
    mobileBtn.classList.remove("show-mobile-btn");
    nav.classList.remove("show-nav");
  });
};

burgerCreator();



 // backdrop.addEventListener("click", () => {
  //   alert("backdrop");
  // });


  
window.addEventListener('scroll',()=>{
    console.log(document.documentElement.scrollTop)
})
  window.addEventListener('scroll', () => {
    const homeElement = document.querySelector('.home');
    const aboutElement = document.querySelector('.about');
    const projectElement = document.querySelector('.project');
    const contactElement = document.querySelector('.contact');
  
    var scrollPosition = document.documentElement.scrollTop;
  
    if (scrollPosition >= 0 && scrollPosition <= 800) {
      homeElement.classList.add('active');
      aboutElement.classList.remove('active');
      projectElement.classList.remove('active');
      contactElement.classList.remove('active');
    } else if (scrollPosition >= 801 && scrollPosition <= 1548) {
      homeElement.classList.remove('active');
      aboutElement.classList.add('active');
      projectElement.classList.remove('active');
      contactElement.classList.remove('active');
    }

    else if(scrollPosition >= 1549 && scrollPosition <= 2590){

        homeElement.classList.remove('active');
      aboutElement.classList.remove('active');
      projectElement.classList.add('active');
      contactElement.classList.remove('active');

    }


    else if(scrollPosition >= 2591){
        homeElement.classList.remove('active');
      aboutElement.classList.remove('active');
      projectElement.classList.remove('active');
      contactElement.classList.add('active');

    }
    // Add more conditions for other ss ections as needed
  });
  




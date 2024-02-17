locoScroll.on('scroll', (instance) => {
  const homeElement = document.querySelector('.home');
  const aboutElement = document.querySelector('.about');
  const projectElement = document.querySelector('.project');
  const contactElement = document.querySelector('.contact');

  const scrollPosition = instance.scroll.y;
  console.log(scrollPosition)

  if (scrollPosition >= 0 && scrollPosition <= 500) {
    homeElement.classList.add('active');
    aboutElement.classList.remove('active');
    projectElement.classList.remove('active');
    contactElement.classList.remove('active');
  } else if (scrollPosition >= 501 && scrollPosition <= 1000) {
    homeElement.classList.remove('active');
    aboutElement.classList.add('active');
    projectElement.classList.remove('active');
    contactElement.classList.remove('active');
  } else if (scrollPosition >= 1001 && scrollPosition <= 1600) {
    homeElement.classList.remove('active');
    aboutElement.classList.remove('active');
    projectElement.classList.add('active');
    contactElement.classList.remove('active');
  } else if (scrollPosition >= 1800) {
    homeElement.classList.remove('active');
    aboutElement.classList.remove('active');
    projectElement.classList.remove('active');
    contactElement.classList.add('active');
  }
  // Add more conditions for other sections as needed
});

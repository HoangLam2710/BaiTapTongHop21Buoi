window.onscroll = function (event) {
  let progressBars = document.getElementsByClassName('progress__bar')
  Array.from(progressBars).forEach(bar => {
    // console.dir(bar)
    
    // window.scrollY: current scroll Position
    // window.innerHeight: visible viewport height (not full html height)
    // ele.offsetTop: length from top of page to element
    // ele.clientHeight: height of element
    
    let windowTop = window.scrollY;

    // scroll when reach number "70%, 80%, 90%, ..." => minus about 20px     
    let positionSkills = document.getElementById("skills");
    let eleTop = positionSkills.offsetTop - 500;
    
    // If position of scrolling is in the range of visible element => true
    if (eleTop <= windowTop) {
      bar.classList.add('active');
    }
  })

  let navBarFixed = document.querySelector('.header-sticky');
  if(window.scrollY > 50) {
      navBarFixed.classList.add('isScrolling');
  }
  else {
      navBarFixed.classList.remove('isScrolling');
  }

  let backToTop = document.querySelector('.back-to-top');
  if(window.scrollY > 300) {
    backToTop.classList.add('isVisible');
  }
  else {
    backToTop.classList.remove('isVisible');
  }

  document.querySelector('home').scrollIntoView({ behavior: 'smooth' });
}
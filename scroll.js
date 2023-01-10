function pageScroll() {

  window.scrollBy(0,1);
  scrolldelay = setTimeout(pageScroll,22);
}

function stopScroll() {
  clearTimeout(scrolldelay);
}

function topFunction() {
  
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  stopScroll();
} 
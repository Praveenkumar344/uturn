// src/hooks/scrollToId.js

export function scrollToId(id="") {
  if(id=="home"){
      window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }
  const element = document.getElementById(id);
  if (element) {
    const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
    const offset = window.innerHeight / 2 - element.offsetHeight / 2;

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }
}

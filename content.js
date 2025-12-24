const highZIndex = 9999;

document.addEventListener('load', (e) => {
  const target = e.target;
  if (target.tagName === 'IMG') {
    target.style.zIndex = highZIndex; 
  }
}, true);
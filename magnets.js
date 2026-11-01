// MAGNET LAYERNG
let topZ = 100;

document.addEventListener('mousedown', (e) => {
  const win = e.target.closest('.magnet');
  if (win) win.style.zIndex = ++topZ;
});

// DRAGGABLE MAGNETS

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || magnet.event;
    if (e.target.tagName === 'INPUT') {
    return; 
    }
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
    
    document.querySelectorAll('iframe').forEach(function(f) {
    f.style.pointerEvents = 'none';
  });
  
  }

  function elementDrag(e) {
    e = e || magnet.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    
    document.querySelectorAll('iframe').forEach(function(f) {
    f.style.pointerEvents = 'auto';
  });
  
  }
}

document.querySelectorAll('.magnet').forEach(function(win) {
  dragElement(win);
});

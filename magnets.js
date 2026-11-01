// MAGNET ARRAY
const magnets = [
  "a", "a", "a", "a", "a",
  "I",
  "an", "an",
  "to", "to", "to",
  "of", "of", "of", "of",
  "am",
  "it",
  "me",
  "is", "is", "is",
  "on",
  "or",
  "in",
  "eye",
  "and",
  "all",
  "out",
  "was", "was",
  "one",
  "now", "now",
  "the",
  "hole",
  "code", "code", "code",
  "what", "what", "what",
  "like", "like", "like", "like", "like", "like",
  "back",
  "this",
  "that",
  "into",
  "game",
  "once", "once",
  "zero",
  "true",
  "black",
  "radio",
  "pulse",
  "press",
  "nodes",
  "paths",
  "truly",
  "stars",
  "watch",
  "bleed",
  "shell",
  "erode",
  "blind",
  "false",
  "blink",
  "escape",
  "tracks",
  "making", "making",
  "angels",
  "snakes",
  "storms",
  "fridge",
  "levels",
  "entire",
  "neurons",
  "singing",
  "circles",
  "quantum",
  "ditches",
  "magnets",
  "fifteen",
  "speaking", "speaking",
  "writhing",
  "galaxies",
  "hardware",
  "charades",
  "lifetime",
  "infomania",
  "supernova",
  "exploding",
  "mechanics",
  "expanding",
  "mountains",
  "explained",
  "abstraction"
];

// POPULATE MAGNETS
const magnetList = document.getElementById("magnetList");

magnets.forEach((item) => {
            const li = document.createElement("li");
            li.innerText = item;
            li.className = "magnet";
            magnetList.appendChild(li);
        });

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
    e = e || window.event;
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

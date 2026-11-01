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
  const el = document.createElement("div");
  el.className = "magnet";
  el.innerText = item;
  el.dataset.order = i;
  magnetList.appendChild(el);
});

// MOVE WORD
let dragged = null, pending = null;
let startX = 0, startY = 0, offX = 0, offY = 0;

document.addEventListener("mousedown", (e) => {
  const m = e.target.closest(".magnet");
  if (!m) return;
  e.preventDefault();
  pending = m;
  startX = e.clientX;
  startY = e.clientY;
});

// ON DRAG
document.addEventListener("mousemove", (e) => {
  if (pending && !dragged &&
      Math.hypot(e.clientX - startX, e.clientY - startY) > 5) {
    const r = pending.getBoundingClientRect();
    offX = startX - r.left;
    offY = startY - r.top;
    pending.style.width = r.width + "px";
    pending.classList.add("dragging");
    dragged = pending;
  }
  if (!dragged) return;
  dragged.style.left = e.clientX - offX + "px";
  dragged.style.top = e.clientY - offY + "px";
});

document.addEventListener("mouseup", (e) => {
  if (!pending) return;
  const m = pending;
  pending = null;

// ON CLICK
  if (!dragged) {
    if (m.parentElement === fridge) returnToList(m);
    return;
  }

// ON DROP
  dragged = null;
  m.classList.remove("dragging");
  m.style.cssText = "";

  const f = fridge.getBoundingClientRect();
  const overFridge = e.clientX >= f.left && e.clientX <= f.right &&
                     e.clientY >= f.top && e.clientY <= f.bottom;

  if (overFridge) {
    const before = [...fridge.querySelectorAll(".magnet")].find((w) => {
      if (w === m) return false;
      const r = w.getBoundingClientRect();
      return e.clientY < r.top ||
             (e.clientY < r.bottom && e.clientX < r.left + r.width / 2);
    });
    fridge.insertBefore(m, before || null);
  } else {
    returnToList(m);   
  }
});

// RETURN WORD TO LIST
    
function returnToList(m) {
  const order = +m.dataset.order;
  const next = [...magnetList.querySelectorAll(".magnet")]
    .find((w) => +w.dataset.order > order);
  magnetList.insertBefore(m, next || null);
}
  }
  dragged = null;
});
 

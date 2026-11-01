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
  magnetList.appendChild(el);
});

// PICK WORD

let dragged = null, offX = 0, offY = 0;

document.addEventListener("mousedown", (e) => {
  const m = e.target.closest(".magnet");
  if (!m) return;
  e.preventDefault();
  const r = m.getBoundingClientRect();
  offX = e.clientX - r.left;
  offY = e.clientY - r.top;
  m.style.width = r.width + "px";
  m.classList.add("dragging");
  m.style.left = r.left + "px";
  m.style.top = r.top + "px";
  dragged = m;
});

// MOVE WORD

document.addEventListener("mousemove", (e) => {
  if (!dragged) return;
  dragged.style.left = e.clientX - offX + "px";
  dragged.style.top = e.clientY - offY + "px";
});

// DROP WORD
document.addEventListener("mouseup", (e) => {
  if (!dragged) return;
  dragged.classList.remove("dragging");
  dragged.style.cssText = "";

  const f = fridge.getBoundingClientRect();
  const overFridge = e.clientX >= f.left && e.clientX <= f.right &&
                     e.clientY >= f.top && e.clientY <= f.bottom;

  if (overFridge) {
    const before = [...fridge.querySelectorAll(".magnet")].find((w) => {
      if (w === dragged) return false;
      const r = w.getBoundingClientRect();
      return e.clientY < r.top ||
             (e.clientY < r.bottom && e.clientX < r.left + r.width / 2);
    });
    fridge.insertBefore(dragged, before || null);
  } else {
    magnetList.appendChild(dragged);
  }
  dragged = null;
});
 

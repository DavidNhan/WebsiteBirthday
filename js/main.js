const stage = document.getElementById("stage");
const dotsEl = document.getElementById("dots");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");
const navEl = document.querySelector(".nav");
const song = document.getElementById("song");
const musicBtn = document.getElementById("musicBtn");

const scenes = CONTENT.scenes;
let index = 0;
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

function el(tag, props = {}, ...kids) {
  const e = document.createElement(tag);
  Object.assign(e, props);
  kids.flat().forEach((k) => e.append(k));
  return e;
}

function imageCandidates(name) {
  const hasExt = /\.[a-z0-9]+$/i.test(name);
  if (hasExt) return [name];
  return [`${name}.png`, `${name}.jpg`, `${name}.jpeg`, `${name}.webp`];
}

// Show image from docs/, fall back to a placeholder box until the file exists.
function picture(name, cls, label) {
  const files = imageCandidates(name);
  const img = el("img", { className: cls, alt: "Capy the capybara", src: `docs/${files[0]}` });
  let pos = 0;
  img.onerror = () => {
    pos += 1;
    if (pos < files.length) {
      img.src = `docs/${files[pos]}`;
      return;
    }
    const ph = el("div", { className: cls === "capy" ? "capy-ph" : "photo" });
    ph.innerHTML = `<div><b>🐹</b>${label || name}<br><small>docs/${files[0]}</small></div>`;
    img.replaceWith(ph);
  };
  return img;
}

function renderDots() {
  dotsEl.replaceChildren(...scenes.map((_, i) => el("span", { className: i === index ? "on" : "" })));
}

function go(i) {
  index = Math.max(0, Math.min(scenes.length - 1, i));
  render();
}

function render() {
  const s = scenes[index];
  const isWelcome = s.type === "welcome";
  const wrap = el("section", { className: "scene" });
  if (s.img) wrap.append(picture(s.img, "capy", "Capy"));
  wrap.append(el("h1", { textContent: s.title }));
  if (s.text) wrap.append(el("p", { textContent: s.text }));
  (builders[s.type] || (() => {}))(wrap, s);
  stage.replaceChildren(wrap);
  renderDots();

  navEl.classList.toggle("hidden", isWelcome);
  navEl.style.display = isWelcome ? "none" : "flex";
  backBtn.disabled = index === 0;
  nextBtn.style.visibility = index === scenes.length - 1 ? "hidden" : "visible";
  window.scrollTo({ top: 0 });
}

const builders = {
  welcome(wrap, s) {
    wrap.append(
      el("button", {
        className: "btn big",
        textContent: s.button,
        onclick: () => { startMusic(); go(index + 1); },
      })
    );
    wrap.append(el("p", { className: "hint", textContent: "Tip: turn your sound on, there is a song for you (button in the top right)." }));
  },

  text() {},

  cards(wrap, s) {
    const grid = el("div", { className: "grid" });
    s.cards.forEach((t) => {
      const card = el("button", { className: "card" });
      card.innerHTML = `<div class="inner"><div class="face front">💛</div><div class="face back"></div></div>`;
      card.querySelector(".back").textContent = t;
      card.onclick = () => card.classList.toggle("flipped");
      grid.append(card);
    });
    wrap.append(grid);
  },

  karate(wrap, s) {
    const bubble = el("div", { className: "bubble", textContent: "Ready?" });
    let n = 0;
    const btn = el("button", {
      className: "btn big",
      textContent: s.shout,
      onclick: () => {
        bubble.textContent = s.lines[n % s.lines.length];
        n++;
        burst(40);
      },
    });
    wrap.append(bubble, btn);
  },

  mirror(wrap, s) {
    const bubble = el("div", { className: "bubble", textContent: "✨" });
    let n = 0;
    const btn = el("button", {
      className: "candle",
      textContent: "🪞",
      title: "Tap the mirror",
      onclick: () => {
        bubble.textContent = s.lines[n % s.lines.length];
        n++;
      },
    });
    wrap.append(btn, bubble);
  },

  flowers(wrap, s) {
    const bubble = el("div", { className: "bubble", textContent: "🌱" });
    const row = el("div", { className: "flowers" });
    s.flowers.forEach(([icon, msg]) => {
      row.append(
        el("button", {
          className: "flower",
          textContent: icon,
          "aria-label": "Flower",
          onclick: (e) => { e.currentTarget.classList.add("bloom"); bubble.textContent = msg; },
        })
      );
    });
    wrap.append(row, bubble);
  },

  photos(wrap, s) {
    const grid = el("div", { className: "photos" });
    s.photos.forEach((p) => {
      const img = picture(p, "photo-img", "Photo");
      grid.append(el("div", { className: "photo" }, img));
    });
    wrap.append(grid);
  },

  cake(wrap) {
    const btn = el("button", { className: "candle", textContent: "🎂", title: "Light the candle" });
    const bubble = el("div", { className: "bubble", textContent: "Tap the cake to light the candle." });
    let lit = false;
    btn.onclick = () => {
      if (!lit) {
        lit = true;
        btn.textContent = "🕯️🎂";
        bubble.textContent = "Make your wish... then tap again to blow it out.";
      } else {
        btn.textContent = "🎂";
        bubble.textContent = "Your wish is on its way. Happy birthday, Audrey!";
        burst(120);
      }
    };
    wrap.append(btn, bubble);
  },

  finale(wrap, s) {
    const letter = el("div", { className: "letter" });
    s.letter.forEach((l) => letter.append(el("p", { textContent: l })));
    letter.append(
      el("div", { className: "sign" }, el("div", { textContent: s.signoff }), el("div", { textContent: CONTENT.friends.join(", ") }))
    );
    const again = el("div", { className: "bubble", textContent: "Tap for another kind message from Capy." });
    again.style.cursor = "pointer";
    again.onclick = () => {
      again.textContent = CONTENT.again[Math.floor(Math.random() * CONTENT.again.length)];
    };
    wrap.append(letter, again, el("button", { className: "btn", textContent: "Start again", onclick: () => go(1) }));
    burst(160);
  },
};

// Music
function startMusic() {
  song.volume = 0.4;
  song.play().then(() => setMusic(true)).catch(() => setMusic(false));
}
function setMusic(on) {
  musicBtn.setAttribute("aria-pressed", on);
  musicBtn.textContent = on ? "🔊 Music on" : "🎵 Tap for music! 👉";
}
musicBtn.onclick = () => {
  if (song.paused) startMusic();
  else { song.pause(); setMusic(false); }
};
song.addEventListener("error", () => {
  musicBtn.replaceWith(el("a", { className: "music", href: CONTENT.youtube, target: "_blank", rel: "noopener", textContent: "🎵 Open on YouTube" }));
});

// Gentle pastel confetti
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
let bits = [];
function sizeCanvas() { canvas.width = innerWidth; canvas.height = innerHeight; }
addEventListener("resize", sizeCanvas);
sizeCanvas();

function burst(n) {
  if (reduceMotion) return;
  const colors = ["#ffc8dd", "#ffd6ba", "#cde7c5", "#bde0fe", "#fff1a8"];
  for (let i = 0; i < n; i++) {
    bits.push({
      x: Math.random() * canvas.width, y: -10 - Math.random() * 80,
      r: 4 + Math.random() * 5, vy: 1 + Math.random() * 1.8, vx: (Math.random() - 0.5) * 1.2,
      c: colors[i % colors.length],
    });
  }
  if (bits.length === n) requestAnimationFrame(tick);
}
function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  bits.forEach((b) => {
    b.x += b.vx; b.y += b.vy;
    ctx.fillStyle = b.c;
    ctx.beginPath(); ctx.arc(b.x, b.y, b.r, 0, 7); ctx.fill();
  });
  bits = bits.filter((b) => b.y < canvas.height + 20);
  if (bits.length) requestAnimationFrame(tick);
}

backBtn.onclick = () => go(index - 1);
nextBtn.onclick = () => go(index + 1);
addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") go(index + 1);
  if (e.key === "ArrowLeft") go(index - 1);
});

render();

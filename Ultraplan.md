# Ultraplan: Audrey's Birthday Capybara Adventure

Birthday: **21 October**
Recipient: **Audrey**
Goal: A cute, interactive click-through website that makes Audrey feel seen, warm and encouraged. A capybara guide leads her through every step. Depression is never mentioned.

---

## 1. Vision and Tone

- Soft, warm, gentle. No pressure, no "you must be happy" language.
- Encouraging through small, genuine messages: you are valued, you are enough, rest is fine, small steps count.
- Capybara as calm companion ("Capy"): relaxed, patient, unbothered, always there. Fits the theme of calm and togetherness.
- Everything is optional and at her own pace: no timers, no scores, no failure states.
- Ends with a personal message from the sender.

### Do
- Celebrate who she is (kind, funny, creative, etc. - fill in real details).
- Use gentle humor and cozy imagery (tea, blankets, sunshine, hot springs).
- Offer small "take what you need" items (a coupon, a hug, a playlist).

### Don't
- Mention depression, illness, "getting better", "cheer up", "be strong".
- Use toxic positivity ("just be happy").
- Use flashing, loud or overwhelming effects or sounds. Audio is off by default.

---

## 2. Decisions (answered 2026-10-02)

| # | Question | Answer |
|---|----------|--------|
| 1 | Hosting | Free, reachable worldwide: GitHub Pages under the account **DavidNhan**. Flow: commit, push to a repo in that account, enable Pages. Expected link: `https://davidnhan.github.io/<repo-name>/`. Fallback: Netlify/Cloudflare Pages |
| 2 | Language | English |
| 3 | Personal details about Audrey | Loves karate; finds university tough (never mention directly, only encourage gently); likes to feel "bonita" (beautiful, confident) |
| 4 | Song | Local audio file `docs/song.mp3` is used in the site with a visible music toggle. If audio fails, the app shows a YouTube fallback link (`https://www.youtube.com/watch?v=EJmkQYLmH7A`). |
| 5 | Gifts / coupons | No gifts, no coupons. Messages only |
| 6 | Photos | Implemented in `docs/` with exactly four gallery images: `IMG-20260710-WA0051.jpg`, `PXL_20260707_042445754.jpg`, `PXL_20260708_032807483.jpg`, `WhatsApp Image 2026-07-11 at 06.22.23.jpeg` |
| 7 | Senders | Group of 6 including Audrey. Gift from 5: Henry, Kavita, Leila, Melina and David. Letter signed by all five |
| 8 | Delivery | Link plus QR code (QR on a card or image; test that it works on phones) |

### Consequences for the plan
- Replace "Cozy Corner coupons" with plain encouraging notes only.
- Add karate theme: Capy in a tiny karate gi and belt ("Black belt in being you"), a "kiai" cheer button.
- Add "bonita" theme: a mirror/sparkle stop with confidence compliments ("You light up the room", "Bonita inside and out").
- University: only indirect encouragement ("You are more than any grade", "One step at a time, Capy believes in you"). No exam or stress words.
- Final letter has five signatures (one per friend), optionally one short line from each.
- Photo list is now explicit in `js/content.js` (`scenes[].photos`) and loaded from `docs/`.
- Music currently uses local `docs/song.mp3` with a volume slider and a fallback link to YouTube on load error.
- Risks: the mp3 is a public file in a public repo (copyright); the site works fully without music.
- Hosting: repo must be public for free GitHub Pages; keep personal photos in mind (use only what the friends agree to publish) and avoid putting private details in the repo.

---

## 3. Experience Flow (Implemented)

1. **Welcome screen**: "Hi Audrey! Capy has something special for you." Big button: "Open your gift". Back/Next are hidden on this first screen.
2. **Capy introduces itself**: speech bubble, "Today is your day. Come with me, no rush."
3. **Stop 1 - The Warm Spring**: Capy relaxing in a hot spring. Message: "You are allowed to just be."
4. **Stop 2 - Things Capy Loves About You**: click cards that flip to reveal 5-7 personal compliments.
5. **Stop 3 - Black belt in being you**: KIAI button rotates through supportive lines.
6. **Stop 4 - Feeling bonita**: mirror tap cycles confidence messages.
7. **Stop 5 - Capy's little garden**: click flowers to bloom supportive notes.
8. **Stop 6 - Memories with you**: four-photo gallery loaded from `docs/`.
9. **Stop 7 - Birthday Wish**: cake/candle interaction with gentle confetti.
10. **Finale**: personal letter + random kind-message bubble + "Start again" button.

Navigation: "next" and "back" are shown after the welcome screen. Progress uses top dots.

---

## 3.1 Current Scene Data Source

- All editable scene text is centralized in `js/content.js` under `const CONTENT`.
- Rendering and interaction logic are in `js/main.js`.
- Static shell and script/style includes are in `index.html`.

---

## 4. Tech Stack

- Plain **HTML + CSS + JavaScript** (no build step, easy to host and edit).
- Optional: small animation lib (CSS animations first; Lottie or canvas-confetti only if needed).
- Responsive, mobile-first (she will most likely open it on a phone).
- Accessibility: readable contrast, `prefers-reduced-motion` respected, alt texts, keyboard friendly.

### Current File Structure

```
WebsiteBirthday/
  Ultraplan.md
  index.html
  css/
    style.css
  js/
    main.js          # scene flow, click handlers, interactions
    content.js       # all scene copy and photo filenames
  docs/
    capy-*.png       # capy scene images
    *.jpg/*.jpeg     # memory photos
    song.mp3         # optional local music track
```

---

## 5. Resources

### Capybara Images
- Need: ~8-12 capybara images in different poses (waving, sleeping, with tea, with a party hat, in water, with oranges on head).
- Options:
  - Free stock with permissive licenses: Unsplash, Pexels, Pixabay (check license, credit if required).
  - Illustrated/cartoon style: create or commission, or use free vector sets (check license).
  - AI-generated cartoon capybaras (consistent style, party hat variants) - check tool terms.
- Prefer a **consistent cartoon style** so Capy feels like one character. Transparent PNG/WebP for overlaying on scenes.
- Keep a credits list below.

### Fonts
- Rounded, friendly: Quicksand, Nunito, or Baloo 2 (Google Fonts, OFL license). Handwritten accent: Patrick Hand or Caveat.

### Colors (pastel, warm)
- Cream `#FFF6E9`, peach `#FFD6BA`, soft pink `#FFC8DD`, sage `#CDE7C5`, sky `#BDE0FE`, capybara brown `#B07D56`.

### Audio (optional)
- Soft lo-fi or her favorite song. Muted by default with a clear toggle. Use royalty-free if embedded.

### Hosting
- GitHub Pages or Netlify (free, gives a shareable link). Consider a short custom link and a QR code on a card.

### Credits Log (fill while working)
| Asset | Source | License | Done |
|-------|--------|---------|------|
|       |        |         | [ ]  |

---

## 6. Content Draft Bank (to personalize)

Compliment cards (replace with real ones):
- "You make people feel at ease."
- "Your laugh is contagious."
- "You notice the little things."
- "You are worth celebrating, today and every day."
- "You do not have to earn rest."

Small-win flowers:
- "You showed up today. That counts."
- "Drinking water counts. Capy is proud."
- "Slow days are still good days."

Final letter skeleton:
> Dear Audrey, happy birthday! I wanted to give you a little place to rest and smile. I am really glad you are in my life, because ... Whenever you need a friend, I am here. Always. - [Name]

---

## 7. Phases and Master Checklist

Legend: `[ ]` open, `[~]` in progress, `[x]` done. **Update this list after every work session.**

### Phase 0 - Planning
- [x] Write Ultraplan.md
- [x] Answer open decisions (section 2)
- [x] Collect personal details about Audrey
- [x] Decide language and delivery method
- [x] Collect a short personal line from each of the five friends (letter written in content.js, review with the friends)
- [x] Hosting account: GitHub `DavidNhan`
- [x] Repo name: `WebsiteBirthday`
- [x] Song source: local mp3 in `docs/song.mp3` (YouTube link kept as fallback)

### Phase 1 - Assets
- [x] Choose capybara image style
- [x] Collect/create capybara scene images in `docs/`
- [ ] Prepare optimized images (WebP/PNG, < 300 KB each)
- [x] Select fonts and color palette (theme changed to blue)
- [x] Collect photos and music in `docs/`
- [ ] Fill credits log

### Phase 2 - Content
- [x] Write all texts in English (`js/content.js`)
- [x] Write 5-7 personal compliments
- [x] Write small-win messages
- [x] Write final personal letter
- [x] Read for tone (no depression references, no pressure)

### Phase 3 - Build
- [x] Project skeleton (index.html, css, js)
- [x] Scene engine (next/back, transitions)
- [x] Welcome screen + Capy intro
- [x] Stop 1 - Warm Spring
- [x] Stop 2 - Flip cards
- [x] Stop 3 - Karate KIAI interaction
- [x] Stop 4 - Mirror/bonita interaction
- [x] Stop 5 - Small Wins Garden
- [x] Stop 6 - Memory gallery
- [x] Stop 7 - Cake and wish + gentle confetti
- [x] Finale + letter
- [x] Random kind-message bubble in finale
- [x] Audio toggle (prominent pulsing button) and volume slider
- [x] Blue theme

### Phase 4 - Polish and QA
- [ ] Mobile test (iPhone/Android sizes)
- [ ] Desktop test (Chrome, Firefox, Safari)
- [ ] Reduced-motion and contrast check
- [ ] Typo and tone proofreading
- [ ] Load speed check
- [ ] Test with one trusted person (not Audrey)

### Phase 5 - Launch
- [x] Commit and push to GitHub `DavidNhan`
- [ ] Enable/verify GitHub Pages
- [ ] Deploy/verify hosting URL
- [ ] Test the live link on phone
- [ ] Create QR code / card (optional)
- [ ] Schedule delivery for **21 October** (message at a good time of day, not too early)
- [ ] Have a gentle follow-up message ready

---

## 8. Timeline (backwards from 21 October)

| Target date | Milestone |
|-------------|-----------|
| 05 Oct | Decisions answered, details collected |
| 08 Oct | Assets ready |
| 11 Oct | Content written |
| 15 Oct | Build complete |
| 18 Oct | QA done |
| 19 Oct | Deployed and tested |
| 21 Oct | Delivery |

---

## 9. Risks and Mitigations

| Risk | Mitigation |
|------|-----------|
| Tone feels patronizing | Keep messages specific and personal, avoid advice |
| Too long or overwhelming | Max ~8 stops, each under 30 seconds |
| Image licensing problems | Track every source in credits log |
| Link breaks on the day | Test day before, keep an offline copy (zip) as backup |
| Audrey's phone has poor connection | Small, optimized assets |
| Surprise spoiled | Share the link only on the day |

---

## 10. Changelog

| Date | Change |
|------|--------|
| 2026-10-02 | Created Ultraplan |
| 2026-10-02 | Hosting set to GitHub `DavidNhan` (commit, push, Pages); song switched to YouTube embed (EJmkQYLmH7A) |
| 2026-10-02 | Answered section 2: English, GitHub Pages, karate/bonita themes, Bo Hu Shuo DJ song, no gifts, photo placeholders, five senders, link + QR |
| 2026-10-05 | Synced plan with current repo: local `docs/song.mp3` + YouTube fallback, exact 4-photo gallery, implemented scene flow, welcome screen starts with only "Open your gift" |
| 2026-10-06 | Theme changed to blue, volume slider added next to a larger pulsing music button, compliments updated |

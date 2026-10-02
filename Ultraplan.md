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
| 4 | Song | "伯虎说 - Bo Hu Shuo", DJ version, via YouTube link: https://www.youtube.com/watch?v=EJmkQYLmH7A (video id `EJmkQYLmH7A`; playlist/index params dropped). Embedded with the YouTube IFrame Player API, started only by a visible play button (browsers block autoplay) |
| 5 | Gifts / coupons | No gifts, no coupons. Messages only |
| 6 | Photos | Will follow later; use placeholders for now (group photos of all 6, individual photos) |
| 7 | Senders | Group of 6 including Audrey. Gift from 5: Henry, Kavita, Leila, Melina and David. Letter signed by all five |
| 8 | Delivery | Link plus QR code (QR on a card or image; test that it works on phones) |

### Consequences for the plan
- Replace "Cozy Corner coupons" with plain encouraging notes only.
- Add karate theme: Capy in a tiny karate gi and belt ("Black belt in being you"), a "kiai" cheer button.
- Add "bonita" theme: a mirror/sparkle stop with confidence compliments ("You light up the room", "Bonita inside and out").
- University: only indirect encouragement ("You are more than any grade", "One step at a time, Capy believes in you"). No exam or stress words.
- Final letter has five signatures (one per friend), optionally one short line from each.
- Photo placeholders: `assets/photos/placeholder-1..N`, easy swap by filename.
- Music: use a hidden/small YouTube embed (no audio file hosted, no licensing issue on our side). Keep volume low, toggle visible, remember choice.
- Risks: the video may be blocked in some countries or disallow embedding; add a fallback "Open on YouTube" link and make the site fully work without music.
- Hosting: repo must be public for free GitHub Pages; keep personal photos in mind (use only what the friends agree to publish) and avoid putting private details in the repo.

---

## 3. Experience Flow (Click-Through Story)

1. **Welcome screen**: "Hi Audrey! Capy has something for you." Big friendly button: "Open".
2. **Capy introduces itself**: speech bubble, "Today is your day. Come with me, no rush."
3. **Stop 1 - The Warm Spring**: Capy relaxing in a hot spring. Message: "You are allowed to just be."
4. **Stop 2 - Things Capy Loves About You**: click cards that flip to reveal 5-7 personal compliments.
5. **Stop 3 - Capy's Cozy Corner**: pick-a-card (tea, blanket, snack) that reveals a small encouraging note or tiny coupon.
6. **Stop 4 - Small Wins Garden**: click flowers; each one blooms with a "small thing that matters" message.
7. **Stop 5 - Memory Lane** (optional): photos / shared memories with captions.
8. **Stop 6 - Birthday Wish**: virtual cake, click to light the candle, make a wish, gentle confetti (pastel, slow).
9. **Finale**: Capy and friends celebrate. Personal letter from the sender. Optional button: "Play a song for you".
10. **After**: "Come back anytime" button that reopens a random kind message (lasting value beyond the birthday).

Navigation: always a gentle "next" and "back". Progress shown as little footprints or dots, never as a score.

---

## 4. Tech Stack

- Plain **HTML + CSS + JavaScript** (no build step, easy to host and edit).
- Optional: small animation lib (CSS animations first; Lottie or canvas-confetti only if needed).
- Responsive, mobile-first (she will most likely open it on a phone).
- Accessibility: readable contrast, `prefers-reduced-motion` respected, alt texts, keyboard friendly.

### Planned File Structure

```
WebsiteBirthday/
  Ultraplan.md
  index.html
  css/
    style.css
  js/
    main.js          # scene flow, click handlers
    content.js       # all texts in one place (easy to edit)
  assets/
    capybara/        # guide images
    photos/          # personal photos
    audio/           # optional music
  README.md          # how to deploy (only if needed)
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
- [ ] Collect a short personal line from each of the five friends
- [x] Hosting account: GitHub `DavidNhan`
- [ ] Choose repo name (neutral, does not spoil the surprise)
- [ ] Check the YouTube video embeds correctly and works worldwide

### Phase 1 - Assets
- [ ] Choose capybara image style
- [ ] Collect/create 8-12 capybara images
- [ ] Prepare optimized images (WebP/PNG, < 300 KB each)
- [ ] Select fonts and color palette
- [ ] Collect photos (optional) and music (optional)
- [ ] Fill credits log

### Phase 2 - Content
- [ ] Write all texts in German/English (content.js)
- [ ] Write 5-7 personal compliments
- [ ] Write small-win messages
- [ ] Write final personal letter
- [ ] Read everything once more for tone (no depression references, no pressure)

### Phase 3 - Build
- [ ] Project skeleton (index.html, css, js)
- [ ] Scene engine (next/back, transitions)
- [ ] Welcome screen + Capy intro
- [ ] Stop 1 - Warm Spring
- [ ] Stop 2 - Flip cards
- [ ] Stop 3 - Cozy Corner
- [ ] Stop 4 - Small Wins Garden
- [ ] Stop 5 - Memory Lane (optional)
- [ ] Stop 6 - Cake and wish + gentle confetti
- [ ] Finale + letter
- [ ] "Come back anytime" random kind message
- [ ] Audio toggle (off by default)

### Phase 4 - Polish and QA
- [ ] Mobile test (iPhone/Android sizes)
- [ ] Desktop test (Chrome, Firefox, Safari)
- [ ] Reduced-motion and contrast check
- [ ] Typo and tone proofreading
- [ ] Load speed check
- [ ] Test with one trusted person (not Audrey)

### Phase 5 - Launch
- [ ] Commit and push to GitHub `DavidNhan`, enable GitHub Pages
- [ ] Deploy to hosting
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

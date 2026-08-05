const DECKS = [
  {
    file: 'board-meeting.html',
    title: 'The Board Deck',
    accent: '#f5c542',
    blurb:
      'A Q2 board review where each department presents in its native language — finance as a ledger, engineering as an IDE, design as a live canvas, sales as a leaderboard. You always know whose numbers you are looking at.',
  },
  {
    file: 'acre-atlas.html',
    title: 'The Acre Atlas',
    accent: '#ffd60a',
    blurb:
      'How big are the world’s cities, measured in acres? Nine cities, nine visual dialects: taxi-grid NYC, neon Tokyo, fog-bound London, a Mumbai monsoon that floods into the next slide.',
  },
  {
    file: 'interface-ages.html',
    title: 'The Interface Ages',
    accent: '#33ff33',
    blurb:
      'Fifty years of UI design, each era rendered in itself: terminal phosphor, Geocities chaos, skeuomorphic gloss, flat material, dark mode, and the AI chat era. The deck doesn’t describe the styles — it wears them.',
  },
]

const gallery = document.getElementById('gallery')

DECKS.forEach((deck, i) => {
  const card = document.createElement('a')
  card.className = 'card'
  card.href = `./${deck.file}`
  card.style.setProperty('--accent', deck.accent)
  card.innerHTML = `
    <div class="thumb">
      <iframe src="./${deck.file}" loading="lazy" tabindex="-1" title="${deck.title} preview" scrolling="no"></iframe>
      <div class="veil"></div>
    </div>
    <div class="body">
      <div class="num">Deck ${String(i + 1).padStart(2, '0')}</div>
      <h2>${deck.title}</h2>
      <p>${deck.blurb}</p>
      <span class="open">Open deck</span>
    </div>`
  gallery.appendChild(card)
})

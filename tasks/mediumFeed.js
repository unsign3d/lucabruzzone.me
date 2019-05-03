const Parser = require('rss-parser')
const fs = require('fs')

const feedUrl = "https://medium.com/feed/@unsigned"
const parser = new Parser();

const main = async() => {
  try {
    const feed = await parser.parseURL(feedUrl)

    const cards = feed.items.slice(0,6).map((item) => (
      card(item.link, item.pubDate, item.title)
    )).join('');

    await fs.writeFileSync(__dirname + '/../components/projects/cards.html', cards)
  }
  catch(errors) {
    console.error(errors)
  }
}

main();

const card = (url, pubDate, title) => (
  `<div class="card">
    <a href="${url}" target="_blank">
      <div class="card-title">${title}</div>
      <div class="card-date">${pubDate}</div>
    </a>
  </div>`
)
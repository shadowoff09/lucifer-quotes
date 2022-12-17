![](src/public/images/banner.png)</br>
[![Licence](https://img.shields.io/github/license/shadowoff09/lucifer-quotes)](https://github.com/shadowoff09/lucifer-quotes/blob/main/LICENSE)
[![Deployments](https://img.shields.io/github/deployments/shadowoff09/lucifer-quotes/Production?logo=vercel)](https://github.com/shadowoff09/lucifer-quotes)
[![Commits](https://img.shields.io/github/last-commit/shadowoff09/lucifer-quotes)](https://github.com/shadowoff09/lucifer-quotes/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/shadowoff09/lucifer-quotes)](https://github.com/shadowoff09/lucifer-quotes)
[![Quotes](https://img.shields.io/badge/quotes-78-blue)](https://github.com/shadowoff09/lucifer-quotes/blob/main/quotes.js)
[![Paypal](https://img.shields.io/badge/Paypal-Donate-blue)](https://paypal.me/diogogaspar123)
[![Ko-Fi](https://img.shields.io/badge/Ko--Fi-Donate-ff69b4)](https://ko-fi.com/shadowoff09)
[![CodeFactor](https://www.codefactor.io/repository/github/shadowoff09/lucifer-quotes/badge)](https://www.codefactor.io/repository/github/shadowoff09/lucifer-quotes)

# Lucifer quotes API

A simple API to retrieve some quotes of Lucifer, shawty!

:globe_with_meridians: Website: [https://lucifer-quotes.vercel.app](https://lucifer-quotes.vercel.app)

## API Documentation

### `GET /api/quotes`

Get a random quote in this format:

> [https://lucifer-quotes.vercel.app/api/quotes](https://lucifer-quotes.vercel.app/api/quotes)

	[
	  {
	    "quote": "The Devil gets burned by fire. Could this be any more ironic?",
	    "author": "Lucifer Morningstar"
	  }
	]


### `GET /api/quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /api/quotes/5`.

> [https://lucifer-quotes.vercel.app/api/quotes/5](https://lucifer-quotes.vercel.app/api/quotes/5)

	[
	  {
	    "quote": "You see, what I hate more than anything is a liar. A charlatan. Someone who doesn't believe in what they say.",
	    "author": "Lucifer Morningstar"
	  },
	  {
	    "quote": "I'm trying to say this from a constructive place. I can feel your negative vibrations from across the room, man.",
	    "author": "Dan Espinoza"
	  },
	  {
	    "quote": "My name is ASAC Schrader, and you can go f*ck yourself.",
	    "author": "Chloe Decker"
	  },
	  {
	    "quote": "Sometimes we need to lose something before we can understand its value.",
	    "author": "Linda Martin"
	  },
	  {
	    "quote": "You know, joining each other at crime scenes, bantering over dead bodies. And where does that leave you, right?",
	    "author": "Ella Lopez"
	  }
	]


## Contributing

If you want to add some quotes, just add them in `src/quotes.js` file and do a pull request !

## Donate
If you liked this project feel free to donate me for future awesome projects!</br>
- [Paypal](https://paypal.me/diogogaspar123)</br>
- [Ko-fi](https://ko-fi.com/shadowoff09)

## Authors

- [@shadowoff09](https://www.github.com/shadowoff09)

## Other Versions

- [strangerthings-quotes](https://github.com/shadowoff09/strangerthings-quotes)
- [bcs-quotes](https://github.com/shadowoff09/bcs-quotes)

---

[![https://vercel.com?utm_source=shadowoff09&utm_campaign=oss](./powered-by-vercel.svg)](https://vercel.com?utm_source=shadowoff09&utm_campaign=oss)


Made with :heart: and JavaScript.

![](breaking-bad-quotes_header.png)

# Lucifer quotes API

A simple API to retrieve some quotes of Lucifer, sawty!

:globe_with_meridians: Website and demo: https://breakingbadquotes.xyz/

## Production host

[https://lucifer-quotes.herokuapp.com/](https://lucifer-quotes.herokuapp.com/)

## API

### `GET /v1/quotes`

Get a random quote in this format:

> [https://lucifer-quotes.herokuapp.com/v1/quotes](https://lucifer-quotes.herokuapp.com/v1/quotes)

	[
		{
			"quote": "The Devil gets burned by fire. Could this be any more ironic?",
			"author": "Lucifer Morningstar"
		}
	]


### `GET /v1/quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /v1/quotes/5`.

> [https://lucifer-quotes.herokuapp.com/v1/quotes/5](https://lucifer-quotes.herokuapp.com/v1/quotes/5)

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


## Docker

...


## Contributing

If you want to add some quotes, just add them in `quotes.js` file and do a pull request !


## Credits

Inspired by [Ron Swanson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes).

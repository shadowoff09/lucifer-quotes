'use strict';

import quotes from './quotes.js';

export const quotesRepository = {
    getRandom(numberOfQuotes) {
        const n = Number(numberOfQuotes) || 1;
        const limit = n > quotes.length ? quotes.length : n;

        const out = new Array(limit);
        let quote;

        for (let i = 0; i < limit; i++) {
            do {
                quote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    }
};

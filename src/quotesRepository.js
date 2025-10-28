'use strict';

import quotes from './quotes.js';

async function loadQuotesForLang(lang) {
    if (!lang || lang === 'en') {
        return quotes;
    }
    
    try {
        const module = await import(`./quotes.${lang}.js`);
        return module.default;
    } catch (e) {
        // Fallback sur l'anglais si le fichier n'existe pas
        return quotes;
    }
}

export const quotesRepository = {
    async getRandom(numberOfQuotes, lang) {
        const pool = await loadQuotesForLang(lang);
        const n = Number(numberOfQuotes) || 1;
        const limit = n > pool.length ? pool.length : n;

        const out = new Array(limit);
        let quote;

        for (let i = 0; i < limit; i++) {
            do {
                quote = pool[Math.floor(Math.random() * pool.length)];
            } while (out.indexOf(quote) > -1);
            out[i] = quote;
        }

        return out;
    }
};
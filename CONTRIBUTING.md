# Thank you! ❤️
Thank you for contributing to our Lucifer Quotes API project. Your contributions help make this resource better for everyone!

## How to Contribute

### Adding New Quotes (English)

When adding quotes to the main `src/quotes.js` file:

- **One quote** per Pull Request (unless adding a complete character set)
- The quote **must** be from the Lucifer TV series
- The quote **must** include the author (character name)
- Verify the quote is accurate to the show
- Follow the existing format:
  ```javascript
  {
    "quote": "Your quote here",
    "author": "Character Name"
  }
  ```

### Adding Translations

We welcome translations of existing quotes! To contribute translations:

- Create or update a language-specific file: `src/quotes.{lang}.js`
  - Examples: `quotes.fr.js` (French), `quotes.es.js` (Spanish), `quotes.de.js` (German)
- Translate **all existing quotes** when creating a new language file
- Maintain the same structure and order as `quotes.js`
- Ensure translations preserve the original meaning and tone
- Include proper character encoding for special characters
- Add your language code to the API documentation in README.md

**Format example:**
```javascript
"use strict";

export default [
  {
    "quote": "Votre citation traduite ici",
    "author": "Character Name",
  },
  {
    "quote": "Une autre citation traduite",
    "author": "Character Name",
  },
];
```

**Important:** 
- Use `"use strict";` at the beginning of the file
- Use `export default` (not `export const quotes`)
- Keep the exact same number and order of quotes as in `quotes.js`
- Add a comma after each property, including the last one in each object
- End the array with a semicolon

### Translation Guidelines

- Keep character names in English (e.g., "Lucifer Morningstar")
- Preserve the tone and personality of the character
- Use natural phrasing in the target language
- Avoid literal word-for-word translations
- If uncertain about a translation, note it in your PR description

## Submission Process

1. Fork the repository
2. Create a new branch for your contribution
3. Add your quote(s) or translation(s)
4. Commit with a clear message (e.g., "Add quote from S3E5" or "Add Spanish translations")
5. Submit a Pull Request with a description of your changes

## Code of Conduct

- Be respectful and constructive in all interactions
- Follow the existing code style and format
- Test your changes before submitting

## Questions?

If you have any questions about contributing, feel free to open an issue or reach out to the maintainers.

## Thank you! ❤️

Your contributions make this project possible. We appreciate your time and effort in helping us build the best Lucifer quotes resource!
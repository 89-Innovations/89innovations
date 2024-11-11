# Instructions to get started with the project

Install dependencies with `pnpm i` or `npm i` or `yarn`.

This starter project is meant to be cloned and re-used when starting new web development projects. It includes a basic setup for a web project with the following features:

> [!IMPORTANT]
> Remember to update the `site` property in the `astro.config.mjs` file with your site's url. This is important for SEO purposes.

## Features

- Working contact form with web3forms
- SEO component with jsonLD generator
- Logo component
- Social media icons
- Navbar with mobile responsiveness
- Footer with social media icons

> [!NOTE]
> Get a free API key from [Web3Forms](https://web3forms.com/) and add it to the `.env` file. This will allow you to receive form submissions.

## Data

- Populate the footer with data inside the `data/footerData.ts` file
- Populate the navbar with data inside the `data/menuItems.ts` file
- Populate general SEO data inside the `data/siteData.json` file. This data will be used to populate the SEO component, and the jsonLD generator.
- Make a `.env` file based on the example; fill out your social media and site info. This data will be used to generate the jsonLD for the website, as well as SEO, and for the footer icons in `components/ui/footer-icons.astro`.

> [!WARNING]
> The jsonLD file does not have linting enabled, so make sure to follow the correct format when adding data.

The current template should work, but you can add more data if needed. Use the [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool) to validate the jsonLD.

## Styles

- The project uses Tailwind for styling. Add your brand colors and fonts to the `tailwind.config.mjs` file. Example colors and fonts are already included.
- The project uses fontsource for fonts, as recommended by Astro in their documentation.

## Pages

- [x] Index page just to show the navbar and footer
- [x] Contact page with submission form
- [x] Blog page with markdown support and pagination
- [x] Sample blog posts

## Suggested Environment Variables

```env
SITE_NAME="My Site"

FACEBOOK_URL=https://www.facebook.com/_username_
TWITTER_URL=https://twitter.com/_username_
INSTAGRAM_URL=https://www.instagram.com/_username_
LINKEDIN_URL=https://www.linkedin.com/in/_username_
GITHUB_URL=https://www.github.com/_username_
YOUTUBE_URL=https://www.youtube.com/channel/_username_


TWITTER_HANDLE=@_username_
PHONE_NUMBER=+1234567890

WEB3_KEY=your_web3_key
```

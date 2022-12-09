
<h1 align="center">
  Doks
</h1>

![Doks — Modern Documentation Theme](https://raw.githubusercontent.com/h-enk/doks/master/images/doks.png)

## Demo

- [doks.netlify.app](https://doks.netlify.app/)

## Why Doks?

Nine main reasons why you should use Doks:

1. __Security aware__. Get A+ scores on [Mozilla Observatory](https://observatory.mozilla.org/analyze/doks.netlify.app) out of the box. Easily change the default Security Headers to suit your needs.

2. __Fast by default__. Get 100 scores on [Google Lighthouse](https://googlechrome.github.io/lighthouse/viewer/?gist=59aafe464a68f8bc30b8e9a636d5b053) by default. Doks removes unused css, prefetches links, and lazy loads images.

3. __SEO-ready__. Use sensible defaults for structured data, open graph, and Twitter cards. Or easily change the SEO settings to your liking.

4. __Development tools__. Code with confidence. Check styles, scripts, and markdown for errors and fix automatically or manually.

5. __Bootstrap framework__. Build robust, flexible, and intuitive websites with Bootstrap 5. Easily customize your Doks site with the source Sass files.

6. __Netlify-ready__. Deploy to Netlify with sensible defaults. Easily use Netlify Functions, Netlify Redirects, and Netlify Headers.

7. __Full text search__. Search your Doks site with FlexSearch. Easily customize index settings and search options to your liking.

8. __Page layouts__. Build pages with a landing page, blog, or documentation layout. Add custom sections and components to suit your needs.

9. __Dark mode__. Switch to a low-light UI with the click of a button. Change colors with variables to match your branding.

### Other features

- __Multilingual and i18n__ support
- __Versioning__ documentation support
- __KaTeX__ math typesetting
- __Mermaid__ diagrams and visualization
- __highlight.js__ syntax highlighting

## Requirements

- [Git](https://git-scm.com/) — latest source release
- [Node.js](https://nodejs.org/) — latest LTS version or newer

<details>
<summary>Why Node.js?</summary>

Doks uses npm (included with Node.js) to centralize dependency management, making it [easy to update](https://getdoks.org/docs/help/how-to-update/) resources, build tooling, plugins, and build scripts.

</details>

## Get started

Start a new Doks project in three steps:

### 1. Create a new site

Doks is available as a child theme and a starter theme.

#### Child theme

- Intended for novice to intermediate users
- Intended for minor customizations
- [Easily update npm packages](https://getdoks.org/docs/help/how-to-update/) — __including__ [Doks](https://www.npmjs.com/package/@hyas/doks)

```bash
git clone https://github.com/h-enk/doks-child-theme.git my-doks-site && cd my-doks-site
```

#### Starter theme

- Intended for intermediate to advanced users
- Intended for major customizations
- [Easily update npm packages](https://getdoks.org/docs/help/how-to-update/)

```bash
git clone https://github.com/h-enk/doks.git my-doks-site && cd my-doks-site
```

<details>
<summary>Help me choose</summary>

Not sure which one is for you? Pick the child theme.

</details>

### 2. Install dependencies

```bash
npm install
```

### 3. Start development server

```bash
npm run start
```

## Other commands

Doks comes with [commands](https://getdoks.org/docs/prologue/commands/) for common tasks.

## Documentation

- [Netlify](https://docs.netlify.com/)
- [Hugo](https://gohugo.io/documentation/)
- [Doks](https://getdoks.org/)

---

#### Notes

Content to modify:
- layouts = structure
- content = rawdata
- static  = assets
  - css
  - fonts
  - images
  - js
- archetypes = content template


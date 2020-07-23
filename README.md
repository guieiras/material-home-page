
<h1 align="center">MaterialUI Personal page</h1>
<p align="center">Production-ready personal page managed using <a href="https://www.contentful.com">Contentful</a>.</p>
<p align="center"><img src="https://i.ibb.co/nQ3MsV2/material-home.png" alt="material-home" border="0"></p>

## 🚀 Quick start

1.  **Contentful setup**

    1. Create a free account on [Contentful Get started](https://www.contentful.com/get-started/). When filling the `Company` field, put in your name, because this field will be used to name your Organization. Organizations are un-deletable, but you can always create a new one.
    2. Create a Space. You can follow the initial tutorial or skip it and create a Space manually.
    3. Get an API token (`https://app.contentful.com/spaces/[YOUR SPACE ID]/api/keys`). You can use the example key or create a new one.

2.  **Configure your environment.**

  Set following environment variables:
  - `CONTENTFUL_SPACE`: Contentful space identifier
  - `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN`: Your access token to Contentful management API
  - `CONTENTFUL_ACCESS_TOKEN`: Your access token to Contentful API
  - `CONTENTFUL_HOST`: (optional) You can set this variable to `preview.contentful.com` to see your Drafts.

3.  **Bootstrap Contentful content types and default content**

  Get your Contentful Management key on `https://app.contentful.com/spaces/[YOUR SPACE ID]/api/cma_tokens`. Remember to set it on `CONTENTFUL_MANAGEMENT_ACCESS_TOKEN` environment variable.

  Run `yarn contentful:setup` to prepare your space with content types.

  On your contentful space, create an `Author` entry with default field set as true, and a `Setting` called _siteName_.

  After that, you'll be able to launch your application.

4.  **Write your content and deploy it!**

  After writing your content on CMS, you can run `yarn build` and deploy `out/` folder to your preferred static asset server.

##  📄 Page structure

This application contains 4 main pages:
  - `/`: Initial page includes author details, home cards and social links
  - `/resume`: Resume page includes professional experiences, academic formation and skills
  - `/portfolio`: Portfolio page lists all portfolio entries
  - `/blog`: Blog page lists and show Post entries

## 🌍 Locales

Currently, material-home-page supports those languages. Remember to create them on Contentful (`https://app.contentful.com/spaces/[SPACE ID]/settings/locales`)

  - 🇩🇪 Deutsche (de-DE)
  - 🇺🇸 English (en-US)
  - 🇪🇸 Español (es-ES)
  - 🇫🇷 Français (fr-FR)
  - 🇮🇹 Italiano (it-IT)
  - 🇧🇷 Português do Brasil (pt-BR)

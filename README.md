
<h1 align="center">MaterialUI Personal page</h1>
<p align="center">Production ready personal page, managed using <a href="https://www.contentful.com">Contentful</a>.</p>
<p align="center"><img src="https://i.ibb.co/nQ3MsV2/material-home.png" alt="material-home" border="0"></p>

## 🚀 Quick start

1.  **Create an account and a space on Contentful.** 

  Create a free account on [Contentful Get started](https://www.contentful.com/get-started/), and get an API token

2.  **Configure your environment.**

  Set following environment variables:
  - `CONTENTFUL_SPACE`: Contentful space identifier
  - `CONTENTFUL_ACCESS_TOKEN`: Your access token to Contentful API
  - `CONTENTFUL_HOST`: (optional) You can set this variable to `preview.contentful.com` to see your Drafts.

3.  **Bootstrap Contentful content types and default content**

  Run `yarn contentful:setup` to prepare your space with content types. After running this command, you'll be able to launch your application.

4.  **Write your content and deploy it!**

  After writing your content on CMS, you can run `yarn build` and deploy `out/` folder to your preferred static asset server.

const delayToResetRateLimit = () => new Promise((resolve) => { setTimeout(resolve, 1000); });

(async () => {
  const { createClient } = require('contentful-management');
  const client = createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
  });

  const space = await client.getSpace(process.env.CONTENTFUL_SPACE);

  await space.createContentTypeWithId('author', require('./setup/author.json'));
  await space.createContentTypeWithId('social', require('./setup/social.json'));
  await space.createContentTypeWithId('homeCards', require('./setup/homeCards.json'));
  await space.createContentTypeWithId('setting', require('./setup/setting.json'));
  await space.createContentTypeWithId('portfolioTags', require('./setup/portfolioTags.json'));
  await space.createContentTypeWithId('portfolio', require('./setup/portfolio.json'));

  await delayToResetRateLimit();

  await space.createContentTypeWithId('skillGroup', require('./setup/skillGroup.json'));
  await space.createContentTypeWithId('skills', require('./setup/skills.json'));
  await space.createContentTypeWithId('academic', require('./setup/academic.json'));
  await space.createContentTypeWithId('professional', require('./setup/professional.json'));
  await space.createContentTypeWithId('page', require('./setup/page.json'));
  await space.createContentTypeWithId('post', require('./setup/post.json'));
})();

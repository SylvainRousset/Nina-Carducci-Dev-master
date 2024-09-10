const purgecss = require('@fullhuman/postcss-purgecss')({
    content: [
      './**/*.html', // Indique où trouver vos fichiers HTML ou autres sources de contenu
      './src/**/*.js', // Si vous avez des fichiers JavaScript qui contiennent du code HTML
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });
  
  module.exports = {
    plugins: [
      require('autoprefixer'), // Si vous utilisez Autoprefixer
      purgecss // Appliquer PurgeCSS
    ]
  };
  
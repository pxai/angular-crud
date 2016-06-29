//       '*!(.module|.spec).js',
//      '!(node_modules)/**/*!(.module|.spec).js'

module.exports = function(config) {
  config.set({
 basePath: '',
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-mocks/angular-mocks.js',
      '**/*.module.js',
      'test/*.spec.js'
],
   autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Firefox'], //['Chrome','Firefox']

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine'
]
  });
};
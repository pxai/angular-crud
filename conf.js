exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*spec.js'],
    capabilities: {
   browserName: 'firefox',
 }
};

/*
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec/*spec.js'],
  capabilities: {
   browserName: 'firefox',
 }
*/
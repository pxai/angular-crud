
var url =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
  it('should have this title', function() {
    browser.get(url);
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    
  });
});
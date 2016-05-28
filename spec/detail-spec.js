
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/friend/list');
    });

  it('should load friend list page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
    expect(element(by.css('section > h2')).getText()).toEqual('Friend list');
    expect(element(by.css('section p')).getText()).toEqual('Friend list');
  });
  
  it('should have friends, one at least', function() {
    expect(element(by.id('friends')).isPresent()).toBeTruthy();
    expect(element(by.tagName('h3')).getText()).toEqual('Friends');
    expect(element.all(by.css('.friend')).count()).toBeGreaterThan(0);
  });
  
  it('should load at least friend number 1', function() {
    expect(element(by.id('friend1')).isPresent()).toBeTruthy();
    expect(element(by.css('#friend1 .friendname')).getText()).toEqual('Juan');
    expect(element(by.css('#friend1 .friendnumber')).getText()).toEqual('666');
  });
  
  it('should load friend list page from index', function() {
    browser.get(siteRoot);
    element(by.css('a[href="#/friend/list"]')).click();
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/friend/list');
  });
});

/*describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();

    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
*/
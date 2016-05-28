
var siteRoot =  'http://127.0.0.1:8080/';

describe('Angular v1 CRUD App tests', function() {
   
    beforeEach(function(){
        browser.get(siteRoot + '#/about');
    });

  it('should load about page', function() {
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/about');
    expect(element(by.id('title')).getText()).toEqual('About');
  });
  
  it('should load about page from index', function() {
    browser.get(siteRoot);
    element(by.css('a[href="#/about"]')).click();
    expect(browser.getTitle()).toEqual('Angular v1 CRUD sample');
    expect(browser.getCurrentUrl()).toEqual(siteRoot + '#/about');
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
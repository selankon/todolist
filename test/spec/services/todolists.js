'use strict';

describe('Service: todoLists', function () {

  // load the service's module
  beforeEach(module('todoApp'));

  // instantiate service
  var todoLists;
  beforeEach(inject(function (_todoLists_) {
    todoLists = _todoLists_;
  }));

  it('should do something', function () {
    expect(!!todoLists).toBe(true);
  });

});

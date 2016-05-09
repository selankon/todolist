'use strict';

describe('Directive: logout', function () {

  // load the directive's module
  beforeEach(module('todoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<logout></logout>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the logout directive');
  }));
});

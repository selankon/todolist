'use strict';

describe('Directive: todoslists', function () {

  // load the directive's module
  beforeEach(module('todoApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todoslists></todoslists>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the todoslists directive');
  }));
});

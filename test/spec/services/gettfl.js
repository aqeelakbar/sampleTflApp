'use strict';

describe('Service: getTFL', function () {

  // load the service's module
  beforeEach(module('exampleApp'));

  // instantiate service
  var getTFL;
  beforeEach(inject(function (_getTFL_) {
    getTFL = _getTFL_;
  }));

  it('should do something', function () {
    expect(!!getTFL).toBe(true);
  });

});

'use strict';

describe('Service: Tflservice', function () {

  // load the service's module
  beforeEach(module('ngTflappApp'));

  // instantiate service
  var Tflservice;
  beforeEach(inject(function (_Tflservice_) {
    Tflservice = _Tflservice_;
  }));

  it('should do something', function () {
    expect(!!Tflservice).toBe(true);
  });

});

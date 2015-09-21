var // Expectation library:
    chai = require( 'chai' ),
    util = require('util'),
    // Module to be tested:
    visualData = require( './../lib/index.js' );


// VARIABLES //

var expect = chai.expect,
    assert = chai.assert;

describe( 'visualData', function tests() {
    "use strict";

   it( 'should be a function', function test() {
    expect( visualData ).to.be.a( 'function' );
    });    

   it( 'should receive a callback', function test() {
   
    function done() {};
    var m = new visualData("image", done);

    });    


});

'use strict';

var expect = require('chai').expect;
var main = require('../');
var npm = require('npm');

describe("npm-dir", function(){
    it(".dir", function(){
        expect(main.dir).to.equal(npm.dir);
    });

    it(".prefix", function(){
        expect(main.prefix).to.equal(npm.globalPrefix);
    });
});
'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.initializing = require( './initializing' );
generator.install = require( './install' );

module.exports = generators.Base.extend( generator );

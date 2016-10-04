'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.configuring = require( './configuring' );
generator.initializing = require( './initializing' );
generator.install = require( './install' );
generator.prompting = require( './prompting' );

module.exports = generators.Base.extend( generator );

/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @returns {undefined}
 */
function initializing() {
  this.package_json = loadJson( this.destinationPath( 'package.json' ), { sync: true } );
}

module.exports = initializing;

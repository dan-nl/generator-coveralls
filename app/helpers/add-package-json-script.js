/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Base} generator
 * @param {Function} generator.destinationPath
 * @param {Function} generator.log
 * @param {Object} generator.package_json
 *
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var extend_content;
  var new_content;
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );

  if ( package_json.scripts && typeof package_json.scripts.coveralls === 'string' ) {
    generator.log( chalk.cyan( 'config' ) );
    generator.log( chalk.green( '   script already exists' ) + ' coveralls' );

    return;
  }

  generator.log( chalk.cyan( 'config' ) );
  generator.log( chalk.green( '   create script' ) + ' coveralls' );

  extend_content = {
    scripts: {
      coveralls: 'cat ./coverage/lcov.info | coveralls'
    }
  };

  new_content = extend( {}, package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;

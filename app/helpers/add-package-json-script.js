/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );

/**
 * @param {Object} generator
 * @param {Function} generator.destinationPath
 * @param {Function} generator.log
 * @param {Object} generator.package_json
 *
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var extend_content;
  var new_content;

  if (
    generator.package_json.scripts &&
    typeof generator.package_json.scripts.coveralls === 'string'
  ) {
    generator.log(
      chalk.cyan( 'identical' ) +
      ' script ' +
      chalk.blue( 'coveralls' ) +
      ' already exists in package.json'
    );

    return;
  }

  generator.log( chalk.cyan( 'adding scripts' ) + ' to package.json for coveralls' );
  generator.log( chalk.green( '   script' ) + ' coveralls' );

  extend_content = {
    scripts: {
      coveralls: 'cat ./coverage/lcov.info | coveralls'
    }
  };

  new_content = extend( {}, generator.package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;

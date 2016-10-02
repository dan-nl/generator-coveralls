/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addPackageJsonScript = require( './helpers/add-package-json-script' );

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromtAnswers.get( 'install-coveralls' ) ) {
    return;
  }

  addPackageJsonScript( this );
}

module.exports = writing;

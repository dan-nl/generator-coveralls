/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addPackageJsonScript = require( './helpers/add-package-json-script' );

/**
 * @returns {undefined}
 */
function configuring() {
  if ( !this.options.PromptAnswers.get( 'install-coveralls' ) ) {
    return;
  }

  addPackageJsonScript( this );
}

module.exports = configuring;

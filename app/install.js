/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @returns {undefined}
 */
function install() {
  if ( !this.options.PromptAnswers.get( 'install-coveralls' ) ) {
    return;
  }

  this.log( chalk.cyan( 'install' ) );
  this.log( chalk.green( '   package' ) + ' coveralls' );

  this.npmInstall(
    [ 'coveralls' ],
    { 'save-dev': true }
  );
}

module.exports = install;

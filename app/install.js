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
  if ( !this.options.PromtAnswers.get( 'install-coveralls' ) ) {
    return;
  }

  this.log( chalk.cyan( 'npm install' ) + ' for ' + this.options.namespace );

  this.npmInstall(
    [ 'coveralls' ],
    { 'save-dev': true }
  );
}

module.exports = install;

'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      default: true,
      message: 'install coveralls',
      name: 'install-coveralls',
      type: 'confirm'
    }
  ];
}

module.exports = getGeneratorPrompts;

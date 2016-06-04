'use strict';

module.exports = {
  extends: 'google',
  rules:   {
    'camelcase':       ['error', {properties: 'never'}],
    'comma-dangle':    'off',
    'curly':           ['error', 'multi-or-nest'],
    'key-spacing':     ['error', {align: 'value'}],
    'no-multi-spaces': 'off',
    'no-var':          'error',
    'quotes':          ['error', 'single'],
    'strict':          ['off', 'safe'],
    'require-jsdoc':   ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition:    true,
        ClassDeclaration:    true,
      }
    }],
    'valid-jsdoc': ['error', {requireReturn: false}],
  },
};

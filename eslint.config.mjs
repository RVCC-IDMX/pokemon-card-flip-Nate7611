// eslint.config.mjs
export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        fetch: 'readonly',
        setTimeout: 'readonly',
        // Node.js globals
        process: 'readonly',
        __dirname: 'readonly',
        // Add any other globals your project uses
        PokemonService: 'readonly',
      }
    },
    files: ['**/*.js'],
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'windows'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-unused-vars': ['warn'],
      'no-undef': 'error',
      camelcase: 'warn',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      'brace-style': ['error', '1tbs'],
      'prefer-const': 'warn',
      'max-len': ['warn', { code: 100, ignoreUrls: true, ignoreComments: false, ignoreTrailingComments: false }],
      'no-trailing-spaces': 'error'
    }
  }
];
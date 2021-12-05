module.exports = {
  root: true,
  plugins: ['stylelint-order'],
  customSyntax: 'postcss-less',
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  rules: {},
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      extends: ['stylelint-config-recommended', 'stylelint-config-html'],
      rules: {},
    },
  ],
};

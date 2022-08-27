// http://marionebl.github.io/commitlint/

const scope = ['pipeline', 'core', 'flow', 'styleguide', 'fas']

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', Infinity],
    'scope-enum': [2, 'always', scope],
    'subject-case': [2, 'always', 'sentence-case']
  }
}

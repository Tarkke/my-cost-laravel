export default {
    '*.!{css,php}': ['eslint --fix', 'prettier --ignore-unknown --write'],
    '*.{css}': ['stylelint --fix', 'prettier --write'],
    '*.php': './vendor/bin/pint',
}

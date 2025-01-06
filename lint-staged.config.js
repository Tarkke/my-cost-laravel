export default {
    '*.{js,ts,jsx,tsx}': ['oxlint --fix', 'eslint --fix', 'prettier --write'],
    '*.{css,json}': 'prettier --write',
    '*.config.{js,ts}': 'prettier --write',
    '*.php': 'composer pint',
}

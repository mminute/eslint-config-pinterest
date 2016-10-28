module.exports = {
    env: {
        commonjs: true,
    },
    extends: 'airbnb',
    parser: 'babel-eslint',
    rules: {
        'camelcase': 0,
        'comma-dangle': 0,
        'consistent-return': 0,
        'curly': 2,
        'dot-notation': 0,
        'eol-last': 0,
        'eqeqeq': 2,
        'global-strict': 0,
        'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        'key-spacing': ["error", { "afterColon": true }],
        'keyword-spacing': ["error", { "before": true, "after": true }],
        'max-len': [2, 120, 4, {
            "ignorePattern": "^(import\\s.+)|(\\s*(var\\s.+=\\s*)?require\\s*\\(.+)$|(jest.(un)?mock\\()"
        }],
        'new-cap': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-console': 2,
        'no-constant-condition': 0,
        'no-debugger': 2,
        'no-empty': 0,
        'no-eq-null': 0,
        'no-extend-native': 0,
        'no-extra-semi': 2,
        'no-multi-spaces': 0,
        'no-octal-escape': 0,
        'no-process-exit': 2,
        'no-script-url': 0,
        'no-shadow': 0,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-underscore-dangle': 0,
        'no-unused-expressions': 2,
        'no-unused-vars': [2, {'vars': 'all', 'args': 'none'}],
        'no-use-before-define': 2,
        'no-var': 2,
        'prefer-const': ["error", {'destructuring': 'all', 'ignoreReadBeforeAssign': true}],
        'prefer-arrow-callback': 0,
        'quotes': [2, 'single'],
        'semi': [2, 'always'],
        'semi-spacing': [0, {'before': false, 'after': true}],
        'space-infix-ops': 2,
        'space-unary-ops': 0,
        'pinterest/sort-imports': ['error', {
            'ignoreCase': true,
            'ignoreMemberSort': false,
            'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple']
        }],
        'strict': 0,
        'yoda': 2,
        // TODO: these are disabled failing AirBnb rules. Fix and enable.
        // Make sure to delete them in .eslintrc.json files
        'generator-star-spacing': 0,
        'import/no-extraneous-dependencies': 0,
        'import/imports-first': 0,
        'import/no-unresolved': 0,
        'import/extensions': 0,
        'padded-blocks': 0,
        'object-shorthand': 0,
        'func-names': 0,
        'space-before-function-paren': 0,
        'brace-style': 0,
        'prefer-spread': 0,
        'prefer-template': 0,
        'no-else-return': 0,
        'newline-per-chained-call': 0,
        'no-unneeded-ternary': 0,
        'no-unreachable': 0,
        'no-redeclare': 0,
        'no-floating-decimal': 0,
        'no-throw-literal': 0,
        'array-bracket-spacing': 0,
        'no-return-assign': 0,
        'vars-on-top': 0,
        'class-methods-use-this': 0,
        'arrow-body-style': 0,
        'no-multi-str': 0,
        'default-case': 0,
        'import/newline-after-import': 0,
        'no-mixed-operators': 0,
        'no-lonely-if': 0,
        'radix': 0,
        'no-bitwise': 0,
        'no-confusing-arrow': 0,
        'no-case-declarations': 0,
        // 'arrow-parens': 0,
        'dot-location': 0,
        // 'block-spacing': 0,
        'no-prototype-builtins': 0,
        'object-property-newline': 0,
        // 'space-before-blocks': 0,
        'no-duplicate-imports': 0,
        'no-param-reassign': 0,
        'no-extra-bind': 0,
        'global-require': 0,
        'import/no-dynamic-require': 0,
        'no-extra-boolean-cast': 0,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        // 'wrap-iife': 0,
        'no-unsafe-finally': 0,
        'no-useless-escape': 0,
        'no-continue': 0,
        'guard-for-in': 0,
        // 'space-in-parens': 0,
        'operator-assignment': 0,
        'prefer-rest-params': 0,
        'no-inner-declarations': 0,
        'react/jsx-no-bind': 0,
        'react/no-unused-prop-types': 0,
        'react/prefer-stateless-function': 0,
        'react/no-find-dom-node': 0,
        'react/jsx-filename-extension': 0,
        'array-callback-return': 0,
        'no-nested-ternary': 0,
        // 'arrow-spacing': 0,
        'no-new': 0,
        'no-useless-constructor': 0,
        'react/forbid-prop-types': 0,
        // 'no-spaced-func': 0,
        'func-call-spacing': 0,
        'no-useless-concat': 0,
        'import/prefer-default-export': 0,
        'no-template-curly-in-string': 0,
    }
};

module.exports = {
    "env": {
        "jest/globais": true
    },
    "extends": [
        "next",
        "eslint:recommended",
        "plugin:jest/recommended",
        "pluging:prettier/recommended"
    ],
    "rules": {
        "no-console": "error",
        "@next/next/no-html-link-for-pages": "off",
    }
}

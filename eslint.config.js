import antfu from "@antfu/eslint-config";
import { configs as tanstackQueryConfigs, rules as tanstackQueryRules } from "@tanstack/eslint-plugin-query";

export default antfu(
    {
        formatters: true,
        unocss: true,
        react: true,
        jsx: true,
        stylistic: {
            indent: 4,
            quotes: "double",
            semi: true,
        },
        rules: {
            "style/array-bracket-newline": ["error", { multiline: true }],
            "style/function-call-argument-newline": ["error", "consistent"],
            "style/brace-style": ["error", "1tbs", { allowSingleLine: true }],
            "style/max-statements-per-line": ["error", { max: 2 }],
            "style/jsx-self-closing-comp": ["error", { component: true, html: true }],
            "style/jsx-max-props-per-line": ["error", { maximum: 1, when: "multiline" }],
            "antfu/if-newline": "off",
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "import/order": [
                "error",
                {
                    "newlines-between": "always",
                    "groups": [["external"], ["parent", "internal", "builtin", "sibling", "index"], "object", "type"],
                    "alphabetize": { order: "asc", caseInsensitive: true },
                },
            ],
            "import/newline-after-import": ["error", { count: 1 }],
        },
        ignores: [
            ".generated/",
            "dist",
            "node_modules",
            "public",
            "build",
            "out",
            "coverage",
            "cypress",
        ],
    },
    {
        name: "@tanstack/query",
        files: ["src/**/*.{ts,tsx}"],
        plugins: {
            "@tanstack/query": { rules: tanstackQueryRules, configs: tanstackQueryConfigs },
        },
        rules: {
            "@tanstack/query/exhaustive-deps": "error",
            "@tanstack/query/no-rest-destructuring": "warn",
            "@tanstack/query/stable-query-client": "error",
        },
    },
    {
        files: [".generated/**/*"],
        rules: {
            "eslint-comments/no-unlimited-disable": "off",
        },
    },
);

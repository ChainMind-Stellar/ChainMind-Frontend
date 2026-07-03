// ESLint Flat Config for ChainMind
import js from "@eslint/js";

export default [
  {
    ignores: [".next/**", "node_modules/**"],
  },
  {
    ...js.configs.recommended,
    languageOptions: {
      ...js.configs.recommended.languageOptions,
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
        process: "readonly",
        setTimeout: "readonly",
        clearInterval: "readonly",
        setInterval: "readonly",
        localStorage: "readonly",
        File: "readonly",
        CustomEvent: "readonly",
        React: "readonly",
        fetch: "readonly",
        URL: "readonly",
        location: "readonly",
        FormData: "readonly",
        Blob: "readonly",
        FileReader: "readonly",
        AbortController: "readonly",
        IntersectionObserver: "readonly",
        performance: "readonly",
        navigator: "readonly",
        requestAnimationFrame: "readonly",
        cancelAnimationFrame: "readonly",
        crypto: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-console": "off",
    },
  },
];

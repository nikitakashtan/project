import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs', ecmaVersion: 'latest' } },
  { languageOptions: { globals: globals.node } },
  ...compat.extends('airbnb-base'),
];

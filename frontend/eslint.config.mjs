import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",

    "plugin:prettier/recommended"
  ),
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Desactiva la advertencia por `any`
      "max-len": ["error", 140], // Limita el tamaño de líneas a 140 caracteres
      quotes: [2, "single", { avoidEscape: true }], // Usa comillas simples
    },
  },
];

export default eslintConfig;

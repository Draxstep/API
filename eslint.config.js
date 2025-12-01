import globals from "globals";
import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";

export default [
    // 1. Reglas recomendadas de ESLint (Reemplaza "eslint:recommended")
    js.configs.recommended,

    // 2. Configuración específica del proyecto
    {
        files: ["**/*.js"], // Aplica esta configuración a todos los archivos .js

        // Opciones del Parser (Reemplaza "parserOptions")
        languageOptions: {
            ecmaVersion: 2018, // Soporte para ES2018

            // Entornos (Reemplaza "env")
            globals: {
                ...globals.es2017, // Incluye globals hasta 2017
                ...globals.node,   // Agrega globals de Node.js
                ...globals.jest,   // Agrega globals de Jest

                // Nota: Podrías necesitar usar 'es2020' o 'es2021' para usar 'es6: true' y 'ecmaVersion: 2018' de forma más completa.
            }
        },

        // Reglas Personalizadas (Reemplaza "rules")
        rules: {
            // Tu regla de console.log
            "no-console": "warn",
        }
    },

    // 3. Integración con Prettier (Reemplaza "prettier" en extends)
    prettierConfig
];

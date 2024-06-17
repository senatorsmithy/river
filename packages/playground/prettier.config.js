import prettierConfig from '@river/prettier-config'

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
export default {
    ...prettierConfig,
    plugins: ['prettier-plugin-tailwindcss'],
}

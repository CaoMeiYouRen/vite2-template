const IS_PROD = process.env.NODE_ENV === 'production'
module.exports = {
    root: true,
    extends: [
        'cmyr/vue3',
    ],
    rules: {
        'no-unused-vars': 0,
        'vue/multi-word-component-names': 1,
    },
}

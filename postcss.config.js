const postCssNext = require("postcss-cssnext")
const postImport = require("postcss-import")


module.exports = {

    plugins: [
        postCssNext,
        postImport
    ]
}

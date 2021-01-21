module.exports = {
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.ts$/,
                options: {
                appendTsSuffixTo: [/\.vue$/]
                }
            }
        ]
    }
}


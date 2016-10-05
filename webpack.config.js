module.exports = {

    entry: './src/js/Main.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }

}

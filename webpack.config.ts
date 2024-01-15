import path from 'path'
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import type {Configuration as DevServerConfiguration} from "webpack-dev-server";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

type Mode = 'production' | 'development'

// пример передачи переменных окружения в dev-server
// npm run start -- --env port=7000
interface EnvVariables {
    mode: Mode,
    port: number,
}

export default (env: EnvVariables) => {

    const isDev = env.mode === 'development';
    const isProd = env.mode === 'production';

    const config: webpack.Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].[contenthash].js',
            clean: true,
            publicPath: "/",
        },
        plugins: [
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
            isDev && new webpack.ProgressPlugin(),
            isProd && new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            }),
        ].filter(Boolean),
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader"
                    ],
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                        "css-loader",
                        "sass-loader",
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devtool: isDev && 'inline-source-map',
        devServer: isDev ? {
            static: {
                directory: path.join(__dirname, "build"),
            },
            historyApiFallback: true,
            liveReload: true,
            port: env.port ?? 3000,
            open: true,
        } : undefined,
    }
    return config
}

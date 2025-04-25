import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const scssScriptLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: 'as-is',
            auto: (resPath: string) => !!(resPath.includes(".module.")),
            localIdentName: options.isDev ? "[path][name]__[local]" : "[hash:base64]",
          }
        }
      },
      "sass-loader",
    ],
  }

  return [
    typeScriptLoader,
    scssScriptLoader
  ]
}
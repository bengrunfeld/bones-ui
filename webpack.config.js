const path = require("path");

module.exports = {
  entry: {
    Button: "./src/Button/index.ts",
    CheckBox: "./src/CheckBox/index.ts",
    Input: "./src/Input/index.ts",
    RadioButtonGroup: "./src/RadioButtonGroup/index.ts",
    Select: "./src/Select/index.ts",
  },
  output: {
    filename: "[name]/index.js", // This will create a separate output file for each component
    path: path.resolve(__dirname, "dist"),
    library: "[name]", // This will allow named imports for each component
    libraryTarget: "commonjs2", // Use CommonJS for Node.js support
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  externals: {
    react: "react", // Avoid bundling React
    "react-dom": "react-dom", // Avoid bundling ReactDOM
  },
};

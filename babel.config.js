
module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" }}],
        "@babel/preset-typescript",
    ],
    plugins: [
        [
            "module-resolver",
            {
                alias: {
                    "@modules": "./src/modules",
                    "@shared": "./src/shared",
                    "@errors": "./src/errors",
                    "@database": "./src/database",
                }
            }
        ],
        "babel-plugin-transform-typescript-metadata",
        ["@babel/plugin-proposal-decorators", { legacy: true }],
        ["@babel/plugin-proposal-class-properties", { lose: true }],
    ]
}
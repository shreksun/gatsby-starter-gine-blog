module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/cf21d60264dd4a949a4d2d9d935af670?v=0c9620e43bec481b9933b58d9db51fef"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/f28296dc29644855a75a1b42f0296f49?v=2bf262683b50473db5904349a2d13270"
            }
        }
    ],
}

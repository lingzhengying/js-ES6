module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // 针对按需引入
    ["@babel/preset-env", { "modules": false }],
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}

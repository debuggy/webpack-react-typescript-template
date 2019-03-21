module.exports = {
  linters: {
    ".editorconfig": ["prettier --write", "git add"],
    "**/*.md": ["markdownlint"],
    "**/*.{css,gql,graphql,html,json,less,md,mdx,scss,vue,yaml,yml}": [
      "prettier --write",
      "git add",
    ],
    "**/*.{js,jsx,ts,tsx}": [
      "prettier --write",
      "eslint --cache --ext .js,.jsx,.ts,.tsx",
      "git add",
    ],
  },
  // The formatting tools are ordered to run sequentially
  concurrent: false,
}

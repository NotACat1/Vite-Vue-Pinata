module.exports = {
  '*.{js,ts,vue}': ['eslint --fix --max-warnings=0', 'prettier --write', 'vue-tsc --noEmit'],
  '*.{css,scss}': ['prettier --write'],
  '*.{json,md,yaml,yml}': ['prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
}

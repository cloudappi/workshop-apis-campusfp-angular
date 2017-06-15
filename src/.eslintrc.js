module.exports = {
  extends: [
    'angular'
  ],
  rules: {
    'angular/no-service-method': 0,
    "space-in-parens": [ "error", "always" ],
    "array-bracket-spacing": [ "error", "always" ],
    "space-before-function-paren": [ "error", "always" ],
    "no-multiple-empty-lines": [ "error", { "max": 2 } ],
    "camelcase": [ "error", { properties: "never" } ]

  }
};

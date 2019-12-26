"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var masker_1 = require("./masker");
var tokens_1 = require("./tokens");
function default_1(text, mask) {
    return masker_1.default(text, mask, true, tokens_1.default);
}
exports.default = default_1;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maskit_1 = require("./maskit");
var dynamic_mask_1 = require("./dynamic-mask");
// Facade to maskit/dynamicMask when mask is String or Array
function default_1(value, mask, masked, tokens) {
    if (masked === void 0) { masked = true; }
    return Array.isArray(mask)
        ? dynamic_mask_1.default(maskit_1.default, mask, tokens)(value, mask, masked)
        : maskit_1.default(value, mask, masked, tokens);
}
exports.default = default_1;
//# sourceMappingURL=masker.js.map
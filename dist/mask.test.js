"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var maskit_1 = require("../src/maskit");
var tokens_1 = require("../src/tokens");
test('12 #.#', function () {
    expect(maskit_1.default('12', '#.#', true, tokens_1.default)).toBe('1.2');
});
test('1 (#)', function () {
    expect(maskit_1.default('1', '(#)', true, tokens_1.default)).toBe('(1)');
});
test('1 [(#)]', function () {
    expect(maskit_1.default('1', '[(#)]', true, tokens_1.default)).toBe('[(1)]');
});
test('1 #.#', function () {
    expect(maskit_1.default('1', '#.#', true, tokens_1.default)).toBe('1');
});
test('1. #.#', function () {
    expect(maskit_1.default('1.', '#.#', true, tokens_1.default)).toBe('1.');
});
test('123 #.#', function () {
    expect(maskit_1.default('123', '#.#', true, tokens_1.default)).toBe('1.2');
});
test('raw phone number', function () {
    expect(maskit_1.default('44998765432', '+55 (##) #####-####', false, tokens_1.default)).toBe('44998765432');
});
test('abcd12345 AAA-####', function () {
    expect(maskit_1.default('abcd12345', 'AAA-####', true, tokens_1.default)).toBe('ABC-1234');
});
test('a5-12-34 => (XX) - ## - ##', function () {
    expect(maskit_1.default('a5-12-34', '(XX) - ## - ##', true, tokens_1.default)).toBe('(a5) - 12 - 34');
});
test('123 ##(#)', function () {
    expect(maskit_1.default('123', '##(#)', true, tokens_1.default)).toBe('12(3)');
});
test('123 #!#(#)', function () {
    expect(maskit_1.default('12', '#!#(#)', true, tokens_1.default)).toBe('1#(2)');
});
test('12 +1 #', function () {
    expect(maskit_1.default('12', '+1 #', true, tokens_1.default)).toBe('+1 2');
});
test('2 +1 #', function () {
    expect(maskit_1.default('2', '+1 #', true, tokens_1.default)).toBe('+1 2');
});
//# sourceMappingURL=mask.test.js.map
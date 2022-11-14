/**
 * Conditional types
 * Syntax:
 *
 * T extends U ? X : Y
 */
function isNonNullable(x) {
    return x !== null && x !== undefined;
}
// driver method
const ar = [1, 2, null, 3, undefined, 4];
const nonNullableArr = ar.filter(isNonNullable);
console.log(nonNullableArr);

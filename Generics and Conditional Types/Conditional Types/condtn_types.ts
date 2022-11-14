/**
 * Conditional types
 * Syntax:
 * 
 * T extends U ? X : Y
 */

type NonNullableType<T> = T extends null | undefined ? never : T;

function isNonNullable<T>(x: T): x is NonNullableType<T> {
    return x !== null && x !== undefined;
}

// driver method
const ar = [1, 2, null, 3, undefined, 4]
const nonNullableArr = ar.filter(isNonNullable)
console.log(nonNullableArr) // output: [1, 2, 3, 4]
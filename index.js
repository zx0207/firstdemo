console.log('hello');

/**
 * 两数相乘
 * @param {number} a - 被乘数
 * @param {number} b - 乘数
 * @returns {number} 乘积
 */
export const multiply = (a, b) => a * b;

/**
 * 两数相除
 * @param {number} a - 被除数
 * @param {number} b - 除数
 * @returns {number} 商
 */
export const divide = (a, b) => {
    if (b === 0) {
        throw new Error('Division by zero');
    }
    return a / b;
};

/**
 * 两数相加
 * @param {number} a - 加数
 * @param {number} b - 加数
 * @returns {number} 和
 */
export const add = (a, b) => a + b;

/**
 * 两数或三数相减
 * @param {number} a - 被减数
 * @param {number} b - 减数
 * @param {number} [c] - 可选的第三个减数
 * @returns {number} 差
 */
export const subtract = (a, b, c) => {
    if (c !== undefined) {
        return a - b - c;
    }
    return a - b;
};

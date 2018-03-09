'use strict';
const iconv = require('iconv-lite');

/**
 * 特殊符号映射
 *
 * @const
 * @type {Object}
 */
const map = {
  '45': '-',
  '46': '.',
  '95': '_'
};

/* 判断是否为 0~9 */
function isNumber(decimalNumber) {
  return decimalNumber >= 48 && decimalNumber <= 58;
}

/* 判断是否为大写字母 A~Z */
function isCapital(decimalNumber) {
  return decimalNumber >= 65 && decimalNumber <= 90;
}

/* 判断是否为小写字母 a~z */
function isLowercase(decimalNumber) {
  return decimalNumber >= 97 && decimalNumber <= 122;
}

/**
 * 编码字符串
 *
 * @param  {String}  text 需要 GBK 编码的字符串
 * @return {String}  GBK 编码结果
 */
function encodeGBK(text) {
  if (typeof text !== 'string') throw new TypeError('Expected a string');
  if (text === '') return '';

  const buffer = iconv.encode(text, 'GBK');
  const arr = Array.from(buffer).map(currentValue => {
    if (isNumber(currentValue) || isCapital(currentValue) || isLowercase(currentValue)) {
      return String.fromCharCode(currentValue);
    } else if (map.hasOwnProperty(currentValue)) {
      return map[currentValue];
    } else {
      return '%' + currentValue.toString(16).toUpperCase();
    }
  });
  return arr.join('');
}

/**
 * 解码字符串
 *
 * @param  {String}  str 待解码的字符串
 * @return {String}  GBK 解码结果
 */
function decodeGBK(str) {
  if (typeof str !== 'string') throw new TypeError('Expected a string');
  if (str === '') return '';

  let arr = [];
  let startPosition = ''; // str 开头的特殊字符 0-9, a-z, A-Z, -._
  let charMap = {}; // 存储 str 中间出现的特殊字符 0-9, a-z, A-Z, -._
  let result = [];

  arr = str.split('%');
  startPosition = arr.shift();

  arr.forEach((currentValue, index) => {
    if (currentValue.length > 2) {
      charMap[index] = currentValue.substr(2);
      arr[index] = currentValue.substr(0, 2);
    }
    arr[index] = '0x' + arr[index].toLowerCase();
  });

  result = iconv.decode(new Buffer(arr), 'GBK').split('');

  for (let key in charMap) {
    const index = Math.floor(key / 2); // 汉字占用 2 字节
    result[index] += charMap[key];
  }

  return startPosition + result.join('');
}

module.exports = { encodeGBK, decodeGBK };

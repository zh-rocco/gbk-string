const test = require('ava');
const { encodeGBK, decodeGBK } = require('./index');

test(t => {
  t.is(encodeGBK(''), '');
  t.is(encodeGBK('测试文本'), '%B2%E2%CA%D4%CE%C4%B1%BE');
  t.is(encodeGBK('测试文本1Aa'), '%B2%E2%CA%D4%CE%C4%B1%BE1Aa');
  t.is(encodeGBK('1Aa测试文本'), '1Aa%B2%E2%CA%D4%CE%C4%B1%BE');
  t.is(encodeGBK('测试abc文本'), '%B2%E2%CA%D4abc%CE%C4%B1%BE');
  t.is(encodeGBK('.-_测试文本'), '.-_%B2%E2%CA%D4%CE%C4%B1%BE');
  t.is(encodeGBK('测试文本.-_'), '%B2%E2%CA%D4%CE%C4%B1%BE.-_');
  t.is(encodeGBK('测试.-_文本'), '%B2%E2%CA%D4.-_%CE%C4%B1%BE');
  t.is(encodeGBK('测试 文本'), '%B2%E2%CA%D4%20%CE%C4%B1%BE');
  t.is(encodeGBK('1234567890'), '1234567890');
  t.is(encodeGBK('abcdef'), 'abcdef');
  t.is(encodeGBK('ABCDEF'), 'ABCDEF');
  t.throws(() => {
    encodeGBK(123);
  });
  t.throws(() => {
    encodeGBK([]);
  });
  t.throws(() => {
    encodeGBK({});
  });
});

test(t => {
  t.is(decodeGBK(''), '');
  t.is(decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE'), '测试文本');
  t.is(decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE1Aa'), '测试文本1Aa');
  t.is(decodeGBK('1Aa%B2%E2%CA%D4%CE%C4%B1%BE'), '1Aa测试文本');
  t.is(decodeGBK('%B2%E2%CA%D4abc%CE%C4%B1%BE'), '测试abc文本');
  t.is(decodeGBK('.-_%B2%E2%CA%D4%CE%C4%B1%BE'), '.-_测试文本');
  t.is(decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE.-_'), '测试文本.-_');
  t.is(decodeGBK('%B2%E2%CA%D4.-_%CE%C4%B1%BE'), '测试.-_文本');
  t.is(decodeGBK('%B2%E2%CA%D4%20%CE%C4%B1%BE'), '测试 文本');
  t.is(decodeGBK('1234567890'), '1234567890');
  t.is(decodeGBK('abcdef'), 'abcdef');
  t.is(decodeGBK('ABCDEF'), 'ABCDEF');
  t.throws(() => {
    decodeGBK(123);
  });
  t.throws(() => {
    decodeGBK([]);
  });
  t.throws(() => {
    decodeGBK({});
  });
});

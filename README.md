# gbk-string

> GBK 编码/解码<br>
> Example: `测试文本` → `%B2%E2%CA%D4%CE%C4%B1%BE`

## Install

```
$ npm install gbk-string
```

## Usage

In Node:

```js
const { encodeGBK, decodeGBK } = require('gbk-string');

encodeGBK('测试文本');
//=> "%B2%E2%CA%D4%CE%C4%B1%BE"

decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE');
//=> "测试文本"
```

## API

### encodeGBK(text)

#### text

Type: `string`

### decodeGBK(str)

#### str

Type: `string`

## Dependencies

* [`iconv-lite`](https://github.com/ashtuchkin/iconv-lite)

## License

MIT © [no-nothing](https://github.com/no-nothing)

# gbk-string

> GBK 编码/解码<br>
> 示例：`测试文本` -> `%B2%E2%CA%D4%CE%C4%B1%BE`

## 背景

使用 node 爬网站数据时，个别接口需要传入 GBK 编码后的字符串。

## 安装

```
$ npm install gbk-string -S
```

## 使用

此插件仅可运行在 Node 环境下，不支持浏览器环境。

```js
const { encodeGBK, decodeGBK } = require('gbk-string');

encodeGBK('测试文本');
//=> "%B2%E2%CA%D4%CE%C4%B1%BE"

decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE');
//=> "测试文本"
```

或者：

```js
const gbk = require('gbk-string');

gbk.encodeGBK('测试文本');
//=> "%B2%E2%CA%D4%CE%C4%B1%BE"

gbk.decodeGBK('%B2%E2%CA%D4%CE%C4%B1%BE');
//=> "测试文本"
```

## API

### encodeGBK(text)

#### text

Type: `string`

### decodeGBK(str)

#### str

Type: `string`

## 依赖

* [`iconv-lite`](https://github.com/ashtuchkin/iconv-lite)

## License

MIT © [zh-rocco](https://github.com/zh-rocco)

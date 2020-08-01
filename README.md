# jp-zipcode

[郵便番号データダウンロード](https://www.post.japanpost.jp/zipcode/download.html)

## Usage

### URL

```
https://jp-zipcode-e1b50.web.app
```

### Query

| Query | Descriptioin |
| --- | --- |
| code | Please enter a Japanese postal code |


```bash
https://jp-zipcode-e1b50.web.app/_/v1/address?code=015007
```

```JSON
[
   {
      "zipcode":"0150071",
      "city":"由利本荘市",
      "state_kana":"アキタケン",
      "town":"赤沼町",
      "state":"秋田県",
      "city_kana":"ユリホンジョウシ",
      "town_kana":"アカヌママチ"
   },
   {
      "zipcode":"0150072",
      "town":"裏尾崎町",
      "state":"秋田県",
      "city":"由利本荘市",
      "state_kana":"アキタケン",
      "town_kana":"ウラオザキマチ",
      "city_kana":"ユリホンジョウシ"
   },
   {
      "city_kana":"ユリホンジョウシ",
      "city":"由利本荘市",
      "zipcode":"0150073",
      "state_kana":"アキタケン",
      "town_kana":"ササミチ",
      "town":"笹道",
      "state":"秋田県"
   },
   {
      "state_kana":"アキタケン",
      "city_kana":"ユリホンジョウシ",
      "zipcode":"0150074",
      "state":"秋田県",
      "town_kana":"サクラコウジ",
      "city":"由利本荘市",
      "town":"桜小路"
   },
   {
      "zipcode":"0150075",
      "state":"秋田県",
      "state_kana":"アキタケン",
      "city":"由利本荘市",
      "town_kana":"ハナバタマチ",
      "town":"花畑町",
      "city_kana":"ユリホンジョウシ"
   },
   {
      "town":"東町",
      "state":"秋田県",
      "city_kana":"ユリホンジョウシ",
      "state_kana":"アキタケン",
      "zipcode":"0150076",
      "town_kana":"ヒガシマチ",
      "city":"由利本荘市"
   },
   {
      "state_kana":"アキタケン",
      "city":"由利本荘市",
      "city_kana":"ユリホンジョウシ",
      "state":"秋田県",
      "zipcode":"0150077",
      "town_kana":"ホンタナカマチ",
      "town":"本田仲町"
   },
   {
      "town_kana":"ヤチマチ",
      "state":"秋田県",
      "city":"由利本荘市",
      "state_kana":"アキタケン",
      "town":"谷地町",
      "zipcode":"0150078",
      "city_kana":"ユリホンジョウシ"
   }
]
```

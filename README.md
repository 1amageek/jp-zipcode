# jp-zipcode


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
https://jp-zipcode-e1b50.web.app/_/v1/address?code=0600
```

```JSON
[
   {
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "town_kana":null,
      "zipcode":"0600000",
      "town":null,
      "city":"札幌市中央区",
      "state":"北海道"
   },
   {
      "town":"北一条西（１～１９丁目）",
      "town_kana":"ｷﾀ1ｼﾞｮｳﾆｼ(1-19ﾁｮｳﾒ)",
      "state":"北海道",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "city":"札幌市中央区",
      "zipcode":"0600001"
   },
   {
      "zipcode":"0600002",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "town":"北二条西（１～１９丁目）",
      "city":"札幌市中央区",
      "town_kana":"ｷﾀ2ｼﾞｮｳﾆｼ(1-19ﾁｮｳﾒ)",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "state":"北海道"
   },
   {
      "zipcode":"0600003",
      "town_kana":"ｷﾀ3ｼﾞｮｳﾆｼ(1-19ﾁｮｳﾒ)",
      "city":"札幌市中央区",
      "state":"北海道",
      "town":"北三条西（１～１９丁目）",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ"
   },
   {
      "town_kana":"ｷﾀ4ｼﾞｮｳﾆｼ(1-19ﾁｮｳﾒ)",
      "city":"札幌市中央区",
      "state":"北海道",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "town":"北四条西（１～１９丁目）",
      "zipcode":"0600004",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ"
   },
   {
      "town":"北五条西（１～２４丁目）",
      "zipcode":"0600005",
      "town_kana":"ｷﾀ5ｼﾞｮｳﾆｼ(1-24ﾁｮｳﾒ)",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "state":"北海道",
      "city":"札幌市中央区"
   },
   {
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "city":"札幌市中央区",
      "zipcode":"0600006",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "state":"北海道",
      "town":"北六条西（１０～２５丁目）",
      "town_kana":"ｷﾀ6ｼﾞｮｳﾆｼ(10-25ﾁｮｳﾒ)"
   },
   {
      "town_kana":"ｷﾀ7ｼﾞｮｳﾆｼ",
      "city":"札幌市中央区",
      "zipcode":"0600007",
      "state":"北海道",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "town":"北七条西"
   },
   {
      "town":"北八条西",
      "city":"札幌市中央区",
      "zipcode":"0600008",
      "state_kana":"ﾎｯｶｲﾄﾞｳ",
      "town_kana":"ｷﾀ8ｼﾞｮｳﾆｼ",
      "state":"北海道",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ"
   },
   {
      "zipcode":"0600009",
      "town":"北九条西",
      "town_kana":"ｷﾀ9ｼﾞｮｳﾆｼ",
      "city_kana":"ｻｯﾎﾟﾛｼﾁｭｳｵｳｸ",
      "city":"札幌市中央区",
      "state":"北海道",
      "state_kana":"ﾎｯｶｲﾄﾞｳ"
   }
]
```

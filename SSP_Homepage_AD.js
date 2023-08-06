// 2023-08-06 08:22

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
let data = []
if (obj.data) {
  // 少数派-开屏广告
  if(url.include("ios.sspai.com/api/v3/combo/recommend/page/get?page=1&page_size=50")) {
   obj.data.forEach((element) => {
      if(element.corner.id != 0) {
        data.push(element)
      }
    })
    obj.data = data
  }
}
$done({ body: JSON.stringify(obj) });

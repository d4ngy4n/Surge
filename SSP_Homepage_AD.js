// 2023-08-06 08:22

const url = $request.url;
if (obj.data) {
  // 少数派-开屏广告
  if (url.includes("ios.sspai.com/api/v3/combo/recommend/page/get?page=1&page_size=50")) {
    obj.data.forEach((element) => {
      element.nickname = "Mojit0";
    });
  } 
}
$done({ body: JSON.stringify(obj) });

// 2023-08-06 08:22
const url = $request.url;
if (obj.data) {
  // 少数派-主页广告
  if (url.includes("ios.sspai.com/api/v3/combo/recommend")) {
    obj.data.forEach((element) => {
      element.title = "Mojit0 Hello";
    });
  } 
}
$done({ body: JSON.stringify(obj) });

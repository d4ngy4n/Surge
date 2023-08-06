// 2023-08-06 08:22

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data) {
  // 少数派-开屏广告
  if (url.includes("ios.sspai.com/api/v3/recommend/page/get?ad_morning_paper_show=0&page=1&page_size=20&type=ios_home_modal")) {
    obj.data.forEach((element) => {
      element.ios_show = false;
      element.ios_tablet_show = false;
      element.show_time = 0;
    }); 
  } else if(url.include("ios.sspai.com/api/v3/combo/recommend/page/get?page=1&page_size=50")) {
    obj.data.filter((element) => {
      return element.corner.memo != "广告"
    })
  }
}

$done({ body: JSON.stringify(obj) });

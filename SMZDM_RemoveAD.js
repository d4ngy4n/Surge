// 2023-02-11 22:30

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);

if (obj.data) {
  // 什么值得买-开屏广告
  if (url.includes("s3.zdmimg.com/cpm/api/v1/advert_distribution/get_all_advertise")) {
    obj.data.forEach((element) => {
        element.is_show_ad = "0";
    });
  } 
}

$done({ body: JSON.stringify(obj) });
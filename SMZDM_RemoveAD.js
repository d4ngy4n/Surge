// 2023-02-11 22:30

const url = $request.url;
if (!$response.body) $done({});
let obj = JSON.parse($response.body);
obj.data.forEach((element) => {
    element.is_show_ad = "0";
    });

$done({ body: JSON.stringify(obj) });
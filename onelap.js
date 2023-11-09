var url   = $request.url;
var obj   = JSON.parse($response.body);

if (url.indexOf('/api/v2/match/subscribe/index') != -1) {
    let obj = {"code":200,"error"=>"Success","data":{"is_has_subscribe":true,"is_get_free":true,"bike_expired":1731123104,"spin_expired":1731123104,"boat_expired":1731123104,"order_status":1}}
    body = JSON.stringify(obj);
}
$done({body});
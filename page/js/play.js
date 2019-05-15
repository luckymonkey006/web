function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]);
    return null; //返回参数值
}

var torrent = getUrlParam("torrentId")
var curWwwPath = window.location.href;
var pathName = window.location.pathname;
var pos = curWwwPath.indexOf(pathName);
var localhostPaht = curWwwPath.substring(0, pos + 5);
var torrentId = localhostPaht + '/res/' + torrent + "/info.torrent"

$.getJSON("res/" + torrent + "/info.json", function (json) {
    $("#title").html(json.file_name)

})
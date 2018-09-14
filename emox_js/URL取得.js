var arg = new Object;
var pair = location.search.substring(1).split('&');
// 変数pairにURLの?の後ろを&で区切ったものを配列にして代入
for(var i=0;pair[i];i++) {
  // for文でpairがある限りループさせる
    var kv = pair[i].split('=');
    arg[kv[0]]=kv[1];
}

$(function(){
  $(window).hashchange( function(){
  //URL変更時にイベント
  $('.nowflur').dimmer('hide');
  //dimmerの削除
  plot_dmcdata(arg.human1,arg.start1,arg.end1,1);
  plot_dmcdata2(arg.human2,arg.start2,arg.end2,1);
  //画像、グラフの描写
})

if(arg.now1){
$(window).hashchange();
}

});

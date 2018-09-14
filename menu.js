$(function(){
    /*     ボタン     */
    $('button').on('click',(function() {
        //var id = $(this).attr("id");
        console.log('クリックされました！');
    }))

});


/*     検索機能     */
$(window).on('load',function(){

  var arg = new Object;
  var pair=location.search.substring(1).split('&');
  for(var i=0;pair[i];i++) {
      var kv = pair[i].split('=');
      arg[kv[0]]=kv[1];
  }
  console.log(arg.search);
  au(arg.search);
});

/*     検索結果の表示     */
function au(num){
  for (i=0;i<=46;i++){
    var get="AU"+i
    var au2="#"+get
    if (""!=num){
      if(i==num){
        $(au2).css("display","")
      }
      else {
        $(au2).css("display","none")
      }
    }
  }
}

$(function(){
  //ニュートラル表示画面のcloseボタンをおしたら
  var flg_n = 0;
  $('#neutral_cls').click(function() {
    $('#graph_div').dimmer('hide');
    flg_n = 0;
  });
  $('#neutral_show').click(function() {
    if(flg_n == 0){
        change_neutral_img("029949");
        $('#graph_div').dimmer('show');
        flg_n = 1;
    }else{
        $('#graph_div').dimmer('hide');
        flg_n = 0;
    }
  });
});

function change_neutral_img(neu_frame){
  console.log(nowhuman);
  var video = document.getElementById('neutral_img');
  if(nowhuman=="14"){
    var movie_url = "emodata/"+nowhuman+"/"+nowhuman+"_"+neu_frame+".jpg";
    video.src = movie_url;
  }else{

  }
};

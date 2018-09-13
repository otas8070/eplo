$(function(){
  $('.nowflur').dimmer('show');
  //ニュートラル表示画面のcloseボタンをおしたら
  var flg_n = 0;
  $('#neutral_cls').click(function() {
    $('#graph_div').dimmer('hide');
    flg_n = 0;
  });
  //ニュートラルボタンを押したら
  $('#neutral_show').click(function() {
    if(nowhuman=="-1"){
      alert("Plz Select Emotional Video :)");
    }else{
      if(flg_n == 0){
          change_neutral_img();
          $('#graph_div').dimmer('show');
          flg_n = 1;
      }else{
          $('#graph_div').dimmer('hide');
          flg_n = 0;
      }
    }
  });
});

function change_neutral_img(){
  console.log(nowhuman);
  var video = document.getElementById('neutral_img');

  if(nowhuman=="14"){
    var neu_frame = "029949";
    var movie_url = "emodata/"+nowhuman+"/"+nowhuman+"_"+neu_frame+".jpg";
    video.src = movie_url;
  }else if(nowhuman=="26"){
    var neu_frame = "037830";
    var movie_url = "emodata/"+nowhuman+"/"+nowhuman+"_"+neu_frame+".jpg";
    video.src = movie_url;
  }else if(nowhuman=="33"){
    var neu_frame = "036255";
    var movie_url = "emodata/"+nowhuman+"/"+"test_"+neu_frame+".jpg";
    video.src = movie_url;
  }else{

  }
};

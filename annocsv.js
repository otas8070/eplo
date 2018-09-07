var Movie = [];
var FaceAction = [];
var Start=[];
var End=[];
var annocsv;
var sel_video="none";
var sel_gt="none";
var sel_reason="none";
var sel_result;

var endo;

$(function(){

  anno_csv_get();
  /*$('#video').change(function() {
  // 選択されているvalue属性値を取り出す
  sel_video = $('#video').val();
});*/
$('#gt').change(function() {
  // 選択されているvalue属性値を取り出す
  sel_gt = $('#gt').val();

});

$('#siboru').on('click', function() {
  var choice = annocsv;
  //GT
  if(sel_gt=="none"){
    var choice_gt = choice;
  }else{
    var choice_gt = [];
    for(var i in choice){
      if(choice[i]["FaceAction"]===sel_gt){
        choice_gt.push(choice[i]);
      }
    }
  }
  /*
  if(sel_video=="none"){
  var choice_video = choice_gt;
}else{
var choice_video = [];
for(var i in choice_gt){
if(choice_gt[i]["Movie"]===sel_video){
choice_video.push(choice_gt[i]);
}
}
}*/
sel_result = choice_gt;

//search
var html = '<option value="none">選択してくださいね</option>';
for(var i in sel_result){
  if(i<200){
    html = html + '<option value="'+i+'">'+sel_result[i]['Movie']+'</option>';
  }
}
$('#search').html(html);

});

$('#search').change(function() {
  $('.nowflur').dimmer('hide');
  console.log(sel_result[$('#search').val()]);
  //トヨタの感情AUのタグをvideoの下に表示する。
  need_au(sel_result[$('#search').val()]);
  //グラフを描画する
  plot_dmcdata(sel_result[$('#search').val()]["human"],sel_result[$('#search').val()]["Start"],sel_result[$('#search').val()]["End"]);
  //document.getElementById('videoname').innerHTML = sel_result[$('#search').val()]["FaceAction"];
  //document.getElementById('dname').innerHTML = sel_result[$('#search').val()]["Movie"];
});
});


function need_au(data){
  var need_aulist = [];
  for (var i = 1; i < 64; i++) {
    var AUAU = "AU"+String(i);
    if(data[AUAU]!=""){
      console.log(AUAU);
      need_aulist.push(AUAU);
    }
  }
  var output = "";
  for(let i in need_aulist) {
    output = output + '<div class="ui teal tag center label">'+need_aulist[i]+'</div>';
  }
  console.log(need_aulist);
  $('#laveltag').html(output);
  console.log(need_aulist);
};

function anno_csv_get(){
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET","http://localhost:3000/api/emotion");
  xhr2.addEventListener("load", function(e){
    annocsv = JSON.parse(xhr2.responseText);
    console.log(annocsv);
    //配列用意
    var Movie = [];
    var FaceAction = [];
    var Start=[];
    var End=[];
    for(var i in annocsv){
      Movie.push(annocsv[i]["Movie"]);
      FaceAction.push(annocsv[i]["FaceAction"]);
      Start.push(annocsv[i]["Start"]);
      End.push(annocsv[i]["End"]);
    }

    /*Movie = Movie.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });*/
  FaceAction = FaceAction.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });
  /*for (var i in Movie) {
  $('#video').append('<option value="' + Movie[i] + '">' + Movie[i] + '</option>');
}*/
for (var i in FaceAction) {
  $('#gt').append('<option value="' + FaceAction[i] + '">' + FaceAction[i] + '</option>');
}

});
xhr2.send();
};

function movie_sel2(vi,chap,gtt){
  var video2 = document.getElementById('mv');
  var movie_url2 = "mov/"+vi+"/mp4/"+vi+"@"+chap+"+"+gtt+".mp4";
  video.src = movie_url2;
  video.load();
}

function zeroPadding2(NUM, LEN){
  return ( Array(LEN).join('0') + NUM ).slice( -LEN );
}

function image_sel2(human2,frame2){
  var video2 = document.getElementById('oneshot2');

  if(human2=="33"){
    var movie_url2 = "emodata/"+human2+"/test_0"+frame2+".jpg";
    video2.src = movie_url2;
  }else{
    var NUM = frame2;
    NUM = zeroPadding2(NUM, 6);
    var movie_url2 = "emodata/"+human2+"/"+human2+"_"+NUM+".jpg";
    video2.src = movie_url2;
  }
}

var originalLineDraw2 = Chart.controllers.line.prototype.draw;
Chart.helpers.extend(Chart.controllers.line.prototype, {
  draw: function(){
    originalLineDraw.apply(this, arguments);
    var chart = this.chart;
    var ctx = chart.chart.ctx;
    var index = chart.config.data.lineAtIndex;
    var index2 = chart.config.data.lineAtIndex2;
    if (index){
      var xaxis = chart.scales['x-axis-0'];
      var yaxis = chart.scales['y-axis-0'];
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xaxis.getPixelForValue(undefined, index), yaxis.top);
      ctx.strokeStyle = '#ff0000';
      ctx.lineWidth = 1;
      ctx.lineTo(xaxis.getPixelForValue(undefined, index), yaxis.bottom);
      ctx.stroke();
      ctx.restore();
    }
    if (index2){
      var xaxis = chart.scales['x-axis-0'];
      var yaxis = chart.scales['y-axis-0'];
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(xaxis.getPixelForValue(undefined, index2), yaxis.top);
      ctx.strokeStyle = '#00ff00';
      ctx.lineWidth = 1;
      ctx.lineTo(xaxis.getPixelForValue(undefined, index2), yaxis.bottom);
      ctx.stroke();
      ctx.restore();
    }
  }
});


$(function(){
  $("#sm2").click(function(){set_chkbox2graph2();});
  $("#bR2").click(function(){set_chkbox2graph2();});
  $("#bF2").click(function(){set_chkbox2graph2();});
  $("#nW2").click(function(){set_chkbox2graph2();});
  $("#uL2").click(function(){set_chkbox2graph2();});
  $("#mO2").click(function(){set_chkbox2graph2();});
  $("#eC2").click(function(){set_chkbox2graph2();});
  $("#cR2").click(function(){set_chkbox2graph2();});
  $("#yw2").click(function(){set_chkbox2graph2();});
  $("#joy2").click(function(){set_chkbox2graph2();});
  $("#anger2").click(function(){set_chkbox2graph2();});
  $("#surprise2").click(function(){set_chkbox2graph2();});
  $("#valence2").click(function(){set_chkbox2graph2();});
  $("#disgust2").click(function(){set_chkbox2graph2();});
  $("#fear2").click(function(){set_chkbox2graph2();});
  $("#happy2").click(function(){set_chkbox2graph2();});
  $("#sad2").click(function(){set_chkbox2graph2();});
  $("#neutral2").click(function(){set_chkbox2graph2();});

  var countup2 = function(){
    if(constEframe2>nowframe2){
      nowframe2 = nowframe2 + 1;
      image_sel2(nowhuman2,String(nowframe2));
      plot_frame2();
    }else{
      clearInterval(countupinter2);
      nowframe2 = constSframe2;
    }
  }
  var countupinter2;

  /*----------------コマ送りボタン---------------*/
  $("#return2").on("click", function () {
    /*var video = $('#mv').get(0);
    if(!video.paused){
    video.pause();
  }
  video.currentTime -= 1/20; // 20F/1sec*/
  clearInterval(countupinter2);
  if(constSframe2<nowframe2){
    nowframe2 = nowframe2 - 1;
    image_sel2(nowhuman2,String(nowframe2));
    plot_frame2();
  }else{
    nowframe2 = constEframe2;
  }
});

$("#fast2").on("click", function () {
  /*var video = $('#mv').get(0);
  if(!video.paused){
  video.pause();
}
console.log("a");
video.currentTime += 1/20; // 20F/1sec*/
clearInterval(countupinter2);
if(constEframe2>nowframe2){
  nowframe2 = nowframe2 + 1;
  image_sel2(nowhuman2,String(nowframe2));
  plot_frame2();
}else{
  nowframe2 = constSframe2;
}


});

$("#play2").on("click", function () {
  clearInterval(countupinter2);
  countupinter2 = setInterval(countup2, 1000/20);

});

$("#pose2").on("click", function () {

  clearInterval(countupinter2);

});

$("#sm2").prop('checked',true);
$("#bR2").prop('checked',false);
$("#bF2").prop('checked',false);
$("#nW2").prop('checked',false);
$("#uL2").prop('checked',false);
$("#mO2").prop('checked',false);
$("#eC2").prop('checked',false);
$("#cR2").prop('checked',false);
$("#yw2").prop('checked',false);
$("#joy2").prop('checked',false);
$("#anger2").prop('checked',false);
$("#surprise2").prop('checked',false);
$("#valence2").prop('checked',false);
$("#disgust2").prop('checked',false);
$("#fear2").prop('checked',false);
$("#happy2").prop('checked',false);
$("#sad2").prop('checked',false);
$("#neutral2").prop('checked',false);

$("#mejirusi2").hide();
$("#waku2").hide();
});

function plot_frame2(){
  if( smile_chart2 ){
    // 垂直線の描画
    smile_data2.lineAtIndex = nowframe2 - constSframe2;//parseInt(nowframe)-1;
    smile_data2.lineAtIndex2 = meji2;
    meji_Hi2 = meji2 + 1;
    meji_Low2 = meji2 - 1;
    smile_chart2.update();
    set_lavel_data2(nowframe2 - constSframe2);

　//アノテーション用目印
  if((nowframe2 - constSframe2) <= meji_Hi2&&(nowframe2 - constSframe2) >= meji_Low2){
    $("#mejirusi2").show();
    $("#waku2").show();
    var waku_he2 = $('#oneshot2').height();
    $('#waku2').outerHeight(waku_he2);
  }else{
    $("#mejirusi2").hide();
    $("#waku2").hide();}
  }
};

var canvas2;
var meji2;
var meji_Hi2;
var meji_Low2;
var smile_chart2;
var browRaise_chart2;
var noseWrinkle_chart2;
var upperLipRaise_chart2;
var mouseOpen_chart2;
var eyeClosure_chart2;
var cheekRaise_chart2;
var yawn_chart2;
var joy_chart2;
var anger_chart2;
var surprise_chart2;
var valence_chart2;
var disgust_chart2;
var fear_chart2;
var happy_chart2;
var sad_chart2;
var neutral_chart2;

var smile_data2;
var browRaise_data2;
var browFurrow_data2;
var noseWrinkle_data2;
var upperLipRaise_data2;
var mouseOpen_data2;
var eyeClosure_data2;
var cheekRaise_data2;
var yawn_data2;
var joy_data2;
var anger_data2;
var surprise_data2;
var valence_data2;
var disgust_data2;
var fear_data2;
var happy_data2;
var sad_data2;
var neutral_data2;


var frame2 = [];
var smile2 = [];
var browRaise2 = [];
var browFurrow2 = [];
var noseWrinkle2 = [];
var upperLipRaise2 = [];
var mouseOpen2 = [];
var eyeClosure2 = [];
var cheekRaise2 = [];
var yawn2 = [];
var joy2 = [];
var anger2 = [];
var surprise2 = [];
var valence2 = [];
var disgust2 = [];
var fear2 = [];
var happy2 = [];
var sad2 = [];
var neutral2 = [];

var nowframe2;
var nowhuman2 = "-1";
var constSframe2;
var constEframe2;

var datagraph2 = [];

var anser2;

function make_graph2(frame,data){
  var data_graph2 = {
    labels: frame,
    datasets: data
  };
  var options2 = {
    scaleOverride : true,
    title: {
      display: true,
      text: ""
    },scales: {
      xAxes: [{
        ticks: {
          autoSkip: true,
          maxTicksLimit: 21
        }
      }]
      ,yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: -10,
            max: 100
          }
        }
      ]
    }
  };
  return [data_graph2,options2];
}

function make_dataset2(datasets,data,color,label){
  datasets.push({
    label: label,
    spanGaps: false,
    backgroundColor:"rgba(255,99,132,0.0)",
    lineTension: 0,
    data: data,
    borderColor:color,
    pointRadius: 5,
    pointBackgroundColor:color,
  });
  return datasets;
}


function plot_dmcdata2(human2,Start2,End2,Frag){
  var xhr = new XMLHttpRequest();
  ///api/emograph/:csv/:startframe/:endframe
  console.log("http://localhost:3000/api/emograph/"+human2+".csv/"+Start2+"/"+End2);
  xhr.open("GET","http://localhost:3000/api/emograph/"+human2+".csv/"+Start2+"/"+End2);
  xhr.addEventListener("load", function(e){

    var photoList = JSON.parse(xhr.responseText);
    console.log(photoList);
    //配列用意
    frame2 = [];
    smile2 = [];
    browRaise2 = [];
    browFurrow2 = [];
    noseWrinkle2 = [];
    upperLipRaise2 = [];
    mouseOpen2 = [];
    eyeClosure2 = [];
    cheekRaise2 = [];
    yawn2 = [];
    joy2 = [];
    anger2 = [];
    surprise2 = [];
    valence2 = [];
    disgust2 = [];
    fear2 = [];
    happy2 = [];
    sad2 = [];
    neutral2 = [];

    for(var i in photoList){
      frame2.push(photoList[i]["frame"]);
      smile2.push(photoList[i]["smile"]);
      browRaise2.push(photoList[i]["browRaise"]);
      browFurrow2.push(photoList[i]["browFurrow"]);
      noseWrinkle2.push(photoList[i]["noseWrinkle"]);
      upperLipRaise2.push(photoList[i]["upperLipRaise"]);
      mouseOpen2.push(photoList[i]["mouseOpen"]);
      eyeClosure2.push(photoList[i]["eyeClosure"]);
      cheekRaise2.push(photoList[i]["cheekRaise"]);
      yawn2.push(photoList[i]["yawn"]);
      joy2.push(photoList[i]["joy"]);
      anger2.push(photoList[i]["anger"]);
      surprise2.push(photoList[i]["surprise"]);
      valence2.push(photoList[i]["valence"]);
      disgust2.push(photoList[i]["disgust"]);
      fear2.push(photoList[i]["fear"]);
      happy2.push(photoList[i]["happy"]);
      sad2.push(photoList[i]["sad"]);
      neutral2.push(photoList[i]["neutral"]);
    }

    datagraph2 = [];
    datagraph2 = make_dataset2(datagraph2,smile2,"rgba(255,183,76,1.0)","smile2");

    //描画
    var tmp_graph2 = make_graph2(frame2,datagraph2);
    smile_data2 = tmp_graph2[0];
    canvas2 = document.getElementById('smile2');
console.log(smile_data2);
    if( smile_chart2 ){ smile_chart2.destroy(); }
    smile_chart2 = new Chart(canvas2, {
      type: 'line',  //グラフの種類
      data: smile_data2,  //表示するデータ
      options: tmp_graph2[1]	//オプション設定
    });

    image_sel2(human2,Start2);
    constSframe2 = Start2;
    constEframe2 = End2;
    nowframe2 = parseInt(Start2);
    nowhuman2 = human2;
    set_lavel_data2(nowframe2 - constSframe2);

    if(Frag==1){
      nowframe2=parseInt(arg.now2);
      constSframe2=parseInt(arg.start2);
      constEframe2=parseInt(arg.end2);
      nowhuman2=parseInt(arg.human2);
      image_sel2(arg.human2,arg.now2);
      plot_frame2();
    }
    if(arg.kanjou){
    $("#sm2").prop('checked',false);

    if(arg.kanjou == "smile"){
      $("#sm2").prop('checked',true);
    }
    if(arg.kanjou == "browRaise"){
      $("#bR2").prop('checked',true);
    }

    if(arg.kanjou == "browFurrow"){
    $("#bF2").prop('checked',true);
    }

    if(arg.kanjou == "noseWrinkle"){
    $("#nW2").prop('checked',true);
    }

    if(arg.kanjou == "upperLipRaise"){
    $("#uL2").prop('checked',true);
    }

    if(arg.kanjou == "mouseOpen"){
    $("#mO2").prop('checked',true);
    }

    if(arg.kanjou == "eyeClosure"){
    $("#eC").prop('checked',true);
    }

    if(arg.kanjou == "cheekRaise"){
    $("#cR2").prop('checked',true);
    }

    if(arg.kanjou == "yawn"){
    $("#yw2").prop('checked',true);
    }

    if(arg.kanjou == "joy"){
    $("#joy2").prop('checked',true);
    }
    if(arg.kanjou == "anger"){
    $("#anger2").prop('checked',true);
    }
    if(arg.kanjou == "surprise"){
    $("#surprise2").prop('checked',true);
    }
    if(arg.kanjou == "valence"){
    $("#valence2").prop('checked',true);
    }

    if(arg.kanjou == "disgust"){
    $("#disgust2").prop('checked',true);
    }

    if(arg.kanjou == "valence"){
    $("#valence2").prop('checked',true);
    }

    if(arg.kanjou == "fear"){
    $("#fear2").prop('checked',true);
    }

    if(arg.kanjou == "happy"){
    $("#happy2").prop('checked',true);
    }

    if(arg.kanjou == "sad"){
    $("#sad2").prop('checked',true);
    }

    if(arg.kanjou == "neutral"){
    $("#neutral2").prop('checked',true);
  }
  set_chkbox2graph2();
  }

    canvas2.addEventListener('click', function(event2) {
      let item2 = smile_chart2.getElementAtEvent(event2);
      if (item2.length == 0) {
        smile_chart2.scale.selectedIndex = smile_chart2.datasets[0].points.indexOf(points[0])
        smile_chart2.update();
        console.log('no element found.')
        return;
      }
      item2 = item2[0];
      let data2 = item2._index;
      meji2 = item2._index;
      console.log(item);
      smile_data2.lineAtIndex = nowframe2 - constSframe2;//parseInt(nowframe)-1;
      smile_data2.lineAtIndex2 = meji2;
      meji_Hi2 = meji2 + 1;
      meji_Low2 = meji2 - 1;
      smile_chart2.update();
    });

  });
  xhr.send();
};

function set_lavel_data2(nowframe2_num){
  chk_thre(parseFloat(smile2[nowframe2_num]),"#smile2_val","#smile2_tr");
  chk_thre(parseFloat(browRaise2[nowframe2_num]),"#browRaise2_val","#browRaise2_tr");
  chk_thre(parseFloat(browFurrow2[nowframe2_num]),"#browFurrow2_val","#browFurrow2_tr");
  chk_thre(parseFloat(noseWrinkle2[nowframe2_num]),"#noseWrinkle2_val","#noseWrinkle2_tr");
  chk_thre(parseFloat(upperLipRaise2[nowframe2_num]),"#upperLipRaise2_val","#upperLipRaise2_tr");
  chk_thre(parseFloat(mouseOpen2[nowframe2_num]),"#mouseOpen2_val","#mouseOpen2_tr");
  chk_thre(parseFloat(eyeClosure2[nowframe2_num]),"#eyeClosure2_val","#eyeClosure2_tr");
  chk_thre(parseFloat(cheekRaise2[nowframe2_num]),"#cheekRaise2_val","#cheekRaise2_tr");
  chk_thre(parseFloat(yawn2[nowframe2_num]),"#yawn2_val","#yawn2_tr");
  chk_thre(parseFloat(joy2[nowframe2_num]),"#joy2_val","#joy2_tr");
  chk_thre(parseFloat(anger2[nowframe2_num]),"#anger2_val","#anger2_tr");
  chk_thre(parseFloat(surprise2[nowframe2_num]),"#surprise2_val","#surprise2_tr");
  chk_thre(parseFloat(valence2[nowframe2_num]),"#valence2_val","#valence2_tr");
  chk_thre(parseFloat(disgust2[nowframe2_num]),"#disgust2_val","#disgust2_tr");
  chk_thre(parseFloat(fear2[nowframe2_num]),"#fear2_val","#fear2_tr");
  chk_thre(parseFloat(happy2[nowframe2_num]),"#happy2_val","#happy2_tr");
  chk_thre(parseFloat(sad2[nowframe2_num]),"#sad2_val","#sad2_tr");
  chk_thre(parseFloat(neutral2[nowframe2_num]),"#neutral2_val","#neutral2_tr");
};

function chk_thre2(val2,id2,id_tr2){
  $(id_tr2).removeClass();
  if(val2 >= 20){
    $(id_tr2).addClass('positive');
  }else if(Number.isNaN(val2)){
    $(id_tr2).addClass('disabled');
  }
  $(id2).text(String(val2.toFixed(1)));
}

function set_chkbox2graph2(){
  datagraph2 = [];
  //--------------smile---------------
  if($("#sm2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,smile2,"rgba(255,183,76,1.0)","smile2");
  }
  //--------------browRaise---------------
  if($("#bR2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,browRaise2,"rgba(126,83,34,1.0)","browRaise2");
  }
  //--------------browFurrow---------------
  if($("#bF2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,browFurrow2,"rgba(200,83,200,1.0)","browFurrow2");
  }
  //--------------noseWrinkle---------------
  if($("#nW2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,noseWrinkle2,"rgba(100,200,0,1.0)","noseWrinkle2");
  }
  //--------------upperLipRaise---------------
  if($("#uL2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,upperLipRaise2,"rgba(250,50,0,1.0)","upperLipRaise2");
  }
  //--------------mouseOpen---------------
  if($("#mO2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,mouseOpen2,"rgba(38,38,38,1.0)","mouseOpen2");
  }
  //--------------eyeClosure---------------
  if($("#eC2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,eyeClosure2,"rgba(12,82,188,1.0)","eyeClosure2");
  }
  //--------------cheekRaise---------------
  if($("#cR2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,cheekRaise2,"rgba(240,117,188,1.0)","cheekRaise2");
  }
  //--------------yawn---------------
  if($("#yw2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,yawn2,"rgba(135,0,200,1.0)","yawn2");
  }
  //--------------joy---------------
  if($("#joy2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,joy2,"rgba(255,94,25,1.0)","joy2");
  }
  //--------------anger---------------
  if($("#anger2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,anger2,"rgba(255,195,76,1.0)","anger2");
  }
  //--------------surprise---------------
  if($("#surprise2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,surprise2,"rgba(103,228,126,1.0)","surprise2");
  }
  //--------------valence---------------
  if($("#valence2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,valence2,"rgba(120,119,13,1.0)","valence2");
  }
  //--------------disgust---------------
  if($("#disgust2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,disgust2,"rgba(226,159,167,1.0)","disgust2");
  }
  //--------------fear---------------
  if($("#fear2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,fear2,"rgba(114,140,12,1.0)","fear2");
  }
  //--------------happy---------------
  if($("#happy2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,happy2,"rgba(255,0,0,1.0)","happy2");
  }
  //--------------sad---------------
  if($("#sad2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,sad2,"rgba(28,5,255,1.0)","sad2");
  }
  //--------------neutral---------------
  if($("#neutral2").prop("checked")){
    datagraph2 = make_dataset2(datagraph2,neutral2,"rgba(50,255,18,1.0)","neutral2");
  }


  //描画
  var tmp_graph2 = make_graph2(frame2,datagraph2);
  smile_data2 = tmp_graph2[0];
  canvas2 = document.getElementById('smile2');

  if( smile_chart2 ){ smile_chart2.destroy(); }
  smile_chart2 = new Chart(canvas2, {
    type: 'line',  //グラフの種類
    data: smile_data2,  //表示するデータ
    options: tmp_graph2[1]	//オプション設定
  });

};

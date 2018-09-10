function movie_sel(vi,chap,gtt){
  var video = document.getElementById('mv');
  var movie_url = "mov/"+vi+"/mp4/"+vi+"@"+chap+"+"+gtt+".mp4";
  video.src = movie_url;
  video.load();
}

function zeroPadding(NUM, LEN){
  return ( Array(LEN).join('0') + NUM ).slice( -LEN );
}

function image_sel(human,frame){
  var video = document.getElementById('oneshot');

  if(human=="33"){
    var movie_url = "emodata/"+human+"/test_0"+frame+".jpg";
    video.src = movie_url;
  }else{
    var NUM = frame;
    NUM = zeroPadding(NUM, 6);
    var movie_url = "emodata/"+human+"/"+human+"_"+NUM+".jpg";
    video.src = movie_url;
  }
}

var originalLineDraw = Chart.controllers.line.prototype.draw;
Chart.helpers.extend(Chart.controllers.line.prototype, {
  draw: function(){
    originalLineDraw.apply(this, arguments);
    var chart = this.chart;
    var ctx = chart.chart.ctx;
    var index = chart.config.data.lineAtIndex;
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
  }
});


$(function(){
  var countup = function(){
    if(constEframe>nowframe){
      nowframe = nowframe + 1;
      image_sel(nowhuman,String(nowframe));
      plot_frame();
    }else{
      clearInterval(countupinter);
      nowframe = constSframe;
    }
  }
  var countupinter;

  /*----------------サイドバー表示ボタン---------------*/
  $('#js-sidebar').click(function() {
    $('.ui.sidebar').sidebar('toggle');
    document.getElementById("gt").style.visibility = 'visible';
    document.getElementById("search").style.visibility = 'visible';
  });

  $('#letstart').click(function() {
    $('.ui.sidebar').sidebar('toggle');
    document.getElementById("gt").style.visibility = 'visible';
    document.getElementById("search").style.visibility = 'visible';
  });

  $('.ui.black.deny.button').click(function() {
    $('.ui.mini.modal')
    .modal('hide')
    ;
  });
  /*----------------コマ送りボタン---------------*/
  $("#return").on("click", function () {
    /*var video = $('#mv').get(0);
    if(!video.paused){
    video.pause();
  }
  video.currentTime -= 1/20; // 20F/1sec*/
  clearInterval(countupinter);
  if(constSframe<nowframe){
    nowframe = nowframe - 1;
    image_sel(nowhuman,String(nowframe));
    plot_frame();
  }else{
    nowframe = constEframe;
  }
});

$("#fast").on("click", function () {
  /*var video = $('#mv').get(0);
  if(!video.paused){
  video.pause();
}
console.log("a");
video.currentTime += 1/20; // 20F/1sec*/
clearInterval(countupinter);
if(constEframe>nowframe){
  nowframe = nowframe + 1;
  image_sel(nowhuman,String(nowframe));
  plot_frame();
}else{
  nowframe = constSframe;
}


});

$("#play").on("click", function () {
  clearInterval(countupinter);
  countupinter = setInterval(countup, 1000/20);

});

$("#pose").on("click", function () {

  clearInterval(countupinter);

});

/*----------------動画自動再生ボタン---------------*/
$('#autoplay').click(function(){
  var a = $('#autoplay').prop("checked");
  if(a){
    var video = $('#mv').get(0);
    video.autoplay = true;
  }else{
    var video = $('#mv').get(0);
    video.autoplay = false;
  }
});

$("#sm").prop('checked',true);
$("#bR").prop('checked',false);
$("#nW").prop('checked',false);
$("#uL").prop('checked',false);
$("#mO").prop('checked',false);
$("#eC").prop('checked',false);
$("#cR").prop('checked',false);
$("#yw").prop('checked',false);
$("#joy").prop('checked',false);
$("#anger").prop('checked',false);
$("#surprise").prop('checked',false);
$("#valence").prop('checked',false);
$("#disgust").prop('checked',false);
$("#fear").prop('checked',false);
$("#happy").prop('checked',false);
$("#sad").prop('checked',false);
$("#neutral").prop('checked',false);

$("#mejirusi").hide();
$("#waku").hide();

function plot_frame(){
  if( smile_chart ){
    // 垂直線の描画
    smile_data.lineAtIndex = nowframe - constSframe;//parseInt(nowframe)-1;
    smile_chart.update();
    set_lavel_data(nowframe - constSframe);
　//アノテーション用目印
  if(meji>=0){
    $("#mejirusi").show();
    $("#waku").show();
    var waku_he = $('#oneshot').height();
    $('#waku').outerHeight(waku_he);
  }else{
    $("#mejirusi").hide();
    $("#waku").hide();}
  }
};
});

var canvas;
var meji;
var smile_chart;
var browRaise_chart;
var noseWrinkle_chart;
var upperLipRaise_chart;
var mouseOpen_chart;
var eyeClosure_chart;
var cheekRaise_chart;
var yawn_chart;
var joy_chart;
var anger_chart;
var surprise_chart;
var valence_chart;
var disgust_chart;
var fear_chart;
var happy_chart;
var sad_chart;
var neutral_chart;

var smile_data;
var browRaise_data;
var noseWrinkle_data;
var upperLipRaise_data;
var mouseOpen_data;
var eyeClosure_data;
var cheekRaise_data;
var yawn_data;
var joy_data;
var anger_data;
var surprise_data;
var valence_data;
var disgust_data;
var fear_data;
var happy_data;
var sad_data;
var neutral_data;


var frame = [];
var smile = [];
var browRaise = [];
var noseWrinkle = [];
var upperLipRaise = [];
var mouseOpen = [];
var eyeClosure = [];
var cheekRaise = [];
var yawn = [];
var joy = [];
var anger = [];
var surprise = [];
var valence = [];
var disgust = [];
var fear = [];
var happy = [];
var sad = [];
var neutral = [];

var nowframe;
var nowhuman = "-1";
var constSframe;
var constEframe;

var datagraph = [];

var anser;

function make_graph(frame,data){
  var data_graph = {
    labels: frame,
    datasets: data
  };
  var options = {
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
  return [data_graph,options];
}

function make_dataset(datasets,data,color,label){
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


function plot_dmcdata(human,Start,End){
  var xhr = new XMLHttpRequest();
  ///api/emograph/:csv/:startframe/:endframe
  console.log("http://localhost:3000/api/emograph/"+human+".csv/"+Start+"/"+End);
  xhr.open("GET","http://localhost:3000/api/emograph/"+human+".csv/"+Start+"/"+End);
  xhr.addEventListener("load", function(e){


    var photoList = JSON.parse(xhr.responseText);
    console.log(photoList);
    //配列用意
    frame = [];
    smile = [];
    browRaise = [];
    noseWrinkle = [];
    upperLipRaise = [];
    mouseOpen = [];
    eyeClosure = [];
    cheekRaise = [];
    yawn = [];
    joy = [];
    anger = [];
    surprise = [];
    valence = [];
    disgust = [];
    fear = [];
    happy = [];
    sad = [];
    neutral = [];



    for(var i in photoList){
      frame.push(photoList[i]["frame"]);
      smile.push(photoList[i]["smile"]);
      browRaise.push(photoList[i]["browRaise"]);
      noseWrinkle.push(photoList[i]["noseWrinkle"]);
      upperLipRaise.push(photoList[i]["upperLipRaise"]);
      mouseOpen.push(photoList[i]["mouseOpen"]);
      eyeClosure.push(photoList[i]["eyeClosure"]);
      cheekRaise.push(photoList[i]["cheekRaise"]);
      yawn.push(photoList[i]["yawn"]);
      joy.push(photoList[i]["joy"]);
      anger.push(photoList[i]["anger"]);
      surprise.push(photoList[i]["surprise"]);
      valence.push(photoList[i]["valence"]);
      disgust.push(photoList[i]["disgust"]);
      fear.push(photoList[i]["fear"]);
      happy.push(photoList[i]["happy"]);
      sad.push(photoList[i]["sad"]);
      neutral.push(photoList[i]["neutral"]);
    }

    datagraph = [];
    datagraph = make_dataset(datagraph,smile,"rgba(255,183,76,1.0)","smile");

    //描画
    var tmp_graph = make_graph(frame,datagraph);
    smile_data = tmp_graph[0];
    canvas = document.getElementById('smile');

    if( smile_chart ){ smile_chart.destroy(); }
    smile_chart = new Chart(canvas, {
      type: 'line',  //グラフの種類
      data: smile_data,  //表示するデータ
      options: tmp_graph[1]	//オプション設定
    });

    $("#sm").click(function(){set_chkbox2graph();});
    $("#bR").click(function(){set_chkbox2graph();});
    $("#nW").click(function(){set_chkbox2graph();});
    $("#uL").click(function(){set_chkbox2graph();});
    $("#mO").click(function(){set_chkbox2graph();});
    $("#eC").click(function(){set_chkbox2graph();});
    $("#cR").click(function(){set_chkbox2graph();});
    $("#yw").click(function(){set_chkbox2graph();});
    $("#joy").click(function(){set_chkbox2graph();});
    $("#anger").click(function(){set_chkbox2graph();});
    $("#surprise").click(function(){set_chkbox2graph();});
    $("#valence").click(function(){set_chkbox2graph();});
    $("#disgust").click(function(){set_chkbox2graph();});
    $("#fear").click(function(){set_chkbox2graph();});
    $("#happy").click(function(){set_chkbox2graph();});
    $("#sad").click(function(){set_chkbox2graph();});
    $("#neutral").click(function(){set_chkbox2graph();});


    console.log(sel_result);
    image_sel(sel_result[$('#search').val()]["human"],sel_result[$('#search').val()]["Start"]);
    //movie_sel(sel_result[$('#search').val()]["video"],sel_result[$('#search').val()]["Chapter"],sel_result[$('#search').val()]["GT"]);
    nowframe = parseInt(sel_result[$('#search').val()]["Start"]);
    constSframe = nowframe;
    constEframe = sel_result[$('#search').val()]["End"];
    nowhuman = sel_result[$('#search').val()]["human"];
    set_lavel_data(nowframe - constSframe);

  });
  xhr.send();
};

function set_lavel_data(nowframe_num){
  chk_thre(parseFloat(smile[nowframe_num]),"#smile_val","#smile_tr");
  chk_thre(parseFloat(browRaise[nowframe_num]),"#browRaise_val","#browRaise_tr");
  chk_thre(parseFloat(noseWrinkle[nowframe_num]),"#noseWrinkle_val","#noseWrinkle_tr");
  chk_thre(parseFloat(upperLipRaise[nowframe_num]),"#upperLipRaise_val","#upperLipRaise_tr");
  chk_thre(parseFloat(mouseOpen[nowframe_num]),"#mouseOpen_val","#mouseOpen_tr");
  chk_thre(parseFloat(eyeClosure[nowframe_num]),"#eyeClosure_val","#eyeClosure_tr");
  chk_thre(parseFloat(cheekRaise[nowframe_num]),"#cheekRaise_val","#cheekRaise_tr");
  chk_thre(parseFloat(yawn[nowframe_num]),"#yawn_val","#yawn_tr");
  chk_thre(parseFloat(joy[nowframe_num]),"#joy_val","#joy_tr");
  chk_thre(parseFloat(anger[nowframe_num]),"#anger_val","#anger_tr");
  chk_thre(parseFloat(surprise[nowframe_num]),"#surprise_val","#surprise_tr");
  chk_thre(parseFloat(valence[nowframe_num]),"#valence_val","#valence_tr");
  chk_thre(parseFloat(disgust[nowframe_num]),"#disgust_val","#disgust_tr");
  chk_thre(parseFloat(fear[nowframe_num]),"#fear_val","#fear_tr");
  chk_thre(parseFloat(happy[nowframe_num]),"#happy_val","#happy_tr");
  chk_thre(parseFloat(sad[nowframe_num]),"#sad_val","#sad_tr");
  chk_thre(parseFloat(neutral[nowframe_num]),"#neutral_val","#neutral_tr");
  meji=smile[nowframe_num]; //アノテーション用目印

};

function chk_thre(val,id,id_tr){
  $(id_tr).removeClass();
  if(val >= 20){
    $(id_tr).addClass('positive');
  }else if(Number.isNaN(val)){
    $(id_tr).addClass('disabled');
  }
  $(id).text(String(val.toFixed(1)));
}

function set_chkbox2graph(){
  datagraph = [];
  //--------------smile---------------
  if($("#sm").prop("checked")){
    datagraph = make_dataset(datagraph,smile,"rgba(255,183,76,1.0)","smile");
  }
  //--------------browRaise---------------
  if($("#bR").prop("checked")){
    datagraph = make_dataset(datagraph,browRaise,"rgba(126,83,34,1.0)","browRaise");
  }
  //--------------noseWrinkle---------------
  if($("#nW").prop("checked")){
    datagraph = make_dataset(datagraph,noseWrinkle,"rgba(100,200,0,1.0)","noseWrinkle");
  }
  //--------------upperLipRaise---------------
  if($("#uL").prop("checked")){
    datagraph = make_dataset(datagraph,upperLipRaise,"rgba(250,50,0,1.0)","upperLipRaise");
  }
  //--------------mouseOpen---------------
  if($("#mO").prop("checked")){
    datagraph = make_dataset(datagraph,mouseOpen,"rgba(38,38,38,1.0)","mouseOpen");
  }
  //--------------eyeClosure---------------
  if($("#eC").prop("checked")){
    datagraph = make_dataset(datagraph,eyeClosure,"rgba(12,82,188,1.0)","eyeClosure");
  }
  //--------------cheekRaise---------------
  if($("#cR").prop("checked")){
    datagraph = make_dataset(datagraph,cheekRaise,"rgba(240,117,188,1.0)","cheekRaise");
  }
  //--------------yawn---------------
  if($("#yw").prop("checked")){
    datagraph = make_dataset(datagraph,yawn,"rgba(135,0,200,1.0)","yawn");
  }
  //--------------joy---------------
  if($("#joy").prop("checked")){
    datagraph = make_dataset(datagraph,joy,"rgba(255,94,25,1.0)","joy");
  }
  //--------------anger---------------
  if($("#anger").prop("checked")){
    datagraph = make_dataset(datagraph,anger,"rgba(255,195,76,1.0)","anger");
  }
  //--------------surprise---------------
  if($("#surprise").prop("checked")){
    datagraph = make_dataset(datagraph,surprise,"rgba(103,228,126,1.0)","surprise");
  }
  //--------------valence---------------
  if($("#valence").prop("checked")){
    datagraph = make_dataset(datagraph,valence,"rgba(120,119,13,1.0)","valence");
  }
  //--------------disgust---------------
  if($("#disgust").prop("checked")){
    datagraph = make_dataset(datagraph,disgust,"rgba(226,159,167,1.0)","disgust");
  }
  //--------------fear---------------
  if($("#fear").prop("checked")){
    datagraph = make_dataset(datagraph,fear,"rgba(114,140,12,1.0)","fear");
  }
  //--------------happy---------------
  if($("#happy").prop("checked")){
    datagraph = make_dataset(datagraph,happy,"rgba(255,0,0,1.0)","happy");
  }
  //--------------sad---------------
  if($("#sad").prop("checked")){
    datagraph = make_dataset(datagraph,sad,"rgba(28,5,255,1.0)","sad");
  }
  //--------------neutral---------------
  if($("#neutral").prop("checked")){
    datagraph = make_dataset(datagraph,neutral,"rgba(50,255,18,1.0)","neutral");
  }



  //描画
  var tmp_graph = make_graph(frame,datagraph);
  smile_data = tmp_graph[0];
  canvas = document.getElementById('smile');

  if( smile_chart ){ smile_chart.destroy(); }
  smile_chart = new Chart(canvas, {
    type: 'line',  //グラフの種類
    data: smile_data,  //表示するデータ
      options: tmp_graph[1]	//オプション設定
    });
  };

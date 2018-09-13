$(function(){
  $('#cross').on('click',function(){
    if($("#title").val()!="" && $("#human1").val()!="" && $("#human2").val()!="" &&$("#start1").val()!="" &&$("#start2").val()!="" &&$("#end1").val()!="" &&$("#end2").val()!=""){
      //$("#cross").addClass("cross-over");
      var url = "/emotion?human1="+$("#human1").val()+"&human2="+$("#human2").val()+"&start1="+$("#start1").val()+"&start2="+$("#start2").val()+"&end1="+$("#end1").val()+"&end2="+$("#end2").val();
      set_history();
      console.log(url);
      window.open(url, '_blank');
    }else{
      alert("埋めろ！");
    }
   });
   show_history();
});
var human1 = [];
var human2 = [];
var start1=[];
var start2=[];
var end1=[];
var end2=[];
var title=[];

function show_history(){
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET","http://localhost:3000/api/cross-hist");
  xhr2.addEventListener("load", function(e){
    annocsv = JSON.parse(xhr2.responseText);
    //配列用意
    human1 = [];
    human2 = [];
    start1=[];
    start2=[];
    end1=[];
    end2=[];
    title=[];
    for(var i in annocsv){
      human1.push(annocsv[i]["human1"]);
      human2.push(annocsv[i]["human2"]);
      start1.push(annocsv[i]["start1"]);
      start2.push(annocsv[i]["start2"]);
      end1.push(annocsv[i]["end1"]);
      end2.push(annocsv[i]["end2"]);
      title.push(annocsv[i]["title"]);
    }
    for (var i in title) {
      var url = "/emotion?human1="+human1[i]+"&human2="+human2[i]+"&start1="+start1[i]+"&start2="+start2[i]+"&end1="+end1[i]+"&end2="+end2[i];
      $('#history').append('<tr><td class="center aligned">'+title[i]+'</td><td class="center aligned">'+"#"+human1[i]+" frame:"+start1[i]+"〜"+end1[i]+'</td><td class="center aligned">'+"#"+human2[i]+" frame:"+start2[i]+"〜"+end2[i]+'</td><td class="center aligned"><a href="'+url+'">GO</td></tr>');
    }
  });
  xhr2.send();
};

function set_history(){
  var xhr2 = new XMLHttpRequest();
  xhr2.open("GET","http://localhost:3000/api/cross/"+$("#human1").val()+"/"+$("#human2").val()+"/"+$("#start1").val()+"/"+$("#start2").val()+"/"+$("#end1").val()+"/"+$("#end2").val()+"/"+$("#title").val());
  xhr2.addEventListener("load", function(e){

  });
  xhr2.send();
};

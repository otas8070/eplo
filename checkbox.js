

$(function(){

  $("#3Dkaigan").show();
  $("#yo").hide();
  $("#yomax").show();
  $("#pici").hide();
  $("#roll").hide();
  $("#yoko").hide();
  $("#tate").hide();
  $("#oku").hide();
  $("#kutibiru").hide();

    $("#3d").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#3d").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#3Dkaigan").show();
	  $("#3dmax").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#3Dkaigan").hide();
        }
    });
    $("#yo2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#yo2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#yo").show();
	  $("#yomax").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#yo").hide();
        }
    });
    $("#pici2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#pici2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#pici").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#pici").hide();
        }
    });
    $("#roll2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#roll2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#roll").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#roll").hide();
        }
    });
    $("#yoko2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#yoko2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#yoko").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#yoko").hide();
        }
    });
    $("#tate2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#tate2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#tate").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#tate").hide();
        }
    });
    $("#oku2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#oku2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#oku").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#oku").hide();
        }
    });
    $("#kutibiru2").on("click", function (evt) {
        //チェックボックスの現在のステータスを取得
        chk_status = $("#kutibiru2").prop("checked");

        //取得したステータスが true なら false を、 false なら true をセットする
        if(chk_status){
          $("#kutibiru").show();
        }else{
            //チェックボックスをONにする（チェックする）。
          $("#kutibiru").hide();
        }
    });
});

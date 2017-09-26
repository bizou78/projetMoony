$(document).ready(function () {

    $(".fa-times").click(function () {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle-menu").addClass("opacity_one");
    });

    $(".toggle-menu").click(function () {
        $(".sidebar_menu").removeClass("hide_menu");
        $(".toggle-menu").removeClass("opacity_one");
    });

    $(".navigation_item").click(function () {
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle-menu").addClass("opacity_one");
    });

    $(".section").click(function(){
        $(".sidebar_menu").addClass("hide_menu");
        $(".toggle-menu").addClass("opacity_one");
    });

    $("#desactiveCSS3").click(function(){
        $("#fullpage").fullpage({
            css3:false
        });
    });

    $("#activeCSS3").click(function(){
        $("#fullpage").fullpage({
            css3:true
        });
    });



});
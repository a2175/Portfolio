import $ from 'jquery';
import Home from './contents/home';
import Contents1 from './contents/contents1';
import Contents2 from './contents/contents2';
import Contents3 from './contents/contents3';
import Contents4 from './contents/contents4';
import Contents5 from './contents/contents5';

export function renderContents() {
    var agent = navigator.userAgent.toLowerCase();
    if ( (navigator.appName === 'Netscape' && navigator.userAgent.search('Trident') !== -1) || (agent.indexOf("msie") !== -1) ) {
        $("#logo").css("width","160px");
        $("#menu").css("width","960px");
        $("#header").css("width","1240px");
    }
    fn_openHome();
}

function fn_init(n) {
    $("a[accesskey^='contents']").unbind();
    $("a[accesskey^='contents']").css('background', '');
    $("a[accesskey^='contents']").css('border-radius', '');
    $("a[accesskey^='contents']").css('color', '#FFFFFF');

    $("a[accesskey='contents_home']").on("click", function(e){
        e.preventDefault();
        fn_openHome();
    });

    $("a[accesskey='contents_1']").on("click", function(e){
        e.preventDefault();
        fn_openContents1();
    });

    $("a[accesskey='contents_2']").on("click", function(e){
        e.preventDefault();
        fn_openContents2();
    });

    $("a[accesskey='contents_3']").on("click", function(e){
        e.preventDefault();
        fn_openContents3();
    });

    $("a[accesskey='contents_4']").on("click", function(e){
        e.preventDefault();
        fn_openContents4();
    });

    $("a[accesskey='contents_5']").on("click", function(e){
        e.preventDefault();
        fn_openContents5();
    });

    $("a[accesskey^='contents']").hover(function() {
        $(this).css('text-decoration', 'none');
        $(this).css('background-color', '#FFFFFF');
        $(this).css('border-radius', '5px');
        $(this).css('color', '#1f31bb');
    }, function(){
        $(this).css('background', '');
        $(this).css('border-radius', '');
        $(this).css('color', '#FFFFFF');
    });

    $("a[accesskey='contents_"+n+"']").unbind('mouseenter mouseleave');
    $("a[accesskey='contents_"+n+"']").css('text-decoration', 'none');
    $("a[accesskey='contents_"+n+"']").css('background-color', '#FFFFFF');
    $("a[accesskey='contents_"+n+"']").css('border-radius', '5px');
    $("a[accesskey='contents_"+n+"']").css('color', '#1f31bb');
}

function fn_openHome() {
    fn_init("home");
    document.getElementById("contents").innerHTML = Home;
}

function fn_openContents1() {
    fn_init(1);
    document.getElementById("contents").innerHTML = Contents1;
}

function fn_openContents2() {
    fn_init(2);
    document.getElementById("contents").innerHTML = Contents2;
}

function fn_openContents3() {
    fn_init(3);
    document.getElementById("contents").innerHTML = Contents3;
}

function fn_openContents4() {
    fn_init(4);
    document.getElementById("contents").innerHTML = Contents4;
}

function fn_openContents5() {
    fn_init(5);
    document.getElementById("contents").innerHTML = Contents5;
}

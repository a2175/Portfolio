import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css'
import 'components/entrance/Entrance.css'
import $ from 'jquery';
import bg from './1.jpg';

class Entrance extends Component {
    componentWillMount() {
        var mobileKeyWords = new Array('iPhone', 'iPod', 'BlackBerry', 'Android', 'Windows CE', 'LG', 'MOT', 'SAMSUNG', 'SonyEricsson','Windows Phone');
        for (var word in mobileKeyWords){
            if (navigator.userAgent.match(mobileKeyWords[word]) !== null){
                window.location.href = process.env.PUBLIC_URL+"/main";
                break;
            }
        }
        $('body').css('backgroundImage', "url(" + bg + ")");
    }

    componentDidMount() {
        $('#me3').addClass('animated fadeIn')
        .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          $(this).removeClass('animated fadeIn');
          $(this).addClass('animated heartBeat')
          $(this).css('animation-iteration-count', 'infinite');
          document.onmousedown = function leftClick() {
              $('#entrance').addClass('animated fadeOut')
                  .one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
                      $(this).removeClass('animated fadeOut');
                      $('body').css('background-image', 'none');
                      $('body').css('overflow', 'visible');
                      $('body').empty();
                    //   $(this).find('#mylink')[0].click();
                      window.location.href = process.env.PUBLIC_URL+"/main";
                  });
          };
        });
    
        function setLocation() {
            var location = String(window.outerWidth / 2 - 230) + "px";
            $('#me').css('left', location);
        }
        
        setLocation();
        $(window).resize(setLocation);


        const ani_script = document.getElementById("ani_script");

        var script = document.createElement("script");
        script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/jquery.leoweather.min.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/lib/jquery.backstretch.min.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/jquery.particles.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/jquery.audiovisualizer.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/main.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/time.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/PWLine.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/PWCircle.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/sakura.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/slide.js`
        ani_script.appendChild(script);

        script = document.createElement("script");
        script.src = `${process.env.REACT_APP_GIT_URL}/animate/js/video.js`
        ani_script.appendChild(script);
    }

    render(){
      return (
        <div id="entrance">
            <div className="animated fadeIn" id="clock">00:00</div>
            <div className="animated fadeIn" id="oDate">2017</div>

            <div id="me">
                <div className="animated fadeIn" id="me1">Lee Seok Ju's</div>
                <div className="animated fadeIn" id="me2">Portfolio</div>
                <div id="me3">Click!</div>
            </div>

            <canvas id="sakura"></canvas>
            <canvas id="can"></canvas>
            <canvas id="CanLine"></canvas>

            <div id="ani_script"></div>

            <Link to="/main" id='mylink'></Link>
        </div>
      );
    }
}

export default Entrance;
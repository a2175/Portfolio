import React, { Component } from 'react';
import 'animate.css'
import './Main.css'
import $ from 'jquery';
import { renderContents } from './default';

class Main extends Component {
    componentDidMount() {
        $('body').css('background-image', 'none');
        $('body').css('overflow', 'visible');

        document.querySelector('body').setAttribute( 'oncontextmenu', '' );
        document.querySelector('body').setAttribute( 'onselectstart', '' );
        document.querySelector('body').setAttribute( 'ondragstart', '' );

        renderContents();
    }

    render(){
      return (
        <div id="home" className="animated fadeIn">
            <div id="header-wrapper">
                <div id="header">
                    <div id="logo">
                        <h1><a href={process.env.REACT_APP_GIT_URL}>Portfolio</a></h1>
                    </div>
                    <div id="menu">
                        <ul className="style2">
                            <li><a href="#" accessKey="contents_home" title="">Home</a></li>
                            <li><a href="#" accessKey="contents_1" title="">1. Spring & Spring Boot</a></li>
                            <li><a href="#" accessKey="contents_2" title="">2. PHP & Laravle</a></li>
                            <li><a href="#" accessKey="contents_3" title="">3. Node.js & React</a></li>
                            <li><a href="#" accessKey="contents_4" title="">4. Music SNS</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div id="wrapper">
                <div id="page-wrapper">
                    <div id="page">
                        <div id="wide-content">
                            <div id="contents">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="footer" className="container">
                <p>&copy; Untitled. All rights reserved. Design by <a href="http://templated.co" rel="nofollow">TEMPLATED</a>. Photos by <a href="http://fotogrph.com/">Fotogrph</a>.</p>
            </div>
        </div>
      );
    }
}

export default Main;
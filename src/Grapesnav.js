import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './Grapesnav.css'

class Grapesnav extends Component{
    render(){
        return(
            <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
              <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                  <img alt="icon" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
                </a>
            
                <a href="www.bbc.com" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>
            
              <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                  <a href="www.bbc.com" class="navbar-item">
                    Home
                  </a>
            
                  <a href="www.bbc.com" class="navbar-item">
                    Documentation
                  </a>
            
                  <div class="navbar-item has-dropdown is-hoverable">
                    <a href="www.bbc.com" class="navbar-link">
                      More
                    </a>
            
                    <div class="navbar-dropdown">
                      <a href="www.bbc.com" class="navbar-item">
                        About
                      </a>
                      <a href="www.bbc.com" class="navbar-item">
                        Jobs
                      </a>
                      <a href="www.bbc.com" class="navbar-item">
                        Contact
                      </a>
                      <hr class="navbar-divider"/>
                      <a href="www.bbc.com"class="navbar-item">
                        Report an issue
                      </a>
                    </div>
                  </div>
                </div>
            
                <div class="navbar-end">
                  <div class="navbar-item">
                    <div class="buttons">
                      <a href="www.bbc.com" class="button is-primary">
                        <strong>Sign up</strong>
                      </a>
                      <a href="www.bbc.com" class="button is-light">
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )
    }

}

export default Grapesnav;
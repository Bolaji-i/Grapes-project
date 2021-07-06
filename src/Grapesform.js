import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grapesform.css'

class Grapesform extends Component {
    render() {
        return (
            <div class="block">
                <div className="grapesform" action="">
                    <input class="input is-small" type="text" placeholder="Names"></input>
                    <input class="input is-small" type="text" placeholder="Last name"></input>
                    <div class="control">
                        <label class="radio">
                            <span>Gender: </span>
                            <input type="radio" name="male" />
                            Male
                        </label>
                        <label class="radio">
                            <input type="radio" name="female" />
                            Female
                        </label>
                        <label class="radio">
                            <input type="radio" name="other" />
                            Other
                        </label>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="email" placeholder="Email" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input is-small" type="password" placeholder="Password" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <button class="button is-small is-info">Send</button>
                </div>
             </div>

         )
    }
}



                export default Grapesform;
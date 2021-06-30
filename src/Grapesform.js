import React, { Component } from 'react'
import 'bulma/css/bulma.min.css';
import './Grapesform.css'

class Grapesform extends Component {
    render() {
        return (
            <div className="Grapesform">
                <input class="input is-small" type="text" placeholder="Names"></input>
                <input class="input is-small" type="text" placeholder="Last names"></input>
                <div class="control">
                    <label class="radio">
                        <input type="radio" name="answer" />
                            Male
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer" />
                            Female
                    </label>
                    <label class="radio">
                        <input type="radio" name="answer" />
                            Other
                    </label>
                </div>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-small" type="email" placeholder="Email" />
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </div>
            </div>
        )
    }
}



export default Grapesform;
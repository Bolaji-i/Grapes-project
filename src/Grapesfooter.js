import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grapesfooter.css'

class Grapesfooter extends Component {
    render() {
        return (
            <footer className ="footer mt-auto py-3 bg-light">
                <div class="container">
                    <p>
                        <span class="text-muted">Place sticky footer content here.</span>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Grapesfooter;
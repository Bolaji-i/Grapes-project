import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grapesfooter.css'

class Grapesfooter extends Component {
    render() {
        return (
            <footer class ="footer mt-auto py-3">
                <div class="container">
                    <p>
                        <span class="text-muted">Designed and constructed by Bolaji Daniels Ilori <i class="fas fa-copyright"></i></span>
                        <span class="text-Muted">
                            Follow me on my Social Platforms: 
                            <a href='www.cnn.com'>LinkedIn</a>
                            
                        </span>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Grapesfooter;
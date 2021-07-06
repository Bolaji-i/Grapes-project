import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Grapesfavorites.css'

class Grapesfavorites extends Component {

    render() {
        const returned = function tax(hours, minimumwage, taxper) {
            let con = taxper/100;
            let taxed = hours * minimumwage * con
            let total = hours * minimumwage
            let earned = total - taxed
            return (earned);
        }


        return (
            <div>
                <div class="d-inline-flex p-2 bd-highlight">
                    <div class="row">
                        <div class="col">
                            <figure class="image">
                                <img alt="hiking" src="https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="travel" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="chess" src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="family-food" src="https://images.unsplash.com/photo-1606788076491-0f61938173d4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="d-inline-flex p-2 bd-highlight">
                    <div class="row">
                        <div class="col">
                            <figure class="image">
                                <img alt="hiking" src="https://images.unsplash.com/photo-1476611338391-6f395a0ebc7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="travel" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1308&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="chess" src="https://images.unsplash.com/photo-1523875194681-bedd468c58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                        <div class="col">
                            <figure class="image">
                                <img alt="family-food" src="https://images.unsplash.com/photo-1606788076491-0f61938173d4?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1377&q=80" />
                                <figcaption>Scale model of the Eiffel tower iParc Mini-France</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Grapesfavorites;
import React, { Component } from 'react';
import {allPets, initialPet} from './data';

const ProductContext = React.createContext();

export default class ProductProvider extends Component {
    state = {
        pets: [],
        detailsOfPets: initialPet, 
    };
    componentDidMount() {
        this.showPets();
    }

    showPets = () => {
        let tempProducts = [];
        allPets.forEach( item => {
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(() => {
            return { pets:tempProducts}
        });
    };

    getItem = id => {
        const petProduct = this.state.pets.find(item => item.id === id);
        return petProduct;
    }
    
    handleDetails = (id) => {
        const petProduct = this.getItem(id);
        this.setState(() => {
            return {detailsOfPets:petProduct}
        });

        };
        
    render() {
        return (
            <ProductContext.Provider value = {{
                ...this.state, 
                handleDetails:this.handleDetails
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer};
import React, { Component } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          {
            console.log('value.initialPet', value.detailsOfPets);
          }
          const {
            id,
            title,
            img,
            info,
            years,
            gender,
            from,
          } = value.detailsOfPets;
          return (
            <Container maxWidth="md">
              <div>
                <div>
                  <h1>{title}</h1>
                </div>

                <div>
                  <div>
                    <img
                      src={img}
                      alt="products"
                      style={{ height: 300, width: 300 }}
                    />
                  </div>

                  <div>
                    <h2>Pet Name: {title}</h2>
                    <h4>
                      Gender: <span>{gender}</span>
                    </h4>
                    <h4>
                      <strong>Years :{years}</strong>
                    </h4>
                    <p>some info about the Pet:</p>
                    <p>{info}</p>
                  </div>
                </div>
              </div>
            </Container>
          );
        }}
      </ProductConsumer>
    );
  }
}

import React, { Component } from 'react';
import SinglePets from './SinglePets';
import Title from './Title';
import { ProductConsumer } from '../context';


export default class ListOfPets extends Component {
  render() {
    return (
      <React.Fragment >
        <div>
          <Title name="ALL" title="PETS" />
          <div style={{ flexDirection: 'row', display: 'flex', }}>
            <ProductConsumer>
              {(value) => {
                {
                  console.log('value', value);
                }
                return value.pets.map((arr) => {
                  return <SinglePets key={arr.id} arr={arr} />;
                });
              }}
            </ProductConsumer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

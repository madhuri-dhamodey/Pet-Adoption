import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class SinglePets extends Component {
  render() {
    const { id, title, img, years, gender, from } = this.props.arr;
    const myStyle = {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      height: 300,
      width: 300,
      marginTop: 20,
      padding: 3,
      maxWidth: "100%"
    };
  
    return (
      <Card style={myStyle}>
        <CardActionArea>
          <ProductConsumer>
            {(value) => (
              <div>
                <Link to="/details">
                  <img
                    style={{ height: 250, width: 300 }}
                    src={img}
                    alt="product"
                    onClick={() => value.handleDetails(id)}
                  />
                </Link>
              </div>
            )}
          </ProductConsumer>
          {/*cart footer*/}
          <div
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <p style={{ fontSize: 22, marginTop: 0 }}>{title}</p>
            <h2 style={{ marginTop: 0 }}>{years}Years</h2>
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

SinglePets.propTypes = {
  arr: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    years: PropTypes.number,
    gender: PropTypes.string,
    from: PropTypes.string,
  }).isRequired,
};

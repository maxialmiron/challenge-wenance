import React from 'react';
import Card from './Card.jsx'
import PropTypes from 'prop-types';

const CardsList = ({ list }) => {
  return list.map((item, id) => <Card key={id} data={item} />)
};
 
CardsList.propTypes = {
  list: PropTypes.array
};

export default CardsList;
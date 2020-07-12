import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './Prescription.css';

const description = [
 
].join(' ');

const CardExampleExtraContent = () => (
 <div className="align">

 
 <Card >
    <Card.Content header='PRESCRIPTION' />
    <Card.Content description={description} />
    <Card.Content extra>
      <Icon name='calender' />
    </Card.Content>
  </Card>
  </div>
)

export default CardExampleExtraContent;
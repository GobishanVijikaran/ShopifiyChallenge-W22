import React from 'react'; 
import { Card, Icon, Image } from 'semantic-ui-react';
import { LikeButton } from './components';

function SpaceImage( { props } ) {
  
  return (
    <div>
      {props.map((image) => 
      <Card>
        <Image src={image.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{image.title}</Card.Header>
          <Card.Meta>
        <span className='date'>{image.date}</span>
          </Card.Meta>
          <Card.Description>
            {image.explanation}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <LikeButton />
      </Card.Content>
    </Card>
    )}
    </div>
  )
}

export default SpaceImage

import React, { useState, useEffect } from 'react'; 
import { Grid, Segment, Dimmer, Loader, Card } from 'semantic-ui-react';
import SpaceImage from '../spaceImage';

function SpaceContainer() {
  const api_key = '4tcuLlKIXkbJt1LJDfdCZK93qLMb5SJCsCvSCrzU';
  const api_url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=2021-09-10`;
  const [images, setImages] = useState([]);
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    fetch(api_url)
      .then(res => res.json())
      .then(
        (result) => {
          setShowLoader(false);
          setImages(result);
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log('error');
          setShowLoader(false);
          // setError(error);
        }
      )
  }, [api_url])

  return (
    <div style={{ display: "inline-block", justifyContent: "center", alignItems: "center" }}>
      { showLoader && 
        <div>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </div>
      }
      <SpaceImage props={images}/>
    </div>
  )
}

export default SpaceContainer
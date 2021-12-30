import React from 'react';
import { Typography, Box, Container } from '@mui/material';

import Button from 'components/Button';

const ListItem: React.FC = () => (
  <Container
    style={{
      borderRadius: '15px',
      border: '1px solid tomato',
      // width: '500px',
      // maxHeight: '600px',
      display: 'flex',
      flexDirection: 'column',
      padding: '5px',
    }}
  >
    <Box style={{ width: '100%' }}>
      <Typography
        variant="body2"
        style={{ margin: '0px', textAlign: 'justify', width: '100%', marginBottom: '20px' }}
      >
        <img
          style={{ width: '250px', height: '150px', margin: '5px', float: 'left' }}
          src="https://picsum.photos/id/1027/2000"
        />
        <Typography>Some Interesting Title</Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repudiandae inventore vel
        optio aliquid, nemo fuga fugiat magni, officia odio doloribus cum magnam provident illum.
        Adipisci voluptatibus sunt dolores nesciunt.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Maxime repudiandae inventore vel optio aliquid, nemo fuga fugiat magni,
        officia odio doloribus cum magnam provident illum. Adipisci voluptatibus sunt dolores
        nesciunt.
      </Typography>
    </Box>
    <Box
      style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxHeight: '30px' }}
    >
      <Box
        style={{
          border: '1px solid green',
          display: 'flex',
          justifyContent: 'space-between',
          width: '48%',
          marginRight: '20px',
        }}
      >
        <Typography style={{ verticalAlign: 'center', alignSelf: 'center' }}>
          This is time
        </Typography>
        <Typography style={{ verticalAlign: 'center', alignSelf: 'center' }}>
          This is lessons
        </Typography>
      </Box>
      <Box style={{ display: 'flex', justifyContent: 'center', width: '52%' }}>
        <Button size="small" color="primary" variant="contained">
          Details
        </Button>
        <Button color="primary" variant="contained">
          Start the Course
        </Button>
      </Box>
    </Box>
  </Container>
);

export default ListItem;

import React from 'react';
// react component for creating beautiful carousel
import Carousel from 'react-slick';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons

// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Card from 'components/Card/Card.js';

import styles from 'assets/jss/material-kit-react/views/componentsSections/carouselStyle.js';

const useStyles = makeStyles(styles);

const images = [
  {
    url:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    message: 'Desarrollamos apps móviles para su empresa',
  },
  {
    url:
      'https://cdn.pixabay.com/photo/2016/11/29/06/14/computer-1867741_960_720.jpg',
    message: 'Software para factura electrónica',
  },
  {
    url:
      'https://cdn.pixabay.com/photo/2018/01/22/21/34/sever-3100049_960_720.jpg',
    message: 'Instalamos su cableado estructurado',
  },
  {
    url:
      'https://images.unsplash.com/photo-1558959356-4b2c36036b8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    message:
      'Brindamos el servicio de soporte técnico de equipos de cómputo',
  },
  {
    url:
      'https://images.unsplash.com/photo-1560858275-933aa173847b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80',
    message: 'Distribución de licencias de Software',
  },
  {
    url:
      'https://images.unsplash.com/photo-1548611635-b6e7827d7d4a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
    message: 'Venta de equipos de cómputo para su negocio',
  },
];

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            sm={12}
            md={9}
            className={classes.marginAuto}
          >
            <Card carousel>
              <Carousel {...settings}>
                {images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img.url}
                      alt={`Slide-${i}`}
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4
                        style={{
                          fontSize: '24px',
                        }}
                      >
                        <b>{img.message}</b>
                      </h4>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

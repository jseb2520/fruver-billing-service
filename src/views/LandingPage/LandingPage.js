import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

// core components
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import GridContainer from '../../components/Grid/GridContainer.js';
import GridItem from '../../components/Grid/GridItem.js';
import HeaderLinks from '../../components/Header/HeaderLinks.js';
import Parallax from '../../components/Parallax/Parallax.js';
// import SectionCarousel from 'views/Components/Sections/SectionCarousel.js';

import styles from '../../assets/jss/material-kit-react/views/landingPage.js';

// Sections for this page
import ProductSection from './Sections/ProductSection.js';
import TeamSection from './Sections/TeamSection.js';
import WorkSection from './Sections/WorkSection.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="Sistemas Expertos LTDA"
        rightLinks={<HeaderLinks buttonText="Servicios" />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'primary',
        }}
        {...rest}
      />
      <Parallax
        filter
        image="https://images.unsplash.com/photo-1501780392773-287d506245a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>
                Creamos soluciones para su empresa
              </h1>
              <h4>
                Every landing page needs a small description after the
                big bold title, that{"'"}s why we added this text
                here. Add here all the information that can make you
                or your product create the first impression.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <SectionCarousel /> */}
          <ProductSection />
          <TeamSection />
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

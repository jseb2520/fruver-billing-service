import React from 'react';

// Externals
import PropTypes from 'prop-types';

// Material helpers
import { makeStyles } from '@material-ui/core/styles';

// Material components
import { Grid, Typography } from '@material-ui/core';

// Component styles
import styles from '../../assets/jss/material-kit-react/components/notFoundStyle';

import not_found from '../../assets/img/not_found.png';
import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';

const useStyles = makeStyles(styles);
const dashboardRoutes = [];

const NotFound = props => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="primary"
        routes={dashboardRoutes}
        brand="Sistemas Expertos LTDA"
        rightLinks={<HeaderLinks buttonText="Servicios" />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: 'white',
        }}
        {...rest}
      />
      <div className={classes.root}>
        <Grid container justify="center" spacing={4}>
          <Grid item lg={6} xs={12}>
            <div className={classes.content}>
              <Typography variant="h3">
                404: The page you are looking for isn’t here
              </Typography>
              <Typography variant="subtitle1">
                You either tried some shady route or you came here by
                mistake. Whichever it is, try using the navigation
              </Typography>
              <img
                alt="Not found"
                className={classes.image}
                src={not_found}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default NotFound;

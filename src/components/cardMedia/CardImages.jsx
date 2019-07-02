import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5)
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '80%' //'56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  }
}));

function CardImages(props) {
  const classes = useStyles();
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {props.cards.map(card => (
            <Grid item key={card} xs={12} sm={12} md={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={card.image}
                  title={card.title}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <div class="row justify-content-between">
        <div class="col-4">
          <Link to={props.prevLink} style={{ textDecoration: 'none' }}>
            <div className="left-move">
              <h5>{props.prevTitle}</h5>
              <FontAwesomeIcon icon="arrow-alt-circle-left" size="4x" />
            </div>
          </Link>
        </div>
        <div class="col-4">
          <Link to={props.nextLink} style={{ textDecoration: 'none' }}>
            <div className="right-move">
              <h5>{props.nextTitle}</h5>
              <FontAwesomeIcon icon="arrow-alt-circle-right" size="4x" />
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </Fragment>
  );
}

export default CardImages;

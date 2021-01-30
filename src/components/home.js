import {React,Component} from 'react';
import SideBar from './sideBar';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {withStyles } from '@material-ui/core/styles';
import hotdeals from "../images/hotdeals.jpg";
import monthlydeals from "../images/monthlydeals.png";
import weeklydeals from "../images/weeklydeals.jpg";
import vegetables from "../images/vegetables.jpg";
import fruits from "../images/fruits.jpg";
import household from "../images/household.jpg";
import Box from '@material-ui/core/Box';
import Container from "@material-ui/core/Container";
import ButtonBase from '@material-ui/core/ButtonBase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {loadProductDetails} from "../actions/loadProducts";

const useStyles = theme => ({
    cardRoot: {
        maxWidth: 345,
    },
    GridRoot:{
        marginTop:"100px",
        flexGrow: 1
    },
    appHeading1:{

    },
    appHeading2:{

    }
});

class Home extends Component{

    constructor(props){
        super(props);
    }
    showVegetables=()=>{

        this.props.loadProductDetails();
        this.props.history.push('/vegetables');

    }


    render() {
        const {classes} = this.props;
        return(<div><Container>
                <SideBar/>
                <Typography
                    color="primary"
                    gutterBottom
                    variant="h6"
                    align="left"
                >
                    <Box fontWeight="fontWeightBold" ml={20} mt={10}>Welcome to Smart Shopping Mart</Box>
                </Typography>
                <Grid container justify="center"  spacing={3}>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Hot Deals"
                                    height="145"
                                    image={hotdeals}
                                    title="Hot Deals"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                        <Box fontWeight="fontWeightBold">Hot Deals</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        This Week
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Monthly Deals"
                                    height="145"
                                    image={monthlydeals}
                                    title="Monthly Deals"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                        <Box fontWeight="fontWeightBold">Monthly Deals</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Discover your favourities
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Weekly Deals"
                                    height="145"
                                    image={weeklydeals}
                                    title="Weekly Deals"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                        <Box fontWeight="fontWeightBold">Weekly Deals</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Discover your favourities
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>


                <Typography
                    color="primary"
                    gutterBottom
                    variant="body1"
                    align="left"
                    className={classes.appHeading2}>
                    <Box fontWeight="fontWeightBold" ml={20} mt={2} mb={2}>Featured Product Categories</Box>
                </Typography>
                <Grid container justify="center"  spacing={3}>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <ButtonBase onClick={this.showVegetables}
                            >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Vegetables"
                                        height="145"
                                        image={vegetables}
                                        title="Vegetables"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                            <Box fontWeight="fontWeightBold">Vegetables</Box>
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p" align="left">
                                            Fresh Vegetables
                                        </Typography>
                                    </CardContent>
                                </CardActionArea></ButtonBase>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Fruits"
                                    height="145"
                                    image={fruits}
                                    title="Fruits"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                        <Box fontWeight="fontWeightBold">Fruits</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Fresh Fruits
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="HouseHold"
                                    height="145"
                                    image={household}
                                    title="HouseHold"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="body2" color="primary" component="p" align="left">
                                        <Box fontWeight="fontWeightBold">HouseHold</Box>
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" align="left">
                                        Grab your household items
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid></Container>
            </div>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        loadProductDetails: () => dispatch(loadProductDetails())
    }
}

export default connect(null,mapDispatchToProps)(withRouter(withStyles(useStyles,{ withTheme: true }) (Home)));

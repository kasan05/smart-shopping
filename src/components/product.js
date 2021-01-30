import {React,Component} from 'react';
import {withStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SideBar from './sideBar';
import hotdeals from "../images/hotdeals.jpg";
import Box from "@material-ui/core/Box/Box";
import CardActionArea from "@material-ui/core/CardActionArea/CardActionArea";
import weeklydeals from "../images/weeklydeals.jpg";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import {loadProductDetails} from "../actions/loadProducts";


const useStyles  = theme => ({
    card: {
        maxWidth: 345
    },
    media: {
        height: 145
    },
    appHeading1:{
        marginTop:"100px",
        marginLeft:"190px"
    },
    gridContainer:{
        marginLeft:"190px"
    }
});

class Product extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }
    componentWillUnmount() {
    }
    render(){
        const {classes,product} = this.props;

        console.log(product);
        let data = [];
        let category="";
        if(product != undefined){
            data =  product.data;
            category =  product.category
        }else{
            this.props.loadProductDetails();
        }
        let x =0;
        return(
            <div><Container>
                <SideBar/>
                    <Typography
                        color="primary"
                        gutterBottom
                        variant="h6"
                        align="left"
                        >
                        <Box fontWeight="fontWeightBold"  mt={18}>{category}</Box>
                    </Typography>
                <Grid container spacing={3}>
                        {data.map((item) => (
                            <Grid item xs={3}>
                                <Card className={classes.cardRoot}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt="Weekly Deals"
                                            height="145"

                                            image={process.env.PUBLIC_URL + item.img_url}
                                            title="Weekly Deals"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="body1" component="p" align="left">
                                                <Box fontWeight="fontWeightBold">{item.price}</Box>
                                            </Typography>
                                            <Typography variant="body2"  component="p" align="left">
                                                <Box fontWeight="fontWeightBold">{item.name}</Box>
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" align="left">
                                                {item.amount}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" fullWidth
                                                variant="outlined" color="primary">
                                            ADD TO CART
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
               </Grid></Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { product: state.product };
};

const mapDispatchToProps = dispatch => {
    return {
        loadProductDetails: () => dispatch(loadProductDetails())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(useStyles,{ withTheme: true })(Product));
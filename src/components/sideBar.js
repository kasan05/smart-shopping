import {React,Component} from 'react';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import {withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import KitchenIcon from '@material-ui/icons/Kitchen';
import Box from "@material-ui/core/Box/Box";
import Container from "@material-ui/core/Container/Container";
import { connect } from 'react-redux';
import {loadProductDetails} from "../actions/loadProducts";
import { withRouter } from 'react-router-dom';


const drawerWidth = 240;


const useStyles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    personButton: {
        marginLeft: theme.spacing(2),
    },
    toolbarTitle: {
        flexGrow: 1,
    },nested: {
        paddingLeft: theme.spacing(4),
    }

});


class SideBar extends Component{

    constructor(props){
        super(props);
        this.state = {open:false,listItemOpen:false};

    }
    returnToHome=()=>{
        this.props.history.push('/');
    }
    loadVegetables=()=>{
        this.props.loadProductDetails();
        this.props.history.push('/vegetables');
    }
    handleDrawerOpen = () => {
        this.setState({open:true});
    }

    handleDrawerClose = () => {
        this.setState({open:false});
    };
    listItemhandleClick = ()=>{
        let listItemOpen = this.state.listItemOpen;
        this.setState({listItemOpen:!listItemOpen});
    }
    render() {
        const { classes,theme,product } = this.props;
        const {open,listItemOpen} = this.state;
        let category="";
        if(product != undefined){
            category =  "/"+product.category
        }

        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.toolbarTitle}>

                        </Typography>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            className={clsx(classes.personButton)}
                        >
                            <PersonIcon/>
                        </IconButton>

                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>

                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" onClick={this.returnToHome}/>
                        </ListItem>
                        <ListItem button onClick={this.listItemhandleClick}>
                            <ListItemIcon>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText primary="Product" />
                            {listItemOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                        <Collapse in={listItemOpen } timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <KitchenIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Vegetables" onClick={this.loadVegetables}/>
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <KitchenIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Fruits" />
                                </ListItem>
                            </List>
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <KitchenIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="HouseHold" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </List>
                </Drawer>
                <Typography variant="subtitle2" gutterBottom align="left" color="primary">
                    <Box fontWeight="fontWeightBold" ml={10} mt={10}>Home{category}</Box>
                </Typography>
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(withStyles(useStyles,{ withTheme: true })(SideBar)));

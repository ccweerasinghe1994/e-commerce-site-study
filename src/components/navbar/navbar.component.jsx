import React, {Component, Fragment} from "react";
import {Link, Route} from "react-router-dom";
import {
    AppBar,
    Toolbar,
    IconButton,
    withStyles,
    Menu,
    Button,
    Typography,
    MenuItem,
} from "@material-ui/core";
import {Menu as MenuIcon} from "@material-ui/icons";
import {Homepage} from "../homePage/homepage.component";
import {Login} from "../login/login.component";

const styles = (theme) => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    appBarMargin: theme.mixins.toolbar,
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

const Nav = withStyles(styles)(
    class extends Component {

        state = {
            anchor: null,
        };
        closeTheMenu = () => {
            this.setState({
                anchor: null,
            });
        };

        render() {
            const {classes, title, MenuItems} = this.props;
            return (
                <div>
                    <AppBar>
                        <Toolbar>
                            <IconButton
                                onClick={(e) => {
                                    this.setState({
                                        anchor: e.currentTarget,
                                    });
                                }}
                                className={classes.menuButton}
                                color='inherit'
                                aria-label='menu'
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                anchorEl={this.state.anchor}
                                open={this.state.anchor}
                                onClick={() => this.closeTheMenu()

                                }
                            >
                                <MenuItems/>
                            </Menu>
                            <Typography color='inherit' variant='h5' className={classes.flex}>
                                {title}
                            </Typography>
                            <Button color='secondary' variant='contained'>
                                Login
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.appBarMargin}>{""}</div>
                </div>
            );
        }
    }
);

const NavBar = withStyles(styles)(({classes, ...otherProps}) => (
    <div className={classes.root}>
        <Route
            exact
            path='/'
            render={() => (
                <Fragment>
                    <Nav {...otherProps} title='Home'/>
                    <Homepage/>
                </Fragment>
            )}
        />
        <Route
            exact
            path='/login'
            render={() => (
                <Fragment>
                    <Nav {...otherProps} title='Login'/>
                    <Login/>
                </Fragment>
            )}
        />
    </div>
));

export default NavBar;

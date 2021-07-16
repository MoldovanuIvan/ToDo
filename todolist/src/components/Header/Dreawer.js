import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import SvgIcon from '@material-ui/core/SvgIcon';
import {NavLink} from "react-router-dom";

const drawerWidth = 240;

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </SvgIcon>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    list: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

export default function PersistentDrawerLeft(props) {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={props.open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={props.handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List className={classes.list}>

                    <NavLink to={"/"}><ListItem onClick={props.handleDrawerClose} button>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                        <ListItemText primary={'Home'}/>
                    </ListItem></NavLink>

                    <NavLink to={"/info"}> <ListItem onClick={props.handleDrawerClose} button>
                        <ListItemIcon><InboxIcon/></ListItemIcon>
                        <ListItemText primary={'Info'}/>
                    </ListItem></NavLink>

                </List>
                <Divider/>
            </Drawer>
        </div>
    );
}
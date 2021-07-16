import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import PersistentDrawerLeft from "./Dreawer";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function DenseAppBar() {
    const classes = useStyles();
    let [open, setOpen] = useState(false)

    let handleDrawerClose = () => {
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton onClick={()=>{setOpen(true)}} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Notes
                    </Typography>
                    <PersistentDrawerLeft open={open} handleDrawerClose={handleDrawerClose}/>
                </Toolbar>
            </AppBar>
        </div>
    );
}
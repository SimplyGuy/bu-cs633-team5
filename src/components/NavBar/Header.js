import React, { userState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Checkbox from '@material-ui/core/Checkbox';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';



import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from './NavBarElements';
import logo from '../../images/logo.png';
import './Header.css';

function Header() {

    const [open, setOpen] = React.useState(false);
    const [mallTag, setMallTags] = React.useState([]);
    const [statusTag, setStatusTags] = React.useState([]);
    const [productTag, setProductTags] = React.useState([]);
    const [areaTag, setAreaTags] = React.useState([]);

    const useStyles = makeStyles((theme) => ({
        search: {
            backgroundColor: theme.palette.background.paper,
            margin: '30px'
        },
        root: {
            margin: '10px',
            width: '100%',
            maxWidth: 800,
            backgroundColor: theme.palette.background.paper,
        },
        formControl: {
            margin: '15px',
            minWidth: 130,
            maxWidth: 130,
            display: 'flex',
        },
        commentChip: {
            margin: theme.spacing(0.5),
        },
        postChips: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        section2: {
            margin: theme.spacing(2),
        },
        searchBtn: {
            height: '40px',
            width: '70px',
            fontSize: '12px',
            marginRight: '14px',
            marginTop: '30px',
            borderRadius: '6px',
            border: 'white',
            backgroundColor: '#ABB94E',
            cursor: 'pointer',
        },
    }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    function getMallStyles(mall, mallList, theme) {
        return {
            fontWeight:
                mallList.indexOf(mall) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    function getProductStyles(product, productList, theme) {
        return {
            fontWeight:
                productList.indexOf(product) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    function getStatusStyles(status, statusList, theme) {
        return {
            fontWeight:
                statusList.indexOf(status) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    function getAreaStyles(area, areaList, theme) {
        return {
            fontWeight:
                areaList.indexOf(area) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }

    const handleMallChange = (event) => {
        setMallTags(event.target.value);
    };
    const handleProductChange = (event) => {
        setProductTags(event.target.value);
    };
    const handleStatusChange = (event) => {
        setStatusTags(event.target.value);
    };
    const handleAreaChange = (event) => {
        setAreaTags(event.target.value);
    };


    const handleMallChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setMallTags(value);
    };
    const handleProductChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setProductTags(value);
    };
    const handleStatusChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setStatusTags(value);
    };
    const handleAreaChangeMultiple = (event) => {
        const { options } = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        setAreaTags(value);
    };

    const classes = useStyles();

    const mallTagList = [

        'Walmart',
        'Bestbuy',
        'CVS',
        'Stop&Shop'
    ];

    const productTagList = [

        'Blanket',
        'Hand Sanitizer',
        'Laptop',
        'Milk'
    ];

    const statusTagList = [

        'Sufficient',
        'Shortage',
        'Few Left',
        'Only one type'
    ];

    const areaTagList = [

        'Allston',
        'Brookline'
    ];

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Nav>
            <NavLink to="/home"
                style={{ color: "#15CDFC" }}
            >
                <img src={logo} alt="logo" style={{ height: "120%" }} />
            </NavLink>
            {/* <Bars /> */}
            <NavMenu>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/about">About Us</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
                <NavLink to="/signup">Sign Up</NavLink>
                <NavLink to="/signin">Sign In</NavLink>
                <NavBtn onClick={handleClickOpen}>Post</NavBtn>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
                    <DialogContent>
                        <div style={{ width: "800px" }}>
                            <div className={classes.search} >
                                <div style={{ display: "flex" }}>
                                    <TextField
                                        placeholder="Share something..."
                                        multiline
                                        style={{ margin: "20px", width: "800px" }}
                                    />
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <div style={{ display: 'flex' }}>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-mall-label" style={{ fontSize: '15px' }}>Mall Tag</InputLabel>
                                            <Select
                                                id="mall-mutiple-chip"
                                                // multiple
                                                value={mallTag}
                                                onChange={handleMallChange}
                                                input={<Input id="select-multiple-chip" />}
                                                renderValue={(selected) => (
                                                    <div className={classes.chips}>
                                                        <Chip key={selected} label={selected} className={classes.chip} />
                                                    </div>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {mallTagList.map((mall) => (
                                                    <MenuItem key={mall} value={mall}>
                                                        <Checkbox checked={mallTag.indexOf(mall) > -1} />
                                                        <ListItemText primary={mall} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-product-label" style={{ fontSize: '15px' }}>Product Tag</InputLabel>
                                            <Select
                                                id="product-mutiple-chip"
                                                // multiple
                                                value={productTag}
                                                onChange={handleProductChange}
                                                input={<Input id="select-multiple-chip" />}
                                                renderValue={(selected) => (
                                                    <div className={classes.chips}>
                                                        <Chip key={selected} label={selected} className={classes.chip} />
                                                    </div>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {productTagList.map((product) => (
                                                    <MenuItem key={product} value={product}>
                                                        <Checkbox checked={productTag.indexOf(product) > -1} />
                                                        <ListItemText primary={product} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-status-label" style={{ fontSize: '15px' }}>Status Tag</InputLabel>
                                            <Select
                                                id="status-mutiple-chip"
                                                // multiple
                                                value={statusTag}
                                                onChange={handleStatusChange}
                                                input={<Input id="select-multiple-chip" />}
                                                renderValue={(selected) => (
                                                    <div className={classes.chips}>
                                                        <Chip key={selected} label={selected} className={classes.chip} />
                                                    </div>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {statusTagList.map((status) => (
                                                    <MenuItem key={status} value={status}>
                                                        <Checkbox checked={statusTag.indexOf(status) > -1} />
                                                        <ListItemText primary={status} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        <FormControl className={classes.formControl}>
                                            <InputLabel id="mutiple-status-label" style={{ fontSize: '15px' }}>Area Tag</InputLabel>
                                            <Select
                                                id="status-mutiple-chip"
                                                // multiple
                                                value={areaTag}
                                                onChange={handleAreaChange}
                                                input={<Input id="select-multiple-chip" />}
                                                renderValue={(selected) => (
                                                    <div className={classes.chips}>
                                                        <Chip key={selected} label={selected} className={classes.chip} />
                                                    </div>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                                {areaTagList.map((area) => (
                                                    <MenuItem key={area} value={area}>
                                                        <Checkbox checked={areaTag.indexOf(area) > -1} />
                                                        <ListItemText primary={area} />
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog>
            </NavMenu>
            {/* <TextField
                label="Search"
                multiline
                style={{marginTop: "10px"}}
                /> */}


            {/* <NavBtn>
                
            </NavBtn> */}
        </Nav>
    );
};

export default Header;
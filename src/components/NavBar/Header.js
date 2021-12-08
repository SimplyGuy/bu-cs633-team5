import React, {useEffect} from 'react';
import useState from 'react-usestateref';

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
import moment from 'moment';

const Header = ({sendSubmitContent, ifSignIn}) => {

    const [open, setOpen] = useState(false);
    const [mallTag, setMallTags] = useState([]);
    const [statusTag, setStatusTags] = useState([]);
    const [productTag, setProductTags] = useState([]);
    const [areaTag, setAreaTags] = useState([]);
    const [ifLogin, setIfLogin, ifLoginRef] = useState(false);
    const [submitContent, setSubmitContent, submitContentRef] = useState({
        inputDate: "",
        inputContent: "",
        inputMall: "",
        inputStatus: "",
        inputProduct: "",
        inputArea: "",
    });
    const [newPost, setNewPost] = useState([]);

    useEffect(() => {

        setIfLogin(ifSignIn ? ifSignIn.ifLogin : false);     
    })


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

    const handleContentChange = (event) => {
        let currentDate = new Date();
        let inputDate = moment(currentDate).format('MMMM DD, YYYY');
        setSubmitContent((prevState) => ({
            ...prevState,
            inputContent: event.target.value,
            inputDate: inputDate,
            })
        );
    };
    const handleMallChange = (event) => {
        let currentDate = new Date();
        let inputDate = moment(currentDate).format('MMMM DD, YYYY');
        setMallTags(event.target.value);
        setSubmitContent((prevState) => ({
            ...prevState,
            inputMall: event.target.value,
            inputDate: inputDate,
            })
        );
    };
    const handleProductChange = (event) => {
        let currentDate = new Date();
        let inputDate = moment(currentDate).format('MMMM DD, YYYY');
        setProductTags(event.target.value);
        setSubmitContent((prevState) => ({
            ...prevState,
            inputProduct: event.target.value,
            inputDate: inputDate,
            })
        );
    };
    const handleStatusChange = (event) => {
        let currentDate = new Date();
        let inputDate = moment(currentDate).format('MMMM DD, YYYY');
        setStatusTags(event.target.value);
        setSubmitContent((prevState) => ({
            ...prevState,
            inputStatus: event.target.value,
            inputDate: inputDate,
            })
        );
    };
    const handleAreaChange = (event) => {
        let currentDate = new Date();
        let inputDate = moment(currentDate).format('MMMM DD, YYYY');
        setAreaTags(event.target.value);
        setSubmitContent((prevState) => ({
            ...prevState,
            inputArea: event.target.value,
            inputDate: inputDate,
            })
        );
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

        'None',
        'Walmart',
        'Bestbuy',
        'CVS',
        'Stop&Shop'
    ];

    const productTagList = [

        'None',
        'Blanket',
        'Hand Sanitizer',
        'Laptop',
        'Milk'
    ];

    const statusTagList = [
        
        'None',
        'Sufficient',
        'Shortage',
        'Few Left',
        'Only one type'
    ];

    const areaTagList = [

        'None',
        'Allston',
        'Brookline',
        'Quincy',
        'Fenway'
    ];

    const handleClickOpen = () => {
        setMallTags([]);
        setProductTags([]);
        setStatusTags([]);
        setAreaTags([]);
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
                <NavLink to={{
                    pathname: "/home",  
                    state: ifSignIn
                    }}>Home</NavLink>
                <NavLink to={{
                    pathname: "/about",
                    state: ifSignIn
                    }}>About Us</NavLink>
                <NavLink to={{
                    pathname: "/contact",
                    state: ifSignIn,
                }}>Contact Us</NavLink>
                { ifLoginRef.current ? <NavLink to={{pathname: "/home", state: {ifLogin: false, role: 'visitor'}}}>Sign Out</NavLink> : '' }
                { ifLoginRef.current ? '' : <NavLink to= {{pathname:"/signup", state: ifSignIn}}>Sign Up</NavLink>}
                { ifLoginRef.current ? '' : <NavLink to= {{pathname:"/signin", state: ifSignIn}}>Sign In</NavLink>}
                
                { ifLoginRef.current ? <NavBtn onClick={handleClickOpen}>Post</NavBtn> : ''}
                { ifLoginRef.current ? <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
                    <DialogContent>
                        <div style={{ width: "800px" }}>
                            <div className={classes.search} >
                                <div style={{ display: "flex" }}>
                                    <TextField
                                        placeholder="Share something..."
                                        multiline
                                        style={{ margin: "20px", width: "800px" }}
                                        onChange={handleContentChange}
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
                                                    <MenuItem key={mall} value={mall == 'None' ? '' : mall}>
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
                                                    <MenuItem key={product} value={product == 'None' ? '' : product}>
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
                                                    <MenuItem key={status} value={status == 'None' ? '' : status}>
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
                                                    <MenuItem key={area} value={area == 'None' ? '' : area}>
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
                        <Button 
                            onClick={() => {
                                sendSubmitContent(submitContent);
                                setOpen(false);
                            }} 
                        color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog> : ''}
                {/* <NavBtn onClick={handleClickOpen}>Post</NavBtn> */}
                {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth="lg">
                    <DialogContent>
                        <div style={{ width: "800px" }}>
                            <div className={classes.search} >
                                <div style={{ display: "flex" }}>
                                    <TextField
                                        placeholder="Share something..."
                                        multiline
                                        style={{ margin: "20px", width: "800px" }}
                                        onChange={handleContentChange}
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
                                                    <MenuItem key={mall} value={mall == 'None' ? '' : mall}>
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
                                                    <MenuItem key={product} value={product == 'None' ? '' : product}>
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
                                                    <MenuItem key={status} value={status == 'None' ? '' : status}>
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
                                                    <MenuItem key={area} value={area == 'None' ? '' : area}>
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
                        <Button 
                            onClick={() => {
                                sendSubmitContent(submitContent);
                            }} 
                        color="primary">
                            Submit
                        </Button>
                    </DialogActions>
                </Dialog> */}
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
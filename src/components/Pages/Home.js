import React from 'react';
import Header from '../NavBar/Header';
import './Home.css';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';

import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';

function Home() {

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
    const theme = useTheme();

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


    return (
        <div style={{backgroundColor: '#F8F9FA'}}>
            <Header />
            <div className="container" style={{ display: 'flex', flexDirection: "column", alignItems: "center", padding: "20px" }}>
                <Card style={{width: "800px"}}>
                    <div className={classes.search} >
                        <div style={{ display: "flex"}}>
                            {/* <Avatar
                                aria-label="recipe"
                                className={classes.avatar}
                                style={{ margin: "20px" }}
                            >U
                            </Avatar> */}
                            <TextField
                                placeholder="Search something..."
                                multiline
                                style={{ margin: "20px", width: "800px" }}
                            />
                        </div>
                        {/* <Divider variant="middle" /> */}
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
                            {/* <Button
                                color="primary"
                                variant="contained"
                                style={{
                                    height: '40px',
                                    fontSize: '12px',
                                    marginRight: '14px',
                                    marginTop: '30px',
                                }}
                            >Search</Button> */}
                            <button className={classes.searchBtn}>Search</button>
                        </div>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                U
                            </Avatar>
                        }
                        subheader="October 14th, 2021"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I went to walmart for blanket, but I couldn't find any of it
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <div>
                            <Chip className={classes.commentChip} label="Walmart" />
                            <Chip className={classes.commentChip} label="Blanket" />
                            <Chip className={classes.commentChip} label="Shortage" />
                        </div>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                U
                            </Avatar>
                        }
                        subheader="October 15th, 2021"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I went to CVS for hand sanitizer, but there are only 5ml ones
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <div>
                            <Chip className={classes.commentChip} label="CVS" />
                            <Chip className={classes.commentChip} label="Hand Sanitizer" />
                            <Chip className={classes.commentChip} label="Only One Type" />
                        </div>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                U
                            </Avatar>
                        }
                        subheader="October 16th, 2021"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I went to bestbuy for laptop, there are plenty of them
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <div>
                            <Chip className={classes.commentChip} label="Bestbuy" />
                            <Chip className={classes.commentChip} label="Laptop" />
                            <Chip className={classes.commentChip} label="Sufficient" />
                        </div>
                    </div>
                </Card>

                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar className={classes.avatar}>U</Avatar>
                        }
                        subheader="October 20th, 2021"
                    />
                    <CardContent>
                        <Typography variant="body1" color="textPrimary" component="p">
                            I went to stop&shop for milk, there are only a few left
                        </Typography>
                    </CardContent>
                    <Divider variant="middle" />
                    <div className={classes.section2}>
                        <div>
                            <Chip className={classes.commentChip} label="Stop&Shop" />
                            <Chip className={classes.commentChip} label="Milk" />
                            <Chip className={classes.commentChip} label="Few Left" />
                        </div>
                    </div>
                </Card>

            </div>
        </div>
    )
}

export default Home;
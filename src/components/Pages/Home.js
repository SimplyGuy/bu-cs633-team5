import React, {useEffect} from 'react';
import useState from 'react-usestateref';

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

function Home(props) {

    const [mallTag, setMallTags, mallTagRef] = useState([]);
    const [statusTag, setStatusTags] = useState([]);
    const [productTag, setProductTags] = useState([]);
    const [areaTag, setAreaTags] = useState([]);
    
    const [ifInit, setIfInit, ifInitRef] = useState(false);
    const [userIdentity, setUserIdentity] = useState("Visitor");
    const [ifSignIn, setIfSignIn, ifSignInRef] = useState(false);
    const [searchContent, setSearchContent, searchContentRef] = useState({
        selectedContent: "",
        selectedMall: "",
        selectedStatus: "",
        selectedProduct: "",
        selectedArea: "",
    });
    const [allPosts, setAllPosts, allPostsRef] = useState([]);
    const [displayPosts, setDisplayPosts, displayPostsRef] = useState([]);

    useEffect(() => {
        if (!ifInitRef.current) {
            initializePosts();
            setIfInit(true);
        }
        setIfSignIn(props.location.state ? props.location.state : false);
        console.log(ifSignInRef.current);
    })

    const handleSearch = (event) => {

        let selectedContent = searchContentRef.current.selectedContent;
        let selectedMall = searchContentRef.current.selectedMall;
        let selectedStatus = searchContentRef.current.selectedStatus;
        let selectedProduct = searchContentRef.current.selectedProduct;
        let selectedArea = searchContentRef.current.selectedArea;
        let sortedPost = allPosts.filter((post) => {
            return post[1].includes(selectedContent);
        }).filter((post) => {
            if (selectedMall) {
                return post[2] == selectedMall;
            }
            return post;
        }).filter((post) => {
            if (selectedStatus) {
                return post[3] == selectedStatus
            }
            return post;
        }).filter((post) => {
            if (selectedProduct) {
                return post[4] == selectedProduct
            }
            return post;
        }).filter((post) => {
            if (selectedArea) {
                return post[5] == selectedArea
            }
            return post;
        });
        console.log(sortedPost);
        setDisplayPosts(sortedPost);
        console.log(displayPostsRef);
    }

    const initializePosts = () => {

        let postList = [];
        let numOfPosts = 5;
        for (let i = 1; i < numOfPosts; i++) {
            let tempPost = [dateList[i-1], contentList[i-1], mallTagList[i], productTagList[i], statusTagList[i], areaTagList[i]]
            postList.push(tempPost);
        }
        setAllPosts(postList);
        setDisplayPosts(postList);
    }

    const handleDelete = (event) => {
        
        let index = event.target.getAttribute('index');
        let getAllPost = [...allPosts];
        getAllPost.splice(index, 1);
        setAllPosts(getAllPost);
        setDisplayPosts(allPostsRef.current);
    }

    const sendSubmitContent = (data) => {
        console.log(data);        
        let formatData = [data.inputDate, data.inputContent, data.inputMall, data.inputProduct, data.inputStatus, data.inputArea];
        setAllPosts((prevState) => [formatData, ...prevState]);
        console.log(allPostsRef.current);
        setDisplayPosts(allPostsRef.current);
        console.log(displayPostsRef.current);
    }

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
        deleteBtn: {
            height: '30px',
            width: '60px',
            marginLeft: '710px',
            fontSize: '12px',
            borderRadius: '6px',
            color: 'white',
            border: 'white',
            backgroundColor: 'red',
            cursor: 'pointer',
        }
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
        setSearchContent((prevState) => ({
            ...prevState,
            selectedContent: event.target.value
            })
        );
    };
    const handleMallChange = (event) => {
        setMallTags(event.target.value);
        setSearchContent((prevState) => ({
            ...prevState,
            selectedMall: event.target.value
            })
        );
    };
    const handleProductChange = (event) => {
        setProductTags(event.target.value);
        setSearchContent((prevState) => ({
            ...prevState,
            selectedProduct: event.target.value
            })
        );

    };
    const handleStatusChange = (event) => {
        setStatusTags(event.target.value);
        setSearchContent((prevState) => ({
            ...prevState,
            selectedStatus: event.target.value
            })
        );

    };
    const handleAreaChange = (event) => {
        setAreaTags(event.target.value);
        setSearchContent((prevState) => ({
            ...prevState,
            selectedArea: event.target.value
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
    const theme = useTheme();

    const dateList = [

        "October 20th, 2021",
        "October 16th, 2021",
        "October 15th, 2021",
        "October 14th, 2021",
    ]

    const contentList = [
        "I went to walmart for blanket, and there are a lot",
        "I went to bestbuy for hand sanitizer, but there are not much left",
        "I went to CVS for laptop, but there are only two left",
        "I went to stop&shop for milk, there are only 0% fat ones"
    ]

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

    return (
        <div style={{backgroundColor: '#F8F9FA'}}>
            <Header sendSubmitContent={sendSubmitContent} ifSignIn={props.location.state ? props.location.state : false}/>
            <div className="container" style={{ display: 'flex', flexDirection: "column", alignItems: "center", padding: "20px" }}>
                <Card style={{width: "800px"}}>
                    <div className={classes.search} >
                        <div style={{ display: "flex"}}>
                            <TextField
                                placeholder="Search something..."
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
                            <button className={classes.searchBtn} onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                </Card>
                {displayPosts && displayPosts.map(
                    (post, index) => 
                        <Card className={classes.root} key={index}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        U
                                    </Avatar>
                                }
                                subheader={post[0]}
                            />
                            <CardContent>
                                <Typography variant="body1" color="textPrimary" component="p">
                                    {post[1]}
                                </Typography>
                            </CardContent>
                            <Divider variant="middle" />
                            <div className={classes.section2}>
                                <div>
                                    <Chip className={classes.commentChip} label={post[2]} />
                                    <Chip className={classes.commentChip} label={post[3]} />
                                    <Chip className={classes.commentChip} label={post[4]} />
                                    <Chip className={classes.commentChip} label={post[5]} />
                                </div>
                                {ifSignInRef.current.role == "admin" ? <button index={index} className={classes.deleteBtn} onClick={handleDelete}>Delete</button> : ''}
                            </div>
                        </Card>
                    

                )}
                {/* <Card className={classes.root}>
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
                </Card> */}

            </div>
        </div>
    )
    
}

export default Home;

import Accordion from "../components/base/Accordion";
import AccordionHeader from "../components/base/AccordionHeader";
import Card from "../components/base/Card";
import Checkbox from "../components/base/Checkbox";
import Image from "../components/base/Image";
import TextInput from "../components/base/TextInput";
import { Colors } from "../constants/Colors";
import { AiOutlineSearch } from 'react-icons/ai';
import Header from "../components/Header";
import { useEthers, useEtherBalance } from "@usedapp/core";
import React, { useEffect, useState, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
    Box,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    FormHelperText,
    Button,
    Paper,
    useMediaQuery,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import FormField from "./FormField";
import { exploreList } from "../constants/MockupData";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: "80vh",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2)
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "50%"
        },
        [theme.breakpoints.up("md")]: {
            width: "40%"
        }
    },
    form: {
        width: "100%",
        justifyContent: "center"
    },
    formInner: {
        padding: "20px 30px"
    },
    formControl: {
        marginBottom: "20px",
        width: "100%"
    },
    key: {
        backgroundColor: "#D6D6D6",
        padding: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
}));

const Create = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const theme = useTheme();
    const [show, setShow] = useState(false);
    const [success, setSuccess] = useState(false);



    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [formData, setFormData] = useState(null);
    const [survey, setsurvey] = useState({
        userID: "pf2",
        title: "",
        description: "",
        reward: "",
        phase: "",
        gender: "",
        address: "",
        field: [{ question: 'what is your name', options: ["palak", "jayati"] }]
    });



    const [errors, updateErrors] = useState({
        userID: "",
        title: "",
        description: "",
        reward: "",
        phase: "",
        address: "",
        gender: "",
    });


    const [isRegistered, setIsRegistered] = useState(true);
    const handlesurvey = (e) => {
        console.log({ target: e.target })
        setsurvey((prevsurvey) => ({
            ...prevsurvey,
            phase: e.target.value
        }));
    };
    const handleaddress = (e) => {
        console.log({ target: e.target })
        setsurvey((prevsurvey) => ({
            ...prevsurvey,
            address: e.target.value
        }));
    };

    const isFormValid = () => {
        let formIsValid = true;
        updateErrors({
            userID: "",
            title: "",
            description: "",
            reward: "",
            phase: "",
            gender: "",
        });


        return formIsValid;
    };

    const handleFormSubmit = (event) => {

        if (survey.address == "0x9dC36499A0aB380eeaC69De651811B68beb0a783") {
            setSuccess(true)
        } else {
            setShow(true)
        }

    }

    return (
        <>
            {<Dialog open={success}>
                <DialogTitle>Success</DialogTitle>
                <DialogContent>


                    <Typography variant="body2" style={{ wordWrap: "break-word" }}>
                        {"   The NFT has now been imported "}
                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            navigate('/detail', { state: { item: exploreList[0] } })

                        }}
                    >
                        Continue
                    </Button>
                </DialogActions>
            </Dialog>}
            {<Dialog open={show}>
                <DialogTitle>Fail</DialogTitle>
                <DialogContent>


                    <Typography variant="body2" style={{ wordWrap: "break-word" }}>
                        {"   The asset is already being used in another NFT"}
                    </Typography>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            navigate('/explore');
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>}
            <React.Fragment>
                {/* <MiniAlert message="This is the cute alert" severity="error" /> */}
                <Box
                    className={classes.root}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper elevation={isSmallScreen ? 0 : 3} className={classes.paper}>
                        <div style={{ marginTop: "40px" }}>
                            <Typography variant="h5">Import Existing Smart Contract </Typography>
                        </div>

                        <form className={classes.form} noValidate>
                            <div className={classes.formInner}>

                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl
                                            variant="outlined"
                                            required
                                            className={classes.formControl}
                                            error={errors.phase.length !== 0}
                                        >
                                            <InputLabel id="phase-label">Which phase is your project in?</InputLabel>
                                            <Select
                                                labelId="phase-label"
                                                id="phase"
                                                name="Which phase is your project in?"
                                                value={survey.phase}
                                                onChange={handlesurvey}
                                                label="Which project is your project in?"
                                            >

                                                <MenuItem value={"Live on a mainnet"}>
                                                    {"Live on a mainnet"}
                                                </MenuItem>
                                                <MenuItem value={"Live on a testnet"}>
                                                    {"Live on a testnet"}
                                                </MenuItem>

                                                <MenuItem value={"Not developed"}>
                                                    {"Not developed"}
                                                </MenuItem>

                                            </Select>
                                            <FormHelperText>{errors.degree}</FormHelperText>
                                        </FormControl>
                                    </Grid>
                                </Grid>


                                <FormField
                                    label="Address of ERC721 / ERC1155 contract on Testnet Network"
                                    name="description"

                                    onChange={handleaddress}
                                    error={errors.description}
                                />

                                <Button
                                    onClick={handleFormSubmit}
                                    size="large"
                                    color="primary"
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </div>

                        </form>

                    </Paper>
                </Box>
                <div>


                </div>
            </React.Fragment>
        </>
    );
};

export default Create;


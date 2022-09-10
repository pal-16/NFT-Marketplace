
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
} from "@material-ui/core";

import FormField from "./FormField";
import { Link, useHistory } from "react-router-dom";

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

    const theme = useTheme();

    useEffect(() => {



    }, []);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const [formData, setFormData] = useState(null);
    const [survey, setsurvey] = useState({
        userID: "pf2",
        title: "",
        description: "",
        reward: "",
        occupation: "",
        gender: "",
        field: [{ question: 'what is your name', options: ["palak", "jayati"] }]
    });

    const [errors, updateErrors] = useState({
        userID: "",
        title: "",
        description: "",
        reward: "",
        occupation: "",
        gender: "",
    });


    const [isRegistered, setIsRegistered] = useState(true);
    const handlesurvey = (e) => {
        setsurvey((prevsurvey) => ({
            ...prevsurvey,
            [e.target.name]: e.target.value
        }));
    };

    const isFormValid = () => {
        let formIsValid = true;
        updateErrors({
            userID: "",
            title: "",
            description: "",
            reward: "",
            occupation: "",
            gender: "",
        });


        return formIsValid;
    };

    const handleFormSubmit = (event) => {



    }

    return (
        <>

            <React.Fragment>
                <Box
                    className={classes.root}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Paper elevation={isSmallScreen ? 0 : 3} className={classes.paper}>
                        <div style={{ marginTop: "40px" }}>
                            <Typography variant="h5">Import Existing </Typography>
                        </div>

                        <form className={classes.form} noValidate>
                            <div className={classes.formInner}>

                                <Grid container spacing={1}>
                                    <Grid item xs={12} md={12}>
                                        <FormControl
                                            variant="outlined"
                                            required
                                            className={classes.formControl}
                                            error={errors.occupation.length !== 0}
                                        >
                                            <InputLabel id="occupation-label">Which project is your project in?</InputLabel>
                                            <Select
                                                labelId="occupation-label"
                                                id="occupation"
                                                name="Which phase is your project in?"
                                                value={survey.occupation}
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
                                    required={true}
                                    onChange={handlesurvey}
                                    error={errors.description}
                                />

                                <Button
                                    onClick={handleFormSubmit}
                                    size="large"
                                    color="primary"
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                >
                                    Submit
                                </Button>
                            </div>
                        </form>

                    </Paper>
                </Box>
            </React.Fragment>
        </>
    );
};

export default Create;


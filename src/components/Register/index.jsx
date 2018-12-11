import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  card: {
    marginTop: 25,
    minWidth: 275,
    minHeight: 650,
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 229
  },
  physicalAddress: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 725
  },
  dense: {
    marginTop: 19
  }
});

class TextFields extends Component {
  state = {};

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs />
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardContent>
                <form
                  className={classes.container}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    placeholder="First Name"
                    id="first-name"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Middle Name"
                    id="middle-name"
                    label="Middle Name"
                    className={classes.textField}
                    value={this.state.middleName}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Last Name"
                    id="last-name"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Date of Birth"
                    id="dob"
                    label="Date of Birth"
                    className={classes.textField}
                    value={this.state.dob}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />

                  <TextField
                    placeholder="Occupation"
                    id="occupation"
                    label="Occupation"
                    className={classes.textField}
                    value={this.state.occupation}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />

                  <TextField
                    placeholder="Investment Amount"
                    id="investment-amount"
                    label="Investment Amount"
                    className={classes.textField}
                    value={this.state.investAmount}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />

                  <TextField
                    placeholder="Physical Address"
                    id="physical-address"
                    label="Physical Address"
                    className={classes.physicalAddress}
                    value={this.state.physicalAddress}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />

                  <TextField
                    placeholder="Address continued"
                    id="continued-address"
                    label="Address continue"
                    className={classes.physicalAddress}
                    value={this.state.secondAddress}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />

                  <TextField
                    placeholder="City"
                    id="city"
                    label="City"
                    className={classes.textField}
                    value={this.state.city}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Region/State"
                    id="region"
                    label="Region"
                    className={classes.textField}
                    value={this.state.region}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Zip Code"
                    id="zip-code"
                    label="Zip Code"
                    className={classes.textField}
                    value={this.state.zipCode}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                  <TextField
                    placeholder="Country"
                    id="country"
                    label="Country"
                    className={classes.textField}
                    value={this.state.country}
                    onChange={this.handleChange("name")}
                    margin="normal"
                  />
                </form>
              </CardContent>
              <input
                accept="image/*"
                className={classes.input}
                id="contained-button-file"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  component="span"
                  className={classes.button}
                >
                  Upload
                </Button>
              </label>
            </Card>
          </Grid>
          <Grid item xs />
        </Grid>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
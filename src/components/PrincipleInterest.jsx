import { Button, Grid, Typography, ToggleButton, ToggleButtonGroup, TextField } from "@mui/material";
import { green } from "@mui/material/colors";

const PrincipleInterest = ({calculator, updateCalculator}) => {
  return (
    <Grid container spacing={2} sx={{marginBottom: '16px'}} >
    <Grid size={12}>
      <Typography variant='h4'>Prinicple and Interest</Typography>
    </Grid>
    <Grid size={5}>
      <TextField variant='outlined' label='Sales Price' fullWidth defaultValue={calculator.salesPrice} onChange={(e) => {updateCalculator({...calculator, 'salesPrice': e.target.value})}} />
    </Grid>
    <Grid size={5} offset={1}>
      <TextField variant='outlined' label='Loan Amount' fullWidth />
    </Grid>
    <Grid size={3}>
      <TextField variant='outlined' label='Down Payment' fullWidth />
    </Grid>
    <Grid size={1}>
      <TextField variant='outlined' label='%' fullWidth />
    </Grid>
    <Grid size={2} offset={2}>
      <TextField variant='outlined' label='Interest Rate' fullWidth />
    </Grid>
    <Grid size={2}>
      <TextField variant='outlined' label='Term' fullWidth />
    </Grid>
    <Grid size={1}>
      <ToggleButtonGroup color='primary' exclusive>
      <ToggleButton value='year'>Yr</ToggleButton>
      <ToggleButton value='month'>Mo</ToggleButton>
      </ToggleButtonGroup>
    </Grid>
    <Grid size={4}>
      <TextField variant='outlined' label='Principle and Interest' fullWidth defaultValue='0' slotProps={{input: {readOnly: true}}} color={green[900]} />
    </Grid>
    <Grid size={8} />
    <Grid size={1}>
      <Button variant='contained'>Calculate</Button>
    </Grid>
    </Grid>);
};

export default PrincipleInterest;
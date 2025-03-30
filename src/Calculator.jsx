import { Button, Container, Divider, Grid, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { blue, green }from '@mui/material/colors';

const Calculator = () => {
  return (
    <Container sx={{backgroundColor: blue[50], height: '100vh', paddingY: '32px'}} >
      <Grid container spacing={2} sx={{marginBottom: '16px'}} >
        <Grid size={12}>
          <Typography variant='h4'>Prinicple and Interest</Typography>
        </Grid>
        <Grid size={5}>
          <TextField variant='outlined' label='Sales Price' fullWidth />
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
        <Grid size={4}>
          <TextField variant='outlined' label='Principle and Interest' fullWidth defaultValue='0' slotProps={{input: {readOnly: true}}} color={green[900]} />
        </Grid>
        <Grid size={8} />
        <Grid size={1}>
          <Button variant='contained'>Calculate</Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} sx={{marginTop: '16px', marginBottom: '16px'}} columns={3}>
        <Grid size={3}>
          <Typography variant='h4'>Payment</Typography>
        </Grid>
        <Grid size={1}>
          <TextField variant='outlined' label='Principle and Interest' fullWidth />
        </Grid>
        <Grid size={2} />
        <Grid size={1} offset={0}>
          <TextField variant='outlined' label='Property Taxes' fullWidth />
        </Grid>
        <Grid size={2} />
        <Grid size={1}>
          <TextField variant='outlined' label="Home Owner's Insurance" fullWidth />
        </Grid>
        <Grid size={2} />
        <Grid size={1}>
          <TextField variatn='outlined' label='Mortgage Payment' fullWidth />
        </Grid>
        <Grid size={2} />
        <Grid size={1}>
          <Button variant='contained'>Calculate</Button>
        </Grid>
      </Grid>
      <Divider />
      <Grid container spacing={2} sx={{marginTop: '16px'}} columns={3}>
        <Grid size={3}>
          <Typography variant='h4'>Amortization Chart</Typography>
        </Grid>
        <Grid size={1}>
          <TextField variant='outlined' label='Total Interest Paid' fullWidth defaultValue='0' slotProps={{input: {readOnly: true}}} />
        </Grid>
        <Grid size={3}>
          <Table stickyHeader sx={{width: '100%'}}>
            <TableHead>
              <TableRow>
              <TableCell>
                  Month
                </TableCell>
                <TableCell>
                  Principle
                </TableCell>
                <TableCell>
                  Interest
                </TableCell>
                <TableCell>
                  Balance
                </TableCell>
                <TableCell>
                  Extra Payment
                </TableCell>
                <TableCell>
                  Total Interest
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  1
                </TableCell>
                <TableCell>
                  1
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Calculator;
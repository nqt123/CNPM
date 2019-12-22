import React,{Component} from 'react';
import styles from './../styles.js';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
class SignUp extends Component{
  render(){
    const {classes}=this.props;
  return (
   <Container component="main" maxWidth="sm" className={classes.changedangki}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4" className={classes.dangki}>
          Đăng kí
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                size="small"
                fullWidth
                id="firstName"
                label="Họ"
                autoFocus
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Tên"
                name="lastName"
                autoComplete="lname"
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="username"
                label="Tài khoản"
                name="username"
                type="text"
                autoComplete="text"
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Mật khẩu"
                type="password"
                id="password"
                autoComplete="current-password"
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                name="email"
                type="email"
                autoComplete="email"
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="sdt"
                label="Số điện thoại"
                name="sdt"
                type="text"
                autoComplete="text"
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                id="date"
                label="Ngày sinh"
                type="date"
                fullWidth
                format="dd/mm/yyyy"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup aria-label="gender" name="gender">
              <Grid direction="row">
              <FormControlLabel value="Nam" control={<Radio color="default" className={classes.colorGreen}/>} label="Nam" className={classes.colorWhite}/>
              <FormControlLabel value="Nữ" control={<Radio color="default" className={classes.colorGreen}/>} label="Nữ" className={classes.colorWhite}/>
              </Grid>
              </RadioGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Đăng kí
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/dang-nhap" variant="body2" className={classes.taikhoan}>
                Bạn đã có tài khoản? Đăng nhập
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}
export default withStyles(styles)(SignUp);

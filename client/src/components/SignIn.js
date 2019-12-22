import React,{Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import styles from './../styles.js';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
class SignIn extends Component{
  render(){
  	const {classes}=this.props;
  return (
	 <Container component="main" maxWidth="xs" className={classes.changeForm}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AccountCircleIcon fontSize="large" />
        </Avatar>
        <Typography component="h1" variant="h4" className={classes.colorWhite}>
          Đăng nhập
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="username"
            label="Tài khoản"
            name="username"
            autoComplete="text"
            autoFocus
            classes={{root:classes.root}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Mật khẩu"
            type='password'
            id="password"
            autoComplete="current-password"
            classes={{root:classes.root}}
          />
          <FormControlLabel
            control={<Checkbox color="default" value="remember" className={classes.colorGreen}/>}
            label="Remember me"
            className={classes.colorWhite}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Đăng nhập <ExitToAppIcon />
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" className={classes.taikhoan}>
                Quên mật khẩu?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/dang-ki" variant="body2" className={classes.taikhoan}>
                Đăng kí
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
}
export default withStyles(styles)(SignIn);

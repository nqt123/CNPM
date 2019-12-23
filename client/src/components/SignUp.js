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
import Swal from 'sweetalert2';
class SignUp extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      username:'',
      password:'',
      email:'',
      diachi:'',
      sdt:'',
      gender:'',
      ngaysinh:'',
      SSN:''

    }
  }
  handleSignup=(e)=>{
    e.preventDefault();
    const {username,password,firstName,lastName,email,diachi,sdt,gender,ngaysinh,SSN}=this.state;
    if(!username||!password||!firstName||!lastName||!email||!diachi||!sdt||!ngaysinh)
    {
     return Swal.fire({
              icon: 'error',
              title: 'Thiếu tài khoản hoặc mật khẩu',
              text: 'Vui lòng điền đầy đủ thông tin!',
      });
    }
    fetch('http://localhost:5000/users/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
      body: JSON.stringify({
        username,password,email,firstName,lastName,gender,position:"User",location:diachi,phoneNumber:sdt,
        excercisePassed: [],
        lastExcercise: "",
        avatar: "",
        comment: [],
        SSN
      })
    }).then(res => res.json())
    .then(respond => 
        {
          this.props.history.push('/dang-nhap')
        })
    .catch(err => console.log(err));
  }
  onChange=(event)=>{
    var target=event.target;
    var name=target.name;
    var value=target.value;
    this.setState({
        [name]:value
    });
  }
  render(){
    const {classes}=this.props;
    var {username,password,firstName,lastName,email,diachi,sdt,gender,ngaysinh,SSN}=this.state;
    console.log(username+password+firstName+lastName+email+diachi+sdt+gender+ngaysinh);
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
                value={firstName}
                onChange={this.onChange}
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
                value={lastName}
                onChange={this.onChange}
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
                value={username}
                onChange={this.onChange}
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
                value={password}
                onChange={this.onChange}
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
                value={email}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="diachi"
                label="Địa chỉ"
                name="diachi"
                type="text"
                autoComplete="text"
                classes={{root:classes.root}}
                value={diachi}
                onChange={this.onChange}
              />
            </Grid>
             <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="SSN"
                label="CMND"
                name="SSN"
                type="text"
                autoComplete="text"
                classes={{root:classes.root}}
                value={SSN}
                onChange={this.onChange}
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
                value={sdt}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                id="date"
                name="ngaysinh"
                value={ngaysinh}
                onChange={this.onChange}
                label="Ngày sinh"
                type="date"
                fullWidth
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                classes={{root:classes.root}}
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup aria-label="gender" name="gender" value={gender} onChange={this.onChange}>
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
            onClick={this.handleSignup}
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

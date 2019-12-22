import background from './b2.jpg';
const styles=theme=>({
	'@global': {
	    body: {
	    backgroundImage: `url(${background})`,
	    backgroundRepeat: 'no-repeat',
  		backgroundSize: 'cover',
  		backgroundPosition: 'center ',
  		backgroundAttachment: 'fixed',
	    }
	},
	paper: {
	    display: 'flex',
	    flexDirection: 'column',
	    alignItems: 'center'
	},
	avatar: {
	    margin: theme.spacing(1),
	    backgroundColor: 'green',
	},
	form: {
	    width: '100%', // Fix IE 11 issue.
	    marginTop: theme.spacing(1),
	},
	submit: {
	    margin: theme.spacing(0, 0, 2),
	    backgroundColor:'green',
	    color:'white',
	    '&:hover':{
	    	background:'green'
	    }
	},
	root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    '& .MuiOutlinedInput-root': {
    	color:'white',
    	'& fieldset': {
        borderColor: 'green',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'green',
      },
    },
    '& label':{
    	color:'white'
    },
  },
  colorGreen:{
  	color: 'green'
  },
  colorWhite:{
  	color:'white'
  },
  changeForm:{
  	background:'rgba(0, 0, 0, 0.5)',
  	padding:theme.spacing(4),
  	marginTop: theme.spacing(11),
  	'@media screen and (max-width: 320px)': {
  		marginTop:theme.spacing(5)
  },
},
changedangki:{
  background:'rgba(0, 0, 0, 0.5)',
    padding:theme.spacing(4),
    marginTop: theme.spacing(0),
    '@media screen and (max-width: 320px)': {
      marginTop:theme.spacing(5)
  }
},
  taikhoan:{
    color:'white',
    '&:hover':{
      color:'white'
    }
  },
  dangki:{
    color:'white',
    marginBottom:theme.spacing(2)
  }
});
export default styles;
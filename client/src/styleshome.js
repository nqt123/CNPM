
const styleshome=theme=>({
	paper:{
    backgroundImage:"url(https://www.bizcover.co.nz/wp-content/uploads/2018/08/pexels-photo-733856.jpg)",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center ',
    backgroundAttachment: 'fixed',
    paddingBottom:theme.spacing(25),
    [theme.breakpoints.down('sm')]: {
      paddingBottom:theme.spacing(18)
    },
    color:'white',
    borderTop:'1px solid black'
  },
  fontChu:{
    fontSize:theme.spacing(10),
    alignItems: 'center'
  },
  tieude:{
    marginTop:theme.spacing(15),
    [theme.breakpoints.down('xs')]: {
      fontSize:30,
      animation:'none',
      marginTop:theme.spacing(10),
      letterSpacing:3,
      textAlign:'center',
      width:'100%',
      left:0
    },
    [theme.breakpoints.down('sm')]: {
      fontSize:30,
      animation:'none',
      marginTop:theme.spacing(12),
      letterSpacing:3,
      textAlign:'center',
      width:'100%',
      left:0
    },
    [theme.breakpoints.only('md')]: {
      animation:'none',
      textAlign:'center',
      width:'100%',
      left:0
    },
    position:'relative',
    width:'600px',
    animation:'$tieude 2s',
    left:'29%',
    fontSize:60,
    letterSpacing:6

  },
  '@keyframes tieude': {
    '0%': { left: '0px',opacity:0.5 },
    '100%': { left: '29%',opacity:1},
  },
  chitiet:{
    [theme.breakpoints.down('sm')]: {
      fontSize:12,
      animation:'none',
      marginTop:theme.spacing(1),
      letterSpacing:3,
      textAlign:'center',
      width:'100%',
      left:0
    },
    position:'absolute',
    width:'700px',
    animation:'$chitiet 2s',
    right:'24%'
  },
  '@keyframes chitiet': {
    '0%': { right: '0%' },
    '100%': { right: '24%'},
  },
  btnmargin:{
    marginTop:theme.spacing(2),
    background:'#07C41B',
    padding:theme.spacing(1,4,1,4),
    color:'white',
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(0.5,1,0.5,1),
      fontSize:10
    },
    '&:hover':
    {
      color:'white'
    }
  },
  gioithieu:{
    position:'relative'
  },
  cardgioithieu:{
    width:'14em',
    margin:'auto',
    border:'none',
    paddingBottom:theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2,4,2,4)
    },
    '&:hover':{
      transform: 'scale(1.1)',
      cursor: 'pointer'
    }
  },
  imggioithieu:{
    height:'200px',
    [theme.breakpoints.down('sm')]: {
      height:'110px'
    }
  },
  textgioithieu:{
    textAlign:'center',
    fontSize:15,
    color:'#6D6D6D'
  },
  colorgreen:{
    border:'2px solid #65B178',
    color:'#65B178',
    '&:hover':
    {
      background:'#65B178',
      color:'white'
    }
  },
  footer:{
   padding:theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      padding:theme.spacing(2)
    },
    marginTop:theme.spacing(1),
    background:'black',
    color:'white'
  },
  cach:{
    marginBottom:theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      fontSize:8
    }
  },
  icon:{
    [theme.breakpoints.down('xs')]: {
      fontSize:13
    }
  },
  paddinggiua:{
    paddingLeft:theme.spacing(16),
    [theme.breakpoints.down('xs')]: {
      paddingLeft:theme.spacing(2)
    },
    [theme.breakpoints.only('sm')]: {
      paddingLeft:theme.spacing(4)
    }
  },
  paddingchu:{
    paddingLeft:theme.spacing(2)
  },
  paddingchu1:{
    background:'green',
    color:'white',
    paddingLeft:theme.spacing(2)
  },
  bBottom:{
    borderBottom:'2px solid',
  },
  gachngang:{
    marginTop:'50px',
    borderTop:'2px solid #6D6D6D',
    marginLeft:'205px',
    marginRight:'205px',
    '@media only screen and (max-width: 1024px)':{
      display:'none'
    }
  },
  titlegt:{
    display:'block',
    width:'200px',
    position:'absolute',
    top:'-30px',
    left:'43%',
    fontSize:'37px',
    textAlign:'center',
    background:'white',
    '@media only screen and (max-width: 600px)':
    {
      fontSize:'30px',
      fontWeight:'bold',
      textAlign:'center'
    },
    '@media only screen and (max-width: 1024px)': {
      position: 'relative',
      display: 'block',
      margin: '0 auto',
      left: '0px',
      top: '20px'
    }
  },
  hethong:{
    marginTop:'70px',
    '@media only screen and (max-width: 1024px)': {
      marginTop:'20px'
    }
  },
  slider:{
    position:'relative'
  },
  titlenx:{
    display:'block',
    width:'380px',
    position:'absolute',
    top:'-30px',
    left:'36%',
    fontSize:'37px',
    textAlign:'center',
    background:'white',
    '@media only screen and (max-width: 600px)':
    {
      fontSize:'30px',
      fontWeight:'bold',
      textAlign:'center'
    },
    '@media only screen and (max-width: 1024px)': {
      position: 'relative',
      display:'block',
      margin: '0 auto',
      left: '0px',
      top: '0px',
      width:'100%'
    },

  },
  linkbai:{
    color:'black',
    padding:theme.spacing(1),
    display:'block',
    '&:hover':{
      background:'green',
      color:'white',
      textDecoration:'none'
    }
  },
  active:{
    fontWeight:'none',
    background:'green',
    color:'white'
  },
  logofooter:{
    height:'150px',
    '@media only screen and (max-width: 1024px)':{
      height:'100px'
    }
  }
});
export default styleshome;
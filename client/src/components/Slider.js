import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Box from '@material-ui/core/Box';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Kiến thức đầy đủ trực quan giúp em học rất hiệu quả',
    create:'- Đỗ Tiến Thắng,THPT Sóc Trăng -'
  },
  {
    label: 'Sau khi học xong em cảm thấy rất tự tin vào môn Sinh học',
    create:'- Nguyễn Quý Thắng,THPT Kim Anh -'
  },
  {
    label: 'Hệ thống bài tập và bài thi rất tốt giúp em rất nhiều trong kì thi vừa qua',
    create:'- Nguyễn Thị Kim Chi,THPT Lương Thế Vinh -'
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    flexGrow: 1,
    paddingBottom:theme.spacing(4),
    marginTop:'50px',
    '@media only screen and (max-width: 600px)': {
      marginTop:'20px'
    },
    '@media only screen and (max-width: 768px)': {
      marginTop:'10px'
    }
  },
  header: {
    alignItems: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  tieude:{
    '@media only screen and (max-width: 600px)': {
      fontSize:15
    }
  },
  chitiet:{
    '@media only screen and (max-width: 600px)': {
      fontSize:13
    }
  }
}));

function SwipeableTextMobileStepper() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Box fontSize={18} textAlign="center" fontStyle="italic" className={classes.tieude}>"{tutorialSteps[activeStep].label}"</Box>
        <Box fontSize={15} textAlign="center" className={classes.chitiet}>{tutorialSteps[activeStep].create}</Box>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Tiếp theo
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Trở lại
          </Button>
        }
      />
    </div>
  );
}

export default SwipeableTextMobileStepper;
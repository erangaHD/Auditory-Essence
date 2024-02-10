import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import colors from '../../vars'


const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 40,
    width: '100%',
    backgroundColor: 'transparent',
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: colors.blue,
    '&.Mui-selected': {
      color: '#fff',
      backgroundColor: colors.primaryPurple,
      borderRadius: '40px'
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
    
  }),
);

// passing value to parent
export default function TabPanel({sendDataToParent}) {
  const [value, setValue] = React.useState(0);
//   output 0 & 1

  const handleChange = (event, newValue) => {
    setValue(newValue);
    sendDataToParent(newValue)
  };

  return (
    <Box sx={{ width: '100%' }}>
      
      <Box sx={{ display:'flex', justifyContent:'center' }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="Monthly" />
          <StyledTab label="Yearly" />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
    </Box>
  );
}
import PropTypes from 'prop-types';
// material-ui
import { useTheme, useMediaQuery } from '@mui/material';
import { Box, Card, CardContent, Typography, Grid2 } from '@mui/material';

// ==============================|| REPORT CARD ||============================== //

const ReportCard = ({ 
  primary, 
  secondary, 
  iconPrimary, 
  color, 
  footerData, 
  iconFooter, 
  drawerOpen 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter /> : null;
  const DrawerOpen=drawerOpen;

  // console.log(DrawerOpen)
  return (
    <Card
      sx={{
        flexGrow: 1, // Let the card grow to fill available space
        minWidth: isMobile ? '100%' : DrawerOpen ? '235px' : '295px', // Adjust width based on drawer state
        transition: 'all 0.3s ease', // Smooth transitions
        margin: theme.spacing(1),
      }}
    >
      <CardContent>
        <Grid2 container justifyContent="space-between" alignItems="center">
          <Grid2 item>
            <Typography variant="h3" sx={{ color: color }}>
              {primary}
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '.5rem' }}>
              {secondary}
            </Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="h2" sx={{ color: color }}>
              {primaryIcon}
            </Typography>
          </Grid2>
        </Grid2>
      </CardContent>
      <Box sx={{ background: color }}>
        <Grid2
          container
          justifyContent="space-between"
          sx={{
            textAlign: 'center',
            padding: theme.spacing(1.2),
            pl: 2.5,
            pr: 2.5,
            color: theme.palette.common.white,
          }}
        >
          <Grid2 item>
            <Typography variant="body2">{footerData}</Typography>
          </Grid2>
          <Grid2 item>
            <Typography variant="body2">{footerIcon}</Typography>
          </Grid2>
        </Grid2>
      </Box>
    </Card>
  );
};

ReportCard.propTypes = {
  primary: PropTypes.string,
  secondary: PropTypes.string,
  iconPrimary: PropTypes.object,
  footerData: PropTypes.string,
  iconFooter: PropTypes.object,
  color: PropTypes.string,
  drawerOpen: PropTypes.bool, // Add prop to monitor drawer state
};

export default ReportCard;

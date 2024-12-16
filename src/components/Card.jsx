import PropTypes from 'prop-types';
// material-ui
import { useTheme, useMediaQuery } from '@mui/material';
import { Box, Card, CardContent, Typography,Grid2 } from '@mui/material';

// ==============================|| REPORT CARD ||============================== //

const ReportCard = ({ primary, secondary, iconPrimary, color, footerData, iconFooter }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detect mobile view
  const IconPrimary = iconPrimary;
  const primaryIcon = iconPrimary ? <IconPrimary fontSize="large" /> : null;
  const IconFooter = iconFooter;
  const footerIcon = iconFooter ? <IconFooter /> : null;

  return (
    <Card
      sx={{
        width: isMobile ? '100%' : 'auto', // Adjust width for mobile view
        margin: isMobile ? theme.spacing(1) : theme.spacing(2), // Optional margin adjustments
      }}
    >
      <CardContent>
        <Grid2 container justifyContent="space-between" alignItems="center">
          <Grid2>
            <Typography variant="h3" sx={{ color: color }}>
              {primary}
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '.5rem' }}>
              {secondary}
            </Typography>
          </Grid2>
          <Grid2>
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
          <Grid2>
            <Typography variant="body2">{footerData}</Typography>
          </Grid2>
          <Grid2>
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
};

export default ReportCard;

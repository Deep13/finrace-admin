import { Card, CardHeader,Grid2, Divider, CardContent, Typography, LinearProgress } from "@mui/material";

const TrafficSourceCard = ({ title, data, gridSpacing = 2 }) => {
  return (
    <Grid2 item lg={4} xs={12}>
      <Card>
        <CardHeader
          title={
            <Typography component="div" variant="h6" className="card-header" sx={{ fontWeight: "bold" }}>
              {title}
            </Typography>
          }
        />
        <Divider />
        <CardContent>
          <Grid2 container spacing={gridSpacing}>
            {data.map((source, index) => (
              <Grid2 item xs={12} key={index}>
                <Grid2 container alignItems="center" spacing={2}>
                  {/* Label */}
                  <Grid2 item xs={6}>
                    <Typography variant="body2">{source.label}</Typography>
                  </Grid2>
                  {/* Percentage */}
                  <Grid2 item xs={6}>
                    <Typography variant="body2" align="right">
                      {`${source.value}%`}
                    </Typography>
                  </Grid2>
                  {/* Progress Bar */}
                  <Grid2 item xs={12}>
                    <LinearProgress
                      variant="determinate"
                      value={source.value}
                      color={source.color || "primary"} // Default color is primary
                      sx={{ height: 8, borderRadius: 4 }}
                    />
                  </Grid2>
                </Grid2>
              </Grid2>
            ))}
          </Grid2>
        </CardContent>
      </Card>
    </Grid2>
  );
};

export default TrafficSourceCard;

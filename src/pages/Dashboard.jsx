import ReportCard from "../components/Card";
import { Grid2 } from "@mui/material";
import AreaChart from "../components/LineChart"; // Import the area chart
import HorizontalBarChart from "../components/BarChart"; // Import the horizontal bar chart

import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import MonetizationOnTwoTone from "@mui/icons-material/MonetizationOnTwoTone";
import DescriptionTwoTone from "@mui/icons-material/DescriptionTwoTone";
import ThumbUpAltTwoTone from "@mui/icons-material/ThumbUpAltTwoTone";
import CalendarTodayTwoTone from "@mui/icons-material/CalendarTodayTwoTone";
import DataTable from "../components/DataTable";


const Dashboard = () => {
  const supportRequestsData = [10, 5, 8, 12, 15, 10, 7];
  const trafficSourcesData = [80, 50, 60, 40, 90, 70];
  const salesData = [150, 200, 170, 250, 300, 400];
  const labels = ["Direct", "Social", "Referral", "Bounce", "Internet", "Social"];

  return (
    <div className="dashboard">
      <Grid2 container spacing={2} p={{ xs: 2, md: 4 }} justifyContent="center">
        {/* Top Section: Report Cards */}
        <Grid2 container spacing={3} justifyContent="center">
          <Grid2 xs={12} sm={6} md={3}>
            <ReportCard
              primary="$30200"
              secondary="All Earnings"
              color={"#f5a000"}
              footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <ReportCard
              primary="145"
              secondary="Task"
              color={"#fe403a"}
              footerData="28% task performance"
              iconPrimary={CalendarTodayTwoTone}
              iconFooter={TrendingDownIcon}
            />
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <ReportCard
              primary="290+"
              secondary="Page Views"
              color={"#00ad68"}
              footerData="28% task performance"
              iconPrimary={DescriptionTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid2>
          <Grid2 xs={12} sm={6} md={3}>
            <ReportCard
              primary="500"
              secondary="Downloads"
              color={"#3267ff"}
              footerData="1k download in App store"
              iconPrimary={ThumbUpAltTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid2>
        </Grid2>

        {/* Bottom Section: Area Charts */}
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 xs={12} md={6}>
            <AreaChart
              title="Support Requests"
              data={supportRequestsData}
              labels={labels}
              color="#3f51b5"
            />
          </Grid2>
          <Grid2 xs={12} md={6}>
            <AreaChart
              title="Page Views"
              data={salesData}
              labels={labels}
              color="#f50057"
            />
          </Grid2>
        </Grid2>

        {/* Bar Chart Section for Traffic Sources */}
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 xs={12}>
            <HorizontalBarChart
              title="Traffic Sources"
              data={trafficSourcesData}
              labels={labels}
            />
          </Grid2>
        </Grid2>
        <Grid2 container spacing={2} justifyContent="center">
          <DataTable/>
        </Grid2>
      </Grid2>
    </div>
  );
};

export default Dashboard;

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
import PropTypes from 'prop-types';
import { useOutletContext } from "react-router-dom";

const Dashboard = () => {
  const [open] = useOutletContext();
  const supportRequestsData = [10, 5, 8, 12, 15, 10, 7];
  const trafficSourcesData = [80, 50, 60, 40, 90, 70];
  const salesData = [150, 200, 170, 250, 300, 400];
  const labels = ["Direct", "Social", "Referral", "Bounce", "Internet", "Social"];

  return (
    <div className="dashboard">
      <Grid2 container spacing={0} p={{ xs: 2, md: 4 }} justifyContent="center">
        {/* Top Section: Report Cards */}
        <Grid2 container spacing={1} xs={12} justifyContent="center" sx={{ width: "100%" }}>
          <Grid2 xs={3} sm={6} md={3} sx={{ display: 'flex' }}>
            <ReportCard
              primary="$30200"
              secondary="All Earnings"
              color={"#f5a000"}
              footerData="10% changes on profit"
              iconPrimary={MonetizationOnTwoTone}
              iconFooter={TrendingUpIcon}
              drawerOpen={open}
              sx={{ width: '100%' }} // Ensure full width on mobile and desktop
            />
          </Grid2>
          <Grid2 xs={3} sm={6} md={3} sx={{ display: 'flex' }}>
            <ReportCard
              primary="145"
              secondary="Task"
              color={"#fe403a"}
              footerData="28% task performance"
              iconPrimary={CalendarTodayTwoTone}
              iconFooter={TrendingDownIcon}
              drawerOpen={open}
              sx={{ width: '100%' }} // Ensure full width
            />
          </Grid2>
          <Grid2 xs={3} sm={6} md={3} sx={{ display: 'flex' }}>
            <ReportCard
              primary="290+"
              secondary="Page Views"
              color={"#00ad68"}
              footerData="28% task performance"
              iconPrimary={DescriptionTwoTone}
              iconFooter={TrendingUpIcon}
              drawerOpen={open}
              sx={{ width: '100%' }} // Ensure full width
            />
          </Grid2>
          <Grid2 xs={3} sm={6} md={3} sx={{ display: 'flex' }}>
            <ReportCard
              primary="500"
              secondary="Downloads"
              color={"#3267ff"}
              footerData="1k download in App store"
              iconPrimary={ThumbUpAltTwoTone}
              iconFooter={TrendingUpIcon}
              drawerOpen={open}
              sx={{ width: '100%' }} // Ensure full width
            />
          </Grid2>
        </Grid2>

        {/* Bottom Section: Area Charts */}
        <Grid2 container spacing={2} xs={12} justifyContent="center" p={{ xs: 2, md: 4 }} sx={{ width: "100%", display:"flex", justifyContent:"center", }}>
          <Grid2
            xs={4} // Adjust width based on sidebar state
            sx={{ display: 'flex', maxWidth:"40%", justifyContent: "center" }}
          >
            <AreaChart
              title="Support Requests"
              data={supportRequestsData}
              labels={labels}
              color="#3f51b5"
              sx={{ width: '100%' }} // Ensure chart takes up full width
            />
          </Grid2>
          <Grid2
            xs={open?6:4} // Adjust width based on sidebar state
           //md={open ? 9 : 6} // Adjust width for larger screens
            sx={{ display: 'flex', justifyContent: "center" , maxWidth:open?"60%":"40%"}}
          >
            <AreaChart
              title="Page Views"
              data={salesData}
              labels={labels}
              color="#f50057"
              sx={{ width: '100%' }} // Ensure chart takes up full width
            />
          </Grid2>
          {/* Bar Chart Section for Traffic Sources  */}
          <Grid2
            xs={open?12:4} // Adjust width based on sidebar state
            sx={{ display: 'flex', justifyContent: "center", minWidth:open?"99%":"44%", maxWidth:open?"97%":"44%" }}
          >
            <HorizontalBarChart
              title="Traffic Sources"
              data={trafficSourcesData}
              labels={labels}
              sx={{ width: '100%' }} // Ensure chart takes up full width
            />
          </Grid2>
        </Grid2>

        {/* Data Table Section */}
        <Grid2 container spacing={0} sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Grid2 xs={12} sx={{ width: '100%', overflow: "auto", display: "table", tableLayout: "fixed" }}>
            <DataTable sx={{ width: '100%' }} />  {/* Ensure table takes full width */}
          </Grid2>
        </Grid2>
      </Grid2>
    </div>
  );
};

Dashboard.propTypes = {
  open: PropTypes.bool,
};

export default Dashboard;

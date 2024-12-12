import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const AreaChart = ({ title, data, labels, color }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        fill: true, // Enables area fill effect
        borderColor: color || "#3f51b5",
        backgroundColor: color ? `${color}30` : "#3f51b530", // Transparent area fill
        pointBackgroundColor: color || "#3f51b5", // Style for data points
        pointBorderColor: "#fff",
        pointHoverRadius: 6,
        pointRadius: 4,
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: color || "#3f51b5",
        tension: 0.4, // Smooth curves
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1, // Keeps the chart square
    plugins: {
      legend: {
        display: false, // Hides the legend
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#fff",
        titleColor: "#000",
        bodyColor: "#000",
        borderColor: color || "#3f51b5",
        borderWidth: 1,
        cornerRadius: 4,
        padding: 10,
        displayColors: false, // Hides the color box in tooltips
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Removes vertical grid lines
        },
        ticks: {
          color: "#8e99a4", // X-axis labels color
        },
      },
      y: {
        grid: {
          color: "#e0e0e0", // Horizontal grid lines
          lineWidth: 0.5,
        },
        ticks: {
          color: "#8e99a4", // Y-axis labels color
          precision: 0,
        },
        beginAtZero: true, // Ensures Y-axis starts at zero
      },
    },
  };

  return (
    <Box
      sx={{
        padding: 2,
        background: "#fff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: 2,
        maxWidth: 300, // Limits the overall size of the chart
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#3f51b5", fontWeight: "bold", fontSize: "1rem" }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          width: 250, // Explicit chart width
          height: 250, // Explicit chart height to make it smaller
          margin: "0 auto", // Center aligns the chart
        }}
      >
        <Line data={chartData} options={options} />
      </Box>
    </Box>
  );
};

AreaChart.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
  labels: PropTypes.object,
  color: PropTypes.string
};
export default AreaChart;

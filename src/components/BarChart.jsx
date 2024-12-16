import { Bar } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const HorizontalBarChart = ({ title, data, labels }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor: [
          "rgba(33, 150, 243, 0.7)", // Blue
          "rgba(158, 158, 158, 0.7)", // Grey
          "rgba(33, 150, 243, 0.7)", // Blue
          "rgba(158, 158, 158, 0.7)", // Grey
          "rgba(33, 150, 243, 0.7)", // Blue
          "rgba(158, 158, 158, 0.7)", // Grey
        ],
        borderColor: [
          "rgba(33, 150, 243, 1)", // Blue
          "rgba(158, 158, 158, 1)", // Grey
          "rgba(33, 150, 243, 1)", // Blue
          "rgba(158, 158, 158, 1)", // Grey
          "rgba(33, 150, 243, 1)", // Blue
          "rgba(158, 158, 158, 1)", // Grey
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    indexAxis: "y", 
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        titleColor: "#fff",
        bodyColor: "#fff",
        padding: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: "#e0e0e0", 
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            weight: "bold",
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Box 
      sx={{
        border: "1px solid #e0e0e0",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "20px",
        marginTop: "20px",
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ fontWeight: "bold", marginBottom: "10px" }}
      >
        {title}
      </Typography>
      <Bar data={chartData} options={options} />
    </Box>
  );
};

export default HorizontalBarChart;

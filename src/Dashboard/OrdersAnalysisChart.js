import React from 'react';
import Chart from 'react-apexcharts';

const OrdersAnalysisChart = () => {
  const options = {
    series: [
      {
        name: 'Orders Placed',
        data: [50, 60, 45, 70, 55, 80, 65], // Example data for orders placed
      },
      {
        name: 'Orders Delivered',
        data: [40, 50, 35, 60, 45, 70, 55], // Example data for orders delivered
      },
    ],
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'category',
      categories: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'], // Years for analysis
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <div>
      <Chart options={options} series={options.series} type="area" height={350} />
    </div>
  );
};

export default OrdersAnalysisChart;

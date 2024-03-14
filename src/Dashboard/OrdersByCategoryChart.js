import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';

const OrdersByCategoryChart = () => {
  const categoryData = [
    { name: 'Electronics', percentage: 30 },
    { name: "Men's Clothing", percentage: 40 },
    { name: "Women's Clothing", percentage: 20 },
    { name: 'Jewelry', percentage: 10 },
  ];

  useEffect(() => {
    const options = {
      series: categoryData.map((category) => category.percentage),
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: categoryData.map((category) => category.name),
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };

    // Check if the chart element exists before rendering the chart
    const chartElement = document.querySelector('#chart');
    if (chartElement) {
      const chart = new ApexCharts(chartElement, options);
      chart.render();

      // Cleanup function to destroy the chart
      return () => {
        chart.destroy();
      };
    }
  }, []);

  return <div id="chart" />;
};

export default OrdersByCategoryChart;

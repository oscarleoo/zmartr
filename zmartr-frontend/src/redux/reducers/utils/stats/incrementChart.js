import chartLookup from '../constants/chartLookup';

export default (charts, chartIndex, change) => (
  charts.map((chart, listIndex) => {
    if (listIndex === chartIndex) {
      const currentIndex = Object.keys(chartLookup).find((key) => chartLookup[key] === chart.key);
      const newIndex = parseInt(currentIndex) + change;
      if (newIndex > Object.keys(chartLookup).length - 1) {
        return { key: chartLookup[0], settings: {} };
      }
      if (newIndex < 0) {
        return { key: chartLookup[Object.keys(chartLookup).length - 1], settings: {} };
      }
      return { key: chartLookup[newIndex], settings: {} };
    }

    return chart;
  })
);

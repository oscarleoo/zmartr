import metricLookup from '../constants/metricLookup';

export default (metrics, metricIndex, change) => (
  metrics.map((metric, listIndex) => {
    if (listIndex === metricIndex) {
      const currentIndex = Object.keys(metricLookup).find((key) => metricLookup[key] === metric.key);
      const newIndex = parseInt(currentIndex) + change;
      if (newIndex > Object.keys(metricLookup).length - 1) {
        return { key: metricLookup[0], settings: {} };
      }
      if (newIndex < 0) {
        return { key: metricLookup[Object.keys(metricLookup).length - 1], settings: {} };
      }
      return { key: metricLookup[newIndex], settings: {} };
    }

    return metric;
  })
);

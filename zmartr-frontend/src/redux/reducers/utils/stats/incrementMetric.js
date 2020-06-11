
export default (metrics, metricIndex, change) => (
  metrics.map((metric, listIndex) => {
    if (listIndex === metricIndex) {
      const newIndex = metric.index + change;
      if (newIndex > 5) {
        return { index: 0, settings: {} };
      }
      if (newIndex < 0) {
        return { index: 5, settings: {} };
      }
      return { index: newIndex, settings: {} };
    }

    return metric;
  })
);

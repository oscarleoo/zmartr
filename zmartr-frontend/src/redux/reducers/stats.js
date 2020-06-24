import {
  ADD_TO_TAGS,
  REMOVE_FROM_TAGS,
  ADD_TO_STATUS, REMOVE_FROM_STATUS, ADD_METRIC, NEXT_METRIC, LAST_METRIC, ADD_CHART, ADD_METRIC_SETTING, NEXT_CHART, LAST_CHART,
} from '../actions/stats';
import incrementMetric from './utils/stats/incrementMetric';
import metricLookup from './utils/constants/metricLookup';
import chartLookup from './utils/constants/chartLookup';
import incrementChart from './utils/stats/incrementChart';

const initialState = {
  tagFilter: [],
  statusFilter: [],
  metrics: [{ key: 'Empty' }, { key: 'Empty' }, { key: 'Empty' }, { key: 'Empty' }, { key: 'Empty' }],
  charts: [{ key: 'Empty' }],
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_TAGS: {
      return {
        ...state,
        tagFilter: [...state.tagFilter.slice(), action.payload],
      };
    }
    case REMOVE_FROM_TAGS: {
      return {
        ...state,
        tagFilter: state.tagFilter.filter((tag) => tag !== action.payload),
      };
    }
    case ADD_TO_STATUS: {
      return {
        ...state,
        statusFilter: [...state.statusFilter.slice(), action.payload],
      };
    }
    case REMOVE_FROM_STATUS: {
      return {
        ...state,
        statusFilter: state.statusFilter.filter((tag) => tag !== action.payload),
      };
    }
    case ADD_METRIC: {
      return {
        ...state,
        metrics: state.metrics.map((metric, index) => {
          if (index === action.payload.index) {
            return { key: metricLookup[1], settings: {} };
          }

          return metric;
        }),
      };
    }
    case NEXT_METRIC: {
      return {
        ...state,
        metrics: incrementMetric(state.metrics, action.payload.index, 1),
      };
    }
    case LAST_METRIC: {
      return {
        ...state,
        metrics: incrementMetric(state.metrics, action.payload.index, -1),
      };
    }
    case ADD_METRIC_SETTING: {
      return {
        ...state,
        metrics: state.metrics.map((metric, index) => {
          if (index === action.payload.index) {
            return { ...metric, settings: { ...metric.settings, ...action.payload.setting } };
          }

          return metric;
        }),
      };
    }
    case ADD_CHART: {
      return {
        ...state,
        charts: state.charts.map((chart, index) => {
          if (index === action.payload.index) {
            return { key: chartLookup[1], settings: {} };
          }

          return chart;
        }),
      };
    }
    case NEXT_CHART: {
      return {
        ...state,
        charts: incrementChart(state.charts, action.payload.index, 1),
      };
    }
    case LAST_CHART: {
      return {
        ...state,
        charts: incrementChart(state.charts, action.payload.index, -1),
      };
    }
    default:
      return state;
  }
};

export default statsReducer;

import {
  ADD_TO_TAGS,
  REMOVE_FROM_TAGS,
  ADD_TO_STATUS, REMOVE_FROM_STATUS, ADD_METRIC, NEXT_METRIC, LAST_METRIC,
} from '../actions/stats';
import appendNewMetric from './utils/stats/appendNewMetric';
import incrementMetric from './utils/stats/incrementMetric';

const initialState = {
  tagFilter: [],
  statusFilter: [],
  metrics: [],
  charts: [],
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
        metrics: appendNewMetric(state.metrics),
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
    default:
      return state;
  }
};

export default statsReducer;

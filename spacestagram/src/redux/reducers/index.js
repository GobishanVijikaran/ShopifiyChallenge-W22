// import { combineReducers } from 'redux';
// import { initialState } from './initialState';
// import { LIKED_IMAGES } from '../actions/index';

// export const REDUCER_STATUS = {
//   init: 'init',
//   pending: 'pending',
//   success: 'success',
//   error: 'error',
// };

// const imagesReducer = (state = initialState.images, action) => {
//   switch (action.type) {
//     case LIKED_IMAGES.CLEAR: {
//       return {
//         ...state,
//       };
//     }
//     default: 
//       return state;
//   }
// }
// const blockReasonsReducer = (state = initialState.blockReasons, action) => {
//   switch (action.type) {
//     case BLOCK_REASONS.CLEAR: {
//       return {
//         ...state,
//         reasons: initialState.blockReasons.reasons,
//       };
//     }
//     case BLOCK_REASONS.TOGGLE: {
//       const value = action.payload;
//       let reasons = state.reasons;
//       const key = Object.keys(reasons).find((k) => blockModal.reasons[k] === value);
//       return {
//         ...state,
//         reasons: {
//           ...state.reasons,
//           [key]: {
//             ...state.reasons[key],
//             selected: !state.reasons[key].selected,
//           },
//         },
//       };
//     }
//     case BLOCK_REASONS.SHOWN: {
//       const isShown = action.payload;
//       return {
//         ...state,
//         shown: isShown,
//       };
//     }
//     case BLOCK_REASONS.BLOCKED: {
//       const isBlocked = action.payload;
//       return {
//         ...state,
//         blocked: isBlocked,
//       };
//     }
//     case BLOCK_REASONS.FAVOURITED: {
//       const isFavorited = action.payload;
//       return {
//         ...state,
//         favorited: isFavorited,
//       };
//     }
//     default:
//       return state;
//   }
// };

// const messagesReducer = (state = initialState.messages, action) => {
//   switch (action.type) {
//     case MESSAGE_STORE.ADD: {
//       const newMessage = action.payload;
//       const { jobId } = newMessage;

//       let failedMessagesForJob = state.failedMessageStore[jobId] ?? [];

//       // only add the message if it doesn't already exist in the array
//       if (!failedMessagesForJob.find((message) => message.createdAt === newMessage.createdAt)) {
//         failedMessagesForJob.push(newMessage);
//       }
//       const newFailedMessageStore = {
//         ...state.failedMessageStore,
//         [jobId]: failedMessagesForJob,
//       };
//       // storing failed messages in async storage
//       storeFailedMessages(JSON.stringify(newFailedMessageStore));
//       return {
//         ...state,
//         failedMessageStore: newFailedMessageStore,
//       };
//     }
//     case MESSAGE_STORE.REMOVE: {
//       const removeMessage = action.payload;
//       const { jobId } = removeMessage;
//       const failedMessagesForJob = state.failedMessageStore[jobId] ?? [];
//       const newFailedMessageStore = {
//         ...state.failedMessageStore,
//         [jobId]: failedMessagesForJob.filter(
//           (message) => message.createdAt !== removeMessage.createdAt,
//         ),
//       };
//       // storing failed messages in async storage
//       storeFailedMessages(JSON.stringify(newFailedMessageStore));
//       return {
//         ...state,
//         failedMessageStore: newFailedMessageStore,
//       };
//     }
//     case MESSAGE_STORE.REQUEST: {
//       return {
//         ...state,
//         status: REDUCER_STATUS.pending,
//       };
//     }
//     case MESSAGE_STORE.SUCCESS: {
//       const failedMessages = action.payload;
//       const currDate = spacetime.now();
//       const newFailedMessageStore = {};
//       // filtering out failed messages that are 30 or more days old
//       Object.keys(failedMessages).forEach((key) => {
//         const filteredMessages = failedMessages[key].filter((message) => {
//           const diff = spacetime(currDate).diff(message.createdAt, 'days');
//           if (diff <= 30) {
//             return message;
//           }
//         });
//         newFailedMessageStore[key] = filteredMessages;
//       });
//       return {
//         ...state,
//         failedMessageStore: newFailedMessageStore,
//         status: REDUCER_STATUS.success,
//       };
//     }
//     case MESSAGE_STORE.ERROR: {
//       return {
//         ...state,
//         status: REDUCER_STATUS.error,
//       };
//     }
//     default:
//       return state;
//   }
// };


// export const rootReducer = combineReducers({
//   jobs: jobsReducer,
//   alerts: alertsReducer,
//   currentUser: currentUserReducer,
//   activeJob: activeJobReducer,
//   blockReasons: blockReasonsReducer,
//   messages: messagesReducer,
//   jobsMap: jobsMapReducer,
// });

// export { initialState } from './initialState';
// export default rootReducer;

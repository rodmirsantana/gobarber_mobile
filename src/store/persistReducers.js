import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistConfig = {
    key: 'gobarber',
    version: 0,
    whitelist: ['auth', 'user'],
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducers);

  return persistedReducer;
};

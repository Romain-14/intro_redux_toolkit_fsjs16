import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './slices/counter';

// configuration du store sous forme d'objet en rendant disponible la state value dans la key counter
const store = configureStore({
    reducer: {
        counter: counterReducer,
        
    }
})

export default store;
import { createSlice } from '@reduxjs/toolkit';

// on initialise une valeur initiale qui va servir de base à notre state lors des modification du aux fonctions réductrices
// cette valeur sera initialisé qu'une seule fois au lancement de l'app' !!
const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    
    name: 'counter',
    initialState, // bien respecter la casse !!! correspond à notre const initialState plus haut  
    // fonctions reductrice appelés dans nos composants via le hook useDispatch
    reducers: {
        increment(state, action ){
            console.log('increment-->', state)
            console.log('increment-->', action) // si définis juste au dessus, va créer une propriété payload qui vaudra undefined 
            // redux/toolkit permets de muter une state grâce à la librairie Immer 
            state.value ++;
        },
        decrement(state){
            state.value --;
        },
        incrementBy10(state, action){
            // en transmettant un argument au moment du dispatch, on a accès à une propriété native qui va stocker cette valeur
            console.log(action);
            state.value += action.payload;
        }
    }
})

// permets d'importer dans nos composants les fonction réductrices pour les invoquer
export const {increment, decrement, incrementBy10} = counterSlice.actions;
// récupéré dans le fichier store.js pour configurer le store
export default counterSlice.reducer
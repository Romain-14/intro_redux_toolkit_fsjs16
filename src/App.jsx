import {useDispatch, useSelector} from 'react-redux';
import {increment, decrement, incrementBy10} from './redux/slices/counter';

function App() {
  // le dispatch permets d'executer la fonction reductrices (l'action)
  const dispatch = useDispatch();
  // useSelector permets de s'abonner aux states qu'on a besoin 
  const {value} = useSelector(state => ({
    ...state.counter,
  }))

  return (
    <main>
      <h1>intro redux</h1>

      <p>{value}</p>
      {/* au clic sur un bouton on dispatch, on effectue une action particulière vis à vis de la fonction utilisée -cf: le fichier slices/counter.js*/}
      <button onClick={() => dispatch(increment())}>increment +1 </button>
      <button onClick={() => dispatch(decrement())}>increment -1 </button>    
      <button onClick={() => dispatch(incrementBy10(10))}>increment by 10 </button>    
    </main>

  );
}

export default App;

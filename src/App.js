import {Provider} from "react-redux"
import Header from './components/Header';
import Body from './components/Body';
import apppStore from "./utils/appStore";
function App() {
  return (
   <Provider store={apppStore} >
     <div >
          
          <Body/>
    </div>
   </Provider>
  );
}

export default App;

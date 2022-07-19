import './App.css';
import SearchContainer from "./components/searchContainer";
import {Provider} from "react-redux";
import store from "./store/store";
import SearchResultContainer from "./components/searchResultContainer";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
      <SearchContainer />
            <SearchResultContainer />
        </Provider>
    </div>
  );
}

export default App;

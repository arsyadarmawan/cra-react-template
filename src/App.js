import logo from './logo.svg';
import './App.css';
import Article from "./article/article";
import FormMultiple from "./text/formmultiple";
import Formbasicvalidation from "./text/formbasicvalidation";
import FormMultipleBasicValidation from "./text/formmultiplevalidation";
import Button from "./button/button";
import ButtonState from "./state/button-useState";

function App() {
  return (
      <div className='App'>
        {/*<Article/>*/}
        {/*<FormMultiple />*/}

        {/*<Formbasicvalidation />*/}

        <FormMultipleBasicValidation />

          <Button  >Test</Button>
          <ButtonState />
      </div>
  );
}

export default App;

// import de bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// import de la police
import 'typeface-londrina-solid';
import './css/App.css';
import { BoutonGeneral, CheckBox, LevelNumber, ListeDeroulante, NameText } from "./components/forms/Inputs";
import { TopBarre } from "./components/font/TopBarre";

function App() {
  return <div className="container" style={{backgroundColor: '#1D1B20',
    minHeight: '100vh', fontFamily:'Londrina Solid', fontSize:'30px'}}>
      <div className='row'>
        <div className='col-12'>
          <TopBarre/>
        </div>
        <div className='col-12' style={{paddingTop:'14%'}}>
          <FormCreateBuild/>
        </div>
      </div>
    </div>
}


/**
 * Formulaire de création du build.
 * @returns 
 */
export function FormCreateBuild () {

  const options = ['Pvp', 'Pve', 'Boss', 'Donjon']

  return <div className='row'>
    <div className='col-3'></div>
    <div style={{backgroundColor:'#D9D9D9'}} className='col-6'>
      <form>
        <div className='row'>
          <div className='col-5 column'>
            <ListeDeroulante label="Class" options={options}/>
            <ListeDeroulante label="Price" options={options}/>
          </div>
          <div className='col-3 column'>
            <CheckBox labels={options}/>
          </div>
          <div className='col-4 column'>
            <div style={{paddingTop:'5%'}}>
            <LevelNumber/>
            </div>
            <div style={{paddingTop:'5%'}}>
            <ListeDeroulante label="Style" options={options}/>
            </div>
          </div>
          <div className='col-12 column'>
            <NameText/>
          </div>
          <div className='col-12 column'>
            <BoutonGeneral value={'+'} fontSize={'40'} border={'5'}/>
          </div>
        </div>
      </form>
    </div>
  </div>
}

export default App;

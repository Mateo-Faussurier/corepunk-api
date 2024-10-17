import { BoutonGeneral } from "../forms/Inputs"

/**
 * Barre en haut de page
 * @returns 
 */
export function TopBarre () {
    return <div className="row align-items-center" style={{backgroundColor: '#798C7B', color: 'white', fontFamily:'Londrina Solid', fontSize:'45px'}}>
        <div className="col-5">
            <div>
                <img src="assets/png/logo.png" alt="logo du site web" style={{width:'8%', padding:'1%'}}/>
            </div>
        </div>
        <div className="col-5">COREBUILD</div>
        <div className="col-2">
            <BoutonGeneral value="Connection" border="2" fontSize="15"/>
        </div>
    </div>
}
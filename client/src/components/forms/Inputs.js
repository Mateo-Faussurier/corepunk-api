import { useState } from "react"

/**
 * Renvoie une liste déroulante avec le label et les options en paramètres.
 * @param {string} label
 * @param {string[]} options 
 * @returns 
 */
export function ListeDeroulante({label,options}){
    return <div className="column">
            <div>
                <label style={{fontWeight:'900'}}>{label}</label>
            </div>
            <div>
                <select id="class" style={{fontSize:'25px',fontWeight:'400', width:'100%', borderRadius:'10px', border:'none'}}>
                    <option value="">Select a class</option>
                    {options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            </div>
        </div>
}

/**
 * Renvoie des checkbox avec un label depuis la liste des labels entrée
 * @param {string[]} labels
 * @returns 
 */
export function CheckBox({labels}) {
    const [checked, setChecked] = useState(false)

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setChecked((prevChecked) => ({
          ...prevChecked,
          [name]: checked,
        }));
      };


    return <div className="column">
        {labels.map(label => (
            <div className="row" key={label}>
                <div className="col-7">
                    <label>{label}</label>
                </div>
                <div className="col-5">
                    <input type="checkbox" name={label} checked={checked[label]} onChange={handleCheckboxChange}></input>
                </div>
            </div>
        ))}
    </div>
}

/**
 * Entrée du lvl du build
 * @returns 
 */
export function LevelNumber() {
    return <div className="row">
            <div className="col-3">
                <label style={{fontWeight:'900'}}>Lvl</label>
            </div>
            <div className="col-5">
                <input type="number" style={{ width: '100%', fontSize:'25px' }} value="0"/>
            </div>
        </div>
}

/**
 * Entrée de text avec le label Name.
 * @returns 
 */
export function NameText() {
    const [isPrivate, setIsPrivate] =useState(false)
    const togglePrivacy = () => {
        setIsPrivate(!isPrivate)
    }

    return <div className="row">
            <div className="col-12">
                <label>Name</label>
            </div>
            <div className="col-11">
                <input type="text" className="form-control" placeholder="Enter a name..."/>
            </div>
            <div className="col-1">
                <img src={isPrivate ? "assets/svg/eye-slash.svg" : "assets/svg/eye.svg"} 
                alt="Rend privée le build"
                title={isPrivate ? "Private" : "Public"}
                onClick={togglePrivacy}
                style={{width:'130%', paddingBottom:'10%'}}/>
            </div>
        </div>
}

/**
 * Crée un bouton personnalisé.
 * @param {string} value
 * @param {string} fontSize
 * @param {string} border
 * @returns 
 */
export function BoutonGeneral({value, fontSize, border}){
    const [boutonMouseOver, setBoutonMouseOver] = useState(false)
    const handleMouseEnter = () => {
        setBoutonMouseOver(true)
    }

    const handleMouseLeave = () => {
        setBoutonMouseOver(false)
    }
    return <button className="btn btn-primary form-control" 
    onMouseEnter={handleMouseEnter} 
    onMouseLeave={handleMouseLeave}
    type="button" 
    style={{backgroundColor:'#4BE05A',
        border: boutonMouseOver ? border+"px solid white" : border+"px solid transparent",
        fontWeight:'400',
        fontSize:fontSize+"px"}}
    value={value}>{value}</button>
}
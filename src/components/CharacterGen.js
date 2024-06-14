import React, {useState} from "react";
import RandomNumberGenerator from "./RandomNumberGenerator";
import FighterImage from "../Pics/Fighter.jpg";
import MageImage from "../Pics/Mage.jpg";
import ThiefImage from "../Pics/Thief.jpg";
import CrusaderImage from "../Pics/Crusader.jpg"
import ExplorerImage from "../Pics/Explorer.jpg"
import VenturerImage from "../Pics/Venturer.jpg"
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';






const CharacterSheet = () => {

    const { getAccessTokenSilently, user } = useAuth0();
    const [message, setMessage] = useState("");

    const [text, setText] = useState({

        name: "",

        level: "",

        health: "",

        experience:""

        

    });

    const [selectClass, setSelectClass] = useState();

    const [stats, setStats] = useState({
        Strength: 0,

        Intelligence: 0,

        Will: 0,

        Dexterity: 0,

        Constitution: 0,

        Charisma: 0,

    })

    const [selectedImage, setSelectedImage] = useState("");

    const generateStats = () => {

        const newStats = RandomNumberGenerator();

    
        
        setStats(newStats);

    }

    const handleChange = (e) => {

        const {name, value} = e.target;

        setText((prevState) => {

            return {

                ...prevState,

                [name]: value,

              };
        })


    }

    const handleClassSelect = (className) => {
        setSelectClass(className);
        switch (className) {
          case "Fighter":
            setSelectedImage(FighterImage);
            break;
          case "Mage":
            setSelectedImage(MageImage);
            break;
          case "Thief":
            setSelectedImage(ThiefImage);
            break;
          case "Crusader":
            setSelectedImage(CrusaderImage);
            break;
          case "Explorer":
            setSelectedImage(ExplorerImage);
            break;
          case "Venturer":
            setSelectedImage(VenturerImage);
            break;
          default:
            setSelectedImage("");
        }
      };

    

    

    const renderClassImage = () => {

        switch(selectClass) {

            case 'Fighter':

                return <img src= {FighterImage} alt = "Fighter"/>

            case 'Mage':

                return <img src = {MageImage} alt ="Mage"/>

            case 'Thief':

                return <img src= {ThiefImage} alt = "Thief"/>

            case 'Crusader':

                return <img src= {CrusaderImage} alt = "Crusader"/> 
                
            case 'Explorer':

                return <img src= {ExplorerImage} alt = "Explorer"/>  

            case 'Venturer':

                return <img src= {VenturerImage} alt = "Venturer"/> 

            default:

                return null;

        }
    }

    const saveCharacter = async () => {
        try {
          console.log("Save button clicked");
          const token = await getAccessTokenSilently();
          console.log("Token:", token);
      
          const characterData = {
            name: text.name,
            level: text.level,
            health: text.health,
            experience: text.experience,
            class: selectClass,
            stats: stats,
            email: user.email, 
            image: selectedImage
          };
      
          console.log("Character Data:", characterData);
      
          const response = await axios.post(
            `${process.env.REACT_APP_API_SERVER_URL}/characters`,
            characterData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
          console.log("Save response:", response.data);
            setMessage("Character saved successfully!");
            } catch (error) {
            console.error("Error saving character:", error);
            console.log("Error response:", error.response);
            setMessage("Error saving character. Please try again.");
            }
  };




   return (

    <div>

       <div class ="masterContainer">

        <div class="statContainer">

            {Object.entries(stats).map(([statName, statValue]) =>(

                <div key={statName} className={statName}>

                    <p>{statName}: {statValue}</p>

                    </div>

            ))}

            

        </div>

        <div class = "mainContainer">

            <div class="infoContainer">

                <input type="text" placeholder="Name" name="name" id="nameInput" value= {text.name} onChange={handleChange} /> 

                <input type="text" placeholder="Level" name="level" id="levelInput" value={text.level} onChange= {handleChange} /> 

                <input type="text" placeholder="Experience" name="experience" id="expInput" value= {text.experience} onChange={handleChange}/> 

                <input type="text" placeholder="Health" id="healthInput" name="health" value= {text.health} onChange={handleChange} /> 

                

                

            </div>

            <br/>

            <div class="classContainer">

                <select value={selectClass} onChange={(e) => handleClassSelect(e.target.value)}>

                                <option value="">Pick Class</option>

                                <option value="Fighter">Fighter</option>

                                <option value="Mage">Mage</option>

                                <option value="Crusader">Crusader</option>

                                <option value="Thief">Thief</option>

                                <option value="Explorer">Explorer</option>

                                <option value="Venturer">Venturer</option>

                               

                                
                            </select>

                    

                    <div class = "classImage">

                        {renderClassImage()}

                    </div>

                    <br/>

                    <button type ="button" onClick={generateStats} >Generate </button>

                    <br/>

                    <button type="button" onClick={saveCharacter}>Save</button>

            </div>

        </div>  

        </div>
        {message && <p>{message}</p>}
    </div>
   ) 
}

export default CharacterSheet;



import React, { useState } from "react";
import { Button, Card, Row, Col  } from 'react-bootstrap';
import axios from 'axios';
import App from '../App.css'
import { useAuth0 } from "@auth0/auth0-react";

function SavedChar(props) {


    const { getAccessTokenSilently } = useAuth0();
    const [hidden, setHidden] = useState(true);
    const [message, setMessage] = useState("");

    // const [userData, setUserData] = useState();
    

    const { user, onDelete } = props;

    const handleToggleDetails = () => {

        setHidden(!hidden)
        

        console.log("Button clicked for user:", user);

        
        
    

        
        

    };

    const deleteCharacter = async () => {
        try {
          const token = await getAccessTokenSilently();
          console.log("Token:", token);
          console.log("Deleting character:", user.charactername, user.email);
    
          const response = await axios.delete(
            `${process.env.REACT_APP_API_SERVER_URL}/characters`,
            {
              data: { charactername: user.charactername, email: user.email },
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
          console.log("Delete response:", response.data);
          setMessage("Character deleted successfully!");
          onDelete(); 
        } catch (error) {
          console.error("Error deleting character:", error);
          console.log("Error response:", error.response);
          setMessage("Error deleting character. Please try again.");
        }
      };

    return (
        <Card className="card-container">
            <div className={hidden ? "" : "card-body-expanded"}>
                {user.image && <Card.Img variant="top" src={user.image} alt={user.class} className={hidden ? "card-img-top" : "card-img-left"} />}
                <Card.Body className={hidden ? "" : "stats-container"}>
                    <Card.Title>{user.charactername || 'No Name'}</Card.Title>
                    <Card.Text>
                        {!hidden && (
                            <div>
                                <p>Class: {user.class}</p>
                                <p>Level: {user.userlevel}</p>
                                <p>Health: {user.userhealth}</p>
                                <p>Strength: {user.strength}</p>
                                <p>Intelligence: {user.intelligence}</p>
                                <p>Will: {user.will}</p>
                                <p>Dexterity: {user.dexterity}</p>
                                <p>Constitution: {user.constitution}</p>
                                <p>Charisma: {user.charisma}</p>
                                <p>Email: {user.email}</p>
                                <Button variant="danger" onClick={deleteCharacter}>Delete</Button>
                            </div>
                        )}
                    </Card.Text>
                    <div className="button-container">
                        <Button variant="primary" onClick={handleToggleDetails}>
                            {hidden ? 'Show Stats!' : 'Hide!'}
                        </Button>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}
export default SavedChar;
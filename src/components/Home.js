import { useEffect, useState } from "react";
import axios from 'axios';
// import './App.css';
import { jwtDecode } from "jwt-decode";
import SavedChar from "./SavedChar";
import { useAuth0 } from '@auth0/auth0-react';



function Home () {
    
    const [characters, setCharacters] = useState([]);

    // const [users, setUsers] = useState([]);
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    const fetchData = async () => {
      try {
        const token = await getAccessTokenSilently();
        const response = await axios.get(`${process.env.REACT_APP_API_SERVER_URL}/users/characters`, {
          headers: {
            Authorization: `Bearer ${token}` 
          }
        });
        setCharacters(response.data);
        console.log('Data fetched:', response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      if (isAuthenticated) {
        fetchData();
      }
    }, [isAuthenticated]);
  
    if (!isAuthenticated) {
      return <div>Loading...</div>;  
    }

    

    

    return (

      <div>
        <h1>Characters</h1>
          <div>
              {characters.map((character, index) => (
                  <SavedChar key={index} user={character} onDelete={fetchData} />
              ))}
          </div>
      </div>

       

    );


}



export default Home;


import React, { useState, useEffect } from 'react'; // Importing React, useState, and useEffect hooks from React library
import { View, Text } from 'react-native'; // Importing View and Text components from React Native library
import axios from 'axios'; // Importing Axios for making API requests

const MobileList = () => { // Defining a functional component called MobileList
  const [mobiles, setMobiles] = useState([]); // Initializing state variable 'mobiles' as an empty array using useState hook

  useEffect(() => { // Using useEffect hook to perform side effects (like data fetching) in functional components
    axios.get('https://my-json-server.typicode.com/SanviBhelkar/Unit-V_CA_Fake_Rest_API-III')
      .then(response => { // Handling successful response
        setMobiles(response.data); // Updating the 'mobiles' state with the fetched data
      })
      .catch(error => { // Handling errors
        console.error('Error fetching mobile data:', error); // Logging the error to the console
      });
  }, []); // The empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <View> {/* Rendering a View component */}
      {mobiles.map(mobile => ( // Mapping through the 'mobiles' array and rendering a Text component for each mobile
        <Text key={mobile.id}>{mobile.name}</Text> // Displaying the name of each mobile
      ))}
    </View>
  );
}

export default MobileList; // Exporting the MobileList component as default

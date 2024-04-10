// // Header.js

// import React from 'react';
// import { View, Text } from 'react-native';

// const Header = () => {
//   return (
//     <View>
//       <Text>This is the header</Text>
//     </View>
//   );
// }

// export default Header;


// Header.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>This is the header</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'lightblue',
    padding: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Header;

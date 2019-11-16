import React from 'react';
import { View, Text } from 'react-native';

export const SchemaView = ({ realm }) => {
    const { schema } = realm;
    const schemaText = JSON.stringify(schema);
    
    return (
      <View>
        <Text>{schemaText}</Text>
      </View>
    );
};

export default SchemaView;
import React from 'react';
import { View, Text } from 'juce-blueprint';

interface Props {

}

function Patch({}: Props) {
  // @ts-ignore
  const paramIDs = getAllParameterIDs();

  const manifest = getManifest();

  // @ts-ignore
  print ("\nParameter IDs: " + JSON.stringify (paramIDs, null, 2));

  return (
    <View {...styles.container}>
      <View {...styles.paramHolder}>
        <Text>Tests</Text>
      </View>
    </View>
  );
}

const styles = {
  container: {
    'width': '100%',
    'height': '100%',
    'background-color': 'ff1719',
    'justify-content': 'center',
    'align-items': 'center',
  },
  paramHolder: {
    'flex': 1.0,
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'flex-start',
    'align-items': 'flex-start',
    'align-content': 'flex-start',
    'padding': '4%',
  },
};

export default Patch;

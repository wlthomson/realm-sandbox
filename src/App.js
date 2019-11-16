import React, { useState } from 'react';

import Realm from 'realm';
import { Model } from './realm';

import { SchemaView } from './components';

const App = () => {
  const [ realm, setRealm ] = useState();

  if (!realm) {
    Realm.open({schema: [Model]}).then(realm => {
      setRealm(realm);
    }).catch();

    return null;
  }
  
  return <SchemaView realm={realm} />;
};

export default App;

// we are creating a ccustom function which will act as a store provider.
// that is all the logic available here , can be used anywhere in the react app.
// we are using here a children prop,it means that whatever component is encapsulated with storeprovider,
// will become its child component;
import React from 'react';

// we have to import the context or store we created here in storeprovider;
import InformationStore from './InformationStore';
const StoreProvider = ({ children }) => {
    
    let a = 20;
    let b = [1, 2, 3]
    let c ="snehal"
    return (
        <InformationStore.Provider value={{a,b,c}}>
            {children}
       </InformationStore.Provider>
    );
}

export default StoreProvider;

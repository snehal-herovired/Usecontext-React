import React from 'react';
import { useContext } from 'react';
import InformationStore from '../context/InformationStore';
const Title = ({ a }) => {
    // we will usecontext here to use the created context;
    // we creatred infromationSotre context and this context has to be used inside useContext;
    let ctx = useContext(InformationStore)
    console.log(ctx);
    return (
        <div>
            Title {ctx.a}
        </div>
    );
}

export default Title;

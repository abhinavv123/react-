import {createStore} from 'redux';
const initialtable={ tableArray:[]};

const reducer=(state=initialtable.tableArray,action)=>{
    let statecopy=Object.assign({},state);
    switch(action.type)
    {
        case 'Post':
            let newtablearr=action.tableArray;
            return newtablearr;
        default:
            return state;
    }
}

export const store=createStore(reducer);
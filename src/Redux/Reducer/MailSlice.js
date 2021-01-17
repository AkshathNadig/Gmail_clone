import * as actionTypes from '../Action/ActionType';

const initialState ={
   name:'Mail',
   sendMessageIsOpen:false
};

const MailSliceReducer =( state =initialState,action )=>{
    switch(action.type){
        case actionTypes.OPEN_SEND_MESSAGE:
            return{
                ...state,
                sendMessageIsOpen:true
            }
        case actionTypes.CLOSE_SEND_MESSAGE:
            return{
                ...state,
                sendMessageIsOpen:false
            }
        default:
            return state;
    }
}

export default MailSliceReducer
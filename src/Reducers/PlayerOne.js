const initialState={
    name:"anil",
    score:50
}

const playeroneReducer=(state=initialState,action)=>{
    const {type,payload}=action;

    switch(type){
        case 'INC-PLAYER-ONE':
            return {...state,score:state.score+1}
    }

}
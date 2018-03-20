

export default function (state=null,action){
// console.log("activeBook",state,action)
switch(action.type)
{
    case 'Selected_Book':
    return ({type:action.type,
        payload:action.payload})
    
   
}
return state
}
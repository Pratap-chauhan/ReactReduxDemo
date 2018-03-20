import React from 'react';

export function SelectBook (Book){
// console.log(">>>>>>>>>",Book)
return {
    type : 'Selected_Book',
    payload:Book
}

} 
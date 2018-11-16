import React from 'react';

//used functional component as we only need props
const validation = (props) =>
{
    let txtValidationMsg = "";
    if (props.userInputLength >= 5 && props.userInputLength<= 7){
        txtValidationMsg = "Text is normal length";

    }
    else if (props.userInputLength  > 7){
        txtValidationMsg = "Text is long enough";
    }
    else{
        txtValidationMsg = "Text is short";
    }
  return <div>
  
 
  <p>
 {txtValidationMsg}
  </p>
  </div>
};

export default validation

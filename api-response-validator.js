function validateApiResponse(status, hasData){
    if(status === 200 && hasData === true) {
        return("API response valid")
      }
      else {return("API response invalid");}
    }
    let validate = validateApiResponse(200, true);
    console.log(validate);
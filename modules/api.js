export const get_user_prof = async (user_name) =>{
    let response_info= {
        status:404,
        data:null
    }
    const URL =  'https://api.github.com/users/'
    const response = await fetch( URL + user_name)
    
    if(response.status == 200){
        response_info.data = response.json()
        response_info.status = response.status
    }

    return response_info

}


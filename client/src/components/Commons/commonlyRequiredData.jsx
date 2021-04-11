const TOKEN="userToken";

export const storeUserToken = (token) =>{
    localStorage.setItem(TOKEN,token)
}

export const getToken = () => {
    localStorage.getItem(TOKEN)
}

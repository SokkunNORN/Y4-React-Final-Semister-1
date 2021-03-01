export const setCachedUser = data => {
    const user = {
        token: data
    };
  
    sessionStorage.setItem("user", JSON.stringify(user));
};
  
export const getCachedUser = () => {
    const localData = sessionStorage.getItem("user")
        ? JSON.parse(sessionStorage.getItem("user"))
        : {};

    return {
        token: localData.token
    };
};
  
export const authenticated = () => getCachedUser().token;
  
export const cache = getCachedUser();
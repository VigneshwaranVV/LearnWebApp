export const cors_url = "https://cors-anywhere.herokuapp.com/"

export const environment = {
    local: "http://localhost:3002",
    prod: cors_url+"https://usermanagement-node.herokuapp.com"
}
const api = environment.prod
export const apiList = {
    login_POST: api + "/user/login",
    logout_POST: api + "/user/logout",
    registeUser_POST: api +"/user/register",
    deleteUser_POST: api +"/user/deleteUser"
}



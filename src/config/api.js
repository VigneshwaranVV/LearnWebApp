
export const environment = {
    local: "http://localhost:3000",
    prod: "https://usermanagement-node.herokuapp.com"
}
const api = environment.prod
export const apiList = {
    login_POST: api + "/user/login",
    logout_POST: api + "/user/logout"
}



export const cors_url = "https://cors-anywhere.herokuapp.com/"
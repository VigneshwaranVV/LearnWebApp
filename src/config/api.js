export const cors_url = "https://cors-anywhere.herokuapp.com/"

export const environment = {
    local: "http://localhost:3002",
    dev: "https://usermanagement-node.herokuapp.com"
}
const api =environment[process.env.CONN_ENV] || environment.dev
console.log("-----api.js==>",process.env)
export const apiList = {
    login_POST: api + "/user/login",
    logout_POST: api + "/user/logout",
    registeUser_POST: api +"/user/register",
    deleteUser_POST: api +"/user/deleteUser",
    updateUser_POST: api +"/user/updateUser",
}



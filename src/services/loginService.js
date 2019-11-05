import { apiList } from "../config/api";

const LoginService = async (loginBody) => {
    try {
        const data = await fetch(apiList.login_POST, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginBody)
        });
        const responseData = await data.json();
        return responseData;
    } catch (error) {
        console.log("Error in Login ==> " + error);
        return false;
    }
};


export default LoginService
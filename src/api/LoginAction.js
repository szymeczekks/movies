// import { API_URL, API_KEY } from "../constants/api";
// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: `Bearer ${API_KEY}`,
//     }
// };

export async function loginAction() {
    // try {
    //     const response = await fetch(`${API_URL}/authentication/token/new`, options);
    //     if (!response.ok) {
    //         throw ('Network response was not ok');
    //     }
    //     const data = await response.json();
    //     window.localStorage.setItem('request_token', data.request_token);
    //     window.open(`https://www.themoviedb.org/authenticate/${data.request_token}`, "_self");
    // } catch(err) {
    //     console.error(err);
    // }
    console.log('Login action triggered');
}
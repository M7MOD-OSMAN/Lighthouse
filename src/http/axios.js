import axios from 'axios';

const authAPI = 'https://dmgian.corp-dmg.com/mvapp-api/auth.php';
const baseAPI = 'https://dmgian.corp-dmg.com/mvapp-api/api.php';

const getOTP = async (phone) => {

    let postData = JSON.stringify({
        email: "pointing@thelighthousebymv.com",
        password: "TheLightHouse@MountVew4872",
    });
    
    let responseValue = false;

    await axios.post(
        authAPI,
        postData,
        { headers: { 'Content-Type': 'application/json' } }
    ).then(async (postResult) => {
        postResult = postResult.data;
        if (postResult.message == "Successful login." && postResult.message != undefined) {
            postData = JSON.stringify({
                jwt: postResult.jwt,
                action: "verifyUser",
                phone: phone,
                pointLight: true
            });

            await axios.post(
                baseAPI,
                postData,
                { headers: { 'Content-Type': 'application/json' } }
            ).then((postResult) => {
                postResult = postResult.data;
                if (postResult > 1) {
                    responseValue = postResult;
                }
            })
        }
    })

    return responseValue;
}

const getAviPoints = async () => {

    let AviPoints = 0;

    await axios.get(
        "https://mv.collardpay.com/api/collardtopup/v2/getpoints/" + localStorage.getItem("PhoneNumber"),
        { headers: { 'Content-Type': 'application/json' } }
    ).then(async (postResult) => {
        AviPoints = postResult.data.points;

        if (!(AviPoints > 0)) {
            AviPoints = 0;
        }
    })

    return AviPoints;
}



const logout = () => {
    sessionStorage.removeItem('loginStatus')

    window.location.href = '/'
}

export { getOTP, getAviPoints, logout }

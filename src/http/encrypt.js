import CryptoJS from "crypto-js";


const secretPass = "ilaufniuywebnfi43q@#@$7@#$%^nprfx83h9odfnsiyNO87ncgifnq34i4234%^%$^&hrqp98cnh@#$@#$@#4IUHNZDFYAUFGINE63Q47";

const CryptoJSAesJson = {
    stringify: function (cipherParams) {
        const vbJsonString = {
            nhctre: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
        };
        if (cipherParams.iv) {
            vbJsonString['oisdc'] = cipherParams.iv.toString()
        };
        if (cipherParams.salt) {
            vbJsonString['arsv'] = cipherParams.salt.toString()
        };
        return JSON.stringify(vbJsonString);
    },
    parse: function (jsonStr) {
        const vbJsonParse = JSON.parse(jsonStr);
        const cipherParams = CryptoJS.lib.CipherParams.create({
            ciphertext: CryptoJS.enc.Base64.parse(vbJsonParse.nhctre)
        });
        if (vbJsonParse.oisdc) {
            cipherParams['oisdc'] = CryptoJS.enc.Hex.parse(vbJsonParse.oisdc)
        }
        if (vbJsonParse['arsv']) {
            cipherParams.salt = CryptoJS.enc.Hex.parse(vbJsonParse.arsv)
        }
        return cipherParams;
    }
}

const encryptData = (decrypted) => {
    const data = CryptoJS.AES.encrypt(JSON.stringify(decrypted), secretPass, { format: CryptoJSAesJson }).toString();
    return data;
};

const decryptData = (encryted) => {
    const data = JSON.parse(CryptoJS.AES.decrypt(JSON.stringify(encryted), secretPass, { format: CryptoJSAesJson }).toString(CryptoJS.enc.Utf8));
    return data;
};

export { encryptData, decryptData };
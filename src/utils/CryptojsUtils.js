let CryptoJsUtils = require('crypto-js');

const salt = process.env.SALT || "defaultSalt";

export function encypt (text ){
    const cipherText = CryptoJsUtils.AES.encrypt(text,salt).toString();
    return cipherText;
}

export function decrypt (cipherText){
    const byte = CryptoJsUtils.AES.decrypt(cipherText,salt);
    const originText = byte.toString(CryptoJsUtils.enc.Utf8);
    return originText;
}
import bcrypt from "bcryptjs";
import crypto from 'crypto-js'
import errHandler from "./errHandler";

export function hashString(strInput) {
  return new Promise(function (resolve, reject) {
    try {
      if (strInput.length > 0) {
        bcrypt.genSalt(10, function (err, salt) {
          bcrypt.hash(strInput, salt, function (err, hash) {
            resolve(hash);
          });
        });
      } else {
        reject("NULL_INPUT_RECVD");
      }
    } catch (error) {
      throw new errHandler(error);
    }
  });
}

export function compareHashAndText(strPassword, strHashPassword) {
  return new Promise(async function (resolve, reject) {
    try {
      if (strPassword && strHashPassword) {
        const match = await bcrypt.compareSync(strPassword, strHashPassword);
        resolve(match);
      } else {
        reject("NULL_INPUT_RECVD");
      }
    } catch (error) {
      throw new errHandler(error);
    }
  });
}

export async function encryptString(strInput: string) {
  if (!strInput) return strInput;
  let strEncryptString = await crypto.AES.encrypt(
    strInput,
    "ABDU"
  );
  return strEncryptString.toString();
}

export async function decryptString(strInput: string) {
  if (!strInput) return strInput;
  let strDecrypt = await crypto.AES.decrypt(
    strInput,
    "ABDU"
  );
  return strDecrypt.toString(crypto.enc.Utf8);
}
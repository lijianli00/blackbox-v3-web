import { JSEncrypt } from 'jsencrypt'

// 公钥
const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCtrO3ZQTT1aOWToritHcXVDFDzxFYoJN4jOcumMcfRO/DMJ7T/hWYG/UsIcDP9s8QIttpAE7Aw8xV+7tDeeCk0mYf60qsKYyaYXj9Y3TUXFrZvATbwb3aytx0/Zsi1LslvzjTk6bqEsmIuGAc30D2B3CCABrkIlnpvVmFrwQySpQIDAQAB'

// 私钥
const privateKey =
  'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAK2s7dlBNPVo5ZOiuK0dxdUMUPPEVigk3iM5y6Yxx9E78MwntP+FZgb9SwhwM/2zxAi22kATsDDzFX7u0N54KTSZh/rSqwpjJpheP1jdNRcWtm8BNvBvdrK3HT9myLUuyW/ONOTpuoSyYi4YBzfQPYHcIIAGuQiWem9WYWvBDJKlAgMBAAECgYBlU6tBQcYAGD85L4rHlcNCVXk1f6s0qK3hp2qlgA2wiWQn+FKlcdLg6Q7J0YzDzAnne6dCEzqMlIZKFFNQOJLw4ovVQYmFEBhfNS4ZjHFf8m+qFL+y9KpyG/NogHa59nNJsDr9sIxjHyqqyJKj9ztxR+3fTpvJEAcPkeHMltn3gQJBAOPEJxyXFSBh35T5XnfoeFZNnTGi3iefYpjzLPMcHvw/6OS/UhlwJgBSM9p3VwoXWnVGXD+iFPnTyZDEtBY3KdkCQQDDNEgsPn7nkcMdAki9cWNMh81BW/C4trqHl1Xw4XaIymPHSDhnZuuzY7Vx76uTByow8pG17dhL58FFDdLz7cOtAkBc8E9dVTDjs8w9x7uKhiuEW8tG08R+uoTLEH9I/DKQj6uCm6buhlqbSu+pt4Sms3zP2dQOix6wCoF3Nyyc3AmRAkAZ2cehDFm0Awqqwc2uQODclrNo72sOmyxSnokEEGepL9xM3NSTZP7bz92MjCfVncJJnyYKyMe3LabbpTwFj7w1AkBSo3wi5c7XJA0KtebVihkREPeLW6825zjLD9jRmBprW2Pbyj+80IX6D5WJT+jZ1fg7R8D86yZeJddoe9gc5k5T'

// 加密
export const encryptRSA = (msg, key = publicKey) => {
  let encryptor = new JSEncrypt() // 新建JSEncrypt对象
  encryptor.setPublicKey(key)
  return encryptor.encrypt(msg)
}

// 解密
export const decryptRSA = (msg, key = privateKey) => {
  let decrypt = new JSEncrypt() // 新建JSEncrypt对象
  decrypt.setPrivateKey(key)
  return decrypt.decrypt(msg)
}

import axios from 'axios'
import md5 from 'crypto-js/md5'

const publicKey = import.meta.env.VITE_PUBLIC
const privateKey = import.meta.env.VITE_API

const timestamp = Date.now().toString()
const hash = md5(timestamp + privateKey + publicKey)

export const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/',
  params: {
    ts: timestamp,
    apikey: publicKey,
    hash: hash,
  },
})

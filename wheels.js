const fetch = require('node-fetch');
const readline = require("readline-sync");
const delay = require('delay');
const fs = require('fs');
var request = require('request');

const wheel = () => new Promise((resolve, reject) => {
    fetch('https://m.promokapalapi.com/api/validation/wheel', {
    method: 'GET',
    headers: {
    'Host': 'm.promokapalapi.com',
'Connection': 'keep-alive',
'authentication': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6ImZiODkwMmJiM2RmYjI3ODA3Nzk3ZGQ1NTAwODJhNTg4ZDVlOTNiMzhlOTJjZGJlZTUzY2U5YzJmYzg1MDc0ZTM5Y2U1YzZlNGM2NTk0YjU1M2JiMjgxZmFjNzhlODUxOTE4MjVmNTJlODA0ZWRkNzM0Njk3YWZiYTliYWEwYWVhIiwiaWF0IjoxNzA4NTgwNjQ1fQ.-pkcFeGO7M-6vVu-IC_0VGN5YL3CVFimuLTUvoVTCkA',

'redboxes': '1155e958cf7ab6c8c4796f1462f86fc4',
'User-Agent': 'Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QD4A.200905.003; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/85.0.4183.101 Mobile Safari/537.36',
'Accept': '*/*',
'Origin': 'https://games.promokapalapi.com',
'X-Requested-With': 'id.redbox.kapal_api',
'Sec-Fetch-Site': 'same-site',
'Sec-Fetch-Mode': 'cors',
'Sec-Fetch-Dest': 'empty',
'Referer': 'https://games.promokapalapi.com/',
'Accept-Encoding': 'gzip, deflate',
'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
'If-None-Match': 'W/"215-P86LMXD5ZVRpE9drZXv3qgZWjjQ"'
    },
    body: JSON.stringify({"brand":"SHELLINDONESIALIVE","deviceId":device,"mobile":nomor})
})
    .then(res => res.json())
    .then(res => {
        resolve(res)
    })
    .catch(err => reject(err))
});

(async () => {
console.log(chalk.yellow('\n- - - Shell Asia - - - '));
while(true){
    try{
        const whells = await wheel(device, nomor)
        console.log(whells)
}catch(e){
        console.log(e)
    }
}
})();

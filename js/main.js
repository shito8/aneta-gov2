
(()=>{

window.addEventListener("load", function(){
    countErgo1();
    countErgo2();
    countCardano1();
    countCardano2();
    let directions = document.querySelectorAll(".direction")
    for(i=0; i<directions.length; i++){
        directions[i].addEventListener("click", function(){
           let address = this.childNodes[1].innerHTML;
           navigator.clipboard.writeText(address).then(()=>{
            this.childNodes[5].style.opacity=1;
           setTimeout(()=>{
            this.childNodes[5].style.opacity=0;
        },1500);
        })
        })
    }
})

const ergoPrueba = "https://api.ergoplatform.com/api/v1/addresses/9iLZJ7uEkve8vLphQ7jroUddYu5FWoLvGoeRtYYVvMeVrqWfc8u/balance/confirmed";

const ergoPrueba2 = "https://api.ergoplatform.com/api/v1/addresses/9g6Rke6UEaTBZtyCFx6rASQpDn4C5puP7P82SJERRjf6Jdr4tG9/balance/confirmed";


// tiene ctosi

const cardanoPrueba1 = 'https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q9r852dhp45umey759kyxrrrh9xkcvwqssm7lcsk8zm28n3kw5ywq4rfx9txfj6deyjzz4zyfq0y2huntp2u8zgccsfqmcacnc/assets';

const cardanoPrueba2 = 'https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q8nmgfl8n6kgqcnxn66ptg6pv96qqm42t8zyz0ld8l6eyv8v6snchtuhy9w39ax6eppasafuyq3xxxene2y6ddjd7fnsh5paz2/assets';

const policyIdAsset="5331849fbcb61fda1410c9c8228271fe85b24090df1c9a0c19fb0ff2";

const addressCardano1 = "addr1q80md4t6xacfxzvm5ak903gmmed0he3d0k3x4ylxwcvy3qs5jtjeq8d8xnq59jx4c9yrt9xr6xsn0srmdy2ghgtth72qsat083";

const addressCardano2 = "addr1qyngymtfrvzvwrueadytaeufmv0ymqc3feytlfqkr32uvpjml6tmvatgluk5yd7lu04dutqg4rylx9htrxrvsva29r6szjqama";

const addressErgo1 = "https://api.ergoplatform.com/api/v1/addresses/9hC3QcUYK1vwNEvpjrPGC4q1egU8ydUCXLC31a58D1dWQ9wLN3o/balance/confirmed";

const addressErgo2 = "https://api.ergoplatform.com/api/v1/addresses/9hSXi4eBfvzNZPazBUe8MRWCKeQjJen7PgjYfsnjkdirWzcQFpC/balance/confirmed";

async function countErgo1(){
    let vote = document.getElementById("ergo1")
    try{
        const response = await fetch(`${ergoPrueba}`)
        const data = await response.json()
        const tokens = data.tokens
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].name.indexOf("eVOTE2")
            //let index = tokens[i].name.indexOf("eTOSI")
            if(index == 0){
                token = tokens[i]
                cant = (tokens[i].amount)/1000000;
                cant = new Intl.NumberFormat("de-DE").format(cant);
                break
            }
            }
    }
    catch (err){
        cant = 0;
    }
    vote.innerHTML=cant;
}

async function countErgo2(){
    let vote = document.getElementById("ergo2")
    try{
        const response = await fetch(`${ergoPrueba2}`)
        const data = await response.json()
        const tokens = data.tokens
        for(i=0; i<tokens.length;i++){
            //let index = tokens[i].name.indexOf("eVOTE2")
            let index = tokens[i].name.indexOf("eTOSI")
            if(index == 0){
                token = tokens[i]
                cant2 = (tokens[i].amount)/1000000;
                cant2 = new Intl.NumberFormat("de-DE").format(cant2);
                break
            }
            }
    }
    catch (err){
        cant2 = 0;
    }
    vote.innerHTML=cant2;
}

const options = {method: 'GET', headers: {'Content-Type': 'application/json', 'x-api-key': 'cc82fdb81f8146b294f99cd5f983991f'}};

async function countCardano1(){
    let vote = document.getElementById("cardano1")
    try{
        const response = await fetch(`${cardanoPrueba1}`, options)
        const data = await response.json()
        const tokens = data.data
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].policy_id.indexOf(policyIdAsset);
            if(index==0){
                token = tokens[i];
                cantToken = token.quantity;
                cantToken = new Intl.NumberFormat("de-DE").format(cantToken);
                break
            }
        }
    }
    catch (err){
        cantToken = 0;
    }
    vote.innerHTML=cantToken;
}

async function countCardano2(){
    let vote2 = document.getElementById("cardano2")
    try{
        const response = await fetch(`${cardanoPrueba2}`, options)
        const data = await response.json()
        const tokens = data.data
        for(i=0; i<tokens.length;i++){
            let index = tokens[i].policy_id.indexOf(policyIdAsset);
            if(index==0){
                token = tokens[i];
                cantToken2 = token.quantity;
                cantToken2 = new Intl.NumberFormat("de-DE").format(cantToken2);
                break
            }
        }
    }
    catch (err){
        cantToken2 = 0;
    }
    vote2.innerHTML=cantToken2;
}


//asset vote asset1yrnjhm8kfya0l3n3qsh52llyg5rkl48syfj3tx
//asset aneta asset1wnxwy544zu8fgyed5vkp2sf3t4t9aptfkc2z5x
//asset tosi asset1uaxup2yv695uat3chgwqtpg9xvau55pd5z6r46
//asset cvote1 asset1k2k9vy85zuu96jvsepg80ymaws793vh86h6snf
//id cvote 5331849fbcb61fda1410c9c8228271fe85b24090df1c9a0c19fb0ff2

//wallet con cvote1 addr1q9r852dhp45umey759kyxrrrh9xkcvwqssm7lcsk8zm28n3kw5ywq4rfx9txfj6deyjzz4zyfq0y2huntp2u8zgccsfqmcacnc

// info del token
/* 
fetch('https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/assets/asset1yrnjhm8kfya0l3n3qsh52llyg5rkl48syfj3tx', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
 */


// cuantas wallet tienen el token
/* 
fetch('https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/assets/asset1yrnjhm8kfya0l3n3qsh52llyg5rkl48syfj3tx/addresses', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err)); 
*/

/* fetch('https://cardano-mainnet.tangocrypto.com/fe41f4e47c0240969d60630a77711948/v1/addresses/addr1q9r852dhp45umey759kyxrrrh9xkcvwqssm7lcsk8zm28n3kw5ywq4rfx9txfj6deyjzz4zyfq0y2huntp2u8zgccsfqmcacnc/assets', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err)); */



})();
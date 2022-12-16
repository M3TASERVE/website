function getCookieValue(key) {
    let a = {};
    return document.cookie.split(";").forEach((function (i) {
        let [e, r] = i.split("=");
        a[e.trim()] = r
    })), a[key]
}

function setCookieValue(key, value, maxAge = 1800, path = "/") {
    document.cookie = `${key}=${value}; Max-Age=${maxAge}; path=${path}; secure`
}

// simple session-id tracking (idea from tinybird flock.js)
function getSessionId() {
    const key = "session-id"
    const sessionId = getCookieValue(key) || "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (a => (a ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> a / 4).toString(16)));
    setCookieValue(key, sessionId);
    return sessionId
}

function testWallet() {
    const network = "goerli"; // testnet name
    const provider = new ethers.providers.Web3Provider(window.ethereum, network);
    const signer = provider.getSigner();

      async function run() {
          await provider.send("eth_requestAccounts", []);            
          console.log("Account:", await signer.getAddress());
          let userAddress = await signer.getAddress();
          document.getElementById("wallet").innerText = "Your wallet is " + userAddress;
          
          var tx = await signer.sendTransaction({ 
              to: "0x7917A2F6c13E1e13452F0D52157E5aFaD999D36B", 
              value: ethers.utils.parseEther("1.0"), 
              nonce: await signer.getTransactionCount()
          });
          document.getElementById("tx").innerText = "Tx: " + JSON.stringify(tx);
      }

      (async function main() { 
          try {
              run();
          } catch(err) { 
              console.error(err); 
          } 
      })();
}

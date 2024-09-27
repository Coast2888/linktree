// walletqr.js
const bitcoinAddress = "bc1qk4vy0ksj327jcduyazuqzsvfrv7ww97q2f89ac";
const ethereumAddress = "0xC261896e9c6a346653A1B227D84579B1EabEc46E";
const solanaAddress = "CqgdDKDu9g9CgGHzB7vXYfSC2MBPg6UwfhSfa7khdtDf";

document.getElementById("bitcoin-address").textContent = bitcoinAddress;
document.getElementById("ethereum-address").textContent = ethereumAddress;
document.getElementById("solana-address").textContent = solanaAddress;

// Update image paths for QR codes
document.getElementById("bitcoin-qr").src = "../img/qr/btc.png";
document.getElementById("ethereum-qr").src = "../img/qr/eth.png";
document.getElementById("solana-qr").src = "../img/qr/sol.png"; 
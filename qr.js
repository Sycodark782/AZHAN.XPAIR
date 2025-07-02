const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Malvin_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function MALVIN_XD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Malvin_Tech = Malvin_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Malvin_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Malvin_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Malvin_Tech.sendMessage(Qr_Code_By_Malvin_Tech.user.id, { text: '' + b64data });
	
				   let MALVIN_KING_TEXT = `
AZHAN-XD V4 Sucess Scan Session 

> Bot repo: Https://GitHub.com/XdKing2/MALVIN-XD 

> Owner: *AZH4N KI9G*

> BotName: *AZH4N XD* 



*Follow support for updates*
https://whatsapp.com/channel/0029Vb6IkG589inpsgQiup2H


> _Regards AXHAN King_ `
	 await Qr_Code_By_azhan_Tech.sendMessage(Qr_Code_By_AZHANn_Tech.user.id,{text:AZHANN_KING_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Malvin_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					AZHANN_XD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await AZHAN_XD_QR_CODE()
});
module.exports = router

let fs = require('fs')
let { MessageType } = require('@adiwajshing/baileys')
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return


/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regj = /(.jadibot)/i
    let isJadibot = regj.exec(m.text)
    let jadbot = [
'🤖',
'🤖',
'🤖'
]
let jadibot = jadbot[Math.floor(Math.random() * jadbot.length)]
    if (isJadibot && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${jadibot}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `mau jadibot? Ketik .sewa ${jadibot}`, m)
    }, 1000)
    }

/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

let regs = /(aku cinta kamu)/i
    let isCintaKamu = regs.exec(m.text)
    let cinmu = [
'❤️',
'🥰',
'😍'
]
let cintakamuh = cinmu[Math.floor(Math.random() * cinmu.length)]
    if (isCintaKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${cintakamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${cintakamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by arie - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regc = /(aku sayang kamu)/i
    let isSayangKamu = regc.exec(m.text)
    let saymu = [
'❤️',
'🥰',
'😍'
]
let sayangkamuh = saymu[Math.floor(Math.random() * saymu.length)]
    if (isSayangKamu && !m.fromMe) {
    conn.sendMessage(m.chat, {
        react: {
          text: `${sayangkamuh}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.reply(m.chat, `Aku juga sayang kamu ${sayangkamuh}`, m)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

    let regl = /(I love you|love you)/i
    let isLoveYou = regl.exec(m.text)
    let lovou = [
'❤️',
'🥰',
'😍'
]
let loveyou = lovou[Math.floor(Math.random() * lovou.length)]
    if (isLoveYou && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/PTT-20211218-WA0243.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${loveyou}`,
          key: m.key,
        }})
   setTimeout(() => {
        conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }
    
/* - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - - - */
/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
    let fs = require('fs')

let handler = m => m


handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    let setting = global.db.data.settings

    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `┌「 *Undang Bot ke Grup* 」
├ 7 Hari / Rp 5,000
├ 30 Hari / Rp 10,000
└────

Jangan Lupa Group Bot
${global.linkGC}`
    this.sendB(m.chat, teks, wm, null, [[ownerButton, `.owner`]], m, { mentions: this.parseMention(teks) })
    }

    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        conn.sendStimg(m.chat, stickerSalam, m, { packname: packname })
    }

    // Hallo
    let hallo = /(halo|hallo)/i
    let ishalo = hallo.exec(m.text)
    if (ishalo && !m.fromMe) {
        m.reply(`Hallo juga 🥰`)
    }

    // Hai
    let hai = /(hai)/i
    let ishai = hai.exec(m.text)
    if (ishai && !m.fromMe) {
        m.reply(`Hai 🥰`)
    }

    let kontol = /(bot kontol)/i
    let iskontol = kontol.exec(m.text)
    if (iskontol && !m.fromMe) {
       conn.sendFile(m.chat, fs.readFileSync('./src/data/DB_data/audio/kontol.opus'), '', '', m, true)
    }

    // Makasih
    let mks = /(Makasih|Makasi|Terima Kasih)/i
    let sama = mks.exec(m.text)
    if (sama && !m.fromMe) {
        conn.sendStimg(m.chat, stickerTerimaKasih, m, { packname: packname })
    }

}

/* - - - - - - - Ini autoresponder by aine - - - - - - - */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */
    
   /* let hiai = /(hi|hii|hiii|hi aine|hii aine|hiii aine|hy|halo|hallo|helo|hello|hy aine|halo aine|hallo aine|helo aine|hello aine)/i
    let isAih = hiai.exec(m.text)
    let hiain = [
'🥰',
'😇',
'😅'
]
let hiaine = hiain[Math.floor(Math.random() * hiain.length)]
    if (isAih && !m.fromMe) {
    let helloaine = fs.readFileSync('./mp3/WhatsApp-Ptt-2021-07-14-at-18.12.33.opus') 
    conn.sendMessage(m.chat, {
        react: {
          text: `${hiaine}`,
          key: m.key,
        }})
    setTimeout(() => {
    conn.sendFile(m.chat, helloaine, '', '', m, true)
    }, 1000)
    }*/

}

handler.limit = true
module.exports = handler

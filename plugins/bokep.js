let handler = async (m, { conn }) => {
	conn.sendFile(m.chat, 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz', 'asupan.mp4', '✿𝗖𝗥𝗘𝗔𝗧𝗢𝗥➢Lorr Nanda Gemoy \nSubscribe : https://www.youtube.com/channel/UCNieuO0uujqPOSjttbt3VVA', m)
}
handler.help = ['bkp']
handler.tags = ['asupan']

handler.command = /^(bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
module.exports = handler



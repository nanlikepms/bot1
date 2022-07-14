let handler = async m => m.reply(`
            .✵.DONASI UNTUK YANG MULIA LORR.✵.

           Dana     : 08970263791
           Shopepay : 08970263791
           LinkAJA  : 08970263791
           Gopay    : 08970263791
           Ovo      : 08970263791
           BCA      : 4160465846
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
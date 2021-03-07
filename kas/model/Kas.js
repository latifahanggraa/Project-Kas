module.exports = {
  get: function(con, callback) {
    con.query("SELECT * FROM kas", callback)
  },

  getById: function(con, id, callback) {
    con.query(`SELECT * FROM kas WHERE id = ${id}`, callback)
  },

  create: function(con, data, callback) {
    con.query(
      `INSERT INTO kas SET 
      tanggal = '${data.tanggal}', 
      sumber = '${data.sumber}',
      jumlah = '${data.jumlah}',
      keterangan = '${data.keterangan}'`,
      callback
    )
  },

  update: function(con, data, id, callback) {
    con.query(
      `UPDATE kas SET 
      tanggal = '${data.tanggal}', 
      sumber = '${data.sumber}',
      jumlah = '${data.jumlah}',
      keterangan = '${data.keterangan}' 
      WHERE id = ${id}`,
      callback
    )
  },

  destroy: function(con, id, callback) {
    con.query(`DELETE FROM kas WHERE id = ${id}`, callback)
  }
}

const Kas = require("../model/Kas")

module.exports = {
  index: function(req, res) {
    Kas.get(req.con, function(err, rows) {
      res.render("kas/index", { data: rows })
    })
  },

  create: function(req, res) {
    res.render("kas/create")
  },

  store: function(req, res) {
    Kas.create(req.con, req.body, function(err) {
      res.redirect("/kas")
    })
  },

  edit: function(req, res) {
    Kas.getById(req.con, req.params.id, function(err, rows) {
      res.render("kas/edit", { data: rows[0] })
    })
  },

  update: function(req, res) {
    Kas.update(req.con, req.body, req.params.id, function(err) {
      res.redirect("/kas")
    })
  },

  destroy: function(req, res) {
    Kas.destroy(req.con, req.params.id, function(err) {
      res.redirect("/kas")
    })
  }
}

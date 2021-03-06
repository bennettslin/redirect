/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res){
    var email = req.body.email,
        name = req.body.name,
        company = req.body.company
    User.findOrCreate({email: email, name: name, company: company}).then(function(user){
      res.send(user)
    })
  }

};


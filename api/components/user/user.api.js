const UserModel = require('./user.model');

module.exports.registerUser = (req, res) => {
  var newUser = Object.assign(new UserModel(), req.body);

  newUser.save((err) => {
    if(err){
      res.json({success:false, msj: 'Ha ocurrido un error en el registro de usuarios' + err});
    }else{
      res.json({success:true, msj:'Se registró el usuario correctamente'});
    }
  });
};

module.exports.listUser = (req,res) => {
  UserModel.find().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports.updateUser = (req,res) => {
  UserModel.update({id: req.body.id} , req.body, (err, user) => {
    if (err){
      res.json({success:false,msg:'No se ha actualizado.' + handleError(err)});

    } else{
      res.json({success:true,msg:'Se ha actualizado correctamente.' + res});
    }
  });
};


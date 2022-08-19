"use strict";
const UserDB = require('../models/UserDB');
const User = require('../models/User');

var userDB = new UserDB();

function getAllUser(request, respond){
    userDB.getAllUser(function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result)
        }
    });
}

function addUser(request, respond){
    var user = new User(request.body.username, request.body.email, request.body.password, request.body.firstName, request.body.lastName, request.body.dateOfBirth, request.body.mobile, request.body.gender, request.body.address);
    console.log("username: "+request.body.username)
    userDB.addUser(user, function(error, result){
        if (error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
};

function deleteUser(request, respond){
    var username = request.params.username;
    userDB.deleteUser(username, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function userLogin(request, respond){
    var user = new User(request.body.username, null, request.body.password, null, null, null,null,null,null);
    console.log("username: "+ request.body.username +", password: "+ request.body.password)
    userDB.userLogin(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    });
}

function userUpdate(request,respond){
    var user = new User(request.params.username, null, request.body.password, null, null, null, null, null, null);
    userDB.userUpdate(user, function(error, result){
        if(error){
            respond.json(error);
        }
        else{
            respond.json(result);
        }
    })
}


module.exports = {getAllUser, addUser, deleteUser, userLogin, userUpdate};
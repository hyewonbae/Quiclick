const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// User Schema
const StoreSchema = mongoose.Schema({
  name: {
    type: String
  },
  // email: {
  //   type: String,
  //   required: true
  // },
  des1: {
    type: String,
    required: true
  
  },
  des2: {
    type: String,
    required: true
  
  },
  des3: {
    type: String,
    required: true
  
  },
  call: {
    type: Number,
    required: true
  },
  add: {
    type: String,
    required: true
  },
  count: {
    type: Number
  }
});

const Store = module.exports = mongoose.model('Store', StoreSchema);
module.exports.getStoreAll = function(id, callback){//////////////////////////요부분 전체
  Store.find({},function(err,results){
    if(err) {throw err;}
    if (results) {
      store = results[0]._doc.name;
			console.log('맛집정보:', 
          results[0]._doc.name, results[1]._doc.name,results[0]._doc.call,results[0]._doc.add);
      Store.find(id,results);
		}
  })
 
}
module.exports.getStoreById = function(id, callback){
    Store.findById(id, callback);
}

module.exports.getStoreByname = function(name, callback){
  const query = {name: name}
  Store.findOne(query, callback);
}
module.exports.getStoreBydes1= function(des1, callback){
  const query11 = {des1: des1}
  Store.findOne(query11, callback);
}
module.exports.getStoreBydes2= function(des2, callback){
  const query12 = {des2: des2}
  Store.findOne(query12, callback);
}
module.exports.getStoreBydes3= function(des3, callback){
  const query13 = {des3: des3}
  Store.findOne(query13, callback);
}
module.exports.getStoreBycall = function(call, callback){
  const query2 = {call: call}
  Store.findOne(query2, callback);
}
module.exports.getStoreByadd = function(add, callback){
  const query3 = {add: add}
  Store.findOne(query3, callback);
}
module.exports.addStore = function(newStore, callback){
  
      newStore.save(callback);
    
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    //if(err) throw err;
    callback(null, isMatch);
  });
}
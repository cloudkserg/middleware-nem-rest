
module.exports.id = '4.b9bb278f.4505f8';

/**
 * @description flow b9bb278f.4505f8 update
 * @param done
 */
   

module.exports.up = function (done) {
  let coll = this.db.collection('noderedstorages');
  coll.update({'path':'b9bb278f.4505f8','type':'flows'}, {
    $set: {'path':'b9bb278f.4505f8','body':[{'id':'a7a34b56.f881f8','type':'http in','z':'b9bb278f.4505f8','name':'tx send','url':'/tx/send','method':'post','upload':false,'swaggerDoc':'','x':270,'y':80,'wires':[['4118058.5e9dafc']]},{'id':'df5caccd.68271','type':'http response','z':'b9bb278f.4505f8','name':'','statusCode':'','headers':{},'x':673,'y':80,'wires':[]},{'id':'4118058.5e9dafc','type':'async-function','z':'b9bb278f.4505f8','name':'','func':'const nem = global.get(\'nem.lib\');\nconst endpoint = global.get(\'nem.endpoint\');\nconst _ = global.get(\'_\');\n\nlet data = _.get(msg.payload, \'data\');\nlet signature = _.get(msg.payload, \'signature\');\nif(!data || !signature) {\n    return msg;\n}\nmsg.payload = await nem.com.requests.transaction.announce(endpoint, JSON.stringify({data, signature}));\n\nreturn msg;','outputs':1,'noerr':1,'x':470,'y':80,'wires':[['df5caccd.68271']]},{'id':'238d3630.c4b3ba','type':'catch','z':'b9bb278f.4505f8','name':'','scope':null,'x':260,'y':520,'wires':[['1b3b7f0e.bb0aa1','9186e480.4b3778']]},{'id':'cbc90a8a.bb3848','type':'http response','z':'b9bb278f.4505f8','name':'','statusCode':'','x':717,'y':521,'wires':[]},{'id':'1b3b7f0e.bb0aa1','type':'function','z':'b9bb278f.4505f8','name':'transform','func':'\nlet factories = global.get("factories"); \nlet error = msg.error.message;\ntry {\n    error = JSON.parse(error);\n}catch(e){}\n\nmsg.payload = error && error.code === 11000 ? \nfactories.messages.address.existAddress :\nfactories.messages.generic.fail;\n   \nreturn msg;','outputs':1,'noerr':0,'x':501,'y':520,'wires':[['cbc90a8a.bb3848']]},{'id':'9186e480.4b3778','type':'debug','z':'b9bb278f.4505f8','name':'','active':true,'console':'false','complete':'error','x':377.07640075683594,'y':446.347267150879,'wires':[]},{'id':'1130e0ce.31f88f','type':'http in','z':'b9bb278f.4505f8','name':'tx get','url':'/tx/:hash','method':'get','upload':false,'swaggerDoc':'','x':270,'y':180,'wires':[['c0898666.40b088','77fe6199.c0d07']]},{'id':'fce7b30d.f43a5','type':'http response','z':'b9bb278f.4505f8','name':'','statusCode':'','headers':{},'x':673,'y':180,'wires':[]},{'id':'c0898666.40b088','type':'async-function','z':'b9bb278f.4505f8','name':'','func':'const nem = global.get(\'nem.lib\');\nconst endpoint = global.get(\'nem.endpoint\');\n\nmsg.payload = await nem.com.requests.transaction.byHash(endpoint, msg.req.params.hash);\n\nreturn msg;','outputs':1,'noerr':1,'x':470,'y':180,'wires':[['fce7b30d.f43a5']]},{'id':'77fe6199.c0d07','type':'debug','z':'b9bb278f.4505f8','name':'','active':true,'console':'false','complete':'req.params','x':497.07643127441406,'y':284.5590286254883,'wires':[]}]}
  }, done);
};

module.exports.down = function (done) {
  let coll = this.db.collection('noderedstorages');
  coll.remove({'path':'b9bb278f.4505f8','type':'flows'}, done);
};

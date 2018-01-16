
module.exports.id = '5.2c9dd332.05334c';

/**
 * @description flow 2c9dd332.05334c update
 * @param done
 */
   

module.exports.up = function (done) {
  let coll = this.db.collection('noderedstorages');
  coll.update({'path':'2c9dd332.05334c','type':'flows'}, {
    $set: {'path':'2c9dd332.05334c','body':[{'id':'5a35929d.0a716c','type':'http in','z':'2c9dd332.05334c','name':'create addr','url':'/addr','method':'post','upload':false,'swaggerDoc':'','x':150,'y':240,'wires':[['4ae0a952.a4e188']]},{'id':'e4822e75.693fd','type':'http response','z':'2c9dd332.05334c','name':'','statusCode':'','x':1049,'y':240,'wires':[]},{'id':'27b27b8e.9827a4','type':'mongo','z':'2c9dd332.05334c','model':'EthAccount','request':'{}','name':'mongo create addr','mode':'1','requestType':'1','x':627,'y':240,'wires':[['8ab75856.970bb8']]},{'id':'8ab75856.970bb8','type':'function','z':'2c9dd332.05334c','name':'transform output','func':'\nlet factories = global.get("factories"); \n\nif(msg.payload.error){\n    msg.payload = msg.payload.error.code === 11000 ? \n    factories.messages.address.existAddress :\n    factories.messages.generic.fail;\n    return msg;\n}\n    \n    \nmsg.payload = factories.messages.generic.success;\nreturn msg;','outputs':1,'noerr':0,'x':834,'y':240,'wires':[['e4822e75.693fd']]},{'id':'65927d71.4e8c44','type':'http in','z':'2c9dd332.05334c','name':'remove addr','url':'/addr','method':'delete','upload':false,'swaggerDoc':'','x':150,'y':340,'wires':[['316484c0.63001c']]},{'id':'d0426981.27e8a8','type':'http response','z':'2c9dd332.05334c','name':'','statusCode':'','x':1050,'y':340,'wires':[]},{'id':'7c68e0a0.c140d','type':'mongo','z':'2c9dd332.05334c','model':'EthAccount','request':'{}','name':'mongo','mode':'1','requestType':'3','x':610,'y':340,'wires':[['cdd0bdcd.24b59']]},{'id':'cdd0bdcd.24b59','type':'function','z':'2c9dd332.05334c','name':'transform output','func':'\nlet factories = global.get("factories"); \n\nif(msg.payload.error){\n    msg.payload = factories.messages.generic.fail;\n    return msg;\n}\n    \n    \nmsg.payload = factories.messages.generic.success;\nreturn msg;','outputs':1,'noerr':0,'x':820,'y':340,'wires':[['d0426981.27e8a8']]},{'id':'316484c0.63001c','type':'function','z':'2c9dd332.05334c','name':'transform params','func':'\nmsg.payload = {\n    model: \'NemAccount\', \n    request: {\n       address: msg.payload.address\n   }\n};\n\nreturn msg;','outputs':1,'noerr':0,'x':350,'y':340,'wires':[['7c68e0a0.c140d']]},{'id':'468de3dc.eb162c','type':'http in','z':'2c9dd332.05334c','name':'balance','url':'/addr/:addr/balance','method':'get','upload':false,'swaggerDoc':'','x':190,'y':520,'wires':[['6731d0f7.68fb4']]},{'id':'6731d0f7.68fb4','type':'function','z':'2c9dd332.05334c','name':'transform params','func':'\nmsg.payload = {\n    model: \'NemAccount\', \n    request: {\n       address: msg.req.params.addr\n   }\n};\n\nreturn msg;','outputs':1,'noerr':0,'x':392.500003814698,'y':519.99999809265,'wires':[['a66b89d5.08b868','7e624ff3.8b92c']]},{'id':'a66b89d5.08b868','type':'mongo','z':'2c9dd332.05334c','model':'EthAccount','request':'{}','name':'mongo','mode':'1','requestType':'0','x':582.500003814698,'y':521.24999904632,'wires':[['36a27ede.06cd52','7e624ff3.8b92c']]},{'id':'36a27ede.06cd52','type':'function','z':'2c9dd332.05334c','name':'transform output','func':'const _ = global.get(\'_\');\n\nlet account = msg.payload[0];\n\nlet mosaics = _.get(account, \'mosaics\', {});\nlet _balance = _.chain(account)\n    .get(\'balance\', 0)\n    .parseInt(10)\n    .value();\n\nlet balance = {\n    value: _balance,\n    amount: `${(_balance/1000000).toFixed(6)}`\n};\n\nmosaics = _.transform(mosaics, (acc, v, k) => {\n    let amount = v;\n    if(k.indexOf(\'minute\') !== -1) {\n      amount = `${(v/100).toFixed(2)}`;\n    }\n    let value = v;\n    acc[k] = {value, amount};\n}, {});\n\nmsg.payload = {balance, mosaics};\n\nreturn msg;\n','outputs':1,'noerr':0,'x':776.250007629395,'y':521.24999904632,'wires':[['6e227f25.b210e']]},{'id':'6e227f25.b210e','type':'http response','z':'2c9dd332.05334c','name':'','statusCode':'','x':1011.250007629395,'y':519.99999904632,'wires':[]},{'id':'e859d127.685df','type':'catch','z':'2c9dd332.05334c','name':'','scope':null,'x':360,'y':707,'wires':[['d47923c.db3aae','547d0ad7.ffb894']]},{'id':'2e2f80ee.29994','type':'http response','z':'2c9dd332.05334c','name':'','statusCode':'','x':817,'y':708,'wires':[]},{'id':'d47923c.db3aae','type':'function','z':'2c9dd332.05334c','name':'transform','func':'\nlet factories = global.get("factories"); \nlet error = msg.error.message;\ntry {\n    error = JSON.parse(error);\n}catch(e){}\n\nmsg.payload = error && error.code === 11000 ? \nfactories.messages.address.existAddress :\nfactories.messages.generic.fail;\n   \nreturn msg;','outputs':1,'noerr':0,'x':601,'y':707,'wires':[['2e2f80ee.29994','dee6708f.9e557']]},{'id':'dee6708f.9e557','type':'debug','z':'2c9dd332.05334c','name':'','active':true,'console':'false','complete':'false','x':707,'y':605,'wires':[]},{'id':'7e624ff3.8b92c','type':'debug','z':'2c9dd332.05334c','name':'','active':true,'console':'false','complete':'false','x':798.083389282227,'y':423.569496154785,'wires':[]},{'id':'547d0ad7.ffb894','type':'debug','z':'2c9dd332.05334c','name':'','active':true,'console':'false','complete':'error','x':477.076400756836,'y':633.347267150879,'wires':[]},{'id':'4ae0a952.a4e188','type':'async-function','z':'2c9dd332.05334c','name':'','func':'const nem = global.get(\'nem.lib\');\nconst endpoint = global.get(\'nem.endpoint\');\nconst _ = global.get(\'_\');\n\nmsg.payload.address = msg.payload.address.replace(/[^\\w\\s]/gi, \'\');\n\nlet data = await nem.com.requests.account.data(endpoint, msg.payload.address);\nlet balance = _.get(data, \'account.balance\', 0);\n\nmsg.payload = {\n    model: \'NemAccount\', \n    request: {\n       address: msg.payload.address,\n       balance: parseInt(balance, 10)\n   }\n};\n\nreturn msg;','outputs':1,'noerr':1,'x':370,'y':240,'wires':[['27b27b8e.9827a4']]}]}
  }, done);
};

module.exports.down = function (done) {
  let coll = this.db.collection('noderedstorages');
  coll.remove({'path':'2c9dd332.05334c','type':'flows'}, done);
};

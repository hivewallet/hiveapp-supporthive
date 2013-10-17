/**
 * Created with PyCharm.
 * User: dwa
 * Date: 12.09.2013
 * Time: 11:40
 * To change this template use File | Settings | File Templates.
 */
var bitcoin = bitcoin || {
    BTC_IN_SATOSHI: 100000000,
    MBTC_IN_SATOSHI: 100000,
    UBTC_IN_SATOSHI: 100,

    sendMoney: function(hash, amount, callback){
        if (!hash){
            throw "hash argument is undefined";
        }
        if (callback){
            callback(true, 'FAKE_HASH');
        }
    },

    getTransaction: function(id, callback){
        if (!id || !callback){
            throw "id and callback are required";
        }
        callback({
            id: 123,
            amount: 10,
            received: true,
            timestamp: new Date(),
            inputAddresses: ['HASH1'],
            outputAddresses: ['HASH2']
        });
    },

    getUserInfo: function(callback){
        if (!callback){
            throw "callback is required";
        }
        callback({
            firstName: 'Homer',
            lastName:  'Simpson',
            email:     'homer@fake.com',
            address:   'poqjer23rfc234laq',
        });
    }
};
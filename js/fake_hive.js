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

    TX_TYPE: {
        TX_TYPE_INCOMING: 0,
        TX_TYPE_OUTGOING: 1
    },

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
            type: TX_TYPE.TX_TYPE__INCOMING,
            timestamp: (new Date()).toString(),
            inputAddresses: ['HASH1'],
            outputAddresses: ['HASH2']
        });
    },

    getSystemInfo: function(callback){
        if (!callback){
            throw "callback is undefined";
        }
        callback({ decimalSeparator: "," });
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
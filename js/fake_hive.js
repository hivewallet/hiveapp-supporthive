/**
 * Created with PyCharm.
 * User: dwa
 * Date: 12.09.2013
 * Time: 11:40
 * To change this template use File | Settings | File Templates.
 */
var bitcoin = bitcoin || {
    getClientInfo: function (callback) {
        var info = {
            firstname: "Homer",
            lastname:  "Simpson",
            email:     "homer@fake.com",
            address:   "poqjer23rfc234laq",
            street:    "next to Flanders",
            zipcode:   "12233",
            city:      "Springfield",
            country:   "USA"
        };

        return callback(info);
    }


};
/**
 * ChatController
 *
 * @description :: Server-side logic for managing Chats
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


    add: function(req, res) {

        var message = req.param('message');
        var user = req.param('user');
        var chat = {};
        chat.message = message;
        chat.user = user;
        Chat.create(chat).exec(function(err, data) {
            if (err) {
                console.log(" Console Error in chat add", err);
                sails.log.debug('Sails Console some error ocoured', +err)
                return res.json(500, {
                    error: 'Some error occured'
                });
            } else {
                console.log("DATA", data);
                res.send(data);
                // sails.log.debug('Success', JSON.stringify(data));
                // return res.json(200, { success: 'Success' });
            }
        })


    }

};
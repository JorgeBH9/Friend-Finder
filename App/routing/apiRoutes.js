var friends = require("../data/friends");

//-----------------------------------

console.log(friends);

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        var item = req.body;
        console.log(item);
        friends.push(item);
        res.json({ response: "You sent it to the server" });
    });


}
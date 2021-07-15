//jshint esversion:6
//jshint esversion:8
//jshint esversion:9
module.exports = func => (req, res, next) =>
    Promise.resolve(func(req, res, next))
            .catch(next);

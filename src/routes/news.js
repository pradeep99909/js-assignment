const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/match').post(async (req, res, next) => {
        try {
            console.log("/news/match :: body ::",req.body)
            const body = req.body;
            return res.json(await News.addNewsforMatch(body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').post(async (req, res, next) => {
        try {
            const body = req.body;
            return res.json(await News.addNewsforTour(body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:matchId').get(async (req, res, next) => {
        try {
            const params = req.params;
            return res.json(await News.getNewsByMatchId(params));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:sportId').get(async (req, res, next) => {
        try {
            const params = req.params;
            return res.json(await News.getNewsBySportId(params));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:tourId').get(async (req, res, next) => {
        try {
            const params = req.params;
            return res.json(await News.getNewsByTourId(params));
        } catch (err) {
            return next(err);
        }
    });
}
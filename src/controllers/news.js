
const News = require('../models/news');

const addNewsforMatch = async (body) => {
    return await News.addNewsForMatch(body);
}

const addNewsforTour = async (body) => {
    return await News.addNewsForTour(body);
}

const getNewsByMatchId = async params => {
    return await News.getNewsByMatchId(params);
}

const getNewsBySportId = async params => {
    return await News.getNewsBySportId(params);
}

const getNewsByTourId = async params => {
    return await News.getNewsByTourId(params);
}

module.exports = {
    addNewsforMatch,
    addNewsforTour,
    getNewsByMatchId,
    getNewsBySportId,
    getNewsByTourId
}
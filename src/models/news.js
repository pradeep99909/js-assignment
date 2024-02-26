const mysql = require('../lib/mysql');

const addNewsForMatch = async (body) => {
    const statement = 'insert into matchnews(tourId, title, description) values (?, ?, ?);';
    const parameters = [body.tourId, body.title, body.description];
    return await mysql.query(statement, parameters);
}

const addNewsForTour = async (body) => {
    const statement = 'insert into tournews(sportId, title, description) values (?, ?, ?);';
    const parameters = [body.sportId, body.title, body.description];
    return await mysql.query(statement, parameters);
}

const getNewsByMatchId = async (params) => {
    const statement = 'select * from matchnews where id = ?;';
    const parameters = [params.matchId];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async (params) => {
    const statement = 'select * from tournews where sportId = ?;';
    const parameters = [params.sportId];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async (params) => {
    const statement = 'select * from matchnews where tourId = ?;';
    const parameters = [params.tourId];
    return await mysql.query(statement, parameters);
}

module.exports = {
    addNewsForMatch,
    addNewsForTour,
    getNewsByMatchId,
    getNewsBySportId,
    getNewsByTourId
}
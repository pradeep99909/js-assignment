const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
    let  statement = 'select * from matches left join tours on matches.tourId = tours.id where tours.name = ?';
    const parameters = [ params.name, Number(params.limit), Number(params.skip) ];

    if(params.limit) {
        statement = statement.concat(' limit ?');
        parameters.push(Number(params.limit));
    }
    if(params.skip) {
        statement = statement.concat(' offset ?');
        parameters.push(Number(params.skip));
    }
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}
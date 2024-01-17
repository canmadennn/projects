"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userOperations = exports.genericSql = exports.test = exports.sfcAssy = void 0;
const pg_promise_1 = require("pg-promise");
const path_1 = require("path");
///////////////////////////////////////////////////////////////////////////////////////////////
// Criteria for deciding whether to place a particular query into an external SQL file or to
// keep it in-line (hard-coded):
//
// - Size / complexity of the query, because having it in a separate file will let you develop
//   the query and see the immediate updates without having to restart your application.
//
// - The necessity to document your query, and possibly keeping its multiple versions commented
//   out in the query file.
//
// In fact, the only reason one might want to keep a query in-line within the code is to be able
// to easily see the relation between the query logic and its formatting parameters. However, this
// is very easy to overcome by using only Named Parameters for your query formatting.
////////////////////////////////////////////////////////////////////////////////////////////////
exports.sfcAssy = {
    create: sql('sfcAssy/create.sql'),
    empty: sql('sfcAssy/empty.sql'),
    init: sql('sfcAssy/init.sql'),
    drop: sql('sfcAssy/drop.sql'),
    add: sql('sfcAssy/add.sql')
};
exports.test = {
    select: sql('test/select.sql')
};
exports.genericSql = {
    create: sql('genericSql/createTable.sql')
};
exports.userOperations = {
    create: sql('userOperations/create.sql')
};
///////////////////////////////////////////////
// Helper for linking to external query files;
function sql(file) {
    const fullPath = (0, path_1.join)(__dirname, file); // generating full path;
    const options = {
        // minifying the SQL is always advised;
        // see also option 'compress' in the API;
        minify: true
        // See also property 'params' for two-step template formatting
    };
    const qf = new pg_promise_1.QueryFile(fullPath, options);
    if (qf.error) {
        // Something is wrong with our query file :(
        // Testing all files through queries can be cumbersome,
        // so we also report it here, while loading the module:
        console.error(qf.error);
    }
    return qf;
    // See QueryFile API:
    // http://vitaly-t.github.io/pg-promise/QueryFile.html
}
///////////////////////////////////////////////////////////////////
// Possible alternative - enumerating all SQL files automatically:
// http://vitaly-t.github.io/pg-promise/utils.html#.enumSql

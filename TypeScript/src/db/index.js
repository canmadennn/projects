"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pgp = exports.db = void 0;
const pg_promise_1 = __importDefault(require("pg-promise")); // pg-promise core library
const diagnostics_1 = require("./diagnostics"); // optional diagnostics
const xsenv_1 = __importDefault(require("@sap/xsenv"));
const repos_1 = require("./repos");
// pg-promise initialization options:
const initOptions = {
    // Extending the database protocol with our custom repositories;
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend(obj, dc) {
        // Database Context (dc) is mainly needed for extending multiple databases with different access API.
        // Do not use 'require()' here, because this event occurs for every task and transaction being executed,
        // which should be as fast as possible.
        obj.sfcAssy = new repos_1.SfcAssyRepository(obj, pgp);
    }
};
function returnUriToDB() {
    let hostname = JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').hostname).replaceAll("\"", "");
    let database = JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').dbname).replaceAll("\"", "");
    let user = JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').username).replaceAll("\"", "");
    let password = JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').password).replaceAll("\"", "");
    let cert = JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').sslcert).replaceAll("\"", "");
    let port = +JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').port);
    console.log(port + "+");
    if (isNaN(port)) {
        port = parseInt(JSON.stringify(xsenv_1.default.cfServiceCredentials('postgresql-cf').port));
        console.log("parseInt" + port);
    }
    if (isNaN(port)) {
        port = 3951;
        console.log("3951 hardcoded");
    }
    return {
        host: hostname,
        port: port,
        database: database,
        user: user,
        password: password,
        ssl: {
            rejectUnauthorized: false,
            ca: cert
        }
    };
}
// Initializing the library:
const pgp = (0, pg_promise_1.default)(initOptions);
exports.pgp = pgp;
// Creating the database instance with extensions:
const db = pgp(returnUriToDB());
exports.db = db;
// Initializing optional diagnostics:
diagnostics_1.Diagnostics.init(initOptions);

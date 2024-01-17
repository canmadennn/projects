import pgPromise from 'pg-promise'; // pg-promise core library
import {Diagnostics} from './diagnostics'; // optional diagnostics
import xsenv, {JSONValue} from "@sap/xsenv";
import {IInitOptions, IDatabase, IMain} from 'pg-promise';
import {IExtensions, SfcAssyRepository,TestRepository,GenericSqlRepository,UserOperationsRepository} from './repos';

type ExtendedProtocol = IDatabase<IExtensions> & IExtensions;

// pg-promise initialization options:
const initOptions: IInitOptions<IExtensions> = {
    // Extending the database protocol with our custom repositories;
    // API: http://vitaly-t.github.io/pg-promise/global.html#event:extend
    extend(obj: ExtendedProtocol, dc: any) {
        // Database Context (dc) is mainly needed for extending multiple databases with different access API.

        // Do not use 'require()' here, because this event occurs for every task and transaction being executed,
        // which should be as fast as possible.
        obj.sfcAssy = new SfcAssyRepository(obj, pgp);
        obj.test = new TestRepository(obj, pgp);
        obj.genericSql = new GenericSqlRepository(obj, pgp);
        obj.userOperations = new UserOperationsRepository(obj, pgp);

    }
};
function returnUriToDB() {
        let hostname = JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').hostname).replaceAll("\"","");
        let database = JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').dbname).replaceAll("\"","");
        let user = JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').username).replaceAll("\"","");
        let password = JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').password).replaceAll("\"","");
        let cert = JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').sslcert).replaceAll("\"","");

        let port :number = +JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').port);
        console.log(port + "+");
        if(isNaN(port)){
            port = parseInt(JSON.stringify(xsenv.cfServiceCredentials('postgresql-cf').port));
            console.log("parseInt" + port);
        }
        if(isNaN(port)){
            port = 7023;
            console.log("2615 hardcoded");
        }
      return {
            host: hostname,
            port:  port,
            database: database ,
            user: user,
            password: password,
            ssl: {
                rejectUnauthorized : false,
                ca   : cert
            }
        }
}
// Initializing the library:
const pgp = pgPromise(initOptions);

// Creating the database instance with extensions:
const db = pgp(returnUriToDB());

// Initializing optional diagnostics:
Diagnostics.init(initOptions);

// Alternatively, you can get access to pgp via db.$config.pgp
// See: https://vitaly-t.github.io/pg-promise/Database.html#$config
export {db, pgp};

import {SfcAssyRepository} from './sfcAssy';
import {TestRepository} from './test';
import {GenericSqlRepository} from './genericSql'
import {UserOperationsRepository} from './userOperations'
import {IgenericTables} from "../models";

// Database Interface Extensions:
interface IExtensions {
    sfcAssy: SfcAssyRepository,
    test:TestRepository,
    genericSql:GenericSqlRepository,
    userOperations:UserOperationsRepository,
}

export {
    IExtensions,
    SfcAssyRepository,
    TestRepository,
    GenericSqlRepository,
    UserOperationsRepository
};

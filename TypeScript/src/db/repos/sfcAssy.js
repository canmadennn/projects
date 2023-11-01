"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SfcAssyRepository = void 0;
const sql_1 = require("../sql");
/*
 This repository mixes hard-coded and dynamic SQL, just to show how to use both.
*/
class SfcAssyRepository {
    /**
     * @param db
     * Automated database connection context/interface.
     *
     * If you ever need to access other repositories from this one,
     * you will have to replace type 'IDatabase<any>' with 'any'.
     *
     * @param pgp
     * Library's root, if ever needed, like to access 'helpers'
     * or other namespaces available from the root.
     */
    constructor(db, pgp) {
        this.db = db;
        this.pgp = pgp;
        /*
          If your repository needs to use helpers like ColumnSet,
          you should create it conditionally, inside the constructor,
          i.e. only once, as a singleton.
        */
    }
    // Creates the table;
    create() {
        return this.db.none(sql_1.sfcAssy.create);
    }
    // Initializes the table with some user records, and return their id-s;
    init() {
        return this.db.map(sql_1.sfcAssy.init, [], (row) => row.id);
    }
    // Drops the table;
    drop() {
        return this.db.none(sql_1.sfcAssy.drop);
    }
    // Removes all records from the table;
    empty() {
        return this.db.none(sql_1.sfcAssy.empty);
    }
    // Adds a new user, and returns the new object;
    add(sfcBo, shopOrderBo, resourceBo, operationBo, componentBo, qty, bomComponentBo, insUser) {
        return this.db.one(sql_1.sfcAssy.add, [sfcBo, shopOrderBo, resourceBo, operationBo, componentBo, qty, bomComponentBo, insUser, Date.now()]);
    }
    // Tries to delete a user by id, and returns the number of records deleted;
    removeById(id) {
        return this.db.result('DELETE FROM Z_SFC_ASSY WHERE id = $1', +id, (r) => r.rowCount);
    }
    // Tries to find a user from id;
    findById(id) {
        return this.db.oneOrNone('SELECT * FROM Z_SFC_ASSY WHERE id = $1', +id);
    }
    // Tries to find a user from name;
    findBySfc(sfcBo) {
        return this.db.any('SELECT * FROM Z_SFC_ASSY WHERE SFC_BO = $1', sfcBo);
    }
    markAsDeleteBySfc(sfcBo) {
        return this.db.result('UPDATE Z_SFC_ASSY SET IS_DELETED = ${"X"} WHERE SFC_BO = ${sfcBo}', [], (r) => r.rowCount);
    }
    // Returns all user records;
    all() {
        return this.db.any('SELECT * FROM Z_SFC_ASSY');
    }
    // Returns the total number of users;
    total() {
        return this.db.one('SELECT count(*) FROM Z_SFC_ASSY', [], (a) => +a.count);
    }
}
exports.SfcAssyRepository = SfcAssyRepository;

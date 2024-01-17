/*
    Inserting a few demo users into the database, and returning their id-s;

    NOTES:

    - You can do multiple separate inserts, if you want, but using
      a single concatenated insert is significantly faster.

    See also:
    https://github.com/vitaly-t/pg-promise/wiki/Performance-Boost
*/
INSERT INTO Z_SFC_ASSY(SFC_BO,QTY) VALUES
('SFCBO:PP01,PP1280',2)
RETURNING id

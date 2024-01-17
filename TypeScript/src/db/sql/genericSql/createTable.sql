/*DO $$
BEGIN
  EXECUTE 'CREATE TABLE ' || quote_ident($1) || ' (
    ID SERIAL PRIMARY KEY,
    ' || quote_ident($2) || ' NCHAR(412),
    ' || quote_ident($3) || ' NCHAR(412),
    ' || quote_ident($4) || ' NCHAR(412),
    INSDATE TIMESTAMP
  )';
END $$;
*/

DO $$
DECLARE
  table_name text := 'dynamic_table';
  columns text[] := ARRAY[quote_ident($1)];
  types text[] := ARRAY[quote_ident($2)];
  dynamic_query text;
BEGIN
  dynamic_query := 'CREATE TABLE ' || quote_ident(table_name) || ' (ID SERIAL PRIMARY KEY, ';

  FOR i IN 1..array_length(columns, 1) LOOP
    dynamic_query := dynamic_query || quote_ident(columns[i]) || ' ' || types[i];
    IF i < array_length(columns, 1) THEN
      dynamic_query := dynamic_query || ', ';
    END IF;
  END LOOP;

  dynamic_query := dynamic_query;

  EXECUTE dynamic_query;
END $$;



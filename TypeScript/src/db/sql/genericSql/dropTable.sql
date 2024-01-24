DO $$
BEGIN
  EXECUTE 'DROP TABLE ' || quote_ident($1);
END $$;
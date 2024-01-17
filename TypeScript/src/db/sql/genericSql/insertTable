DO $$
BEGIN
  EXECUTE 'INSERT INTO ' || quote_ident($1) || ' (' ||
          quote_ident($2) || ', ' ||
          quote_ident($3) || ', ' ||
          quote_ident($4) || ', INSDATE) VALUES (''value1'', ''value2'', ''value3'', CURRENT_TIMESTAMP)';
END $$;

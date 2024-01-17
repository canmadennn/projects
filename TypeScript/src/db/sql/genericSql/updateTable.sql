DO $$
BEGIN
  EXECUTE 'UPDATE ' || quote_ident($1) || ' SET ' ||
          quote_ident($2) || ' = ''new_value1'', ' ||
          quote_ident($3) || ' = ''new_value2'', ' ||
          quote_ident($4) || ' = ''new_value3'', INSDATE = CURRENT_TIMESTAMP WHERE id = 1';
END $$;

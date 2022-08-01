## insert on conflict ( duplicate )

[REF](https://www.postgresqltutorial.com/postgresql-tutorial/postgresql-upsert/)

### init database

```sql
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
  customer_id serial PRIMARY KEY,
  name VARCHAR UNIQUE,
  email VARCHAR NOT NULL,
  active bool NOT NULL DEFAULT TRUE
);

INSERT INTO
  customers (name, email)
VALUES
  ('IBM', 'contact@ibm.com'),
  ('Microsoft', 'contact@microsoft.com'),
  ('Intel', 'contact@intel.com');
```

### prevent insert

```sql
INSERT INTO customers (NAME, email)
VALUES('Microsoft','hotline@microsoft.com')
ON CONFLICT ON CONSTRAINT customers_name_key
DO NOTHING;
```

or

```sql
INSERT INTO customers (name, email)
VALUES('Microsoft','hotline@microsoft.com')
ON CONFLICT (name)
DO NOTHING;
```

### concatenate the new email with the old email when inserting a customer that already exists

```sql
INSERT INTO customers (name, email)
VALUES('Microsoft','hotline@microsoft.com')
ON CONFLICT (name)
DO
  UPDATE SET email = EXCLUDED.email || ';' || customers.email;
```

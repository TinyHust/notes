## create indexes for jsonb data

```sql
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  category_id INT NOT NULL,
  name TEXT NOT NULL,
  properties jsonb,
  FOREIGN KEY(category_id) REFERENCES product_categories(id)
)
```

```sql
CREATE INDEX brand_index ON products ((properties->>'brand'));
```

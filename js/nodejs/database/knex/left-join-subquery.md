## subquery in left join

```js
require("sqlite3");
const Knex = require("knex");

const knex = Knex({
  client: "mysql2",
});

knex("orders")
  .select("orders.*", knex.raw("IFNULL(??, 0) as ??", ["x.unread", "unread_messages"]))
  .leftJoin(
    knex("charts")
      .select("id_order", knex.raw("count(*) as ??", ["unread"]))
      .where("read_by_use", 0)
      .groupBy("id_order")
      .as("x"),
    "x.id_order",
    "orders.id_order"
  )
  .where("id_customer", 42)
  .orderBy("date_submitted")
  .toSQL().sql;
```

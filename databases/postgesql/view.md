## sql view

```sql
drop table if exists tb_customer_data cascade;
drop table if exists tb_product_info cascade;
drop table if exists tb_order_details cascade;
drop view if exists order_summary;

create table if not exists tb_customer_data
(
    cust_id         varchar(10) primary key,
    cust_name       varchar(50) not null,
    phone           bigint,
    email           varchar(50),
    address         varchar(250)
);

create table if not exists tb_product_info
(
    prod_id         varchar(10) primary key,
    prod_name       varchar(50) not null,
    brand           varchar(50) not null,
    price           int
);

create table if not exists tb_order_details
(
    ord_id          bigint primary key,
    prod_id         varchar(10) references tb_product_info(prod_id),
    quantity        int,
    cust_id         varchar(10) references tb_customer_data(cust_id),
    disc_percent    int,
    date            date
);

insert into tb_customer_data values
('C1', 'Mohan Kumar', 9900807090, 'mohan@demo.com', 'Bangalore'),
('C2', 'James Xavier', 8800905544, 'james@demo.com', 'Mumbai'),
('C3', 'Priyanka Verma', 9900223333, 'priyanka@demo.com', 'Chennai'),
('C4', 'Eshal Maryam', 9900822111, 'eshal@demo.com', 'Delhi');

insert into tb_product_info values
('P1', 'Samsung S22', 'Samsung', 800),
('P2', 'Google Pixel 6 Pro', 'Google', 900),
('P3', 'Sony Bravia TV', 'Sony', 600),
('P4', 'Dell XPS 17', 'Dell', 2000),
('P5', 'iPhone 13', 'Apple', 800),
('P6', 'Macbook Pro 16', 'Apple', 5000);

insert into tb_order_details values
(1, 'P1', 2, 'C1', 10, '01-01-2020'),
(2, 'P2', 1, 'C2', 0, '01-01-2020'),
(3, 'P2', 3, 'C3', 20, '02-01-2020'),
(4, 'P3', 1, 'C1', 0, '02-01-2020'),
(5, 'P3', 1, 'C1', 0, '03-01-2020'),
(6, 'P3', 4, 'C1', 25, '04-01-2020'),
(7, 'P3', 1, 'C1', 0, '05-01-2020'),
(8, 'P5', 1, 'C2', 0, '02-01-2020'),
(9, 'P5', 1, 'C3', 0, '03-01-2020'),
(10, 'P6', 1, 'C2', 0, '05-01-2020'),
(11, 'P6', 1, 'C3', 0, '06-01-2020'),
(12, 'P6', 5, 'C1', 30, '07-01-2020');


select * from tb_customer_data;
select * from tb_product_info;
select * from tb_order_details;



-- Fetch the order summary (to be given to client/vendor)
create view order_summary
as
select o.ord_id, o.date, c.cust_name, p.prod_name
, (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
from tb_customer_data c
join tb_order_details o on o.cust_id = c.cust_id
join tb_product_info p on p.prod_id = o.prod_id
order by o.ord_id,c.cust_name;


select * from order_summary;


-- Using CREATE or REPLACE
create or replace view order_summary
as
select o.ord_id, o.date, c.cust_name, p.prod_name
, (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
from tb_customer_data c
join tb_order_details o on o.cust_id = c.cust_id
join tb_product_info p on p.prod_id = o.prod_id
order by o.ord_id,c.cust_name;


-- Rules for using CREATE OR REPLACE is:
    -- The column list along with its name and data type should be same as used when creation of the view.
    -- New columns can be added only to end of the column list
    -- JOINS, table list, Order by clause can be changed.

    -- FAIL :: Adding NEW Column in between
    create or replace view order_summary
    as
    select o.ord_id, o.date, c.cust_name, p.prod_name, c.cust_id
    , (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
    from tb_customer_data c
    join tb_order_details o on o.cust_id = c.cust_id
    join tb_product_info p on p.prod_id = o.prod_id
    order by o.ord_id,c.cust_name;

    -- SUCCESS :: Adding NEW Column at the end works.
    create or replace view order_summary
    as
    select o.ord_id, o.date, c.cust_name, p.prod_name, c.cust_id
    , (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
    , c.cust_id
    from tb_customer_data c
    join tb_order_details o on o.cust_id = c.cust_id
    join tb_product_info p on p.prod_id = o.prod_id
    order by o.ord_id,c.cust_name;

    -- FAIL :: Changing DATA TYPE of exisitng column
    create or replace view order_summary
    as
    select o.ord_id::NUMERIC , o.date, c.cust_name, p.prod_name
    , (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
    from tb_customer_data c
    join tb_order_details o on o.cust_id = c.cust_id
    join tb_product_info p on p.prod_id = o.prod_id
    order by o.ord_id,c.cust_name;

    -- FAIL :: Changing column name of existing column.
    create or replace view order_summary
    as
    select o.ord_id, o.date, c.cust_name, p.prod_name as PRD_NAME
    , (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
    from tb_customer_data c
    join tb_order_details o on o.cust_id = c.cust_id
    join tb_product_info p on p.prod_id = o.prod_id
    order by o.ord_id,c.cust_name;

    -- SUCCESS :: Changing JOIN and tables and changing Order by clause is fine.
    create or replace view order_summary
    as
    select o.ord_id, o.date, 'thoufiq'::varchar(50) as cust_name, p.prod_name
    , (p.price * o.quantity) - (p.price * o.quantity) * (o.disc_percent::float/100) as cost
    , 'C99'::varchar(10) as cust_id
    from /*tb_customer_data c
    join */tb_order_details o --on o.cust_id = c.cust_id
    join tb_product_info p on p.prod_id = o.prod_id
    order by o.ord_id;--,c.cust_name;


-- If you want to change the structure of a view then use ALTER VIEW command:
alter view order_summary rename to customer_order_summary;
alter view customer_order_summary rename to order_summary;
alter view order_summary rename column ord_id to order_id;


-- Drop a view using:
drop view order_summary;



-- Advantages of using a view:
/*
1) Security:
2) Simplify complex SQL Queries:

There can be other advantages as well but these I think are the most important ones.

To showcase Security,
lets create a role for our vendor and then give only select access to our view in this role.
*/

CREATE ROLE vendor
LOGIN
PASSWORD 'vendor';

SELECT rolname FROM pg_roles;

GRANT SELECT
ON order_summary
TO vendor;



-- Changing underlying table structure does not automatically change view structure.
create or replace view exp_products
as
select * from tb_product_info where price > 1000;

select * from exp_products;

alter table tb_product_info add column configuration varchar(100);

select * from tb_product_info;



-- Updatable Views:
/*
Only view created over simple SQL Queries.

SQL Query should satisfy following rules:
 - Should contain just one table or view.
 - Should not contains distinct clause, or group by clause
 - SHould not contains window functions and WITH clause.
 */

 -- Views containing more than 1 TABLE/VIEW cannot be updated.
 update order_summary
 set cust_name = 'Raj'
 where ord_id = 1;

-- Views containing DISTINCT cannot be updated.
 create or replace view exp_products
 as
 select distinct * from tb_product_info where price > 1000;

 update exp_products
 set price = 5400
 where prod_id = 'P6';

 -- Views containing GROUP BY cannot be updated.
 create view orders_per_day
 as
 select date, count(1) as no_of_order
 from tb_order_details
 group by date;

 select * from orders_per_day;

 update orders_per_day
 set  no_of_order = 3
 where date = current_date;


 -- Views containing WITH clause cannot be updated.
 create or replace view exp_products
 as
 with temp as (select avg(price) pr from tb_product_info)
 select * from tb_product_info  a
 where price >= (select pr from temp);

 update exp_products
 set price = 5600
 where prod_id = 'P6';


 -- Views containing Window functions cannot be updated.
 create or replace view exp_products
 as
 select a.* , rank() over() as rnk
 from tb_product_info  a
 where price > 1000;

 update exp_products
 set price = 5600
 where prod_id = 'P6';
```

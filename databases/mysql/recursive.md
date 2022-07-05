## Recursive

### Display number from 1 to 10 without using any in built functions
```
with recursive num as
  (select 1 as n
    union
    select n+1 as n
    from num where n < 10
    )
select * from num;
```

**emp_details**

| id      | name                    | manager_id | salary  | designation             |
| :------ | :---------------------- | :--------- | :------ | :---------------------- |
| integer | character varying (100) | integer    | integer | character varying (100) |

### Find the hierarchy of employees under a given manager

#### PostgreSQL
```
with recursive managers as
  (select id as emp_id, name as emp_name, manager_id
   , designation as emp_role, 1 as level
   from emp_details e where id=7
   union
   select e.id as emp_id, e.name as emp_name, e.manager_id
   , e.designation as emp_role, level+1 as level
   from emp_details e
   join managers m on m.emp_id = e.manager_id)
select *
from managers;
```

#### Oracle
```
with  managers (emp_id, emp_name, manager_id, designation, lvl) as
  (select id as emp_id, name as emp_name, manager_id
   , designation as emp_role, 1 as lvl
   from emp_details e where id=7
   union all
   select e.id as emp_id, e.name as emp_name, e.manager_id
   , e.designation as emp_role, lvl+1 as lvl
   from emp_details e
   join managers m on m.emp_id = e.manager_id)
select *
from managers;
```

#### MSSQL (Microsoft SQL Server)
```
with  managers as
  (select id as emp_id, name as emp_name, manager_id
   , designation as emp_role, 1 as level
   from emp_details e where id=7
   union all
   select e.id as emp_id, e.name as emp_name, e.manager_id
   , e.designation as emp_role, level+1 as level
   from emp_details e
   join managers m on m.emp_id = e.manager_id)
select *
from managers;
```

#### MySQL
```
with recursive managers as
  (select id as emp_id, name as emp_name, manager_id
   , designation as emp_role, 1 as level
   from demo.emp_details e where id=7
   union
   select e.id as emp_id, e.name as emp_name, e.manager_id
   , e.designation as emp_role, level+1 as level
   from demo.emp_details e
   join managers m on m.emp_id = e.manager_id)
select *
from managers;
```
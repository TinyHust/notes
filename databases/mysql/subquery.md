## Subquery

**employee**

| emp_id  | emp_name               | dept_name              | salary  |
| :------ | :--------------------- | :--------------------- | :------ |
| integer | character varying (50) | character varying (50) | integer |

**department**

| dept_id | dept_name              | location                |
| :------ | :--------------------- | :---------------------- |
| integer | character varying (50) | character varying (100) |

**sales**

| store_id | store_name             | product_name           | quantity | price   |
| :------- | :--------------------- | :--------------------- | :------- | :------ |
| integer  | character varying (50) | character varying (50) | integer  | integer |

**employee_history**

| emp_id  | emp_name               | dept_name              | salary  | location                |
| :------ | :--------------------- | :--------------------- | :------ | :---------------------- |
| integer | character varying (50) | character varying (50) | integer | character varying (100) |


### find the employees who's salary is more than the average salary earned by all employees
```
select * from employee where salary > (select avg(salary) from employee);
```

#### Scalar subquery ( it always return 1 row and 1 column )
```
select *
from employee e
join ( select avg(salary) sal from employee) avg_sal
  on e.salary > avg_sal.sal;
```

### find the employees who earn the highest salary in each department
```
select *
from employee
where (dept_name, salary) in (select dept_name, max(salary)
                              from employee
                              group by dept_name);
```

### find department who do not have any employee
subquery return single column, multiple rows
```
select *
from department
where dept_name not in (select distinct dept_name from employee);
```

```
select *
from department d
where not exists (select 1 from employee e where e.dept_name = d.dept_name);
```

### correlated subquery
find the employees in each department who earn more than the average salary in that department
```
select *
from employee e1
where salary > (select avg(salary)
               from employee e2
               where e1.dept_name = e2.dept_name);
```

### nested subquery
find store who's sales where better than the average sales accross all stores
```
select *
from (select store_name, sum(price) as total_sales
      from sales
      group by store_name) sales
join (select avg(total_sales) as avg_sales
      from (select store_name, sum(price) as total_sales
            from sales
            group by store_name)) avg_sales
  on sales.total_sales > avg_sales.avg_sales;
```
```
with sales as (
  select store_name, sum(price) as total_sales
  from sales
  group by store_name
)
select *
from sales
join (select avg(total_sales) as avg_sales
      from sales) avg_sales
  on sales.total_sales > avg_sales.avg_sales;
```

### subquery in select
fetch all employee details and add remarks to those employees who earn more than the average pay
```
select *,
  (case
    when salary > (select avg(salary) from employee) 
      then 'Higher than average'
    else null
  end) as remarks
from employee;
```

or (recommended)

```
select *,
  (case
    when salary > avg_sal.sal 
      then 'Higher than average'
    else null
  end) as remarks
from employee
cross join select avg(salary) sal from employee) avg_sal;
```

### subquery in having
find the stores who have sold more units than the average units sold by all stores
```
select store_name, sum(quantity)
from sales
group by store_name
having sum(quantity) > (select avg(sum(quantity)) from sales);
```

### subquery in insert
insert data to employee history table. Make sure not insert duplicate records
```
insert into employee_history
select e.emp_id, e.emp_name, e.dept_name, e.salary, e.location
from employee e
join department d on d.dept_name = e.dept_name
where not exists (select 1 from employee_history eh where eh.emp_id = e.emp_id);
```

### subquery in update
Give 10% increment to all employees in Bangalore location based on the maximum salary earned by an emp in each department.
Only conside employees in employee_history table.
```
update employee e
set salary = (select max(salary) + (max(salary) * 0.1)
              from employee_history eh
              where eh.dept_name = e.dept_name)
where e.dept_name in (select dept_name
                      from department
                      where location = 'Bangalore')
and e.emp_id in (select emp_id from employee_history);
```

### subquery in delete
delete all departments who do not have any employees
```
delete from department
where dept_name not in (select distinct dept_name from employee);
```
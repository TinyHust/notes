## pivot table - rows to column
```sql
/*
QUESTION: Derive the output.
write a query to fetch the results into a desired format.

Solve the problem using CASE statement, PIVOT table and CROSSTAB function.
*/

-- PostgreSQL & Oracle
drop table sales_data;
create table sales_data
    (
        sales_date      date,
        customer_id     varchar(30),
        amount          varchar(30)
    );
insert into sales_data values (to_date('01-Jan-2021','dd-mon-yyyy'), 'Cust-1', '50$');
insert into sales_data values (to_date('02-Jan-2021','dd-mon-yyyy'), 'Cust-1', '50$');
insert into sales_data values (to_date('03-Jan-2021','dd-mon-yyyy'), 'Cust-1', '50$');
insert into sales_data values (to_date('01-Jan-2021','dd-mon-yyyy'), 'Cust-2', '100$');
insert into sales_data values (to_date('02-Jan-2021','dd-mon-yyyy'), 'Cust-2', '100$');
insert into sales_data values (to_date('03-Jan-2021','dd-mon-yyyy'), 'Cust-2', '100$');
insert into sales_data values (to_date('01-Feb-2021','dd-mon-yyyy'), 'Cust-2', '-100$');
insert into sales_data values (to_date('02-Feb-2021','dd-mon-yyyy'), 'Cust-2', '-100$');
insert into sales_data values (to_date('03-Feb-2021','dd-mon-yyyy'), 'Cust-2', '-100$');
insert into sales_data values (to_date('01-Mar-2021','dd-mon-yyyy'), 'Cust-3', '1$');
insert into sales_data values (to_date('01-Apr-2021','dd-mon-yyyy'), 'Cust-3', '1$');
insert into sales_data values (to_date('01-May-2021','dd-mon-yyyy'), 'Cust-3', '1$');
insert into sales_data values (to_date('01-Jun-2021','dd-mon-yyyy'), 'Cust-3', '1$');
insert into sales_data values (to_date('01-Jul-2021','dd-mon-yyyy'), 'Cust-3', '-1$');
insert into sales_data values (to_date('01-Aug-2021','dd-mon-yyyy'), 'Cust-3', '-1$');
insert into sales_data values (to_date('01-Sep-2021','dd-mon-yyyy'), 'Cust-3', '-1$');
insert into sales_data values (to_date('01-Oct-2021','dd-mon-yyyy'), 'Cust-3', '-1$');
insert into sales_data values (to_date('01-Nov-2021','dd-mon-yyyy'), 'Cust-3', '-1$');
insert into sales_data values (to_date('01-Dec-2021','dd-mon-yyyy'), 'Cust-3', '-1$');

select * from sales_data;


-- MySQL
use demo;
drop table sales_data;
create table sales_data
    (
        sales_date      date,
        customer_id     varchar(30),
        amount          varchar(30)
    );
insert into sales_data values (str_to_date('01-Jan-2021','%d-%b-%Y'), 'Cust-1', '50$');
insert into sales_data values (str_to_date('02-Jan-2021','%d-%b-%Y'), 'Cust-1', '50$');
insert into sales_data values (str_to_date('03-Jan-2021','%d-%b-%Y'), 'Cust-1', '50$');
insert into sales_data values (str_to_date('01-Jan-2021','%d-%b-%Y'), 'Cust-2', '100$');
insert into sales_data values (str_to_date('02-Jan-2021','%d-%b-%Y'), 'Cust-2', '100$');
insert into sales_data values (str_to_date('03-Jan-2021','%d-%b-%Y'), 'Cust-2', '100$');
insert into sales_data values (str_to_date('01-Feb-2021','%d-%b-%Y'), 'Cust-2', '-100$');
insert into sales_data values (str_to_date('02-Feb-2021','%d-%b-%Y'), 'Cust-2', '-100$');
insert into sales_data values (str_to_date('03-Feb-2021','%d-%b-%Y'), 'Cust-2', '-100$');
insert into sales_data values (str_to_date('01-Mar-2021','%d-%b-%Y'), 'Cust-3', '1$');
insert into sales_data values (str_to_date('01-Apr-2021','%d-%b-%Y'), 'Cust-3', '1$');
insert into sales_data values (str_to_date('01-May-2021','%d-%b-%Y'), 'Cust-3', '1$');
insert into sales_data values (str_to_date('01-Jun-2021','%d-%b-%Y'), 'Cust-3', '1$');
insert into sales_data values (str_to_date('01-Jul-2021','%d-%b-%Y'), 'Cust-3', '-1$');
insert into sales_data values (str_to_date('01-Aug-2021','%d-%b-%Y'), 'Cust-3', '-1$');
insert into sales_data values (str_to_date('01-Sep-2021','%d-%b-%Y'), 'Cust-3', '-1$');
insert into sales_data values (str_to_date('01-Oct-2021','%d-%b-%Y'), 'Cust-3', '-1$');
insert into sales_data values (str_to_date('01-Nov-2021','%d-%b-%Y'), 'Cust-3', '-1$');
insert into sales_data values (str_to_date('01-Dec-2021','%d-%b-%Y'), 'Cust-3', '-1$');

select * from sales_data;


-- Microsoft SQL Server
drop table sales_data;
create table sales_data
    (
        sales_date      date,
        customer_id     varchar(30),
        amount          varchar(30)
    );
insert into sales_data values (convert(datetime, '01-Jan-2021',105), 'Cust-1', '50$');
insert into sales_data values (convert(datetime, '02-Jan-2021',105), 'Cust-1', '50$');
insert into sales_data values (convert(datetime, '03-Jan-2021',105), 'Cust-1', '50$');
insert into sales_data values (convert(datetime, '01-Jan-2021',105), 'Cust-2', '100$');
insert into sales_data values (convert(datetime, '02-Jan-2021',105), 'Cust-2', '100$');
insert into sales_data values (convert(datetime, '03-Jan-2021',105), 'Cust-2', '100$');
insert into sales_data values (convert(datetime, '01-Feb-2021',105), 'Cust-2', '-100$');
insert into sales_data values (convert(datetime, '02-Feb-2021',105), 'Cust-2', '-100$');
insert into sales_data values (convert(datetime, '03-Feb-2021',105), 'Cust-2', '-100$');
insert into sales_data values (convert(datetime, '01-Mar-2021',105), 'Cust-3', '1$');
insert into sales_data values (convert(datetime, '01-Apr-2021',105), 'Cust-3', '1$');
insert into sales_data values (convert(datetime, '01-May-2021',105), 'Cust-3', '1$');
insert into sales_data values (convert(datetime, '01-Jun-2021',105), 'Cust-3', '1$');
insert into sales_data values (convert(datetime, '01-Jul-2021',105), 'Cust-3', '-1$');
insert into sales_data values (convert(datetime, '01-Aug-2021',105), 'Cust-3', '-1$');
insert into sales_data values (convert(datetime, '01-Sep-2021',105), 'Cust-3', '-1$');
insert into sales_data values (convert(datetime, '01-Oct-2021',105), 'Cust-3', '-1$');
insert into sales_data values (convert(datetime, '01-Nov-2021',105), 'Cust-3', '-1$');
insert into sales_data values (convert(datetime, '01-Dec-2021',105), 'Cust-3', '-1$');

select * from sales_data;



-- SOLUTIONS:
/*
Different parts of the query:
1) Aggregate the sales amount for each customer per month:
    - Build the base SQL query:
        - Remove $ symbol
        - Transform sales_date to fetch only the month and year.
2) Aggregate the sales amount per month irrespective of the customer.
3) Aggregate the sales amount per each customer irrespective of the month.
4) Transform final output:
    - Replace negative sign with parenthesis.
    - Suffix amount with $ symbol.
*/


-- SQL Server
with sales as
        (select *
        from
            (
                select customer_id as Customer
                , format(sales_date, 'MMM-yy') as sales_date
                , cast(replace(amount, '$', '') as int) as amount
                from sales_data
            ) as sales
        pivot
            (
                sum(amount)
                for sales_date in ([Jan-21], [Feb-21], [Mar-21], [Apr-21]
                                ,[May-21], [Jun-21], [Jul-21], [Aug-21]
                                ,[Sep-21], [Oct-21], [Nov-21], [Dec-21])
            ) as pivot_table
        UNION
        select *
        from
            (
                select 'Total' Customer
                , format(sales_date, 'MMM-yy') as sales_date
                , cast(replace(amount, '$', '') as int) as amount
                from sales_data
            ) as sales
        pivot
            (
                sum(amount)
                for sales_date in ([Jan-21], [Feb-21], [Mar-21], [Apr-21]
                                ,[May-21], [Jun-21], [Jul-21], [Aug-21]
                                ,[Sep-21], [Oct-21], [Nov-21], [Dec-21])
            ) as pivot_table ),
    final_data as
        (select Customer
        , coalesce([Jan-21], 0) as Jan_21
        , coalesce([Feb-21], 0) as Feb_21
        , coalesce([Mar-21], 0) as Mar_21
        , coalesce([Apr-21], 0) as Apr_21
        , coalesce([May-21], 0) as May_21
        , coalesce([Jun-21], 0) as Jun_21
        , coalesce([Jul-21], 0) as Jul_21
        , coalesce([Aug-21], 0) as Aug_21
        , coalesce([Sep-21], 0) as Sep_21
        , coalesce([Oct-21], 0) as Oct_21
        , coalesce([Nov-21], 0) as Nov_21
        , coalesce([Dec-21], 0) as Dec_21
        from sales)
select Customer
, case when Jan_21 < 0 then concat('(', Jan_21 * -1, ')$') else concat(Jan_21, '$') end as [Jan-21]
, case when Feb_21 < 0 then concat('(', Feb_21 * -1, ')$') else concat(Feb_21, '$') end as [Feb-21]
, case when Mar_21 < 0 then concat('(', Mar_21 * -1, ')$') else concat(Mar_21, '$') end as [Mar-21]
, case when Apr_21 < 0 then concat('(', Apr_21 * -1, ')$') else concat(Apr_21, '$') end as [Apr-21]
, case when May_21 < 0 then concat('(', May_21 * -1, ')$') else concat(May_21, '$') end as [May-21]
, case when Jun_21 < 0 then concat('(', Jun_21 * -1, ')$') else concat(Jun_21, '$') end as [Jun-21]
, case when Jul_21 < 0 then concat('(', Jul_21 * -1, ')$') else concat(Jul_21, '$') end as [Jul-21]
, case when Aug_21 < 0 then concat('(', Aug_21 * -1, ')$') else concat(Aug_21, '$') end as [Aug-21]
, case when Sep_21 < 0 then concat('(', Sep_21 * -1, ')$') else concat(Sep_21, '$') end as [Sep-21]
, case when Oct_21 < 0 then concat('(', Oct_21 * -1, ')$') else concat(Oct_21, '$') end as [Oct-21]
, case when Nov_21 < 0 then concat('(', Nov_21 * -1, ')$') else concat(Nov_21, '$') end as [Nov-21]
, case when Dec_21 < 0 then concat('(', Dec_21 * -1, ')$') else concat(Dec_21, '$') end as [Dec-21]
, case when Customer = 'Total' then null
       else case when (Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21) < 0
                     then concat('(', (Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21) * -1 , ')$')
                 else concat((Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21), '$')
            end
  end as Total
from final_data;


-- Oracle
with sales as
        (select *
        from
            (
                select customer_id as Customer
                , to_char(sales_date, 'Mon-YY') as sales_date
                , cast(replace(amount, '$', '') as int) as amount
                from sales_data
            )
        pivot
            (
                sum(amount)
                for sales_date in ('Jan-21' as Jan_21, 'Feb-21' as Feb_21, 'Mar-21' as Mar_21, 'Apr-21' as Apr_21
                                  ,'May-21' as May_21, 'Jun-21' as Jun_21, 'Jul-21' as Jul_21, 'Aug-21' as Aug_21
                                  ,'Sep-21' as Sep_21, 'Oct-21' as Oct_21, 'Nov-21' as Nov_21, 'Dec-21' as Dec_21)
            )
        UNION
        select *
        from
            (
                select 'Total' Customer
                , to_char(sales_date, 'Mon-YY') as sales_date
                , cast(replace(amount, '$', '') as int) as amount
                from sales_data
            )
        pivot
            (
                sum(amount)
                for sales_date in ('Jan-21' as Jan_21, 'Feb-21' as Feb_21, 'Mar-21' as Mar_21, 'Apr-21' as Apr_21
                                  ,'May-21' as May_21, 'Jun-21' as Jun_21, 'Jul-21' as Jul_21, 'Aug-21' as Aug_21
                                  ,'Sep-21' as Sep_21, 'Oct-21' as Oct_21, 'Nov-21' as Nov_21, 'Dec-21' as Dec_21)
            ) ),
    final_data as
        (select Customer
        , NVL(Jan_21, 0) as Jan_21
        , NVL(Feb_21, 0) as Feb_21
        , NVL(Mar_21, 0) as Mar_21
        , NVL(Apr_21, 0) as Apr_21
        , NVL(May_21, 0) as May_21
        , NVL(Jun_21, 0) as Jun_21
        , NVL(Jul_21, 0) as Jul_21
        , NVL(Aug_21, 0) as Aug_21
        , NVL(Sep_21, 0) as Sep_21
        , NVL(Oct_21, 0) as Oct_21
        , NVL(Nov_21, 0) as Nov_21
        , NVL(Dec_21, 0) as Dec_21
        from sales)
select Customer
, case when Jan_21 < 0 then '(' || Jan_21 * -1 || ')$' else Jan_21 || '$' end as "Jan-21"
, case when Feb_21 < 0 then '(' || Feb_21 * -1 || ')$' else Feb_21 || '$' end as "Feb-21"
, case when Mar_21 < 0 then '(' || Mar_21 * -1 || ')$' else Mar_21 || '$' end as "Mar-21"
, case when Apr_21 < 0 then '(' || Apr_21 * -1 || ')$' else Apr_21 || '$' end as "Apr-21"
, case when May_21 < 0 then '(' || May_21 * -1 || ')$' else May_21 || '$' end as "May-21"
, case when Jun_21 < 0 then '(' || Jun_21 * -1 || ')$' else Jun_21 || '$' end as "Jun-21"
, case when Jul_21 < 0 then '(' || Jul_21 * -1 || ')$' else Jul_21 || '$' end as "Jul-21"
, case when Aug_21 < 0 then '(' || Aug_21 * -1 || ')$' else Aug_21 || '$' end as "Aug-21"
, case when Sep_21 < 0 then '(' || Sep_21 * -1 || ')$' else Sep_21 || '$' end as "Sep-21"
, case when Oct_21 < 0 then '(' || Oct_21 * -1 || ')$' else Oct_21 || '$' end as "Oct-21"
, case when Nov_21 < 0 then '(' || Nov_21 * -1 || ')$' else Nov_21 || '$' end as "Nov-21"
, case when Dec_21 < 0 then '(' || Dec_21 * -1 || ')$' else Dec_21 || '$' end as "Dec-21"
, case when Customer = 'Total' then null
       else case when (Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21) < 0
                     then '(' || (Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21) * -1 || ')$'
                 else (Jan_21 + Feb_21 + Mar_21 + Apr_21 + May_21 + Jun_21 + Jul_21 + Aug_21 + Sep_21 + Oct_21 + Nov_21 + Dec_21) || '$'
            end
  end as Total
from final_data;


-- PostgreSQL
with sales as
		(select *
		from crosstab('select customer_id as Customer
						, to_char(sales_date, ''Mon-YY'') as sales_date
						, sum(cast(replace(amount, ''$'', '''') as int)) as amount
						from sales_data
						group by customer_id, to_char(sales_date, ''Mon-YY'')
						order by 1',
					 'values (''Jan-21''), (''Feb-21''), (''Mar-21''), (''Apr-21''), (''May-21''), (''Jun-21'')
							,(''Jul-21''), (''Aug-21''), (''Sep-21''), (''Oct-21''), (''Nov-21''), (''Dec-21'')')
			as (Customer varchar, Jan_21 bigint, Feb_21 bigint, Mar_21 bigint, Apr_21 bigint, May_21 bigint, Jun_21 bigint
								, Jul_21 bigint, Aug_21 bigint, Sep_21 bigint, Oct_21 bigint, Nov_21 bigint, Dec_21 bigint)
		union
		select *
		from crosstab('select ''Total'' as Customer
						, to_char(sales_date, ''Mon-YY'') as sales_date
						, sum(cast(replace(amount, ''$'', '''') as int)) as amount
						from sales_data
						group by to_char(sales_date, ''Mon-YY'')
						order by 1',
					 'values (''Jan-21''), (''Feb-21''), (''Mar-21''), (''Apr-21''), (''May-21''), (''Jun-21'')
							,(''Jul-21''), (''Aug-21''), (''Sep-21''), (''Oct-21''), (''Nov-21''), (''Dec-21'')')
			as (Customer varchar, Jan_21 bigint, Feb_21 bigint, Mar_21 bigint, Apr_21 bigint, May_21 bigint, Jun_21 bigint
								, Jul_21 bigint, Aug_21 bigint, Sep_21 bigint, Oct_21 bigint, Nov_21 bigint, Dec_21 bigint)
		order by 1),
	final_data as
		(select customer
		 , coalesce(Jan_21, 0) as Jan_21
		 , coalesce(Feb_21, 0) as Feb_21
		 , coalesce(Mar_21, 0) as Mar_21
		 , coalesce(Apr_21, 0) as Apr_21
		 , coalesce(May_21, 0) as May_21
		 , coalesce(Jun_21, 0) as Jun_21
		 , coalesce(Jul_21, 0) as Jul_21
		 , coalesce(Aug_21, 0) as Aug_21
		 , coalesce(Sep_21, 0) as Sep_21
		 , coalesce(Oct_21, 0) as Oct_21
		 , coalesce(Nov_21, 0) as Nov_21
		 , coalesce(Dec_21, 0) as Dec_21
		 from sales)
select customer
, case when Jan_21 < 0 then concat('(', Jan_21 * -1, ')$') else concat(Jan_21, '$') end as "Jan-21"
, case when Feb_21 < 0 then concat('(', Feb_21 * -1, ')$') else concat(Feb_21, '$') end as "Feb-21"
, case when Mar_21 < 0 then concat('(', Mar_21 * -1, ')$') else concat(Mar_21, '$') end as "Mar-21"
, case when Apr_21 < 0 then concat('(', Apr_21 * -1, ')$') else concat(Apr_21, '$') end as "Apr-21"
, case when May_21 < 0 then concat('(', May_21 * -1, ')$') else concat(May_21, '$') end as "May-21"
, case when Jun_21 < 0 then concat('(', Jun_21 * -1, ')$') else concat(Jun_21, '$') end as "Jun-21"
, case when Jul_21 < 0 then concat('(', Jul_21 * -1, ')$') else concat(Jul_21, '$') end as "Jul-21"
, case when Aug_21 < 0 then concat('(', Aug_21 * -1, ')$') else concat(Aug_21, '$') end as "Aug-21"
, case when Sep_21 < 0 then concat('(', Sep_21 * -1, ')$') else concat(Sep_21, '$') end as "Sep-21"
, case when Oct_21 < 0 then concat('(', Oct_21 * -1, ')$') else concat(Oct_21, '$') end as "Oct-21"
, case when Nov_21 < 0 then concat('(', Nov_21 * -1, ')$') else concat(Nov_21, '$') end as "Nov-21"
, case when Dec_21 < 0 then concat('(', Dec_21 * -1, ')$') else concat(Dec_21, '$') end as "Dec-21"
, case when customer = 'Total' then null
	   else case when (Jan_21+Feb_21+Mar_21+Apr_21+May_21+Jun_21+Jul_21+Aug_21+Sep_21+Oct_21+Nov_21+Dec_21) < 0
	   				 then concat('(', (Jan_21+Feb_21+Mar_21+Apr_21+May_21+Jun_21+Jul_21+Aug_21+Sep_21+Oct_21+Nov_21+Dec_21)*-1, ')$')
	   			 else concat((Jan_21+Feb_21+Mar_21+Apr_21+May_21+Jun_21+Jul_21+Aug_21+Sep_21+Oct_21+Nov_21+Dec_21), '$')
	   		end
  end as Total
from final_data;






-- MySQL
with sales as
		(select customer_id as Customer
		, date_format(sales_date, '%b-%y') as sales_date
		, replace(amount, '$', '') as amount
		from sales_data),
    sales_per_cust as
		(select Customer
		, sum(case when sales_date = 'Jan-21' then amount else 0 end) as Jan_21
		, sum(case when sales_date = 'Feb-21' then amount else 0 end) as Feb_21
		, sum(case when sales_date = 'Mar-21' then amount else 0 end) as Mar_21
		, sum(case when sales_date = 'Apr-21' then amount else 0 end) as Apr_21
		, sum(case when sales_date = 'May-21' then amount else 0 end) as May_21
		, sum(case when sales_date = 'Jun-21' then amount else 0 end) as Jun_21
		, sum(case when sales_date = 'Jul-21' then amount else 0 end) as Jul_21
		, sum(case when sales_date = 'Aug-21' then amount else 0 end) as Aug_21
		, sum(case when sales_date = 'Sep-21' then amount else 0 end) as Sep_21
		, sum(case when sales_date = 'Oct-21' then amount else 0 end) as Oct_21
		, sum(case when sales_date = 'Nov-21' then amount else 0 end) as Nov_21
		, sum(case when sales_date = 'Dec-21' then amount else 0 end) as Dec_21
		, sum(amount) as Total
		from sales s
		group by Customer),
	sales_per_month as
		(select 'Total' as Customer
		, sum(case when sales_date = 'Jan-21' then amount else 0 end) as Jan_21
		, sum(case when sales_date = 'Feb-21' then amount else 0 end) as Feb_21
		, sum(case when sales_date = 'Mar-21' then amount else 0 end) as Mar_21
		, sum(case when sales_date = 'Apr-21' then amount else 0 end) as Apr_21
		, sum(case when sales_date = 'May-21' then amount else 0 end) as May_21
		, sum(case when sales_date = 'Jun-21' then amount else 0 end) as Jun_21
		, sum(case when sales_date = 'Jul-21' then amount else 0 end) as Jul_21
		, sum(case when sales_date = 'Aug-21' then amount else 0 end) as Aug_21
		, sum(case when sales_date = 'Sep-21' then amount else 0 end) as Sep_21
		, sum(case when sales_date = 'Oct-21' then amount else 0 end) as Oct_21
		, sum(case when sales_date = 'Nov-21' then amount else 0 end) as Nov_21
		, sum(case when sales_date = 'Dec-21' then amount else 0 end) as Dec_21
		, '' as Total
		from sales s),
	final_data as
		(select * from sales_per_cust
		UNION
		select * from sales_per_month)
select Customer
, case when Jan_21 < 0 then concat('(', Jan_21 * -1 , ')$') else concat(Jan_21, '$') end as "Jan-21"
, case when Feb_21 < 0 then concat('(', Feb_21 * -1 , ')$') else concat(Feb_21, '$') end as "Feb-21"
, case when Mar_21 < 0 then concat('(', Mar_21 * -1 , ')$') else concat(Mar_21, '$') end as "Mar-21"
, case when Apr_21 < 0 then concat('(', Apr_21 * -1 , ')$') else concat(Apr_21, '$') end as "Apr-21"
, case when May_21 < 0 then concat('(', May_21 * -1 , ')$') else concat(May_21, '$') end as "May-21"
, case when Jun_21 < 0 then concat('(', Jun_21 * -1 , ')$') else concat(Jun_21, '$') end as "Jun-21"
, case when Jul_21 < 0 then concat('(', Jul_21 * -1 , ')$') else concat(Jul_21, '$') end as "Jul-21"
, case when Aug_21 < 0 then concat('(', Aug_21 * -1 , ')$') else concat(Aug_21, '$') end as "Aug-21"
, case when Sep_21 < 0 then concat('(', Sep_21 * -1 , ')$') else concat(Sep_21, '$') end as "Sep-21"
, case when Oct_21 < 0 then concat('(', Oct_21 * -1 , ')$') else concat(Oct_21, '$') end as "Oct-21"
, case when Nov_21 < 0 then concat('(', Nov_21 * -1 , ')$') else concat(Nov_21, '$') end as "Nov-21"
, case when Dec_21 < 0 then concat('(', Dec_21 * -1 , ')$') else concat(Dec_21, '$') end as "Dec-21"
, case when Total = '' then ''
	   when Total < 0 then concat('(', Total * -1 , ')$')
	   else concat(Total, '$') end as "Total"
from final_data;
```

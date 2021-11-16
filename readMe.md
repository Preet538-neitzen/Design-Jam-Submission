---
title = "Check if String exists in Data using MySQL"
date = 2021-11-16
draft = false
keywords = ["mysql string contains"]
description = "This tutorial demonstrates how to check whether a string occurs in a table in MySQL."
tags = ["MySQL", "Strings"]
author = "Preet Sanghavi"
postlink = 2602252
inarticle = true

---

In this tutorial, we aim at exploring different methods to check the presence of a string in a table in MySQL.

We will go through the following techniques in MySQL.
1. INSTR function
2. LOCATE function
3. LIKE Operator

However, before we begin, we create a dummy dataset to work with. Here we create a table, `student_details`, along with a few rows in it. 

```SQL
-- create the table student_details
CREATE TABLE student_details(
  stu_id int,
  stu_firstName varchar(255) DEFAULT NULL,
  stu_lastName varchar(255) DEFAULT NULL,
  primary key(stu_id)
);
-- insert rows to the table student_details
INSERT INTO student_details(stu_id,stu_firstName,stu_lastName) 
 VALUES(1,"Preet","Sanghavi"),
 (2,"Rich","John"),
 (3,"Veron","Brow"),
 (4,"Geo","Jos"),
 (5,"Hash","Shah"),
 (6,"Sachin","Parker"),
 (7,"David","Miller");
```

The above query creates a table along with rows with student first name and last name in it. In order to view the entries in the data, we use the following code.

```SQL
SELECT * FROM student_details;
```
The above code would give the following output:
```SQL
stu_id	stu_firstName	stu_lastName
1	      Preet	        Sanghavi
2	      Rich	        John
3	      Veron	        Brow
4	      Geo	          Jos
5	      Hash	        Shah
6	      Sachin	      Parker
7	      David	        Miller
```

**Let's aim at finding all the students that contains the word 'Parker' in their surname.**

## 1. Finding the student with last name as 'Parker' using the LOCATE function in MySQL.

The locate function in MySQL generally takes 2 arguements such as LOCATE(substr, str). Here, substr is the substring passed in as the first argument, and str is the string passed in as the second argument. The output of the LOCATE function is the first row with the occurence of the string that is passed as an arguement. To see this function in action, take a look at the code below.

```SQL
-- finding the word 'Park' from the table where the last name of the student is Park.
SELECT * FROM student_details WHERE LOCATE('Park', stu_lastName) > 0 ;
```
The above code would give the following output:
```SQL
stu_id	stu_firstName	stu_lastName
6	    Sachin	        Parker
```

## 2. Finding the student with last name as 'Parker' using the INSTR function in MySQL.

Similar to the LOCATE function, the INSTR function, INSTR(str, substr), takes 2 arguements. However, this function returns the index value of the very first time the string occurs in the substring passed in as parameters. Here, the `str` is the string passed in as the first argument, and `substr` is the substring passed in as the second argument. To see this function in action, take a look at the code below.


```SQL
-- finding the word 'Park' from the table where the last name of the student is Park.
SELECT * FROM student_details WHERE INSTR(stu_lastName , 'Parker') > 0;
```
The above code would give the following output:
```SQL
stu_id	stu_firstName	stu_lastName
6	      Sachin	      Parker
```

**Note: The way the arguements are passed in the LOCATE(substr,str) and INSTR(str,substr) functions is different.**

## 3. Finding the student with last name as 'Parker' using the LIKE operator in MySQL.

Another alternative to find the existence of a string in your data is to use `LIKE`. This operator is used along with the `WHERE` clause to look for a particular string. To see this technique in action, take a look at the code below.   


```SQL
-- finding the word 'Park' from the table where the last name of the student is Parker.
SELECT * FROM student_details WHERE stu_lastName LIKE 'Parker' ;
```
The above code would again give the following output:
```SQL
stu_id	stu_firstName	stu_lastName
6	      Sachin	      Parker
```

Moreover, a `%`, also known as the wildcard is also used along with the LIKE operator. This wildcard, as the name suggests, represents none, one or multiple characters in its place. To see this wildcard in action, take a look at the code below.   

```SQL
-- finding the student with last name ending in 'arker' from the table.
SELECT * FROM student_details WHERE stu_lastName LIKE '%arker' ;
```
The above code would again give the following output:
```SQL
stu_id	stu_firstName	stu_lastName
6	      Sachin	      Parker
```

Thus, with the help of the above three techniques, we can efficiently find determine the existence of a string from a table. 

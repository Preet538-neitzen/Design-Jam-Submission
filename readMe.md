+++
title = "Check if String exists in Data using MySQL"
date = 2021-11-16
draft = false
keywords = ["mysql string contains"]
description = "This tutorial demonstrates how to check whether a string occurs in a table in MySQL."
tags = ["MySQL", "Strings"]
author = "Preet Sanghavi"
postlink = 2602252
inarticle = true

+++

In this tutorial, we aim at exploring different methods to check the presence of a string in a table in MySQL.

We will go through the following techniques in MySQL.
- INSTR function
- LOCATE function
- `%` wildcard

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
![Output](https://myoctocat.com/assets/images/base-octocat.svg)

**Let's aim at finding all the students that contains the word 'Park'.**

## Finding the string 'Park' using the LOCATE function in MySQL.

The locate function in MySQL generally takes 2 arguements such as LOCATE(substr, str). Here 




Output:

```python
   a  b  c  d
0  4  4  4  0
1  8  1  2  5
2  3  0  4  3
3  3  7  2  4
4  8  3  1  8
5  6  7  5  9
```

## Add Pandas `DataFrame` `header` Row (Pandas DataFrame Column Names) by Using `dataframe.columns`

We can also add `header` row to `dataframe` by using `dataframe.columns`.

<!--adsense-->

Example Codes:

```python
# python 3.x
import pandas as pd
import numpy as np

df = pd.DataFrame(data=np.random.randint(0, 10, (6,4)))

df.columns=["a", "b", "c", "d"]
print(df)
```

Output:

```python
   a  b  c  d
0  5  2  6  7
1  4  5  9  0
2  8  3  0  4
3  6  3  1  1
4  9  3  4  8
5  7  5  0  6
```

## Add Pandas `DataFrame` `header` Row (Pandas DataFrame Column Names) Without Replacing Current `header`

Another option is to add the header row as an additional column index level to make it a MultiIndex. This approach is helpful when we need an extra layer of information for columns.

Example Codes:

<!--adsense-->

```python
# python 3.x
import pandas as pd
import numpy as np
df = pd.DataFrame(
    data=np.random.randint(
        0, 10, (6,4)),
    columns=["a", "b", "c", "d"])
df.columns = pd.MultiIndex.from_tuples(
    zip(['A', 'B','C', 'D'], 
        df.columns))
print(df)
```

Output:

```python
   A  B  C  D
   a  b  c  d
0  2  6  4  6
1  5  0  5  1
2  9  6  6  1
3  8  9  7  4
4  6  5  6  6
5  3  9  1  5
```

## Add Panda DataFrame `header` Row (Pandas DataFrame Column Names) to `dataframe` When Reading CSV Files

We can use `names` directly in the `read_csv`, or set `header=None` explicitly if a file has no header.

Example Codes:

```python
# python 3.x
import pandas as pd
import numpy as np
df = pd.Cov = pd.read_csv(
    "path/to/file.csv", 
     sep='\t', 
     names=["a", "b", "c", "d"])
```xxxxxxxxxx from matplotlib import pyplot as pltfrom datetime import datetime, timedeltaxvalues = range(10)yvalues = xvaluesfig,ax = plt.subplots()plt.plot(xvalues, yvalues)ax.tick_params(axis='x', labelsize=16)plt.grid(True)plt.show()python

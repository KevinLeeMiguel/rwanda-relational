# rwanda-relational

### This is a simple package made with relational databases and the backend in mind. (note: no-sql dbs can also take advantage of this package)

# Overview

## Problem Statement

When developing softwares or web applications in **Rwanda**, in most cases you will find yourself with a need to implement the structure of **Rwanda** (by structure I mean Provinces, Districts,...,up to Villages). 

And this can be a lot of work from implementing a database structure to support this in the backend and the way to pass the data to the frontend in an effective way. and let's not forget where to get the data and how to pre-populate the data in your database.

So most of the times when the backend is set and the frontend needs to use this data, this can be resource consuming depending on the implementation. In most cases where every time a user wants to select from the locations there's at least a request that goes to the backend. which can be hectic and resource consuming.

## Proposed Solution

This packages offers a way to have a `json` that acts like a copy of your database on the frontend and a way to ship the data from this package to your database easily.

### data format

```json
province : {
    "id": 1,
    "name" : "Kigali",
    "location_type": "Province", 
}

district : {
    "id": 7,
    "name": "Gasabo",
    "location_type": "District",
    "parent_id" : 1
}

sector, cell, and village share the same format as the district only thing that changes is the location_type value.

```

The above data format allows the developer to set a minimalistic and yet robust database structure in any type of language as long as they follow the same format as the one above.

for example:

Python/Django: 

```python

class Location(models.Model):
    name = models.CharField()
    location_type = models.CharField()
    parent = models.ForeignKey(to=self, null=True)

```

Java:

```java
    Class Location() {

        private int id;
        private String name;
        private String location_type;
        private Location parent;

    }
```

This shows that after setting the backend the developper can just make an endpoint to receive the data from this package and save them to his database. and he will be set.

## Installation guide

This package can be installed using npm:

``` npm install rwanda-relational ```

## Usage

this package is very easy to use, it exposes `6` methods that will get the job done.

```js 
const { provinces, districts, sectors, cells, villages, all } = require('rwanda-relational')

provinces() // will return a list of all provinces.

districts() // will return a list of all districts.

sectors()   // will return a list of all sectors.

cells()     // will return a list of all cells.

villages()  // will return a list of all villages.

all()  // will return a list of all locations from provinces to villages.

```





### Query and Filtering


*Any  method allows a query parameter which is an object that looks like this ```js {id: 1} ``` or ```js {parent_id: 2} ```, an exception is on the `provinces` method since a province doesn't have a parent.*

*For now the query parameter is limited to `2` fields only, the `id` and the `parent_id` fields.*

#### The `id` field (Query by id)

This is used to get a single location by `id`.

```js
const { provinces, districts, sectors, cells, villages, all } = require('rwanda-relational')

provinces({ id: 1 }) // Note that this is applicable on every method exposed. 

```

#### The `parent_id` field (Query by id)

This is used to get a list of children by just using their `parent_id`.

```js
const { provinces, districts, sectors, cells, villages, all } = require('rwanda-relational')

districts({ parent_id: 2 }) // Note that this is applicable on every instance that has a parent.

```


## Conclusion

This package is opensource and free to use by any developer in need, and will be upgraded and features will be added from time to time if you want to contribute to this package you are very welcome any contribution is very valuable from fixing/improving the documentation to adding features.

*Made with Love.*
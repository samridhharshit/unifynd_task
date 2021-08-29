# The Task

* Read the users from the xml, csv and json files within the `data` directory.
* Merge all users into a single list and sort them by their `userId` in ascending order.
* Write the ordered results to new xml, csv and json files. See the `examples` directory for examples.
  * Results should use the same structure as the source files they were parsed from.
  * The exception is for `lastLoginTime` where an `ISO 8601` date format is preferred for output.
  

# Stack used :
 1. NodeJs

# Libraries used

1. csvtojson -> for converting csv to json data
2. express -> for code simplicity
3. fs -> for reading files
4. nodemon -> for continuous watching the updated results
5. xml2json -> for converting xml data to json

## Tasks completed :
1. merging all the data from respective files.
2. sorting the merged data
3. pushing the json data converted to json file.

## Tasks remaining :

1. pushing the json data to csv and xml files respectively.



// On data/array-data.json
// Push on string
db.friends.aggregate([
  {$group: {_id: {age: "$age"}, allNames: {$push: "$name"}}}
]).pretty()

// Push on array: they are in nested arrays, so not ideal
db.friends.aggregate([
  {$group: {_id: {age: "$age"}, allHobbbies: {$push: "$hobbies"}}}
]).pretty()

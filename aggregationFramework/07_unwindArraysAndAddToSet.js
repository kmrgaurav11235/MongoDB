// On data/array-data.json
// Unwind Array: create one document for each value in array
db.friends.aggregate([
  {$unwind: "$hobbies"}
]).pretty()

// Unwind + Push: leads to duplicate values in allHobbbies
db.friends.aggregate([
  {$unwind: "$hobbies"},
  {$group: {_id: {age: "$age"}, allHobbbies: {$push: "$hobbies"}}}
]).pretty()

// Unwind + addToSet: eliminates duplicate values in allHobbbies
db.friends.aggregate([
  {$unwind: "$hobbies"},
  {$group: {_id: {age: "$age"}, allHobbbies: {$addToSet: "$hobbies"}}}
]).pretty()

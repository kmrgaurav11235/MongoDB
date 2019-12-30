// On data/array-data.json
// 1st element of array
db.friends.aggregate([
  {$project: {_id: 0, name: 1, firstExamScore: {$slice: ["$examScore", 1]}}}
]).pretty()

// Last element of array
db.friends.aggregate([
  {$project: {_id: 0, name: 1, lastExamScore: {$slice: ["$examScore", -1]}}}
]).pretty()

// Start from 2nd element and get 1 element
db.friends.aggregate([
  {$project: {_id: 0, name: 1, midExamScore: {$slice: ["$examScore", 1, 1]}}}
]).pretty()

// On data/persons.json
db.persons.aggregate([
  { $match: { "gender": "female"} },
  { $group: { _id: { "state": "$location.state" }, "totalPersons": { $sum: 1 } } },
  { $sort: { "totalPersons": -1 } }
]).pretty()

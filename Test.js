db.oersons.collection.aggregate([
  {
    $match: {
      isActive: true,    // Matches documents where isActive is true
      gender: "female"   // Matches documents where gender is female
    }
  },
  {
    $group: {
      _id: "$favoriteFruit",   // Groups documents by the value of the favoriteFruit field
      count: { $sum: 1 }       // Counts the number of documents in each group
    }
  }
])

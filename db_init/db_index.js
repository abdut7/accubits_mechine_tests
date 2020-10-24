//Name unique index
db.cln_user.createIndex({
    "strName": 1,
    "chrStatus": 1
}, {
    name: "user_strName_chrStatus",
    partialFilterExpression: {
        "chrStatus": {
            $eq: "N"
        }
    },
    collation: {
        locale: "en",
        strength: 2
    },
    unique: true
})
//Email unique index
db.cln_user.createIndex({
    "strEmail": 1,
    "chrStatus": 1
}, {
    name: "user_strEmail_chrStatus",
    partialFilterExpression: {
        "chrStatus": {
            $eq: "N"
        }
    },
    collation: {
        locale: "en",
        strength: 2
    },
    unique: true
})

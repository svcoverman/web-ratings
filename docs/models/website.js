const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const websiteSchema = new Schema({
  {
    "_id" : "5e1a043d2335abbd11426a10",
    "id" : "SITE_ID",
    "title" : "TITLE_OF_SITE",
    "description" : "SITE_DESCRIPTION",
    "thumbnail" : "THUMBNAIL_URL",
    "url" : "SITE_URL",
    "category" : "CATEGORY",
    "date" : "DATE_CREATED",
    "rating" : [ 
        {
            "user" : "RATED_BY",
            "score" : "NUMBER"
        }
    ],
    "comments" : [ 
        {
            "user" : "COMMENT_BY",
            "message" : "TEXT",
            "dateCreated" : "DATE_TIME",
            "likes" : "LIKES"
        }, 
        {
            "user" : "COMMENT_BY",
            "message" : "TEXT",
            "dateCreated" : "DATE_TIME",
            "like" : "LIKES"
        }
    ]
}
});

const Website = mongoose.model("Website", websiteSchema);

module.exports = Website;

const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
	process.env.MONGODB_URI ||
	"mongodb://localhost/websiteDB"
  );

// we can start to import websites

const websiteSeed = [
	{
		title: "Google",
		URL: "https://www.google.com/",
		thumbnail: "",
	  	summary:
		"Search for information about (someone or something) on the Internet using the search engine Google",
		category: "Search",
		date: new Date(Date.now()),
		rating: 4.7,
		comments: [
			{
				user: "Kevin",
				comment: "best search engine out there"
			},
			{
				user: "Jeff",
				comment: "works alright, but I prefer bing"
			}
		]
	},
	{
		title: "NFL",
		URL: "https://www.nfl.com/",
		thumbnail: "",
		summary:
		  "The National Football League (NFL) is a professional American football league consisting of 32 teams, divided equally between the National Football Conference (NFC) and the American Football Conference (AFC)",
		category: "Sports",
		date: new Date(Date.now()),
		rating: 4.2,
		comments: [
			{
				user: "Bob",
				comment: "my favorite Sports website!"
			},
			{
				user: "Joe",
				comment: "Wish they would update more but other then that its alright"
			}
		]
	}
];

db.Website
.remove({})
.then(() => db.Website.collection.insertMany(websiteSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
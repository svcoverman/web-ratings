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
		thumbnail: "https://media1.fdncms.com/memphisflyer/imager/u/original/21375123/21751306_10155724905022838_7192191338970086519_n.png",
		summary:
		"Search for information about (someone or something) on the Internet using the search engine Google",
		category: "Search",
		date: new Date(Date.now()),
		rating: 4.7,
		comments: [
			{
				user: "Kevin",
				comment: "best search engine out there",
				dateCreated: "1/11/2020"
			},
			{
				user: "Jeff",
				comment: "works alright, but I prefer bing",
				dateCreated: "1/11/2020"
			}
		]
	},
	{
		title: "NFL",
		URL: "https://www.nfl.com/",
		thumbnail: "https://ca-times.brightspotcdn.com/dims4/default/84f8546/2147483647/strip/true/crop/1365x1024+0+0/resize/840x630!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff2%2F81%2Ff460e5ce620ae3ec5c1be2d544ed%2Fla-sp-sn-grubman-la-20140826-001",
		summary:
		  "The National Football League (NFL) is a professional American football league consisting of 32 teams, divided equally between the National Football Conference (NFC) and the American Football Conference (AFC)",
		category: "Sports",
		date: new Date(Date.now()),
		rating: 4.2,
		comments: [
			{
				user: "Bob",
				comment: "my favorite Sports website!",
				dateCreated: "1/11/2020"
			},
			{
				user: "Joe",
				comment: "Wish they would update more but other then that its alright",
				dateCreated: "1/11/2020"
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
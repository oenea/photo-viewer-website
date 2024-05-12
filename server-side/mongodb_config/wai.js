db.createUser( { user: "wai_web",
                pwd: "w@i_w3b",
                roles: ["readWrite", "dbAdmin" ] } )

mongo --username=wai_web --password=w@i_w3b wai

db.getCollectionNames();
db.users.drop();
db.users.find();

db.images.drop();
db.images.remove({ md5:"" });
db.images.find();
db.images.findOne({ filename: "filename1.jpg" });
db.createCollection("users", { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "stocks clustered key" } } );
db.createCollection("images", { clusteredIndex: { "key": { _id: 1 }, "unique": true, "name": "stocks clustered key" } } );
db.images.insert([ { filename: "", user_id: "", date: ISODate("2022-12-31") } ]);


db.users.insert([ { name: "user1", password: "", email: "user1@mail.com" } ]);
db.users.insert([ { name: "user2", password: "", email: "user2@mail.com" } ]);
db.images.insert([ { filename: "filename.jpg", description: "desciption", user: "user1", author: "user1" } ]);



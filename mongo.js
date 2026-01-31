db.users.find({age:{$gt:18,$lt:20}});
db.users.find({age:{$lt:20}});
db.users.find({$and:[{age:{$gte:20}},{city:"Jaipur"}]});
db.users.find({$or:[{age:{$gte:20}},{city:"Jaipur"}]});
db.users.find().sort({age:1})
db.users.find().skip(4).limit(2);
db.users.updateOne({name:"atul"},{$set:{city:"Mumbai"}});
db.users.updateMany({city:"Jaipur"},{$set:{state:"Rajasthan"}});
db.users.updateOne({name:"raj"},{$inc:{age:1}});
db.users.deleteOne({name:"ram"});
db.users.deleteMany({city:"jaipur"})
db.users.countDocuments();
db.users.countDocuments({city:"Pune"});
db.users.distinct("city");

// aggregation
db.users.insertMany([
    { 
    "_id": "user1", 
    "name": "Amit Sharma", 
    "email": "amit.sharma@example.com", 
    "phone": "+91-987654210", 
    "address": "MG Road, Mumbai, Maharashtra" 
    }, 
    
    { 
    
    "_id": "user2", 
    
    "name": "Priya Verma", 
    
    "email": "priya.verma@example.com", 
    
    "phone": "+91-987654211", 
    
    "address": "Nehru Place, New Delhi, Delhi" 
    
    }, 
    
    { 
    
    "_id": "user3", 
    
    "name": "Rahul Singh", 
    
    "email": "rahul.singh@example.com", 
    
    "phone": "+91-987654212", 
    
    "address": "Sector 18, Noida, Uttar Pradesh" 
    
    }, 
    
    { 
    
    "_id": "user4", 
    
    "name": "Anjali Nair", 
    
    "email": "anjali.nair@example.com", 
    
    "phone": "+91-987654213", 
    
    "address": "Marine Drive, Kochi, Kerala" 
    
    }, 
    
    { 
    
    "_id": "user5", 
    
    "name": "Vikram Desai", 
    
    "email": "vikram.desai@example.com", 
    
    "phone": "+91-987654214", 
    
    "address": "Park Street, Kolkata, West Bengal" 
    
    } 
    
    ] )

db.orders.insertMany([
    { 
    
    "_id": "order1", 
    
    "user_id": "user1", 
    
    "product": "Laptop", 
    
    "amount": 50000, 
    
    "order_date": "2024-08-01" 
    
    }, 
    
    { 
    
    "_id": "order2", 
    
    "user_id": "user2", 
    
    "product": "Mobile Phone", 
    
    "amount": 15000, 
    
    "order_date": "2024-08-05" 
    
    }, 
    
    { 
    
    "_id": "order3", 
    
    "user_id": "user1", 
    
    "product": "Headphones", 
    
    "amount": 2000, 
    
    "order_date": "2024-08-10" 
    
    }, 
    
    { 
    
    "_id": "order4", 
    
    "user_id": "user3", 
    
    "product": "Tablet", 
    
    "amount": 25000, 
    
    "order_date": "2024-08-12" 
    
    }, 
    
    { 
    
    "_id": "order5", 
    
    "user_id": "user4", 
    
    "product": "Smart Watch", 
    
    "amount": 8000, 
    
    "order_date": "2024-08-15" 
    
    }]
)

db.users.aggregate([
    {
        "$lookup":{
            "from":"orders",
            "localField":"_id",
            "foreignField": "user_id",
            "as":"orderHistory"
        }
    }
])
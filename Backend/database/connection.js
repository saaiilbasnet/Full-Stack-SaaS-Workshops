//logic for connecting database

// const sequelize = require('sequelize') //importing sequelize


const {Sequelize, DataTypes} = require('sequelize') //destructed elements

const sequelize = new Sequelize("postgresql://postgres.nxpfjywtyjhyvyrcbmzu:Sforsahil@164@aws-0-ap-south-1.pooler.supabase.com:6543/postgres") // class instantion and object creation

sequelize.authenticate() //authentication to connect
.then(()=>{
    console.log("Authenticated and Connected successfully!");
    
})
.catch((err)=>{
    console.log("Error : "+err);
    
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.books = require('./models/bookModel')(sequelize,DataTypes) //importing bookModel

//migration to the supabase database

sequelize.sync({alter:true}).then(()=>{ //using alter as the alternative for force: true
    console.log("Successfully migrated to supabase");
    
})

module.exports = db
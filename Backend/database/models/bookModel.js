//books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize, DataTypes)=>{   

    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.TEXT
        },
        bookPrice : {
            type : DataTypes.INTEGER
        },
        bookAuthor:{
            type : DataTypes.TEXT
        },
        bookGenre:{
            type : DataTypes.TEXT
        }
      
    })

    return Book; // db book returned

}

module.exports = bookModel  //exported to another module
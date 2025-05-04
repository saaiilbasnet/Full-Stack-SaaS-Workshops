//books, bookName, bookPrice, bookAuthor, bookGenre

const bookModel = (sequelize, DataTypes)=>{   

    const Book = sequelize.define("book",{
        bookName : {
            type : DataTypes.STRING
        },
        bookPrice : {
            type : DataTypes.INTEGER
        },
        bookAuthor:{
            type : DataTypes.STRING
        },
        bookGenre:{
            type : DataTypes.STRING
        }
      
    })

    return Book; // db book returned

}

module.exports = bookModel  //exported to another module
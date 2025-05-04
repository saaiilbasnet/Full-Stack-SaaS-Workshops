const { books } = require("../database/connection");

exports.fetchBooks = async (req, res)=>{
    //logic to fetch books
    
    const datas = await books.findAll()
      
        res.json({
            message:"Books fetch successfully",
            datas : datas
        })
    }

   exports.addBooks = async (req, res)=>{
        //logic to add books
        const {bookName, bookPrice, bookAuthor, bookGenre} = req.body;
        // console.log(req.body);
        
        if(!bookName || !bookPrice || !bookAuthor || !bookGenre){  //validation code to prevent null values from the user
          return res.status(400).json({
            message : "Please enter all details"
          })
        }
        else {
        try {
            await books.create({
                bookName : bookName, //columnName : value
                bookPrice : bookPrice,
                bookAuthor : bookAuthor,
                bookGenre : bookGenre
            })
            
                res.json({
                    message:"Book added successfully"
                })
            }
            catch(error){
                console.log(err);
                
                res.status(500).json({
                    message : "Server error"
                })
            }
        }
        
        }

        exports.deteleBooks = (req, res)=>{
            //logic to delete books
                
                res.json({
                    message:"Book deleted successfully"
                })
            }


            exports.updateBooks = (req, res)=>{
                //logic to update books
                    res.json({
                        message:"Books updated successfully"
                    })
                }

                //for single read api

                exports.singleFetchBook = async (req, res)=>{
                    //first need a id
                    const id = req.params.id; //need to fetch id from url

                        const data = await books.findByPk(id);

                        res.json({
                            message : "Single book fetched successfully",
                            data : data
                        })
                }


    // module.exports = {fetchBooks, addBooks, deteleBooks, updateBooks}
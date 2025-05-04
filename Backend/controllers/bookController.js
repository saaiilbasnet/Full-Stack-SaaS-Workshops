const { books } = require("../database/connection");

exports.fetchBooks = async (req, res) => {
  //logic to fetch books

  try {
    const datas = await books.findAll();

    res.json({
      message: "Books fetch successfully",
      datas: datas,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
};

exports.addBooks = async (req, res) => {
  //logic to add books
  const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  // console.log(req.body);

  if (!bookName || !bookPrice || !bookAuthor || !bookGenre) {
    //validation code to prevent null values from the user
    return res.status(400).json({
      message: "Please enter all details",
    });
  } else {
    try {
      await books.create({
        bookName: bookName, //columnName : value
        bookPrice: bookPrice,
        bookAuthor: bookAuthor,
        bookGenre: bookGenre,
      });

      res.json({
        message: "Book added successfully",
      });
    } catch (error) {
      console.log(err);

      res.status(500).json({
        message: "Server error",
      });
    }
  }
};

exports.deleteBooks = async (req, res) => {
  //logic to delete books

  try {
    const id = req.params.id;

    await books.destroy({
      where: {
        id: id, //where id == id
      },
    });

    res.json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
    });
  }
};

exports.updateBooks = async (req, res) => {
  //logic to update books

try {
    const id = req.params.id;

    const { bookName, bookPrice, bookAuthor, bookGenre } = req.body;
  
    // first the updating data then the id is passed inside update()
  
    books.update(
      {
        bookName: bookName,
        bookPrice: bookPrice,
        bookAuthor: bookAuthor,
        bookGenre: bookGenre,
      },
      {
        where: {
          id: id,
        },
      }
    );
  
    res.json({
      message: "Books updated successfully",
    });
}catch(error){
    res.json({
        message : "Something went wrong"
    })
}
};

//for single read api

exports.singleFetchBook = async (req, res) => {
  //first need a id
try{
    const id = req.params.id; //need to fetch id from url

    const data = await books.findByPk(id);
  
    res.json({
      message: "Single book fetched successfully",
      data: data,
    });
}catch(error){
    res.json({
        message : "Something went wrong"
    })
}
};

// module.exports = {fetchBooks, addBooks, deteleBooks, updateBooks}

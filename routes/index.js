var express = require('express');
var router = express.Router();
var path = require('path');


// creating server side variable to store food category option
var food_category =
  [
    {
      name: "Protein",
      image_name: "protein.jpg",
      short_description: "What foods are in the Protein Foods Group?",
      long_description: "All foods made from seafood; meat, poultry, and eggs; beans, peas, and lentils; and nuts, seeds, \
                          and soy products are part of the Protein Foods Group.Beans, peas, and lentils are also \
                          part of the Vegetable Group.",
      more_images: [
        "p1.webp", "p2.webp", "p3.webp"
      ]
    },
    {
      name: "Dairy",
      image_name: "dairy.jpg",
      short_description: "What foods are Dairy Foods?",
      long_description: "All fluid milk products and many foods made from milk are considered part of the Dairy Group. \
      Foods made from milk that retain their calcium content are part of the group. \
      Foods made from milk that have little to no calcium, such as cream cheese, cream, and butter, \
      are not part of the Dairy Group. Calcium-fortified soymilk (soy beverage) is also part of the Dairy Group",
      more_images: ['d1.jpg', 'd2.webp', 'd3.jpg']
    }
  ]



/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendFile(path.join(path.dirname(__dirname) + '/views/index.html'), { title: 'Express' });

  res.render('index', { title: 'Express', food_category: food_category });
});

/* Get more images for each category */

router.get('/category/', function (req, res, next) {
  // get user selected option for category
  let food_category_title = req.query.category;
  // filter from food_category
  let category_filter = food_category.filter(item => item.name == food_category_title);
  // console.log(req.query.category);
  // console.log(category_filter);
  // return response
  res.render('category', { title: food_category_title, food_category: category_filter });

});

module.exports = router;

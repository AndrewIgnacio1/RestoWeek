console.log('inside of reviews.js');

const mongoose = require("mongoose");
const Review = mongoose.model("Review");
const Restaurant = mongoose.model("Restaurant");

class Reviews {

    addReview(req, res){
        let review = new Review(req.body);
        review.save(function(err){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }
            else{
                Restaurant.findOne({_id: req.params.id}, function(err, restaurant){
                    restaurant.reviews.push(review);
                    console.log(restaurant.reviews);
                    for (let r in restaurant.reviews){
                      for (let a in restaurant.reviews){
                        if (restaurant.reviews[r].rating > restaurant.reviews[a].rating){
                          var temp = restaurant.reviews[r];
                          restaurant.reviews[r] = restaurant.reviews[a];
                          restaurant.reviews[a] = temp;
                        }
                      }
                      //
                    }
                    // restaurant.reviews.getAll();
                    restaurant.save(function(err){
                        if (err){
                            res.json({"status": 'not ok', "errors": err});
                        }
                        else{
                            res.json({"status": 'ok'});
                        }

                    })
                })
            }
        });
    }

    getAll(req, res){
        Review.find({}).sort({"rating" : -1}).exec( function(err, reviews){
            if(err){
                res.json({"status": "not ok", "errors": err});
            }else{
                res.json({"status": "ok", "reviews": reviews});
            }
        });
    }
}


module.exports = new Reviews();

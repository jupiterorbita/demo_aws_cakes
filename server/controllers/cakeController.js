const mongoose = require("mongoose");
const Cake = mongoose.model("Cake");
const Rate = mongoose.model("Rate");

console.log("============= SERVER > CONTROLLERS > cakeController.js");

module.exports = {
  //Root retrieve all
  retrieveAll: function(req, res) {
    Cake.find({}, function(err, cake_array) {
      if (err) {
        console.log("\nReturned error", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: cake_array });
      }
    });

    // Cake.create({_id:1, name: "johnny", imgurl:"https://pantograph0.goldbely.com/s410/uploads/product_image/image/30382/award-winning-bees-knees-ice-cream-cake.39f5a30e50e0b3789cc43775b912d885.jpg"}, function(err, back){
    // if (err) console.log('error couldnt save to mongoose', back);
    // });
  },

  //Retrieve 1 (by task id)
  retrieveOne: function(req, res) {
    console.log("entering cakeController to send 1 cake back");
    Cake.findOne({ _id: req.params.id }, function(err, cake) {
      if (err) {
        console.log("\nerr getting back one from server", err);
        res.json({ message: "\nError", error: err });
      } else {
        res.json({ message: "\nSuccess", data: cake });
      }
    });
  },

  //Create /save
  create: function(req, res) {
    console.log("\n ====> req.body =>", req.body);
    var cakeInstance = new Cake({
      name: req.body.name,
      imgurl: req.body.imgurl
    });
    cakeInstance.save(function(err) {
      if (err) {
        console.log("we have an error", err);
        for (var key in err.errors) {
          res.json({ message: "error", error: err });
        }
      } else {
        console.log("successfully added a user!");
        res.json({ message: "Success save" });
      }
    });
  },

  //comment / by cake id)
  comment: function(req, res) {
    console.log("========req.body=======");
    console.log("@@@@@@@@@@@@@@ => 1 ", req.body);
    
    rateInstance = new Rate({
      rating: req.body.rating,
      comment: req.body.comment
    });
    
    console.log("what is rateInstance =>", rateInstance);
    rateInstance.save(function(err) {
      if (err) {
        console.log("we have an error", err);
    //     res.json({ message: "error", error: err });
      } else {
        console.log("inside ELSE", rateInstance);
    //     console.log("====> rateInstance =>", rateInstance);
    //     console.log("req.params.id =>", req.params.id);
    console.log('\n =-=--=--=-=--=-=-=--=-=-=-=-==-=')
    console.log(req.params)
        Cake.findOne({ _id: req.params.id }, function(err, cake) {
          console.log("THE CAKE IS A LIE!! =>", cake);
          console.log(err);
    
          cake.rating.push(rateInstance);
          cake.save(function() {
    //         res.json(cake);
    //         console.log("successfully added a user!");
            res.json({ message: "Success save" });
          });
        });
      }
    });
  }


};

// rateInstance = new Rate({rating:'',asdf:''})
// rateIstance.save(function(err){
//  rateInstance
//  Cake.findOne({_id:parm.id}, function(err, cake){
//  cake.ratings.push(rateInstance)
//  cake.save(function(){
// res.json(cake)
// })
// })
// })

//       rate.save(function(err) {
//         if (err) {
//           console.log("we have an error", err);
//           for (var key in err.errors) {
//             res.json({ message: "error", error: err });
//           }
//         } else {
//           console.log("successfully added a user!");
//           res.json({ message: "Success save" });
//         }
//       });
//     });
//   },
//   //Delete (by task id)
//   destroy_task: function(req, res) {
//     // console.log(req.params.id);
//     Task.remove({ _id: req.params.id }, function(err) {
//       console.log("DELETEING TASK");
//       if (err) {
//         console.log("\nerr getting back one from server", err);
//         res.json({ message: "Error cannot delete", error: err });
//       } else {
//         res.json({ message: "Success deleted"});
//       }
//     });
//   }
// };
//

import express from "express";
const router = express.Router();
import User from "../models/users.js";
import Member from "../models/members.js";
import Staff from "../models/staff.js";
import classSchedule from "../models/classSchedule.js";
import Product from "../models/products.js";

router.get("/", () => {
  res.send("test");
});

// -----------------------
// MEMBERSHIP
// -----------------------

router.patch("/adduser", async (req, res) => {
  const formData = req.body;
  const newUser = new User(formData);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

router.get("/getusers", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json({ data: allUsers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/editmembership/:id").put((req, res) => {
  console.log("req.body", req.body);
  // inserting updated data of the member
  var _id = req.params.id;
  console.log(_id);
  var data = {
    name: req.body.name,
    days: req.body.days,
    amount: req.body.amount,
    tax: req.body.tax,
    membership: req.body.membership,
  };

  User.findByIdAndUpdate(_id, data, { new: true }, function(err, data) {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(data);
    }
  })
});

router.delete("/deletemembership/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// -----------------------
// MEMBERS
// -----------------------

router.patch("/addmember", async (req, res) => {
  const formData = req.body;
  const newUser = new Member(formData);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

router.get("/getmembers", async (req, res) => {
  try {
    const allUsers = await Member.find();
    res.json({ data: allUsers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.delete("/deletemember/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Member.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/editmember/:id").put((req, res) => {
  console.log("req.body", req.body);
  // inserting updated data of the member
  var _id = req.params.id;
  console.log(_id);
  var data = {
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     gender: req.body.gender,
     mobile: req.body.mobile,
     password: req.body.password,
     package: req.body.package,
     invi: req.body.invi,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
     paymentDate: req.body.paymentDate,
     filepath: req.body.filepath,
  };

  Member.findByIdAndUpdate(_id, data, { new: true }, function(err, data) {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(data);
    }
  })
});

// -----------------------
// STAFF
// -----------------------

router.patch("/addstaff", async (req, res) => {
  const formData = req.body;
  const newUser = new Staff(formData);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

router.get("/getstaffs", async (req, res) => {
  try {
    const allUsers = await Staff.find();
    res.json({ data: allUsers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/editstaffs/:id").put((req, res) => {
  console.log("req.body", req.body);
  // inserting updated data of the member
  var _id = req.params.id;
  console.log(_id);
  var data = {
     firstName: req.body.firstName,
     lastName: req.body.lastName,
     gender: req.body.gender,
     mobile: req.body.mobile,
     password: req.body.password,
     package: req.body.package,
     invi: req.body.invi,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
     paymentDate: req.body.paymentDate,
     filepath: req.body.filepath,
     salary: req.body.salary,
     attendance: req.body.attendance,
  };
  Staff.findByIdAndUpdate(_id, data, { new: true }, function(err, data) {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(data);
    }
  })
});

router.delete("/deletestaff/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Staff.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// -----------------------
// CLASS SCHEDULE
// -----------------------

router.patch("/addclass", async (req, res) => {
  const formData = req.body;
  const newUser = new classSchedule(formData);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

router.get("/getclasses", async (req, res) => {
  try {
    const allUsers = await classSchedule.find();
    res.json({ data: allUsers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/editclass/:id").put((req, res) => {
  console.log("req.body", req.body);
  // inserting updated data of the member
  var _id = req.params.id;
  console.log(_id);
  var data = {
    className: req.body.className,
    staffName: req.body.staffName,
    days: req.body.days,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  };
  classSchedule.findByIdAndUpdate(_id, data, { new: true }, function(err, data) {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(data);
    }
  })
});

router.delete("/deleteclass/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await classSchedule.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// -----------------------
// PRODUCTS
// -----------------------

router.patch("/addproduct", async (req, res) => {
  const formData = req.body;
  const newUser = new Product(formData);
  try {
    await newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(409).json({ message: error.message });
  }
});

router.get("/getproducts", async (req, res) => {
  try {
    const allUsers = await Product.find();
    res.json({ data: allUsers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

router.route("/editproduct/:id").put((req, res) => {
  console.log("req.body", req.body);
  // inserting updated data of the member
  var _id = req.params.id;
  console.log(_id);
  var data = {
    categories: req.body.categories,
    fullName: req.body.fullName,
    price: req.body.price,
    quantity: req.body.quantity,
    manufacture: req.body.manufacture,
    expire: req.body.expire,
  };
  Product.findByIdAndUpdate(_id, data, { new: true }, function(err, data) {
    if (err) {
      console.log("err", err);
      res.status(500).send(err);
    } else {
      console.log("success");
      res.send(data);
    }
  })
});

router.delete("/deleteproduct/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: "User Deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

export default router;

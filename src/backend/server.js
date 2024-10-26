const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToMongo = require("./db");
const Admindb = require("./models/Admindb");
const User = require("./models/User");
const Dept = require("./models/Dept");

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectToMongo();

app.listen(5000, () => {
  console.log("server started");
});



// Login API
app.post("/auth", async (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  const admindb = await Admindb.findOne({ username: Username, password: Password });
  console.log(admindb);
  if (admindb) {
    res.json({ status: true, username: admindb.username })
    console.log("Admin login successfully.");
  } else {
    res.json({ status: false })
    console.log("Something went wrong!.");
  }
});

// Add Employee API
app.post("/test", async (req, res) => {
  const user = new User();
  user.fname = req.body.fname;
  user.lname = req.body.lname;
  user.email = req.body.email;
  user.contact = req.body.contact;
  user.gender = req.body.gender;
  user.address = req.body.address;
  user.hireDate = req.body.hireDate;
  user.salary = req.body.salary;
  user.deptName = req.body.deptName;
  user.manager = req.body.manager;
  user.password = req.body.password;
  const data = await user.save();
  console.log(data);
  if (data.fname !== "" && data.email !== "") {
    res.json({ status: true })
    console.log("Employee added successfully.");
  } else {
    res.json({ status: false })
    console.log("Something went wrong!.");
  }
});

app.get("/getUser", async (req, res) => {
  User.find()
    .then(user => res.json(user))
    .catch(err => res.json("Backend has some problem!.", err))
});

// Update Employee API
app.post("/update", async (req, res) => {
  const contact = req.body.contact;
  const user = await User.findOne({ contact: contact });
  if (user !== null) {
    const data = await user.updateOne({
      hireDate: req.body.hireDate,
      salary: req.body.salary,
      deptName: req.body.deptName,
      manager: req.body.manager
    });
    console.log(data);
    if (data !== null) {
      res.json({ status: true });
    } else {
      res.json({ status: false, reason: "Something went wrong!." })
    }
  } else {
    res.json({ status: false, reason: "Employee does not exist!." })
  }
});

app.get("/getUser", async (req, res) => {
  User.updateOne()
    .then(user => res.json(user))
    .catch(err => res.json("Backend has some problem!.", err))
});

// Delete Employee API
app.post("/delete", async (req, res) => {
  const fname = req.body.fname;
  const user = await User.findOne({ fname: fname });
  const data = await user.deleteOne();
  if (data.fname !== "") {
    res.json({ status: true, data: "Employee deleted successfully." });
  } else {
    res.json({ status: false, reason: "No such employee found!." });
  }
});

// Search API according Department Name
app.get("/search", async (req, res) => {
  const fname = req.query.fname;

  if (!fname) {
    return res.status(400).json({ error: "Department name not provided." });
  }

  try {
    // Assuming you have a database where 'users' collection is stored
    const searchResults = await User.find({ firstName: fname });

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while searching!." });
  }
});


// Add Department API
app.post("/dmname", async (req, res) => {
  const dept = new Dept();
  dept.dname = req.body.dname;
  dept.mname = req.body.mname;
  const data = await dept.save();
  console.log(data);
  if (data.dname !== "") {
    res.json({ status: true })
    console.log("Department added successfully.");
  } else {
    res.json({ status: false })
    console.log("Something went wrong!.");
  }
});


// app.post("/delete", async (req, res) => {
//   const dname = req.body.dname;
//   const dept = await Dept.findOne({ dname: dname });
//   const data = await dept.deleteOne();
//   if (data.fname !== "") {
//     res.json({ status: true, data: "Department Deleted" });
//   } else {
//     res.json({ status: false, reason: "No such Department found!" });
//   }
// });

// app.post("/delete", async (req, res) => {
//   const dname = req.body.dname;
//   try {
//       const dept = await Dept.findOne({ dname: dname });

//       if (!dept) {
//           return res.json({ status: false, reason: "No such Department found!" });
//       }

//       const data = await dept.deleteOne();

//       if (data.deletedCount !== 0) {
//           res.json({ status: true, data: "Department Deleted" });
//       } else {
//           res.json({ status: false,
//         reason: "Failed to delete the department!" });
//     }
//   } catch (error) {
//     console.error("Error deleting department:", error);
//     res.status(500).json({ status: false, reason: "Internal server error" });
//   }
// });


app.get("/getDept", async (req, res) => {
  Dept.find()
    .then(dept => res.json(dept))
    .catch(err => res.json("Backend has some problem!.", err))
});



// Delete All Department's and Manager's API  Most IMP
// app.post("/deleteAll", async (req, res) => {
//   try {
//       await Dept.deleteMany(); // Delete all documents from the "Dept" collection

//       res.json({ status: true, data: "All departments deleted successfully." });
//   } catch (error) {
//       console.error("Error deleting all departments:", error);
//       res.status(500).json({ status: false, reason: "Internal server error" });
//   }
// });


// Get total number of employees
app.get("/getTotalEmployees", async (req, res) => {
  try {
    const totalEmployees = await User.countDocuments();
    res.json({ totalEmployees });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching total employees!." });
  }
});

// Get total salary of all employees
app.get("/getTotalSalary", async (req, res) => {
  try {
    const totalSalary = await User.aggregate([{ $group: { _id: null, total: { $sum: "$salary" } } }]);
    res.json({ totalSalary: totalSalary[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching total salary!." });
  }
});

// Get total annual salary (assuming each employee's salary is annual)
app.get("/getTotalAnnualSalary", async (req, res) => {
  try {
    const totalAnnualSalary = await User.aggregate([
      { $group: { _id: null, total: { $sum: { $multiply: ["$salary", 12] } } } },
      { $project: { _id: 0, total: 1 } },
    ]);
    res.json({ totalAnnualSalary: totalAnnualSalary[0]?.total || 0 });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching total annual salary!." });
  }
});

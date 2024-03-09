const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
const port = 5000;

app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Aswin@2002",
  database: "taskmanager",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT user_id FROM users WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      if (results.length !== 0) {
        const userId = results[0].user_id;
        res.json({
          status: "success",
          message: "Login successful",
          user_id: userId,
        });
      } else {
        res.status(401).json({ error: "Invalid email or password" });
      }
    }
  });
});

// New user Registration
app.post("/register", (req, res) => {
  const { fullname, email, password } = req.body;
  const joined_date = new Date();

  const checkEmailSql =
    "SELECT COUNT(*) AS emailCount FROM users WHERE email = ?";

  db.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    const emailCount = results[0].emailCount;

    if (emailCount > 0) {
      return res.status(409).json({ error: "Email already exists" });
    }

    const insertUserSql =
      "INSERT INTO users (full_name, email, password, joined_date) VALUES (?, ?, ?, ?)";

    db.query(
      insertUserSql,
      [fullname, email, password, joined_date],
      (err, results) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: "Internal server error" });
        }
        const userId = results.insertId;
        return res.json({
          status: "success",
          user_id: userId,
          message: "Registration successful",
        });
      }
    );
  });
});

// Display all tasks
app.get("/", (req, res) => {
  const sql = "SELECT * FROM task";

  db.query(sql, (err, results) => {
    if (err) {
      console.error("Error querying data:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.json(results);
  });
});

// Display all tasks
app.post("/mytasks", (req, res) => {
  const { userId } = req.body;
  const sql = "SELECT task_id, task_title, task_description, DATE(task_duedate) AS task_duedate FROM task WHERE user_id = ?";

  db.query(sql, [userId], (err, results) => {
    if (err) {
      console.error("Error querying data:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.json(results);
  });
});



// Add New Task
app.post("/addnewtask", (req, res) => {
  const {userId, title, description, duedate } = req.body;


  const sql =
    "INSERT INTO task (user_id, task_title, task_description, task_duedate) VALUES (?, ?, ?, ?)";
  const values = [userId, title, description, duedate];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error querying data:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.json({
      message: "Task added successfully",
      user_id: userId,
      title: title,
      description: description,
      duedate: duedate,
    });
  });
});



// Edit Task
app.put("/edittask/:task_id", (req, res) => {
  const task_id = req.params.task_id; 
  const {user_id, title, description, duedate } = req.body;

  const sql =
    "UPDATE task SET user_id = ?, task_title = ?, task_description = ?, task_duedate = ? WHERE task_id = ?";
  const values = [user_id, title, description, duedate, task_id];

  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error querying data:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).json({ error: "Task not found" });
    } else {
      res.json({
        message: "Task updated successfully",
        task_id: task_id,
        title: title,
        description: description,
        duedate: duedate,
      });
    }
  });
});


// Delete Task
app.delete("/deleteTask/:taskId", (req, res) => {
  const taskId = req.params.taskId;

  db.query("DELETE FROM task WHERE task_id = ?", [taskId], (err, results) => {
    if (err) {
      console.error("Error deleting task:", err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }

    res.json({ message: "Task deleted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

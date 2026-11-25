import express from "express";
import "dotenv/config";
import cors from 'cors';

const app = express();

const courses = [
  {
    id: 1,
    courseName: "Frontend Development",
    instructor: "Rahul Singh",
    category: "Web Development",
    duration: "12 weeks",
    level: "Beginner",
    price: 4999,
    rating: 4.8,
    enrolledStudents: 1240
  },
  {
    id: 2,
    courseName: "Backend Engineering with Node.js",
    instructor: "Ananya Sharma",
    category: "Web Development",
    duration: "10 weeks",
    level: "Intermediate",
    price: 5999,
    rating: 4.7,
    enrolledStudents: 850
  },
  {
    id: 3,
    courseName: "Data Structures & Algorithms",
    instructor: "Vikramaditya Nair",
    category: "Computer Science",
    duration: "16 weeks",
    level: "All Levels",
    price: 6499,
    rating: 4.9,
    enrolledStudents: 3100
  },
  {
    id: 4,
    courseName: "UI/UX Design Fundamentals",
    instructor: "Priya Patel",
    category: "Design",
    duration: "8 weeks",
    level: "Beginner",
    price: 3999,
    rating: 4.6,
    enrolledStudents: 920
  },
  {
    id: 5,
    courseName: "Full Stack MERN Bootcamp",
    instructor: "Rahul Singh",
    category: "Web Development",
    duration: "24 weeks",
    level: "Intermediate",
    price: 9999,
    rating: 4.8,
    enrolledStudents: 1580
  },
  {
    id: 6,
    courseName: "Machine Learning with Python",
    instructor: "Dr. Kabir Verma",
    category: "Data Science",
    duration: "14 weeks",
    level: "Advanced",
    price: 7999,
    rating: 4.7,
    enrolledStudents: 640
  }
];


app.get('/courses', (req,res)=> {
    res.json(courses);
});

app.get('/', (req,res) =>{
    res.send("Response to the server");
});

app.use(cors());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on the port ${process.env.PORT}`);
    
});
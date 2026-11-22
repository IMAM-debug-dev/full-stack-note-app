import express from "express"
import authRouter from "../router/auth.route.js"
import listRouter from "../router/list.route.js"
import cors from "cors";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));


// Routes
app.use('/api/auth', authRouter);

//list 
app.use("/api/list" , listRouter )


export default app;
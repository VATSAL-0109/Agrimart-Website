import express from 'express';
import authenticationRoutes from '../routes/authentication.routes.js';
import adminRoutes from '../routes/admin.routes.js';
import userRoutes from '../routes/user.routes.js';
import bodyParser from 'body-parser';
import '../utils/firebase.js';
import connectToDB from '../configs/dbConn.js';
import { configDotenv } from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import cookieParser from 'cookie-parser';
import cors from 'cors';

// Load environment variables
configDotenv();

const app = express();
const PORT = process.env.PORT || 5000;

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// CORS - Only allow localhost:3000
app.use(
  cors({
   origin: ['http://localhost:3000','http://localhost:3001'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['set-cookie'],
  })
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// Routes
app.use('/api/v1/auth', authenticationRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on http://localhost:${PORT}`);
});

// Connect to MongoDB
const initializeApp = async () => {
  try {
    await connectToDB();
    console.log('✅ Database connected successfully');
  } catch (error) {
    console.error('❌ Initialization error:', error);
    process.exit(1);
  }
};

initializeApp();

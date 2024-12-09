import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import articleRoutes from './router/articleRouter.js';
import commentRoutes from './router/commentRouter.js';

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'https://incredible-conkies-2bfde0.netlify.app',
    credentials: true
  }));

app.use('/article', articleRoutes);
app.use('/articleComment', commentRoutes);

app.listen(process.env.PORT || 8000, () => console.log('서버가 시작되었습니다~'));

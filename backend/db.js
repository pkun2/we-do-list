import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

// MySQL 데이터베이스 연결 정보 설정
const dbConfig = {
  host: process.env.DB_HOST, // MySQL 서버 호스트명
  user: process.env.DB_USER, // MySQL 사용자명
  password: process.env.DB_PASSWORD, // MySQL 비밀번호
  database: 'ToDoList', // 사용할 데이터베이스 이름
  port: 3306 // MySQL 서버 포트 (기본값: 3306)
};
// 데이터베이스 연결 생성
const connection = mysql.createConnection(dbConfig);

// 데이터베이스에 연결
connection.connect(error => {
  if (error) { 
    return console.error('Error connecting to MySQL database:', error);
  }
  console.log('Connected to MySQL database.');
});

const pool = mysql.createPool(dbConfig);

export default pool;
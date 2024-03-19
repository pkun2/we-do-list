FROM node:20.11.1
#디렉토리 설정
WORKDIR /app
#패키지 파일 복사
COPY package*.json ./
#패키지 설치
RUN npm install
#모든 파일 복사
COPY . .
#실행
CMD ["npm", "start"]

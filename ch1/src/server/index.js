// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
//
// const app = express();
// const PORT = process.env.PORT || 8080;
//
// const corsOptions = {
//     origin: 'http://localhost:8080',
// };
//
// app.use(cors(corsOptions));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true });
//
// const db = require("./app/models");
//
// db.sequelize.sync();
// // 개발 중에는 기존 테이블을 삭제하고 데이터베이스를 다시 동기화해야 할 수 있습니다. force: true다음 코드로 사용
// // db.sequelize.sync({ force: true }).then(() => {
// //   console.log("Drop and re-sync db.");
// // });
//
// require("./app/routes/turorial.routes")(app);
//
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}.`);
// });
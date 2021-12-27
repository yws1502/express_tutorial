const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // cb(error관련, 저장위치)
    cb(null, 'public/images/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

// 아래와 같은 코드로 작성하게 되면 uploads라는 폴더가 새로 생성되고 그안에 암호화된 파일이 들어가게된다.
// const upload = multer({ dest: "uploads/" }); // 해당 경로에 file 저장


module.exports = upload;
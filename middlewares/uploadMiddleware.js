import multer from "multer";
import path from 'path';
import fs from 'fs'

const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      const uniqueSuffix =`${Date.now()}-${file.originalname}`;
      cb(null, uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })

export default upload;
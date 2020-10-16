import multer from 'multer';
import path from 'path';
const regex = / /g;

function changeSpaces(name: string){
  const retorno = name.replace(regex, '_')
  return retorno;
};

export default{
    storage: multer.diskStorage({
        destination: path.join(__dirname, '..', '..', 'images'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${changeSpaces(file.originalname)}`;
            cb(null, fileName);
        },
    })
};
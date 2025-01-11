const { getCombinedData } = require('../controllers/transactionController');
const router = require('./transaction.route');

const router = express.Router();

router.get('/combined-data', getCombinedData);

module.exports=router;
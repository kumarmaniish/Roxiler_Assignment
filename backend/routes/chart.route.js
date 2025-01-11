const { getBarChartData } = require('../controllers/chartController');
const { getPieChartData } = require('../controllers/chartController');
const router = express.Router();


router.get('/pie-chart', getPieChartData);
router.get('/bar-chart', getBarChartData);

module.exports=router;
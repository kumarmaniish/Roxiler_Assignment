const { getStatistics } = require('../controllers/statisticsController');
const router = require('./transaction.route');

router.get('/statistics', getStatistics);

module.exports=router;
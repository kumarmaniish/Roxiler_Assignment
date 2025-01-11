const { getStatistics } = require('./statisticsController');
const { getBarChartData, getPieChartData } = require('./chartController');

const getCombinedData = asyncHandler(async (req, res) => {
    const { month } = req.query;

    // Fetch data from all APIs
    const statistics = await getStatistics(req, res);
    const barChartData = await getBarChartData(req, res);
    const pieChartData = await getPieChartData(req, res);

    // Combine and send the response
    res.status(200).json({
        statistics,
        barChartData,
        pieChartData
    });
});

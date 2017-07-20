var express = require('express');
var router = express.Router();
module.exports = router;


// 问吧首页接口
// 
// 首页获取标签
router.post('/GetAllProfessorLabels', function(req, res, next) {
    res.json([{"Id":"1a4c5650-7560-e63b-4734-0f9faac95cae","LabelName":"跆拳道改","Sort":2},{"Id":"1a4c5650-e324-1cce-f74d-59020ee51ce3","LabelName":"推荐","Sort":1},{"Id":"1a4c5651-1e69-2590-a0ba-f641e225cda5","LabelName":"足球","Sort":3},{"Id":"1a4c5651-4b96-eef5-f072-beb93ba48cf0","LabelName":"篮球","Sort":8},{"Id":"1a4c5651-73bd-6f67-c110-736b0f17e5a3","LabelName":"街舞","Sort":6},{"Id":"1a4c64bb-9f38-7569-38a4-4e25c63b6505","LabelName":"你只是个测试版","Sort":4}])
});
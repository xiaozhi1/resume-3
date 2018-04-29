/* 
var model = Model({
    resourceName: '表名'
})
*/
window.Model = function(options){
    let resourceName = options.resourceName
    return {
        init:function(){
            var APP_ID = 'iMbomh2avqYuLJfoX2AY0kqM-gzGzoHsz';
            var APP_KEY = 'YfwIv7huBwyU0vuqr0Gkzl32';
            AV.init({appId: APP_ID,appKey: APP_KEY})
        },
        fetch:function(){
            var query = new AV.Query(resourceName);
            
            var now = new Date()
            query.lessThanOrEqualTo('createdAt',now);//今天
            query.limit(10);//最多返回10条结果
            // query.descending('createdAt'); //先不倒叙

            return query.find()    // Promis 对象
        },
        save:function(object){
            var X = AV.Object.extend(resourceName);
            var x = new X();
            return x.save(object)
        }
    }
}
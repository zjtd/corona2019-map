mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1d2VubG9uZyIsImEiOiJjazdhNGF6dzIwd3V0M21zNHU1ejZ1a3Q4In0.VkUeaPhu-uMepNBOMc_UdA';
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [11.98, 32.85],
    maxZoom:11,
    minZoom:1,
    zoom: 1.87,
    hash: true,
    maxzoom: 9,
    
});
map.on('load', function () {
    function passsource(sourcename, filename1) {

        map.addSource(sourcename, {
            'type': 'geojson',
            'data': filename1,
            
        });

    }  
    passsource('coronavirus', 'cityNew.geojson');  
    map.addLayer(
        {
            'id': 'coronavirus-heat',
            'type': 'heatmap',
            'source': 'coronavirus',
            'maxzoom': 10,
            'paint': {
                // 热力权重，适用于集合图
                // Mapbox Expression https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/
                'heatmap-weight': [
                    'interpolate',
                    ['linear'],
                    ['get', 'confirmedCount'],
                    0, 0,
                    1000, 1
                ],
                // 全局控制热力权重
                'heatmap-intensity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 3,
                    9, 5
                ],
                // 热力图配色范围
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0, "rgba(0, 0, 0, 0)",
                    0.1, "#927903",
                    0.15, "#ffd403",
                    1, "red"
                ],
                // 每个热力点的绘制半径
                'heatmap-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 2,
                    1, 4,
                    2, 8,
                    3, 16,
                    4, 32,
                    5, 64,
                    6, 128,
                    7, 256,
                    8, 512,
                    9, 1024,
                    10, 2048,
                    11, 4096,
                    17, 131072
                ],
                // 热力图的透明度
                'heatmap-opacity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    5, 0.95,
                    6, 0.5
                ]
            }
        },
        'waterway-label'
    );  
});

function passsource(sourcename, filename1 = toObj) {

    map.addSource(sourcename, {
        'type': 'geojson',
        'data': filename1,
        
    });

};
function timeplay(){
const dom = document.getElementById("timebox");
    // 创建数据 

    const dates = [];
    const now = new Date();
    now.setDate(-98);
    for (var i = 0; i < 103; i++) {
        const str = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
        dates.push(str);
        now.setDate(now.getDate() + 1);
    };

    // 初始化
    tp = new Timeplayer(dom, {
        dates,
        postSpace: 15,
        theme: 'dark',
    });};
timeplay()

var obj1;
var obj2;
var list = [];
var list2 = [];
var toObj = Object()
function jieshou(objjson){
    obj1 = objjson;
    obj2 = obj1.features;
    
}
const test = (index,value) =>{     
    function changeresponse(var1) {
        list = [];
        
        toObj.type = "FeatureCollection";
        for (i = 0; i < obj2.length; i++) {
             // var obj3 = obj2;
            var array1 = obj2[i];
            
            if (array1.properties.updateTime == var1+" ") {
                array1.type = "Feature";
                list.push(array1);
                list2.push(array1.properties)
                };
            };
            toObj.features = list;
            
    };
    
    changeresponse(value);
    toObj.features = list;
    map.removeLayer('coronavirus-heat');
    map.removeSource('coronavirus') 
    passsource('coronavirus', toObj);
    var tableData = toObj.features;
    
    map.addLayer(
        {
            'id': 'coronavirus-heat',
            'type': 'heatmap',
            'source': 'coronavirus',
            'maxzoom': 10,
            'paint': {
                // 热力权重，适用于集合图
                // Mapbox Expression https://docs.mapbox.com/mapbox-gl-js/style-spec/expressions/
                'heatmap-weight': [
                    'interpolate',
                    ['linear'],
                    ['get', 'confirmedCount'],
                    0, 0,
                    1000, 1
                ],
                // 全局控制热力权重
                'heatmap-intensity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 3,
                    9, 5
                ],
                // 热力图配色范围
                'heatmap-color': [
                    'interpolate',
                    ['linear'],
                    ['heatmap-density'],
                    0, "rgba(0, 0, 0, 0)",
                    0.1, "#927903",
                    0.15, "#ffd403",
                    1, "red"
                ],
                // 每个热力点的绘制半径
                'heatmap-radius': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    0, 2,
                    1, 4,
                    2, 8,
                    3, 16,
                    4, 32,
                    5, 64,
                    6, 128,
                    7, 256,
                    8, 512,
                    9, 1024,
                    10, 2048,
                    11, 4096,
                    17, 131072
                ],
                // 热力图的透明度
                'heatmap-opacity': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    5, 0.95,
                    6, 0.5
                ]
            }
        },
        'waterway-label'
    );
    var app1 = new Vue({
        el: '#rTable',
        data: {
            message:'国内分城市疫情信息',
            orderBy:["provinceName", "cityName","confirmedCount","curedCount","deadCount"],
            tableTh:{
                provinceName:{
                    title:"省份",
                    align:"left"
                },
                cityName:{
                    title:"城市",
                    align:"left"
                },
                confirmedCount:{
                    title:"确诊数(人)",
                    align:"right"
                },
                curedCount:{
                    title:"治愈数(人)",
                    align:"right"
                },
                deadCount:{
                    title:"死亡数(人)",
                    align:"right"
                },
            },
            dataList:list2,
            
        }
    });
    
    
    
};
tp.on("change",test);

// var myChart = echarts.init(document.getElementById('main'));

//         // 指定图表的配置项和数据
//         var option = {
//             title: {
//                 text: 'ECharts 入门示例'
//             },
//             tooltip: {},
//             legend: {
//                 data:['销量']
//             },
//             xAxis: {
//                 data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
//             },
//             yAxis: {},
//             series: [{
//                 name: '销量',
//                 type: 'bar',
//                 data: [5, 20, 36, 10, 10, 20]
//             }]
//         };

//         // 使用刚指定的配置项和数据显示图表。
//         myChart.setOption(option);


var obj2;
var list = [];
var list2 = [];
var toObj = Object();
var sumC =0,sumCu=0,sumD=0;;
mapboxgl.accessToken = 'pk.eyJ1Ijoiemh1d2VubG9uZyIsImEiOiJjazdhNGF6dzIwd3V0M21zNHU1ejZ1a3Q4In0.VkUeaPhu-uMepNBOMc_UdA';
map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v10', // stylesheet location
    center: [105.8,39.19],
    maxZoom:11,
    minZoom:1,
    zoom: 2.35,
    hash: true,
    maxzoom: 9,
    defaultLanguage:'zh',
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
                    ['get', 'cCC'],
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

function timeplay(){
const dom = document.getElementById("timebox");
    // 创建数据 

    const dates = [];
    const now = new Date();
    now.setDate(-97);
    for (var i = 0; i < 112; i++) {
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

function passsource(sourcename, filename1 = toObj) {

    map.addSource(sourcename, {
        'type': 'geojson',
        'data': filename1,
        
    });

};
var dateUnique = [];
function unique2(arr){
    var hash=[];
    for (var i = 0; i < arr.length; i++) {
       if(arr.indexOf(arr[i])===i){
        hash.push(arr[i]);
       }
    }

    return hash;
};
var tempArray;
var dateList = [];
function dataListOnce(var1="2020/5/14") {
    list = [];
    list2= [];
    sumC=0,sumcoC=0,sumCu=0,sumD =0,sumS =0,sumcCC=0;

    toObj.type = "FeatureCollection";
    obj2 = api.features;
    for (i = 0; i < obj2.length; i++) {
        array1 =Object.assign({}, obj2[i]);
        dateList.push(array1.properties.uT);
        if (array1.properties.uT == var1) {
            var tempArray =JSON.parse(JSON.stringify(array1));
            delete(tempArray.properties.uT);
            sumcoC +=parseInt(tempArray.properties.coC);
            sumCu +=tempArray.properties.cuC;
            sumD +=parseInt(tempArray.properties.dC);
            sumS +=parseInt(tempArray.properties.sC);
            sumcCC +=parseInt(tempArray.properties.cCC);
            list2.push(tempArray.properties);
            }
        };
    sumC=sumcCC;
};

dataListOnce();

dateUnique = unique2(dateList);
dateUnique.sort();

var app1 = new Vue({
    el: '#rTable',
    data: {
        orderBy:["provinceName", "cityName","confirmedCount","curedCount","deadCount"],
        tableTh:{
            index:{
                title:"序号",
                align:"left"
            },
            provinceName:{
                title:"省份",
                // align:"right",
            },
            cityName:{
                title:"城市",
                // align:"right"
            },
            confirmedCount:{
                title:"确诊",
                //align:"right"
            },
            curedCount:{
                title:"治愈数",
                //align:"right"
            },
            deadCount:{
                title:"死亡数",
                //align:"right"
            },
            suspectedCount:{
                title:"疑似",
                //align:"right"
            },
            cCC:{
                title:"现存确诊",
                //align:"right"
            },
            
        },
        dataList:list2,  
    },
    // methods:{
    //     timeBoxClick(){
    //         var dataLL = this.dataList.length;
    //         this.dataList.splice(0,dataLL);
    //         this.dataList = list2;
    //         // console.log(list2);
    //     },
    // },
});
var panel = new Vue({
    el:"#dataPanel",
    data:{
        sumC1:sumC, 
        sumCu1:sumCu,
        sumD1:sumD,
    }
})
var tableID = document.getElementById("tableBox")
const test = (index,value) =>{  
    function changeresponse(var1) {
        list = [];
        list2= [];
        obj2 = api.features;
        toObj.type = "FeatureCollection";
        sumC=0,sumcoC=0,sumCu=0,sumD =0,sumS =0,sumcCC=0;
        for (i = 0; i < obj2.length; i++) {
             // var obj3 = obj2;
             array1 = Object.assign({}, obj2[i]);
            if (array1.properties.uT == var1) {
                var tempArray =JSON.parse(JSON.stringify(array1));
                delete(tempArray.properties.uT)
                tempArray.type = "Feature";
                var num1 = tempArray.properties.coC
                sumcoC +=parseInt(tempArray.properties.coC);
                sumCu +=tempArray.properties.cuC;
                sumD +=parseInt(tempArray.properties.dC);
                sumS +=parseInt(tempArray.properties.sC);
                tempArray.properties.cCC = tempArray.properties.coC-tempArray.properties.cuC-tempArray.properties.dC
                list.push(tempArray);
                sumcCC +=parseInt(tempArray.properties.cCC);
                list2.push(tempArray.properties)
                }
            };
        sumC=sumcCC;
        yewu(value);};
    changeresponse(value);
    var tablemessage = document.getElementById("tableMessage")
    function yewu(value){
        panel.sumC1 = sumC;
        panel.sumCu1 =sumCu;
        panel.sumD1 = sumD; 
        var dLL = app1.dataList.length;
        app1.dataList.splice(0,dLL);
        map.removeLayer('coronavirus-heat');
        map.removeSource('coronavirus') 
        toObj.features = list;
        for(i=0;i<list2.length;i++){ 
            Vue.set(app1.dataList,i,list2[i])
        };
        passsource('coronavirus', toObj);
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
                    ['get', 'cCC'],
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
    };
    if(list2.length>0){
        if(tablemessage){
        tablemessage.parentNode.removeChild(tablemessage)
    };
    }
    else{
        if(tablemessage){
            tablemessage.parentNode.removeChild(tablemessage);};
        var tablemessage = document.createElement("span");
		tablemessage.id = "tableMessage";
		tableID.appendChild(tablemessage);
        tablemessage.textContent = "请减少日期选择速度"
    };
    
    };
tp.on("change",test);
function pantoMap(e){
    alert(e.target.innerText);
};

function getChinaData(){
    var tempList= [];
    ChinaCCC = [];
    ChinaSC =[];
    ChinaCuC=[];
    ChinaDC=[];
    dates=[];
    for(j = 0;j<ChinaData.length;j++){
        ChinaCCC.push(ChinaData[j].confirmed-ChinaData[j].cured-ChinaData[j].dead);
        ChinaSC.push(ChinaData[j].suspected)
        ChinaCuC.push(ChinaData[j].cured)
        ChinaDC.push(ChinaData[j].dead)
        dates.push(ChinaData[j].date)
    }
};
getChinaData();
function getForeignData(){
    fDDates = [];
    for(i=0;i<foreign.length;i++){
        if(foreign[i].countryCode=='JP'){
            fDDates.push(foreign[i].date)
        }
    };
    FR=[];DE=[];JP=[];US=[];IT=[];GB=[];
    for(j=0;j<foreign.length;j++){
            if(foreign[j].country =="法国"){
                FR.push(foreign[j].confirmed)
            }
            else if(foreign[j].country =='德国'){
                DE.push(foreign[j].confirmed)
            }
            else if(foreign[j].countryCode =='JP'){
                JP.push(foreign[j].confirmed)
            }
            else if(foreign[j].countryCode =='US'){
                US.push(foreign[j].confirmed)
            }
            else if(foreign[j].countryCode =='IT'){
                IT.push(foreign[j].confirmed)
            }
            else if(foreign[j].countryCode =='GB'){
                GB.push(foreign[j].confirmed)
            };
    };
    length1 = FR.length
    for(i=0;i<fDDates.length-length1;i++){
        FR.unshift(0)
        };
        length1 = DE.length
    for(i=0;i<fDDates.length-length1;i++){
        DE.unshift(0)
        };
        length1 = JP.length
    for(i=0;i<fDDates.length-length1;i++){
        JP.unshift(0)
        };
        length1 = US.length
    for(i=0;i<fDDates.length-length1;i++){
        US.unshift(0)
        };
        length1 = IT.length
    for(i=0;i<fDDates.length-length1;i++){
        IT.unshift(0)
        };
        length1 = GB.length
    for(i=0;i<fDDates.length-length1;i++){
        GB.unshift(0)
        };
};
getForeignData();
var foreignChart = echarts.init(document.getElementById("dataPanelEchart1"));
var domesticChart = echarts.init(document.getElementById("dataPanelEchart2"));
var fCOption = {
    title:{
        text:'海外主要国家疫情统计',
        textStyle:{
            color:'#FFFFFF',
        }, 
    },
    toolbox:{
        feature:{
            saveAsImage:{}
        },
        iconStyle:{
            color:'#FFFFFF',
        }
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'cross',
            label:{
                backgroundColor:'#000000'
            }
        },
    },
    legend:{
        top:'25px',
        data:['日本','法国','德国','英国','意大利','美国',],
        textStyle:{
            color:'#FFFFFF',
        }
    },
    grid: {
        
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'inside',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: fDDates,
            axisLabel:{
                color:'#FFFFFF',
                
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                color:'#FFFFFF',
            }
        }
    ],
    series:[
        {
            name: '日本', // 系列名称
            type: 'line', // 类型：线
            data: JP,
        },
        {
            name: '法国', // 系列名称
            type: 'line', // 类型：线
            data: FR,
        },
        {
            name: '德国', // 系列名称
            type: 'line', // 类型：线
            data: DE,
        },
        {
            name: '英国', // 系列名称
            type: 'line', // 类型：线
            data: GB,
        },
        {
            name: '意大利', // 系列名称
            type: 'line', // 类型：线
            data: IT,
        },
        {
            name: '美国', // 系列名称
            type: 'line', // 类型：线
            data: US,
        },
    ]
    
};
var dCOption ={
    title:{
        text:'国内新冠疫情统计',
        textStyle:{
            color:'#FFFFFF',
        }
    },
    tooltip:{
        trigger:'axis',
        axisPointer:{
            type:'cross',
            label:{
                backgroundColor:'#000000'
            }
        }
    },
    legend:{
        data:['现有确诊','疑似','治愈','死亡'],
    },
    toolbox:{
        feature:{
            saveAsImage:{}
        },
        iconStyle:{
            color:'#FFFFFF',
        }
    },
    grid: {
        left: '2%',
        right: '2%',
        bottom: '3%',
        containLabel: true
    },
    dataZoom: [
        {
            id: 'dataZoomX',
            type: 'inside',
            xAxisIndex: [0],
            filterMode: 'filter'
        },
        {
            id: 'dataZoomY',
            type: 'inside',
            yAxisIndex: [0],
            filterMode: 'empty'
        }
    ],
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: dates,
            axisLabel:{
                color:'#FFFFFF',
                
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                color:'#FFFFFF',
            }
        }
    ],
    series:[
        {
            name:'疑似数',
            type:'line',
            stack:'总量',
            areaStyle:{},
            data:ChinaSC,
        },
        {
            name:'死亡数',
            type:'line',
            stack:'总量',
            areaStyle:{},
            
            data:ChinaDC,
        },
        {
            name:'治愈数',
            type:'line',
            stack:'总量',
            areaStyle:{},
            data:ChinaCuC,
        },
        {
            name:'现有确诊数',
            type:'line',
            stack:'总量',
            areaStyle:{},
            label:{
                normal:{
                    show:true,
                    position:['-650%', '-290%'],
                    color:'#E37272',
                    fontWeight:'bold',
                    fontSize:'16',

                }
            },
            data:ChinaCCC,
        },
        
    ],
    color:['#d48265','#2f4554','#61a0a8','#c23531']
}
foreignChart.setOption(fCOption);
domesticChart.setOption(dCOption);

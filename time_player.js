
const dom = document.getElementById("timebox");
// 创建数据 

const dates = [];
const now = new Date();
now.setDate(-65);
for (var i = 0; i < 91; i++) {
    const str = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
    dates.push(str);
    now.setDate(now.getDate() + 1);
}

// 初始化
var tp = new Timeplayer(dom, {

    dates,
});
const env = (index,value) =>{
    allert(value)
};
tp.on("change",env)
var paper = Raphael("paper",1024,800);

// //создаем объекты
var ellipse = paper.ellipse(300,200,150,100).attr({"fill":"orange"});
var circle = paper.circle(100,300,50).attr({"fill":"green","stroke-dasharray":"."});
var rect = paper.rect(500,100,100,100).attr({"fill":"blue"});
var path = paper.path("m10,10l30,40l150,80z").attr({fill: "red", "stroke-width": 2});
var image = paper.image("dog.svg",399,300,254,228);

var objs = []
objs.push(ellipse,circle,rect,path,image);

//функции для драга 

moveFnc = function(dx, dy) {
          lx = dx + this.initX;
          ly = dy + this.initY;
          this.transform('t' + lx + ',' + ly);
      };
startFnc = function() {},
endFnc = function() {
		  this.initX = lx;
		  this.initY = ly;
 };

// //навешивем обработчики
for (i = 0; i<objs.length;i++){
	(function(i){
		var cur = objs[i]
		cur.mouseover (function(env){
			console.log("c",cur)
			cur.attr({"opacity":0.5,"cursor":"hand"});
		});
		cur.mouseout(function(env){
			cur.attr({"opacity":1,"cursor":"default"});
		});
		cur.initX = 0;
		cur.initY = 0;
		cur.drag(moveFnc, startFnc, endFnc)
	})(i);
};
page.28

function first(){
	second();
	console.log('함수 first()';
	)
}

function second(){
	second();
	console.log('함수 second()';
	)
}

function third(){
	second();
	console.log('함수 third()';
	)
}

function run(){
	console.log('난 run이다.');
}

console.log('시작');
setTimeout(run, 3000);
console.log('끝');


var sayNode = function(){
	console.log('Node')
};

var es = 'ES';
var oldObject = {
	sayJS: function(){ console.log('JS')},
	sayNode: sayNode
};

const newObject = {
	sayJS(){console.log('JS');},
	sayNode,
	[es+6]: 'Good'
};

let user = {
	id:'mulcam',
	pw:'1234'
	name:'김멀캠'
	age:30
};

// 양식 코스 //

function havingSoup(){
setTimeout(function(){
	console.log("스프를 먹는다");
},2000);
}
function havingSteak(){
setTimeout(function(){
	console.log("스테이크를 먹는다");
},1000);
}
function havingBread(){
setTimeout(function(){
	console.log("빵을 먹는다");
},3000);
}
function havingDesser(){
setTimeout(function(){
	console.log("케이크를 먹는다");
},500);
}

havingSoup()
havingSteak()
havingBread()
havingDesser()


// callback //
function havingSoup(callback){
	setTimeout(function(){
		console.log("스프를 먹었다.");
		callback();
	}
,2000);
};

function havingSteak(callback){
	setTimeout(function(){
	console.log("스테이크를 먹었다.")
	callback();
}
,1000);
}

function havingBread(callback){
	setTimeout(function(){
	console.log("빵을 먹었다.");
	callback();
},3000);
};

function havingDesser(callback){
	setTimeout(function(){
		console.log("케이크를 먹었다..");
		callback();
	},3000);
}

havingSoup( function(){
	havingSteak(function(){
		havingBread(function(){
			havingDesser();
		});
	});
});

// 다음 //
setTimeout(
	(mes) => {
		console.log(mes);
		setTimeout(
			(mes) => {
				console.log(mes);
				setTimeout(
					(mes) => {
						console.log(mes);
						setTimeout(
							(mes) => {
							console.log(mes);
							},500, "케이크를 먹었다."
						);
					}, 3000, "빵을 먹었다."
				)
			}, 1000, "스테이크를 먹었다."
		);
	}, 2000, "스프를 먹었다."
)


// page.75 //

const condition = true;
const promise = new Promise(
	(resolve, reject) => {
		if(condition) {
			resolve("성공");
		}else{
			reject("실패");
		}
	}
);

// promise	.then().catch().finally(); //
promise
  .then((mes) => {console.log(mes);})
  .catch((mes) => {console.log(mes);})
  .finally(()=>{console.log("잘 됐든 못 됐든 주말 잘 보내기.");});

// page.77 callback 방식 //
function findAndSaveUser(Users){
	Users.findOne({}, (err, user) => { // 첫 콜백 
		if (err){ return console.oerror(err);}}
		user.name = 'zero';
		user.save( (err) => { // 두번째 콜백 
			if (err){ return console.oerror(err);}}
			Users.findOne({gender:'m'}, (err, user) =>

		}

		);

	);
}

// promise 방식 //
function findAndSaveUser(user){
	user.findOne({})
	.then(
		(user)=> {user.name = 'zero'; return user.save();})
		.then ((user)=> {return Users.findOne({gender:'m'});})
		.catch(err => {console.log(err); });
}
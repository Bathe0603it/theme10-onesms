var numberMemberValue = 10;
var defaultLayerRoomValue = 'tiec';
var layerRoomValue = defaultLayerRoomValue;
var imageDefault = 'default.gif';
var imageItem = imageDefault;
var listLayerRoom = {
	'tiec': {
	    0: imageDefault, 
	    10: '10.jpg', 
	    20: '20.jpg', 
	    30: '30.jpg', 
	    40: '40.jpg', 
	    50: '50.jpg', 
	    60: '60.jpg',
	    70: '70.jpg',
	    80: '80.jpg',
	    90: '90.jpg',
	    100: '100.jpg'
	}, 
	'vong-luoi-liem': {
	    0: imageDefault, 
	    10: '10.jpg', 
	    20: '20.jpg', 
	    30: '30.gif', 
	    40: '40.jpg', 
	    50: '50.jpg', 
	    60: '60.jpg',
	    70: '70.jpg',
	    80: '80.jpg',
	    90: '90.jpg',
	    100: '100.jpg'
	}, 
	'lop-hoc': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.jpg',
	    90: '90.jpg',
	    100: '100.jpg'
	}, 
	'rap-hat': {
	    0: imageDefault, 
	    10: imageDefault, 
	    100: '100.gif'
	}, 
	'phong-hop': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.jpg'
	},
	'quang-truong-rong': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.gif'
	},
	'le-tan': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.gif'
	},
	'hoi-nghi': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.gif'
	},
	'hinh-chu-u': {
	    0: imageDefault, 
	    10: '10.gif', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.gif'
	},
	'ban-dang-ki': {
	    0: imageDefault, 
	    10: '10.jpg', 
	    20: '20.gif', 
	    30: '30.gif', 
	    40: '40.gif', 
	    50: '50.gif', 
	    60: '60.gif',
	    70: '70.gif',
	    80: '80.gif',
	    90: '90.gif',
	    100: '100.gif'
	}
};
var listLayerRoomItem = listLayerRoom[defaultLayerRoomValue];

var imageRoom = $('.image-room');
var cpnLayerRoom = $('.cpn-layer-room');
var cpnMemberRoom = $('.cpn-member-room');
var imageLoadUrl = "images/layers-room/load.gif";
var dirPath = "images/layers-room/";

function layerRoomChange(obj){
	layerRoomValue = obj.value;
	handlerRoomChange();
}

function memberRoomChange(obj){
	numberMemberValue = obj.value;
	// console.log(numberMemberValue);
	handlerRoomChange();
}

function handlerRoomChange(){
	// Kiem tra doi tuong numbermember co ton tai trong list layer khong
 	isTontaiLayer = listLayerRoom.hasOwnProperty(layerRoomValue);
    if(isTontaiLayer) {
        listLayerRoomItem = listLayerRoom[layerRoomValue];
    }

	// Check number member & lam tron xuong thap phan 10 neu khong ton tai
	var number = numberMemberValue%10==0?numberMemberValue:(Math.floor(numberMemberValue/10)*10);
	if (number > 100) {
		number = 100;
	}
	if (listLayerRoomItem.hasOwnProperty(number)) {
		imageItem = listLayerRoomItem[number];
	}
	else{
		imageItem = imageDefault;
	}

	imageChange = dirPath+layerRoomValue+"/"+imageItem;
	
	waittingImage(imageChange);
}

function waittingImage(imageChange){
	setTimeout(function() {
		imageRoom.attr("src", imageChange);
	}, 1000);
	imageRoom.attr("src", imageLoadUrl);
}

function hiddenParent1(){
	$('.box-order-user-room').removeClass('box-order-room-hidden');
	$('.box-order-user-room').addClass('box-order-room-show');

	$('.box-order-info-room').removeClass('box-order-room-show');
	$('.box-order-info-room').addClass('box-order-room-hidden');
}

function hiddenParent2(){
	$('.box-order-user-room').removeClass('box-order-room-show');
	$('.box-order-user-room').addClass('box-order-room-hidden');

	$('.box-order-info-room').removeClass('box-order-room-hidden');
	$('.box-order-info-room').addClass('box-order-room-show');
}
(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wave_26020101_atlas_1", frames: [[856,0,106,806],[964,34,152,32],[964,68,152,32],[856,808,176,32],[964,0,176,32],[0,0,854,525],[0,527,854,525],[0,1054,854,525]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_16 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["wave_26020101_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.wave_26020101 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [49];
	// timeline functions:
	this.frame_49 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// 波源
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(53.3,96.1,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_14();
	this.instance_1.setTransform(53.3,96.1,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_15();
	this.instance_2.setTransform(53.3,96.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},48).to({state:[{t:this.instance_2}]},1).wait(1));

	// コメント
	this.instance_3 = new lib.CachedBmp_7();
	this.instance_3.setTransform(255.35,84,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_6();
	this.instance_4.setTransform(118.75,33.1,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_5();
	this.instance_5.setTransform(221.9,167,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_4();
	this.instance_6.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]},49).wait(1));

	// 平面波面
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AAAfQMAAAg+f");
	this.shape.setTransform(56.8,219.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3).p("AAA/PMAAAA+f");
	this.shape_1.setTransform(57.85,219.6);
	this.shape_1._off = true;

	this.instance_7 = new lib.CachedBmp_16();
	this.instance_7.setTransform(55.3,18.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:56.8,y:219.6}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:106.8,y:220.6}}]},1).to({state:[{t:this.instance_7}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:58.9,y:219.65},0).wait(1).to({x:59.95},0).wait(1).to({x:60.95,y:219.7},0).wait(1).to({x:62},0).wait(1).to({x:63.05,y:219.75},0).wait(1).to({x:64.1},0).wait(1).to({x:65.15},0).wait(1).to({x:66.2,y:219.8},0).wait(1).to({x:67.2},0).wait(1).to({x:68.25,y:219.85},0).wait(1).to({x:69.3},0).wait(1).to({x:70.35},0).wait(1).to({x:71.4,y:219.9},0).wait(1).to({x:72.45},0).wait(1).to({x:73.45,y:219.95},0).wait(1).to({x:74.5},0).wait(1).to({x:75.55,y:220},0).wait(1).to({x:76.6},0).wait(1).to({x:77.65},0).wait(1).to({x:78.7,y:220.05},0).wait(1).to({x:79.7},0).wait(1).to({x:80.75,y:220.1},0).wait(1).to({x:81.8},0).wait(1).to({x:82.85},0).wait(1).to({x:83.9,y:220.15},0).wait(1).to({x:84.95},0).wait(1).to({x:85.95,y:220.2},0).wait(1).to({x:87},0).wait(1).to({x:88.05,y:220.25},0).wait(1).to({x:89.1},0).wait(1).to({x:90.15},0).wait(1).to({x:91.2,y:220.3},0).wait(1).to({x:92.2},0).wait(1).to({x:93.25,y:220.35},0).wait(1).to({x:94.3},0).wait(1).to({x:95.35},0).wait(1).to({x:96.4,y:220.4},0).wait(1).to({x:97.45},0).wait(1).to({x:98.45,y:220.45},0).wait(1).to({x:99.5},0).wait(1).to({x:100.55,y:220.5},0).wait(1).to({x:101.6},0).wait(1).to({x:102.65},0).wait(1).to({x:103.7,y:220.55},0).wait(1).to({x:104.7},0).wait(1).to({x:105.75,y:220.6},0).to({_off:true},1).wait(2));

	// 球面波面
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3).p("AvRvEQBKgGBTAAQFuAAFOCNQFCCJD6D5QD5D5CIFCQCOFOAAFvQAABLgHBR");
	this.shape_2.setTransform(378.95,256.7396);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3).p("AvXvJQBLgHBTAAQFwAAFQCOQFECKD7D6QD7D7CJFDQCOFRAAFwQAABMgHBS");
	this.shape_3.setTransform(379.425,256.2892);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3).p("AvdvPQBMgHBTAAQFzAAFRCPQFHCLD8D7QD8D8CKFGQCPFSAAFzQAABNgHBR");
	this.shape_4.setTransform(379.9,255.8142);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3).p("AvivVQBLgGBUAAQF1AAFUCQQFICKD9D+QD+D9CLFIQCQFUAAF1QAABNgIBS");
	this.shape_5.setTransform(380.4,255.3929);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3).p("AvovaQBMgHBUAAQF3AAFWCRQFJCLEAD/QD+D/CMFJQCRFXAAF3QAABNgHBT");
	this.shape_6.setTransform(380.85,254.9134);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3).p("AvuvgQBNgHBVAAQF4AAFZCSQFLCMEBEAQEAEBCMFLQCSFYAAF5QAABOgHBT");
	this.shape_7.setTransform(381.325,254.463);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3).p("Av0vmQBNgGBWAAQF7AAFaCSQFNCNECECQECECCNFNQCTFaAAF7QAABPgHBT");
	this.shape_8.setTransform(381.8,254.013);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3).p("Av5vrQBNgHBWAAQF9AAFcCTQFPCOEEEDQEDEDCOFPQCTFcAAF+QAABPgHBU");
	this.shape_9.setTransform(382.275,253.5667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("Av/vxQBOgHBXAAQF/AAFeCUQFQCPEGEEQEEEFCPFRQCUFeAAF/QAABQgIBU");
	this.shape_10.setTransform(382.75,253.1167);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(3).p("AwFv2QBPgHBXAAQGBAAFfCVQFUCPEGEGQEFEGCRFTQCVFgAAGCQAABQgIBU");
	this.shape_11.setTransform(383.25,252.6413);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(3).p("AwKv8QBPgHBXAAQGDAAFiCWQFVCQEIEIQEHEHCRFVQCVFiAAGDQAABRgHBV");
	this.shape_12.setTransform(383.7,252.1913);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(3).p("AwQwCQBPgHBYAAQGGAAFjCXQFXCREJEJQEJEJCRFWQCXFkAAGGQAABRgIBW");
	this.shape_13.setTransform(384.175,251.7405);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(3).p("AwVwHQBPgHBZAAQGHAAFmCXQFYCSELEKQEKELCSFYQCYFmAAGIQAABSgIBV");
	this.shape_14.setTransform(384.65,251.2905);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(3).p("AwbwNQBQgHBZAAQGJAAFoCYQFaCTEMEMQEMEMCTFaQCYFnAAGKQAABTgHBW");
	this.shape_15.setTransform(385.125,250.8402);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(3).p("AwhwTQBQgHBaAAQGMAAFpCZQFcCUEOENQENENCUFcQCZFqAAGMQAABTgIBW");
	this.shape_16.setTransform(385.625,250.3652);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(3).p("AwnwYQBRgHBaAAQGOAAFrCZQFeCVEPEOQEPEPCUFeQCaFsAAGOQAABTgIBX");
	this.shape_17.setTransform(386.1,249.9191);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(3).p("AwsweQBRgHBbAAQGQAAFtCaQFgCWEREQQEQEQCVFgQCaFtAAGRQAABUgHBX");
	this.shape_18.setTransform(386.55,249.4644);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(3).p("AwywkQBSgHBbAAQGSAAFvCcQFiCWESERQERESCWFhQCcFwAAGSQAABVgIBX");
	this.shape_19.setTransform(387.025,249.0141);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(3).p("Aw4wpQBSgHBcAAQGUAAFxCcQFkCXEUESQETEUCWFjQCdFxAAGVQAABVgIBY");
	this.shape_20.setTransform(387.5,248.5641);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(3).p("Aw9wuQBSgIBcAAQGWAAF0CdQFlCYEVEUQEUEVCYFlQCdF0AAGWQAABWgIBY");
	this.shape_21.setTransform(388,248.0929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(3).p("AxDw1QBTgHBcAAQGZAAF1CeQFnCYEXEWQEVEWCZFnQCeF2AAGYQAABXgIBY");
	this.shape_22.setTransform(388.475,247.6675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(3).p("AxJw6QBUgHBdAAQGaAAF3CeQFqCaEXEXQEYEXCZFqQCfF3AAGbQAABWgIBZ");
	this.shape_23.setTransform(388.95,247.1922);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(3).p("AxOw/QBUgIBdAAQGdAAF5CgQFrCaEZEYQEZEZCaFrQCfF5AAGdQAABYgIBZ");
	this.shape_24.setTransform(389.4,246.7422);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(3).p("AxUxFQBUgIBeAAQGfAAF7ChQFtCbEbEaQEaEaCaFtQChF7AAGfQAABYgIBZ");
	this.shape_25.setTransform(389.875,246.2668);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(3).p("AxZxLQBUgHBeAAQGhAAF9ChQFvCcEcEbQEcEcCbFvQChF9AAGhQAABYgIBa");
	this.shape_26.setTransform(390.375,245.8414);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(3).p("AxfxQQBUgIBfAAQGjAAF/CiQFxCcEdEdQEdEeCdFwQCiF/AAGjQAABZgIBb");
	this.shape_27.setTransform(390.85,245.391);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(3).p("AxlxWQBVgIBgAAQGlAAGBCjQFyCdEfEfQEfEeCdFzQCjGBAAGlQAABZgIBb");
	this.shape_28.setTransform(391.325,244.9157);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(3).p("AxqxcQBVgHBgAAQGoAAGCCjQF1CeEgEgQEgEgCeF0QCkGDAAGoQAABagJBb");
	this.shape_29.setTransform(391.8,244.4698);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(3).p("AxwxhQBWgIBhAAQGpAAGEClQF3CfEhEhQEiEhCfF3QCkGEAAGqQAABagIBc");
	this.shape_30.setTransform(392.25,243.9903);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(3).p("Ax2xnQBWgIBiAAQGrAAGHClQF4CgEjEjQEjEjCfF4QCmGGAAGsQAABbgIBc");
	this.shape_31.setTransform(392.725,243.565);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(3).p("Ax7xtQBWgHBiAAQGuAAGIClQF6ChElEkQEkElCgF5QCmGJAAGuQAABbgIBd");
	this.shape_32.setTransform(393.225,243.1146);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(3).p("AyBxyQBWgIBjAAQGwAAGKCnQF8ChEmEmQEmEmChF8QCnGKAAGwQAABcgJBd");
	this.shape_33.setTransform(393.7,242.6436);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(3).p("AyHx4QBXgHBjAAQGyAAGMCnQF+CiEoEnQEnEoCiF9QCoGNAAGyQAABcgJBd");
	this.shape_34.setTransform(394.175,242.1933);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(3).p("AyNx9QBYgIBjAAQG0AAGOCoQGACjEpEpQEpEoCiGAQCpGOAAG1QAABdgIBd");
	this.shape_35.setTransform(394.65,241.7429);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(3).p("AySyDQBYgIBkAAQG2AAGQCpQGCCkEqEqQEqEqCjGCQCqGQAAG2QAABegIBe");
	this.shape_36.setTransform(395.1,241.2925);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(3).p("AyYyJQBYgIBlAAQG4AAGSCqQGEClEsErQErEsCkGDQCqGTAAG4QAABegIBe");
	this.shape_37.setTransform(395.6,240.8175);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(3).p("AydyOQBYgIBlAAQG7AAGUCrQGFClEtEtQEtEtClGFQCrGUAAG7QAABegIBf");
	this.shape_38.setTransform(396.075,240.3672);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(3).p("AyjybQBZgIBlAAQG9AAGWCsQGICmEuEuQEuEvCmGHQCsGWAAG9QAABfgIBf");
	this.shape_39.setTransform(396.55,240.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(3).p("AypyaQBagIBmAAQG/AAGXCtQGJCnExEvQEvEwCnGJQCtGYAAG/QAABggJBf");
	this.shape_40.setTransform(397.025,239.4665);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(3).p("AyvymQBagIBnAAQHBAAGZCtQGMCoExExQEyExCnGLQCuGaAAHBQAABhgKBf");
	this.shape_41.setTransform(397.5,239.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(3).p("Ay0yrQBagJBnAAQHDAAGcCuQGNCpEzEzQEyEyCoGNQCvGcAAHDQAABhgJBg");
	this.shape_42.setTransform(397.975,239.225);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(3).p("Ay6yxQBbgIBoAAQHFAAGdCvQGPCpE1E0QE0E0CpGPQCvGeAAHFQAABhgJBg");
	this.shape_43.setTransform(398.45,238.775);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(3).p("Ay/y3QBbgIBoAAQHHAAGfCwQGRCqE2E1QE1E2CqGQQCwGgAAHIQAABhgIBh");
	this.shape_44.setTransform(398.925,238.35);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(3).p("AzFy8QBcgJBoAAQHKAAGhCxQGTCrE3E3QE3E3CqGSQCxGiAAHJQAABjgJBh");
	this.shape_45.setTransform(399.4,237.875);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(3).p("AzLzCQBcgIBpAAQHMAAGjCxQGVCsE4E4QE5E5CrGUQCyGjAAHMQAABjgJBh");
	this.shape_46.setTransform(399.875,237.425);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(3).p("AzRzIQBdgIBpAAQHOAAGlCyQGWCtE7E5QE6E7CsGWQCzGlAAHOQAABkgKBh");
	this.shape_47.setTransform(400.35,236.95);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(3).p("AzWzNQBdgJBqAAQHPAAGoCzQGYCtE8E8QE7E7CtGYQCzGoAAHPQAABkgJBj");
	this.shape_48.setTransform(400.825,236.525);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(3).p("AzczTQBdgJBrAAQHSAAGpC0QGaCuE9E9QE9E9CuGaQC0GpAAHTQAABkgJBj");
	this.shape_49.setTransform(401.3,236.05);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(3).p("AzhzZQBdgIBrAAQHUAAGrC0QGcCwE/E9QE+E/CuGbQC1GsAAHUQAABlgJBj");
	this.shape_50.setTransform(401.775,235.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50,p:{y:235.6}}]},1).to({state:[{t:this.shape_50,p:{y:234.6}},{t:this.shape_2}]},1).wait(1));

	// 球面波9
	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_51.setTransform(312.5,159.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQAMgMAPAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgPAAgMgMQgMgLAAgRg");
	this.shape_52.setTransform(312.5,159.85);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUAOgOQAOgPAUAAQAVAAAOAPQAOAOAAAUQAAAUgOAPQgOAOgVAAQgUAAgOgOQgOgPAAgUg");
	this.shape_53.setTransform(312.5,159.85);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgYARgRQASgSAXAAQAYAAASASQARARAAAYQAAAYgRASQgSARgYAAQgXAAgSgRQgRgSAAgYg");
	this.shape_54.setTransform(312.5,159.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgbAUgUQAUgVAcAAQAdAAAUAVQAUAUAAAbQAAAcgUAUQgUAVgdAAQgcAAgUgVQgUgUAAgcg");
	this.shape_55.setTransform(312.5,159.85);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgWQAXgYAgAAQAhAAAXAYQAXAWAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_56.setTransform(312.5,159.85);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_57.setTransform(312.525,159.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAegcQAcgdAoAAQApAAAcAdQAeAcAAAoQAAApgeAdQgcAcgpAAQgoAAgcgcQgegdAAgpg");
	this.shape_58.setTransform(312.5,159.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAhggQAfgfAsAAQAtAAAfAfQAhAgAAAsQAAAtghAgQgfAfgtAAQgsAAgfgfQghggAAgtg");
	this.shape_59.setTransform(312.5,159.85);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigjQAjgiAwAAQAxAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_60.setTransform(312.5,159.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAlQgmAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_61.setTransform(312.5,159.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_62.setTransform(312.5,159.85);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_63.setTransform(312.5,159.85);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvguQAugvBAAAQBBAAAuAvQAvAuAABAQAABBgvAuQguAvhBAAQhAAAgugvQgvguAAhBg");
	this.shape_64.setTransform(312.5,159.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_65.setTransform(312.5,159.85);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQAzg0BJAAQBKAAAzA0QA0AzAABJQAABJg0A0QgzA0hKAAQhJAAgzg0Qg0g0AAhJg");
	this.shape_66.setTransform(312.5,159.85);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(0.5).p("Ai5AAQAAhNA2g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABOg2A2Qg2A3hOAAQhNAAg2g3Qg2g2AAhOg");
	this.shape_67.setTransform(312.5,159.85);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.5).p("AjDAAQAAhRA5g5QA6g6BQAAQBRAAA6A6QA5A5AABRQAABSg5A5Qg6A6hRAAQhQAAg6g6Qg5g5AAhSg");
	this.shape_68.setTransform(312.5,159.85);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A8Qg8A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_69.setTransform(312.525,159.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQBAg/BYAAQBZAABAA/QA/BAAABYQAABag/A/QhAA/hZAAQhYAAhAg/Qg/g/AAhag");
	this.shape_70.setTransform(312.5,159.85);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhcBDhCQBBhDBdAAQBeAABBBDQBDBCAABcQAABdhDBDQhBBCheAAQhdAAhBhCQhDhDAAhdg");
	this.shape_71.setTransform(312.5,159.85);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBGhFQBEhFBhAAQBiAABEBFQBGBFAABhQAABhhGBFQhEBFhiAAQhhAAhEhFQhGhFAAhhg");
	this.shape_72.setTransform(312.5,159.85);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBIhIQBJhIBkAAQBlAABJBIQBIBIAABlQAABlhIBIQhJBIhlAAQhkAAhJhIQhIhIAAhlg");
	this.shape_73.setTransform(312.5,159.85);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhoBKhLQBLhLBpAAQBqAABLBLQBKBLAABoQAABqhKBLQhLBKhqAAQhpAAhLhKQhKhLAAhqg");
	this.shape_74.setTransform(312.5,159.85);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhsBOhOQBOhOBsAAQBuAABOBOQBNBOAABsQAABuhNBOQhOBNhuAAQhsAAhOhNQhOhOAAhug");
	this.shape_75.setTransform(312.5,159.85);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_76.setTransform(312.5,159.85);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThUB1AAQB2AABTBUQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_77.setTransform(312.5,159.85);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhXB5AAQB6AABWBXQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_78.setTransform(312.5,159.85);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_79.setTransform(312.5,159.85);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_80.setTransform(312.5,159.85);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_81.setTransform(312.525,159.875);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiJBihhQBihiCJAAQCKAABiBiQBiBhAACJQAACKhiBiQhiBhiKAAQiJAAhihhQhihiAAiKg");
	this.shape_82.setTransform(312.5,159.85);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiNBlhlQBlhkCNAAQCOAABlBkQBlBlAACNQAACOhlBlQhlBkiOAAQiNAAhlhkQhlhlAAiOg");
	this.shape_83.setTransform(312.5,159.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBohnQBnhoCRAAQCSAABnBoQBoBnAACRQAACShoBoQhnBniSAAQiRAAhnhnQhohoAAiSg");
	this.shape_84.setTransform(312.5,159.85);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiVBrhrQBphqCWAAQCXAABpBqQBrBrAACVQAACXhrBqQhpBqiXAAQiWAAhphqQhrhqAAiXg");
	this.shape_85.setTransform(312.5,159.85);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiZBthtQBuhuCZAAQCaAABuBuQBtBtAACZQAACbhtBsQhuBuiaAAQiZAAhuhuQhthsAAibg");
	this.shape_86.setTransform(312.5,159.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAidBwhwQBwhxCeAAQCfAABwBxQBwBwAACdQAACehwBxQhwBwifAAQieAAhwhwQhwhxAAieg");
	this.shape_87.setTransform(312.5,159.85);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_88.setTransform(312.5,159.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB2h2ClAAQCmAAB2B2QB2B1AACmQAACmh2B2Qh2B2imAAQilAAh2h2Qh2h2AAimg");
	this.shape_89.setTransform(312.5,159.85);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACqh5B5Qh4B5irAAQiqAAh4h5Qh5h5AAiqg");
	this.shape_90.setTransform(312.5,159.85);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").ss(0.5).p("AmkAAQAAitB7h8QB8h7CtAAQCuAAB8B7QB7B8AACtQAACvh7B7Qh8B8iuAAQitAAh8h8Qh7h7AAivg");
	this.shape_91.setTransform(312.5,159.85);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAixB+h/QB+h+CyAAQCzAAB+B+QB+B/AACxQAACyh+B/Qh+B/izAAQiyAAh+h/Qh+h/AAiyg");
	this.shape_92.setTransform(312.5,159.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC2iBCCQiCCBi2AAQi2AAiBiBQiBiCAAi2g");
	this.shape_93.setTransform(312.525,159.875);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCFiEC5AAQC6AACFCEQCECEAAC6QAAC7iECEQiFCEi6AAQi5AAiFiEQiEiEAAi7g");
	this.shape_94.setTransform(312.5,159.85);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_95.setTransform(312.5,159.85);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiKDCAAQDDAACKCKQCKCKAADCQAADDiKCKQiKCKjDAAQjCAAiKiKQiKiKAAjDg");
	this.shape_96.setTransform(312.5,159.85);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCOiMQCMiODGAAQDHAACMCOQCOCMAADGQAADHiOCNQiMCNjHAAQjGAAiMiNQiOiNAAjHg");
	this.shape_97.setTransform(312.5,159.85);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCQiPQCPiQDKAAQDLAACPCQQCQCPAADKQAADLiQCQQiPCPjLAAQjKAAiPiPQiQiQAAjLg");
	this.shape_98.setTransform(312.5,159.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiSCSQiTCTjPAAQjOAAiSiTQiTiSAAjPQAAjOCTiSQCSiTDOAAQDPAACTCTQCSCSAADOg");
	this.shape_99.setTransform(312.5,159.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51}]}).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_99}]},1).wait(1));

	// 球面波8
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_100.setTransform(343.35,165.65);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQALgMAQAAQAQAAAMAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_101.setTransform(343.35,165.65);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgTAPgPQAOgOAUAAQAUAAAPAOQAOAPAAATQAAAVgOAPQgPAOgUAAQgUAAgOgOQgPgPAAgVg");
	this.shape_102.setTransform(343.35,165.65);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAYAAASARQARASAAAXQAAAZgRASQgSARgYAAQgYAAgRgRQgSgSAAgZg");
	this.shape_103.setTransform(343.35,165.65);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgbAUgUQAUgVAcAAQAcAAAUAVQAVAUAAAbQAAAcgVAVQgUAUgcAAQgcAAgUgUQgUgVAAgcg");
	this.shape_104.setTransform(343.35,165.65);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAWAXQAYAXAAAgQAAAhgYAXQgWAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_105.setTransform(343.35,165.65);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAaQgZAaglAAQgkAAgagaQgagaAAglg");
	this.shape_106.setTransform(343.375,165.675);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQApAAAcAcQAdAdAAAoQAAApgdAdQgcAcgpAAQgoAAgdgcQgdgdAAgpg");
	this.shape_107.setTransform(343.35,165.65);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAgggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAgQgfAfgtAAQgsAAgggfQggggAAgtg");
	this.shape_108.setTransform(343.35,165.65);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_109.setTransform(343.35,165.65);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_110.setTransform(343.35,165.65);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAQg4AAgogoQgpgpAAg5g");
	this.shape_111.setTransform(343.35,165.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA+gsAqQgrAsg9AAQg8AAgrgsQgsgqAAg+g");
	this.shape_112.setTransform(343.35,165.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvguQAugvBAAAQBBAAAuAvQAvAuAABAQAABBgvAvQguAuhBAAQhAAAguguQgvgvAAhBg");
	this.shape_113.setTransform(343.35,165.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABGgxAxQgxAwhFAAQhEAAgxgwQgxgxAAhGg");
	this.shape_114.setTransform(343.35,165.65);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhIA0g0QAzg0BJAAQBJAAA0A0QA0A0AABIQAABKg0A0Qg0AzhJAAQhJAAgzgzQg0g0AAhKg");
	this.shape_115.setTransform(343.35,165.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABOg2A2Qg2A3hOAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_116.setTransform(343.35,165.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA5g6BRAAQBRAAA6A6QA5A5AABRQAABSg5A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_117.setTransform(343.35,165.65);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A9Qg8A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_118.setTransform(343.375,165.675);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAABAA/QA/A/AABZQAABZg/BAQhAA/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_119.setTransform(343.35,165.65);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhcBChDQBChCBdAAQBdAABCBCQBDBDAABcQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_120.setTransform(343.35,165.65);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhgBFhFQBFhFBhAAQBiAABEBFQBFBFAABgQAABihFBFQhEBFhiAAQhhAAhFhFQhFhFAAhig");
	this.shape_121.setTransform(343.35,165.65);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhkBIhIQBIhIBlAAQBlAABIBIQBIBIAABkQAABmhIBIQhIBIhlAAQhlAAhIhIQhIhIAAhmg");
	this.shape_122.setTransform(343.35,165.65);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBLAABpQAABqhLBKQhLBLhpAAQhpAAhLhLQhKhKAAhqg");
	this.shape_123.setTransform(343.35,165.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhNQBNhOBtAAQBuAABOBOQBNBNAABtQAABuhNBOQhOBNhuAAQhtAAhNhNQhOhOAAhug");
	this.shape_124.setTransform(343.35,165.65);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_125.setTransform(343.35,165.65);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").ss(0.5).p("AkcAAQAAh1BUhTQBThTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBUQhTBTh2AAQh1AAhThTQhUhUAAh2g");
	this.shape_126.setTransform(343.35,165.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").ss(0.5).p("AkmAAQAAh5BXhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBXQhWBWh6AAQh5AAhWhWQhXhXAAh6g");
	this.shape_127.setTransform(343.35,165.65);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_128.setTransform(343.35,165.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_129.setTransform(343.35,165.65);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_130.setTransform(343.375,165.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiJBihiQBihhCJAAQCKAABhBhQBiBiAACJQAACKhiBiQhhBhiKAAQiJAAhihhQhihiAAiKg");
	this.shape_131.setTransform(343.35,165.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiNBlhlQBlhkCNAAQCOAABlBkQBkBlAACNQAACPhkBkQhlBkiOAAQiNAAhlhkQhlhkAAiPg");
	this.shape_132.setTransform(343.35,165.65);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBnhnQBohoCRAAQCSAABnBoQBoBnAACRQAACThoBnQhnBniSAAQiRAAhohnQhnhnAAiTg");
	this.shape_133.setTransform(343.35,165.65);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiVBqhqQBqhrCWAAQCWAABqBrQBrBqAACVQAACXhrBqQhqBqiWAAQiWAAhqhqQhqhqAAiXg");
	this.shape_134.setTransform(343.35,165.65);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthsQBthuCaAAQCaAABtBuQBuBsAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_135.setTransform(343.35,165.65);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAidBwhxQBwhwCeAAQCeAABwBwQBxBxAACdQAACfhxBvQhwBxieAAQieAAhwhxQhwhvAAifg");
	this.shape_136.setTransform(343.35,165.65);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_137.setTransform(343.35,165.65);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB1h2CmAAQCmAAB2B2QB2B1AACmQAACnh2B1Qh2B2imAAQimAAh1h2Qh2h1AAing");
	this.shape_138.setTransform(343.35,165.65);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B5Qh5B4iqAAQiqAAh4h4Qh5h5AAirg");
	this.shape_139.setTransform(343.35,165.65);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCuAAB8B8QB7B7AACuQAACvh7B7Qh8B8iuAAQiuAAh7h8Qh8h7AAivg");
	this.shape_140.setTransform(343.35,165.65);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAixB/h/QB+h/CyAAQCyAAB/B/QB+B/AACxQAACzh+B+Qh/B/iyAAQiyAAh+h/Qh/h+AAizg");
	this.shape_141.setTransform(343.35,165.65);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC3iBCBQiCCBi2AAQi2AAiBiBQiBiBAAi3g");
	this.shape_142.setTransform(343.375,165.675);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC6AACFCEQCECEAAC6QAAC7iECEQiFCEi6AAQi6AAiEiEQiEiEAAi7g");
	this.shape_143.setTransform(343.35,165.65);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAADAiHCGQiHCHi/AAQi+AAiHiHQiHiGAAjAg");
	this.shape_144.setTransform(343.35,165.65);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiJQCKiKDCAAQDDAACKCKQCJCJAADCQAADEiJCJQiKCKjDAAQjCAAiKiKQiKiJAAjEg");
	this.shape_145.setTransform(343.35,165.65);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCNiMQCNiNDGAAQDHAACMCNQCNCMAADGQAADIiNCMQiMCNjHAAQjGAAiNiNQiNiMAAjIg");
	this.shape_146.setTransform(343.35,165.65);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCQiPDKAAQDLAACPCPQCQCQAADKQAADLiQCQQiPCPjLAAQjKAAiQiPQiPiQAAjLg");
	this.shape_147.setTransform(343.35,165.65);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADQiTCRQiSCTjPAAQjOAAiTiTQiSiRAAjQQAAjOCSiTQCTiSDOAAQDPAACSCSQCTCTAADOg");
	this.shape_148.setTransform(343.35,165.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_148}]},1).wait(1));

	// 球面波7
	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAJQgIAIgNAAQgMAAgIgIQgJgJAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_149.setTransform(373.15,175.8);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQg");
	this.shape_150.setTransform(373.15,175.8);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUAOgOQAPgPATAAQAVAAAOAPQAPAOAAAUQAAAUgPAPQgOAOgVAAQgTAAgPgOQgOgPAAgUg");
	this.shape_151.setTransform(373.15,175.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgYARgRQASgSAXAAQAZAAARASQASARAAAYQAAAYgSATQgRAQgZAAQgXAAgSgQQgRgTAAgYg");
	this.shape_152.setTransform(373.15,175.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAVgUQAUgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgUgUQgVgVAAgcg");
	this.shape_153.setTransform(373.15,175.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAYgXQAWgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgWgXQgYgXAAghg");
	this.shape_154.setTransform(373.15,175.8);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAaQgZAaglAAQgkAAgagaQgagaAAglg");
	this.shape_155.setTransform(373.175,175.825);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").ss(0.5).p("AhhAAQAAgoAdgdQAcgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAcgpAAQgoAAgcgcQgdgdAAgpg");
	this.shape_156.setTransform(373.15,175.8);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAgggQAfggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtAAQgsAAgfgfQggggAAgtg");
	this.shape_157.setTransform(373.15,175.8);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAjgjQAigiAwAAQAxAAAjAiQAiAjAAAwQAAAxgiAjQgjAigxAAQgwAAgigiQgjgjAAgxg");
	this.shape_158.setTransform(373.15,175.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AmgmQAlglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAlQgmAmg1AAQg0AAglgmQgmglAAg1g");
	this.shape_159.setTransform(373.15,175.8);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAQg4AAgogoQgpgpAAg5g");
	this.shape_160.setTransform(373.15,175.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_161.setTransform(373.15,175.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvguQAugvBAAAQBBAAAuAvQAvAuAABAQAABBgvAuQguAvhBAAQhAAAgugvQgvguAAhBg");
	this.shape_162.setTransform(373.15,175.8);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_163.setTransform(373.15,175.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBKAAAzA0QA0AzAABJQAABJg0A0QgzA0hKAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_164.setTransform(373.15,175.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").ss(0.5).p("Ai5AAQAAhNA2g2QA2g3BNAAQBOAAA2A3QA3A2AABNQAABOg3A2Qg2A2hOAAQhNAAg2g2Qg2g2AAhOg");
	this.shape_165.setTransform(373.15,175.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").ss(0.5).p("AjDAAQAAhRA5g5QA6g6BQAAQBSAAA5A6QA6A5AABRQAABRg6A6Qg5A5hSAAQhQAAg6g5Qg5g6AAhRg");
	this.shape_166.setTransform(373.15,175.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A9Qg8A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_167.setTransform(373.175,175.825);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QBAg/BYAAQBaAAA/A/QA/A/AABZQAABZg/BAQg/A/haAAQhYAAhAg/Qg/hAAAhZg");
	this.shape_168.setTransform(373.15,175.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBDhCQBBhCBdAAQBeAABCBCQBCBCAABdQAABehCBCQhCBCheAAQhdAAhBhCQhDhCAAheg");
	this.shape_169.setTransform(373.15,175.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBFhFQBEhFBhAAQBiAABFBFQBFBFAABhQAABihFBFQhFBEhiAAQhhAAhEhEQhFhFAAhig");
	this.shape_170.setTransform(373.15,175.8);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhIQBHhIBlAAQBmAABIBIQBIBIAABlQAABmhIBHQhIBIhmAAQhlAAhHhIQhIhHAAhmg");
	this.shape_171.setTransform(373.15,175.8);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBLhLQBKhKBpAAQBqAABLBKQBKBLAABpQAABqhKBKQhLBLhqAAQhpAAhKhLQhLhKAAhqg");
	this.shape_172.setTransform(373.15,175.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhNQBNhOBtAAQBuAABOBOQBNBNAABtQAABuhNBOQhOBNhuAAQhtAAhNhNQhOhOAAhug");
	this.shape_173.setTransform(373.15,175.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_174.setTransform(373.15,175.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThUB1AAQB2AABTBUQBUBTAAB1QAAB2hUBTQhTBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_175.setTransform(373.15,175.8);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhXB5AAQB6AABWBXQBXBWAAB5QAAB6hXBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_176.setTransform(373.15,175.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_177.setTransform(373.15,175.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_178.setTransform(373.15,175.8);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_179.setTransform(373.175,175.825);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBihiQBhhiCJAAQCKAABiBiQBiBiAACJQAACKhiBiQhiBhiKAAQiJAAhhhhQhihiAAiKg");
	this.shape_180.setTransform(373.15,175.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhlCOAAQCOAABlBlQBlBlAACNQAACPhlBkQhlBkiOAAQiOAAhkhkQhkhkAAiPg");
	this.shape_181.setTransform(373.15,175.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBohoQBnhnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhnhnQhohoAAiSg");
	this.shape_182.setTransform(373.15,175.8);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBrhqQBqhqCVAAQCXAABqBqQBqBqAACWQAACWhqBqQhqBriXAAQiVAAhqhrQhrhqAAiWg");
	this.shape_183.setTransform(373.15,175.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBuhtQBthtCZAAQCbAABtBtQBtBtAACaQAACahtBtQhtBuibAAQiZAAhthuQhuhtAAiag");
	this.shape_184.setTransform(373.15,175.8);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBxhwQBwhwCdAAQCfAABwBwQBwBwAACeQAACfhwBvQhwBxifAAQidAAhwhxQhxhvAAifg");
	this.shape_185.setTransform(373.15,175.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_186.setTransform(373.15,175.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB1h2CmAAQCnAAB1B2QB2B1AACmQAACnh2B1Qh1B2inAAQimAAh1h2Qh2h1AAing");
	this.shape_187.setTransform(373.15,175.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQiqAAh4h5Qh5h4AAirg");
	this.shape_188.setTransform(373.15,175.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").ss(0.5).p("AmkAAQAAiuB7h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACvh8B7Qh7B7ivAAQiuAAh7h7Qh7h7AAivg");
	this.shape_189.setTransform(373.15,175.8);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h/CyAAQCzAAB+B/QB/B+AACyQAACzh/B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_190.setTransform(373.15,175.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC3iBCBQiCCBi2AAQi2AAiBiBQiBiBAAi3g");
	this.shape_191.setTransform(373.175,175.825);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_192.setTransform(373.15,175.8);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_193.setTransform(373.15,175.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").ss(0.5).p("AnVAAQAAjCCJiKQCKiKDCAAQDDAACKCKQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiJiKAAjDg");
	this.shape_194.setTransform(373.15,175.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjGCNiNQCMiNDGAAQDHAACNCNQCNCNAADGQAADHiNCMQiNCNjHAAQjGAAiMiNQiNiMAAjHg");
	this.shape_195.setTransform(373.15,175.8);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCQiQQCPiPDKAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjKAAiPiQQiQiPAAjLg");
	this.shape_196.setTransform(373.15,175.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADQiTCSQiSCSjPAAQjPAAiSiSQiSiSAAjQQAAjOCSiSQCSiTDPAAQDPAACSCTQCTCSAADOg");
	this.shape_197.setTransform(373.15,175.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_149}]}).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_197}]},1).wait(1));

	// 球面波6
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAJQgIAIgNAAQgMAAgIgIQgJgJAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_198.setTransform(400.4,191.55);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAAQgMAMQgLAMgRAAQgPAAgMgMQgMgMAAgQg");
	this.shape_199.setTransform(400.4,191.55);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUAOgOQAPgPATAAQAVAAAOAPQAPAOAAAUQAAAUgPAPQgOAOgVAAQgTAAgPgOQgOgPAAgUg");
	this.shape_200.setTransform(400.4,191.55);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgYARgRQASgSAXAAQAZAAARASQASARAAAYQAAAYgSATQgRAQgZAAQgXAAgSgQQgRgTAAgYg");
	this.shape_201.setTransform(400.4,191.55);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAVgUQAUgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgUgUQgVgVAAgcg");
	this.shape_202.setTransform(400.4,191.55);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAYgXQAWgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgWgXQgYgXAAghg");
	this.shape_203.setTransform(400.4,191.55);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAaQgZAaglAAQgkAAgagaQgagaAAglg");
	this.shape_204.setTransform(400.425,191.575);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").ss(0.5).p("AhhAAQAAgoAdgdQAcgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAdQgdAcgpAAQgoAAgcgcQgdgdAAgpg");
	this.shape_205.setTransform(400.4,191.55);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAgggQAfggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAgQggAfgtAAQgsAAgfgfQggggAAgtg");
	this.shape_206.setTransform(400.4,191.55);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAjgjQAigiAwAAQAxAAAjAiQAiAjAAAwQAAAxgiAjQgjAigxAAQgwAAgigiQgjgjAAgxg");
	this.shape_207.setTransform(400.4,191.55);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AmgmQAlglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAlQgmAmg1AAQg0AAglgmQgmglAAg1g");
	this.shape_208.setTransform(400.4,191.55);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAQg4AAgogoQgpgpAAg5g");
	this.shape_209.setTransform(400.4,191.55);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_210.setTransform(400.4,191.55);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvguQAugvBAAAQBBAAAuAvQAvAuAABAQAABBgvAuQguAvhBAAQhAAAgugvQgvguAAhBg");
	this.shape_211.setTransform(400.4,191.55);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_212.setTransform(400.4,191.55);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBKAAAzA0QA0AzAABJQAABJg0A0QgzA0hKAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_213.setTransform(400.4,191.55);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").ss(0.5).p("Ai5AAQAAhNA2g2QA2g3BNAAQBOAAA2A3QA3A2AABNQAABOg3A2Qg2A2hOAAQhNAAg2g2Qg2g2AAhOg");
	this.shape_214.setTransform(400.4,191.55);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").ss(0.5).p("AjDAAQAAhRA5g5QA6g6BQAAQBSAAA5A6QA6A5AABRQAABRg6A6Qg5A5hSAAQhQAAg6g5Qg5g6AAhRg");
	this.shape_215.setTransform(400.4,191.55);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A9Qg8A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_216.setTransform(400.425,191.575);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QBAg/BYAAQBaAAA/A/QA/A/AABZQAABZg/BAQg/A/haAAQhYAAhAg/Qg/hAAAhZg");
	this.shape_217.setTransform(400.4,191.55);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBDhCQBChCBcAAQBeAABCBCQBCBCAABdQAABehCBCQhCBCheAAQhcAAhChCQhDhCAAheg");
	this.shape_218.setTransform(400.4,191.55);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBFhFQBEhFBhAAQBiAABFBFQBFBFAABhQAABihFBFQhFBEhiAAQhhAAhEhEQhFhFAAhig");
	this.shape_219.setTransform(400.4,191.55);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhIQBIhIBkAAQBmAABIBIQBIBIAABlQAABmhIBHQhIBIhmAAQhkAAhIhIQhIhHAAhmg");
	this.shape_220.setTransform(400.4,191.55);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBLhLQBLhKBoAAQBqAABLBKQBKBLAABpQAABqhKBKQhLBLhqAAQhoAAhLhLQhLhKAAhqg");
	this.shape_221.setTransform(400.4,191.55);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhNQBOhOBsAAQBuAABOBOQBNBNAABtQAABuhNBOQhOBNhuAAQhsAAhOhNQhOhOAAhug");
	this.shape_222.setTransform(400.4,191.55);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_223.setTransform(400.4,191.55);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThUB1AAQB2AABTBUQBUBTAAB1QAAB2hUBTQhTBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_224.setTransform(400.4,191.55);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhXB5AAQB6AABWBXQBXBWAAB5QAAB6hXBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_225.setTransform(400.4,191.55);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_226.setTransform(400.4,191.55);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_227.setTransform(400.4,191.55);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_228.setTransform(400.425,191.575);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBihiQBhhiCJAAQCKAABiBiQBiBiAACJQAACKhiBiQhiBhiKAAQiJAAhhhhQhihiAAiKg");
	this.shape_229.setTransform(400.4,191.55);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBlhlCNAAQCOAABlBlQBlBlAACNQAACPhlBkQhlBkiOAAQiNAAhlhkQhkhkAAiPg");
	this.shape_230.setTransform(400.4,191.55);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBohoQBnhnCRAAQCSAABoBnQBnBoAACRQAACShnBoQhoBniSAAQiRAAhnhnQhohoAAiSg");
	this.shape_231.setTransform(400.4,191.55);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBrhqQBqhqCVAAQCXAABqBqQBqBqAACWQAACWhqBqQhqBriXAAQiVAAhqhrQhrhqAAiWg");
	this.shape_232.setTransform(400.4,191.55);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBuhtQBthtCZAAQCbAABtBtQBtBtAACaQAACahtBtQhtBuibAAQiZAAhthuQhuhtAAiag");
	this.shape_233.setTransform(400.4,191.55);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBxhwQBwhwCdAAQCfAABwBwQBwBwAACeQAACfhwBvQhwBxifAAQidAAhwhxQhxhvAAifg");
	this.shape_234.setTransform(400.4,191.55);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_235.setTransform(400.4,191.55);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB2h2ClAAQCnAAB1B2QB2B1AACmQAACnh2B1Qh1B2inAAQilAAh2h2Qh2h1AAing");
	this.shape_236.setTransform(400.4,191.55);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB5h5CpAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQipAAh5h5Qh5h4AAirg");
	this.shape_237.setTransform(400.4,191.55);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").ss(0.5).p("AmkAAQAAiuB7h7QB8h8CtAAQCvAAB7B8QB8B7AACuQAACvh8B7Qh7B7ivAAQitAAh8h7Qh7h7AAivg");
	this.shape_238.setTransform(400.4,191.55);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB/h/CxAAQCzAAB+B/QB/B+AACyQAACzh/B+Qh+B+izAAQixAAh/h+Qh+h+AAizg");
	this.shape_239.setTransform(400.4,191.55);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC3iBCBQiCCBi2AAQi2AAiBiBQiBiBAAi3g");
	this.shape_240.setTransform(400.425,191.575);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCFiEC5AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi5AAiFiEQiEiEAAi7g");
	this.shape_241.setTransform(400.4,191.55);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_242.setTransform(400.4,191.55);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").ss(0.5).p("AnVAAQAAjCCJiKQCKiKDCAAQDDAACKCKQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiJiKAAjDg");
	this.shape_243.setTransform(400.4,191.55);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjGCNiNQCMiNDGAAQDHAACNCNQCNCNAADGQAADHiNCMQiNCNjHAAQjGAAiMiNQiNiMAAjHg");
	this.shape_244.setTransform(400.4,191.55);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCQiQQCPiPDKAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjKAAiPiQQiQiPAAjLg");
	this.shape_245.setTransform(400.4,191.55);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADQiTCSQiSCSjPAAQjOAAiTiSQiSiSAAjQQAAjOCSiSQCTiTDOAAQDPAACSCTQCTCSAADOg");
	this.shape_246.setTransform(400.4,191.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_198}]}).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_246}]},1).wait(1));

	// 球面波5
	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_247.setTransform(424.35,212);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_248.setTransform(424.35,212);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAPgPQAOgNAUAAQAVAAAOANQAOAPAAAUQAAAVgOAOQgPAOgUAAQgUAAgOgOQgPgOAAgVg");
	this.shape_249.setTransform(424.35,212);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAASARQAQASAAAXQAAAYgQASQgTARgYAAQgYAAgRgRQgSgSAAgYg");
	this.shape_250.setTransform(424.35,212);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgbAUgVQAUgUAcAAQAdAAAUAUQAUAVAAAbQAAAcgUAUQgVAVgcAAQgcAAgUgVQgUgUAAgcg");
	this.shape_251.setTransform(424.35,212);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_252.setTransform(424.35,212);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAZQgaAbglAAQgkAAgagbQgagZAAglg");
	this.shape_253.setTransform(424.375,212.025);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQApAAAdAcQAcAdAAAoQAAApgcAcQgdAdgpAAQgoAAgdgdQgdgcAAgpg");
	this.shape_254.setTransform(424.35,212);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAgggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAgQggAfgtAAQgsAAgggfQggggAAgtg");
	this.shape_255.setTransform(424.35,212);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAjAjQAiAiAAAwQAAAxgiAiQgjAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_256.setTransform(424.35,212);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_257.setTransform(424.35,212);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgpQAogoA4AAQA6AAAoAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_258.setTransform(424.35,212);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_259.setTransform(424.35,212);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhBAvguQAuguBAAAQBBAAAuAuQAvAuAABBQAABBgvAuQguAvhBAAQhAAAgugvQgvguAAhBg");
	this.shape_260.setTransform(424.35,212);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_261.setTransform(424.35,212);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhIA0g0QAzg0BJAAQBKAAAzA0QA0A0AABIQAABJg0A0Qg0A0hJAAQhJAAgzg0Qg0g0AAhJg");
	this.shape_262.setTransform(424.35,212);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABOg2A2Qg2A3hOAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_263.setTransform(424.35,212);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA5g6BRAAQBSAAA5A6QA5A5AABRQAABSg5A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_264.setTransform(424.35,212);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBWAAA8A8QA8A8AABVQAABVg8A8Qg9A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_265.setTransform(424.375,212.025);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBaAAA/A/QA/BAAABYQAABZg/BAQhAA/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_266.setTransform(424.35,212);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBeAABCBCQBCBCAABdQAABdhCBCQhCBDheAAQhdAAhChDQhChCAAhdg");
	this.shape_267.setTransform(424.35,212);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBFhFQBFhFBhAAQBiAABFBFQBEBFAABhQAABihEBFQhFBFhiAAQhhAAhFhFQhFhFAAhig");
	this.shape_268.setTransform(424.35,212);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBIhHQBIhJBlAAQBmAABHBJQBIBHAABlQAABmhIBHQhHBJhmAAQhlAAhIhJQhIhHAAhmg");
	this.shape_269.setTransform(424.35,212);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBqAABKBKQBLBLAABpQAABqhLBLQhKBKhqAAQhpAAhLhKQhKhLAAhqg");
	this.shape_270.setTransform(424.35,212);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABOBNQBNBOAABtQAABuhNBOQhOBNhuAAQhtAAhNhNQhOhOAAhug");
	this.shape_271.setTransform(424.35,212);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_272.setTransform(424.35,212);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").ss(0.5).p("AkcAAQAAh1BUhUQBThSB1AAQB2AABTBSQBTBUAAB1QAAB2hTBTQhTBTh2AAQh1AAhThTQhUhTAAh2g");
	this.shape_273.setTransform(424.35,212);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").ss(0.5).p("AkmAAQAAh5BXhWQBWhWB5AAQB7AABVBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhXhWAAh6g");
	this.shape_274.setTransform(424.35,212);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_275.setTransform(424.35,212);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiCBchbQBchcCBAAQCCAABcBcQBcBbAACCQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_276.setTransform(424.35,212);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiGBfheQBfhfCFAAQCGAABfBfQBfBeAACGQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_277.setTransform(424.375,212.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiJBihiQBihhCJAAQCKAABiBhQBhBiAACJQAACKhhBiQhiBhiKAAQiJAAhihhQhihiAAiKg");
	this.shape_278.setTransform(424.35,212);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiOBlhkQBlhkCNAAQCPAABkBkQBkBkAACOQAACOhkBlQhkBkiPAAQiNAAhlhkQhlhlAAiOg");
	this.shape_279.setTransform(424.35,212);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBnhmQBohoCRAAQCSAABoBoQBnBmAACSQAACShnBnQhoBoiSAAQiRAAhohoQhnhnAAiSg");
	this.shape_280.setTransform(424.35,212);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCXAABpBqQBrBqAACWQAACXhrBqQhqBqiWAAQiWAAhqhqQhqhqAAiXg");
	this.shape_281.setTransform(424.35,212);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiZBthtQBthuCaAAQCbAABsBuQBuBtAACZQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_282.setTransform(424.35,212);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAidBwhxQBwhwCeAAQCfAABvBwQBxBxAACdQAACehxBxQhvBwifAAQieAAhwhwQhwhxAAieg");
	this.shape_283.setTransform(424.35,212);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_284.setTransform(424.35,212);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB1h2CmAAQCnAAB1B2QB2B1AACmQAACnh2B1Qh1B2inAAQimAAh1h2Qh2h1AAing");
	this.shape_285.setTransform(424.35,212);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQiqAAh4h5Qh5h4AAirg");
	this.shape_286.setTransform(424.35,212);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB7B7AACuQAACuh7B8Qh7B8ivAAQiuAAh7h8Qh8h8AAiug");
	this.shape_287.setTransform(424.35,212);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAiyB/h+QB+h/CyAAQCzAAB+B/QB+B+AACyQAACyh+B/Qh+B/izAAQiyAAh+h/Qh/h/AAiyg");
	this.shape_288.setTransform(424.35,212);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC2iBCCQiBCBi3AAQi2AAiBiBQiBiCAAi2g");
	this.shape_289.setTransform(424.375,212.025);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_290.setTransform(424.35,212);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi/CHiGQCHiHC+AAQC/AACHCHQCHCGAAC/QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_291.setTransform(424.35,212);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjDCKiJQCKiKDCAAQDDAACKCKQCJCJAADDQAADDiJCKQiKCKjDAAQjCAAiKiKQiKiKAAjDg");
	this.shape_292.setTransform(424.35,212);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCNiMQCNiODGAAQDHAACMCOQCNCMAADGQAADHiNCMQiMCOjHAAQjGAAiNiOQiNiMAAjHg");
	this.shape_293.setTransform(424.35,212);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCQiPDKAAQDLAACPCPQCQCQAADKQAADLiQCQQiPCPjLAAQjKAAiQiPQiPiQAAjLg");
	this.shape_294.setTransform(424.35,212);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiRCSjQAAQjOAAiTiSQiSiTAAjPQAAjOCSiSQCTiTDOAAQDQAACRCTQCTCSAADOg");
	this.shape_295.setTransform(424.35,212);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_247}]}).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_295}]},1).wait(1));

	// 球面波4
	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgIAIQgJAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAJAIQAIAJAAAMg");
	this.shape_296.setTransform(444.2,236.35);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgQAMgLQAMgMAPAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgPAAgMgMQgMgLAAgRg");
	this.shape_297.setTransform(444.2,236.35);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUAOgPQAOgOAUAAQAVAAAPAOQANAPAAAUQAAAUgNAPQgPAOgVAAQgUAAgOgOQgOgPAAgUg");
	this.shape_298.setTransform(444.2,236.35);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgYARgRQASgSAXAAQAZAAASASQAQARAAAYQAAAYgQASQgTARgYAAQgXAAgSgRQgRgSAAgYg");
	this.shape_299.setTransform(444.2,236.35);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgbAUgVQAUgUAcAAQAdAAAUAUQAUAVAAAbQAAAcgUAUQgVAVgcAAQgcAAgUgVQgUgUAAgcg");
	this.shape_300.setTransform(444.2,236.35);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_301.setTransform(444.2,236.35);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAaAaQAaAaAAAkQAAAlgaAZQgaAbglAAQgkAAgagbQgagZAAglg");
	this.shape_302.setTransform(444.225,236.375);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQApAAAdAcQAcAdAAAoQAAApgcAdQgdAcgpAAQgoAAgdgcQgdgdAAgpg");
	this.shape_303.setTransform(444.2,236.35);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAgggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAgQggAfgtAAQgsAAgggfQggggAAgtg");
	this.shape_304.setTransform(444.2,236.35);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAjgjQAigiAwAAQAxAAAjAiQAiAjAAAwQAAAxgiAiQgjAjgxAAQgwAAgigjQgjgiAAgxg");
	this.shape_305.setTransform(444.2,236.35);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA2AAAlAlQAlAmAAA0QAAA1glAlQgmAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_306.setTransform(444.2,236.35);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgpQAogoA4AAQA6AAAoAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_307.setTransform(444.2,236.35);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA+AAAqAsQAsArAAA8QAAA9gsArQgqAsg+AAQg8AAgrgsQgsgrAAg9g");
	this.shape_308.setTransform(444.2,236.35);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvgvQAuguBAAAQBCAAAuAuQAuAvAABAQAABBguAuQguAvhCAAQhAAAgugvQgvguAAhBg");
	this.shape_309.setTransform(444.2,236.35);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhFAxgxQAxgwBEAAQBFAAAyAwQAwAxAABFQAABFgwAxQgyAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_310.setTransform(444.2,236.35);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBKAAA0A0QAzAzAABJQAABJgzA0Qg0A0hKAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_311.setTransform(444.2,236.35);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABOg2A2Qg3A3hNAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_312.setTransform(444.2,236.35);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA5g6BRAAQBSAAA5A6QA5A5AABRQAABSg5A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_313.setTransform(444.2,236.35);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBWAAA8A8QA8A8AABVQAABVg8A8Qg9A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_314.setTransform(444.225,236.375);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBaAAA/A/QA/A/AABZQAABZg/A/QhABAhZAAQhZAAg/hAQg/g/AAhZg");
	this.shape_315.setTransform(444.2,236.35);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBeAABCBCQBCBCAABdQAABdhCBDQhCBCheAAQhdAAhChCQhChDAAhdg");
	this.shape_316.setTransform(444.2,236.35);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBGhFQBEhEBhAAQBiAABFBEQBFBFAABhQAABihFBFQhFBEhiAAQhhAAhEhEQhGhFAAhig");
	this.shape_317.setTransform(444.2,236.35);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBJhHQBIhIBkAAQBmAABIBIQBIBHAABlQAABmhIBHQhIBIhmAAQhkAAhIhIQhJhHAAhmg");
	this.shape_318.setTransform(444.2,236.35);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBqAABLBKQBKBLAABpQAABphKBLQhLBLhqAAQhpAAhLhLQhKhLAAhpg");
	this.shape_319.setTransform(444.2,236.35);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBOhNBsAAQBvAABNBNQBNBOAABtQAABuhNBNQhOBOhuAAQhsAAhOhOQhOhNAAhug");
	this.shape_320.setTransform(444.2,236.35);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhRQBQhQBxAAQByAABQBQQBRBRAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_321.setTransform(444.2,236.35);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThUQBThTB1AAQB3AABTBTQBSBUAAB1QAAB2hSBTQhUBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_322.setTransform(444.2,236.35);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhXB5AAQB7AABWBXQBVBWAAB5QAAB6hVBWQhXBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_323.setTransform(444.2,236.35);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_324.setTransform(444.2,236.35);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_325.setTransform(444.2,236.35);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiGBfheQBfhfCFAAQCGAABfBfQBfBeAACGQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_326.setTransform(444.225,236.375);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiJBihiQBihhCJAAQCKAABiBhQBhBiAACJQAACKhhBhQhiBiiKAAQiJAAhihiQhihhAAiKg");
	this.shape_327.setTransform(444.2,236.35);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiOBlhkQBlhkCNAAQCOAABlBkQBkBkAACOQAACOhkBlQhlBkiOAAQiNAAhlhkQhlhlAAiOg");
	this.shape_328.setTransform(444.2,236.35);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohmQBnhoCRAAQCTAABnBoQBnBmAACSQAACShnBoQhnBniTAAQiRAAhnhnQhohoAAiSg");
	this.shape_329.setTransform(444.2,236.35);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiVBrhrQBphqCWAAQCXAABqBqQBqBrAACVQAACXhqBqQhqBqiXAAQiWAAhphqQhrhqAAiXg");
	this.shape_330.setTransform(444.2,236.35);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBuhtQBthtCZAAQCbAABtBtQBtBtAACaQAACahtBtQhuBuiaAAQiZAAhthuQhuhtAAiag");
	this.shape_331.setTransform(444.2,236.35);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhwQBxhwCdAAQCfAABwBwQBwBwAACeQAACehwBwQhwBxifAAQidAAhxhxQhwhwAAieg");
	this.shape_332.setTransform(444.2,236.35);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACihzB0QhzBzijAAQiiAAhzhzQhzh0AAiig");
	this.shape_333.setTransform(444.2,236.35);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h2QB2h1ClAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQilAAh2h2Qh2h2AAimg");
	this.shape_334.setTransform(444.2,236.35);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB5B5QB4B4AACqQAACqh4B5Qh5B5irAAQiqAAh4h5Qh5h5AAiqg");
	this.shape_335.setTransform(444.2,236.35);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB7B7AACuQAACvh7B7Qh7B8ivAAQiuAAh7h8Qh8h7AAivg");
	this.shape_336.setTransform(444.2,236.35);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAiyB/h+QB+h/CyAAQCzAAB+B/QB+B+AACyQAACyh+B/Qh+B/izAAQiyAAh+h/Qh/h/AAiyg");
	this.shape_337.setTransform(444.2,236.35);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC2iBCCQiBCBi3AAQi2AAiBiBQiBiCAAi2g");
	this.shape_338.setTransform(444.225,236.375);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_339.setTransform(444.2,236.35);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi/CHiGQCHiHC+AAQC/AACHCHQCHCGAAC/QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_340.setTransform(444.2,236.35);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDEAACJCJQCKCKAADCQAADDiKCKQiJCJjEAAQjCAAiKiJQiKiKAAjDg");
	this.shape_341.setTransform(444.2,236.35);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCOiMQCMiNDGAAQDHAACMCNQCOCMAADGQAADHiOCNQiMCMjHAAQjGAAiMiMQiOiNAAjHg");
	this.shape_342.setTransform(444.2,236.35);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjLCQiPQCPiPDKAAQDMAACPCPQCPCPAADLQAADLiPCPQiPCQjMAAQjKAAiPiQQiQiPAAjLg");
	this.shape_343.setTransform(444.2,236.35);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiSCTQiSCSjQAAQjOAAiSiSQiTiTAAjPQAAjPCTiRQCSiTDOAAQDQAACSCTQCSCRAADPg");
	this.shape_344.setTransform(444.2,236.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_296}]}).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_344}]},1).wait(1));

	// 球面波3
	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAJQgIAIgNAAQgMAAgIgIQgJgJAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_345.setTransform(460.1,263.5);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAAQgMANQgMALgQAAQgQAAgLgLQgMgNAAgQg");
	this.shape_346.setTransform(460.1,263.5);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAPgOQAOgOAUAAQAUAAAPAOQAOAOAAAUQAAAVgOAPQgPANgUAAQgUAAgOgNQgPgPAAgVg");
	this.shape_347.setTransform(460.1,263.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAYAAASARQARASAAAXQAAAYgRATQgSAQgYAAQgYAAgRgQQgSgTAAgYg");
	this.shape_348.setTransform(460.1,263.5);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAUAUQAVAUAAAcQAAAdgVAUQgUAUgcAAQgcAAgUgUQgUgUAAgdg");
	this.shape_349.setTransform(460.1,263.5);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAWAXQAYAXAAAgQAAAhgYAXQgWAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_350.setTransform(460.1,263.5);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAaQgZAaglAAQgkAAgagaQgagaAAglg");
	this.shape_351.setTransform(460.125,263.525);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgcQAdgdAoAAQApAAAcAdQAdAcAAAoQAAApgdAdQgcAdgpAAQgoAAgdgdQgdgdAAgpg");
	this.shape_352.setTransform(460.1,263.5);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAgggQAggfAsAAQAtAAAfAfQAgAgAAAsQAAAtggAgQgfAggtAAQgsAAggggQggggAAgtg");
	this.shape_353.setTransform(460.1,263.5);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_354.setTransform(460.1,263.5);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_355.setTransform(460.1,263.5);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgoQAogpA4AAQA5AAAoApQApAoAAA4QAAA5gpApQgoAog5AAQg4AAgogoQgpgpAAg5g");
	this.shape_356.setTransform(460.1,263.5);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_357.setTransform(460.1,263.5);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAvguQAugvBAAAQBBAAAuAvQAvAuAABAQAABCgvAtQguAvhBAAQhAAAgugvQgvgtAAhCg");
	this.shape_358.setTransform(460.1,263.5);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgxQAxgxBEAAQBFAAAxAxQAxAxAABEQAABFgxAyQgxAwhFAAQhEAAgxgwQgxgyAAhFg");
	this.shape_359.setTransform(460.1,263.5);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQAzg0BJAAQBJAAA0A0QA0AzAABJQAABKg0A0Qg0AzhJAAQhJAAgzgzQg0g0AAhKg");
	this.shape_360.setTransform(460.1,263.5);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABOg2A2Qg2A2hOAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_361.setTransform(460.1,263.5);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA5g6BRAAQBRAAA6A6QA5A5AABRQAABRg5A6Qg6A5hRAAQhRAAg5g5Qg6g6AAhRg");
	this.shape_362.setTransform(460.1,263.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A9Qg8A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_363.setTransform(460.125,263.525);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAABAA/QA/BAAABYQAABZg/BAQhAA/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_364.setTransform(460.1,263.5);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhcBChCQBChDBdAAQBdAABCBDQBDBCAABcQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_365.setTransform(460.1,263.5);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBFhFQBFhFBhAAQBiAABEBFQBFBFAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhFhFAAhig");
	this.shape_366.setTransform(460.1,263.5);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBIhHQBIhJBlAAQBlAABIBJQBIBHAABlQAABmhIBIQhIBIhlAAQhlAAhIhIQhIhIAAhmg");
	this.shape_367.setTransform(460.1,263.5);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBLAABpQAABqhLBLQhLBKhpAAQhpAAhLhKQhKhLAAhqg");
	this.shape_368.setTransform(460.1,263.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhsBOhOQBNhOBtAAQBuAABOBOQBNBOAABsQAABuhNBOQhOBNhuAAQhtAAhNhNQhOhOAAhug");
	this.shape_369.setTransform(460.1,263.5);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_370.setTransform(460.1,263.5);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").ss(0.5).p("AkcAAQAAh1BUhTQBThTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhThTQhUhTAAh2g");
	this.shape_371.setTransform(460.1,263.5);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").ss(0.5).p("AkmAAQAAh5BXhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBXQhWBVh6AAQh5AAhWhVQhXhXAAh6g");
	this.shape_372.setTransform(460.1,263.5);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_373.setTransform(460.1,263.5);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACDhcBbQhcBciCAAQiBAAhchcQhchbAAiDg");
	this.shape_374.setTransform(460.1,263.5);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBfhfCFAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_375.setTransform(460.125,263.525);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiJBihiQBihhCJAAQCKAABhBhQBiBiAACJQAACLhiBhQhhBiiKAAQiJAAhihiQhihhAAiLg");
	this.shape_376.setTransform(460.1,263.5);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiNBlhlQBlhkCNAAQCOAABlBkQBkBlAACNQAACPhkBkQhlBliOAAQiNAAhlhlQhlhkAAiPg");
	this.shape_377.setTransform(460.1,263.5);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBnhnQBohoCRAAQCSAABnBoQBoBnAACRQAACShoBoQhnBniSAAQiRAAhohnQhnhoAAiSg");
	this.shape_378.setTransform(460.1,263.5);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACXhrBpQhqBriWAAQiWAAhqhrQhqhpAAiXg");
	this.shape_379.setTransform(460.1,263.5);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiZBthtQBthuCaAAQCaAABtBuQBuBtAACZQAACahuBuQhtBtiaAAQiaAAhthtQhthuAAiag");
	this.shape_380.setTransform(460.1,263.5);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAidBwhxQBwhwCeAAQCeAABwBwQBxBxAACdQAACfhxBwQhwBwieAAQieAAhwhwQhwhwAAifg");
	this.shape_381.setTransform(460.1,263.5);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_382.setTransform(460.1,263.5);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB1h2CmAAQCmAAB2B2QB2B1AACmQAACnh2B1Qh2B2imAAQimAAh1h2Qh2h1AAing");
	this.shape_383.setTransform(460.1,263.5);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_384.setTransform(460.1,263.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAitB8h8QB7h8CuAAQCuAAB8B8QB7B8AACtQAACvh7B7Qh8B7iuAAQiuAAh7h7Qh8h7AAivg");
	this.shape_385.setTransform(460.1,263.5);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAixB/h/QB+h/CyAAQCyAAB/B/QB+B/AACxQAACzh+B+Qh/B+iyAAQiyAAh+h+Qh/h+AAizg");
	this.shape_386.setTransform(460.1,263.5);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC3iBCBQiCCBi2AAQi2AAiBiBQiBiBAAi3g");
	this.shape_387.setTransform(460.125,263.525);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC6AACFCEQCECEAAC6QAAC7iECEQiFCEi6AAQi6AAiEiEQiEiEAAi7g");
	this.shape_388.setTransform(460.1,263.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_389.setTransform(460.1,263.5);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiKDCAAQDDAACKCKQCJCKAADCQAADEiJCJQiKCKjDAAQjCAAiKiKQiKiJAAjEg");
	this.shape_390.setTransform(460.1,263.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCNiMQCNiODGAAQDHAACMCOQCNCMAADGQAADHiNCMQiMCOjHAAQjGAAiNiOQiNiMAAjHg");
	this.shape_391.setTransform(460.1,263.5);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCQiPDKAAQDLAACPCPQCQCQAADKQAADMiQCOQiPCQjLAAQjKAAiQiQQiPiOAAjMg");
	this.shape_392.setTransform(460.1,263.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADQiSCSQiTCSjPAAQjOAAiSiSQiTiSAAjQQAAjOCTiSQCSiTDOAAQDPAACTCTQCSCSAADOg");
	this.shape_393.setTransform(460.1,263.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_345}]}).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_393}]},1).wait(1));

	// 球面波2
	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgJgJQgIgIAAgNQAAgMAIgIQAJgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_394.setTransform(470.85,292.95);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPALgMQAMgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgMgMQgLgLAAgRg");
	this.shape_395.setTransform(470.85,292.95);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgOAUAAQAUAAAPAOQAOAOAAAUQAAAVgOAOQgPAOgUAAQgUAAgPgOQgOgOAAgVg");
	this.shape_396.setTransform(470.85,292.95);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgYAAgRgRQgSgSAAgYg");
	this.shape_397.setTransform(470.85,292.95);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAUAUQAVAUAAAcQAAAcgVAUQgUAVgcAAQgcAAgUgVQgUgUAAgcg");
	this.shape_398.setTransform(470.85,292.95);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAWAXQAYAXAAAgQAAAhgYAWQgWAYghAAQggAAgXgYQgXgWAAghg");
	this.shape_399.setTransform(470.85,292.95);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_400.setTransform(470.875,292.975);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgdAoAAQApAAAcAdQAdAdAAAoQAAApgdAcQgcAdgpAAQgoAAgdgdQgdgcAAgpg");
	this.shape_401.setTransform(470.85,292.95);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").ss(0.5).p("AhsAAQAAgsAgggQAgggAsAAQAtAAAfAgQAgAgAAAsQAAAtggAfQgfAggtAAQgsAAggggQgggfAAgtg");
	this.shape_402.setTransform(470.85,292.95);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_403.setTransform(470.85,292.95);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_404.setTransform(470.85,292.95);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogoQApgpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_405.setTransform(470.85,292.95);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8ArgrQAsgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgsgsQgrgrAAg9g");
	this.shape_406.setTransform(470.85,292.95);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhBAugtQAugvBBAAQBBAAAuAvQAvAtAABBQAABBgvAuQguAvhBAAQhBAAgugvQguguAAhBg");
	this.shape_407.setTransform(470.85,292.95);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhFAAgxgxQgwgxAAhFg");
	this.shape_408.setTransform(470.85,292.95);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhIA0g0QAzg0BJAAQBJAAA0A0QA0A0AABIQAABKg0AzQg0A0hJAAQhJAAgzg0Qg0gzAAhKg");
	this.shape_409.setTransform(470.85,292.95);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBOAAA2A3QA2A2AABNQAABNg2A3Qg2A2hOAAQhNAAg2g2Qg3g3AAhNg");
	this.shape_410.setTransform(470.85,292.95);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA5g6BRAAQBRAAA6A6QA5A5AABRQAABRg5A6Qg6A5hRAAQhRAAg5g5Qg6g6AAhRg");
	this.shape_411.setTransform(470.85,292.95);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A8Qg8A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_412.setTransform(470.875,292.975);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAABAA/QA/A/AABZQAABZg/A/QhABAhZAAQhZAAg/hAQg/g/AAhZg");
	this.shape_413.setTransform(470.85,292.95);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABdhDBCQhCBDhdAAQhdAAhChDQhChCAAhdg");
	this.shape_414.setTransform(470.85,292.95);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBFhEQBFhGBhAAQBiAABEBGQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhFhFAAhig");
	this.shape_415.setTransform(470.85,292.95);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBIhHQBIhJBlAAQBlAABIBJQBIBHAABlQAABmhIBIQhIBIhlAAQhlAAhIhIQhIhIAAhmg");
	this.shape_416.setTransform(470.85,292.95);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBpAABLBKQBLBLAABpQAABqhLBLQhLBKhpAAQhpAAhLhKQhKhLAAhqg");
	this.shape_417.setTransform(470.85,292.95);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBNhNQBOhOBtAAQBuAABOBOQBNBNAABtQAABuhNBOQhOBNhuAAQhtAAhOhNQhNhOAAhug");
	this.shape_418.setTransform(470.85,292.95);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhRhRQhQhQAAhyg");
	this.shape_419.setTransform(470.85,292.95);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").ss(0.5).p("AkcAAQAAh1BThTQBUhTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhUhTQhThTAAh2g");
	this.shape_420.setTransform(470.85,292.95);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").ss(0.5).p("AkmAAQAAh5BXhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhXhWAAh6g");
	this.shape_421.setTransform(470.85,292.95);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_422.setTransform(470.85,292.95);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiCBchbQBbhcCCAAQCCAABcBcQBcBbAACCQAACChcBcQhcBciCAAQiCAAhbhcQhchcAAiCg");
	this.shape_423.setTransform(470.85,292.95);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiGBfheQBehfCGAAQCGAABfBfQBfBeAACGQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_424.setTransform(470.875,292.975);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").ss(0.5).p("AlNAAQAAiKBihhQBhhiCKAAQCKAABhBiQBiBhAACKQAACKhiBhQhhBiiKAAQiKAAhhhiQhihhAAiKg");
	this.shape_425.setTransform(470.85,292.95);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").ss(0.5).p("AlXAAQAAiOBlhkQBkhlCOAAQCOAABlBlQBkBkAACOQAACOhkBkQhlBliOAAQiOAAhkhlQhlhkAAiOg");
	this.shape_426.setTransform(470.85,292.95);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBnhnQBnhoCSAAQCSAABnBoQBoBnAACRQAACShoBnQhnBoiSAAQiSAAhnhoQhnhnAAiSg");
	this.shape_427.setTransform(470.85,292.95);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhpQBqhrCWAAQCWAABqBrQBrBpAACWQAACXhrBqQhqBqiWAAQiWAAhqhqQhqhqAAiXg");
	this.shape_428.setTransform(470.85,292.95);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiZBthtQBthuCaAAQCaAABtBuQBuBtAACZQAACahuBuQhtBtiaAAQiaAAhthtQhthuAAiag");
	this.shape_429.setTransform(470.85,292.95);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAidBwhxQBwhwCeAAQCeAABwBwQBxBxAACdQAACfhxBwQhwBwieAAQieAAhwhwQhwhwAAifg");
	this.shape_430.setTransform(470.85,292.95);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").ss(0.5).p("AmIAAQAAiiBzhzQBzhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhzhzQhzhzAAijg");
	this.shape_431.setTransform(470.85,292.95);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h1QB2h2CmAAQCmAAB2B2QB2B1AACmQAACnh2B1Qh2B2imAAQimAAh2h2Qh1h1AAing");
	this.shape_432.setTransform(470.85,292.95);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQiqAAh4h5Qh5h4AAirg");
	this.shape_433.setTransform(470.85,292.95);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCuAAB8B8QB7B7AACuQAACuh7B8Qh8B7iuAAQiuAAh7h7Qh8h8AAiug");
	this.shape_434.setTransform(470.85,292.95);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAiyB/h+QB+h/CyAAQCyAAB/B/QB+B+AACyQAACyh+B/Qh/B+iyAAQiyAAh+h+Qh/h/AAiyg");
	this.shape_435.setTransform(470.85,292.95);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC2iBCCQiCCBi2AAQi2AAiBiBQiBiCAAi2g");
	this.shape_436.setTransform(470.875,292.975);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC6AACFCEQCECEAAC6QAAC7iECEQiFCEi6AAQi6AAiEiEQiEiEAAi7g");
	this.shape_437.setTransform(470.85,292.95);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiHC/AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_438.setTransform(470.85,292.95);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjDCKiJQCJiJDDAAQDDAACKCJQCJCJAADDQAADDiJCKQiKCKjDAAQjDAAiJiKQiKiKAAjDg");
	this.shape_439.setTransform(470.85,292.95);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCNiMQCMiNDHAAQDHAACMCNQCNCMAADGQAADHiNCMQiMCOjHAAQjHAAiMiOQiNiMAAjHg");
	this.shape_440.setTransform(470.85,292.95);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiPQCPiQDLAAQDLAACPCQQCQCPAADKQAADLiQCQQiPCPjLAAQjLAAiPiPQiPiQAAjLg");
	this.shape_441.setTransform(470.85,292.95);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiSCSQiTCTjPAAQjOAAiSiTQiTiSAAjPQAAjPCTiSQCSiSDOAAQDPAACTCSQCSCSAADPg");
	this.shape_442.setTransform(470.85,292.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_394}]}).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_442}]},1).wait(1));

	// 球面波1
	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_443.setTransform(476.8,324.2);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPALgMQAMgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgMgMQgLgLAAgRg");
	this.shape_444.setTransform(476.8,324.2);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUANgOQAPgOAUAAQAVAAAOAOQAOAOAAAUQAAAVgOAOQgOAOgVAAQgUAAgPgOQgNgOAAgVg");
	this.shape_445.setTransform(476.8,324.2);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgXARgSQASgRAXAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgXAAgSgRQgRgSAAgYg");
	this.shape_446.setTransform(476.8,324.2);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAVgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAUQgUAVgdAAQgbAAgVgVQgUgUAAgcg");
	this.shape_447.setTransform(476.8,324.2);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAWQgXAYghAAQggAAgXgYQgXgWAAghg");
	this.shape_448.setTransform(476.8,324.2);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_449.setTransform(476.825,324.225);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").ss(0.5).p("AhhAAQAAgoAcgdQAdgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAcQgdAdgpAAQgoAAgdgdQgcgcAAgpg");
	this.shape_450.setTransform(476.8,324.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAgggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_451.setTransform(476.8,324.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_452.setTransform(476.8,324.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_453.setTransform(476.8,324.2);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogoQApgpA4AAQA5AAAoApQApAoAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_454.setTransform(476.8,324.2);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_455.setTransform(476.8,324.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhAAuguQAugvBBAAQBBAAAuAvQAvAuAABAQAABBgvAuQguAvhBAAQhBAAgugvQguguAAhBg");
	this.shape_456.setTransform(476.8,324.2);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAygxBEAAQBFAAAxAxQAxAxAABEQAABFgxAxQgxAxhFAAQhEAAgygxQgwgxAAhFg");
	this.shape_457.setTransform(476.8,324.2);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhIA0g0QAzg0BJAAQBJAAA0A0QA0A0AABIQAABKg0AzQg0A0hJAAQhJAAgzg0Qg0gzAAhKg");
	this.shape_458.setTransform(476.8,324.2);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").ss(0.5).p("Ai5AAQAAhNA2g2QA3g3BMAAQBOAAA2A3QA3A2AABNQAABNg3A3Qg2A2hOAAQhMAAg3g2Qg2g3AAhNg");
	this.shape_459.setTransform(476.8,324.2);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").ss(0.5).p("AjDAAQAAhRA5g5QA6g6BQAAQBSAAA5A6QA6A5AABRQAABRg6A6Qg5A5hSAAQhQAAg6g5Qg5g6AAhRg");
	this.shape_460.setTransform(476.8,324.2);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A8Qg8A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_461.setTransform(476.825,324.225);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QBAg/BYAAQBaAAA/A/QA/A/AABZQAABZg/A/Qg/BAhaAAQhYAAhAhAQg/g/AAhZg");
	this.shape_462.setTransform(476.8,324.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBeAABCBCQBCBCAABdQAABdhCBCQhCBDheAAQhdAAhChDQhChCAAhdg");
	this.shape_463.setTransform(476.8,324.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBFhEQBFhGBhAAQBiAABEBGQBGBEAABhQAABihGBFQhEBFhiAAQhhAAhFhFQhFhFAAhig");
	this.shape_464.setTransform(476.8,324.2);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhkBIhIQBIhJBlAAQBlAABIBJQBJBIAABkQAABmhJBIQhIBIhlAAQhlAAhIhIQhIhIAAhmg");
	this.shape_465.setTransform(476.8,324.2);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBqAABLBKQBKBLAABpQAABqhKBLQhLBKhqAAQhpAAhLhKQhKhLAAhqg");
	this.shape_466.setTransform(476.8,324.2);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhsBNhOQBOhOBtAAQBuAABOBOQBNBOAABsQAABuhNBOQhOBNhuAAQhtAAhOhNQhNhOAAhug");
	this.shape_467.setTransform(476.8,324.2);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_468.setTransform(476.8,324.2);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BShTQBUhTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhUhTQhShTAAh2g");
	this.shape_469.setTransform(476.8,324.2);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_470.setTransform(476.8,324.2);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_471.setTransform(476.8,324.2);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_472.setTransform(476.8,324.2);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_473.setTransform(476.825,324.225);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBihiCJAAQCKAABiBiQBiBiAACJQAACKhiBhQhiBiiKAAQiJAAhihiQhhhhAAiKg");
	this.shape_474.setTransform(476.8,324.2);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBlhlCNAAQCOAABlBlQBlBlAACNQAACOhlBkQhlBliOAAQiNAAhlhlQhkhkAAiOg");
	this.shape_475.setTransform(476.8,324.2);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBohnQBmhoCSAAQCSAABnBoQBoBnAACRQAACShoBnQhnBoiSAAQiSAAhmhoQhohnAAiSg");
	this.shape_476.setTransform(476.8,324.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhpQBqhrCWAAQCWAABqBrQBrBpAACWQAACXhrBqQhqBqiWAAQiWAAhqhqQhqhqAAiXg");
	this.shape_477.setTransform(476.8,324.2);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").ss(0.5).p("AlzAAQAAiZBthtQBthuCZAAQCbAABtBuQBtBtAACZQAACahtBuQhtBtibAAQiZAAhthtQhthuAAiag");
	this.shape_478.setTransform(476.8,324.2);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").ss(0.5).p("Al9AAQAAidBwhxQBwhwCdAAQCfAABwBwQBwBxAACdQAACfhwBwQhwBwifAAQidAAhwhwQhwhwAAifg");
	this.shape_479.setTransform(476.8,324.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhzCiAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQiiAAhyhzQhzhzAAijg");
	this.shape_480.setTransform(476.8,324.2);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAilB2h2QB1h2CmAAQCmAAB2B2QB2B2AAClQAACnh2B1Qh2B2imAAQimAAh1h2Qh2h1AAing");
	this.shape_481.setTransform(476.8,324.2);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQiqAAh4h5Qh5h4AAirg");
	this.shape_482.setTransform(476.8,324.2);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCuAAB8B8QB8B7AACuQAACuh8B8Qh8B7iuAAQiuAAh7h7Qh8h8AAiug");
	this.shape_483.setTransform(476.8,324.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAiyB/h+QB+h/CyAAQCyAAB/B/QB/B+AACyQAACyh/B/Qh/B+iyAAQiyAAh+h+Qh/h/AAiyg");
	this.shape_484.setTransform(476.8,324.2);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC2iBCCQiCCBi2AAQi2AAiBiBQiBiCAAi2g");
	this.shape_485.setTransform(476.825,324.225);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC6AACFCEQCECEAAC6QAAC6iECFQiFCEi6AAQi6AAiEiEQiEiFAAi6g");
	this.shape_486.setTransform(476.8,324.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_487.setTransform(476.8,324.2);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCJiKDDAAQDDAACKCKQCKCKAADCQAADDiKCKQiKCKjDAAQjDAAiJiKQiKiKAAjDg");
	this.shape_488.setTransform(476.8,324.2);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCOiMQCMiODGAAQDHAACMCOQCOCMAADGQAADHiOCMQiMCOjHAAQjGAAiMiOQiOiMAAjHg");
	this.shape_489.setTransform(476.8,324.2);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCQiPQCPiQDKAAQDLAACQCQQCPCPAADKQAADLiPCQQiQCPjLAAQjKAAiPiPQiQiQAAjLg");
	this.shape_490.setTransform(476.8,324.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiSCSQiTCTjPAAQjPAAiSiTQiSiSAAjPQAAjOCSiTQCSiSDPAAQDPAACTCSQCSCTAADOg");
	this.shape_491.setTransform(476.8,324.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_443}]}).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_491}]},1).wait(1));

	// 球面波0
	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_492.setTransform(476.05,355.25);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgNQALgLAQAAQAQAAAMALQAMANAAAPQAAAQgMAMQgMAMgQAAQgQAAgLgMQgMgMAAgQg");
	this.shape_493.setTransform(476.05,355.25);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").ss(0.5).p("AgwAAQAAgUAOgPQAOgNAUAAQAVAAAOANQAOAPAAAUQAAAVgOAOQgOAOgVAAQgUAAgOgOQgOgOAAgVg");
	this.shape_494.setTransform(476.05,355.25);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").ss(0.5).p("Ag6AAQAAgXARgSQASgRAXAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgXAAgSgRQgRgSAAgYg");
	this.shape_495.setTransform(476.05,355.25);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAVgUQAUgUAbAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgbAAgUgUQgVgUAAgdg");
	this.shape_496.setTransform(476.05,355.25);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAYgXQAWgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgWgXQgYgXAAghg");
	this.shape_497.setTransform(476.05,355.25);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_498.setTransform(476.075,355.275);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").ss(0.5).p("AhhAAQAAgoAdgdQAcgdAoAAQApAAAdAdQAdAdAAAoQAAApgdAcQgdAegpAAQgoAAgcgeQgdgcAAgpg");
	this.shape_499.setTransform(476.05,355.25);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAgggQAfggAsAAQAtAAAgAgQAgAgAAAsQAAAtggAfQggAhgtAAQgsAAgfghQgggfAAgtg");
	this.shape_500.setTransform(476.05,355.25);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_501.setTransform(476.05,355.25);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_502.setTransform(476.05,355.25);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4ApgpQAogoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_503.setTransform(476.05,355.25);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").ss(0.5).p("AiTAAQAAg8AsgrQArgsA8AAQA9AAArAsQAsArAAA8QAAA9gsArQgrAsg9AAQg8AAgrgsQgsgrAAg9g");
	this.shape_504.setTransform(476.05,355.25);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").ss(0.5).p("AidAAQAAhBAvgtQAugvBAAAQBBAAAuAvQAvAtAABBQAABBgvAuQguAvhBAAQhAAAgugvQgvguAAhBg");
	this.shape_505.setTransform(476.05,355.25);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAxgyQAxgwBEAAQBFAAAxAwQAxAyAABEQAABFgxAxQgxAxhFAAQhEAAgxgxQgxgxAAhFg");
	this.shape_506.setTransform(476.05,355.25);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQAzg0BJAAQBJAAA0A0QA0AzAABJQAABKg0AzQg0A0hJAAQhJAAgzg0Qg0gzAAhKg");
	this.shape_507.setTransform(476.05,355.25);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").ss(0.5).p("Ai5AAQAAhNA2g2QA3g2BMAAQBOAAA2A2QA3A2AABNQAABOg3A2Qg2A2hOAAQhMAAg3g2Qg2g2AAhOg");
	this.shape_508.setTransform(476.05,355.25);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").ss(0.5).p("AjDAAQAAhQA5g6QA6g5BQAAQBSAAA5A5QA6A6AABQQAABRg6A6Qg5A5hSAAQhQAAg6g5Qg5g6AAhRg");
	this.shape_509.setTransform(476.05,355.25);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA8A8QA9A8AABVQAABVg9A8Qg8A9hVAAQhVAAg8g9Qg8g8AAhVg");
	this.shape_510.setTransform(476.075,355.275);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYBAhAQA/g/BYAAQBaAAA/A/QA/BAAABYQAABZg/BAQg/A/haAAQhYAAg/g/QhAhAAAhZg");
	this.shape_511.setTransform(476.05,355.25);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBDhCQBChCBcAAQBeAABCBCQBCBCAABdQAABehCBBQhCBDheAAQhcAAhChDQhDhBAAheg");
	this.shape_512.setTransform(476.05,355.25);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").ss(0.5).p("AjrAAQAAhhBFhEQBFhGBhAAQBiAABEBGQBGBEAABhQAABihGBEQhEBGhiAAQhhAAhFhGQhFhEAAhig");
	this.shape_513.setTransform(476.05,355.25);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").ss(0.5).p("Aj1AAQAAhlBIhIQBIhIBlAAQBlAABIBIQBJBIAABlQAABlhJBJQhIBIhlAAQhlAAhIhIQhIhJAAhlg");
	this.shape_514.setTransform(476.05,355.25);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhLQBLhKBpAAQBqAABLBKQBKBLAABpQAABqhKBLQhLBKhqAAQhpAAhLhKQhKhLAAhqg");
	this.shape_515.setTransform(476.05,355.25);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBOhNBsAAQBuAABOBNQBNBOAABtQAABuhNBOQhOBNhuAAQhsAAhOhNQhOhOAAhug");
	this.shape_516.setTransform(476.05,355.25);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBRhQQBQhRBxAAQByAABQBRQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhQhRQhRhQAAhyg");
	this.shape_517.setTransform(476.05,355.25);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABTBTQBTBTAAB1QAAB2hTBTQhTBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_518.setTransform(476.05,355.25);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_519.setTransform(476.05,355.25);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_520.setTransform(476.05,355.25);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiCBchbQBchcCBAAQCCAABcBcQBcBbAACCQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_521.setTransform(476.05,355.25);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiGBfheQBfhfCFAAQCGAABfBfQBfBeAACGQAACGhfBfQhfBfiGAAQiFAAhfhfQhfhfAAiGg");
	this.shape_522.setTransform(476.075,355.275);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiKBihhQBhhiCJAAQCKAABiBiQBiBhAACKQAACKhiBiQhiBiiKAAQiJAAhhhiQhihiAAiKg");
	this.shape_523.setTransform(476.05,355.25);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiOBlhkQBkhlCNAAQCOAABlBlQBlBkAACOQAACOhlBlQhlBliOAAQiNAAhkhlQhlhlAAiOg");
	this.shape_524.setTransform(476.05,355.25);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiRBohnQBnhoCRAAQCSAABnBoQBoBnAACRQAACShoBnQhnBoiSAAQiRAAhnhoQhohnAAiSg");
	this.shape_525.setTransform(476.05,355.25);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhpQBqhrCWAAQCWAABqBrQBrBpAACWQAACXhrBpQhqBriWAAQiWAAhqhrQhqhpAAiXg");
	this.shape_526.setTransform(476.05,355.25);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").ss(0.5).p("AlzAAQAAiZBthuQBthtCZAAQCbAABtBtQBtBuAACZQAACahtBuQhtBtibAAQiZAAhthtQhthuAAiag");
	this.shape_527.setTransform(476.05,355.25);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").ss(0.5).p("Al9AAQAAieBwhwQBwhwCdAAQCfAABwBwQBwBwAACeQAACfhwBwQhwBwifAAQidAAhwhwQhwhwAAifg");
	this.shape_528.setTransform(476.05,355.25);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQBzhzChAAQCjAABzBzQBzBzAACiQAACjhzBzQhzBzijAAQihAAhzhzQhzhzAAijg");
	this.shape_529.setTransform(476.05,355.25);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB2h1QB1h2CmAAQCmAAB2B2QB2B1AACmQAACmh2B2Qh2B2imAAQimAAh1h2Qh2h2AAimg");
	this.shape_530.setTransform(476.05,355.25);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCrAAB4B5QB5B4AACqQAACrh5B4Qh4B5irAAQiqAAh4h5Qh5h4AAirg");
	this.shape_531.setTransform(476.05,355.25);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB8h7CtAAQCuAAB8B7QB8B7AACuQAACuh8B8Qh8B7iuAAQitAAh8h7Qh8h8AAiug");
	this.shape_532.setTransform(476.05,355.25);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").ss(0.5).p("AmvAAQAAiyB/h+QB+h+CyAAQCyAAB/B+QB/B+AACyQAACzh/B+Qh/B+iyAAQiyAAh+h+Qh/h+AAizg");
	this.shape_533.setTransform(476.05,355.25);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC2AACCCBQCBCBAAC2QAAC2iBCCQiCCBi2AAQi2AAiBiBQiBiCAAi2g");
	this.shape_534.setTransform(476.075,355.275);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC6AACFCEQCECEAAC6QAAC6iECFQiFCEi6AAQi6AAiEiEQiEiFAAi6g");
	this.shape_535.setTransform(476.05,355.25);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCHiHC+AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi+AAiHiHQiHiHAAi/g");
	this.shape_536.setTransform(476.05,355.25);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjDCKiJQCKiKDCAAQDDAACKCKQCKCJAADDQAADDiKCKQiKCKjDAAQjCAAiKiKQiKiKAAjDg");
	this.shape_537.setTransform(476.05,355.25);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").ss(0.5).p("AngAAQAAjGCOiMQCMiODGAAQDHAACMCOQCOCMAADGQAADHiOCMQiMCOjHAAQjGAAiMiOQiOiMAAjHg");
	this.shape_538.setTransform(476.05,355.25);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjLCQiOQCPiQDKAAQDLAACQCQQCPCOAADLQAADLiPCPQiQCQjLAAQjKAAiPiQQiQiPAAjLg");
	this.shape_539.setTransform(476.05,355.25);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiSCTQiTCSjPAAQjOAAiTiSQiSiTAAjPQAAjPCSiRQCTiTDOAAQDPAACTCTQCSCRAADPg");
	this.shape_540.setTransform(476.05,355.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_492}]}).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_540}]},1).wait(1));

	// 平面波9
	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_541.setTransform(56.8,339.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_542.setTransform(56.875,340.025);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_543.setTransform(56.95,340.475);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_544.setTransform(57,340.9);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_545.setTransform(57.075,341.325);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_546.setTransform(57.15,341.775);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_547.setTransform(57.225,342.225);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAdQgdAdgoAAQgoAAgdgdQgdgdAAgpg");
	this.shape_548.setTransform(57.3,342.65);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_549.setTransform(57.325,343.075);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_550.setTransform(57.4,343.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_551.setTransform(57.475,343.95);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_552.setTransform(57.55,344.375);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgrQArgsA8AAQA+AAArAsQArArAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_553.setTransform(57.6,344.8);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_554.setTransform(57.675,345.225);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_555.setTransform(57.75,345.675);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_556.setTransform(57.825,346.125);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhMA3g3QA2g2BNAAQBNAAA3A2QA3A3AABMQAABOg3A2Qg3A3hNAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_557.setTransform(57.9,346.55);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_558.setTransform(57.95,346.975);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_559.setTransform(58.025,347.425);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAAA/A/QBAA/AABZQAABZhABAQg/A/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_560.setTransform(58.1,347.85);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_561.setTransform(58.175,348.275);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhGBhAAQBiAABEBGQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_562.setTransform(58.25,348.7);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_563.setTransform(58.3,349.15);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_564.setTransform(58.375,349.575);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_565.setTransform(58.425,350.025);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBQhyAAQhxAAhRhQQhQhQAAhyg");
	this.shape_566.setTransform(58.5,350.45);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_567.setTransform(58.55,350.9);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_568.setTransform(58.625,351.325);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_569.setTransform(58.7,351.75);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_570.setTransform(58.775,352.175);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_571.setTransform(58.85,352.625);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBhhhCKAAQCLAABhBhQBiBiAACJQAACKhiBiQhhBiiLAAQiKAAhhhiQhhhiAAiKg");
	this.shape_572.setTransform(58.9,353.05);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_573.setTransform(58.975,353.475);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_574.setTransform(59.05,353.925);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_575.setTransform(59.125,354.375);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_576.setTransform(59.2,354.8);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_577.setTransform(59.25,355.225);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_578.setTransform(59.325,355.65);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_579.setTransform(59.4,356.1);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_580.setTransform(59.475,356.525);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACuh8B8Qh7B7ivAAQiuAAh7h7Qh8h8AAiug");
	this.shape_581.setTransform(59.5,356.95);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_582.setTransform(59.575,357.375);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_583.setTransform(59.65,357.825);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_584.setTransform(59.725,358.275);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiHC/AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_585.setTransform(59.8,358.7);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_586.setTransform(59.85,359.125);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_587.setTransform(59.925,359.575);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjLCPiOQCPiQDLAAQDLAACQCQQCPCOAADLQAADLiPCPQiQCQjLAAQjLAAiPiQQiPiPAAjLg");
	this.shape_588.setTransform(60,360);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiSCSjPAAQjPAAiSiSQiSiTAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPg");
	this.shape_589.setTransform(56.8,339.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_541}]}).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_589}]},1).wait(1));

	// 平面波8
	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_590.setTransform(56.8,309.6);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_591.setTransform(56.875,310.025);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_592.setTransform(56.95,310.475);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_593.setTransform(57,310.9);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_594.setTransform(57.075,311.325);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_595.setTransform(57.15,311.775);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_596.setTransform(57.225,312.225);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAdQgdAdgoAAQgoAAgdgdQgdgdAAgpg");
	this.shape_597.setTransform(57.3,312.65);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_598.setTransform(57.325,313.075);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_599.setTransform(57.4,313.5);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_600.setTransform(57.475,313.95);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_601.setTransform(57.55,314.375);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgrQArgsA8AAQA+AAArAsQArArAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_602.setTransform(57.6,314.8);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_603.setTransform(57.675,315.225);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_604.setTransform(57.75,315.675);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_605.setTransform(57.825,316.125);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhMA3g3QA2g2BNAAQBNAAA3A2QA3A3AABMQAABOg3A2Qg3A3hNAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_606.setTransform(57.9,316.55);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_607.setTransform(57.95,316.975);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_608.setTransform(58.025,317.425);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAAA/A/QBAA/AABZQAABZhABAQg/A/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_609.setTransform(58.1,317.85);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_610.setTransform(58.175,318.275);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhGBhAAQBiAABEBGQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_611.setTransform(58.25,318.7);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_612.setTransform(58.3,319.15);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_613.setTransform(58.375,319.575);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_614.setTransform(58.425,320.025);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBQhyAAQhxAAhRhQQhQhQAAhyg");
	this.shape_615.setTransform(58.5,320.45);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_616.setTransform(58.55,320.9);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_617.setTransform(58.625,321.325);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_618.setTransform(58.7,321.75);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_619.setTransform(58.775,322.175);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_620.setTransform(58.85,322.625);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBhhhCKAAQCLAABhBhQBiBiAACJQAACKhiBiQhhBiiLAAQiKAAhhhiQhhhiAAiKg");
	this.shape_621.setTransform(58.9,323.05);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_622.setTransform(58.975,323.475);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_623.setTransform(59.05,323.925);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_624.setTransform(59.125,324.375);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_625.setTransform(59.2,324.8);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_626.setTransform(59.25,325.225);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_627.setTransform(59.325,325.65);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_628.setTransform(59.4,326.1);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_629.setTransform(59.475,326.525);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACuh8B8Qh7B7ivAAQiuAAh7h7Qh8h8AAiug");
	this.shape_630.setTransform(59.5,326.95);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_631.setTransform(59.575,327.375);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_632.setTransform(59.65,327.825);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_633.setTransform(59.725,328.275);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiHC/AAQC/AACHCHQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_634.setTransform(59.8,328.7);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_635.setTransform(59.85,329.125);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_636.setTransform(59.925,329.575);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjLCPiOQCPiQDLAAQDLAACQCQQCPCOAADLQAADLiPCPQiQCQjLAAQjLAAiPiQQiPiPAAjLg");
	this.shape_637.setTransform(60,330);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiSCSjPAAQjPAAiSiSQiSiTAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPg");
	this.shape_638.setTransform(56.8,309.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_590}]}).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_638}]},1).wait(1));

	// 平面波7
	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_639.setTransform(56.8,279.6);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_640.setTransform(56.875,280.025);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_641.setTransform(56.95,280.475);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_642.setTransform(57,280.9);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_643.setTransform(57.075,281.325);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_644.setTransform(57.15,281.775);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_645.setTransform(57.225,282.225);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAdQgdAdgoAAQgoAAgdgdQgdgdAAgpg");
	this.shape_646.setTransform(57.3,282.65);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_647.setTransform(57.325,283.075);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigjQAjgiAwAAQAxAAAiAiQAjAjAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_648.setTransform(57.4,283.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_649.setTransform(57.475,283.95);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_650.setTransform(57.55,284.375);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgrQArgsA8AAQA+AAArAsQArArAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_651.setTransform(57.6,284.8);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_652.setTransform(57.675,285.225);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_653.setTransform(57.75,285.675);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_654.setTransform(57.825,286.125);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhMA3g3QA2g2BNAAQBNAAA3A2QA3A3AABMQAABOg3A2Qg3A3hNAAQhNAAg2g3Qg3g2AAhOg");
	this.shape_655.setTransform(57.9,286.55);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_656.setTransform(57.95,286.975);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_657.setTransform(58.025,287.425);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAAA/A/QBAA/AABZQAABZhABAQg/A/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_658.setTransform(58.1,287.85);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_659.setTransform(58.175,288.275);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhGBhAAQBiAABEBGQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_660.setTransform(58.25,288.7);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_661.setTransform(58.3,289.15);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_662.setTransform(58.375,289.575);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_663.setTransform(58.425,290.025);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBQhyAAQhxAAhRhQQhQhQAAhyg");
	this.shape_664.setTransform(58.5,290.45);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_665.setTransform(58.55,290.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_666.setTransform(58.625,291.325);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh9BZhZQBZhZB9AAQB+AABZBZQBZBZAAB9QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_667.setTransform(58.7,291.75);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_668.setTransform(58.775,292.175);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_669.setTransform(58.85,292.625);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBhhhCKAAQCLAABhBhQBiBiAACJQAACKhiBiQhhBiiLAAQiKAAhhhiQhhhiAAiKg");
	this.shape_670.setTransform(58.9,293.05);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_671.setTransform(58.975,293.475);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_672.setTransform(59.05,293.925);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_673.setTransform(59.125,294.375);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_674.setTransform(59.2,294.8);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_675.setTransform(59.25,295.225);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_676.setTransform(59.325,295.65);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_677.setTransform(59.4,296.1);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_678.setTransform(59.475,296.525);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACuh8B8Qh7B7ivAAQiuAAh7h7Qh8h8AAiug");
	this.shape_679.setTransform(59.5,296.95);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_680.setTransform(59.575,297.375);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_681.setTransform(59.65,297.825);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_682.setTransform(59.725,298.275);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_683.setTransform(59.8,298.7);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_684.setTransform(59.85,299.125);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_685.setTransform(59.925,299.575);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjLCPiOQCPiQDLAAQDLAACQCQQCPCOAADLQAADLiPCPQiQCQjLAAQjLAAiPiQQiPiPAAjLg");
	this.shape_686.setTransform(60,300);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiSCSjPAAQjPAAiSiSQiSiTAAjPQAAjPCSiSQCSiSDPAAQDPAACSCSQCTCSAADPg");
	this.shape_687.setTransform(56.8,279.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_639}]}).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[{t:this.shape_676}]},1).to({state:[{t:this.shape_677}]},1).to({state:[{t:this.shape_678}]},1).to({state:[{t:this.shape_679}]},1).to({state:[{t:this.shape_680}]},1).to({state:[{t:this.shape_681}]},1).to({state:[{t:this.shape_682}]},1).to({state:[{t:this.shape_683}]},1).to({state:[{t:this.shape_684}]},1).to({state:[{t:this.shape_685}]},1).to({state:[{t:this.shape_686}]},1).to({state:[{t:this.shape_687}]},1).to({state:[{t:this.shape_687}]},1).wait(1));

	// 平面波6
	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgIQAIgJAMAAQANAAAIAJQAJAIAAAMg");
	this.shape_688.setTransform(56.8,249.6);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_689.setTransform(56.875,250.025);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_690.setTransform(56.95,250.475);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAYgSASQgRASgZAAQgYAAgRgSQgSgSAAgYg");
	this.shape_691.setTransform(57,250.9);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_692.setTransform(57.075,251.325);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_693.setTransform(57.15,251.775);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_694.setTransform(57.225,252.225);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAdQgdAcgoAAQgoAAgdgcQgdgdAAgpg");
	this.shape_695.setTransform(57.3,252.65);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_696.setTransform(57.325,253.075);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAjQgiAigxAAQgwAAgjgiQgigjAAgxg");
	this.shape_697.setTransform(57.4,253.5);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_698.setTransform(57.475,253.95);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_699.setTransform(57.55,254.375);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_700.setTransform(57.6,254.8);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_701.setTransform(57.675,255.225);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_702.setTransform(57.75,255.675);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_703.setTransform(57.825,256.125);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABOg3A2Qg3A2hNAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_704.setTransform(57.9,256.55);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_705.setTransform(57.95,256.975);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_706.setTransform(58.025,257.425);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhZA/g/QA/g/BZAAQBZAAA/A/QBAA/AABZQAABZhABAQg/A/hZAAQhZAAg/g/Qg/hAAAhZg");
	this.shape_707.setTransform(58.1,257.85);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_708.setTransform(58.175,258.275);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhFBhAAQBiAABEBFQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_709.setTransform(58.25,258.7);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_710.setTransform(58.3,259.15);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_711.setTransform(58.375,259.575);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_712.setTransform(58.425,260.025);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBQhyAAQhxAAhRhQQhQhQAAhyg");
	this.shape_713.setTransform(58.5,260.45);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_714.setTransform(58.55,260.9);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_715.setTransform(58.625,261.325);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_716.setTransform(58.7,261.75);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_717.setTransform(58.775,262.175);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_718.setTransform(58.85,262.625);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBhhhCKAAQCLAABhBhQBiBiAACJQAACKhiBiQhhBiiLAAQiKAAhhhiQhhhiAAiKg");
	this.shape_719.setTransform(58.9,263.05);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_720.setTransform(58.975,263.475);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_721.setTransform(59.05,263.925);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_722.setTransform(59.125,264.375);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_723.setTransform(59.2,264.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_724.setTransform(59.25,265.225);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhyQByhzCiAAQCiAABzBzQBzByAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_725.setTransform(59.325,265.65);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_726.setTransform(59.4,266.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_727.setTransform(59.475,266.525);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACuh8B8Qh7B7ivAAQiuAAh7h7Qh8h8AAiug");
	this.shape_728.setTransform(59.5,266.95);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_729.setTransform(59.575,267.375);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_730.setTransform(59.65,267.825);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_731.setTransform(59.725,268.275);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_732.setTransform(59.8,268.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_733.setTransform(59.85,269.125);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_734.setTransform(59.925,269.575);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjLAAiPiQQiPiPAAjLg");
	this.shape_735.setTransform(60,270);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiSCSjPAAQjPAAiSiSQiSiTAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_736.setTransform(56.8,249.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_688}]}).to({state:[{t:this.shape_689}]},1).to({state:[{t:this.shape_690}]},1).to({state:[{t:this.shape_691}]},1).to({state:[{t:this.shape_692}]},1).to({state:[{t:this.shape_693}]},1).to({state:[{t:this.shape_694}]},1).to({state:[{t:this.shape_695}]},1).to({state:[{t:this.shape_696}]},1).to({state:[{t:this.shape_697}]},1).to({state:[{t:this.shape_698}]},1).to({state:[{t:this.shape_699}]},1).to({state:[{t:this.shape_700}]},1).to({state:[{t:this.shape_701}]},1).to({state:[{t:this.shape_702}]},1).to({state:[{t:this.shape_703}]},1).to({state:[{t:this.shape_704}]},1).to({state:[{t:this.shape_705}]},1).to({state:[{t:this.shape_706}]},1).to({state:[{t:this.shape_707}]},1).to({state:[{t:this.shape_708}]},1).to({state:[{t:this.shape_709}]},1).to({state:[{t:this.shape_710}]},1).to({state:[{t:this.shape_711}]},1).to({state:[{t:this.shape_712}]},1).to({state:[{t:this.shape_713}]},1).to({state:[{t:this.shape_714}]},1).to({state:[{t:this.shape_715}]},1).to({state:[{t:this.shape_716}]},1).to({state:[{t:this.shape_717}]},1).to({state:[{t:this.shape_718}]},1).to({state:[{t:this.shape_719}]},1).to({state:[{t:this.shape_720}]},1).to({state:[{t:this.shape_721}]},1).to({state:[{t:this.shape_722}]},1).to({state:[{t:this.shape_723}]},1).to({state:[{t:this.shape_724}]},1).to({state:[{t:this.shape_725}]},1).to({state:[{t:this.shape_726}]},1).to({state:[{t:this.shape_727}]},1).to({state:[{t:this.shape_728}]},1).to({state:[{t:this.shape_729}]},1).to({state:[{t:this.shape_730}]},1).to({state:[{t:this.shape_731}]},1).to({state:[{t:this.shape_732}]},1).to({state:[{t:this.shape_733}]},1).to({state:[{t:this.shape_734}]},1).to({state:[{t:this.shape_735}]},1).to({state:[{t:this.shape_736}]},1).to({state:[{t:this.shape_736}]},1).wait(1));

	// 平面波5
	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_737.setTransform(56.8,219.6);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_738.setTransform(56.875,220.025);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_739.setTransform(56.95,220.475);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_740.setTransform(57,220.9);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_741.setTransform(57.075,221.325);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_742.setTransform(57.15,221.775);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_743.setTransform(57.225,222.225);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAcQgdAdgoAAQgoAAgdgdQgdgcAAgpg");
	this.shape_744.setTransform(57.3,222.65);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_745.setTransform(57.325,223.075);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_746.setTransform(57.4,223.5);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_747.setTransform(57.475,223.95);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_748.setTransform(57.55,224.375);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_749.setTransform(57.6,224.8);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_750.setTransform(57.675,225.225);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_751.setTransform(57.75,225.675);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_752.setTransform(57.825,226.125);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABOg3A2Qg3A2hNAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_753.setTransform(57.9,226.55);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_754.setTransform(57.95,226.975);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_755.setTransform(58.025,227.425);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/Qg/g/AAhag");
	this.shape_756.setTransform(58.1,227.85);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_757.setTransform(58.175,228.275);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhFBhAAQBiAABEBFQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_758.setTransform(58.25,228.7);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_759.setTransform(58.3,229.15);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_760.setTransform(58.375,229.575);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_761.setTransform(58.425,230.025);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBQhyAAQhxAAhRhQQhQhQAAhyg");
	this.shape_762.setTransform(58.5,230.45);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThUQBThTB1AAQB2AABUBTQBTBUAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_763.setTransform(58.55,230.9);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_764.setTransform(58.625,231.325);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_765.setTransform(58.7,231.75);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_766.setTransform(58.775,232.175);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_767.setTransform(58.85,232.625);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiJBhhiQBhhhCKAAQCLAABhBhQBiBiAACJQAACKhiBiQhhBhiLAAQiKAAhhhhQhhhiAAiKg");
	this.shape_768.setTransform(58.9,233.05);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_769.setTransform(58.975,233.475);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_770.setTransform(59.05,233.925);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_771.setTransform(59.125,234.375);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_772.setTransform(59.2,234.8);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_773.setTransform(59.25,235.225);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzByQhzBziiAAQiiAAhyhzQhzhyAAijg");
	this.shape_774.setTransform(59.325,235.65);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_775.setTransform(59.4,236.1);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_776.setTransform(59.475,236.525);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h8CuAAQCvAAB7B8QB8B7AACuQAACuh8B8Qh7B8ivAAQiuAAh7h8Qh8h8AAiug");
	this.shape_777.setTransform(59.5,236.95);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_778.setTransform(59.575,237.375);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_779.setTransform(59.65,237.825);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_780.setTransform(59.725,238.275);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_781.setTransform(59.8,238.7);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_782.setTransform(59.85,239.125);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_783.setTransform(59.925,239.575);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCPQiQCQjLAAQjLAAiPiQQiPiPAAjLg");
	this.shape_784.setTransform(60,240);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCTQiSCSjPAAQjPAAiSiSQiSiTAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_785.setTransform(56.8,219.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_737}]}).to({state:[{t:this.shape_738}]},1).to({state:[{t:this.shape_739}]},1).to({state:[{t:this.shape_740}]},1).to({state:[{t:this.shape_741}]},1).to({state:[{t:this.shape_742}]},1).to({state:[{t:this.shape_743}]},1).to({state:[{t:this.shape_744}]},1).to({state:[{t:this.shape_745}]},1).to({state:[{t:this.shape_746}]},1).to({state:[{t:this.shape_747}]},1).to({state:[{t:this.shape_748}]},1).to({state:[{t:this.shape_749}]},1).to({state:[{t:this.shape_750}]},1).to({state:[{t:this.shape_751}]},1).to({state:[{t:this.shape_752}]},1).to({state:[{t:this.shape_753}]},1).to({state:[{t:this.shape_754}]},1).to({state:[{t:this.shape_755}]},1).to({state:[{t:this.shape_756}]},1).to({state:[{t:this.shape_757}]},1).to({state:[{t:this.shape_758}]},1).to({state:[{t:this.shape_759}]},1).to({state:[{t:this.shape_760}]},1).to({state:[{t:this.shape_761}]},1).to({state:[{t:this.shape_762}]},1).to({state:[{t:this.shape_763}]},1).to({state:[{t:this.shape_764}]},1).to({state:[{t:this.shape_765}]},1).to({state:[{t:this.shape_766}]},1).to({state:[{t:this.shape_767}]},1).to({state:[{t:this.shape_768}]},1).to({state:[{t:this.shape_769}]},1).to({state:[{t:this.shape_770}]},1).to({state:[{t:this.shape_771}]},1).to({state:[{t:this.shape_772}]},1).to({state:[{t:this.shape_773}]},1).to({state:[{t:this.shape_774}]},1).to({state:[{t:this.shape_775}]},1).to({state:[{t:this.shape_776}]},1).to({state:[{t:this.shape_777}]},1).to({state:[{t:this.shape_778}]},1).to({state:[{t:this.shape_779}]},1).to({state:[{t:this.shape_780}]},1).to({state:[{t:this.shape_781}]},1).to({state:[{t:this.shape_782}]},1).to({state:[{t:this.shape_783}]},1).to({state:[{t:this.shape_784}]},1).to({state:[{t:this.shape_785}]},1).to({state:[{t:this.shape_785}]},1).wait(1));

	// 平面波4
	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_786.setTransform(56.8,189.6);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_787.setTransform(56.875,190.025);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_788.setTransform(56.95,190.475);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_789.setTransform(57,190.9);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_790.setTransform(57.075,191.325);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_791.setTransform(57.15,191.775);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_792.setTransform(57.225,192.225);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAcQgdAdgoAAQgoAAgdgdQgdgcAAgpg");
	this.shape_793.setTransform(57.3,192.65);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_794.setTransform(57.325,193.075);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_795.setTransform(57.4,193.5);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_796.setTransform(57.475,193.95);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_797.setTransform(57.55,194.375);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_798.setTransform(57.6,194.8);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_799.setTransform(57.675,195.225);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_800.setTransform(57.75,195.675);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_801.setTransform(57.825,196.125);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABOg3A2Qg3A2hNAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_802.setTransform(57.9,196.55);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_803.setTransform(57.95,196.975);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_804.setTransform(58.025,197.425);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/Qg/g/AAhag");
	this.shape_805.setTransform(58.1,197.85);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_806.setTransform(58.175,198.275);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhFBhAAQBiAABEBFQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_807.setTransform(58.25,198.7);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_808.setTransform(58.3,199.15);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_809.setTransform(58.375,199.575);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_810.setTransform(58.425,200.025);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhRhRQhQhQAAhyg");
	this.shape_811.setTransform(58.5,200.45);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_812.setTransform(58.55,200.9);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_813.setTransform(58.625,201.325);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_814.setTransform(58.7,201.75);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_815.setTransform(58.775,202.175);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_816.setTransform(58.85,202.625);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiKBhhhQBhhiCKAAQCLAABhBiQBiBhAACKQAACKhiBhQhhBiiLAAQiKAAhhhiQhhhhAAiKg");
	this.shape_817.setTransform(58.9,203.05);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_818.setTransform(58.975,203.475);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_819.setTransform(59.05,203.925);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_820.setTransform(59.125,204.375);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_821.setTransform(59.2,204.8);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_822.setTransform(59.25,205.225);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhyQByhzCiAAQCiAABzBzQBzByAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_823.setTransform(59.325,205.65);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_824.setTransform(59.4,206.1);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_825.setTransform(59.475,206.525);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h7CuAAQCvAAB7B7QB8B7AACuQAACvh8B7Qh7B8ivAAQiuAAh7h8Qh8h7AAivg");
	this.shape_826.setTransform(59.5,206.95);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_827.setTransform(59.575,207.375);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_828.setTransform(59.65,207.825);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_829.setTransform(59.725,208.275);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_830.setTransform(59.8,208.7);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_831.setTransform(59.85,209.125);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_832.setTransform(59.925,209.575);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCQQiQCPjLAAQjLAAiPiPQiPiQAAjLg");
	this.shape_833.setTransform(60,210);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCSQiSCTjPAAQjPAAiSiTQiSiSAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_834.setTransform(56.8,189.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_786}]}).to({state:[{t:this.shape_787}]},1).to({state:[{t:this.shape_788}]},1).to({state:[{t:this.shape_789}]},1).to({state:[{t:this.shape_790}]},1).to({state:[{t:this.shape_791}]},1).to({state:[{t:this.shape_792}]},1).to({state:[{t:this.shape_793}]},1).to({state:[{t:this.shape_794}]},1).to({state:[{t:this.shape_795}]},1).to({state:[{t:this.shape_796}]},1).to({state:[{t:this.shape_797}]},1).to({state:[{t:this.shape_798}]},1).to({state:[{t:this.shape_799}]},1).to({state:[{t:this.shape_800}]},1).to({state:[{t:this.shape_801}]},1).to({state:[{t:this.shape_802}]},1).to({state:[{t:this.shape_803}]},1).to({state:[{t:this.shape_804}]},1).to({state:[{t:this.shape_805}]},1).to({state:[{t:this.shape_806}]},1).to({state:[{t:this.shape_807}]},1).to({state:[{t:this.shape_808}]},1).to({state:[{t:this.shape_809}]},1).to({state:[{t:this.shape_810}]},1).to({state:[{t:this.shape_811}]},1).to({state:[{t:this.shape_812}]},1).to({state:[{t:this.shape_813}]},1).to({state:[{t:this.shape_814}]},1).to({state:[{t:this.shape_815}]},1).to({state:[{t:this.shape_816}]},1).to({state:[{t:this.shape_817}]},1).to({state:[{t:this.shape_818}]},1).to({state:[{t:this.shape_819}]},1).to({state:[{t:this.shape_820}]},1).to({state:[{t:this.shape_821}]},1).to({state:[{t:this.shape_822}]},1).to({state:[{t:this.shape_823}]},1).to({state:[{t:this.shape_824}]},1).to({state:[{t:this.shape_825}]},1).to({state:[{t:this.shape_826}]},1).to({state:[{t:this.shape_827}]},1).to({state:[{t:this.shape_828}]},1).to({state:[{t:this.shape_829}]},1).to({state:[{t:this.shape_830}]},1).to({state:[{t:this.shape_831}]},1).to({state:[{t:this.shape_832}]},1).to({state:[{t:this.shape_833}]},1).to({state:[{t:this.shape_834}]},1).to({state:[{t:this.shape_834}]},1).wait(1));

	// 平面波3
	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_835.setTransform(56.8,159.6);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_836.setTransform(56.875,160.025);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_837.setTransform(56.95,160.475);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAZgSARQgRASgZAAQgYAAgRgSQgSgRAAgZg");
	this.shape_838.setTransform(57,160.9);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_839.setTransform(57.075,161.325);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_840.setTransform(57.15,161.775);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_841.setTransform(57.225,162.225);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgcAoAAQAoAAAdAcQAeAdAAAoQAAApgeAcQgdAdgoAAQgoAAgdgdQgdgcAAgpg");
	this.shape_842.setTransform(57.3,162.65);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_843.setTransform(57.325,163.075);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_844.setTransform(57.4,163.5);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_845.setTransform(57.475,163.95);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_846.setTransform(57.55,164.375);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_847.setTransform(57.6,164.8);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_848.setTransform(57.675,165.225);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_849.setTransform(57.75,165.675);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_850.setTransform(57.825,166.125);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABOg3A2Qg3A2hNAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_851.setTransform(57.9,166.55);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_852.setTransform(57.95,166.975);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_853.setTransform(58.025,167.425);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/Qg/g/AAhag");
	this.shape_854.setTransform(58.1,167.85);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_855.setTransform(58.175,168.275);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhFBhAAQBiAABEBFQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_856.setTransform(58.25,168.7);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_857.setTransform(58.3,169.15);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_858.setTransform(58.375,169.575);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_859.setTransform(58.425,170.025);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhRhRQhQhQAAhyg");
	this.shape_860.setTransform(58.5,170.45);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThTQBThTB1AAQB2AABUBTQBTBTAAB1QAAB2hTBTQhUBUh2AAQh1AAhThUQhThTAAh2g");
	this.shape_861.setTransform(58.55,170.9);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_862.setTransform(58.625,171.325);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_863.setTransform(58.7,171.75);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_864.setTransform(58.775,172.175);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_865.setTransform(58.85,172.625);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiKBhhhQBhhiCKAAQCLAABhBiQBiBhAACKQAACKhiBhQhhBiiLAAQiKAAhhhiQhhhhAAiKg");
	this.shape_866.setTransform(58.9,173.05);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_867.setTransform(58.975,173.475);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_868.setTransform(59.05,173.925);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_869.setTransform(59.125,174.375);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_870.setTransform(59.2,174.8);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_871.setTransform(59.25,175.225);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhyQByhzCiAAQCiAABzBzQBzByAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_872.setTransform(59.325,175.65);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_873.setTransform(59.4,176.1);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_874.setTransform(59.475,176.525);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h7CuAAQCvAAB7B7QB8B7AACuQAACvh8B7Qh7B8ivAAQiuAAh7h8Qh8h7AAivg");
	this.shape_875.setTransform(59.5,176.95);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_876.setTransform(59.575,177.375);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_877.setTransform(59.65,177.825);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_878.setTransform(59.725,178.275);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_879.setTransform(59.8,178.7);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_880.setTransform(59.85,179.125);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_881.setTransform(59.925,179.575);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCQQiQCPjLAAQjLAAiPiPQiPiQAAjLg");
	this.shape_882.setTransform(60,180);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCSQiSCTjPAAQjPAAiSiTQiSiSAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_883.setTransform(56.8,159.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_835}]}).to({state:[{t:this.shape_836}]},1).to({state:[{t:this.shape_837}]},1).to({state:[{t:this.shape_838}]},1).to({state:[{t:this.shape_839}]},1).to({state:[{t:this.shape_840}]},1).to({state:[{t:this.shape_841}]},1).to({state:[{t:this.shape_842}]},1).to({state:[{t:this.shape_843}]},1).to({state:[{t:this.shape_844}]},1).to({state:[{t:this.shape_845}]},1).to({state:[{t:this.shape_846}]},1).to({state:[{t:this.shape_847}]},1).to({state:[{t:this.shape_848}]},1).to({state:[{t:this.shape_849}]},1).to({state:[{t:this.shape_850}]},1).to({state:[{t:this.shape_851}]},1).to({state:[{t:this.shape_852}]},1).to({state:[{t:this.shape_853}]},1).to({state:[{t:this.shape_854}]},1).to({state:[{t:this.shape_855}]},1).to({state:[{t:this.shape_856}]},1).to({state:[{t:this.shape_857}]},1).to({state:[{t:this.shape_858}]},1).to({state:[{t:this.shape_859}]},1).to({state:[{t:this.shape_860}]},1).to({state:[{t:this.shape_861}]},1).to({state:[{t:this.shape_862}]},1).to({state:[{t:this.shape_863}]},1).to({state:[{t:this.shape_864}]},1).to({state:[{t:this.shape_865}]},1).to({state:[{t:this.shape_866}]},1).to({state:[{t:this.shape_867}]},1).to({state:[{t:this.shape_868}]},1).to({state:[{t:this.shape_869}]},1).to({state:[{t:this.shape_870}]},1).to({state:[{t:this.shape_871}]},1).to({state:[{t:this.shape_872}]},1).to({state:[{t:this.shape_873}]},1).to({state:[{t:this.shape_874}]},1).to({state:[{t:this.shape_875}]},1).to({state:[{t:this.shape_876}]},1).to({state:[{t:this.shape_877}]},1).to({state:[{t:this.shape_878}]},1).to({state:[{t:this.shape_879}]},1).to({state:[{t:this.shape_880}]},1).to({state:[{t:this.shape_881}]},1).to({state:[{t:this.shape_882}]},1).to({state:[{t:this.shape_883}]},1).to({state:[{t:this.shape_883}]},1).wait(1));

	// 平面波2
	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_884.setTransform(56.8,129.6);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_885.setTransform(56.875,130.025);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_886.setTransform(56.95,130.475);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAYgSASQgRARgZAAQgYAAgRgRQgSgSAAgYg");
	this.shape_887.setTransform(57,130.9);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_888.setTransform(57.075,131.325);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_889.setTransform(57.15,131.775);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_890.setTransform(57.225,132.225);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgdAoAAQAoAAAdAdQAeAdAAAoQAAApgeAcQgdAdgoAAQgoAAgdgdQgdgcAAgpg");
	this.shape_891.setTransform(57.3,132.65);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_892.setTransform(57.325,133.075);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_893.setTransform(57.4,133.5);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_894.setTransform(57.475,133.95);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_895.setTransform(57.55,134.375);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_896.setTransform(57.6,134.8);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_897.setTransform(57.675,135.225);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_898.setTransform(57.75,135.675);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_899.setTransform(57.825,136.125);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABOg3A2Qg3A2hNAAQhNAAg2g2Qg3g2AAhOg");
	this.shape_900.setTransform(57.9,136.55);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_901.setTransform(57.95,136.975);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_902.setTransform(58.025,137.425);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/Qg/g/AAhag");
	this.shape_903.setTransform(58.1,137.85);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_904.setTransform(58.175,138.275);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhEQBFhFBhAAQBiAABEBFQBFBEAABhQAABihFBFQhEBFhiAAQhhAAhFhFQhEhFAAhig");
	this.shape_905.setTransform(58.25,138.7);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBIhmAAQhlAAhHhIQhIhIAAhmg");
	this.shape_906.setTransform(58.3,139.15);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_907.setTransform(58.375,139.575);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_908.setTransform(58.425,140.025);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhQQBRhQBxAAQByAABQBQQBRBQAABxQAAByhRBQQhQBRhyAAQhxAAhRhRQhQhQAAhyg");
	this.shape_909.setTransform(58.5,140.45);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh1BThUQBThTB1AAQB2AABUBTQBTBUAAB1QAAB2hTBTQhUBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_910.setTransform(58.55,140.9);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_911.setTransform(58.625,141.325);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_912.setTransform(58.7,141.75);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_913.setTransform(58.775,142.175);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_914.setTransform(58.85,142.625);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiKBhhhQBhhiCKAAQCLAABhBiQBiBhAACKQAACKhiBhQhhBiiLAAQiKAAhhhiQhhhhAAiKg");
	this.shape_915.setTransform(58.9,143.05);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_916.setTransform(58.975,143.475);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_917.setTransform(59.05,143.925);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_918.setTransform(59.125,144.375);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_919.setTransform(59.2,144.8);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_920.setTransform(59.25,145.225);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_921.setTransform(59.325,145.65);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_922.setTransform(59.4,146.1);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_923.setTransform(59.475,146.525);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h7CuAAQCvAAB7B7QB8B7AACuQAACvh8B7Qh7B8ivAAQiuAAh7h8Qh8h7AAivg");
	this.shape_924.setTransform(59.5,146.95);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_925.setTransform(59.575,147.375);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_926.setTransform(59.65,147.825);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_927.setTransform(59.725,148.275);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi+CHiHQCGiGC/AAQC/AACHCGQCHCHAAC+QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_928.setTransform(59.8,148.7);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_929.setTransform(59.85,149.125);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_930.setTransform(59.925,149.575);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCQQiQCPjLAAQjLAAiPiPQiPiQAAjLg");
	this.shape_931.setTransform(60,150);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCSQiSCTjPAAQjPAAiSiTQiSiSAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_932.setTransform(56.8,129.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_884}]}).to({state:[{t:this.shape_885}]},1).to({state:[{t:this.shape_886}]},1).to({state:[{t:this.shape_887}]},1).to({state:[{t:this.shape_888}]},1).to({state:[{t:this.shape_889}]},1).to({state:[{t:this.shape_890}]},1).to({state:[{t:this.shape_891}]},1).to({state:[{t:this.shape_892}]},1).to({state:[{t:this.shape_893}]},1).to({state:[{t:this.shape_894}]},1).to({state:[{t:this.shape_895}]},1).to({state:[{t:this.shape_896}]},1).to({state:[{t:this.shape_897}]},1).to({state:[{t:this.shape_898}]},1).to({state:[{t:this.shape_899}]},1).to({state:[{t:this.shape_900}]},1).to({state:[{t:this.shape_901}]},1).to({state:[{t:this.shape_902}]},1).to({state:[{t:this.shape_903}]},1).to({state:[{t:this.shape_904}]},1).to({state:[{t:this.shape_905}]},1).to({state:[{t:this.shape_906}]},1).to({state:[{t:this.shape_907}]},1).to({state:[{t:this.shape_908}]},1).to({state:[{t:this.shape_909}]},1).to({state:[{t:this.shape_910}]},1).to({state:[{t:this.shape_911}]},1).to({state:[{t:this.shape_912}]},1).to({state:[{t:this.shape_913}]},1).to({state:[{t:this.shape_914}]},1).to({state:[{t:this.shape_915}]},1).to({state:[{t:this.shape_916}]},1).to({state:[{t:this.shape_917}]},1).to({state:[{t:this.shape_918}]},1).to({state:[{t:this.shape_919}]},1).to({state:[{t:this.shape_920}]},1).to({state:[{t:this.shape_921}]},1).to({state:[{t:this.shape_922}]},1).to({state:[{t:this.shape_923}]},1).to({state:[{t:this.shape_924}]},1).to({state:[{t:this.shape_925}]},1).to({state:[{t:this.shape_926}]},1).to({state:[{t:this.shape_927}]},1).to({state:[{t:this.shape_928}]},1).to({state:[{t:this.shape_929}]},1).to({state:[{t:this.shape_930}]},1).to({state:[{t:this.shape_931}]},1).to({state:[{t:this.shape_932}]},1).to({state:[{t:this.shape_932}]},1).wait(1));

	// 平面波1
	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f().s("#000000").ss(0.5).p("AAeAAQAAANgJAIQgIAJgNAAQgMAAgIgJQgJgIAAgNQAAgMAJgJQAIgIAMAAQANAAAIAIQAJAJAAAMg");
	this.shape_933.setTransform(56.8,99.6);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f().s("#000000").ss(0.5).p("AgnAAQAAgPAMgMQALgMAQAAQAQAAAMAMQAMAMAAAPQAAARgMALQgMAMgQAAQgQAAgLgMQgMgLAAgRg");
	this.shape_934.setTransform(56.875,100.025);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f().s("#000000").ss(0.5).p("AgxAAQAAgUAOgOQAPgPAUAAQAUAAAOAPQAPAOAAAUQAAAVgPAOQgOAPgUAAQgUAAgPgPQgOgOAAgVg");
	this.shape_935.setTransform(56.95,100.475);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f().s("#000000").ss(0.5).p("Ag7AAQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAYgSASQgRARgZAAQgYAAgRgRQgSgSAAgYg");
	this.shape_936.setTransform(57,100.9);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f().s("#000000").ss(0.5).p("AhEAAQAAgcAUgUQAUgUAcAAQAdAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgdAAQgcAAgUgUQgUgUAAgdg");
	this.shape_937.setTransform(57.075,101.325);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f().s("#000000").ss(0.5).p("AhOAAQAAggAXgXQAXgXAgAAQAhAAAXAXQAXAXAAAgQAAAhgXAXQgXAXghAAQggAAgXgXQgXgXAAghg");
	this.shape_938.setTransform(57.15,101.775);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f().s("#000000").ss(0.5).p("AhYAAQAAgkAagaQAagaAkAAQAlAAAZAaQAbAaAAAkQAAAlgbAZQgZAbglAAQgkAAgagbQgagZAAglg");
	this.shape_939.setTransform(57.225,102.225);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f().s("#000000").ss(0.5).p("AhiAAQAAgoAdgdQAdgdAoAAQAoAAAdAdQAeAdAAAoQAAApgeAcQgdAdgoAAQgoAAgdgdQgdgcAAgpg");
	this.shape_940.setTransform(57.3,102.65);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f().s("#000000").ss(0.5).p("AhrAAQAAgsAfggQAggfAsAAQAtAAAgAfQAfAgAAAsQAAAtgfAfQggAggtAAQgsAAggggQgfgfAAgtg");
	this.shape_941.setTransform(57.325,103.075);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f().s("#000000").ss(0.5).p("Ah1AAQAAgwAigiQAjgjAwAAQAxAAAiAjQAjAiAAAwQAAAxgjAiQgiAjgxAAQgwAAgjgjQgigiAAgxg");
	this.shape_942.setTransform(57.4,103.5);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f().s("#000000").ss(0.5).p("Ah/AAQAAg0AlglQAmgmA0AAQA1AAAlAmQAmAlAAA0QAAA1gmAlQglAmg1AAQg0AAgmgmQglglAAg1g");
	this.shape_943.setTransform(57.475,103.95);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f().s("#000000").ss(0.5).p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_944.setTransform(57.55,104.375);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f().s("#000000").ss(0.5).p("AiSAAQAAg8ArgsQArgrA8AAQA+AAArArQArAsAAA8QAAA9grArQgrAsg+AAQg8AAgrgsQgrgrAAg9g");
	this.shape_945.setTransform(57.6,104.8);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f().s("#000000").ss(0.5).p("AicAAQAAhAAuguQAuguBAAAQBBAAAuAuQAuAuAABAQAABBguAuQguAuhBAAQhAAAguguQguguAAhBg");
	this.shape_946.setTransform(57.675,105.225);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f().s("#000000").ss(0.5).p("AimAAQAAhEAwgxQAxgxBFAAQBGAAAwAxQAxAxAABEQAABFgxAxQgwAxhGAAQhFAAgxgxQgwgxAAhFg");
	this.shape_947.setTransform(57.75,105.675);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f().s("#000000").ss(0.5).p("AiwAAQAAhJA0gzQA0g0BIAAQBJAAA0A0QA0AzAABJQAABJg0A0Qg0A0hJAAQhIAAg0g0Qg0g0AAhJg");
	this.shape_948.setTransform(57.825,106.125);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f().s("#000000").ss(0.5).p("Ai6AAQAAhNA3g2QA2g3BNAAQBNAAA3A3QA3A2AABNQAABNg3A3Qg3A2hNAAQhNAAg2g2Qg3g3AAhNg");
	this.shape_949.setTransform(57.9,106.55);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f().s("#000000").ss(0.5).p("AjEAAQAAhRA6g5QA6g5BQAAQBRAAA6A5QA6A5AABRQAABRg6A6Qg6A5hRAAQhQAAg6g5Qg6g6AAhRg");
	this.shape_950.setTransform(57.95,106.975);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f().s("#000000").ss(0.5).p("AjNAAQAAhVA8g8QA8g8BVAAQBVAAA9A8QA8A8AABVQAABVg8A9Qg9A8hVAAQhVAAg8g8Qg8g9AAhVg");
	this.shape_951.setTransform(58.025,107.425);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f().s("#000000").ss(0.5).p("AjXAAQAAhYA/hAQA/g/BZAAQBZAAA/A/QBABAAABYQAABahAA/Qg/A/hZAAQhZAAg/g/Qg/g/AAhag");
	this.shape_952.setTransform(58.1,107.85);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f().s("#000000").ss(0.5).p("AjhAAQAAhdBChCQBChCBdAAQBdAABCBCQBDBCAABdQAABehDBCQhCBChdAAQhdAAhChCQhChCAAheg");
	this.shape_953.setTransform(58.175,108.275);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f().s("#000000").ss(0.5).p("AjqAAQAAhhBEhFQBFhEBhAAQBiAABEBEQBFBFAABhQAABihFBEQhEBFhiAAQhhAAhFhFQhEhEAAhig");
	this.shape_954.setTransform(58.25,108.7);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f().s("#000000").ss(0.5).p("Aj0AAQAAhlBIhHQBHhIBlAAQBmAABIBIQBHBHAABlQAABmhHBIQhIBHhmAAQhlAAhHhHQhIhIAAhmg");
	this.shape_955.setTransform(58.3,109.15);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f().s("#000000").ss(0.5).p("Aj+AAQAAhpBKhKQBLhLBpAAQBqAABKBLQBLBKAABpQAABqhLBKQhKBLhqAAQhpAAhLhLQhKhKAAhqg");
	this.shape_956.setTransform(58.375,109.575);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f().s("#000000").ss(0.5).p("AkIAAQAAhtBOhOQBNhNBtAAQBuAABNBNQBOBOAABtQAABuhOBNQhNBOhuAAQhtAAhNhOQhOhNAAhug");
	this.shape_957.setTransform(58.425,110.025);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f().s("#000000").ss(0.5).p("AkSAAQAAhxBQhRQBRhQBxAAQByAABQBQQBRBRAABxQAAByhRBQQhQBRhyAAQhxAAhRhRQhQhQAAhyg");
	this.shape_958.setTransform(58.5,110.45);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f().s("#000000").ss(0.5).p("AkbAAQAAh2BThTQBThTB1AAQB2AABUBTQBTBTAAB2QAAB2hTBTQhUBTh2AAQh1AAhThTQhThTAAh2g");
	this.shape_959.setTransform(58.55,110.9);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f().s("#000000").ss(0.5).p("AklAAQAAh5BWhWQBWhWB5AAQB6AABWBWQBWBWAAB5QAAB6hWBWQhWBWh6AAQh5AAhWhWQhWhWAAh6g");
	this.shape_960.setTransform(58.625,111.325);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f().s("#000000").ss(0.5).p("AkvAAQAAh+BZhYQBZhZB9AAQB+AABZBZQBZBYAAB+QAAB+hZBZQhZBZh+AAQh9AAhZhZQhZhZAAh+g");
	this.shape_961.setTransform(58.7,111.75);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f().s("#000000").ss(0.5).p("Ak5AAQAAiBBchcQBchcCBAAQCCAABcBcQBcBcAACBQAACChcBcQhcBciCAAQiBAAhchcQhchcAAiCg");
	this.shape_962.setTransform(58.775,112.175);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f().s("#000000").ss(0.5).p("AlDAAQAAiFBfhfQBehfCGAAQCGAABfBfQBfBfAACFQAACGhfBfQhfBfiGAAQiGAAhehfQhfhfAAiGg");
	this.shape_963.setTransform(58.85,112.625);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f().s("#000000").ss(0.5).p("AlMAAQAAiKBhhhQBhhiCKAAQCLAABhBiQBiBhAACKQAACKhiBhQhhBiiLAAQiKAAhhhiQhhhhAAiKg");
	this.shape_964.setTransform(58.9,113.05);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f().s("#000000").ss(0.5).p("AlWAAQAAiNBkhlQBkhkCOAAQCOAABlBkQBkBlAACNQAACOhkBlQhlBkiOAAQiOAAhkhkQhkhlAAiOg");
	this.shape_965.setTransform(58.975,113.475);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f().s("#000000").ss(0.5).p("AlgAAQAAiSBohnQBmhnCSAAQCSAABoBnQBnBnAACSQAACShnBoQhoBniSAAQiSAAhmhnQhohoAAiSg");
	this.shape_966.setTransform(59.05,113.925);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f().s("#000000").ss(0.5).p("AlqAAQAAiWBqhqQBqhqCWAAQCWAABqBqQBrBqAACWQAACWhrBqQhqBriWAAQiWAAhqhrQhqhqAAiWg");
	this.shape_967.setTransform(59.125,114.375);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f().s("#000000").ss(0.5).p("Al0AAQAAiaBthtQBthtCaAAQCaAABtBtQBuBtAACaQAACahuBtQhtBuiaAAQiaAAhthuQhthtAAiag");
	this.shape_968.setTransform(59.2,114.8);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f().s("#000000").ss(0.5).p("Al+AAQAAieBwhvQBwhwCeAAQCeAABxBwQBwBvAACeQAACehwBwQhxBwieAAQieAAhwhwQhwhwAAieg");
	this.shape_969.setTransform(59.25,115.225);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f().s("#000000").ss(0.5).p("AmHAAQAAiiBzhzQByhyCiAAQCiAABzByQBzBzAACiQAACjhzBzQhzByiiAAQiiAAhyhyQhzhzAAijg");
	this.shape_970.setTransform(59.325,115.65);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f().s("#000000").ss(0.5).p("AmRAAQAAimB1h2QB2h1CmAAQCnAAB1B1QB2B2AACmQAACmh2B2Qh1B2inAAQimAAh2h2Qh1h2AAimg");
	this.shape_971.setTransform(59.4,116.1);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f().s("#000000").ss(0.5).p("AmbAAQAAiqB5h4QB4h5CqAAQCqAAB5B5QB5B4AACqQAACrh5B4Qh5B5iqAAQiqAAh4h5Qh5h4AAirg");
	this.shape_972.setTransform(59.475,116.525);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f().s("#000000").ss(0.5).p("AmlAAQAAiuB8h7QB7h7CuAAQCvAAB7B7QB8B7AACuQAACvh8B7Qh7B8ivAAQiuAAh7h8Qh8h7AAivg");
	this.shape_973.setTransform(59.5,116.95);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f().s("#000000").ss(0.5).p("AmuAAQAAiyB+h+QB+h+CyAAQCzAAB+B+QB+B+AACyQAACzh+B+Qh+B+izAAQiyAAh+h+Qh+h+AAizg");
	this.shape_974.setTransform(59.575,117.375);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f().s("#000000").ss(0.5).p("Am4AAQAAi2CBiBQCBiBC2AAQC3AACBCBQCBCBAAC2QAAC3iBCBQiBCBi3AAQi2AAiBiBQiBiBAAi3g");
	this.shape_975.setTransform(59.65,117.825);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f().s("#000000").ss(0.5).p("AnCAAQAAi6CEiEQCEiEC6AAQC7AACECEQCECEAAC6QAAC7iECEQiECEi7AAQi6AAiEiEQiEiEAAi7g");
	this.shape_976.setTransform(59.725,118.275);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f().s("#000000").ss(0.5).p("AnMAAQAAi/CHiGQCGiHC/AAQC/AACHCHQCHCGAAC/QAAC/iHCHQiHCHi/AAQi/AAiGiHQiHiHAAi/g");
	this.shape_977.setTransform(59.8,118.7);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f().s("#000000").ss(0.5).p("AnWAAQAAjCCKiKQCKiJDCAAQDDAACKCJQCKCKAADCQAADDiKCKQiKCJjDAAQjCAAiKiJQiKiKAAjDg");
	this.shape_978.setTransform(59.85,119.125);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f().s("#000000").ss(0.5).p("AnfAAQAAjHCMiMQCNiMDGAAQDHAACNCMQCMCMAADHQAADHiMCMQiNCNjHAAQjGAAiNiNQiMiMAAjHg");
	this.shape_979.setTransform(59.925,119.575);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f().s("#000000").ss(0.5).p("AnpAAQAAjKCPiQQCPiPDLAAQDLAACQCPQCPCQAADKQAADLiPCQQiQCPjLAAQjLAAiPiPQiPiQAAjLg");
	this.shape_980.setTransform(60,120);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f().s("#000000").ss(0.5).p("AH0AAQAADPiTCSQiSCTjPAAQjPAAiSiTQiSiSAAjPQAAjPCSiRQCSiTDPAAQDPAACSCTQCTCRAADPg");
	this.shape_981.setTransform(56.8,99.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_933}]}).to({state:[{t:this.shape_934}]},1).to({state:[{t:this.shape_935}]},1).to({state:[{t:this.shape_936}]},1).to({state:[{t:this.shape_937}]},1).to({state:[{t:this.shape_938}]},1).to({state:[{t:this.shape_939}]},1).to({state:[{t:this.shape_940}]},1).to({state:[{t:this.shape_941}]},1).to({state:[{t:this.shape_942}]},1).to({state:[{t:this.shape_943}]},1).to({state:[{t:this.shape_944}]},1).to({state:[{t:this.shape_945}]},1).to({state:[{t:this.shape_946}]},1).to({state:[{t:this.shape_947}]},1).to({state:[{t:this.shape_948}]},1).to({state:[{t:this.shape_949}]},1).to({state:[{t:this.shape_950}]},1).to({state:[{t:this.shape_951}]},1).to({state:[{t:this.shape_952}]},1).to({state:[{t:this.shape_953}]},1).to({state:[{t:this.shape_954}]},1).to({state:[{t:this.shape_955}]},1).to({state:[{t:this.shape_956}]},1).to({state:[{t:this.shape_957}]},1).to({state:[{t:this.shape_958}]},1).to({state:[{t:this.shape_959}]},1).to({state:[{t:this.shape_960}]},1).to({state:[{t:this.shape_961}]},1).to({state:[{t:this.shape_962}]},1).to({state:[{t:this.shape_963}]},1).to({state:[{t:this.shape_964}]},1).to({state:[{t:this.shape_965}]},1).to({state:[{t:this.shape_966}]},1).to({state:[{t:this.shape_967}]},1).to({state:[{t:this.shape_968}]},1).to({state:[{t:this.shape_969}]},1).to({state:[{t:this.shape_970}]},1).to({state:[{t:this.shape_971}]},1).to({state:[{t:this.shape_972}]},1).to({state:[{t:this.shape_973}]},1).to({state:[{t:this.shape_974}]},1).to({state:[{t:this.shape_975}]},1).to({state:[{t:this.shape_976}]},1).to({state:[{t:this.shape_977}]},1).to({state:[{t:this.shape_978}]},1).to({state:[{t:this.shape_979}]},1).to({state:[{t:this.shape_980}]},1).to({state:[{t:this.shape_981}]},1).to({state:[{t:this.shape_981}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(264,211,264.29999999999995,211.10000000000002);
// library properties:
lib.properties = {
	id: '7F3B2428F23D4C15AF99BC089A3CF133',
	width: 528,
	height: 422,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wave_26020101_atlas_1.png", id:"wave_26020101_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7F3B2428F23D4C15AF99BC089A3CF133'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
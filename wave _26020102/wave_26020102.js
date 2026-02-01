(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"wave_26020102_atlas_1", frames: [[0,0,722,722],[386,724,374,315],[0,724,384,341]]}
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



(lib.CachedBmp_19 = function() {
	this.initialize(ss["wave_26020102_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["wave_26020102_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["wave_26020102_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.wave_26020102 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [97];
	// timeline functions:
	this.frame_97 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(97).call(this.frame_97).wait(96));

	// レイヤー_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AviSwIAA3GMAuvAAAIAAXGg");
	var mask_graphics_96 = new cjs.Graphics().p("AvsSwIAA+iMAuvAAAIAAeig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:199.6609,y:119.9974}).wait(96).to({graphics:mask_graphics_96,x:198.7109,y:119.9963}).wait(97));

	// 波面
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AuWMDIct4F");
	this.shape.setTransform(211.9,162.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3.9).p("AuWMDIct4F");
	this.shape_1.setTransform(221.55,174.325);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3.8).p("AuWMDIct4F");
	this.shape_2.setTransform(232.4,187.225);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3.7).p("AuWMDIct4F");
	this.shape_3.setTransform(244.45,201.575);
	this.shape_3._off = true;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3.6).p("AuWMDIct4F");
	this.shape_4.setTransform(256.475,215.975);
	this.shape_4._off = true;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(3.5).p("AuWMDIct4F");
	this.shape_5.setTransform(267.325,228.875);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3.4).p("AuWMDIct4F");
	this.shape_6.setTransform(279.375,243.225);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(3.3).p("AuWMDIct4F");
	this.shape_7.setTransform(290.225,256.175);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(3.2).p("AuWMDIct4F");
	this.shape_8.setTransform(302.275,270.525);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(3.1).p("AuWMDIct4F");
	this.shape_9.setTransform(314.325,284.875);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(3).p("AuWMDIct4F");
	this.shape_10.setTransform(325.175,297.825);

	this.instance = new lib.CachedBmp_18();
	this.instance.setTransform(234.15,222.05,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_17();
	this.instance_1.setTransform(207.95,69.3,0.5,0.5);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10,p:{x:325.175,y:297.825}}]},1).to({state:[{t:this.shape_10,p:{x:326.375,y:299.225}}]},1).to({state:[{t:this.shape_10,p:{x:327.575,y:300.675}}]},1).to({state:[{t:this.instance_1},{t:this.instance}]},1).to({state:[]},1).wait(95));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:213.1,y:164.275},0).wait(1).to({x:214.3,y:165.675},0).wait(1).to({x:215.5,y:167.125},0).wait(1).to({x:216.7,y:168.575},0).wait(1).to({x:217.925,y:170.025},0).wait(1).to({x:219.15,y:171.425},0).wait(1).to({x:220.35,y:172.875},0).to({_off:true},1).wait(185));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(8).to({_off:false},0).wait(1).to({x:222.75,y:175.725},0).wait(1).to({x:223.95,y:177.175},0).wait(1).to({x:225.15,y:178.625},0).wait(1).to({x:226.35,y:180.075},0).wait(1).to({x:227.55,y:181.475},0).wait(1).to({x:228.75,y:182.925},0).wait(1).to({x:229.975,y:184.375},0).wait(1).to({x:231.2,y:185.825},0).to({_off:true},1).wait(176));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(17).to({_off:false},0).wait(1).to({x:233.6,y:188.675},0).wait(1).to({x:234.8,y:190.125},0).wait(1).to({x:236,y:191.525},0).wait(1).to({x:237.2,y:192.975},0).wait(1).to({x:238.4,y:194.425},0).wait(1).to({x:239.6,y:195.875},0).wait(1).to({x:240.825,y:197.275},0).wait(1).to({x:242.025,y:198.725},0).wait(1).to({x:243.225,y:200.175},0).to({_off:true},1).wait(166));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(27).to({_off:false},0).wait(1).to({x:245.65,y:203.025},0).wait(1).to({x:246.85,y:204.475},0).wait(1).to({x:248.05,y:205.925},0).wait(1).to({x:249.25,y:207.325},0).wait(1).to({x:250.45,y:208.775},0).wait(1).to({x:251.65,y:210.225},0).wait(1).to({x:252.875,y:211.625},0).wait(1).to({x:254.075,y:213.075},0).wait(1).to({x:255.275,y:214.525},0).to({_off:true},1).wait(156));
	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(37).to({_off:false},0).wait(1).to({x:257.7,y:217.375},0).wait(1).to({x:258.9,y:218.825},0).wait(1).to({x:260.1,y:220.275},0).wait(1).to({x:261.3,y:221.675},0).wait(1).to({x:262.5,y:223.125},0).wait(1).to({x:263.7,y:224.575},0).wait(1).to({x:264.925,y:226.025},0).wait(1).to({x:266.125,y:227.425},0).to({_off:true},1).wait(147));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(46).to({_off:false},0).wait(1).to({x:268.525,y:230.325},0).wait(1).to({x:269.75,y:231.775},0).wait(1).to({x:270.95,y:233.175},0).wait(1).to({x:272.15,y:234.625},0).wait(1).to({x:273.35,y:236.075},0).wait(1).to({x:274.55,y:237.475},0).wait(1).to({x:275.775,y:238.925},0).wait(1).to({x:276.975,y:240.375},0).wait(1).to({x:278.175,y:241.825},0).to({_off:true},1).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(56).to({_off:false},0).wait(1).to({x:280.575,y:244.675},0).wait(1).to({x:281.775,y:246.125},0).wait(1).to({x:283,y:247.525},0).wait(1).to({x:284.2,y:248.975},0).wait(1).to({x:285.4,y:250.425},0).wait(1).to({x:286.6,y:251.875},0).wait(1).to({x:287.825,y:253.275},0).wait(1).to({x:289.025,y:254.725},0).to({_off:true},1).wait(128));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(65).to({_off:false},0).wait(1).to({x:291.425,y:257.575},0).wait(1).to({x:292.625,y:259.025},0).wait(1).to({x:293.825,y:260.475},0).wait(1).to({x:295.025,y:261.925},0).wait(1).to({x:296.25,y:263.325},0).wait(1).to({x:297.45,y:264.775},0).wait(1).to({x:298.675,y:266.225},0).wait(1).to({x:299.875,y:267.625},0).wait(1).to({x:301.075,y:269.075},0).to({_off:true},1).wait(118));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(75).to({_off:false},0).wait(1).to({x:303.475,y:271.975},0).wait(1).to({x:304.675,y:273.375},0).wait(1).to({x:305.875,y:274.825},0).wait(1).to({x:307.075,y:276.275},0).wait(1).to({x:308.275,y:277.675},0).wait(1).to({x:309.5,y:279.125},0).wait(1).to({x:310.725,y:280.575},0).wait(1).to({x:311.925,y:282.025},0).wait(1).to({x:313.125,y:283.425},0).to({_off:true},1).wait(108));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(85).to({_off:false},0).wait(1).to({x:315.525,y:286.325},0).wait(1).to({x:316.725,y:287.775},0).wait(1).to({x:317.925,y:289.175},0).wait(1).to({x:319.125,y:290.625},0).wait(1).to({x:320.325,y:292.075},0).wait(1).to({x:321.55,y:293.475},0).wait(1).to({x:322.775,y:294.925},0).wait(1).to({x:323.975,y:296.375},0).to({_off:true},1).wait(99));

	// 波7
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_11.setTransform(399.9,240);

	this.instance_2 = new lib.CachedBmp_19();
	this.instance_2.setTransform(219.4,59.5,0.5,0.5);

	var maskedShapeInstanceList = [this.shape_11,this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11}]},96).to({state:[{t:this.instance_2}]},96).wait(1));

	// 波6
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgKAAgHgHQgHgIAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKg");
	this.shape_12.setTransform(353.25,240);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("AgpAAQAAgRANgLQALgNARAAQASAAAMANQAMALAAARQAAARgMAMQgMANgSAAQgRAAgLgNQgNgMAAgRg");
	this.shape_13.setTransform(353.25,240);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("Ag6AAQAAgXARgSQASgRAXAAQAYAAATARQAQASAAAXQAAAYgQASQgTARgYAAQgXAAgSgRQgRgSAAgYg");
	this.shape_14.setTransform(353.25,240);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").p("AhLAAQAAgfAWgWQAWgXAfAAQAgAAAWAXQAWAWAAAfQAAAggWAWQgWAXggAAQgfAAgWgXQgWgWAAggg");
	this.shape_15.setTransform(353.25,240);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmQAAAmgcAcQgbAcgnAAQgmAAgbgcQgcgcAAgmg");
	this.shape_16.setTransform(353.275,240.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AhuAAQAAgtAgggQAhghAtAAQAuAAAhAhQAgAgAAAtQAAAuggAgQghAhguAAQgtAAghghQggggAAgug");
	this.shape_17.setTransform(353.25,240);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_18.setTransform(353.25,240);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("AiRAAQAAg8ArgqQArgrA7AAQA8AAArArQArAqAAA8QAAA8grArQgrArg8AAQg7AAgrgrQgrgrAAg8g");
	this.shape_19.setTransform(353.25,240);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("AiiAAQAAhDAxguQAvgxBCAAQBEAAAvAxQAwAuAABDQAABDgwAwQgvAwhEAAQhCAAgvgwQgxgwAAhDg");
	this.shape_20.setTransform(353.25,240);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AiyAAQAAhJA0g1QA1g0BJAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKAAQhJAAg1g0Qg0g1AAhKg");
	this.shape_21.setTransform(353.25,240);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA6g6BQAAQBRAAA6A6QA6A5AABRQAABSg6A5Qg6A6hRAAQhQAAg6g6Qg6g5AAhSg");
	this.shape_22.setTransform(353.25,240);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA+g/BYAAQBZAAA+A/QA/A+AABYQAABYg/A/Qg+A/hZAAQhYAAg+g/Qg/g/AAhYg");
	this.shape_23.setTransform(353.25,240);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBfAABEBDQBEBEAABfQAABfhEBEQhEBEhfAAQhfAAhEhEQhDhEAAhfg");
	this.shape_24.setTransform(353.275,240.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").p("Aj4AAQAAhmBJhJQBJhIBmAAQBnAABJBIQBJBJAABmQAABnhJBJQhJBJhnAAQhmAAhJhJQhJhJAAhng");
	this.shape_25.setTransform(353.25,240);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("AkJAAQAAhtBOhOQBOhOBtAAQBuAABOBOQBOBOAABtQAABuhOBOQhOBOhuAAQhtAAhOhOQhOhOAAhug");
	this.shape_26.setTransform(353.25,240);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBThTB0AAQB1AABTBTQBTBSAAB1QAAB1hTBTQhTBTh1AAQh0AAhThTQhThTAAh1g");
	this.shape_27.setTransform(353.25,240);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape_28.setTransform(353.25,240);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("Ak+AAQAAhCAYg4QAYg4AtgvQAugtA2gXQA6gYBDAAQBCAAA5AWQA3AXAuAuQAvAwAXA2QAZA5AABDQAABEgZA4QgXA3gtAuQgBABgBAAQgtAtg3AYQg5AYhDAAQAAAAAAAAQhDAAg4gYQg3gYgugtQgugvgXg2QgZg5AAhEg");
	this.shape_29.setTransform(353.25,240);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AlRAAQAAhGAag8QAZg7AwgwQAwgwA6gZQA+gbBGAAQBGAAA8AZQA7AZAvAvQAyAyAZA7QAbA9AABGQgBBHgaA9QgZA7gvAwQgBAAAAAAQgxAwg6AZQg8AahHAAQAAAAAAAAQhGgBg8gZQg7gZgxgwQgwgxgYg6Qgbg9AAhHg");
	this.shape_30.setTransform(353.25,240);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").p("AlkAAQAAhJAbhAQAbg/AzgzQAygyA9gaQBBgdBLAAQBKABA/AaQA+AaAzAzQA0A0AbA+QAbBAAABKQAABLgbBAQgbA+gyAyQgBABAAABQgzAyg+AaQhAAbhKAAQAAAAAAAAQhKAAhAgbQg+gagzgzQgzgzgag+QgbhAgBhLg");
	this.shape_31.setTransform(353.25,240);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("Al2AAQAAhNAdhEQAbhCA2g1QA1g1BAgcQBFgdBOAAQBOAABDAcQBBAbA1A1QA4A3AbBBQAdBEAABOQgBBOgcBEQgbBBg1A2QgCABAAAAQg1A1hBAbQhDAdhOAAQgBAAAAAAQhOgBhDgcQhBgbg2g1Qg2g3gbhAQgdhFAAhOg");
	this.shape_32.setTransform(353.25,240);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBRAABHAdQBEAdA4A4QA6A6AdBEQAeBHABBSQgBBSgeBHQgdBFg4A4QAAAAgBABQg4A3hEAeQhHAdhSABQAAAAAAAAQhSgBhGgdQhFgeg4g4Qg5g4gdhEQgehIAAhSg");
	this.shape_33.setTransform(353.275,240.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("AmcAAQAAhVAghKQAehJA8g7QA6g5BHgfQBMghBVAAQBWAABJAfQBIAeA6A7QA9A8AfBHQAgBLAABWQgBBWgfBLQgfBIg6A6QgBABAAABQg7A6hHAeQhLAghVAAQgBAAAAAAQhVgBhLgfQhIgeg6g7Qg8g7gehIQgghKAAhXg");
	this.shape_34.setTransform(353.25,240);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").p("AmuAAQAAhYAghOQAhhMA9g+QA9g9BLggQBOghBaAAQBZAABNAgQBMAgA9A8QA/BAAgBLQAhBOAABZQAABaghBOQggBMg8A8QgCABAAABQg9A8hLAhQhOAghZAAQgBAAAAAAQhZAAhOggQhLghg9g9Qg+g9gghLQghhPAAhag");
	this.shape_35.setTransform(353.25,240);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").p("AnBAAQAAhcAihRQAihQBAhAQBAhABOggQBSgkBdAAQBdAABRAiQBPAhA/A/QBCBCAhBOQAjBSAABdQgBBegiBSQghBOg/BAQgBABgBAAQg/A/hPAiQhRAihdAAQgBAAAAAAQhdgBhRghQhPghhAhAQhAhBghhOQgjhSAAheg");
	this.shape_36.setTransform(353.25,240);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBChEQBDhCBRgiQBWglBhAAQBhABBUAjQBSAiBCBCQBEBEAjBSQAkBVABBhQgBBigkBVQgjBRhBBDQgBAAgBACQhCBBhSAjQhVAkhgAAQgBAAAAAAQhhAAhUgkQhTgjhChCQhDhEgjhRQgkhVAAhig");
	this.shape_37.setTransform(353.25,240);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("AnnAAQAAhkAmhYQAkhXBGhEQBEhFBVgkQBagnBkAAQBlAABYAlQBVAlBFBDQBHBHAjBVQAnBZAABlQgBBmgmBYQgjBWhEBEQgCAAAAACQhFBEhWAkQhYAmhkAAQgBAAAAAAQhkgBhYglQhWgkhFhFQhGhFgjhVQgnhZAAhmg");
	this.shape_38.setTransform(353.25,240);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").p("An5AAQAAhnAmhdQAnhZBHhIQBIhHBXgmQBdgnBpAAQBoAABcAmQBZAlBHBIQBJBJAmBYQAnBcAABpQAABpgnBcQgmBZhGBHQgBABgBABQhHBGhZAnQhcAmhoAAQgBAAAAAAQhoAAhcgmQhZgmhIhHQhHhJgmhYQgnhdAAhpg");
	this.shape_39.setTransform(353.25,240);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").p("AoMAAQAAhrAphfQAmheBLhKQBKhKBbgnQBhgpBsAAQBtAABeAoQBdAmBJBKQBMBMAnBcQApBgAABsQgBBtgoBfQgmBchKBKQgBABAAABQhLBKhcAmQhfAphsAAQgBAAAAAAQhsgBhfgoQhcgmhLhLQhLhLgmhbQgphgAAhtg");
	this.shape_40.setTransform(353.25,240);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAohhBNhMQBNhNBfgoQBkgrBwAAQBwAABiApQBgApBMBMQBPBOAoBfQAqBkABBwQgBBxgqBjQgoBghMBMQgBAAgBACQhMBLhgApQhiAqhwAAQgBAAAAAAQhwAAhjgqQhfgphNhMQhOhNgohgQgqhjAAhxg");
	this.shape_41.setTransform(353.25,240);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").p("AoyAAQAAhzAshmQAqhkBPhQQBPhPBigqQBogsB0AAQB0AABmAsQBjApBPBPQBRBRAqBjQAsBmAAB0QgBB1grBmQgqBjhOBOQgBACgBABQhPBOhjAqQhnArhzABQAAAAgBAAQhzgBhngrQhjgphPhPQhQhRgqhjQgshmAAh1g");
	this.shape_42.setTransform(353.25,240);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABpAsQBmArBSBRQBUBUArBmQAtBqAAB4QAAB4gtBqQgrBmhRBSQgBABgBABQhSBRhmArQhqAth3AAQgBAAAAAAQh3AAhqgtQhngrhRhSQhThSgrhmQgthrAAh4g");
	this.shape_43.setTransform(353.275,240.025);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("ApXAAQAAh6AuhuQAthqBVhVQBVhUBogtQBvgvB7AAQB8AABtAuQBqAtBUBTQBWBXAtBpQAuBuAAB7QgBB8gtBuQgtBphTBUQgCABAAABQhVBUhpAtQhuAth7ABQAAAAgBAAQh7gBhugtQhpgthVhUQhVhWgthpQguhuAAh8g");
	this.shape_44.setTransform(353.25,240);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").p("ApqAAQAAh/AwhxQAvhuBWhXQBYhWBsguQBygxB/AAQCAAABwAvQBtAuBXBXQBYBZAvBsQAwByAAB/QAACAgwBxQgvBthVBWQgBABgCABQhWBWhtAvQhxAwh/AAQAAAAgBAAQh/AAhxgwQhsguhXhWQhYhZgvhtQgwhxAAiAg");
	this.shape_45.setTransform(353.25,240);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").p("Ap9AAQAAiDAyh0QAvhxBahaQBahZBwgwQB1gyCDAAQCDAAB0AxQBwAwBaBYQBcBcAvBwQAyB1AACDQgBCEgxB1QgvBwhZBYQgBACgBAAQhZBahxAvQh0AxiCABQgBAAgBAAQiCgBh1gxQhxgvhYhaQhchagvhwQgyh1AAiEg");
	this.shape_46.setTransform(353.25,240);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").p("AqQAAQAAiGAzh4QAxh1BdhcQBchcBzgwQB5g1CHAAQCHABB3AyQB0AxBcBbQBeBeAxB0QAzB4AACHQAACIgzB4QgxBzhbBcQgBABgBABQhcBbh0AyQh3AyiGAAQgCAAAAAAQiHAAh3gyQh0gyhchbQhehegwhzQgzh4gBiIg");
	this.shape_47.setTransform(353.25,240);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("AqiAAQAAiKA0h7QAzh5BfheQBfhfB2gyQB9g1CKAAQCLABB7AzQB3AyBfBfQBgBgAzB3QA0B7AACLQgBCLgzB8QgzB3hdBeQgBABgCABQheBeh3AzQh8AziJABQgBAAgBAAQiKgBh8gzQh2gyhfheQhghggzh3Qg0h9AAiLg");
	this.shape_48.setTransform(353.25,240);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").p("Aq1AAQAAiOA2h+QA0h8BhhiQBihhB6gzQB/g3CPAAQCPAAB+A1QB7A0BhBhQBjBjAzB6QA3CAAACNQAACQg3B/QgzB7hgBgQgBABgBABQhhBhh7A0Qh+A2iOAAQgBAAgBAAQiOAAh/g2Qh7g0hghhQhjhigzh6Qg3iAAAiPg");
	this.shape_49.setTransform(353.25,240);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("ArIAAQAAiSA3iCQA2h/BkhkQBlhkB8g1QCEg4CSAAQCTABCBA2QB+A2BkBjQBlBmA2B9QA3CCAACSQAACUg3CDQg1B9hjBjQgBACgBAAQhkBkh+A2QiCA2iRABQgCAAAAAAQiSgBiCg2Qh+g2hkhjQhlhlg1h+Qg4iDAAiTg");
	this.shape_50.setTransform(353.25,240);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").p("ArbAAQAAiWA5iFQA3iCBnhnQBnhmCAg3QCHg6CWAAQCWABCFA4QCCA2BmBmQBoBpA3CAQA5CGAACWQAACYg5CGQg3CBhkBmQgCAAgBACQhmBliCA3QiFA5iVAAQgBAAgBAAQiWAAiGg5QiBg2hmhmQhohog2iBQg5iGgBiXg");
	this.shape_51.setTransform(353.25,240);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA4iFBqhqQBphoCEg4QCKg7CaAAQCaABCJA5QCFA4BpBoQBqBsA4CDQA6CKABCZQgBCbg6CKQg4CEhnBpQgBABgCABQhpBpiFA4QiIA5iZABQgBAAgBAAQiagBiJg5QiFg4hohpQhrhqg4iEQg6iLAAiag");
	this.shape_52.setTransform(353.25,240);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA5iJBshsQBthrCGg6QCOg8CeAAQCeAACMA7QCIA6BsBrQBtBuA5CHQA8CNABCdQgBCfg8CNQg5CIhqBqQgBACgBABQhsBriIA6QiMA7idABQgBAAgBAAQidgBiNg7QiIg6hrhqQhuhug5iIQg8iNAAieg");
	this.shape_53.setTransform(353.275,240.025);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").p("AsTAAQAAihA9iQQA8iNBuhuQBvhuCKg7QCSg+ChAAQCiABCPA8QCMA7BuBuQBwBwA7CLQA9CQAAChQAACjg9CQQg7CMhsBtQgCABgBACQhuBtiMA7QiQA9igABQgBAAgBAAQihgBiRg9QiLg6huhuQhvhwg7iLQg+iRAAiig");
	this.shape_54.setTransform(353.25,240);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").p("AslAAQAAilA+iTQA9iQBxhxQByhxCNg8QCVg/ClAAQCmAACTA+QCPA8BxBwQByBzA8CPQA/CTAAClQAACng/CUQg8COhvBwQgBABgCACQhxBwiOA9QiUA+ijAAQgCAAgBAAQilAAiUg+QiOg8hxhxQhyhyg8iPQg/iUAAimg");
	this.shape_55.setTransform(353.25,240);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTB0h0QB0hzCRg9QCYhBCpAAQCqABCWA/QCTA+BzBzQB1B1A9CRQBACXABCpQgBCqhACYQg9CShyByQgBACgCABQhzBziSA+QiXA/inABQgCAAgBAAQipgBiXg/QiSg+hzhyQh1h1g+iTQhAiYAAipg");
	this.shape_56.setTransform(353.25,240);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").p("AtLAAQAAisBCibQA/iWB2h3QB3h1CUhAQCchCCtAAQCtAACaBBQCWBAB2B1QB3B4BACVQBBCbABCsQgBCuhBCcQg/CVh0B0QgCACgBACQh2B0iWBAQiaBBirABQgCAAgBAAQisAAibhCQiWg/h1h1Qh4h3g/iWQhCibAAiug");
	this.shape_57.setTransform(353.25,240);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("AteAAQAAiwBDifQBBiZB5h5QB6h5CXg/QCghFCwAAQCxABCeBCQCZBBB4B4QB6B7BBCXQBDCfAACwQAACyhDCfQhBCYh2B4QgCABgBACQh4B4iaBBQidBCivABQgCAAgBAAQiwgBifhCQiYhBh4h4Qh7h6hAiZQhEieAAiyg");
	this.shape_58.setTransform(353.25,240);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").p("AtwAAQAAi0BEiiQBDidB7h7QB8h7CbhCQCjhFC0AAQC1AAChBEQCdBCB7B7QB8B9BDCcQBEChAAC0QAAC2hECiQhDCch4B6QgCACgBABQh8B6icBDQihBEizAAQgCAAgBAAQi0AAiihEQichDh6h6Qh9h8hDicQhEijAAi1g");
	this.shape_59.setTransform(353.25,240);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB+h+QB+h9CehDQCnhHC4AAQC5ABCkBFQCgBDB+B9QB/CABDCfQBGClABC4QgBC5hGCnQhDCeh7B9QgCACgBABQh+B9igBEQilBFi2ABQgCAAgBAAQi4gBilhFQighDh9h9Qh/h/hEigQhGimAAi5g");
	this.shape_60.setTransform(353.25,240);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCAh/QCCiBChhFQCqhIC8AAQC9AACoBHQCjBFCACAQCCCCBFCjQBHCpABC7QgBC+hHCpQhFCih+B/QgCACgBACQiAB/ikBFQioBHi6ABQgCAAgBAAQi8AAiphIQiihEiAiAQiCiChFijQhIipAAi9g");
	this.shape_61.setTransform(353.25,240);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").p("AupAAQAAi/BJisQBHioCDiDQCEiDClhGQCthKDAAAQDBABCrBJQCnBGCDCCQCECFBGClQBJCtAAC/QAADBhJCtQhGCmiBCCQgBABgCACQiDCCinBGQirBJi+ABQgCAAgBAAQi/gBithJQimhGiCiCQiFiEhGimQhKitAAjBg");
	this.shape_62.setTransform(353.25,240);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCphHQCxhLDDAAQDEAACvBKQCqBICGCEQCHCIBHCpQBLCwAADDQAADFhLCwQhHCpiDCEQgCACgCACQiFCEiqBIQivBKjCABQgCAAgBAAQjDAAiwhLQiqhHiEiEQiIiIhIiqQhKiwAAjEg");
	this.shape_63.setTransform(353.275,240.025);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBJivCJiHQCJiJCrhJQC1hMDHAAQDIABCyBLQCuBJCICHQCJCKBJCtQBMCzABDHQgBDIhMC0QhICtiGCGQgCADgBABQiICIiuBJQiyBLjGABQgCAAgBAAQjHgBi0hLQishJiIiHQiKiKhJitQhMi0AAjIg");
	this.shape_64.setTransform(353.25,240);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").p("AvhAAQAAjKBOi4QBLixCKiLQCMiLCvhKQC4hODLAAQDMAAC2BNQCxBLCKCKQCMCNBLCvQBOC3AADKQAADOhOC3QhLCwiHCJQgCABgCACQiKCKiyBLQi1BNjJABQgDAAgBAAQjLAAi2hOQixhLiKiJQiMiMhLixQhOi3AAjMg");
	this.shape_65.setTransform(353.25,240);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").p("Av0AAQAAjOBPi7QBNi1CNiNQCOiOCzhLQC7hQDPAAQDQABC5BOQC1BMCNCNQCOCPBMC0QBPC6AADNQAADRhPC7QhMCziKCMQgCACgCABQiNCNi0BNQi6BOjMABQgDAAgBAAQjOgBi7hOQi0hMiMiMQiPiQhMi0QhQi6AAjQg");
	this.shape_66.setTransform(353.25,240);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").p("AwHAAQAAjSBRi+QBOi5CQiPQCRiQC2hNQC/hSDSAAQDUABC8BQQC4BNCQCPQCRCTBNC2QBRC9AADSQAADVhRC+QhNC3iNCOQgCACgCACQiPCPi4BOQi9BQjQAAQgDAAgBAAQjSAAi+hQQi3hNiPiPQiSiRhOi5QhQi+gBjTg");
	this.shape_67.setTransform(353.25,240);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBPi8CTiTQCUiSC5hPQDChSDWAAQDYAADABSQC8BPCRCRQCUCVBPC6QBSDBAADVQAADZhSDCQhPC5iPCRQgCACgCACQiSCSi7BPQjBBSjUAAQgCAAgCAAQjVAAjDhSQi5hPiSiRQiViUhPi7QhSjBAAjYg");
	this.shape_68.setTransform(353.25,240);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").p("AwsAAQAAjZBTjGQBSi/CUiVQCXiVC8hQQDGhUDaAAQDbABDFBSQC+BRCVCUQCWCXBQC9QBTDFABDZQAADdhUDFQhQC9iSCUQgCABgBACQiWCUi+BSQjEBSjYABQgCAAgCAAQjaAAjFhTQi+hRiUiTQiWiYhRi+QhUjFAAjbg");
	this.shape_69.setTransform(353.25,240);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").p("Aw/AAQAAjeBVjIQBSjDCYiXQCZiYDAhRQDJhWDeAAQDgABDHBUQDBBSCYCXQCZCZBSDBQBUDIABDdQAADhhVDJQhSDAiVCWQgBACgCABQiYCYjCBSQjHBTjcACQgCAAgCAAQjeAAjIhVQjBhSiWiWQibiZhSjCQhUjJgBjfg");
	this.shape_70.setTransform(353.25,240);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").p("AxSAAQAAjhBXjNQBTjGCbiaQCbiaDDhSQDNhYDiAAQDjABDLBWQDFBTCaCaQCbCcBTDEQBWDLABDhQAADkhXDNQhSDDiYCZQgCACgBACQiaCZjGBUQjLBWjfAAQgCAAgCAAQjhAAjNhWQjEhTiZiZQidichTjFQhWjNgBjig");
	this.shape_71.setTransform(353.25,240);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCcidQCfidDGhUQDRhYDlAAQDnAADPBXQDIBVCcCcQCfCfBUDIQBYDOAADlQAADohYDQQhUDHiaCcQgCABgCACQicCcjJBVQjPBXjjABQgCAAgCAAQjlAAjQhYQjIhUibibQififhVjJQhYjPAAjng");
	this.shape_72.setTransform(353.25,240);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").p("Ax3AAQAAjpBZjTQBXjNCfifQChigDKhVQDUhaDpAAQDrABDRBYQDNBWCfCfQCgCiBWDKQBZDSABDpQgBDrhZDUQhWDKicCeQgCACgCACQifCfjMBWQjSBZjnABQgCAAgCAAQjpgBjThZQjLhWifidQihiihWjMQhajTAAjqg");
	this.shape_73.setTransform(353.275,240.025);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").p("AyKAAQAAjtBbjXQBYjQCiihQCkiiDNhXQDXhcDtAAQDvABDVBaQDPBYCiChQCjCkBXDOQBbDWABDsQAADwhcDXQhXDOieCgQgCACgDACQihChjPBXQjWBajrACQgCAAgCAAQjtAAjXhcQjOhXigigQilikhYjPQhajXgBjug");
	this.shape_74.setTransform(353.25,240);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBajUCkilQCmikDQhZQDchcDwAAQDzAADYBcQDTBZCkCkQCmCnBZDQQBcDaAADwQAADzhcDbQhZDRihCjQgCACgCACQikCjjUBaQjYBcjvAAQgCAAgCAAQjwAAjahcQjShZikiiQiminhajTQhcjaAAjyg");
	this.shape_75.setTransform(353.25,240);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBajXCninQCqinDThaQDfheD0AAQD2AADcBdQDXBbCnCnQCoCpBaDUQBeDdAAD0QAAD3heDeQhaDUikCmQgCACgCACQinCnjWBaQjcBdjyABQgDAAgCAAQj0AAjeheQjVhaimilQiqiqhajVQhejeAAj2g");
	this.shape_76.setTransform(353.25,240);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").p("AzCAAQAAj4BfjhQBdjbCpipQCsiqDXhbQDihgD4AAQD6ABDgBeQDZBcCqCpQCqCsBcDYQBfDgABD4QgBD7hfDhQhbDYinCoQgCACgCADQipCojaBdQjgBej1ABQgDAAgCAAQj4AAjhhfQjZhcioioQisishcjaQhgjhAAj5g");
	this.shape_77.setTransform(353.25,240);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").p("AzVAAQAAj8BhjlQBejdCsisQCuitDbhcQDlhiD8AAQD+ABDjBgQDeBdCrCsQCuCuBdDcQBgDkABD7QAAD/hhDkQhdDcipCqQgCADgCACQisCrjeBeQjjBfj5ACQgCAAgDAAQj8AAjkhhQjchdisiqQiuivhejdQhgjlgBj9g");
	this.shape_78.setTransform(353.25,240);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCvivQCxivDeheQDphiD/AAQECAADnBiQDgBeCvCvQCwCxBeDfQBiDnAAD/QAAEChiDpQheDeisCtQgCACgCADQiuCujhBfQjmBij+AAQgCAAgDAAQj/AAjphiQjfheiuitQixixhfjhQhijoAAkBg");
	this.shape_79.setTransform(353.25,240);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBgjkCyiyQCziyDhhfQDshkEEAAQEFAADrBjQDkBhCxCwQCyC0BgDiQBkDrAAEDQAAEGhkDsQhfDiiuCwQgCACgDACQixCxjkBgQjqBjkBABQgCAAgDAAQkDAAjshkQjjhfiwiwQi0i0hgjkQhkjrAAkFg");
	this.shape_80.setTransform(353.25,240);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").p("A0NAAQAAkHBljvQBijpC0izQC2i0DlhhQDwhmEHAAQEJABDuBkQDnBiC0CzQC1C2BhDmQBlDuABEHQgBEKhlDwQhhDliwCyQgDACgCADQizCzjoBiQjtBkkFABQgDAAgCAAQkHAAjwhlQjmhiiyixQi3i3hijnQhljwAAkIg");
	this.shape_81.setTransform(353.25,240);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").p("A0gAAQAAkLBnjzQBjjrC3i2QC4i3DphjQDzhnELAAQENABDyBmQDqBjC3C2QC3C5BjDoQBmDzABEKQAAEOhnDzQhjDpizC0QgCACgCADQi2C2jrBjQjxBlkIACQgDAAgDAAQkLAAjzhnQjphji1i0Qi6i5hjjrQhmjygBkNg");
	this.shape_82.setTransform(353.25,240);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC5i5QC7i5DrhkQD3hoEPAAQERAAD0BoQDvBkC5C5QC6C7BkDsQBnD1ABEOQAAEShoD3QhkDsi2C3QgCACgCADQi5C4juBlQj1BnkMABQgDAAgCAAQkPAAj2hoQjthki4i3Qi7i8hljuQhoj2AAkQg");
	this.shape_83.setTransform(353.275,240.025);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC8i6QC+i9DuhlQD6hqETAAQEVAAD4BpQDxBmC8C7QC9C+BlDwQBqD4AAETQAAEVhqD7QhlDui4C7QgDACgCACQi7C7jxBmQj4BpkQABQgDAAgDAAQkSAAj7hqQjvhli6i5Qi/i/hmjxQhqj6AAkUg");
	this.shape_84.setTransform(353.25,240);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").p("A1YAAQAAkWBrj+QBoj1C+i+QDBi/DyhmQD+hsEWAAQEZABD8BqQD1BoC+C9QC/DBBmDzQBrD8ABEWQAAEZhsD+QhmDzi7C8QgCACgCACQi+C+j1BnQj8BrkTABQgDAAgDAAQkWAAj+hsQjzhmi8i8QjCjBhoj1Qhrj+AAkXg");
	this.shape_85.setTransform(353.25,240);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").p("A1rAAQAAkaBtkBQBpj5DBjAQDDjCD1hoQEChtEaAAQEcABD/BsQD5BpDBDAQDCDDBoD2QBsEAABEaQAAEdhtEBQhoD2i9C/QgCACgDACQjBDBj4BpQj/BrkXACQgDAAgDAAQkaAAkBhtQj2hojAi/QjEjDhpj5QhskAgBkcg");
	this.shape_86.setTransform(353.25,240);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").p("A1+AAQAAkeBvkFQBqj7DEjDQDFjFD5hpQEFhvEeAAQEgABEDBuQD7BqDEDDQDEDFBqD6QBtEDABEeQAAEghuEGQhqD4i/DCQgDADgCACQjDDDj8BqQkCBtkbABQgDAAgDAAQkeAAkEhuQj6hpjCjBQjHjHhqj7QhukEgBkgg");
	this.shape_87.setTransform(353.25,240);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBrkADGjGQDJjGD8hrQEIhwEiAAQElABEFBuQD/BsDHDGQDGDIBrD9QBwEGAAEiQAAElhwEHQhrD+jBDEQgDACgCACQjHDGj/BsQkFBukfABQgDAAgDAAQkiAAkHhvQj+hsjEjDQjKjJhrj/QhwkIAAkg");
	this.shape_88.setTransform(353.25,240);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").p("A2jAAQAAklBxkMQBukDDIjIQDLjJD/htQENhxElAAQEoABEJBwQEDBtDJDIQDJDLBtEAQBwEKABElQAAEphxEMQhtEAjEDGQgDADgCACQjIDIkDBuQkKBwkiABQgDAAgDAAQklAAkMhxQkBhtjHjGQjLjLhukDQhxkLAAkk");
	this.shape_89.setTransform(353.25,240);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").p("A22AAQAAkpBzkPQBvkHDLjLQDOjLEDhuQEPhzEpAAQEsABENByQEGBuDLDLQDMDOBuEEQBxEMACEpQAAEthzEPQhuEEjHDJQgDACgCADQjLDKkGBvQkMBxknACQgDAAgDAAQkpAAkPhzQkEhujKjIQjOjPhvkGQhykOgBko");
	this.shape_90.setTransform(353.25,240);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").p("A3JAAQAAktB1kTQBwkJDOjOQDQjOEGhvQETh1EtAAQEwABEQB0QEJBwDODNQDODQBwEHQBzERABEsQAAEwh0ETQhvEHjKDMQgCADgDACQjODNkJBwQkQBzkqABQgDAAgDAAQktAAkTh0QkHhvjMjLQjRjRhwkKQh0kRgBks");
	this.shape_91.setTransform(353.25,240);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").p("A3bAAQAAkxB1kWQBykNDQjQQDUjREJhwQEWh2ExAAQE0ABEUB0QEMByDRDQQDRDSBwELQB1EUABEwQAAE1h2EWQhwEKjMDOQgDADgCACQjQDQkNByQkUB0kuABQgDAAgDAAQkxAAkWh1QkLhxjOjOQjUjThxkNQh2kWAAkv");
	this.shape_92.setTransform(353.25,240);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").p("A3uAAQAAk1B3kaQBzkQDTjSQDWjUEMhyQEah3E1AAQE3ABEYB2QEQBzDSDSQDUDWByENQB3EYABE0QgBE4h3EaQhyENjODRQgDACgCADQjTDSkQBzQkXB2kyACQgDAAgDAAQk1gBkZh3QkOhyjSjQQjWjWhzkQQh3kZAAk0");
	this.shape_93.setTransform(353.275,240.025);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").p("A4BAAQAAk4B5keQB0kTDWjWQDYjWEQhzQEeh5E4AAQE8ABEaB4QEUB0DVDVQDWDYBzERQB4EbACE4QAAE8h6EeQhzEQjQDUQgDACgDADQjVDVkTB0QkbB3k2ACQgDAAgDAAQk4AAkeh5QkRh0jUjSQjZjZh0kTQh4kdgBk3");
	this.shape_94.setTransform(353.25,240);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDYjYQDbjZETh0QEhh6E8AAQE/AAEfB6QEWB1DZDYQDYDaB1EVQB6EfAAE7QAAFAh6EhQh0ETjUDXQgDACgCADQjZDXkWB2QkfB5k5ABQgCAAgEAAQk8AAkhh6QkVh1jWjVQjbjch2kWQh6kgAAk7");
	this.shape_95.setTransform(353.25,240);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").p("A4mAAQAAlAB7klQB4kaDajaQDejbEXh2QEkh8FAAAQFDABEiB6QEaB4DbDaQDbDdB2EXQB7EjABE/QAAFEh8EkQh2EYjWDYQgDACgCADQjbDakaB3QkhB7k9ABQgDAAgEAAQlAAAkkh8QkYh2jZjXQjejeh4kbQh7kkAAk+");
	this.shape_96.setTransform(353.25,240);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").p("A45AAQAAlEB9koQB5keDdjcQDgjeEah4QEoh9FEAAQFHABElB8QEdB5DeDcQDdDgB4EbQB9EmABFDQgBFHh9EpQh3EajZDbQgDADgCADQjdDckeB5QklB8lAABQgEAAgDAAQlEAAknh9Qkch4jbjaQjhjhh5kdQh9knAAlD");
	this.shape_97.setTransform(353.25,240);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").p("A5MAAQAAlHB/ksQB6khDgjgQDjjgEdh5QEsh/FHAAQFLABEpB+QEgB6DgDfQDhDjB5EeQB9EpACFHQAAFLh/EsQh5EejbDdQgDADgCADQjhDfkgB6QkpB9lEACQgDAAgEAAQlHAAksh/Qkeh5jfjdQjjjkh6kgQh+krgBlG");
	this.shape_98.setTransform(353.25,240);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB7klDjjiQDljjEhh6QEviAFLAAQFOAAEsCAQElB7DjDiQDjDlB6EhQB/EuABFKQAAFPiAEvQh6EhjeDhQgDACgCADQjiDiklB7QksB/lIABQgDAAgEAAQlLAAkviAQkih6jhjgQjmjlh7klQiAkuAAlK");
	this.shape_99.setTransform(353.25,240);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").p("A5xAAQAAlPCBkzQB9koDljkQDpjmEjh8QEziBFPAAQFTABEvCAQEoB9DkDlQDmDnB9ElQCAExABFOQAAFTiBEyQh9EljfDiQgDADgDADQjlDlkoB9QkvCAlMABQgDAAgEAAQlPAAkyiBQkmh9jjjhQjpjph9koQiBkyAAlN");
	this.shape_100.setTransform(353.25,240);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").p("A6EAAQAAlTCDk2QB/krDnjnQDrjpEnh9QE2iDFTAAQFWABEzCCQErB+DoDnQDoDqB9EpQCDEzABFTQgBFWiDE2Qh9EpjjDlQgCADgDADQjoDmkrB/QkzCClPABQgEAAgDAAQlTAAk2iDQkph+jljkQjrjrh/ksQiDk0AAlS");
	this.shape_101.setTransform(353.25,240);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").p("A6XAAQAAlWCFk6QCAkvDqjqQDtjrErh+QE5iFFXAAQFaABE2CEQEvCADrDpQDqDtB/EsQCDE3ACFWQAAFbiFE4Qh+EsjmDoQgDADgCADQjrDpkvCAQk2CDlSACQgEAAgEAAQlXAAk4iFQkth/jpjnQjtjuiAkuQiEk5gBlV");
	this.shape_102.setTransform(353.25,240);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDtjsQDvjtEviAQE9iGFaAAQFeAAE6CGQEyCBDsDsQDuDvCAEvQCFE7ABFZQAAFfiGE9QiAEvjoDqQgDADgDADQjsDskyCBQk6CFlXABQgEAAgDAAQlaAAk9iGQkwiAjrjqQjwjwiBkyQiGk8AAlZ");
	this.shape_103.setTransform(353.275,240.025);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").p("A68AAQAAlfCHlAQCDk1DvjvQDzjwEyiCQFAiHFeAAQFiABE9CGQE2CDDvDvQDwDxCCEzQCGE/ABFdQAAFiiHFAQiCEzjqDsQgDADgDADQjvDvk2CDQk9CGlaABQgEAAgEAAQleAAlAiHQk0iCjtjsQjzjziDk2QiHk/AAld");
	this.shape_104.setTransform(353.25,240);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").p("A7PAAQAAliCJlEQCEk5DyjxQD1jzE1iDQFFiJFhAAQFmABFBCIQE4CEDyDxQDzD1CCE2QCJFBABFhQAAFmiKFFQiCE1jtDwQgDADgDACQjyDyk4CDQlBCJleABQgEAAgEAAQlhAAlFiKQk2iCjwjvQj2j2iEk4QiJlDAAlh");
	this.shape_105.setTransform(353.25,240);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").p("A7iAAQAAlmCLlIQCFk8D1j0QD3j1E5iEQFHiLFmAAQFpABFFCKQE8CFD0D0QD1D4CFE4QCJFFACFlQAAFriLFHQiEE5jvDyQgDADgEACQj0D1k8CFQlECJliACQgEAAgEAAQlmAAlHiLQk5iFjzjwQj5j5iFk8QiKlHgBlk");
	this.shape_106.setTransform(353.25,240);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").p("A71AAQAAlqCNlLQCHlAD3j2QD6j4E8iFQFLiNFpAAQFtABFICMQFACHD2D2QD4D5CGE9QCLFJABFoQAAFuiMFLQiGE8jyD1QgDADgDADQj2D2lACHQlICLllABQgEAAgEAAQlpAAlLiMQk+iGj1jzQj6j7iHlAQiMlKgBlo");
	this.shape_107.setTransform(353.25,240);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").p("AcIAAQAAFuiNFPQiJFDj5D5Qj5D5lDCJQlPCNluAAQltAAlPiNQlDiJj5j5Qj5j5iJlDQiNlPAAluQAAluCNlOQCJlDD5j5QD5j5FDiJQFPiNFtAAQFuAAFPCNQFDCJD5D5QD5D5CJFDQCNFOAAFug");
	this.shape_108.setTransform(353.25,240);

	var maskedShapeInstanceList = [this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98,this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_12}]},80).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[]},1).wait(16));

	// 波5
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgIAHgKAAQgKAAgHgHQgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAKg");
	this.shape_109.setTransform(306.6,240);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").p("AgpAAQAAgRAMgLQAMgNARAAQARAAAMANQANALAAARQAAARgNAMQgMANgRAAQgRAAgMgNQgMgMAAgRg");
	this.shape_110.setTransform(306.6,240);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").p("Ag7AAQAAgXASgSQARgRAYAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgYAAgRgRQgSgSAAgYg");
	this.shape_111.setTransform(306.6,240);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").p("AhMAAQAAgfAXgWQAWgXAfAAQAfAAAXAXQAWAWAAAfQAAAggWAWQgXAXgfAAQgfAAgWgXQgXgWAAggg");
	this.shape_112.setTransform(306.6,240);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAmAAAcAcQAcAbAAAmQAAAmgcAcQgcAcgmAAQgmAAgbgcQgcgcAAgmg");
	this.shape_113.setTransform(306.625,240.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").p("AhuAAQAAgtAgggQAhghAtAAQAtAAAhAhQAhAgAAAtQAAAughAgQghAhgtAAQgtAAghghQggggAAgug");
	this.shape_114.setTransform(306.6,240);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_115.setTransform(306.6,240);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").p("AiRAAQAAg8ArgqQAqgrA8AAQA8AAArArQAqAqAAA8QAAA8gqArQgrArg8AAQg8AAgqgrQgrgrAAg8g");
	this.shape_116.setTransform(306.6,240);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").p("AiiAAQAAhDAwguQAvgxBDAAQBDAAAwAxQAwAuAABDQAABDgwAwQgwAwhDAAQhDAAgvgwQgwgwAAhDg");
	this.shape_117.setTransform(306.6,240);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").p("AizAAQAAhJA1g1QA0g0BKAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKAAQhKAAg0g0Qg1g1AAhKg");
	this.shape_118.setTransform(306.6,240);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA5g6BRAAQBRAAA6A6QA6A5AABRQAABSg6A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_119.setTransform(306.6,240);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA+g/BYAAQBYAAA/A/QA/A+AABYQAABYg/A/Qg/A/hYAAQhYAAg+g/Qg/g/AAhYg");
	this.shape_120.setTransform(306.6,240);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBfAABEBDQBEBEAABfQAABfhEBEQhEBEhfAAQhfAAhEhEQhDhEAAhfg");
	this.shape_121.setTransform(306.625,240.025);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").p("Aj4AAQAAhmBJhJQBJhIBmAAQBnAABIBIQBJBJAABmQAABnhJBJQhIBJhnAAQhmAAhJhJQhJhJAAhng");
	this.shape_122.setTransform(306.6,240);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").p("AkJAAQAAhtBOhOQBOhOBtAAQBuAABOBOQBNBOAABtQAABuhNBOQhOBOhuAAQhtAAhOhOQhOhOAAhug");
	this.shape_123.setTransform(306.6,240);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBShTB1AAQB1AABTBTQBTBSAAB1QAAB1hTBTQhTBTh1AAQh1AAhShTQhThTAAh1g");
	this.shape_124.setTransform(306.6,240);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").p("AEsAAQAAB8hYBYQhYBYh8AAQh8AAhXhYQhYhYAAh8QAAh7BYhYQBXhYB8AAQB8AABYBYQBYBYAAB7g");
	this.shape_125.setTransform(306.6,240);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").p("Ak+AAQAAhCAYg4QAXg4AugvQAugtA2gXQA6gYBDAAQBDAAA5AXQA3AXAuAuQAuAvAYA3QAXA5AABCQAABEgYA6QgXA1guAuQgBABgBABQgtAug3AXQg5AXhCAAQAAAAgBAAQhDAAg5gZQg2gXgtgtQgvgvgXg2QgYg5AAhEg");
	this.shape_126.setTransform(306.6,240);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").p("AlRAAQAAhGAag8QAZg7AwgwQAwgwA6gZQA9gbBHAAQBGAAA9AaQA7AZAwAxQAxAvAZA8QAaA8AABGQgBBIgaA9QgZA5gvAxQgBAAgCACQgwAvg7AZQg7AZhGAAQAAAAgBAAQhHgBg8gaQg6gZgwgvQgwgxgZg6Qgag9AAhHg");
	this.shape_127.setTransform(306.6,240);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").p("AlkAAQAAhJAbhAQAbg/AzgzQAygyA9gaQBBgdBLAAQBKAABAAcQA+AaA0AzQAzAzAaA/QAbBAAABJQAABMgbBAQgbA9gyAyQgBACgBABQgzAyg+AaQhAAahJAAQAAAAgBAAQhLAAg/gbQg+gbgygyQgzgzgag+QgbhAgBhLg");
	this.shape_128.setTransform(306.6,240);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").p("Al2AAQAAhNAchEQAchCA2g1QA1g1BAgcQBFgdBOAAQBOAABDAcQBCAcA2A2QA2A1AbBCQAdBEAABNQgBBPgcBEQgcBAg1A1QgBACgBABQg1A1hCAbQhCAchOAAQAAAAgBAAQhOgBhDgcQhBgcg1g0Qg2g3gbhAQgdhEAAhPg");
	this.shape_129.setTransform(306.6,240);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBSAABHAeQBFAdA4A4QA4A4AeBGQAdBGABBSQgBBTgeBHQgdBEg3A3QgCACgBABQg4A3hFAdQhGAdhQABQgBAAgBAAQhSgBhHgeQhEgdg3g4Qg5g4gdhEQgehIAAhSg");
	this.shape_130.setTransform(306.625,240.025);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").p("AmcAAQAAhVAghKQAehJA7g7QA6g5BIgfQBLghBWAAQBVAABLAgQBJAeA6A7QA7A7AfBIQAgBLAABVQgBBXggBKQgeBIg5A6QgCABgCACQg6A5hIAeQhKAghUAAQgBAAgBAAQhWgBhKggQhIgfg5g5Qg8g7gehIQgghKAAhXg");
	this.shape_131.setTransform(306.6,240);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").p("AmuAAQAAhYAghOQAghMA+g+QA9g9BKggQBPghBaAAQBZAABPAhQBLAfA+A+QA9A9AgBMQAhBOAABZQAABbghBOQggBKg9A9QgBACgBAAQg9A9hMAgQhNAghYAAQgBAAgBAAQhaAAhNghQhLggg9g8Qg+g+gfhLQghhPAAhag");
	this.shape_132.setTransform(306.6,240);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").p("AnBAAQAAhcAihRQAihQBAhAQA/hABOggQBSgkBeAAQBdAABSAiQBPAiBABAQBABAAhBPQAjBRAABdQgBBegiBSQghBOg/A/QgBACgCABQg/A/hQAhQhQAihcAAQgBAAgBAAQhdgBhSgjQhOghg/g+QhAhBghhOQgjhSAAheg");
	this.shape_133.setTransform(306.6,240);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBChEQBDhCBRgiQBWglBhAAQBhAABVAkQBSAjBDBCQBDBDAjBSQAjBVABBhQgBBigkBWQgiBQhCBCQgBABgCACQhCBChSAjQhUAjhgAAQgBAAgBAAQhhAAhVglQhRgihChCQhDhEgjhRQgkhVAAhig");
	this.shape_134.setTransform(306.6,240);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").p("AnnAAQAAhkAmhYQAkhXBFhEQBFhFBUgkQBagnBlAAQBlAABYAmQBWAkBFBGQBGBEAkBXQAmBXAABkQgBBngmBZQgkBUhDBFQgCABgBABQhFBEhWAlQhXAkhjABQgCAAgBAAQhlgBhYgmQhVgkhEhDQhGhGgkhVQgmhZAAhmg");
	this.shape_135.setTransform(306.6,240);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").p("An5AAQAAhnAmhdQAmhZBIhIQBHhHBYgmQBdgnBpAAQBoAABdAmQBZAnBIBHQBHBHAnBaQAmBbAABoQAABrgnBcQgmBYhGBGQgBACgCABQhHBIhaAlQhbAmhmAAQgCAAgBAAQhpAAhbgoQhZglhGhGQhJhJglhYQgnhcAAhqg");
	this.shape_136.setTransform(306.6,240);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").p("AoMAAQAAhrAohfQAnheBLhKQBKhKBbgnQBggpBtAAQBsAABgApQBcAmBLBLQBKBKAnBdQAoBfABBrQgBBugoBhQgnBahJBJQgBACgCACQhKBJhcAnQhfAnhqABQgCAAgBAAQhsgBhggoQhbgnhJhJQhMhMgmhbQgphgAAhtg");
	this.shape_137.setTransform(306.6,240);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAohhBNhMQBNhNBfgoQBkgrBwAAQBwAABjAqQBgAoBNBOQBNBMApBgQApBjABBvQgBBygqBkQgoBehLBMQgCABgCACQhMBMhgApQhiAphuAAQgCAAgBAAQhwAAhjgrQhfgohMhLQhOhOgohgQgqhjAAhxg");
	this.shape_138.setTransform(306.6,240);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").p("AoyAAQAAhzAshmQAqhkBPhQQBPhPBigqQBogsB0AAQB0AABmAsQBkAqBPBPQBQBQAqBjQArBmAABzQAAB3grBmQgqBihOBOQgCACgBABQhPBPhkApQhlArhyABQgCAAgBAAQh0gBhmgrQhjgrhOhNQhQhRgqhjQgshmAAh1g");
	this.shape_139.setTransform(306.6,240);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABqAsQBnAsBSBSQBSBRArBoQAtBpAAB3QAAB6gtBqQgrBlhQBRQgCACgCABQhSBShmArQhpAsh2AAQgCAAgBAAQh4AAhqguQhlgrhRhQQhThTgrhmQgthrAAh4g");
	this.shape_140.setTransform(306.625,240.025);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").p("ApXAAQAAh6AuhuQAthqBVhVQBUhUBpgtQBugvB8AAQB7AABuAuQBqAtBVBVQBVBUAsBrQAuBtABB6QgBB+guBtQgsBphTBTQgCACgCACQhUBThqAtQhsAth5ABQgDAAgBAAQh8gBhtguQhpgshThTQhWhXgthpQguhuAAh8g");
	this.shape_141.setTransform(306.6,240);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").p("ApqAAQAAh/AwhxQAuhuBXhXQBYhWBrguQBygxCAAAQCAAABwAwQBuAvBYBWQBWBXAvBuQAvBxAAB9QAACCgwByQgtBrhWBXQgBABgCACQhXBXhuAtQhvAvh9ABQgDAAgBAAQh/AAhxgxQhtguhVhVQhZhZguhtQgwhxAAiAg");
	this.shape_142.setTransform(306.6,240);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").p("Ap9AAQAAiDAyh0QAvhxBahaQBahZBvgwQB2gyCDAAQCDAAB1AyQBxAvBZBaQBaBZAwByQAxBzAACCQAACHgxB0QgwBvhXBZQgCACgCACQhaBYhxAwQhyAwiBABQgCAAgCAAQiDgBh0gxQhwgwhZhYQhbhbgvhwQgyh1AAiEg");
	this.shape_143.setTransform(306.6,240);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").p("AqQAAQAAiGAzh4QAxh1BdhcQBchcBzgwQB5g1CHAAQCHAAB4AzQB0AxBdBdQBcBcAxB0QAzB3AACGQAACKgzB4QgxBzhaBaQgCADgCACQhcBbh0AxQh3AyiEAAQgCAAgCAAQiHAAh4g0QhzgwhbhaQhehfgwhzQgzh4gBiIg");
	this.shape_144.setTransform(306.6,240);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").p("AqiAAQAAiKA0h7QAzh5BfheQBfhfB2gyQB8g1CLAAQCLAAB7A0QB4AzBfBfQBfBeAzB4QAzB7ABCJQgBCOg0B8QgyB1hcBeQgCACgCACQhfBeh4AyQh6AziIABQgCAAgCAAQiLgBh7g0Qh2gyhehdQhghggzh3Qg0h8AAiMg");
	this.shape_145.setTransform(306.6,240);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").p("Aq1AAQAAiOA2h+QA0h8BhhiQBihhB5gzQCAg3CPAAQCPAAB/A2QB7A0BhBhQBiBiA0B7QA1B+AACNQAACRg2CAQgzB4hfBhQgCACgCACQhhBhh8A0Qh9A0iMABQgCAAgCAAQiOAAh/g3Qh6gzhghgQhjhjg0h6Qg2iAAAiPg");
	this.shape_146.setTransform(306.6,240);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").p("ArIAAQAAiSA3iCQA2h/BkhkQBkhkB9g1QCEg4CSAAQCSAACDA3QB+A2BlBkQBkBkA1B/QA3CBAACRQAACWg3CCQg1B8hiBjQgCACgCACQhkBjh+A2QiBA2iPABQgDAAgCAAQiSgBiDg4Qh9g0hihiQhmhmg1h+Qg3iCgBiUg");
	this.shape_147.setTransform(306.6,240);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").p("ArbAAQAAiWA5iFQA3iCBnhnQBnhmCAg3QCHg6CWAAQCWAACGA6QCCA3BnBmQBmBmA3CDQA4CEABCVQAACZg5CHQg2B/hkBlQgCACgDADQhmBmiCA2QiEA4iTAAQgDAAgCAAQiWAAiGg5QiAg3hmhkQhohpg2iBQg5iGgBiXg");
	this.shape_148.setTransform(306.6,240);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA4iFBphqQBqhoCDg4QCLg7CaAAQCaAACJA6QCGA4BpBpQBpBpA5CGQA5CIABCZQgBCdg6CKQg3CDhnBoQgCABgCACQhpBpiGA4QiHA5iXABQgDAAgCAAQiagBiJg6QiEg4hohnQhrhrg4iEQg6iKAAibg");
	this.shape_149.setTransform(306.6,240);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA5iJBshsQBshrCHg6QCOg8CeAAQCdAACOA8QCIA5BsBsQBsBsA6CJQA7CLABCcQgBChg8COQg5CGhpBqQgCACgCADQhsBriIA5QiLA7ibABQgDAAgCAAQidgBiNg8QiIg5hqhqQhuhug5iIQg8iMAAifg");
	this.shape_150.setTransform(306.625,240.025);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").p("AsTAAQAAihA9iQQA8iNBuhuQBvhuCKg7QCRg+CiAAQChAACRA9QCMA8BvBuQBuBuA7CMQA9CQAACgQAAClg9CRQg7CIhrBuQgCACgDACQhuBuiMA6QiOA8ifACQgDAAgCAAQihgBiRg9QiKg7hthsQhwhxg7iLQg9iQgBijg");
	this.shape_151.setTransform(306.6,240);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").p("AslAAQAAilA+iTQA9iQBxhxQBxhxCOg8QCVg/ClAAQClAACUA+QCQA9BxBxQBxBwA8CQQA+CTABCkQAACog/CUQg8CNhuBvQgCADgCACQhxBxiPA8QiSA+ijAAQgDAAgCAAQilAAiUg/QiOg8hvhvQhzhzg8iPQg/iUAAimg");
	this.shape_152.setTransform(306.6,240);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTBzh0QB1hzCQg9QCZhBCpAAQCpAACYBAQCTA+BzBzQB0B0A+CTQA/CWABCnQgBCthACYQg9CQhwByQgDADgCABQhzBziTA+QiWA/ilABQgDAAgDAAQipgBiXhAQiSg9hyhxQh1h2g+iTQhAiWAAirg");
	this.shape_153.setTransform(306.6,240);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").p("AtLAAQAAisBCibQA/iWB2h3QB3h1CUhAQCchCCtAAQCtAACbBCQCWBAB2B1QB2B2BACXQBBCZABCrQgBCxhBCbQg/CThzB1QgCADgDACQh2B1iWBAQiZBAipABQgDAAgDAAQitAAibhCQiUhAh1hzQh4h4g/iWQhCibAAiug");
	this.shape_154.setTransform(306.6,240);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").p("AteAAQAAiwBDifQBBiZB5h5QB5h5CYg/QCfhFCxAAQCwAACfBDQCaBBB5B5QB4B5BBCZQBDCeAACuQAAC1hDCeQhACXh2B3QgCADgDACQh4B4iaBBQicBBitACQgDAAgCAAQixgBifhDQiYhAh3h3Qh7h7hAiZQhDiegBiv");
	this.shape_155.setTransform(306.6,240);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").p("AtwAAQAAi0BEiiQBCidB8h7QB8h7CbhCQCjhFC0AAQC0AACjBEQCdBCB7B8QB7B6BDCeQBDCgABCzQAAC4hECjQhCCah4B5QgDADgCACQh7B7idBCQifBEiyAAQgDAAgCAAQi1AAiihFQichCh5h4Qh+h+hCicQhEijAAiy");
	this.shape_156.setTransform(306.6,240);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB9h+QB/h9CehDQCnhHC4AAQC4AACmBGQCgBEB+B9QB+B+BECgQBFCkABC3QgBC8hGCmQhCCdh7B9QgCACgDADQh+B9igBDQijBFi1ABQgDAAgCAAQi5gBilhGQifhDh8h7QiAiAhEigQhGilAAi3");
	this.shape_157.setTransform(306.6,240);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCAh/QCBiBCihFQCqhIC8AAQC8AACpBIQCkBFCACBQCBB/BFCkQBHCnABC7QgBDAhHCqQhFCgh8B/QgDACgDADQiACAikBFQimBGi4ABQgEAAgCAAQi9AAiphJQiihEh+h+QiDiDhFijQhIipAAi6");
	this.shape_158.setTransform(306.6,240);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").p("AupAAQAAi/BJisQBHioCDiDQCEiDClhGQCthKDAAAQDAAACsBKQCoBGCDCDQCDCCBGCoQBICrABC+QAADEhJCtQhGCjh/CCQgDACgCADQiDCCinBGQiqBIi8ACQgEAAgCAAQjAgBithJQilhGiCiAQiFiGhGimQhJitgBi+");
	this.shape_159.setTransform(306.6,240);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCohHQCxhLDEAAQDDAACxBKQCqBICGCGQCFCFBICrQBKCuABDBQAADIhLCxQhHCniCCEQgCACgDADQiGCFiqBIQitBJjAABQgEAAgCAAQjEAAiwhLQiphIiEiCQiIiJhIiqQhKivAAjD");
	this.shape_160.setTransform(306.625,240.025);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBJivCIiHQCKiJCrhJQC1hMDHAAQDHAAC0BMQCuBJCICJQCICHBKCvQBLCxABDFQgBDMhMC0QhICriECGQgDADgDADQiICHiuBJQixBLjDABQgEAAgCAAQjIgBi0hLQishJiGiGQiLiLhJitQhMizAAjG");
	this.shape_161.setTransform(306.6,240);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").p("AvhAAQAAjKBOi4QBLixCKiLQCMiLCvhKQC4hODLAAQDLAAC3BOQCyBLCLCKQCKCLBLCxQBNC1AADJQAADQhNC4QhKCtiGCJQgEADgDADQiKCKixBKQi1BNjHABQgDAAgDAAQjMAAi3hOQivhLiJiHQiNiOhLixQhOi3AAjJ");
	this.shape_162.setTransform(306.6,240);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").p("Av0AAQAAjOBPi7QBNi1CNiNQCOiOCzhLQC7hQDPAAQDPAAC7BPQC0BNCOCNQCNCNBMC1QBOC5ABDMQAADUhPC6QhLCyiKCLQgCADgDADQiNCNi1BMQi4BNjLACQgDAAgDAAQjPgBi7hPQizhLiLiLQiQiRhMi0QhPi5gBjO");
	this.shape_163.setTransform(306.6,240);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").p("AwHAAQAAjSBRi+QBOi5CQiPQCRiQC1hNQC/hSDTAAQDSAAC/BRQC4BOCQCQQCQCPBNC4QBQC9ABDPQAADYhRC/QhMC1iMCNQgDAEgDADQiQCPi4BNQi7BPjOABQgEAAgDAAQjTAAi+hRQi3hNiOiNQiSiShOi5QhQi9gBjR");
	this.shape_164.setTransform(306.6,240);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBPi8CSiTQCUiSC5hPQDDhSDWAAQDWAADCBSQC8BPCTCSQCSCSBPC9QBRC/ABDTQAADdhSDBQhOC4iOCRQgEADgDADQiSCRi7BQQi+BQjTABQgEAAgDAAQjXAAjChSQi5hPiRiPQiViWhPi7QhSjBAAjV");
	this.shape_165.setTransform(306.6,240);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").p("AwsAAQAAjZBTjGQBRi/CViVQCWiVC9hQQDGhUDaAAQDaAADGBTQC+BSCWCUQCUCVBRC/QBTDDAADXQAADghTDFQhQC8iQCTQgDADgDACQiVCVi/BRQjCBSjWABQgEAAgDAAQjbAAjFhUQi9hQiTiSQiYiZhQi+QhTjEgBjZ");
	this.shape_166.setTransform(306.6,240);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").p("Aw/AAQAAjeBVjIQBSjDCYiXQCZiYC/hRQDKhWDeAAQDeAADJBVQDDBSCXCYQCXCXBTDDQBTDGACDbQAADkhVDJQhSC+iTCWQgDADgDADQiYCXjBBSQjGBTjZACQgFAAgDAAQjfAAjIhWQjBhRiViVQibiahSjCQhUjIgBjd");
	this.shape_167.setTransform(306.6,240);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").p("AxSAAQAAjhBXjNQBTjGCaiaQCciaDDhSQDNhYDiAAQDiAADMBXQDGBTCaCaQCaCaBUDGQBVDKABDfQAADnhXDNQhSDCiWCYQgDADgDADQiaCZjGBUQjIBVjeABQgEAAgDAAQjiAAjNhXQjDhTiYiWQieiehTjFQhWjLgBjh");
	this.shape_168.setTransform(306.6,240);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCcidQCeidDHhUQDQhYDmAAQDlAADRBYQDJBVCcCcQCdCdBVDJQBXDNABDjQAADshYDQQhUDFiYCaQgDAEgEACQicCdjJBVQjMBWjhABQgFAAgDAAQjmAAjQhZQjHhTibiaQifighVjJQhYjPAAjk");
	this.shape_169.setTransform(306.6,240);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").p("Ax3AAQAAjpBZjTQBXjNCfifQChigDKhVQDUhaDpAAQDpAADUBZQDMBXCgCfQCfCfBWDMQBYDRACDnQgBDvhZDTQhVDJibCdQgDADgDADQifCfjNBWQjQBYjkACQgFAAgDAAQjqgBjThZQjKhWieicQiiijhWjMQhZjSgBjo");
	this.shape_170.setTransform(306.625,240.025);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").p("AyKAAQAAjtBbjXQBYjQCiihQCjiiDNhXQDYhcDtAAQDtAADYBbQDPBYCiCiQChChBYDQQBaDUACDqQAAD0hcDXQhWDLidCgQgEADgDAEQiiChjQBYQjTBZjoACQgFAAgDAAQjuAAjWhcQjOhXigieQilimhYjPQhajWgBjs");
	this.shape_171.setTransform(306.6,240);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBZjUCkilQCnikDQhZQDbhcDxAAQDxAADaBcQDUBaCkCjQCkCkBaDUQBbDYABDtQAAD3hdDbQhXDPigCiQgDAEgEADQikCkjTBZQjXBbjsABQgFAAgDAAQjxAAjbhcQjRhZiiihQioiohZjTQhcjZAAjw");
	this.shape_172.setTransform(306.6,240);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBajXCninQCpinDUhaQDeheD1AAQD1AADeBeQDWBaCnCnQCnCnBbDXQBdDbABDxQAAD8heDeQhaDSiiClQgDADgDADQinCnjXBaQjaBdjwABQgEAAgEAAQj1AAjeheQjUhailikQirirhajVQhejeAAjz");
	this.shape_173.setTransform(306.6,240);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").p("AzCAAQAAj4BfjhQBdjbCpipQCriqDXhbQDihgD5AAQD4AADiBfQDaBdCqCpQCpCpBcDbQBeDeACD1QgBD/hfDiQhbDWikCnQgEADgDAEQiqCojaBdQjdBdj0ACQgEAAgEAAQj5AAjhhgQjYhbinimQitiuhcjaQhfjfgBj4");
	this.shape_174.setTransform(306.6,240);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").p("AzVAAQAAj8BhjlQBejdCsisQCuitDahcQDmhiD8AAQD9AADkBhQDeBeCsCsQCsCrBdDeQBgDiACD5QAAEDhiDlQhcDZinCqQgDAEgEADQirCsjeBdQjhBfj3ACQgFAAgEAAQj9AAjlhhQjbhdiqipQiviwhejdQhgjkgBj6");
	this.shape_175.setTransform(306.6,240);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCuivQCxivDeheQDphiEAAAQEAAADpBiQDgBfCvCuQCvCvBfDhQBhDmABD8QAAEGhiDpQhdDciqCtQgEAEgDADQivCvjhBeQjkBhj7ABQgFAAgEAAQkAAAjphiQjeheitisQiyiyhfjhQhijnAAj+");
	this.shape_176.setTransform(306.6,240);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBgjkCxiyQCziyDihfQDshkEEAAQEEAADsBkQDkBgCxCxQCxCyBhDjQBiDqACEAQAAELhkDrQhfDgisCvQgEAEgDAEQiyCwjkBhQjnBij/ABQgFAAgEAAQkEAAjshkQjihfiviuQi1i2hgjkQhkjrAAkB");
	this.shape_177.setTransform(306.6,240);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").p("A0NAAQAAkHBljvQBijpC0izQC2i0DkhhQDwhmEIAAQEHAADwBlQDoBiC0C0QCzCzBiDpQBkDrACEEQgBEPhlDwQhgDjivCyQgDADgEAEQi0CzjnBiQjsBjkCACQgFAAgEAAQkIAAjvhmQjmhhixiwQi4i4hijnQhkjugBkG");
	this.shape_178.setTransform(306.6,240);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").p("A0gAAQAAkLBnjzQBjjrC3i2QC4i3DohjQD0hnELAAQEMAADyBnQDrBjC3C3QC2C2BkDrQBlDwACEHQAAEThnDzQhiDmixC0QgEAEgDAEQi3C2jrBjQjvBlkGACQgFAAgEAAQkMAAjzhnQjohji0izQi7i6hjjrQhmjygBkJ");
	this.shape_179.setTransform(306.6,240);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC4i5QC8i5DrhkQD3hoEPAAQEPAAD3BoQDuBlC5C4QC5C5BlDuQBnD0ABELQAAEXhoD2QhjDqi0C2QgEAEgDAEQi5C4jvBlQjyBmkKACQgFAAgEAAQkQAAj2hpQjshji3i2Qi8i9hljuQhoj1AAkN");
	this.shape_180.setTransform(306.625,240.025);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC7i6QC+i9DvhlQD6hqETAAQETAAD6BqQDyBmC7C8QC8C6BmDyQBoD3ACEPQAAEbhqD6QhlDti2C5QgDADgEAFQi8C7jxBmQj2BnkNACQgGAAgEAAQkTAAj6hqQjvhli6i4Qi/jAhmjxQhqj5AAkR");
	this.shape_181.setTransform(306.6,240);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").p("A1YAAQAAkWBrj+QBoj1C+i+QDAi/DyhmQD+hsEXAAQEXAAD+BrQD1BoC+C+QC+C+BnD1QBrD6AAETQAAEehrD+QhlDwi5C8QgEADgDAFQi+C9j2BnQj5BqkRACQgGAAgEAAQkXAAj+hsQjyhmi8i7QjCjChoj1Qhqj8gBkV");
	this.shape_182.setTransform(306.6,240);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").p("A1rAAQAAkaBtkBQBpj5DBjAQDDjCD1hoQEBhtEbAAQEbAAEBBtQD4BpDBDBQDADABpD4QBsD+ACEXQAAEihuECQhnDzi7C+QgEAEgEAEQjADAj5BpQj8BrkVACQgFAAgFAAQkbAAkBhtQj2hoi+i9QjFjFhpj5QhskAgBkY");
	this.shape_183.setTransform(306.6,240);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").p("A1+AAQAAkeBvkFQBqj7DDjDQDGjFD5hpQEFhvEeAAQEeAAEFBvQD8BqDDDEQDDDDBrD7QBtEBABEbQAAEmhuEFQhpD2i9DBQgEAEgEAEQjEDDj7BqQkABtkZABQgFAAgFAAQkfAAkEhuQj5hpjBjAQjIjIhqj7QhukDgBkd");
	this.shape_184.setTransform(306.6,240);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBrkADGjGQDIjGD8hrQEJhwEiAAQEiAAEIBwQEABrDGDGQDFDGBsD/QBuEFACEeQAAEqhwEIQhqD6jADEQgEADgDAFQjHDFj/BsQkDBtkdACQgFAAgFAAQkiAAkIhwQj9hrjDjBQjLjLhrj/QhvkGgBkh");
	this.shape_185.setTransform(306.6,240);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").p("A2jAAQAAklBxkMQBukDDIjIQDLjJD/htQEMhxEmAAQEmAAEMBxQECBuDJDIQDIDIBtEDQBwEIABEiQAAEthxEMQhrD+jDDGQgDAEgFADQjIDIkDBuQkGBvkhACQgFAAgFAAQkmAAkMhxQkAhtjGjEQjMjNhukDQhwkKgBkk");
	this.shape_186.setTransform(306.6,240);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").p("A22AAQAAkpBzkPQBvkHDKjLQDOjLEDhuQEPhzEqAAQEqAAEPBzQEGBvDMDKQDKDLBvEHQBxELACEmQAAExhzEPQhtEBjFDIQgEAFgEAEQjLDLkGBuQkKBxkkACQgGAAgFAAQkqAAkPhzQkDhujJjHQjPjQhvkGQhykNgBko");
	this.shape_187.setTransform(306.6,240);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").p("A3JAAQAAktB1kTQBwkJDNjOQDQjOEHhvQETh1EtAAQEtAAETB1QEKBwDNDNQDODNBwEKQByEPACEqQAAE1h0ESQhvEFjHDLQgEAEgEAEQjODNkJBwQkOBzknABQgGAAgFAAQkuAAkSh0QkHhvjLjJQjSjThwkKQh0kQgBks");
	this.shape_188.setTransform(306.6,240);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").p("A3bAAQAAkxB1kWQBykNDQjQQDTjREJhwQEXh2ExAAQExAAEWB1QEOByDQDQQDPDQBzENQBzESACEtQAAE6h2EWQhwEIjJDNQgEAEgFAEQjQDQkNByQkRBzkrACQgGAAgFAAQkxAAkXh2QkKhwjNjMQjVjVhxkNQh1kUgBkv");
	this.shape_189.setTransform(306.6,240);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").p("A3uAAQAAk1B3kaQBzkQDTjSQDVjUENhyQEah3E1AAQE1AAEaB3QEQBzDTDTQDSDSBzEQQB2EWACExQgBE9h3EaQhxELjMDQQgEAEgFAEQjSDSkRBzQkUB1kvADQgGAAgFAAQk1gBkah3QkNhyjQjOQjYjYhzkQQh2kYgBky");
	this.shape_190.setTransform(306.625,240.025);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").p("A4BAAQAAk4B5keQB0kTDVjWQDZjWEQhzQEdh5E5AAQE5AAEdB5QEUB0DWDVQDUDWB1ETQB3EZACE1QAAFBh6EeQhxEOjQDSQgEAFgEAEQjWDVkTB0QkYB3kzACQgGAAgFAAQk5AAkdh6QkRhzjTjQQjajbh0kTQh4kcgBk2");
	this.shape_191.setTransform(306.6,240);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDXjYQDbjZETh0QEhh6E9AAQE9AAEgB6QEXB2DYDXQDYDYB2EXQB5EcABE5QAAFFh6EhQh0ERjRDVQgEAEgFAFQjYDXkXB2QkbB4k3ACQgGAAgFAAQk9AAkhh6QkTh0jWjUQjcjeh2kWQh6kfAAk6");
	this.shape_192.setTransform(306.6,240);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").p("A4mAAQAAlAB7klQB4kaDajaQDdjbEXh2QElh8FAAAQFAAAElB7QEaB4DbDaQDaDaB3EaQB6EhACE8QAAFJh8EkQh1EVjTDYQgFAEgFAEQjaDakaB3QkfB6k6ACQgGAAgGAAQlBAAkkh8QkXh2jYjWQjfjfh4kbQh6kigBk+");
	this.shape_193.setTransform(306.6,240);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").p("A45AAQAAlEB9koQB5keDdjcQDgjeEah4QEoh9FEAAQFEAAEoB9QEeB5DdDdQDdDcB4EeQB8EkACFAQgBFMh9EpQh2EYjXDaQgEAEgEAFQjeDckdB5QkiB6k+ADQgGAAgGAAQlEAAkoh9Qkbh4jajYQjijjh5kdQh8kngBlB");
	this.shape_194.setTransform(306.6,240);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").p("A5MAAQAAlHB/ksQB6khDfjgQDjjgEeh5QErh/FIAAQFIAAEsB/QEgB6DgDfQDfDgB7EhQB9EnACFEQAAFRh/ErQh4EbjZDcQgEAFgFAFQjgDfkgB6QknB9lAACQgHAAgGAAQlIAAkrh/Qkeh5jdjbQjljmh6kgQh+kpgBlF");
	this.shape_195.setTransform(306.6,240);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB7klDijiQDljjEhh6QEviAFMAAQFMAAEvCAQElB7DhDiQDjDiB7ElQB/EqABFHQAAFViAEvQh6EejaDgQgFAFgFAEQjiDiklB7QkoB+lFACQgHAAgGAAQlMAAkviAQkhh6jgjeQjnjnh7klQiAktAAlI");
	this.shape_196.setTransform(306.6,240);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").p("A5xAAQAAlPCBkzQB9koDljkQDojmEkh8QEziBFPAAQFPAAEzCBQEoB9DlDlQDkDkB9EoQCAEuACFLQAAFZiCEyQh6EijeDiQgFAFgFAEQjkDlkoB9QktB/lIACQgHAAgGAAQlQAAkyiBQklh9jijfQjqjrh9koQiAkwgBlM");
	this.shape_197.setTransform(306.6,240);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").p("A6EAAQAAlTCDk2QB/krDnjnQDqjpEoh9QE2iDFTAAQFTAAE2CDQErB/DoDnQDnDnB+ErQCCEyACFOQgBFciDE2Qh8EmjgDkQgFAFgEAFQjoDmkrB/QkwCAlMADQgHAAgGAAQlTAAk2iDQkoh9jljjQjsjth/ksQiCkzgBlQ");
	this.shape_198.setTransform(306.6,240);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").p("A6XAAQAAlWCFk6QCAkvDpjqQDujrEqh+QE6iFFXAAQFXAAE5CFQEvCADqDpQDqDqCAEvQCCE1ADFSQAAFhiFE5Qh9EpjjDmQgFAFgFAFQjqDpkvCAQkzCClQADQgHAAgGAAQlXAAk6iFQkrh+jnjmQjvjwiAkuQiEk3gBlU");
	this.shape_199.setTransform(306.6,240);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDsjsQDwjtEuiAQE9iGFbAAQFbAAE9CGQEyCBDsDsQDtDsCBEyQCEE5ACFVQAAFliGE9Qh/EsjlDpQgFAFgFAFQjsDskyCBQk3CElUACQgHAAgGAAQlbAAk9iGQkviAjpjoQjyjyiBkyQiGk7AAlY");
	this.shape_200.setTransform(306.625,240.025);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").p("A68AAQAAlfCHlAQCDk1DvjvQDyjwEyiCQFAiHFfAAQFfAAFACHQE1CDDwDvQDuDvCEE1QCFE8ACFZQAAFpiHFAQiBEvjnDtQgFAEgFAFQjwDvk1CDQk6CFlYACQgHAAgGAAQlfAAlAiHQkyiCjsjqQj1j1iDk2QiGk+gBlb");
	this.shape_201.setTransform(306.6,240);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").p("A7PAAQAAliCJlEQCEk5DyjxQD1jzE1iDQFEiJFiAAQFiAAFECJQE5CEDyDyQDyDxCDE5QCIE/ABFdQAAFsiJFFQiBEyjqDvQgFAFgFAFQjyDxk5CDQk9CHlcADQgHAAgGAAQliAAlEiKQk2iCjvjtQj3j4iEk4QiIlCgBlf");
	this.shape_202.setTransform(306.6,240);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").p("A7iAAQAAlmCLlIQCFk8D0j0QD4j1E4iEQFIiLFmAAQFmAAFICLQE8CFD0D0QD0D0CGE8QCIFDADFhQAAFxiLFHQiDE2jtDwQgFAFgFAFQj0D1k8CFQlCCIlfADQgGAAgHAAQlmAAlIiLQk4iEjyjvQj6j7iFk8QiKlFgBlj");
	this.shape_203.setTransform(306.6,240);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").p("A71AAQAAlqCNlLQCHlAD2j2QD6j4E8iFQFLiNFqAAQFqAAFLCNQFACHD2D2QD3D2CHFAQCKFGACFlQAAF0iMFLQiFE5jvD0QgFAFgFAFQj2D2lACHQlFCKliACQgHAAgHAAQlqAAlLiMQk8iFj0jyQj8j9iHlAQiMlJgBlm");
	this.shape_204.setTransform(306.6,240);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").p("AcIAAQAAFuiOFPQiIFDj5D5Qj6D5lDCJQlOCNluAAQluAAlOiNQlDiJj5j5Qj5j5iJlDQiNlPAAluQAAluCNlOQCJlDD5j5QD5j5FDiJQFOiNFuAAQFuAAFOCNQFDCJD6D5QD5D5CIFDQCOFOAAFug");
	this.shape_205.setTransform(306.6,240);

	var maskedShapeInstanceList = [this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194,this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_109}]},64).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[{t:this.shape_195}]},1).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[]},1).wait(32));

	// 波4
	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_206.setTransform(259.9,240);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").p("AgpAAQAAgRANgLQAMgNAQAAQASAAAMANQAMALAAARQAAARgMAMQgMANgSAAQgQAAgMgNQgNgMAAgRg");
	this.shape_207.setTransform(259.9,240);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").p("Ag6AAQAAgXARgSQASgRAXAAQAZAAASARQARASAAAXQAAAYgRASQgSARgZAAQgXAAgSgRQgRgSAAgYg");
	this.shape_208.setTransform(259.9,240);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").p("AhLAAQAAgfAWgWQAXgXAeAAQAgAAAXAXQAWAWAAAfQAAAggWAWQgXAXggAAQgeAAgXgXQgWgWAAggg");
	this.shape_209.setTransform(259.9,240);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmQAAAmgcAcQgbAcgnAAQgmAAgbgcQgcgcAAgmg");
	this.shape_210.setTransform(259.925,240.025);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").p("AhuAAQAAgtAhggQAhghAsAAQAuAAAhAhQAgAgAAAtQAAAuggAgQghAhguAAQgsAAghghQghggAAgug");
	this.shape_211.setTransform(259.9,240);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").p("Ah/AAQAAg0AmgmQAmglAzAAQA2AAAlAlQAlAmAAA0QAAA1glAmQglAlg2AAQgzAAgmglQgmgmAAg1g");
	this.shape_212.setTransform(259.9,240);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").p("AiQAAQAAg8ArgqQAqgrA7AAQA9AAAqArQArAqAAA8QAAA8grArQgqArg9AAQg7AAgqgrQgrgrAAg8g");
	this.shape_213.setTransform(259.9,240);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").p("AihAAQAAhDAwguQAvgxBCAAQBEAAAwAxQAvAuAABDQAABDgvAwQgwAwhEAAQhCAAgvgwQgwgwAAhDg");
	this.shape_214.setTransform(259.9,240);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").p("AiyAAQAAhJA0g1QA1g0BJAAQBLAAA1A0QA0A1AABJQAABKg0A1Qg1A0hLAAQhJAAg1g0Qg0g1AAhKg");
	this.shape_215.setTransform(259.9,240);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA6g6BQAAQBSAAA6A6QA5A5AABRQAABSg5A5Qg6A6hSAAQhQAAg6g6Qg6g5AAhSg");
	this.shape_216.setTransform(259.9,240);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA/g/BXAAQBZAAA/A/QA+A+AABYQAABYg+A/Qg/A/hZAAQhXAAg/g/Qg/g/AAhYg");
	this.shape_217.setTransform(259.9,240);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBgAABEBDQBDBEAABfQAABfhDBEQhEBEhgAAQhfAAhEhEQhDhEAAhfg");
	this.shape_218.setTransform(259.925,240.025);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").p("Aj3AAQAAhmBJhJQBJhIBlAAQBnAABJBIQBJBJAABmQAABnhJBJQhJBJhnAAQhlAAhJhJQhJhJAAhng");
	this.shape_219.setTransform(259.9,240);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").p("AkIAAQAAhtBOhOQBOhOBsAAQBvAABNBOQBOBOAABtQAABuhOBOQhNBOhvAAQhsAAhOhOQhOhOAAhug");
	this.shape_220.setTransform(259.9,240);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBThTB0AAQB2AABTBTQBSBSAAB1QAAB1hSBTQhTBTh2AAQh0AAhThTQhThTAAh1g");
	this.shape_221.setTransform(259.9,240);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").p("AEsAAQAAB8hXBYQhYBYh9AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB9AABYBYQBXBYAAB7g");
	this.shape_222.setTransform(259.9,240);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").p("Ak9AAQAAhCAXg4QAYg4AugvQAtgtA2gXQA6gYBDAAQBDAAA4AWQA3AXAuAuQAvAvAYA2QAYA6AABDQAABDgYA5QgXA3guAuQgvAug2AYQg5AYhEAAQAAAAAAAAQhCAAg5gZQg3gXgugtQAAgBgBgBQgtgtgXg2QgYg5AAhEg");
	this.shape_223.setTransform(259.9,240);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").p("AlQAAQAAhGAZg8QAZg7AxgwQAwgwA5gZQA+gbBGAAQBGAAA8AZQA7AZAwAvQAyAyAZA6QAaA9AABHQAABHgaA9QgZA7gwAwQgxAwg6AZQg9AahHAAQAAAAAAAAQhGgBg8gaQg7gZgwgvQgBgBAAAAQgwgwgYg6Qgag9AAhHg");
	this.shape_224.setTransform(259.9,240);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").p("AljAAQAAhJAbhAQAag/AzgzQAzgyA9gaQBBgdBKAAQBKABBAAaQA9AaA0AzQA0AzAaA9QAcBBAABLQAABKgbBBQgbA+gyAyQg0A0g+AaQhAAbhLAAQAAAAAAAAQhKAAhAgbQg+gagygzQgBgBAAAAQgzgygag+QgbhAAAhLg");
	this.shape_225.setTransform(259.9,240);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").p("Al2AAQAAhNAdhEQAbhCA2g1QA1g1BBgcQBEgdBOAAQBOAABDAcQBBAbA2A1QA3A3AbBAQAdBFAABOQAABOgcBEQgcBBg1A2Qg2A2hCAbQhDAdhOAAQgBAAAAAAQhNgBhEgcQhBgbg2g1QAAgCgBAAQg1g1gbhAQgdhFAAhOg");
	this.shape_226.setTransform(259.9,240);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBRAABHAdQBEAdA5A4QA5A5AdBEQAfBIAABSQAABSgeBHQgeBFg3A4Qg5A4hFAeQhHAdhSABQAAAAAAAAQhSgBhHgeQhEgdg4g4QgBAAAAgBQg4g3gdhEQgehIAAhSg");
	this.shape_227.setTransform(259.925,240.025);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").p("AmbAAQAAhVAfhKQAfhJA7g7QA6g5BHgfQBMghBVAAQBWAABKAfQBIAeA6A7QA8A8AfBHQAgBLAABWQAABWggBLQgeBIg6A6Qg8A8hIAeQhKAghWAAQgBAAAAAAQhVgBhLgfQhIgfg6g6QgBgBAAAAQg6g6gehIQgghKAAhXg");
	this.shape_228.setTransform(259.9,240);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").p("AmuAAQAAhYAhhOQAghMA9g+QA9g9BLggQBPghBZAAQBaAABNAgQBLAgA+A8QA+A/AgBLQAhBOAABaQAABZggBPQggBMg9A8Qg+A+hMAhQhOAghZAAQgBAAAAAAQhZAAhOghQhLggg9g9QgBgBAAAAQg9g8gghLQghhPAAhag");
	this.shape_229.setTransform(259.9,240);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").p("AnBAAQAAhcAjhRQAhhQBAhAQBAhABOggQBSgkBdAAQBdAABRAiQBPAhBAA/QBBBCAhBNQAjBTAABdQAABdgiBTQghBOhABAQhBBAhOAiQhSAihdAAQgBAAAAAAQhdgBhRgiQhPghg/g/QgBgBgBgBQg/g/ghhOQgjhSAAheg");
	this.shape_230.setTransform(259.9,240);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBDhEQBChCBRgiQBWglBhAAQBhABBVAjQBSAiBCBCQBEBEAjBRQAkBWAABhQAABhgkBWQgjBShBBCQhEBDhSAjQhVAkhhAAQgBAAAAAAQhgAAhVgkQhTgjhChCQAAgBgBAAQhChDgihRQgkhVgBhig");
	this.shape_231.setTransform(259.9,240);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").p("AnmAAQAAhkAlhYQAkhXBGhEQBFhFBUgkQBagnBkAAQBlAABYAlQBVAlBGBDQBGBHAkBUQAmBaAABlQAABlgmBZQgkBWhEBEQhGBGhWAkQhYAmhlAAQgBAAAAAAQhkgBhZgmQhVgjhFhFQAAgBgBAAQhFhEgjhVQgmhZAAhmg");
	this.shape_232.setTransform(259.9,240);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").p("An5AAQAAhnAnhdQAmhZBHhIQBIhHBYgmQBdgnBoAAQBpAABbAmQBZAlBIBIQBJBIAlBZQAnBcAABpQAABogmBdQgmBZhHBIQhJBHhYAnQhcAmhpAAQgBAAAAAAQhoAAhcgnQhZgmhHhGQgBgBAAgBQhHhHgmhYQgnhcAAhqg");
	this.shape_233.setTransform(259.9,240);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").p("AoMAAQAAhrAphfQAnheBKhKQBKhKBbgnQBhgpBsAAQBtAABfAoQBcAmBKBKQBMBMAmBbQApBhAABsQAABsgoBgQgnBdhKBKQhLBLhcAmQhfAphtAAQgBAAAAAAQhsgBhfgoQhdgnhJhKQgBAAgBAAQhJhLgnhbQgphgAAhtg");
	this.shape_234.setTransform(259.9,240);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAphhBNhMQBNhNBegoQBkgrBwAAQBxAABiApQBgApBMBMQBOBOApBfQAqBkAABwQAABwgqBkQgoBghMBMQhOBNhgApQhjAqhwAAQgBAAAAAAQhvAAhkgrQhfgohMhMQgBgBgBAAQhMhMgohgQgqhjgBhxg");
	this.shape_235.setTransform(259.9,240);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").p("AoxAAQAAhzArhmQAqhkBQhQQBPhPBigqQBngsB0AAQB0AABmAsQBjApBQBPQBQBRAqBhQAsBoAAB0QAAB0gsBnQgpBjhPBPQhRBQhjAqQhmAsh0AAQgBAAAAAAQhzgBhngrQhjgqhPhOQAAgBgBgBQhPhPgqhjQgrhmAAh1g");
	this.shape_236.setTransform(259.9,240);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABpAsQBmArBSBRQBUBUArBlQAtBrAAB4QAAB4gtBqQgrBnhRBRQhTBThnArQhpAth4AAQgBAAAAAAQh3AAhrgtQhmgrhRhSQgBAAgBgBQhRhRgrhmQgthrAAh4g");
	this.shape_237.setTransform(259.925,240.025);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").p("ApXAAQAAh6AvhuQAshqBVhVQBVhUBogtQBvgvB7AAQB8AABtAuQBqAtBUBTQBWBXAtBoQAuBvAAB7QAAB7guBvQgtBphTBVQhWBVhqAtQhtAuh8AAQgBAAAAAAQh7gBhtgtQhqgthUhUQgBgBgBAAQhUhVgshpQgvhuAAh8g");
	this.shape_238.setTransform(259.9,240);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").p("AppAAQAAh/AvhxQAvhuBXhXQBXhWBsguQBygxB/AAQCAAABwAvQBtAuBYBXQBYBZAuBrQAwBzAAB/QAACAgwBxQguBthWBWQhYBYhuAvQhwAwh/AAQgCAAAAAAQh/AAhxgwQhtgvhWhVQgBgBgBgCQhWhWguhtQgwhxAAiAg");
	this.shape_239.setTransform(259.9,240);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").p("Ap8AAQAAiDAxh0QAwhxBahaQBZhZBwgwQB1gyCDAAQCEAABzAxQBxAwBaBYQBbBcAvBwQAyB1AACDQAACDgyB2QgvBwhZBZQhbBbhwAvQh1AyiCAAQgBAAgBAAQiCgBh1gxQhwgvhZhaQgBAAgBgBQhZhZgwhwQgxh1AAiEg");
	this.shape_240.setTransform(259.9,240);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").p("AqPAAQAAiGAzh4QAxh1BchcQBdhcBzgwQB5g1CGAAQCIABB3AyQB0AxBcBbQBeBeAwBzQA0B5AACHQAACHgzB5QgxBzhbBcQheBdh0AyQh4AyiGAAQgBAAgBAAQiGAAh4gzQh0gxhchbQgBgBAAgBQhchcgxhzQgzh4AAiIg");
	this.shape_241.setTransform(259.9,240);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").p("AqiAAQAAiKA1h7QAyh5BfheQBfhfB2gyQB9g1CKAAQCMABB6AzQB4AyBeBfQBgBgAzB2QA0B9AACKQAACLg0B8QgyB3heBeQhgBgh4AzQh7A0iKAAQgBAAgBAAQiKgBh8gzQh3gzhehdQgBgBgBgCQhehdgyh3Qg1h9AAiLg");
	this.shape_242.setTransform(259.9,240);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").p("Aq0AAQAAiOA1h+QA0h8BihiQBihhB5gzQCAg3COAAQCPAAB+A1QB7A0BiBhQBiBjA0B5QA2CBAACOQAACPg2B/Qg0B7hgBgQhjBjh6A0Qh/A2iOAAQgBAAgBAAQiOAAh/g3Qh6gzhhhhQgBAAgBgBQhhhhgzh6Qg2iAAAiPg");
	this.shape_243.setTransform(259.9,240);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").p("ArHAAQAAiSA3iCQA1h/BlhkQBkhkB9g1QCDg4CSAAQCTABCCA2QB+A2BkBjQBlBmA1B9QA4CDAACSQAACTg3CDQg2B+hjBjQhlBlh+A2QiCA2iSABQgBAAgBAAQiRgBiDg3Qh+g1hjhjQgBgBgBgBQhkhjg1h+Qg3iDAAiTg");
	this.shape_244.setTransform(259.9,240);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").p("AraAAQAAiWA5iFQA3iCBmhnQBnhmCAg3QCHg6CWAAQCXABCFA4QCCA2BmBmQBoBpA2CAQA6CHAACWQAACWg5CHQg3CBhlBmQhoBniCA3QiFA5iWAAQgBAAgBAAQiVAAiHg5QiBg3hmhlQAAAAgBgCQhmhmg3iBQg5iGAAiXg");
	this.shape_245.setTransform(259.9,240);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA5iFBphqQBqhoCDg4QCLg7CZAAQCbABCIA5QCFA4BqBoQBqBsA4CDQA6CKAACaQAACag6CKQg4CEhoBpQhrBriFA4QiJA5iZABQgBAAgBAAQiZgBiKg6QiEg3hphpQgBAAgBgCQhohog4iEQg7iLAAiag");
	this.shape_246.setTransform(259.9,240);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA5iJBshsQBthrCGg6QCOg8CeAAQCeAACMA7QCJA6BrBrQBtBtA5CHQA9COAACeQAACdg8COQg6CIhqBrQhtBtiJA6QiMA7idABQgCAAAAAAQidgBiOg8QiHg5hrhqQgBgBgBgBQhshsg5iIQg8iNAAieg");
	this.shape_247.setTransform(259.925,240.025);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").p("AsSAAQAAihA9iQQA7iNBvhuQBvhuCKg7QCRg+ChAAQCjABCPA8QCMA7BuBuQBwBwA6CKQA+CRAACiQAAChg9CRQg7CMhtBuQhwBviMA7QiQA9ihABQgBAAgBAAQihgBiQg9QiMg7hthtQgBgBgBgBQhuhug7iLQg9iQAAijg");
	this.shape_248.setTransform(259.9,240);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").p("AslAAQAAilA/iTQA8iQBxhxQByhxCNg8QCVg/ClAAQCmAACTA+QCPA8BxBwQByBzA8COQA/CVAAClQAACmg+CUQg8COhwBxQhzByiPA9QiTA+ilAAQgBAAgBAAQikAAiVg/QiOg8hwhwQgBAAgBgCQhxhwg8iPQg/iUAAimg");
	this.shape_249.setTransform(259.9,240);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTB0h0QB0hzCRg9QCZhBCoAAQCqABCXA/QCSA+B0BzQB0B1A+CQQBACZAACpQAACphACYQg+CShyBzQh1B1iSA+QiXA/ipABQgBAAgBAAQiogBiYg/QiSg+hzhyQgBgBgBgBQhzhzg9iTQhBiXAAiqg");
	this.shape_250.setTransform(259.9,240);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").p("AtLAAQAAisBCibQBAiWB2h3QB3h1CUhAQCchCCsAAQCuAACaBBQCWBAB2B1QB3B4A/CVQBCCcAACsQAACthCCcQg/CVh0B1Qh4B3iWBAQibBCisAAQgBAAgBAAQisAAibhCQiWhAh1h0QgBgBgBgBQh1h1hAiWQhBibgBiug");
	this.shape_251.setTransform(259.9,240);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").p("AtdAAQAAiwBDifQBBiZB5h5QB5h5CYg/QCfhFCwAAQCyABCdBCQCaBBB4B4QB6B7BACXQBECfAACxQAACwhDCgQhBCZh3B4Qh6B6iaBBQieBCivABQgCAAgBAAQiwgBifhDQiYhAh4h4QgBAAgBgCQh4h4hBiZQhDieAAiyg");
	this.shape_252.setTransform(259.9,240);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").p("AtwAAQAAi0BFiiQBCidB7h7QB8h7CbhCQCjhFC0AAQC2AAChBEQCcBCB7B7QB9B9BCCbQBECjAAC0QAAC1hECiQhCCch6B6Qh9B9icBDQiiBEizAAQgCAAgBAAQizAAijhEQichDh6h6QgBAAgBgBQh7h7hCicQhFijAAi1g");
	this.shape_253.setTransform(259.9,240);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB+h+QB/h9CehDQCmhHC4AAQC6ABCkBFQCgBDB+B9QB/CBBDCdQBGCnAAC4QAAC4hGCnQhDCfh8B9QiAB/igBEQilBFi3ABQgCAAgBAAQi3gBimhGQighDh8h8QgBgBgCgBQh9h9hDigQhHimAAi5g");
	this.shape_254.setTransform(259.9,240);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCBh/QCBiBCihFQCqhIC7AAQC9AACoBHQCkBFCACAQCCCCBECiQBICqAAC8QAAC8hICqQhECjh/B/QiCCCikBFQioBIi7AAQgCAAgBAAQi7AAiphIQijhFiAh/QgBgBgBgBQiAiAhFijQhHipgBi9g");
	this.shape_255.setTransform(259.9,240);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").p("AuoAAQAAi/BJisQBGioCEiDQCDiDClhGQCuhKC/AAQDBABCsBJQCmBGCDCCQCECFBGClQBKCtAADAQAADAhJCtQhHCmiBCCQiFCFinBGQirBJi/ABQgCAAgBAAQi/gBithJQimhGiCiCQgBAAgBgBQiDiDhGimQhJitAAjBg");
	this.shape_256.setTransform(259.9,240);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCphHQCxhLDDAAQDFAACuBKQCrBICFCEQCHCIBHCoQBLCxAADEQAADDhLCxQhHCqiECEQiHCHirBIQivBLjDAAQgBAAgBAAQjDAAixhLQiphHiEiEQgCgBgBgCQiFiFhIiqQhKiwAAjEg");
	this.shape_257.setTransform(259.925,240.025);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBKivCIiHQCJiJCshJQC0hMDHAAQDJABCyBLQCuBJCICHQCJCLBJCrQBMC1AADHQAADHhMC0QhJCuiGCHQiKCKiuBJQizBLjGABQgCAAgBAAQjGgBi0hLQithJiHiHQgBgBgCgBQiHiIhJitQhNizAAjJg");
	this.shape_258.setTransform(259.9,240);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").p("AvgAAQAAjKBNi4QBLixCLiLQCMiLCvhKQC4hODKAAQDNAAC2BNQCxBLCKCKQCMCNBKCvQBOC4AADLQAADLhOC4QhKCwiJCKQiNCMixBLQi2BOjKAAQgCAAgBAAQjKAAi4hOQiwhLiJiJQgCAAgBgCQiKiKhLixQhNi3AAjMg");
	this.shape_259.setTransform(259.9,240);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").p("AvzAAQAAjOBPi7QBMi1COiNQCOiOCyhLQC8hQDOAAQDRABC5BOQC0BMCNCNQCPCPBLCzQBQC7AADPQAADPhPC7QhMC0iMCMQiPCPi0BNQi6BOjOABQgCAAgBAAQjOgBi7hPQizhLiNiMQgBgCgBAAQiNiOhMi0QhPi6AAjQg");
	this.shape_260.setTransform(259.9,240);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").p("AwGAAQAAjSBRi+QBNi5CQiPQCRiQC2hNQC/hSDSAAQDUABC9BQQC4BNCQCPQCRCTBNC1QBRC/AADTQAADThRC+QhNC3iOCQQiSCRi4BOQi9BQjSAAQgCAAgBAAQjSAAi+hQQi3hOiPiOQgBgBgBgBQiQiPhNi5QhRi+AAjTg");
	this.shape_261.setTransform(259.9,240);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBQi8CSiTQCUiSC5hPQDChSDWAAQDYAADBBSQC7BPCSCRQCUCWBOC5QBSDCAADWQAADWhSDDQhOC6iRCSQiUCUi8BPQjABSjWAAQgBAAgCAAQjVAAjChSQi7hPiRiRQgBAAgBgCQiSiShPi7QhTjBAAjYg");
	this.shape_262.setTransform(259.9,240);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").p("AwrAAQAAjZBTjGQBRi/CViVQCWiVC8hQQDGhUDaAAQDcABDEBSQC+BRCVCUQCWCXBQC9QBUDGAADaQAADbhTDFQhRC+iTCUQiXCWi+BSQjFBSjZABQgBAAgCAAQjZAAjGhUQi9hQiUiTQgBgCgCAAQiUiWhRi+QhTjFAAjbg");
	this.shape_263.setTransform(259.9,240);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").p("Aw+AAQAAjeBVjIQBSjDCXiXQCaiYC/hRQDKhWDdAAQDgABDHBUQDCBSCYCXQCYCaBSDAQBVDJAADeQAADehVDKQhSDAiVCXQiaCajCBSQjIBUjdABQgBAAgCAAQjdAAjJhVQjBhSiWiWQgCgBgBgBQiXiXhSjCQhVjJAAjfg");
	this.shape_264.setTransform(259.9,240);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").p("AxRAAQAAjhBWjNQBUjGCaiaQCciaDDhSQDNhYDhAAQDkABDKBWQDGBTCaCaQCbCcBTDDQBXDNAADiQAADihXDNQhTDEiYCZQicCcjGBUQjLBWjhAAQgBAAgCAAQjhAAjMhXQjFhTiZiYQgBgBgBgBQiaiahTjFQhXjMAAjjg");
	this.shape_265.setTransform(259.9,240);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCdidQCeidDHhUQDQhYDlAAQDoAADOBXQDJBVCcCcQCeCfBUDHQBYDQAADmQAADlhYDRQhUDIibCcQifCejJBVQjOBYjkAAQgCAAgCAAQjlAAjQhYQjHhUicibQgBgCgBgBQidichVjJQhYjPAAjng");
	this.shape_266.setTransform(259.9,240);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").p("Ax3AAQAAjpBZjTQBXjNCfifQChigDKhVQDUhaDpAAQDrABDSBYQDMBWCfCfQCgCiBWDKQBaDUAADpQAADphaDUQhWDLidCeQiiCijMBWQjSBZjoABQgCAAgBAAQjpgBjThZQjLhWifidQgBgCgBgBQififhWjMQhajTAAjqg");
	this.shape_267.setTransform(259.925,240.025);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").p("AyJAAQAAjtBbjXQBYjQChihQCkiiDNhXQDYhcDsAAQDvABDVBaQDQBYCiChQCjCkBXDOQBbDXAADtQAADthbDYQhXDOigChQikCkjQBXQjWBbjrABQgCAAgCAAQjsAAjXhcQjPhXigigQgCgBgBgCQihihhYjPQhbjWAAjvg");
	this.shape_268.setTransform(259.9,240);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBajUCkilQCmikDRhZQDbhcDwAAQDzAADZBcQDTBZCkCkQClCnBZDQQBcDbAADxQAADxhcDbQhZDRiiCkQinCmjTBaQjZBcjvAAQgCAAgCAAQjwAAjbhcQjRhZijiiQgCgCgBgBQikikhZjTQhdjaAAjyg");
	this.shape_269.setTransform(259.9,240);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBbjXCninQCpinDUhaQDeheD0AAQD3AADcBdQDWBbCnCnQCoCpBaDUQBeDeAAD1QAAD1heDeQhaDVilCmQipCqjWBaQjdBejzAAQgCAAgCAAQj0AAjeheQjVhaimilQgBgCgBgBQininhbjVQhejeAAj2g");
	this.shape_270.setTransform(259.9,240);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").p("AzCAAQAAj4BgjhQBcjbCqipQCriqDXhbQDihgD4AAQD7ABDfBeQDaBcCqCpQCqCsBbDXQBgDjAAD4QAAD5hfDhQhcDZinCoQisCsjaBdQjgBej3ABQgCAAgCAAQj4AAjhhgQjZhcioinQgBgBgCgCQipiphcjaQhfjhgBj5g");
	this.shape_271.setTransform(259.9,240);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").p("AzUAAQAAj8BhjlQBdjdCsisQCvitDahcQDmhiD7AAQD/ABDjBgQDdBdCsCsQCtCvBdDaQBhDmAAD8QAAD9hhDkQhdDciqCsQivCujdBeQjjBgj7ABQgCAAgCAAQj7AAjlhhQjchdiriqQgBgCgCgBQisishdjdQhhjkAAj+g");
	this.shape_272.setTransform(259.9,240);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCvivQCxivDeheQDphiD/AAQECAADnBiQDhBeCuCvQCwCxBeDeQBiDpAAEAQAAEAhiDpQheDfitCuQixCxjgBfQjnBij/AAQgCAAgCAAQj/AAjphiQjfheititQgCgCgBgBQiviuhejhQhjjnAAkCg");
	this.shape_273.setTransform(259.9,240);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBhjkCxiyQCziyDhhfQDthkEDAAQEGAADqBjQDkBhCxCwQCzC0BfDiQBkDsAAEEQAAEEhkDsQhfDjivCwQi0C0jkBgQjrBkkCAAQgCAAgCAAQkDAAjshkQjjhgivivQgCgBgBgCQixixhhjkQhkjrAAkFg");
	this.shape_274.setTransform(259.9,240);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").p("A0NAAQAAkHBmjvQBhjpC1izQC2i0DkhhQDwhmEHAAQEKABDuBkQDnBiC0CzQC1C3BhDlQBlDwAAEHQAAEIhlDwQhiDmixCzQi2C2joBiQjuBkkGABQgCAAgCAAQkHAAjvhlQjmhiizixQgBgCgCgCQi0izhhjnQhljvgBkJg");
	this.shape_275.setTransform(259.9,240);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").p("A0fAAQAAkLBmjzQBkjrC2i2QC5i3DohjQDzhnELAAQEOABDxBmQDrBjC2C2QC3C5BjDoQBnD0AAELQAAEMhnDzQhjDpi0C2Qi5C5jrBjQjxBmkKABQgCAAgCAAQkKAAj0hnQjphji1i0QgBgCgCgBQi2i2hkjrQhmjyAAkNg");
	this.shape_276.setTransform(259.9,240);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC5i5QC7i5DrhkQD3hoEPAAQERAAD1BoQDuBkC5C5QC6C8BkDrQBoD3AAEPQAAEPhoD3QhkDti3C3Qi8C8juBlQj1BnkNABQgCAAgCAAQkPAAj2hoQjthki4i3QgBgCgCgBQi4i5hljuQhoj2AAkQg");
	this.shape_277.setTransform(259.925,240.025);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC8i6QC+i9DuhlQD7hqESAAQEWAAD4BpQDxBmC7C7QC9C/BlDvQBqD6AAETQAAEThqD7QhlDwi5C6Qi+C+jyBmQj4BqkSAAQgCAAgCAAQkSAAj6hqQjwhli6i5QgCgCgBgCQi8i7hmjxQhqj6AAkUg");
	this.shape_278.setTransform(259.9,240);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").p("A1XAAQAAkWBrj+QBnj1C/i+QDAi/DyhmQD+hsEWAAQEZABD8BqQD1BoC+C9QC/DBBnDyQBrD/AAEWQAAEXhrD+QhnDzi8C9QjBDBj1BnQj8BrkUABQgDAAgCAAQkWAAj9hsQj0hmi8i8QgCgCgCgBQi+i+hnj1Qhrj9AAkYg");
	this.shape_279.setTransform(259.9,240);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").p("A1qAAQAAkaBtkBQBpj5DAjAQDDjCD2hoQEBhtEaAAQEdABD/BsQD5BpDADAQDCDEBoD1QBtECAAEaQAAEbhtEBQhoD2i+DBQjEDDj4BpQkABskYABQgDAAgCAAQkaAAkBhtQj2hojAi/QgBgBgCgCQjAjAhpj5QhtkAAAkcg");
	this.shape_280.setTransform(259.9,240);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").p("A19AAQAAkeBukFQBqj7DEjDQDGjFD5hpQEFhvEdAAQEhABEDBuQD7BqDDDDQDFDGBpD5QBvEFAAEeQAAEehvEGQhpD6jBDBQjGDHj8BqQkDBukcAAQgDAAgCAAQkdAAkFhuQj6hqjCjAQgCgCgBgCQjEjDhqj7QhukEAAkgg");
	this.shape_281.setTransform(259.9,240);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBskADGjGQDIjGD8hrQEJhwEhAAQElABEGBuQD/BsDGDGQDHDIBqD8QBwEJAAEiQAAEjhvEHQhsD+jDDFQjJDJj/BsQkGBvkgAAQgDAAgCAAQkhAAkIhwQj+hrjEjDQgCgCgBgBQjGjGhsj/QhwkIAAkg");
	this.shape_282.setTransform(259.9,240);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").p("A2iAAQAAklBxkMQBtkDDJjIQDLjJD/htQEMhxElAAQEpABEJBwQEDBtDIDIQDJDMBtD/QBxENAAElQAAEmhxEMQhtEBjGDHQjLDLkCBuQkKBwkkABQgDAAgCAAQklAAkMhxQkAhtjHjGQgCgBgCgCQjIjIhtkDQhxkKAAkl");
	this.shape_283.setTransform(259.9,240);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").p("A21AAQAAkpBykPQBvkHDLjLQDOjLEDhuQEPhzEpAAQEtABENByQEFBuDLDLQDMDOBuEDQBzEQAAEpQAAEqhzEPQhuEEjIDKQjODOkGBvQkNBxkoACQgDAAgCAAQkpAAkPhzQkEhujKjIQgBgCgCgCQjLjLhukGQhzkOAAko");
	this.shape_284.setTransform(259.9,240);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").p("A3IAAQAAktB0kTQBwkJDOjOQDQjOEGhvQETh1EtAAQExABEQB0QEJBwDNDNQDPDRBvEGQB1ETAAEtQAAEth1ETQhvEIjLDNQjRDQkJBwQkRB0krAAQgCAAgDAAQksAAkTh0QkIhvjMjLQgBgCgCgBQjOjOhwkKQh0kRAAks");
	this.shape_285.setTransform(259.9,240);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").p("A3bAAQAAkxB2kWQBykNDQjQQDTjREJhwQEXh2EwAAQE0ABEUB0QENByDQDQQDRDTBwEKQB2EWAAExQAAEyh1EWQhxELjODPQjTDTkNByQkUB0kvABQgCAAgDAAQkwAAkXh2QkKhwjPjOQgCgBgBgCQjQjQhykNQh2kWAAkv");
	this.shape_286.setTransform(259.9,240);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").p("A3uAAQAAk1B3kaQBzkQDTjSQDWjUEMhyQEah3E1AAQE4ABEXB2QEQBzDTDSQDTDWByENQB4EaAAE1QAAE1h4EaQhyEOjQDSQjWDVkQBzQkYB3kyABQgDAAgCAAQk1gBkZh3QkOhyjSjQQgBgCgCgBQjTjThzkQQh3kZAAk0");
	this.shape_287.setTransform(259.925,240.025);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").p("A4AAAQAAk4B4keQB1kTDVjWQDZjWEQhzQEdh5E4AAQE8ABEbB4QETB0DVDVQDXDZBzEQQB5EeAAE4QAAE5h5EeQh0ERjSDUQjYDZkUB0QkbB3k3ACQgCAAgDAAQk4AAkdh6QkShzjTjSQgCgCgCgCQjVjVh0kTQh5kdAAk3");
	this.shape_288.setTransform(259.9,240);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDYjYQDbjZETh0QEhh6E8AAQFAAAEeB6QEXB1DYDYQDZDbB0ETQB6EhAAE9QAAE9h6EhQh1EVjVDWQjbDbkXB2QkeB6k7AAQgCAAgDAAQk8AAkgh6QkVh1jXjVQgBgCgCgBQjYjZh2kWQh6kgAAk7");
	this.shape_289.setTransform(259.9,240);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").p("A4mAAQAAlAB8klQB3kaDbjaQDdjbEXh2QElh8E/AAQFEABEhB6QEbB4DaDaQDbDdB3EXQB7ElAAFAQAAFBh7EkQh3EYjXDaQjeDdkaB3QkjB7k+ABQgCAAgDAAQk/AAklh8QkYh2jZjXQgCgCgBgCQjbjah3kbQh8kjAAk/");
	this.shape_290.setTransform(259.9,240);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").p("A45AAQAAlEB+koQB4keDejcQDgjeEah4QEoh9FDAAQFIABElB8QEdB5DdDcQDeDhB4EaQB9EoAAFEQAAFEh9EpQh4EbjaDcQjgDgkeB5QkmB8lCABQgCAAgDAAQlDAAkoh9Qkch4jbjaQgCgCgCgCQjdjdh4kdQh9kngBlD");
	this.shape_291.setTransform(259.9,240);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").p("A5LAAQAAlHB+ksQB7khDfjgQDjjgEeh5QErh/FHAAQFLABEpB+QEhB6DfDfQDhDjB5EeQB/EsAAFHQAAFIh/EsQh5EejdDfQjjDjkhB6QkpB9lFACQgDAAgDAAQlHAAkrh/Qkfh5jejdQgCgCgCgBQjfjhh7kgQh+krAAlG");
	this.shape_292.setTransform(259.9,240);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB7klDjjiQDljjEhh6QEviAFLAAQFPAAEsCAQElB7DiDiQDjDmB6EgQCAEvAAFMQAAFMiAEvQh6EijgDhQjlDmkkB7QktCAlJAAQgDAAgDAAQlLAAkviAQkih6jhjgQgBgBgCgCQjjjih7klQiAktAAlL");
	this.shape_293.setTransform(259.9,240);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").p("A5xAAQAAlPCCkzQB9koDljkQDojmEkh8QEyiBFPAAQFTABEwCAQEoB9DkDlQDmDoB8EkQCBEzAAFPQAAFQiBEyQh9EmjhDkQjoDokoB9QkwCAlNABQgDAAgDAAQlOAAkziBQkmh9jjjhQgCgCgBgCQjljlh9koQiCkxAAlO");
	this.shape_294.setTransform(259.9,240);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").p("A6EAAQAAlTCEk2QB+krDnjnQDrjpEoh9QE2iDFSAAQFXABEzCCQErB+DnDnQDpDrB9EoQCDE2AAFTQAAFTiDE2Qh+EpjkDmQjrDrkrB/QkzCClRABQgDAAgDAAQlSAAk2iDQkph+jmjkQgCgCgCgCQjnjnh+ksQiDk0gBlS");
	this.shape_295.setTransform(259.9,240);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").p("A6WAAQAAlWCEk6QCAkvDqjqQDtjrErh+QE6iFFWAAQFbABE2CEQEvCADqDpQDrDuB+EqQCFE6AAFXQAAFYiFE4Qh/EtjnDpQjtDtkvCAQk3CDlUACQgDAAgDAAQlWAAk5iFQkth/jpjnQgBgCgCgBQjqjriAkuQiEk5AAlV");
	this.shape_296.setTransform(259.9,240);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDtjsQDvjtEviAQE9iGFaAAQFeAAE6CGQEyCBDsDsQDuDwCAEuQCGE9AAFbQAAFbiGE9QiAEwjqDrQjwDwkyCBQk6CFlZABQgCAAgDAAQlaAAk9iGQkwiAjrjqQgCgCgCgCQjsjsiBkyQiGk8AAlZ");
	this.shape_297.setTransform(259.925,240.025);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").p("A68AAQAAlfCHlAQCEk1DujvQDzjwEyiCQFAiHFeAAQFiABE+CGQE1CDDvDvQDwDyCCEyQCHFAAAFfQAAFfiHFAQiCE0jsDtQjzDzk1CDQk+CGlcABQgDAAgDAAQleAAlAiHQkziCjtjsQgCgCgDgCQjujviEk2QiHk+AAle");
	this.shape_298.setTransform(259.9,240);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").p("A7OAAQAAliCJlEQCDk5DzjxQD1jzE1iDQFEiJFhAAQFmABFBCIQE5CEDxDxQDzD2CDE1QCJFEAAFiQAAFiiJFFQiDE2jvDxQj1D1k5CDQlBCJlgABQgDAAgDAAQlhAAlEiKQk3iCjwjvQgCgCgCgCQjyjyiDk4QiJlDAAlh");
	this.shape_299.setTransform(259.9,240);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").p("A7hAAQAAlmCKlIQCGk8D0j0QD4j1E4iEQFIiLFlAAQFqABFFCKQE8CFD0D0QD1D4CEE4QCLFIAAFmQAAFniLFHQiEE5jxD0Qj4D4k8CFQlFCJlkACQgDAAgDAAQllAAlIiLQk5iFjzjwQgCgCgCgDQj0j0iGk8QiKlGAAll");
	this.shape_300.setTransform(259.9,240);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").p("A70AAQAAlqCMlLQCHlAD3j2QD6j4E8iFQFLiNFpAAQFuABFICMQFACHD2D2QD4D7CFE7QCNFLAAFqQAAFqiNFLQiGE+jzD1Qj6D6lACHQlJCMlnAAQgDAAgDAAQlpAAlLiMQk9iGj1jzQgCgDgDgBQj2j3iHlAQiMlJAAlp");
	this.shape_301.setTransform(259.9,240);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").p("AcIAAQAAFuiNFPQiJFDj5D5Qj5D5lDCJQlOCNlvAAQltAAlOiNQlDiJj5j5Qj6j5iIlDQiOlPAAluQAAluCOlOQCIlDD6j5QD5j5FDiJQFOiNFtAAQFvAAFOCNQFDCJD5D5QD5D5CJFDQCNFOAAFug");
	this.shape_302.setTransform(259.9,240);

	var maskedShapeInstanceList = [this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290,this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_206}]},48).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[{t:this.shape_291}]},1).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[]},1).wait(48));

	// 波3
	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_303.setTransform(213.25,240);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").p("AgpAAQAAgRANgLQAMgNAQAAQASAAAMANQAMALAAARQAAARgMAMQgMANgSAAQgQAAgMgNQgNgMAAgRg");
	this.shape_304.setTransform(213.25,240);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").p("Ag6AAQAAgXARgSQASgRAXAAQAZAAASARQAQASAAAXQAAAYgQASQgSARgZAAQgXAAgSgRQgRgSAAgYg");
	this.shape_305.setTransform(213.25,240);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").p("AhMAAQAAgfAXgWQAWgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgWgXQgXgWAAggg");
	this.shape_306.setTransform(213.25,240);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmQAAAmgcAcQgbAcgnAAQgmAAgbgcQgcgcAAgmg");
	this.shape_307.setTransform(213.275,240.025);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").p("AhuAAQAAgtAhggQAgghAtAAQAuAAAhAhQAgAgAAAtQAAAuggAgQghAhguAAQgtAAggghQghggAAgug");
	this.shape_308.setTransform(213.25,240);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_309.setTransform(213.25,240);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").p("AiRAAQAAg8ArgqQArgrA7AAQA9AAAqArQArAqAAA8QAAA8grArQgqArg9AAQg7AAgrgrQgrgrAAg8g");
	this.shape_310.setTransform(213.25,240);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").p("AiiAAQAAhDAxguQAvgxBCAAQBEAAAwAxQAvAuAABDQAABDgvAwQgwAwhEAAQhCAAgvgwQgxgwAAhDg");
	this.shape_311.setTransform(213.25,240);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").p("AiyAAQAAhJA0g1QA1g0BJAAQBKAAA2A0QAzA1AABJQAABKgzA1Qg2A0hKAAQhJAAg1g0Qg0g1AAhKg");
	this.shape_312.setTransform(213.25,240);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA6g6BQAAQBSAAA5A6QA6A5AABRQAABSg6A5Qg5A6hSAAQhQAAg6g6Qg6g5AAhSg");
	this.shape_313.setTransform(213.25,240);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA/g/BXAAQBZAAA/A/QA+A+AABYQAABYg+A/Qg/A/hZAAQhXAAg/g/Qg/g/AAhYg");
	this.shape_314.setTransform(213.25,240);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBgAABEBDQBDBEAABfQAABfhDBEQhEBEhgAAQhfAAhEhEQhDhEAAhfg");
	this.shape_315.setTransform(213.275,240.025);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").p("Aj3AAQAAhmBIhJQBJhIBmAAQBnAABJBIQBIBJAABmQAABnhIBJQhJBJhnAAQhmAAhJhJQhIhJAAhng");
	this.shape_316.setTransform(213.25,240);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").p("AkJAAQAAhtBOhOQBPhOBsAAQBvAABNBOQBOBOAABtQAABuhOBOQhNBOhvAAQhsAAhPhOQhOhOAAhug");
	this.shape_317.setTransform(213.25,240);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBThTB0AAQB2AABTBTQBSBSAAB1QAAB1hSBTQhTBTh2AAQh0AAhThTQhThTAAh1g");
	this.shape_318.setTransform(213.25,240);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").p("AEsAAQAAB8hXBYQhZBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABZBYQBXBYAAB7g");
	this.shape_319.setTransform(213.25,240);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").p("Ak9AAQAAhCAXg4QAXg4AugvQAugtA2gXQA6gYBDAAQBDAAA4AWQA3AXAuAuQAvAvAXA2QAYA6AABDQAABDgXA5QgXA3guAuQgvAug3AYQg4AYhEAAQAAAAAAAAQhDAAg4gZQg3gXgugtQgBgBAAgBQgugtgWg2QgYg5AAhEg");
	this.shape_320.setTransform(213.25,240);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").p("AlRAAQAAhGAag8QAZg7AxgwQAvgwA6gZQA9gbBHAAQBGAAA8AZQA6AZAxAvQAyAyAZA6QAaA9AABHQAABHgaA9QgZA7gwAwQgxAwg6AZQg9AahHAAQAAAAAAAAQhGgBg9gaQg7gZgvgvQgBgBAAAAQgwgwgZg6Qgag9AAhHg");
	this.shape_321.setTransform(213.25,240);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").p("AlkAAQAAhJAchAQAag/AzgzQAygyA9gaQBBgdBLAAQBKABBAAaQA9AaA0AzQA0AzAaA9QAcBBAABLQAABKgcBBQgaA+gyAyQg0A0g+AaQhAAbhLAAQAAAAAAAAQhKAAhAgbQg+gagzgzQAAgBgBAAQgygygag+QgbhAgBhLg");
	this.shape_322.setTransform(213.25,240);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").p("Al2AAQAAhNAchEQAchCA2g1QA1g1BAgcQBFgdBOAAQBOAABDAcQBBAbA1A1QA3A3AcBAQAdBFAABOQAABOgcBEQgcBBg1A2Qg2A2hCAbQhDAdhOAAQgBAAAAAAQhNgBhEgcQhCgbg1g1QgBgCAAAAQg1g1gbhAQgdhFAAhOg");
	this.shape_323.setTransform(213.25,240);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBRAABHAdQBEAdA5A4QA5A5AdBEQAfBIAABSQAABSgeBHQgeBFg3A4Qg5A4hFAeQhHAdhSABQAAAAAAAAQhSgBhHgeQhEgdg4g4QgBAAAAgBQg4g3gdhEQgehIAAhSg");
	this.shape_324.setTransform(213.275,240.025);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").p("AmcAAQAAhVAghKQAehJA7g7QA7g5BHgfQBLghBWAAQBWAABJAfQBIAeA7A7QA8A8AfBHQAgBLAABWQAABWggBLQgeBIg6A6Qg8A8hIAeQhKAghWAAQgBAAAAAAQhVgBhLgfQhIgfg6g6QgBgBgBAAQg6g6gehIQgghKAAhXg");
	this.shape_325.setTransform(213.25,240);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").p("AmuAAQAAhYAhhOQAfhMA+g+QA9g9BLggQBOghBaAAQBZAABOAgQBLAgA9A8QA/A/AgBLQAhBOAABaQAABZghBPQgfBMg9A8Qg/A+hLAhQhOAghZAAQgBAAAAAAQhZAAhOghQhLggg9g9QgBgBgBAAQg9g8gfhLQghhPAAhag");
	this.shape_326.setTransform(213.25,240);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").p("AnBAAQAAhcAihRQAihQBAhAQBAhABNggQBTgkBdAAQBdAABRAiQBPAhBAA/QBBBCAhBNQAjBTAABdQAABdgiBTQghBOhABAQhBBAhOAiQhSAihdAAQgBAAAAAAQhdgBhSgiQhOghhAg/QAAgBgBgBQg/g/ghhOQgjhSAAheg");
	this.shape_327.setTransform(213.25,240);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBChEQBDhCBRgiQBWglBhAAQBhABBVAjQBRAiBDBCQBEBEAjBRQAkBWAABhQAABhgkBWQgjBShBBCQhFBDhRAjQhVAkhhAAQgBAAAAAAQhhAAhVgkQhSgjhChCQgBgBAAAAQhChDgjhRQgjhVgBhig");
	this.shape_328.setTransform(213.25,240);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").p("AnnAAQAAhkAmhYQAkhXBGhEQBEhFBVgkQBZgnBlAAQBlAABXAlQBWAlBFBDQBGBHAkBUQAnBaAABlQAABlgmBZQgkBWhEBEQhGBGhWAkQhYAmhlAAQgBAAAAAAQhlgBhYgmQhWgjhEhFQAAgBgCAAQhEhEgjhVQgnhZAAhmg");
	this.shape_329.setTransform(213.25,240);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").p("An5AAQAAhnAmhdQAnhZBHhIQBHhHBZgmQBcgnBpAAQBoAABcAmQBZAlBIBIQBIBIAmBZQAnBcAABpQAABogmBdQgmBZhHBIQhJBHhZAnQhbAmhpAAQgBAAAAAAQhoAAhcgnQhZgmhIhGQAAgBAAgBQhHhHgmhYQgnhcAAhqg");
	this.shape_330.setTransform(213.25,240);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").p("AoMAAQAAhrAphfQAmheBLhKQBKhKBbgnQBhgpBsAAQBsAABfAoQBdAmBKBKQBMBMAmBbQApBhAABsQAABsgpBgQgmBdhKBKQhLBLhdAmQhfAphsAAQgBAAAAAAQhsgBhfgoQhdgnhKhKQAAAAgBAAQhKhLgmhbQgphgAAhtg");
	this.shape_331.setTransform(213.25,240);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAohhBOhMQBMhNBfgoQBkgrBwAAQBxAABiApQBfApBNBMQBOBOAoBfQArBkAABwQAABwgqBkQgpBghLBMQhOBNhgApQhjAqhwAAQgBAAAAAAQhwAAhjgrQhggohLhMQgBgBgBAAQhNhMgohgQgqhjAAhxg");
	this.shape_332.setTransform(213.25,240);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").p("AoyAAQAAhzAshmQAqhkBPhQQBQhPBhgqQBogsB0AAQB0AABmAsQBjApBQBPQBQBRAqBhQAsBoAAB0QAAB0gsBnQgpBjhPBPQhRBQhjAqQhmAsh0AAQgBAAAAAAQh0gBhmgrQhjgqhPhOQgBgBAAgBQhPhPgqhjQgshmAAh1g");
	this.shape_333.setTransform(213.25,240);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABpAsQBmArBSBRQBUBUArBlQAtBrAAB4QAAB4gtBqQgrBnhRBRQhTBThnArQhqAth3AAQgBAAAAAAQh3AAhrgtQhmgrhRhSQgBAAgBgBQhRhRgrhmQgthrAAh4g");
	this.shape_334.setTransform(213.275,240.025);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").p("ApXAAQAAh6AuhuQAthqBVhVQBVhUBogtQBvgvB7AAQB8AABtAuQBpAtBVBTQBWBXAtBoQAuBvAAB7QAAB7guBvQgtBphTBVQhXBVhqAtQhtAuh7AAQgBAAAAAAQh7gBhtgtQhqgthUhUQgBgBgBAAQhUhVgthpQguhuAAh8g");
	this.shape_335.setTransform(213.25,240);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").p("ApqAAQAAh/AwhxQAvhuBWhXQBYhWBsguQBygxB/AAQCAAABwAvQBtAuBXBXQBYBZAvBrQAwBzAAB/QAACAgwBxQguBthWBWQhZBYhtAvQhxAwh+AAQgCAAAAAAQh/AAhxgwQhtgvhXhVQgBgBAAgCQhWhWgvhtQgwhxAAiAg");
	this.shape_336.setTransform(213.25,240);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").p("Ap9AAQAAiDAyh0QAvhxBahaQBahZBwgwQB1gyCDAAQCEAABzAxQBwAwBaBYQBcBcAvBwQAyB1AACDQAACDgyB2QgvBwhZBZQhbBbhxAvQh0AyiCAAQgBAAgBAAQiDgBh0gxQhxgvhYhaQgCAAgBgBQhZhZgvhwQgyh1AAiEg");
	this.shape_337.setTransform(213.25,240);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").p("AqQAAQAAiGAzh4QAxh1BdhcQBchcBzgwQB5g1CHAAQCIABB2AyQB1AxBcBbQBdBeAxBzQAzB5AACHQAACHgyB5QgyBzhaBcQheBdh0AyQh4AyiGAAQgBAAgBAAQiHAAh4gzQh0gxhbhbQgBgBAAgBQhdhcgwhzQgzh4gBiIg");
	this.shape_338.setTransform(213.25,240);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").p("AqiAAQAAiKA0h7QAzh5BfheQBfhfB2gyQB9g1CKAAQCLABB7AzQB3AyBfBfQBgBgAzB2QA0B9AACKQAACLg0B8QgyB3heBeQhgBgh4AzQh7A0iKAAQgBAAgBAAQiKgBh8gzQh3gzhehdQgBgBgBgCQhehdgzh3Qg0h9AAiLg");
	this.shape_339.setTransform(213.25,240);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").p("Aq1AAQAAiOA2h+QA0h8BhhiQBihhB5gzQCBg3COAAQCPAAB+A1QB7A0BhBhQBjBjAzB5QA3CBAACOQAACPg2B/Qg0B7hgBgQhjBjh7A0Qh/A2iNAAQgBAAgBAAQiOAAh/g3Qh7gzhghhQgBAAgBgBQhhhhgzh6Qg3iAAAiPg");
	this.shape_340.setTransform(213.25,240);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").p("ArIAAQAAiSA3iCQA2h/BlhkQBkhkB9g1QCDg4CSAAQCTABCCA2QB+A2BkBjQBlBmA1B9QA4CDAACSQAACTg3CDQg2B+hjBjQhmBlh9A2QiCA2iSABQgBAAgBAAQiSgBiDg3Qh9g1hkhjQAAgBgBgBQhkhjg1h+Qg4iDAAiTg");
	this.shape_341.setTransform(213.25,240);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").p("ArbAAQAAiWA6iFQA3iCBmhnQBnhmCAg3QCHg6CWAAQCXABCEA4QCCA2BnBmQBnBpA3CAQA5CHAACWQAACWg5CHQg2CBhlBmQhpBniBA3QiGA5iVAAQgBAAgBAAQiWAAiGg5QiBg3hmhlQgBAAgBgCQhlhmg3iBQg5iGgBiXg");
	this.shape_342.setTransform(213.25,240);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA4iFBqhqQBqhoCDg4QCLg7CZAAQCaABCJA5QCFA4BpBoQBrBsA3CDQA7CKAACaQAACag6CKQg4CEhoBpQhrBriFA4QiJA5iZABQgBAAgBAAQiZgBiKg6QiEg3hphpQgBAAgBgCQhphog4iEQg6iLAAiag");
	this.shape_343.setTransform(213.25,240);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA5iJBshsQBthrCGg6QCOg8CeAAQCeAACMA7QCIA6BsBrQBtBtA5CHQA9COAACeQAACdg8COQg6CIhqBrQhuBtiIA6QiMA7idABQgCAAAAAAQidgBiOg8QiHg5hrhqQgBgBgBgBQhshsg5iIQg8iNAAieg");
	this.shape_344.setTransform(213.275,240.025);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").p("AsTAAQAAihA9iQQA8iNBuhuQBvhuCKg7QCSg+ChAAQCiABCQA8QCMA7BuBuQBwBwA6CKQA+CRAACiQAAChg+CRQg6CMhtBuQhxBviLA7QiQA9ihABQgBAAgBAAQihgBiRg9QiLg7huhtQgBgBgBgBQhthug7iLQg+iQAAijg");
	this.shape_345.setTransform(213.25,240);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").p("AslAAQAAilA+iTQA9iQBxhxQBxhxCOg8QCVg/ClAAQCmAACTA+QCPA8BxBwQByBzA8COQA/CVAAClQAACmg+CUQg8COhwBxQhzByiPA9QiTA+ilAAQgBAAgBAAQilAAiUg/QiPg8hwhwQAAAAgCgCQhwhwg8iPQg/iUAAimg");
	this.shape_346.setTransform(213.25,240);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTB0h0QB0hzCRg9QCZhBCoAAQCqABCXA/QCSA+B0BzQB0B1A+CQQBACZAACpQAACphACYQg+CShyBzQh1B1iTA+QiWA/ipABQgBAAgBAAQiogBiYg/QiSg+hzhyQgBgBgBgBQhzhzg+iTQhAiXAAiqg");
	this.shape_347.setTransform(213.25,240);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").p("AtLAAQAAisBCibQBAiWB1h3QB3h1CVhAQCchCCsAAQCtAACbBBQCWBAB2B1QB3B4A/CVQBCCcAACsQAACthCCcQg/CVh0B1Qh4B3iXBAQiaBCisAAQgBAAgBAAQisAAibhCQiWhAh1h0QgBgBgBgBQh1h1hAiWQhCibAAiug");
	this.shape_348.setTransform(213.25,240);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").p("AteAAQAAiwBDifQBBiZB6h5QB5h5CXg/QCghFCwAAQCyABCdBCQCZBBB5B4QB6B7BACXQBECfAACxQAACwhDCgQhBCZh4B4Qh6B6iZBBQieBCivABQgCAAgBAAQiwgBifhDQiYhAh4h4QgBAAgCgCQh4h4hAiZQhEieAAiyg");
	this.shape_349.setTransform(213.25,240);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").p("AtwAAQAAi0BEiiQBCidB8h7QB8h7CbhCQCjhFC0AAQC2AACgBEQCdBCB7B7QB8B9BDCbQBECjAAC0QAAC1hECiQhDCch5B6Qh9B9idBDQihBEizAAQgCAAgBAAQi0AAiihEQichDh7h6QgBAAgBgBQh7h7hCicQhEijAAi1g");
	this.shape_350.setTransform(213.25,240);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB+h+QB/h9CdhDQCnhHC4AAQC5ABCkBFQCgBDB/B9QB/CBBCCdQBHCnAAC4QAAC4hGCnQhDCfh8B9QiAB/igBEQilBFi3ABQgCAAgBAAQi3gBinhGQifhDh8h8QgCgBgBgBQh9h9hDigQhHimAAi5g");
	this.shape_351.setTransform(213.25,240);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCBh/QCBiBCihFQCqhIC7AAQC9AACoBHQCkBFCACAQCCCCBECiQBICqAAC8QAAC8hICqQhECjiAB/QiCCCijBFQipBIi6AAQgCAAgBAAQi7AAiqhIQijhFh/h/QgBgBgBgBQiAiAhFijQhIipAAi9g");
	this.shape_352.setTransform(213.25,240);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").p("AupAAQAAi/BJisQBHioCDiDQCEiDClhGQCthKDAAAQDBABCrBJQCnBGCDCCQCECFBGClQBKCtAADAQAADAhKCtQhGCmiBCCQiFCFinBGQisBJi+ABQgCAAgBAAQi/gBithJQimhGiCiCQgBAAgCgBQiCiDhGimQhKitAAjBg");
	this.shape_353.setTransform(213.25,240);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCphHQCxhLDDAAQDEAACvBKQCqBICGCEQCHCIBHCoQBLCxAADEQAADDhLCxQhHCqiECEQiICHiqBIQivBLjDAAQgBAAgBAAQjDAAixhLQiphHiEiEQgCgBgBgCQiFiFhIiqQhKiwAAjEg");
	this.shape_354.setTransform(213.275,240.025);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBJivCJiHQCJiJCrhJQC1hMDHAAQDJABCxBLQCvBJCICHQCJCLBJCrQBMC1AADHQAADHhMC0QhJCuiHCHQiKCKiuBJQiyBLjGABQgCAAgBAAQjGgBi0hLQiuhJiHiHQgBgBgBgBQiIiIhJitQhMizAAjJg");
	this.shape_355.setTransform(213.25,240);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").p("AvhAAQAAjKBOi4QBLixCKiLQCMiLCvhKQC5hODKAAQDMAAC2BNQCxBLCLCKQCLCNBLCvQBOC4AADLQAADLhOC4QhLCwiICKQiNCMixBLQi3BOjJAAQgCAAgBAAQjKAAi4hOQiwhLiKiJQgBAAgBgCQiKiKhLixQhOi3AAjMg");
	this.shape_356.setTransform(213.25,240);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").p("Av0AAQAAjOBPi7QBNi1CNiNQCOiOCzhLQC7hQDPAAQDQABC5BOQC1BMCNCNQCPCPBLCzQBQC7AADPQAADPhPC7QhMC0iMCMQiQCPi0BNQi6BOjNABQgCAAgBAAQjOgBi7hPQi0hLiMiMQgBgCgCAAQiMiOhMi0QhQi6AAjQg");
	this.shape_357.setTransform(213.25,240);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").p("AwHAAQAAjSBRi+QBOi5CQiPQCRiQC2hNQC/hSDSAAQDUABC9BQQC3BNCRCPQCRCTBNC1QBQC/AADTQAADThQC+QhNC3iPCQQiRCRi4BOQi+BQjRAAQgCAAgBAAQjSAAi/hQQi2hOiPiOQgCgBAAgBQiQiPhOi5QhQi+gBjTg");
	this.shape_358.setTransform(213.25,240);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBPi8CTiTQCUiSC5hPQDChSDWAAQDYAADABSQC8BPCSCRQCTCWBPC5QBSDCAADWQAADWhSDDQhPC6iQCSQiVCUi7BPQjBBSjVAAQgBAAgCAAQjVAAjChSQi7hPiRiRQgCAAgBgCQiSiShPi7QhSjBAAjYg");
	this.shape_359.setTransform(213.25,240);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").p("AwsAAQAAjZBTjGQBRi/CViVQCXiVC8hQQDGhUDaAAQDbABDFBSQC+BRCVCUQCWCXBQC9QBUDGAADaQAADbhTDFQhRC+iTCUQiYCWi+BSQjEBSjZABQgBAAgCAAQjZAAjGhUQi+hQiUiTQAAgCgCAAQiViWhQi+QhUjFAAjbg");
	this.shape_360.setTransform(213.25,240);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").p("Aw/AAQAAjeBVjIQBSjDCYiXQCZiYDAhRQDJhWDeAAQDfABDIBUQDBBSCZCXQCYCaBSDAQBVDJAADeQAADehVDKQhSDAiWCXQiZCajDBSQjIBUjcABQgBAAgCAAQjeAAjIhVQjChSiWiWQgBgBgBgBQiYiXhSjCQhUjJgBjfg");
	this.shape_361.setTransform(213.25,240);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").p("AxSAAQAAjhBXjNQBTjGCbiaQCbiaDDhSQDNhYDiAAQDjABDLBWQDGBTCZCaQCcCcBSDDQBXDNAADiQAADihWDNQhTDEiZCZQicCcjFBUQjLBWjhAAQgBAAgCAAQjhAAjNhXQjEhTiZiYQgBgBgCgBQiaiahTjFQhWjMgBjjg");
	this.shape_362.setTransform(213.25,240);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCcidQCfidDHhUQDQhYDlAAQDnAADPBXQDIBVCdCcQCeCfBUDHQBYDQAADmQAADlhYDRQhUDIibCcQifCejJBVQjOBYjlAAQgBAAgCAAQjlAAjQhYQjIhUibibQgBgCgCgBQicichVjJQhYjPAAjng");
	this.shape_363.setTransform(213.25,240);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").p("Ax3AAQAAjpBZjTQBXjNCfifQChigDKhVQDUhaDpAAQDrABDRBYQDNBWCfCfQCgCiBWDKQBaDUAADpQAADphaDUQhWDLidCeQiiCijMBWQjSBZjoABQgCAAgBAAQjpgBjThZQjLhWifidQgBgCgBgBQififhWjMQhajTAAjqg");
	this.shape_364.setTransform(213.275,240.025);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").p("AyKAAQAAjtBbjXQBYjQCiihQCkiiDNhXQDXhcDtAAQDuABDWBaQDPBYCiChQCjCkBXDOQBcDXAADtQAADthcDYQhXDOigChQikCkjPBXQjWBbjsABQgBAAgCAAQjtAAjXhcQjOhXigigQgCgBgBgCQiiihhYjPQhajWgBjvg");
	this.shape_365.setTransform(213.25,240);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBZjUClilQCmikDQhZQDbhcDxAAQDzAADYBcQDTBZCkCkQCmCnBZDQQBcDbAADxQAADxhcDbQhZDRiiCkQinCmjTBaQjZBcjwAAQgBAAgCAAQjwAAjbhcQjRhZikiiQgBgCgCgBQikikhZjTQhcjaAAjyg");
	this.shape_366.setTransform(213.25,240);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBajXCninQCqinDThaQDfheD0AAQD3AADbBdQDXBbCnCnQCoCpBaDUQBeDeAAD1QAAD1heDeQhaDVilCmQiqCqjWBaQjcBej0AAQgBAAgCAAQj0AAjeheQjVhaimilQgCgCgBgBQininhajVQhejeAAj2g");
	this.shape_367.setTransform(213.25,240);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").p("AzCAAQAAj4BfjhQBdjbCpipQCsiqDXhbQDihgD4AAQD6ABDgBeQDZBcCqCpQCrCsBbDXQBgDjAAD4QAAD5hfDhQhcDZioCoQisCsjaBdQjfBej4ABQgBAAgCAAQj4AAjhhgQjZhcioinQgCgBgBgCQipiphcjaQhgjhAAj5g");
	this.shape_368.setTransform(213.25,240);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").p("AzVAAQAAj8BhjlQBejdCsisQCuitDbhcQDlhiD8AAQD+ABDjBgQDeBdCrCsQCuCvBdDaQBhDmAAD8QAAD9hhDkQhdDciqCsQivCujeBeQjjBgj6ABQgCAAgCAAQj8AAjlhhQjchdiriqQgBgCgBgBQisishejdQhgjkgBj+g");
	this.shape_369.setTransform(213.25,240);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCvivQCwivDfheQDohiEAAAQECAADnBiQDgBeCvCvQCwCxBeDeQBiDpAAEAQAAEAhiDpQheDfitCuQixCxjhBfQjnBij+AAQgCAAgCAAQkAAAjohiQjfheiuitQgBgCgCgBQiuiuhfjhQhijnAAkCg");
	this.shape_370.setTransform(213.25,240);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBgjkCxiyQC0iyDhhfQDshkEEAAQEGAADqBjQDkBhCxCwQCzC0BfDiQBkDsAAEEQAAEEhkDsQhfDjiwCwQi0C0jkBgQjqBkkCAAQgCAAgCAAQkDAAjthkQjihgiwivQgBgBgCgCQixixhgjkQhkjrAAkFg");
	this.shape_371.setTransform(213.25,240);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").p("A0NAAQAAkHBljvQBijpC0izQC2i0DlhhQDwhmEHAAQEKABDtBkQDnBiC0CzQC2C3BhDlQBlDwAAEHQAAEIhlDwQhiDmixCzQi3C2jnBiQjuBkkGABQgCAAgCAAQkHAAjvhlQjnhiiyixQgCgCgBgCQi0izhijnQhljvAAkJg");
	this.shape_372.setTransform(213.25,240);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").p("A0gAAQAAkLBnjzQBjjrC3i2QC4i3DohjQD0hnELAAQENABDyBmQDqBjC3C2QC3C5BjDoQBnD0AAELQAAEMhnDzQhjDpi0C2Qi5C5jrBjQjyBmkJABQgCAAgCAAQkLAAjzhnQjphji1i0QgCgCgBgBQi3i2hjjrQhmjygBkNg");
	this.shape_373.setTransform(213.25,240);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC5i5QC7i5DrhkQD3hoEPAAQERAAD0BoQDvBkC5C5QC6C8BkDrQBoD3AAEPQAAEPhoD3QhkDti3C3Qi8C8juBlQj1BnkNABQgCAAgCAAQkPAAj2hoQjthki4i3QgBgCgCgBQi4i5hljuQhoj2AAkQg");
	this.shape_374.setTransform(213.275,240.025);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC7i6QC/i9DuhlQD6hqETAAQEVAAD4BpQDxBmC8C7QC9C/BlDvQBqD6AAETQAAEThqD7QhlDwi5C6Qi/C+jxBmQj5BqkRAAQgCAAgCAAQkSAAj7hqQjwhli6i5QgBgCgCgCQi7i7hmjxQhqj6AAkUg");
	this.shape_375.setTransform(213.25,240);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").p("A1YAAQAAkWBrj+QBoj1C+i+QDBi/DyhmQD+hsEWAAQEZABD8BqQD1BoC+C9QC/DBBmDyQBsD/AAEWQAAEXhsD+QhmDzi8C9QjBDBj1BnQj8BrkVABQgCAAgCAAQkWAAj+hsQjzhmi9i8QgCgCgBgBQi+i+hoj1Qhrj9AAkYg");
	this.shape_376.setTransform(213.25,240);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").p("A1rAAQAAkaBtkBQBpj5DBjAQDDjCD1hoQEChtEaAAQEcABD/BsQD5BpDBDAQDCDEBoD1QBtECAAEaQAAEbhtEBQhoD2i/DBQjDDDj5BpQkABskYABQgCAAgCAAQkaAAkBhtQj3hoi/i/QgCgBgBgCQjBjAhpj5QhskAgBkcg");
	this.shape_377.setTransform(213.25,240);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").p("A1+AAQAAkeBvkFQBqj7DEjDQDFjFD5hpQEFhvEeAAQEgABEDBuQD8BqDDDDQDFDGBpD5QBuEFAAEeQAAEehuEGQhpD6jBDBQjHDHj7BqQkEBukcAAQgCAAgCAAQkeAAkFhuQj6hqjBjAQgCgCgCgCQjDjDhqj7QhukEgBkgg");
	this.shape_378.setTransform(213.25,240);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBrkADGjGQDJjGD8hrQEIhwEiAAQElABEFBuQD/BsDHDGQDGDIBrD8QBwEJAAEiQAAEjhvEHQhsD+jDDFQjJDJkABsQkFBvkhAAQgCAAgCAAQkiAAkHhwQj+hrjFjDQgBgCgCgBQjGjGhrj/QhwkIAAkg");
	this.shape_379.setTransform(213.25,240);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").p("A2jAAQAAklBxkMQBukDDIjIQDLjJD/htQENhxElAAQEoABEJBwQEDBtDJDIQDJDMBtD/QBxENAAElQAAEmhxEMQhtEBjGDHQjLDLkDBuQkKBwkkABQgCAAgCAAQklAAkMhxQkBhtjHjGQgBgBgCgCQjIjIhukDQhxkKAAkl");
	this.shape_380.setTransform(213.25,240);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").p("A22AAQAAkpBzkPQBvkHDLjLQDOjLEDhuQEPhzEpAAQEsABENByQEGBuDLDLQDMDOBuEDQBzEQAAEpQAAEqhzEPQhuEEjIDKQjPDOkGBvQkNBxkoACQgCAAgCAAQkpAAkPhzQkEhujKjIQgCgCgBgCQjLjLhvkGQhykOgBko");
	this.shape_381.setTransform(213.25,240);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").p("A3JAAQAAktB1kTQBwkJDOjOQDQjOEGhvQETh1EtAAQEwABEQB0QEJBwDODNQDPDRBvEGQB0ETAAEtQAAEth0ETQhvEIjLDNQjRDQkKBwQkRB0krAAQgBAAgDAAQktAAkTh0QkHhvjMjLQgCgCgCgBQjNjOhwkKQh0kRgBks");
	this.shape_382.setTransform(213.25,240);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").p("A3bAAQAAkxB1kWQBykNDQjQQDUjREJhwQEWh2ExAAQE0ABEUB0QEMByDRDQQDRDTBwEKQB2EWAAExQAAEyh1EWQhxELjODPQjTDTkNByQkUB0kvABQgCAAgDAAQkxAAkWh2QkLhwjOjOQgCgBgCgCQjQjQhxkNQh2kWAAkv");
	this.shape_383.setTransform(213.25,240);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").p("A3uAAQAAk1B3kaQBzkQDTjSQDWjUEMhyQEah3E1AAQE3ABEYB2QEQBzDTDSQDTDWByENQB4EaAAE1QAAE1h4EaQhyEOjQDSQjWDVkQBzQkYB3kyABQgDAAgCAAQk1gBkZh3QkOhyjSjQQgBgCgCgBQjTjThzkQQh3kZAAk0");
	this.shape_384.setTransform(213.275,240.025);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").p("A4BAAQAAk4B5keQB0kTDWjWQDYjWEQhzQEeh5E4AAQE8ABEaB4QEUB0DVDVQDWDZBzEQQB6EeAAE4QAAE5h5EeQh0ERjSDUQjZDZkTB0QkcB3k2ACQgCAAgDAAQk4AAkeh6QkRhzjUjSQgCgCgBgCQjWjVh0kTQh4kdgBk3");
	this.shape_385.setTransform(213.25,240);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDYjYQDajZEUh0QEhh6E8AAQE/AAEfB6QEWB1DZDYQDZDbB0ETQB6EhAAE9QAAE9h6EhQh1EVjVDWQjcDbkWB2QkfB6k6AAQgCAAgDAAQk8AAkhh6QkVh1jWjVQgCgCgCgBQjXjZh2kWQh6kgAAk7");
	this.shape_386.setTransform(213.25,240);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").p("A4mAAQAAlAB7klQB4kaDajaQDejbEXh2QEkh8FAAAQFDABEiB6QEaB4DbDaQDbDdB2EXQB8ElAAFAQAAFBh8EkQh2EYjXDaQjeDdkbB3QkiB7k+ABQgCAAgDAAQlAAAkkh8QkYh2jZjXQgCgCgCgCQjajah4kbQh7kjAAk/");
	this.shape_387.setTransform(213.25,240);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").p("A45AAQAAlEB9koQB5keDdjcQDgjeEah4QEph9FDAAQFHABElB8QEeB5DdDcQDeDhB4EaQB9EoAAFEQAAFEh9EpQh4EbjaDcQjhDgkdB5QkmB8lCABQgCAAgDAAQlDAAkph9Qkbh4jbjaQgCgCgCgCQjdjdh5kdQh9knAAlD");
	this.shape_388.setTransform(213.25,240);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").p("A5MAAQAAlHB/ksQB6khDgjgQDjjgEdh5QEsh/FHAAQFLABEpB+QEgB6DgDfQDhDjB5EeQB/EsAAFHQAAFIh/EsQh5EejdDfQjkDjkgB6QkpB9lFACQgDAAgDAAQlHAAksh/Qkfh5jejdQgBgCgCgBQjgjhh6kgQh+krgBlG");
	this.shape_389.setTransform(213.25,240);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB7klDjjiQDljjEhh6QEviAFLAAQFOAAEsCAQElB7DjDiQDjDmB6EgQCAEvAAFMQAAFMiAEvQh6EijgDhQjlDmklB7QktCAlIAAQgDAAgDAAQlLAAkviAQkih6jhjgQgCgBgCgCQjijih7klQiAktAAlL");
	this.shape_390.setTransform(213.25,240);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").p("A5xAAQAAlPCBkzQB9koDljkQDojmEkh8QEziBFPAAQFSABEwCAQEoB9DkDlQDmDoB9EkQCBEzAAFPQAAFQiBEyQh9EmjhDkQjpDokoB9QkwCAlMABQgDAAgDAAQlPAAkyiBQkmh9jjjhQgCgCgCgCQjljlh9koQiBkxAAlO");
	this.shape_391.setTransform(213.25,240);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").p("A6EAAQAAlTCDk2QB/krDnjnQDrjpEoh9QE2iDFSAAQFWABEzCCQEsB+DnDnQDpDrB9EoQCDE2AAFTQAAFTiDE2Qh+EpjkDmQjrDrksB/QkzCClQABQgDAAgDAAQlSAAk2iDQkqh+jljkQgCgCgCgCQjnjnh/ksQiDk0AAlS");
	this.shape_392.setTransform(213.25,240);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").p("A6XAAQAAlWCFk6QCAkvDqjqQDtjrErh+QE6iFFWAAQFaABE2CEQEvCADrDpQDrDuB+EqQCFE6AAFXQAAFYiFE4Qh/EtjnDpQjuDtkvCAQk2CDlUACQgDAAgDAAQlWAAk6iFQksh/jpjnQgBgCgCgBQjqjriAkuQiEk5gBlV");
	this.shape_393.setTransform(213.25,240);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDtjsQDvjtEviAQE9iGFaAAQFeAAE6CGQEyCBDsDsQDuDwCAEuQCGE9AAFbQAAFbiGE9QiAEwjqDrQjwDwkyCBQk7CFlYABQgCAAgDAAQlaAAk9iGQkwiAjrjqQgCgCgCgCQjsjsiBkyQiGk8AAlZ");
	this.shape_394.setTransform(213.275,240.025);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").p("A68AAQAAlfCHlAQCDk1DvjvQDzjwExiCQFBiHFeAAQFhABE+CGQE2CDDvDvQDwDyCCEyQCHFAAAFfQAAFfiHFAQiCE0jsDtQjzDzk2CDQk+CGlbABQgDAAgDAAQleAAlBiHQkziCjtjsQgCgCgCgCQjvjviDk2QiHk+AAle");
	this.shape_395.setTransform(213.25,240);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").p("A7PAAQAAliCJlEQCEk5DyjxQD1jzE1iDQFFiJFhAAQFmABFBCIQE4CEDyDxQDzD2CCE1QCKFEAAFiQAAFiiKFFQiCE2jvDxQj2D1k4CDQlCCJlfABQgDAAgDAAQlhAAlFiKQk2iCjwjvQgCgCgCgCQjyjyiEk4QiJlDAAlh");
	this.shape_396.setTransform(213.25,240);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").p("A7iAAQAAlmCLlIQCFk8D1j0QD3j1E5iEQFIiLFlAAQFqABFECKQE8CFD0D0QD2D4CEE4QCLFIAAFmQAAFniLFHQiFE5jwD0Qj5D4k8CFQlFCJljACQgDAAgDAAQllAAlIiLQk6iFjyjwQgCgCgCgDQj1j0iFk8QiKlGgBll");
	this.shape_397.setTransform(213.25,240);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").p("A71AAQAAlqCNlLQCHlAD3j2QD6j4E8iFQFLiNFpAAQFtABFICMQFACHD3D2QD4D7CFE7QCMFLAAFqQAAFqiMFLQiGE+jzD1Qj7D6lACHQlJCMlmAAQgDAAgDAAQlpAAlLiMQk+iGj1jzQgCgDgCgBQj2j3iHlAQiMlJgBlp");
	this.shape_398.setTransform(213.25,240);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").p("AcIAAQAAFuiNFPQiJFDj5D5Qj5D5lDCJQlPCNluAAQltAAlPiNQlDiJj5j5Qj5j5iJlDQiNlPAAluQAAluCNlOQCJlDD5j5QD5j5FDiJQFPiNFtAAQFuAAFPCNQFDCJD5D5QD5D5CJFDQCNFOAAFug");
	this.shape_399.setTransform(213.25,240);

	var maskedShapeInstanceList = [this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386,this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_303}]},32).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[{t:this.shape_387}]},1).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[]},1).wait(64));

	// 波2
	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_400.setTransform(166.6,240);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").p("AgpAAQAAgRAMgLQAMgNARAAQARAAANANQAMALAAARQAAARgMAMQgNANgRAAQgRAAgMgNQgMgMAAgRg");
	this.shape_401.setTransform(166.6,240);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").p("Ag7AAQAAgXASgSQARgRAYAAQAYAAASARQARASAAAXQAAAYgRASQgSARgYAAQgYAAgRgRQgSgSAAgYg");
	this.shape_402.setTransform(166.6,240);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").p("AhMAAQAAgfAXgWQAWgXAfAAQAgAAAXAXQAWAWAAAfQAAAggWAWQgXAXggAAQgfAAgWgXQgXgWAAggg");
	this.shape_403.setTransform(166.6,240);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAnAAAbAcQAcAbAAAmQAAAmgcAcQgbAcgnAAQgmAAgbgcQgcgcAAgmg");
	this.shape_404.setTransform(166.625,240.025);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").p("AhuAAQAAgtAhggQAgghAtAAQAuAAAgAhQAhAgAAAtQAAAughAgQggAhguAAQgtAAggghQghggAAgug");
	this.shape_405.setTransform(166.6,240);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_406.setTransform(166.6,240);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").p("AiRAAQAAg8ArgqQArgrA7AAQA8AAArArQAqAqAAA8QAAA8gqArQgrArg8AAQg7AAgrgrQgrgrAAg8g");
	this.shape_407.setTransform(166.6,240);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").p("AiiAAQAAhDAxguQAvgxBCAAQBEAAAvAxQAwAuAABDQAABDgwAwQgvAwhEAAQhCAAgvgwQgxgwAAhDg");
	this.shape_408.setTransform(166.6,240);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").p("AizAAQAAhJA1g1QA0g0BKAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKAAQhKAAg0g0Qg1g1AAhKg");
	this.shape_409.setTransform(166.6,240);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA5g6BRAAQBRAAA6A6QA6A5AABRQAABSg6A5Qg6A6hRAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_410.setTransform(166.6,240);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA/g/BXAAQBYAABAA/QA+A+AABYQAABYg+A/QhAA/hYAAQhXAAg/g/Qg/g/AAhYg");
	this.shape_411.setTransform(166.6,240);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBfAABEBDQBEBEAABfQAABfhEBEQhEBEhfAAQhfAAhEhEQhDhEAAhfg");
	this.shape_412.setTransform(166.625,240.025);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").p("Aj3AAQAAhmBJhJQBIhIBmAAQBnAABJBIQBIBJAABmQAABnhIBJQhJBJhnAAQhmAAhIhJQhJhJAAhng");
	this.shape_413.setTransform(166.6,240);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").p("AkJAAQAAhtBOhOQBOhOBtAAQBuAABOBOQBNBOAABtQAABuhNBOQhOBOhuAAQhtAAhOhOQhOhOAAhug");
	this.shape_414.setTransform(166.6,240);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBThTB0AAQB1AABTBTQBTBSAAB1QAAB1hTBTQhTBTh1AAQh0AAhThTQhThTAAh1g");
	this.shape_415.setTransform(166.6,240);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").p("AEsAAQAAB8hYBYQhYBYh8AAQh7AAhYhYQhYhYAAh8QAAh7BYhYQBYhYB7AAQB8AABYBYQBYBYAAB7g");
	this.shape_416.setTransform(166.6,240);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").p("Ak9AAQAAhCAXg4QAXg4AvgvQAtgtA2gXQA6gYBDAAQBDAAA4AWQA3AXAtAuQAwAwAYA2QAXA5AABDQAABEgXA4QgYA3gtAuQgBABAAAAQgvAtg2AYQg5AYhDAAQAAAAAAAAQhDAAg4gYQg3gYgugtQgvgvgWg2QgYg5AAhEg");
	this.shape_417.setTransform(166.6,240);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").p("AlRAAQAAhGAag8QAZg7AxgwQAwgwA5gZQA9gbBHAAQBGAAA8AZQA6AZAxAvQAyAyAZA7QAaA9AABGQgBBHgZA9QgZA7gxAwQAAAAAAAAQgwAwg7AZQg8AahHAAQAAAAAAAAQhGgBg8gZQg7gZgwgwQgxgxgZg6Qgag9AAhHg");
	this.shape_418.setTransform(166.6,240);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").p("AljAAQAAhJAahAQAbg/AzgzQAygyA9gaQBBgdBLAAQBKABA/AaQA+AaAzAzQA0A0AbA+QAbBAAABKQAABLgbBAQgbA+gyAyQgBABAAABQgzAyg+AaQhAAbhKAAQAAAAAAAAQhKAAhAgbQg+gagzgzQgzgzgag+QgbhAAAhLg");
	this.shape_419.setTransform(166.625,240);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").p("Al2AAQAAhNAchEQAchCA2g1QA1g1BAgcQBFgdBOAAQBOAABDAcQBBAbA1A1QA3A3AcBBQAdBEAABOQAABOgdBEQgcBBg0A2QgBABgBAAQg1A1hBAbQhEAdhNAAQgBAAAAAAQhNgBhDgcQhCgbg2g1Qg2g3gbhAQgdhFAAhOg");
	this.shape_420.setTransform(166.6,240);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBRAABHAdQBEAdA4A4QA6A6AdBEQAeBHABBSQgBBSgeBHQgdBFg4A4QAAAAgBABQg4A3hEAeQhHAdhSABQAAAAAAAAQhSgBhGgdQhFgeg4g4Qg5g4gdhEQgehIAAhSg");
	this.shape_421.setTransform(166.625,240.025);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").p("AmcAAQAAhVAghKQAfhJA6g7QA7g5BHgfQBLghBWAAQBWAABKAfQBHAeA7A7QA8A8AfBHQAgBLAABWQgBBWgfBLQgfBIg6A6QAAABgBABQg7A6hHAeQhLAghVAAQgBAAAAAAQhVgBhKgfQhJgeg6g7Qg7g7gehIQghhKAAhXg");
	this.shape_422.setTransform(166.6,240);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").p("AmuAAQAAhYAhhOQAfhMA+g+QA9g9BLggQBPghBZAAQBaAABNAgQBLAgA9A8QA/BAAgBLQAhBOAABZQAABaghBOQggBMg8A8QgBABgBABQg9A8hLAhQhOAghZAAQgBAAAAAAQhZAAhOggQhLghg9g9Qg/g9gfhLQghhPAAhag");
	this.shape_423.setTransform(166.6,240);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").p("AnBAAQAAhcAihRQAihQBAhAQBAhABNggQBTgkBdAAQBdAABRAiQBPAhBAA/QBBBCAhBOQAjBSAABdQAABegjBSQghBOhABAQAAABgBAAQhAA/hOAiQhSAihcAAQgBAAAAAAQhdgBhRghQhPghhAhAQhAhBghhOQgjhSAAheg");
	this.shape_424.setTransform(166.6,240);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBChEQBDhCBRgiQBWglBhAAQBhABBUAjQBSAiBCBCQBEBEAjBSQAkBVABBhQgBBigkBVQgjBRhBBDQgBAAgBACQhCBBhSAjQhVAkhgAAQgBAAAAAAQhhAAhUgkQhTgjhChCQhDhEgjhRQgkhVAAhig");
	this.shape_425.setTransform(166.625,240);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").p("AnnAAQAAhkAmhYQAlhXBFhEQBFhFBUgkQBZgnBlAAQBlAABXAlQBWAlBFBDQBGBHAlBVQAmBZAABlQgBBmglBYQglBWhDBEQgBAAgBACQhFBEhVAkQhYAmhlAAQgBAAAAAAQhlgBhXglQhWgkhFhFQhFhFgkhVQgnhZAAhmg");
	this.shape_426.setTransform(166.6,240);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").p("An5AAQAAhnAmhdQAnhZBHhIQBHhHBZgmQBdgnBoAAQBpAABbAmQBZAlBHBIQBKBJAlBYQAnBcAABpQAABpgnBcQglBZhIBHQAAABgBABQhHBGhZAnQhcAmhoAAQgBAAAAAAQhoAAhcgmQhYgmhJhHQhHhJgmhYQgnhdAAhpg");
	this.shape_427.setTransform(166.6,240);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").p("AoMAAQAAhrAphfQAmheBLhKQBKhKBbgnQBhgpBsAAQBsAABfAoQBdAmBKBKQBLBMAnBcQApBgAABsQAABtgpBfQgmBchKBKQgBABAAABQhKBKhdAmQhfAphsAAQgBAAAAAAQhsgBhfgoQhdgmhJhLQhMhLgmhbQgphgAAhtg");
	this.shape_428.setTransform(166.6,240);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAphhBMhMQBNhNBfgoQBkgrBwAAQBwAABiApQBgApBMBMQBPBOAoBfQAqBkABBwQgBBxgqBjQgoBghMBMQgBAAgBACQhMBLhgApQhiAqhwAAQgBAAAAAAQhwAAhjgqQhfgphNhMQhNhNgphgQgqhjAAhxg");
	this.shape_429.setTransform(166.625,240);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").p("AoyAAQAAhzAshmQAqhkBPhQQBQhPBigqQBngsB0AAQB0AABmAsQBjApBPBPQBRBRAqBjQAsBmAAB0QgBB1grBmQgqBjhPBOQAAACgBABQhPBOhkAqQhlArhzABQgBAAgBAAQh0gBhlgrQhkgphPhPQhQhRgqhjQgshmAAh1g");
	this.shape_430.setTransform(166.6,240);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABpAsQBmArBSBRQBUBUArBmQAtBqAAB4QAAB4gtBqQgrBmhRBSQgBABgBABQhSBRhmArQhqAth3AAQgBAAAAAAQh3AAhqgtQhngrhRhSQhThSgrhmQgthrAAh4g");
	this.shape_431.setTransform(166.625,240.025);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").p("ApXAAQAAh6AuhuQAuhqBUhVQBVhUBogtQBvgvB7AAQB8AABtAuQBpAtBVBTQBVBXAuBpQAuBuAAB7QAAB8guBuQguBphSBUQgBABgCABQhUBUhqAtQhsAth7ABQgBAAgBAAQh7gBhtgtQhqgthUhUQhVhWgthpQgvhuAAh8g");
	this.shape_432.setTransform(166.6,240);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").p("ApqAAQAAh/AwhxQAvhuBWhXQBYhWBsguQBygxB/AAQCAAABwAvQBtAuBXBXQBZBZAuBsQAwByAAB/QAACAgwBxQguBthXBWQAAABgBABQhXBWhtAvQhxAwh+AAQgBAAgBAAQh/AAhwgwQhtguhXhWQhYhZgvhtQgwhxAAiAg");
	this.shape_433.setTransform(166.6,240);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").p("Ap9AAQAAiDAyh0QAvhxBahaQBahZBwgwQB1gyCDAAQCEAABzAxQBxAwBZBYQBcBcAvBwQAyB1AACDQgBCEgxB1QgvBwhZBYQgBACgBAAQhZBahxAvQh0AxiCABQgBAAgBAAQiDgBh0gxQhwgvhZhaQhchagvhwQgyh1AAiEg");
	this.shape_434.setTransform(166.6,240);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").p("AqPAAQAAiGAyh4QAyh1BchcQBchcBzgwQB5g1CHAAQCHABB3AyQB0AxBcBbQBeBeAxB0QAzB4AACHQAACIgzB4QgxBzhbBcQgBABgBABQhcBbh0AyQh3AyiGAAQgCAAAAAAQiHAAh3gyQh0gyhchbQhdhegxhzQgzh4AAiIg");
	this.shape_435.setTransform(166.625,240);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").p("AqiAAQAAiKA0h7QAzh5BfheQBfhfB2gyQB9g1CKAAQCLABB7AzQB3AyBfBfQBgBgAzB3QA0B7AACLQAACLg0B8QgzB3hdBeQgBABgBABQhfBeh3AzQh7AziKABQgBAAgBAAQiKgBh8gzQh3gyheheQhghggyh3Qg0h9gBiLg");
	this.shape_436.setTransform(166.6,240);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").p("Aq1AAQAAiOA2h+QA0h8BhhiQBihhB5gzQCBg3COAAQCPAAB+A1QB7A0BhBhQBjBjA0B6QA2CAAACNQAACQg2B/Qg0B7hgBgQgBABgBABQhhBhh7A0Qh/A2iNAAQgBAAgBAAQiOAAh/g2Qh7g0hghhQhjhigzh6Qg3iAAAiPg");
	this.shape_437.setTransform(166.6,240);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").p("ArIAAQAAiSA4iCQA1h/BkhkQBlhkB8g1QCEg4CSAAQCTABCBA2QB+A2BkBjQBlBmA2B9QA3CCAACSQAACUg3CDQg1B9hjBjQgBACgBAAQhkBkh+A2QiCA2iRABQgCAAAAAAQiSgBiCg2Qh+g2hkhjQhlhlg1h+Qg3iDgBiTg");
	this.shape_438.setTransform(166.6,240);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").p("AraAAQAAiWA4iFQA3iCBnhnQBnhmCAg3QCHg6CWAAQCWABCFA4QCCA2BmBmQBoBpA3CAQA5CGAACWQAACYg5CGQg3CBhkBmQgCAAgBACQhmBliCA3QiFA5iVAAQgBAAgBAAQiWAAiGg5QiBg2hmhmQhohog2iBQg5iGAAiXg");
	this.shape_439.setTransform(166.625,240);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA4iFBqhqQBphoCEg4QCKg7CaAAQCaABCJA5QCFA4BpBoQBqBsA4CDQA6CKABCZQgBCbg6CKQg4CEhnBpQgBABgCABQhpBpiFA4QiIA5iZABQgBAAgBAAQiagBiJg5QiFg4hohpQhrhqg4iEQg6iLAAiag");
	this.shape_440.setTransform(166.6,240);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA6iJBrhsQBthrCGg6QCOg8CeAAQCeAACMA7QCIA6BsBrQBtBuA5CHQA8CNABCdQgBCfg8CNQg5CIhqBqQgBACgBABQhsBriIA6QiMA7idABQgBAAgBAAQidgBiNg7QiIg6hrhqQhthug6iIQg8iNAAieg");
	this.shape_441.setTransform(166.625,240.025);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").p("AsTAAQAAihA+iQQA7iNBuhuQBvhuCKg7QCSg+ChAAQCiABCPA8QCMA7BuBuQBwBwA7CLQA9CQAAChQAACjg9CQQg7CMhsBtQgCABgBACQhuBtiMA7QiQA9igABQgBAAgBAAQihgBiRg9QiLg6huhuQhvhwg7iLQg9iRgBiig");
	this.shape_442.setTransform(166.6,240);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").p("AslAAQAAilA+iTQA9iQBxhxQByhxCNg8QCVg/ClAAQCmAACTA+QCPA8BxBwQByBzA8CPQA/CTAAClQAACng/CUQg8COhvBwQgBABgBACQhxBwiQA9QiSA+ikAAQgCAAgBAAQikAAiUg+QiPg8hxhxQhyhyg8iPQg/iUAAimg");
	this.shape_443.setTransform(166.6,240);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTB0h0QB0hzCRg9QCYhBCpAAQCqABCWA/QCTA+BzBzQB1B1A9CRQBACXABCpQgBCqhACYQg9CShyByQgBACgCABQhzBziSA+QiXA/inABQgCAAgBAAQipgBiXg/QiSg+hzhyQh1h1g+iTQhAiYAAipg");
	this.shape_444.setTransform(166.6,240);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").p("AtLAAQAAisBCibQA/iWB2h3QB3h1CUhAQCchCCtAAQCtAACaBBQCWBAB2B1QB3B4BACVQBBCbABCsQgBCuhBCcQg/CVh0B0QgCACgBACQh2B0iWBAQiaBBirABQgCAAgBAAQisAAibhCQiWg/h1h1Qh4h3g/iWQhCibAAiug");
	this.shape_445.setTransform(166.625,240);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").p("AteAAQAAiwBEifQBBiZB4h5QB6h5CXg/QCghFCwAAQCxABCeBCQCZBBB4B4QB6B7BBCXQBDCfAACwQAACyhDCfQhBCYh2B4QgCABgBACQh4B4iaBBQidBCivABQgCAAgBAAQiwgBifhCQiYhBh4h4Qh6h6hBiZQhDiegBiyg");
	this.shape_446.setTransform(166.6,240);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").p("AtwAAQAAi0BEiiQBDidB7h7QB8h7CbhCQCjhFC0AAQC1AAChBEQCdBCB7B7QB8B9BCCcQBFChAAC0QAAC2hFCiQhCCch5B6QgBACgCABQh7B6icBDQihBEizAAQgCAAgBAAQi0AAiihEQichDh7h6Qh8h8hCicQhFijAAi1g");
	this.shape_447.setTransform(166.6,240);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB+h+QB+h9CehDQCnhHC4AAQC5ABCkBFQCgBDB+B9QB/CABDCfQBGClABC4QgBC5hGCnQhDCeh7B9QgCACgBABQh+B9igBEQilBFi2ABQgCAAgBAAQi4gBilhFQighDh9h9Qh/h/hEigQhGimAAi5g");
	this.shape_448.setTransform(166.6,240);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCAh/QCCiBChhFQCqhIC8AAQC9AACoBHQCjBFCACAQCCCCBFCjQBHCpABC7QgBC+hHCpQhFCih+B/QgCACgBACQiAB/ikBFQioBHi6ABQgCAAgBAAQi8AAiphIQiihEiAiAQiCiChFijQhIipAAi9g");
	this.shape_449.setTransform(166.625,240);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").p("AupAAQAAi/BKisQBGioCDiDQCEiDClhGQCthKDAAAQDBABCrBJQCnBGCDCCQCECFBGClQBJCtAAC/QAADBhJCtQhGCmiBCCQgBABgCACQiDCCinBGQirBJi+ABQgCAAgBAAQi/gBithJQimhGiCiCQiFiEhGimQhJitgBjBg");
	this.shape_450.setTransform(166.6,240);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCphHQCxhLDDAAQDEAACvBKQCqBICGCEQCHCIBHCpQBLCwAADDQAADFhLCwQhHCpiDCEQgCACgCACQiFCEiqBIQivBKjCABQgCAAgBAAQjDAAiwhLQiqhHiEiEQiIiIhHiqQhLiwAAjEg");
	this.shape_451.setTransform(166.625,240.025);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBKivCIiHQCJiJCrhJQC1hMDHAAQDIABCyBLQCuBJCICHQCJCKBJCtQBMCzABDHQgBDIhMC0QhICtiGCGQgCADgBABQiICIiuBJQiyBLjGABQgCAAgBAAQjHgBi0hLQishJiIiHQiJiKhKitQhMi0AAjIg");
	this.shape_452.setTransform(166.6,240);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").p("AvhAAQAAjKBOi4QBLixCKiLQCMiLCvhKQC5hODKAAQDNAAC1BNQCxBLCLCKQCMCNBKCvQBOC3AADKQAADOhOC3QhKCwiICJQgCABgCACQiKCKixBLQi2BNjKABQgBAAgCAAQjKAAi3hOQixhLiKiJQiMiMhLixQhOi3AAjMg");
	this.shape_453.setTransform(166.6,240);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").p("Av0AAQAAjOBQi7QBMi1CNiNQCOiOCzhLQC7hQDPAAQDQABC5BOQC1BMCNCNQCOCPBMC0QBPC6AADNQAADRhPC7QhMCziKCMQgCACgCABQiNCNi0BNQi6BOjMABQgDAAgBAAQjOgBi7hOQi0hMiMiMQiPiQhMi0QhPi6gBjQg");
	this.shape_454.setTransform(166.6,240);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").p("AwGAAQAAjSBQi+QBOi5CQiPQCRiQC2hNQC/hSDSAAQDUABC8BQQC4BNCQCPQCRCTBNC2QBRC9AADSQAADVhRC+QhNC3iNCOQgCACgCACQiPCPi4BOQi9BQjQAAQgDAAgBAAQjSAAi+hQQi3hNiPiPQiSiRhNi5QhRi+AAjTg");
	this.shape_455.setTransform(166.625,240);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBPi8CTiTQCTiSC5hPQDDhSDWAAQDYAADABSQC7BPCSCRQCUCVBPC6QBRDBABDVQAADZhSDCQhPC5iQCRQgBACgCACQiSCSi8BPQjABSjUAAQgCAAgCAAQjWAAjChSQi6hPiRiRQiViUhPi7QhSjBAAjYg");
	this.shape_456.setTransform(166.625,240);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").p("AwsAAQAAjZBUjGQBRi/CUiVQCXiVC8hQQDGhUDaAAQDcABDEBSQC+BRCVCUQCWCXBQC9QBTDFABDZQAADdhUDFQhQC9iSCUQgCABgBACQiVCUi/BSQjEBSjYABQgCAAgCAAQjZAAjGhTQi+hRiUiTQiWiYhRi+QhTjFgBjbg");
	this.shape_457.setTransform(166.6,240);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").p("Aw+AAQAAjeBUjIQBTjDCXiXQCZiYDAhRQDJhWDeAAQDfABDHBUQDCBSCYCXQCYCZBSDBQBVDIAADdQAADhhVDJQhRDAiVCWQgCACgCABQiXCYjCBSQjHBTjcACQgCAAgCAAQjeAAjIhVQjBhSiXiWQiZiZhSjCQhVjJAAjfg");
	this.shape_458.setTransform(166.625,240);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").p("AxRAAQAAjhBWjNQBUjGCaiaQCbiaDDhSQDNhYDiAAQDjABDLBWQDFBTCaCaQCbCcBTDEQBWDLABDhQAADkhXDNQhSDDiYCZQgCACgBACQiaCZjGBUQjLBWjfAAQgCAAgCAAQjhAAjNhWQjEhTiZiZQicichUjFQhWjNAAjig");
	this.shape_459.setTransform(166.625,240);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCcidQCfidDGhUQDRhYDlAAQDnAADOBXQDJBVCcCcQCeCfBVDIQBXDOABDlQAADohYDQQhVDHiZCcQgCABgCACQidCcjJBVQjOBXjjABQgCAAgCAAQjlAAjQhYQjIhUibibQififhVjJQhYjPAAjng");
	this.shape_460.setTransform(166.625,240);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").p("Ax3AAQAAjpBajTQBWjNCfifQChigDKhVQDUhaDpAAQDrABDRBYQDNBWCfCfQCgCiBWDKQBZDSABDpQgBDrhZDUQhWDKicCeQgCACgCACQifCfjMBWQjSBZjnABQgCAAgCAAQjpgBjThZQjLhWifidQihiihWjMQhZjTgBjqg");
	this.shape_461.setTransform(166.625,240.025);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").p("AyJAAQAAjtBajXQBYjQCiihQCkiiDNhXQDXhcDtAAQDuABDWBaQDPBYCiChQCjCkBXDOQBbDWAADsQAADwhbDXQhXDOifCgQgCACgCACQihChjQBXQjVBajrACQgCAAgCAAQjtAAjXhcQjOhXihigQikikhXjPQhbjXAAjug");
	this.shape_462.setTransform(166.625,240);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBajUCkilQCmikDQhZQDbhcDxAAQDzAADYBcQDTBZClCkQClCnBZDQQBbDaABDwQAADzhcDbQhZDRihCjQgCACgCACQikCjjTBaQjZBcjuAAQgDAAgCAAQjwAAjahcQjShZikiiQiminhajTQhcjaAAjyg");
	this.shape_463.setTransform(166.6,240);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBbjXCminQCpinDUhaQDfheD0AAQD2AADcBdQDXBbCnCnQCoCpBaDUQBdDdABD0QAAD3heDeQhaDUikCmQgCACgCACQinCnjWBaQjcBdjyABQgDAAgCAAQj0AAjeheQjVhaimilQipiqhbjVQhejeAAj2g");
	this.shape_464.setTransform(166.625,240);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").p("AzCAAQAAj4BgjhQBcjbCpipQCsiqDXhbQDihgD4AAQD6ABDgBeQDZBcCqCpQCqCsBcDYQBfDgABD4QgBD7hfDhQhbDYinCoQgCACgCADQipCojaBdQjgBej1ABQgDAAgCAAQj4AAjhhfQjZhcioioQisishcjaQhfjhgBj5g");
	this.shape_465.setTransform(166.625,240);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").p("AzUAAQAAj8BgjlQBejdCsisQCuitDbhcQDlhiD8AAQD+ABDjBgQDdBdCsCsQCtCuBdDcQBhDkAAD7QAAD/hhDkQhcDcipCqQgCADgCACQitCrjdBeQjjBfj5ACQgDAAgCAAQj8AAjlhhQjchdiriqQiuivhdjdQhhjlAAj9g");
	this.shape_466.setTransform(166.625,240);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCvivQCxivDeheQDohiEAAAQECAADmBiQDhBeCvCvQCwCxBeDfQBhDnABD/QAAEChiDpQheDeisCtQgCACgCADQiuCujhBfQjnBij9AAQgCAAgDAAQkAAAjohiQjfheiuitQixixhfjhQhijoAAkBg");
	this.shape_467.setTransform(166.6,240);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBgjkCxiyQC0iyDhhfQDshkEEAAQEFAADqBjQDkBhCyCwQCyC0BgDiQBjDrABEDQAAEGhkDsQhgDiiuCwQgCACgCACQixCxjkBgQjqBjkBABQgDAAgCAAQkDAAjshkQjjhfiwiwQi0i0hgjkQhkjrAAkFg");
	this.shape_468.setTransform(166.625,240);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").p("A0NAAQAAkHBmjvQBijpCzizQC2i0DlhhQDwhmEHAAQEJABDuBkQDnBiC0CzQC1C2BhDmQBlDuABEHQgBEKhlDwQhhDliwCyQgDACgCADQizCzjoBiQjtBkkFABQgDAAgCAAQkHAAjwhlQjmhiiyixQi2i3hijnQhljwgBkIg");
	this.shape_469.setTransform(166.625,240);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").p("A0fAAQAAkLBmjzQBkjrC2i2QC4i3DohjQD0hnELAAQENABDxBmQDrBjC2C2QC4C5BiDoQBnDzAAEKQAAEOhnDzQhiDpizC0QgCACgCADQi3C2jrBjQjwBlkJACQgDAAgCAAQkLAAjzhnQjphji1i0Qi5i5hjjrQhnjyAAkNg");
	this.shape_470.setTransform(166.625,240);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC5i5QC7i5DrhkQD3hoEPAAQERAAD0BoQDvBkC5C5QC6C7BkDsQBnD1ABEOQAAEShoD3QhkDsi2C3QgCACgCADQi5C4juBlQj1BnkMABQgDAAgCAAQkPAAj2hoQjthki4i3Qi7i8hljuQhoj2AAkQg");
	this.shape_471.setTransform(166.625,240.025);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC7i6QC+i9DvhlQD6hqETAAQEVAAD4BpQDxBmC8C7QC8C+BmDwQBpD4ABETQAAEVhqD7QhlDui4C7QgDACgCACQi7C7jyBmQj4BpkQABQgDAAgCAAQkSAAj7hqQjvhli7i5Qi+i/hmjxQhqj6AAkUg");
	this.shape_472.setTransform(166.625,240);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").p("A1YAAQAAkWBsj+QBnj1C+i+QDBi/DyhmQD+hsEWAAQEZABD8BqQD1BoC+C9QC/DBBnDzQBqD8ABEWQAAEZhrD+QhnDzi7C8QgCACgCACQi+C+j1BnQj7BrkUABQgDAAgDAAQkWAAj+hsQjzhmi8i8QjCjBhnj1Qhrj+gBkXg");
	this.shape_473.setTransform(166.6,240);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").p("A1qAAQAAkaBskBQBpj5DBjAQDDjCD1hoQEChtEaAAQEcABD/BsQD5BpDADAQDCDDBoD2QBtEAAAEaQAAEdhtEBQhoD2i9C/QgCACgCACQjBDBj4BpQj/BrkXACQgDAAgDAAQkaAAkBhtQj3hoi/i/QjEjDhoj5QhtkAAAkcg");
	this.shape_474.setTransform(166.625,240);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").p("A19AAQAAkeBukFQBrj7DDjDQDFjFD5hpQEFhvEeAAQEgABEDBuQD7BqDEDDQDEDFBqD6QBtEDABEeQAAEghuEGQhqD4i/DCQgDADgCACQjDDDj8BqQkCBtkbABQgDAAgDAAQkeAAkEhuQj6hpjCjBQjGjHhrj7QhukEAAkgg");
	this.shape_475.setTransform(166.625,240);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBskADFjGQDJjGD8hrQEIhwEiAAQEkABEGBuQD/BsDGDGQDHDIBrD9QBvEGABEiQAAElhwEHQhrD+jCDEQgCACgDACQjGDGj/BsQkFBukfABQgDAAgDAAQkiAAkIhvQj9hsjFjDQjIjJhsj/QhvkIgBkg");
	this.shape_476.setTransform(166.625,240);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").p("A2jAAQAAklBykMQBtkDDIjIQDLjJD/htQENhxElAAQEoABEKBwQECBtDIDIQDKDLBsEAQBxEKABElQAAEphyEMQhsEAjFDGQgCADgCACQjIDIkDBuQkJBwkjABQgDAAgDAAQklAAkMhxQkBhtjHjGQjLjLhtkDQhxkLgBkk");
	this.shape_477.setTransform(166.6,240);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").p("A21AAQAAkpBykPQBvkHDLjLQDOjLEChuQEQhzEpAAQEsABENByQEGBuDLDLQDLDOBuEEQByEMABEpQAAEthzEPQhtEEjHDJQgDACgCADQjLDKkGBvQkNBxkmACQgDAAgDAAQkpAAkPhzQkEhujKjIQjOjPhvkGQhykOAAko");
	this.shape_478.setTransform(166.625,240);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").p("A3IAAQAAktB0kTQBwkJDOjOQDQjOEGhvQETh1EtAAQEwABEQB0QEJBwDODNQDODQBwEHQBzERABEsQAAEwh0ETQhvEHjKDMQgCADgDACQjODNkJBwQkQBzkqABQgDAAgDAAQktAAkTh0QkHhvjMjLQjRjRhwkKQh0kRAAks");
	this.shape_479.setTransform(166.625,240);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").p("A3bAAQAAkxB2kWQBxkNDQjQQDTjREKhwQEWh2ExAAQEzABEUB0QENByDQDQQDRDSBxELQB1EUABEwQAAE1h2EWQhwEKjNDOQgCADgDACQjQDQkNByQkTB0kuABQgDAAgDAAQkxAAkWh1QkLhxjOjOQjUjThxkNQh1kWgBkv");
	this.shape_480.setTransform(166.625,240);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").p("A3uAAQAAk1B4kaQBzkQDSjSQDWjUEMhyQEah3E1AAQE3ABEYB2QEQBzDSDSQDUDWByENQB3EYABE0QgBE4h3EaQhyENjODRQgDACgCADQjTDSkQBzQkXB2kyACQgDAAgDAAQk1gBkZh3QkOhyjSjQQjVjWhzkQQh3kZgBk0");
	this.shape_481.setTransform(166.625,240.025);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").p("A4AAAQAAk4B4keQB1kTDVjWQDYjWEQhzQEeh5E4AAQE7ABEbB4QETB0DWDVQDWDYBzERQB4EbABE4QAAE8h5EeQhzEQjRDUQgDACgCADQjVDVkUB0QkaB3k2ACQgDAAgDAAQk4AAkeh5QkRh0jUjSQjYjZh1kTQh4kdAAk3");
	this.shape_482.setTransform(166.625,240);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDYjYQDbjZETh0QEhh6E8AAQE/AAEfB6QEXB1DXDYQDZDaB1EVQB5EfABE7QAAFAh6EhQh0ETjVDXQgCACgDADQjXDXkXB2QkeB5k5ABQgEAAgDAAQk8AAkhh6QkVh1jWjVQjbjch2kWQh5kggBk7");
	this.shape_483.setTransform(166.6,240);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").p("A4mAAQAAlAB8klQB3kaDajaQDejbEXh2QEkh8FAAAQFDABEiB6QEaB4DaDaQDcDdB2EXQB7EjABE/QAAFEh8EkQh2EYjWDYQgDACgDADQjaDakaB3QkiB7k8ABQgEAAgDAAQlAAAkkh8QkYh2jZjXQjejeh3kbQh7kkgBk+");
	this.shape_484.setTransform(166.625,240);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").p("A45AAQAAlEB+koQB4keDdjcQDgjeEah4QEoh9FEAAQFHABElB8QEdB5DeDcQDdDgB4EbQB9EmABFDQgBFHh9EpQh3EajZDbQgDADgCADQjdDckeB5QklB8lAABQgEAAgDAAQlEAAknh9Qkch4jbjaQjhjhh4kdQh9kngBlD");
	this.shape_485.setTransform(166.625,240);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").p("A5LAAQAAlHB+ksQB7khDfjgQDjjgEdh5QEsh/FHAAQFKABEpB+QEhB6DgDfQDgDjB6EeQB9EpABFHQAAFLh+EsQh5EejcDdQgCADgDADQjgDfkhB6QkoB9lEACQgEAAgDAAQlHAAksh/Qkfh5jejdQjijkh7kgQh+krAAlG");
	this.shape_486.setTransform(166.625,240);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB8klDijiQDljjEhh6QEviAFLAAQFPAAEsCAQEkB7DjDiQDiDlB7EhQB/EuABFKQAAFPiAEvQh6EhjeDhQgDACgCADQjiDiklB7QksB/lIABQgEAAgDAAQlLAAkviAQkih6jhjgQjljlh8klQh/kugBlK");
	this.shape_487.setTransform(166.6,240);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").p("A5xAAQAAlPCCkzQB9koDkjkQDojmEkh8QEziBFPAAQFSABEwCAQEoB9DkDlQDmDnB8ElQCBExABFOQAAFTiCEyQh8EljgDiQgDADgCADQjlDlkoB9QkvCAlMABQgEAAgDAAQlPAAkyiBQkmh9jjjhQjojph9koQiBkygBlN");
	this.shape_488.setTransform(166.625,240);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").p("A6EAAQAAlTCEk2QB+krDnjnQDrjpEnh9QE2iDFTAAQFWABEzCCQErB+DoDnQDoDqB9EpQCDEzABFTQgBFWiDE2Qh9EpjjDlQgCADgDADQjoDmkrB/QkzCClPABQgEAAgDAAQlTAAk2iDQkph+jljkQjrjrh+ksQiDk0gBlS");
	this.shape_489.setTransform(166.625,240);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").p("A6WAAQAAlWCEk6QCAkvDqjqQDtjrErh+QE5iFFXAAQFaABE2CEQEvCADqDpQDrDtB/EsQCDE3ABFWQAAFbiEE4Qh/EsjlDoQgDADgDADQjqDpkvCAQk2CDlTACQgEAAgDAAQlXAAk5iFQksh/jpjnQjtjuiAkuQiEk5AAlV");
	this.shape_490.setTransform(166.625,240);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDtjsQDvjtEviAQE9iGFaAAQFeAAE6CGQEyCBDsDsQDuDvCAEvQCFE7ABFZQAAFfiGE9QiAEvjoDqQgDADgDADQjsDskyCBQk6CFlXABQgEAAgDAAQlaAAk9iGQkwiAjrjqQjwjwiBkyQiGk8AAlZ");
	this.shape_491.setTransform(166.625,240.025);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").p("A68AAQAAlfCIlAQCDk1DujvQDzjwExiCQFBiHFeAAQFhABE+CGQE1CDDwDvQDvDxCCEzQCHE/ABFdQAAFiiIFAQiBEzjrDsQgCADgDADQjwDvk1CDQk9CGlbABQgDAAgEAAQleAAlBiHQkziCjtjsQjyjziDk2QiHk/gBld");
	this.shape_492.setTransform(166.625,240);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").p("A7PAAQAAliCKlEQCEk5DxjxQD1jzE1iDQFFiJFhAAQFmABFBCIQE5CEDxDxQDyD1CEE2QCIFBABFhQAAFmiJFFQiDE1jtDwQgDADgDACQjxDyk5CDQlBCJleABQgEAAgEAAQlhAAlFiKQk2iCjwjvQj1j2iEk4QiJlDgBlh");
	this.shape_493.setTransform(166.6,240);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").p("A7hAAQAAlmCKlIQCGk8D0j0QD3j1E5iEQFHiLFmAAQFpABFFCKQE8CFD0D0QD1D4CFE4QCJFFABFlQAAFriKFHQiEE5jwDyQgDADgDACQj0D1k8CFQlECJliACQgEAAgEAAQlmAAlHiLQk6iFjyjwQj4j5iGk8QiKlHAAlk");
	this.shape_494.setTransform(166.625,240);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").p("A70AAQAAlqCMlLQCHlAD3j2QD6j4E8iFQFLiNFpAAQFtABFICMQFACHD2D2QD4D5CGE9QCLFJABFoQAAFuiMFLQiGE8jyD1QgDADgDADQj2D2lACHQlICLllABQgEAAgEAAQlpAAlLiMQk+iGj1jzQj6j7iHlAQiMlKAAlo");
	this.shape_495.setTransform(166.625,240);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").p("AcIAAQAAFuiOFPQiIFDj5D5Qj6D5lDCJQlOCNluAAQltAAlPiNQlDiJj5j5Qj5j5iIlDQiOlPAAluQAAluCOlOQCIlDD5j5QD5j5FDiJQFPiNFtAAQFuAAFOCNQFDCJD6D5QD5D5CIFDQCOFOAAFug");
	this.shape_496.setTransform(166.625,240);

	var maskedShapeInstanceList = [this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482,this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_400}]},16).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[{t:this.shape_483}]},1).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[]},1).wait(80));

	// 波1
	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgIAHgKAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAKg");
	this.shape_497.setTransform(120,240);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").p("AgpAAQAAgRAMgLQAMgNARAAQARAAANANQAMALAAARQAAARgMAMQgNANgRAAQgRAAgMgNQgMgMAAgRg");
	this.shape_498.setTransform(120,240);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").p("Ag7AAQAAgXASgSQARgRAYAAQAZAAARARQASASAAAXQAAAYgSASQgRARgZAAQgYAAgRgRQgSgSAAgYg");
	this.shape_499.setTransform(120,240);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").p("AhMAAQAAgfAXgWQAWgXAfAAQAgAAAWAXQAXAWAAAfQAAAggXAWQgWAXggAAQgfAAgWgXQgXgWAAggg");
	this.shape_500.setTransform(120,240);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").p("AhdAAQAAgmAcgbQAbgcAmAAQAmAAAcAcQAcAbAAAmQAAAmgcAcQgcAcgmAAQgmAAgbgcQgcgcAAgmg");
	this.shape_501.setTransform(120.025,240.025);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").p("AhuAAQAAgtAhggQAgghAtAAQAtAAAhAhQAhAgAAAtQAAAughAgQghAhgtAAQgtAAggghQghggAAgug");
	this.shape_502.setTransform(120,240);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").p("Ah/AAQAAg0AmgmQAlglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAglglQgmgmAAg1g");
	this.shape_503.setTransform(120,240);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").p("AiQAAQAAg8AqgqQArgrA7AAQA8AAArArQArAqAAA8QAAA8grArQgrArg8AAQg7AAgrgrQgqgrAAg8g");
	this.shape_504.setTransform(120,240);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").p("AiiAAQAAhDAwguQAvgxBDAAQBDAAAwAxQAwAuAABDQAABDgwAwQgwAwhDAAQhDAAgvgwQgwgwAAhDg");
	this.shape_505.setTransform(120,240);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").p("AizAAQAAhJA1g1QA0g0BKAAQBKAAA1A0QA0A1AABJQAABKg0A1Qg1A0hKAAQhKAAg0g0Qg1g1AAhKg");
	this.shape_506.setTransform(120,240);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").p("AjEAAQAAhRA6g5QA5g6BRAAQBSAAA5A6QA6A5AABRQAABSg6A5Qg5A6hSAAQhRAAg5g6Qg6g5AAhSg");
	this.shape_507.setTransform(120,240);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").p("AjVAAQAAhYA/g+QA+g/BYAAQBYAAA/A/QA/A+AABYQAABYg/A/Qg/A/hYAAQhYAAg+g/Qg/g/AAhYg");
	this.shape_508.setTransform(120,240);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").p("AjmAAQAAhfBDhEQBEhDBfAAQBfAABEBDQBEBEAABfQAABfhEBEQhEBEhfAAQhfAAhEhEQhDhEAAhfg");
	this.shape_509.setTransform(120.025,240.025);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").p("Aj3AAQAAhmBJhJQBIhIBmAAQBnAABJBIQBIBJAABmQAABnhIBJQhJBJhnAAQhmAAhIhJQhJhJAAhng");
	this.shape_510.setTransform(120,240);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").p("AkJAAQAAhtBOhOQBOhOBtAAQBuAABOBOQBOBOAABtQAABuhOBOQhOBOhuAAQhtAAhOhOQhOhOAAhug");
	this.shape_511.setTransform(120,240);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").p("AkaAAQAAh1BThSQBShTB1AAQB1AABTBTQBTBSAAB1QAAB1hTBTQhTBTh1AAQh1AAhShTQhThTAAh1g");
	this.shape_512.setTransform(120,240);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").p("AEsAAQAAB8hYBYQhYBYh8AAQh8AAhXhYQhYhYAAh8QAAh7BYhYQBXhYB8AAQB8AABYBYQBYBYAAB7g");
	this.shape_513.setTransform(120,240);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").p("Ak9AAQAAhCAXg4QAXg4AvgvQAtgtA2gXQA6gYBDAAQBDAAA5AXQA3AXAvAuQAuAvAXA3QAXA5AABCQAABEgYA6QgXA1gtAuQgCABgBABQgtAug3AXQg5AXhCAAQAAAAgBAAQhDAAg4gZQg3gXgtgtQgvgvgXg2QgXg5AAhEg");
	this.shape_514.setTransform(120,240);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").p("AlRAAQAAhGAag8QAZg7AxgwQAvgwA6gZQA9gbBHAAQBGAAA9AaQA7AZAwAxQAxAvAZA8QAaA8AABGQgBBIgZA9QgZA5gwAxQgBAAgBACQgxAvg7AZQg7AZhGAAQAAAAgBAAQhHgBg8gaQg6gZgvgvQgxgxgZg6Qgag9AAhHg");
	this.shape_515.setTransform(120,240);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").p("AlkAAQAAhJAbhAQAbg/AzgzQAygyA9gaQBBgdBLAAQBKAABAAcQA+AaA0AzQAzAzAaA/QAbBAAABJQAABMgbBAQgbA9gyAyQgBACgBABQgzAyg+AaQhAAahJAAQAAAAgBAAQhLAAg/gbQg+gbgygyQgzgzgag+QgbhAgBhLg");
	this.shape_516.setTransform(120,240);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").p("Al2AAQAAhNAchEQAchCA2g1QA1g1BAgcQBFgdBOAAQBOAABEAcQBCAcA1A2QA2A1AcBCQAcBEAABNQgBBPgcBEQgcBAg0A1QgCACgBABQg1A1hCAbQhCAchOAAQAAAAgBAAQhOgBhDgcQhBgcg1g0Qg2g3gbhAQgdhEAAhPg");
	this.shape_517.setTransform(120,240);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").p("AmJAAQAAhRAehHQAdhFA4g5QA4g3BEgdQBIgfBSAAQBSAABHAeQBFAdA4A4QA4A4AeBGQAdBGABBSQgBBTgeBHQgdBEg3A3QgCACgBABQg4A3hFAdQhGAdhQABQgBAAgBAAQhSgBhHgeQhEgdg3g4Qg5g4gdhEQgehIAAhSg");
	this.shape_518.setTransform(120.025,240.025);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").p("AmcAAQAAhVAghKQAehJA7g7QA7g5BHgfQBLghBWAAQBWAABLAgQBIAeA7A7QA7A7AeBIQAgBLAABVQgBBXgfBKQgfBIg5A6QgCABgCACQg6A5hIAeQhJAghVAAQgBAAgBAAQhWgBhKggQhHgfg6g5Qg8g7gehIQgghKAAhXg");
	this.shape_519.setTransform(120,240);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").p("AmuAAQAAhYAhhOQAfhMA+g+QA9g9BKggQBQghBZAAQBZAABPAhQBLAfA+A+QA+A9AfBMQAhBOAABZQAABbghBOQggBKg8A9QgCACgBAAQg9A9hMAgQhNAghYAAQgBAAgBAAQhaAAhNghQhLggg9g8Qg+g+gfhLQghhPAAhag");
	this.shape_520.setTransform(120,240);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").p("AnBAAQAAhcAihRQAihQBAhAQA/hABOggQBSgkBeAAQBdAABSAiQBPAiBABAQBABAAiBPQAiBRAABdQgBBegiBSQghBOg/A/QgBACgBABQhAA/hQAhQhQAihbAAQgCAAgBAAQhdgBhSgjQhOghg/g+QhAhBghhOQgjhSAAheg");
	this.shape_521.setTransform(120,240);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").p("AnUAAQAAhgAkhVQAjhSBChEQBDhCBRgiQBWglBhAAQBhAABVAkQBSAjBDBCQBDBDAjBSQAjBVABBhQgBBigkBWQgiBQhCBCQgBABgCACQhCBChSAjQhUAjhgAAQgBAAgBAAQhhAAhVglQhRgihChCQhDhEgjhRQgkhVAAhig");
	this.shape_522.setTransform(120,240);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").p("AnnAAQAAhkAmhYQAkhXBFhEQBFhFBUgkQBagnBlAAQBlAABYAmQBXAkBEBGQBGBEAkBXQAmBXAABkQgBBngmBZQgkBUhDBFQgCABgBABQhFBEhWAlQhXAkhjABQgCAAgBAAQhlgBhYgmQhVgkhEhDQhGhGgkhVQgmhZAAhmg");
	this.shape_523.setTransform(120,240);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").p("An5AAQAAhnAmhdQAmhZBIhIQBHhHBZgmQBdgnBoAAQBoAABdAmQBZAnBIBHQBHBHAnBaQAmBbAABoQAABrgnBcQgmBYhGBGQgBACgCABQhHBIhZAlQhcAmhmAAQgCAAgBAAQhpAAhbgoQhZglhGhGQhJhJglhYQgnhcAAhqg");
	this.shape_524.setTransform(120,240);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").p("AoMAAQAAhrAohfQAnheBLhKQBKhKBbgnQBggpBtAAQBsAABgApQBcAmBLBLQBKBKAnBdQAoBfABBrQgBBugoBhQgnBahJBJQgBACgCACQhKBJhcAnQhfAnhqABQgCAAgBAAQhsgBhggoQhbgnhJhJQhMhMgmhbQgphgAAhtg");
	this.shape_525.setTransform(120,240);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").p("AofAAQAAhwAqhiQAohhBNhMQBNhNBfgoQBkgrBwAAQBwAABjAqQBgAoBNBOQBNBMApBgQApBjABBvQgBBygqBkQgoBehLBMQgCABgCACQhMBMhgApQhiAphuAAQgCAAgBAAQhwAAhjgrQhfgohMhLQhOhOgohgQgqhjAAhxg");
	this.shape_526.setTransform(120,240);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").p("AoyAAQAAhzAshmQAqhkBPhQQBPhPBigqQBogsB0AAQB0AABmAsQBkAqBPBPQBQBQAqBjQArBmAABzQAAB3grBmQgqBihOBOQgCACgBABQhPBPhkApQhlArhyABQgCAAgBAAQh0gBhmgrQhjgrhOhNQhQhRgqhjQgshmAAh1g");
	this.shape_527.setTransform(120,240);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").p("ApEAAQAAh3AshqQAshnBShSQBShSBlgrQBrgtB4AAQB4AABqAsQBnAsBSBSQBSBRArBoQAtBpAAB3QAAB6gtBqQgrBlhQBRQgCACgCABQhSBShmArQhpAsh2AAQgCAAgBAAQh4AAhqguQhlgrhRhQQhThTgrhmQgthrAAh4g");
	this.shape_528.setTransform(120.025,240.025);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").p("ApXAAQAAh6AuhuQAthqBVhVQBUhUBpgtQBugvB8AAQB7AABuAuQBqAtBVBVQBVBUAsBrQAuBtABB6QgBB+guBtQgsBphTBTQgCACgCACQhUBThqAtQhsAth5ABQgDAAgBAAQh8gBhtguQhpgshThTQhWhXgthpQguhuAAh8g");
	this.shape_529.setTransform(120,240);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").p("ApqAAQAAh/AwhxQAuhuBXhXQBYhWBrguQBzgxB/AAQCAAABxAwQBtAvBYBWQBWBXAvBuQAwBxAAB9QAACCgwByQguBrhWBXQgBABgCACQhXBXhuAtQhvAvh9ABQgDAAgBAAQh/AAhxgxQhtguhVhVQhZhZguhtQgwhxAAiAg");
	this.shape_530.setTransform(120,240);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").p("Ap9AAQAAiDAyh0QAvhxBahaQBahZBvgwQB2gyCDAAQCDAAB1AyQBxAvBZBaQBaBZAwByQAxBzAACCQAACHgxB0QgwBvhXBZQgCACgCACQhaBYhxAwQhyAwiBABQgCAAgCAAQiDgBh0gxQhwgwhZhYQhbhbgvhwQgyh1AAiEg");
	this.shape_531.setTransform(120,240);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").p("AqQAAQAAiGAzh4QAxh1BdhcQBchcBzgwQB5g1CHAAQCHAAB4AzQB0AxBdBdQBcBcAxB0QAzB3AACGQAACKgzB4QgxBzhaBaQgCADgCACQhcBbh0AxQh3AyiEAAQgCAAgCAAQiHAAh4g0QhzgwhbhaQhehfgwhzQgzh4gBiIg");
	this.shape_532.setTransform(120,240);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").p("AqiAAQAAiKA0h7QAzh5BfheQBfhfB2gyQB8g1CLAAQCLAAB7A0QB4AzBfBfQBfBeAzB4QAzB7ABCJQgBCOg0B8QgyB1hcBeQgCACgCACQhfBeh4AyQh6AziIABQgCAAgCAAQiLgBh7g0Qh2gyhehdQhghggzh3Qg0h8AAiMg");
	this.shape_533.setTransform(120,240);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").p("Aq1AAQAAiOA2h+QA0h8BhhiQBihhB5gzQCBg3COAAQCPAAB/A2QB7A0BiBhQBhBiA0B7QA1B+ABCNQAACRg3CAQgzB4hfBhQgCACgCACQhhBhh8A0Qh9A0iMABQgCAAgCAAQiOAAh/g3Qh6gzhghgQhjhjg0h6Qg2iAAAiPg");
	this.shape_534.setTransform(120,240);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").p("ArIAAQAAiSA3iCQA2h/BkhkQBkhkB9g1QCEg4CSAAQCSAACDA3QB+A2BlBkQBkBkA1B/QA3CBAACRQAACWg3CCQg1B8hiBjQgCACgCACQhkBjh+A2QiBA2iPABQgDAAgCAAQiSgBiDg4Qh9g0hihiQhmhmg1h+Qg3iCgBiUg");
	this.shape_535.setTransform(120,240);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").p("ArbAAQAAiWA5iFQA3iCBnhnQBnhmCAg3QCHg6CWAAQCWAACGA6QCCA3BnBmQBmBmA3CDQA4CEABCVQAACZg5CHQg2B/hkBlQgCACgDADQhmBmiCA2QiEA4iTAAQgDAAgCAAQiWAAiGg5QiAg3hmhkQhohpg2iBQg5iGgBiXg");
	this.shape_536.setTransform(120,240);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").p("ArtAAQAAiZA6iKQA4iFBphqQBqhoCDg4QCLg7CaAAQCaAACJA6QCGA4BpBpQBpBpA5CGQA5CIABCZQgBCdg6CKQg3CDhnBoQgCABgCACQhpBpiGA4QiHA5iXABQgDAAgCAAQiagBiJg6QiEg4hohnQhrhrg4iEQg6iKAAibg");
	this.shape_537.setTransform(120,240);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").p("AsAAAQAAidA8iNQA5iJBshsQBshrCHg6QCOg8CeAAQCdAACOA8QCIA5BsBsQBsBsA6CJQA7CLABCcQgBChg8COQg5CGhpBqQgCACgCADQhsBriIA5QiLA7ibABQgDAAgCAAQidgBiNg8QiIg5hqhqQhuhug5iIQg8iMAAifg");
	this.shape_538.setTransform(120.025,240.025);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").p("AsTAAQAAihA9iQQA8iNBuhuQBvhuCKg7QCRg+CiAAQChAACRA9QCMA8BvBuQBuBuA7CMQA9CQAACgQAAClg9CRQg7CIhrBuQgCACgDACQhuBuiMA6QiOA8ifACQgDAAgCAAQihgBiRg9QiKg7hthsQhwhxg7iLQg9iQgBijg");
	this.shape_539.setTransform(120,240);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").p("AslAAQAAilA+iTQA9iQBxhxQBxhxCOg8QCVg/ClAAQCmAACTA+QCQA9BxBxQBxBwA9CQQA+CTAACkQAACog/CUQg7CNhuBvQgDADgCACQhxBxiPA8QiSA+iiAAQgDAAgDAAQilAAiUg/QiOg8hvhvQhzhzg8iPQg/iUAAimg");
	this.shape_540.setTransform(120,240);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").p("As4AAQAAioBAiYQA+iTBzh0QB1hzCQg9QCZhBCpAAQCpAACYBAQCTA+BzBzQB0B0A+CTQA/CWABCnQgBCthACYQg9CQhwByQgDADgCABQhzBziTA+QiWA/ilABQgDAAgDAAQipgBiXhAQiSg9hyhxQh1h2g+iTQhAiWAAirg");
	this.shape_541.setTransform(120,240);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").p("AtLAAQAAisBCibQA/iWB2h3QB3h1CUhAQCchCCtAAQCtAACbBCQCWBAB2B1QB2B2BACXQBBCZABCrQgBCxhBCbQg/CThzB1QgCADgDACQh2B1iWBAQiZBAipABQgDAAgDAAQitAAibhCQiUhAh1hzQh4h4g/iWQhCibAAiug");
	this.shape_542.setTransform(120,240);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").p("AteAAQAAiwBDifQBBiZB5h5QB5h5CYg/QCfhFCxAAQCwAACfBDQCaBBB5B5QB4B5BBCZQBDCeAACuQAAC1hDCeQhACXh2B3QgCADgDACQh4B4iaBBQicBBitACQgDAAgCAAQixgBifhDQiYhAh3h3Qh7h7hAiZQhDiegBiv");
	this.shape_543.setTransform(120,240);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").p("AtwAAQAAi0BEiiQBCidB8h7QB8h7CbhCQCjhFC0AAQC1AACiBEQCdBCB7B8QB8B6BCCeQBECgAACzQAAC4hECjQhCCah4B5QgDADgCACQh7B7idBCQifBEiyAAQgDAAgCAAQi1AAiihFQichCh5h4Qh+h+hCicQhEijAAiy");
	this.shape_544.setTransform(120,240);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").p("AuDAAQAAi3BGimQBEihB9h+QB/h9CehDQCnhHC4AAQC4AACmBGQCgBEB+B9QB+B+BECgQBFCkABC3QgBC8hGCmQhCCdh7B9QgCACgDADQh+B9igBDQijBFi1ABQgDAAgCAAQi5gBilhGQifhDh8h7QiAiAhEigQhGilAAi3");
	this.shape_545.setTransform(120,240);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").p("AuWAAQAAi7BIiqQBFikCAh/QCBiBCihFQCqhIC8AAQC8AACpBIQCkBFCACBQCBB/BFCkQBHCnABC7QgBDAhHCqQhFCgh8B/QgDACgDADQiACAikBFQimBGi4ABQgEAAgCAAQi9AAiphJQiihEh+h+QiDiDhFijQhIipAAi6");
	this.shape_546.setTransform(120,240);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").p("AupAAQAAi/BJisQBHioCDiDQCEiDClhGQCthKDAAAQDAAACsBKQCoBGCDCDQCDCCBGCoQBICrABC+QAADEhJCtQhGCjh/CCQgDACgCADQiDCCinBGQiqBIi8ACQgEAAgCAAQjAgBithJQilhGiCiAQiFiGhGimQhJitgBi+");
	this.shape_547.setTransform(120,240);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").p("Au7AAQAAjDBKiwQBIirCGiFQCGiGCohHQCxhLDEAAQDDAACxBKQCqBICGCGQCFCFBICrQBKCuABDBQAADIhLCxQhHCniCCEQgCACgDADQiGCFiqBIQitBJjAABQgEAAgCAAQjEAAiwhLQiphIiEiCQiIiJhIiqQhKivAAjD");
	this.shape_548.setTransform(120.025,240.025);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").p("AvOAAQAAjGBMi0QBJivCIiHQCKiJCrhJQC1hMDHAAQDHAAC0BMQCuBJCICJQCICHBKCvQBLCxABDFQgBDMhMC0QhICriECGQgDADgDADQiICHiuBJQixBLjDABQgEAAgCAAQjIgBi0hLQishJiGiGQiLiLhJitQhMizAAjG");
	this.shape_549.setTransform(120,240);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").p("AvhAAQAAjKBOi4QBLixCKiLQCMiLCvhKQC4hODLAAQDLAAC4BOQCxBLCLCKQCKCLBLCxQBNC1ABDJQAADQhOC4QhKCtiGCJQgEADgCADQiLCKixBKQi0BNjHABQgEAAgDAAQjMAAi3hOQivhLiJiHQiNiOhLixQhOi3AAjJ");
	this.shape_550.setTransform(120,240);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").p("Av0AAQAAjOBPi7QBNi1CNiNQCOiOCzhLQC7hQDPAAQDPAAC7BPQC0BNCOCNQCNCNBMC1QBOC5ABDMQAADUhPC6QhLCyiKCLQgCADgDADQiNCNi1BMQi4BNjLACQgDAAgDAAQjPgBi7hPQizhLiLiLQiQiRhMi0QhPi5gBjO");
	this.shape_551.setTransform(120,240);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").p("AwHAAQAAjSBRi+QBOi5CQiPQCRiQC1hNQC/hSDTAAQDSAAC/BRQC4BOCQCQQCQCPBNC4QBQC9ABDPQAADYhRC/QhMC1iMCNQgDAEgDADQiQCPi4BNQi7BPjOABQgEAAgDAAQjTAAi+hRQi3hNiOiNQiSiShOi5QhQi9gBjR");
	this.shape_552.setTransform(120,240);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").p("AwZAAQAAjVBSjCQBPi8CSiTQCUiSC5hPQDDhSDWAAQDWAADCBSQC8BPCTCSQCSCSBPC9QBRC/ABDTQAADdhSDBQhOC4iOCRQgEADgCADQiSCRi8BQQi+BQjTABQgEAAgDAAQjWAAjDhSQi5hPiRiPQiViWhPi7QhSjBAAjV");
	this.shape_553.setTransform(120,240);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").p("AwsAAQAAjZBTjGQBRi/CViVQCWiVC9hQQDGhUDaAAQDaAADGBTQC/BSCVCUQCUCVBSC/QBSDDABDXQAADghUDFQhPC8iRCTQgDADgDACQiVCVi/BRQjCBSjWABQgEAAgDAAQjbAAjFhUQi9hQiTiSQiYiZhQi+QhTjEgBjZ");
	this.shape_554.setTransform(120,240);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").p("Aw/AAQAAjeBVjIQBSjDCYiXQCZiYC/hRQDKhWDeAAQDeAADJBVQDDBSCXCYQCYCXBSDDQBUDGABDbQAADkhVDJQhRC+iUCWQgDADgDADQiXCXjCBSQjGBTjZACQgFAAgDAAQjeAAjJhWQjBhRiViVQibiahSjCQhUjIgBjd");
	this.shape_555.setTransform(120,240);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").p("AxSAAQAAjhBXjNQBTjGCaiaQCciaDDhSQDNhYDiAAQDiAADMBXQDGBTCaCaQCaCaBUDGQBVDKABDfQAADnhXDNQhSDCiWCYQgDADgDADQiaCZjGBUQjIBVjeABQgEAAgDAAQjiAAjNhXQjDhTiYiWQieiehTjFQhWjLgBjh");
	this.shape_556.setTransform(120,240);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").p("AxkAAQAAjlBYjQQBVjJCcidQCeidDHhUQDRhYDlAAQDlAADRBYQDJBVCdCcQCcCdBVDJQBXDNABDjQAADshYDQQhUDFiYCaQgDAEgEACQicCdjJBVQjMBWjhABQgFAAgDAAQjmAAjPhZQjIhTibiaQifighVjJQhYjPAAjk");
	this.shape_557.setTransform(120,240);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").p("Ax3AAQAAjpBZjTQBXjNCfifQChigDKhVQDUhaDpAAQDpAADUBZQDMBXCgCfQCfCfBWDMQBYDRACDnQgBDvhZDTQhVDJibCdQgDADgDADQifCfjNBWQjQBYjkACQgFAAgDAAQjqgBjThZQjKhWieicQiiijhWjMQhZjSgBjo");
	this.shape_558.setTransform(120.025,240.025);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").p("AyKAAQAAjtBbjXQBYjQCiihQCjiiDOhXQDXhcDtAAQDtAADYBbQDPBYCiCiQCiChBYDQQBaDUABDqQAAD0hbDXQhXDLidCgQgEADgDAEQiiChjPBYQjTBZjpACQgFAAgDAAQjtAAjXhcQjOhXigieQilimhYjPQhajWgBjs");
	this.shape_559.setTransform(120,240);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").p("AycAAQAAjxBcjZQBZjUCkilQCnikDQhZQDbhcDxAAQDxAADaBcQDUBaClCjQCjCkBaDUQBbDYABDtQAAD3hcDbQhYDPigCiQgDAEgEADQikCkjTBZQjXBbjsABQgFAAgDAAQjxAAjbhcQjRhZiiihQioiohZjTQhcjZAAjw");
	this.shape_560.setTransform(120,240);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").p("AyvAAQAAj0BejeQBajXCninQCpinDUhaQDfheD0AAQD1AADeBeQDXBaCnCnQCnCnBaDXQBdDbABDxQAAD8heDeQhZDSijClQgDADgDADQinCnjWBaQjbBdjwABQgEAAgEAAQj1AAjeheQjUhailikQirirhajVQhejeAAjz");
	this.shape_561.setTransform(120,240);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").p("AzCAAQAAj4BfjhQBdjbCpipQCriqDXhbQDihgD5AAQD4AADiBfQDaBdCqCpQCpCpBcDbQBeDeACD1QgBD/hfDiQhbDWikCnQgEADgDAEQiqCojaBdQjdBdj0ACQgEAAgEAAQj5AAjhhgQjYhbinimQitiuhcjaQhfjfgBj4");
	this.shape_562.setTransform(120,240);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").p("AzVAAQAAj8BhjlQBejdCsisQCuitDahcQDmhiD8AAQD9AADlBhQDdBeCsCsQCsCrBeDeQBgDiABD5QAAEDhhDlQhcDZinCqQgEAEgEADQirCsjeBdQjhBfj3ACQgFAAgEAAQj8AAjmhhQjbhdiqipQiviwhejdQhgjkgBj6");
	this.shape_563.setTransform(120,240);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").p("AznAAQAAkABijoQBfjhCuivQCxivDeheQDphiEAAAQEAAADpBiQDhBfCvCuQCuCvBfDhQBhDmABD8QAAEGhiDpQhdDciqCtQgEAEgDADQivCvjhBeQjkBhj7ABQgFAAgEAAQkAAAjphiQjeheitisQiyiyhfjhQhijnAAj+");
	this.shape_564.setTransform(120,240);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").p("Az6AAQAAkEBkjrQBgjkCxiyQCziyDihfQDshkEEAAQEEAADsBkQDkBgCyCxQCxCyBgDjQBjDqABEAQAAELhkDrQhfDgisCvQgEAEgDAEQixCwjkBhQjoBij/ABQgFAAgEAAQkEAAjshkQjihfiviuQi1i2hgjkQhkjrAAkB");
	this.shape_565.setTransform(120,240);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").p("A0NAAQAAkHBljvQBijpC0izQC2i0DkhhQDwhmEIAAQEHAADwBlQDoBiC0C0QCzCzBiDpQBkDrACEEQgBEPhlDwQhgDjivCyQgDADgEAEQi0CzjnBiQjsBjkCACQgFAAgEAAQkIAAjvhmQjmhhixiwQi4i4hijnQhkjugBkG");
	this.shape_566.setTransform(120,240);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").p("A0gAAQAAkLBnjzQBjjrC3i2QC4i3DohjQD0hnELAAQEMAADzBnQDrBjC2C3QC3C2BjDrQBlDwACEHQAAEThnDzQhiDmixC0QgEAEgDAEQi3C2jrBjQjuBlkGACQgFAAgFAAQkLAAj0hnQjohji0izQi7i6hjjrQhmjygBkJ");
	this.shape_567.setTransform(120,240);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").p("A0yAAQAAkPBoj2QBljvC4i5QC8i5DrhkQD3hoEPAAQEPAAD3BoQDuBlC5C4QC5C5BlDuQBnD0ABELQAAEXhoD2QhjDqi0C2QgEAEgDAEQi5C4jvBlQjyBmkKACQgFAAgEAAQkQAAj2hpQjshji3i2Qi8i9hljuQhoj1AAkN");
	this.shape_568.setTransform(120.025,240.025);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").p("A1FAAQAAkTBqj6QBmjyC7i6QC+i9DvhlQD6hqETAAQETAAD7BqQDxBmC7C8QC8C6BmDyQBpD3ABEPQAAEbhqD6QhkDti2C5QgEADgEAFQi7C7jyBmQj2BnkNACQgFAAgFAAQkTAAj6hqQjvhli6i4Qi/jAhmjxQhqj5AAkR");
	this.shape_569.setTransform(120,240);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").p("A1YAAQAAkWBrj+QBoj1C+i+QDAi/DyhmQD+hsEXAAQEXAAD9BrQD1BoC/C+QC+C+BoD1QBqD6ABETQAAEehrD+QhnDwi4C8QgEADgEAFQi+C9j1BnQj5BqkRACQgGAAgEAAQkXAAj+hsQjyhmi8i7QjCjChoj1Qhqj8gBkV");
	this.shape_570.setTransform(120,240);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").p("A1rAAQAAkaBtkBQBpj5DBjAQDDjCD1hoQEChtEaAAQEbAAEBBtQD5BpDADBQDBDABpD4QBrD+ACEXQAAEihtECQhnDzi7C+QgFAEgDAEQjBDAj5BpQj8BrkVACQgFAAgFAAQkaAAkChtQj2hoi+i9QjFjFhpj5QhskAgBkY");
	this.shape_571.setTransform(120,240);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").p("A1+AAQAAkeBvkFQBqj7DDjDQDGjFD5hpQEFhvEeAAQEeAAEFBvQD8BqDDDEQDDDDBrD7QBtEBABEbQAAEmhuEFQhpD2i9DBQgEAEgEAEQjEDDj7BqQkABtkZABQgFAAgFAAQkfAAkEhuQj5hpjBjAQjIjIhqj7QhukDgBkd");
	this.shape_572.setTransform(120,240);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").p("A2QAAQAAkiBwkHQBrkADGjGQDIjGD8hrQEJhwEiAAQEjAAEHBwQEABrDGDGQDGDGBsD/QBuEFABEeQAAEqhwEIQhqD6i/DEQgEADgEAFQjHDFj/BsQkDBtkdACQgFAAgFAAQkiAAkIhwQj9hrjDjBQjLjLhrj/QhvkGgBkh");
	this.shape_573.setTransform(120,240);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").p("A2jAAQAAklBxkMQBukDDIjIQDLjJD/htQEMhxEmAAQEmAAEMBxQEDBuDIDIQDIDIBuEDQBvEIACEiQAAEthxEMQhsD+jDDGQgEAEgDADQjJDIkDBuQkGBvkhACQgFAAgFAAQkmAAkMhxQkAhtjGjEQjMjNhukDQhwkKgBkk");
	this.shape_574.setTransform(120,240);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").p("A22AAQAAkpBzkPQBvkHDKjLQDOjLEDhuQEQhzEpAAQEqAAEPBzQEGBvDMDKQDKDLBvEHQBxELACEmQAAExhzEPQhtEBjFDIQgEAFgEAEQjLDLkGBuQkKBxkkACQgGAAgFAAQkpAAkQhzQkDhujJjHQjPjQhvkGQhykNgBko");
	this.shape_575.setTransform(120,240);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").p("A3JAAQAAktB1kTQBwkJDNjOQDQjOEHhvQETh1EtAAQEtAAETB1QEKBwDNDNQDODNBwEKQByEPACEqQAAE1h0ESQhvEFjHDLQgEAEgEAEQjODNkJBwQkOBzknABQgGAAgFAAQkuAAkSh0QkHhvjLjJQjSjThwkKQh0kQgBks");
	this.shape_576.setTransform(120,240);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").p("A3bAAQAAkxB1kWQBykNDQjQQDTjREJhwQEXh2ExAAQEyAAEWB1QENByDQDQQDQDQByENQB0ESABEtQAAE6h2EWQhvEIjKDNQgEAEgEAEQjRDQkMByQkRBzksACQgGAAgFAAQkxAAkXh2QkKhwjNjMQjVjVhxkNQh1kUgBkv");
	this.shape_577.setTransform(120,240);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").p("A3uAAQAAk1B3kaQBzkQDTjSQDVjUENhyQEah3E1AAQE1AAEaB3QEQBzDTDTQDSDSBzEQQB2EWACExQgBE9h3EaQhxELjMDQQgEAEgFAEQjSDSkRBzQkUB1kvADQgGAAgFAAQk1gBkah3QkNhyjQjOQjYjYhzkQQh2kYgBky");
	this.shape_578.setTransform(120.025,240.025);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").p("A4BAAQAAk4B5keQB0kTDVjWQDZjWEQhzQEeh5E4AAQE5AAEeB5QETB0DWDVQDVDWB0ETQB3EZACE1QAAFBh6EeQhxEOjPDSQgEAFgFAEQjVDVkUB0QkYB3kyACQgHAAgFAAQk4AAkeh6QkRhzjTjQQjajbh0kTQh4kcgBk2");
	this.shape_579.setTransform(120,240);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").p("A4TAAQAAk8B6khQB2kXDXjYQDbjZETh0QEhh6E9AAQE9AAEhB6QEWB2DZDXQDXDYB2EXQB5EcABE5QAAFFh6EhQh0ERjRDVQgFAEgDAFQjZDXkWB2QkcB4k3ACQgGAAgFAAQk9AAkhh6QkTh0jWjUQjcjeh2kWQh6kfAAk6");
	this.shape_580.setTransform(120,240);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").p("A4mAAQAAlAB7klQB4kaDajaQDdjbEXh2QElh8FAAAQFBAAEkB7QEbB4DaDaQDaDaB3EaQB7EhABE8QAAFJh8EkQh1EVjTDYQgFAEgEAEQjbDakaB3QkfB6k6ACQgGAAgGAAQlBAAkkh8QkXh2jYjWQjfjfh4kbQh6kigBk+");
	this.shape_581.setTransform(120,240);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").p("A45AAQAAlEB9koQB5keDdjcQDgjeEah4QEoh9FEAAQFEAAEoB9QEeB5DdDdQDdDcB4EeQB8EkACFAQgBFMh9EpQh2EYjXDaQgEAEgEAFQjeDckdB5QkiB6k+ADQgGAAgGAAQlEAAkoh9Qkbh4jajYQjijjh5kdQh8kngBlB");
	this.shape_582.setTransform(120,240);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").p("A5MAAQAAlHB/ksQB6khDfjgQDjjgEeh5QEsh/FHAAQFIAAEsB/QEhB6DgDfQDfDgB6EhQB9EnACFEQAAFRh/ErQh4EbjZDcQgEAFgFAFQjfDfkhB6QknB9lAACQgHAAgGAAQlIAAkrh/Qkeh5jdjbQjljmh6kgQh+kpgBlF");
	this.shape_583.setTransform(120,240);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").p("A5eAAQAAlMCAkuQB7klDijiQDljjEhh6QEviAFMAAQFMAAEvCAQEkB7DiDiQDjDiB7ElQB/EqABFHQAAFViAEvQh6EejbDgQgEAFgFAEQjiDiklB7QkpB+lFACQgGAAgGAAQlMAAkviAQkhh6jgjeQjnjnh7klQiAktAAlI");
	this.shape_584.setTransform(120,240);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#000000").p("A5xAAQAAlPCBkzQB9koDljkQDojmEkh8QEziBFPAAQFQAAEyCBQEoB9DlDlQDlDkB9EoQB/EuACFLQAAFZiBEyQh7EijeDiQgEAFgFAEQjlDlkoB9QksB/lJACQgHAAgGAAQlQAAkyiBQklh9jijfQjqjrh9koQiAkwgBlM");
	this.shape_585.setTransform(120,240);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").p("A6EAAQAAlTCDk2QB/krDnjnQDqjpEoh9QE2iDFTAAQFTAAE2CDQErB/DoDnQDnDnB+ErQCCEyACFOQgBFciDE2Qh8EmjgDkQgFAFgEAFQjoDmkrB/QkwCAlMADQgHAAgGAAQlTAAk2iDQkoh9jljjQjsjth/ksQiCkzgBlQ");
	this.shape_586.setTransform(120,240);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#000000").p("A6XAAQAAlWCFk6QCAkvDpjqQDujrEqh+QE6iFFXAAQFXAAE6CFQEuCADrDpQDpDqCAEvQCDE1ACFSQAAFhiFE5Qh9EpjjDmQgFAFgEAFQjrDpkuCAQk0CClQADQgGAAgHAAQlXAAk6iFQkrh+jnjmQjvjwiAkuQiEk3gBlU");
	this.shape_587.setTransform(120,240);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").p("A6pAAQAAlbCGk9QCBkyDsjsQDwjtEuiAQE9iGFbAAQFbAAE9CGQEyCBDsDsQDtDsCBEyQCEE5ACFVQAAFliGE9Qh/EsjlDpQgFAFgFAFQjsDskyCBQk3CElUACQgHAAgGAAQlbAAk9iGQkviAjpjoQjyjyiBkyQiGk7AAlY");
	this.shape_588.setTransform(120.025,240.025);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").p("A68AAQAAlfCHlAQCDk1DvjvQDyjwEyiCQFAiHFfAAQFfAAFBCHQE1CDDvDvQDvDvCDE1QCFE8ACFZQAAFpiHFAQiBEvjnDtQgFAEgFAFQjvDvk2CDQk6CFlYACQgGAAgHAAQlfAAlAiHQkyiCjsjqQj1j1iDk2QiGk+gBlb");
	this.shape_589.setTransform(120,240);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").p("A7PAAQAAliCJlEQCEk5DyjxQD1jzE1iDQFEiJFiAAQFiAAFECJQE5CEDyDyQDyDxCDE5QCIE/ACFdQAAFsiKFFQiBEyjqDvQgFAFgFAFQjyDxk5CDQk9CHlcADQgHAAgGAAQliAAlEiKQk2iCjvjtQj3j4iEk4QiIlCgBlf");
	this.shape_590.setTransform(120,240);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").p("A7iAAQAAlmCLlIQCFk8D0j0QD4j1E4iEQFIiLFmAAQFmAAFICLQE8CFD1D0QD0D0CFE8QCJFDACFhQAAFxiLFHQiDE2jtDwQgEAFgFAFQj1D1k8CFQlCCIlfADQgGAAgHAAQlmAAlIiLQk4iEjyjvQj6j7iFk8QiKlFgBlj");
	this.shape_591.setTransform(120,240);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").p("A71AAQAAlqCNlLQCHlAD2j2QD6j4E8iFQFLiNFqAAQFqAAFLCNQFACHD2D2QD3D2CHFAQCKFGACFlQAAF0iMFLQiFE5jvD0QgFAFgFAFQj2D2lACHQlFCKliACQgHAAgHAAQlqAAlLiMQk8iFj0jyQj8j9iHlAQiMlJgBlm");
	this.shape_592.setTransform(120,240);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#000000").p("AcIAAQAAFuiNFPQiJFDj5D5Qj5D5lDCJQlPCNluAAQluAAlOiNQlDiJj5j5Qj5j5iJlDQiNlPAAluQAAluCNlOQCJlDD5j5QD5j5FDiJQFOiNFuAAQFuAAFPCNQFDCJD5D5QD5D5CJFDQCNFOAAFug");
	this.shape_593.setTransform(120,240);

	var maskedShapeInstanceList = [this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578,this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_497}]}).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[{t:this.shape_579}]},1).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_593}]},1).to({state:[]},1).wait(95));

	// 境界面
	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").p("A/PAAMA+fAAA");
	this.shape_594.setTransform(260,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_594).wait(97).to({_off:true},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(699,419,-238,-178);
// library properties:
lib.properties = {
	id: 'F23C43925C8D487D9780641A04A55ADC',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/wave_26020102_atlas_1.png", id:"wave_26020102_atlas_1"}
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
an.compositions['F23C43925C8D487D9780641A04A55ADC'] = {
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
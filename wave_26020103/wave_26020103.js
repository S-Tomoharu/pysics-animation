(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



// stage content:
(lib.wave_26020103 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [96];
	// timeline functions:
	this.frame_96 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(96).call(this.frame_96).wait(96));

	// レイヤー_11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/AMWIAA4rMA+BAAAIAAYrg");
	mask.setTransform(258.5,161.025);

	// 波面
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3).p("AuWMDIct4F");
	this.shape.setTransform(211.9,162.825);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({x:213.1,y:164.275},0).wait(1).to({x:214.3,y:165.675},0).wait(1).to({x:215.5,y:167.125},0).wait(1).to({x:216.7,y:168.575},0).wait(1).to({x:217.925,y:170.025},0).wait(1).to({x:219.15,y:171.425},0).wait(1).to({x:220.35,y:172.875},0).wait(1).to({x:221.55,y:174.325},0).wait(1).to({x:222.75,y:175.725},0).wait(1).to({x:223.95,y:177.175},0).wait(1).to({x:225.15,y:178.625},0).wait(1).to({x:226.35,y:180.075},0).wait(1).to({x:227.55,y:181.475},0).wait(1).to({x:228.75,y:182.925},0).wait(1).to({x:229.975,y:184.375},0).wait(1).to({x:231.2,y:185.825},0).wait(1).to({x:232.4,y:187.225},0).wait(1).to({x:233.6,y:188.675},0).wait(1).to({x:234.8,y:190.125},0).wait(1).to({x:236,y:191.525},0).wait(1).to({x:237.2,y:192.975},0).wait(1).to({x:238.4,y:194.425},0).wait(1).to({x:239.6,y:195.875},0).wait(1).to({x:240.825,y:197.275},0).wait(1).to({x:242.025,y:198.725},0).wait(1).to({x:243.225,y:200.175},0).wait(1).to({x:244.45,y:201.575},0).wait(1).to({x:245.65,y:203.025},0).wait(1).to({x:246.85,y:204.475},0).wait(1).to({x:248.05,y:205.925},0).wait(1).to({x:249.25,y:207.325},0).wait(1).to({x:250.45,y:208.775},0).wait(1).to({x:251.65,y:210.225},0).wait(1).to({x:252.875,y:211.625},0).wait(1).to({x:254.075,y:213.075},0).wait(1).to({x:255.275,y:214.525},0).wait(1).to({x:256.475,y:215.975},0).wait(1).to({x:257.7,y:217.375},0).wait(1).to({x:258.9,y:218.825},0).wait(1).to({x:260.1,y:220.275},0).wait(1).to({x:261.3,y:221.675},0).wait(1).to({x:262.5,y:223.125},0).wait(1).to({x:263.7,y:224.575},0).wait(1).to({x:264.925,y:226.025},0).wait(1).to({x:266.125,y:227.425},0).wait(1).to({x:267.325,y:228.875},0).wait(1).to({x:268.525,y:230.325},0).wait(1).to({x:269.75,y:231.775},0).wait(1).to({x:270.95,y:233.175},0).wait(1).to({x:272.15,y:234.625},0).wait(1).to({x:273.35,y:236.075},0).wait(1).to({x:274.55,y:237.475},0).wait(1).to({x:275.775,y:238.925},0).wait(1).to({x:276.975,y:240.375},0).wait(1).to({x:278.175,y:241.825},0).wait(1).to({x:279.375,y:243.225},0).wait(1).to({x:280.575,y:244.675},0).wait(1).to({x:281.775,y:246.125},0).wait(1).to({x:283,y:247.525},0).wait(1).to({x:284.2,y:248.975},0).wait(1).to({x:285.4,y:250.425},0).wait(1).to({x:286.6,y:251.875},0).wait(1).to({x:287.825,y:253.275},0).wait(1).to({x:289.025,y:254.725},0).wait(1).to({x:290.225,y:256.175},0).wait(1).to({x:291.425,y:257.575},0).wait(1).to({x:292.625,y:259.025},0).wait(1).to({x:293.825,y:260.475},0).wait(1).to({x:295.025,y:261.925},0).wait(1).to({x:296.25,y:263.325},0).wait(1).to({x:297.45,y:264.775},0).wait(1).to({x:298.675,y:266.225},0).wait(1).to({x:299.875,y:267.625},0).wait(1).to({x:301.075,y:269.075},0).wait(1).to({x:302.275,y:270.525},0).wait(1).to({x:303.475,y:271.975},0).wait(1).to({x:304.675,y:273.375},0).wait(1).to({x:305.875,y:274.825},0).wait(1).to({x:307.075,y:276.275},0).wait(1).to({x:308.275,y:277.675},0).wait(1).to({x:309.5,y:279.125},0).wait(1).to({x:310.725,y:280.575},0).wait(1).to({x:311.925,y:282.025},0).wait(1).to({x:313.125,y:283.425},0).wait(1).to({x:314.325,y:284.875},0).wait(1).to({x:315.525,y:286.325},0).wait(1).to({x:316.725,y:287.775},0).wait(1).to({x:317.925,y:289.175},0).wait(1).to({x:319.125,y:290.625},0).wait(1).to({x:320.325,y:292.075},0).wait(1).to({x:321.55,y:293.475},0).wait(1).to({x:322.775,y:294.925},0).wait(1).to({x:323.975,y:296.375},0).wait(1).to({x:325.175,y:297.825},0).wait(1).to({x:326.375,y:299.225},0).wait(1).to({x:327.575,y:300.675},0).to({_off:true},1).wait(95));

	// レイヤー_12 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A/PKUIAA0nMA+fAAAIAAUng");
	mask_1.setTransform(260,306.025);

	// レイヤー_13
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(3,1,1).p("AWqpNMgtTASb");
	this.shape_1.setTransform(153.025,227.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("A2pJOMAtTgSb");
	this.shape_2.setTransform(154.125,228.275);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_1,this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{x:153.025,y:227.525}}]}).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1,p:{x:256.525,y:299.025}}]},1).wait(96));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1).to({_off:false},0).wait(1).to({x:155.175,y:229.025},0).wait(1).to({x:156.275,y:229.775},0).wait(1).to({x:157.325,y:230.525},0).wait(1).to({x:158.425,y:231.225},0).wait(1).to({x:159.475,y:231.975},0).wait(1).to({x:160.575,y:232.725},0).wait(1).to({x:161.625,y:233.475},0).wait(1).to({x:162.725,y:234.225},0).wait(1).to({x:163.825,y:234.975},0).wait(1).to({x:164.875,y:235.725},0).wait(1).to({x:165.975,y:236.475},0).wait(1).to({x:167.025,y:237.225},0).wait(1).to({x:168.125,y:237.975},0).wait(1).to({x:169.175,y:238.675},0).wait(1).to({x:170.275,y:239.425},0).wait(1).to({x:171.375,y:240.175},0).wait(1).to({x:172.425,y:240.925},0).wait(1).to({x:173.525,y:241.675},0).wait(1).to({x:174.575,y:242.425},0).wait(1).to({x:175.675,y:243.175},0).wait(1).to({x:176.725,y:243.925},0).wait(1).to({x:177.825,y:244.675},0).wait(1).to({x:178.925,y:245.425},0).wait(1).to({x:179.975,y:246.125},0).wait(1).to({x:181.075,y:246.875},0).wait(1).to({x:182.125,y:247.625},0).wait(1).to({x:183.225,y:248.375},0).wait(1).to({x:184.275,y:249.125},0).wait(1).to({x:185.375,y:249.875},0).wait(1).to({x:186.425,y:250.625},0).wait(1).to({x:187.525,y:251.375},0).wait(1).to({x:188.625,y:252.125},0).wait(1).to({x:189.675,y:252.825},0).wait(1).to({x:190.775,y:253.575},0).wait(1).to({x:191.825,y:254.325},0).wait(1).to({x:192.925,y:255.075},0).wait(1).to({x:193.975,y:255.825},0).wait(1).to({x:195.075,y:256.575},0).wait(1).to({x:196.175,y:257.325},0).wait(1).to({x:197.225,y:258.075},0).wait(1).to({x:198.325,y:258.825},0).wait(1).to({x:199.375,y:259.575},0).wait(1).to({x:200.475,y:260.275},0).wait(1).to({x:201.525,y:261.025},0).wait(1).to({x:202.625,y:261.775},0).wait(1).to({x:203.675,y:262.525},0).wait(1).to({x:204.775,y:263.275},0).wait(1).to({x:205.875,y:264.025},0).wait(1).to({x:206.925,y:264.775},0).wait(1).to({x:208.025,y:265.525},0).wait(1).to({x:209.075,y:266.275},0).wait(1).to({x:210.175,y:266.975},0).wait(1).to({x:211.225,y:267.725},0).wait(1).to({x:212.325,y:268.475},0).wait(1).to({x:213.375,y:269.225},0).wait(1).to({x:214.475,y:269.975},0).wait(1).to({x:215.575,y:270.725},0).wait(1).to({x:216.625,y:271.475},0).wait(1).to({x:217.725,y:272.225},0).wait(1).to({x:218.775,y:272.975},0).wait(1).to({x:219.875,y:273.725},0).wait(1).to({x:220.925,y:274.425},0).wait(1).to({x:222.025,y:275.175},0).wait(1).to({x:223.125,y:275.925},0).wait(1).to({x:224.175,y:276.675},0).wait(1).to({x:225.275,y:277.425},0).wait(1).to({x:226.325,y:278.175},0).wait(1).to({x:227.425,y:278.925},0).wait(1).to({x:228.475,y:279.675},0).wait(1).to({x:229.575,y:280.425},0).wait(1).to({x:230.675,y:281.175},0).wait(1).to({x:231.725,y:281.875},0).wait(1).to({x:232.825,y:282.625},0).wait(1).to({x:233.875,y:283.375},0).wait(1).to({x:234.975,y:284.125},0).wait(1).to({x:236.025,y:284.875},0).wait(1).to({x:237.125,y:285.625},0).wait(1).to({x:238.175,y:286.375},0).wait(1).to({x:239.275,y:287.125},0).wait(1).to({x:240.375,y:287.875},0).wait(1).to({x:241.425,y:288.575},0).wait(1).to({x:242.525,y:289.325},0).wait(1).to({x:243.575,y:290.075},0).wait(1).to({x:244.675,y:290.825},0).wait(1).to({x:245.725,y:291.575},0).wait(1).to({x:246.825,y:292.325},0).wait(1).to({x:247.925,y:293.075},0).wait(1).to({x:248.975,y:293.825},0).wait(1).to({x:250.075,y:294.575},0).wait(1).to({x:251.125,y:295.325},0).wait(1).to({x:252.225,y:296.025},0).wait(1).to({x:253.275,y:296.775},0).wait(1).to({x:254.375,y:297.525},0).wait(1).to({x:255.425,y:298.275},0).to({_off:true},1).wait(96));

	// 波7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_3.setTransform(399.9,240);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").p("AghAAQAAgNAKgKQAKgKANAAQAPAAAKAKQAKAKAAANQAAAOgKAKQgKAKgPAAQgNAAgKgKQgKgKAAgOg");
	this.shape_4.setTransform(399.9,240);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_5.setTransform(399.925,240.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQARgPAUAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgUAAgRgPQgPgQAAgWg");
	this.shape_6.setTransform(399.9,240);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQATgTAYAAQAaAAATATQASASAAAZQAAAagSASQgTATgaAAQgYAAgTgTQgTgSAAgag");
	this.shape_7.setTransform(399.9,240);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").p("AhHAAQAAgdAWgVQAVgVAcAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgcAAgVgVQgWgWAAgdg");
	this.shape_8.setTransform(399.9,240);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").p("AhQAAQAAghAYgYQAXgXAhAAQAiAAAXAXQAYAYAAAhQAAAhgYAYQgXAYgiAAQghAAgXgYQgYgYAAghg");
	this.shape_9.setTransform(399.925,240.025);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").p("AhZAAQAAglAagaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQglAAgagbQgagaAAgmg");
	this.shape_10.setTransform(399.9,240);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").p("AhjAAQAAgpAegdQAdgdAoAAQAqAAAdAdQAdAdAAApQAAAqgdAdQgdAdgqAAQgoAAgdgdQgegdAAgqg");
	this.shape_11.setTransform(399.9,240);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").p("AhsAAQAAgtAgggQAggfAsAAQAuAAAgAfQAgAgAAAtQAAAtggAgQggAgguAAQgsAAggggQggggAAgtg");
	this.shape_12.setTransform(399.9,240);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_13.setTransform(399.925,240.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").p("Ah/AAQAAg0AmgmQAlglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAglglQgmgmAAg1g");
	this.shape_14.setTransform(399.9,240);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").p("AiJAAQAAg4ApgpQAogoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_15.setTransform(399.9,240);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").p("AiSAAQAAg8AsgrQAqgrA8AAQA9AAArArQArArAAA8QAAA9grAqQgrAsg9AAQg8AAgqgsQgsgqAAg9g");
	this.shape_16.setTransform(399.9,240);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").p("AibAAQAAhAAuguQAtgtBAAAQBBAAAtAtQAuAuAABAQAABAguAuQgtAuhBAAQhAAAgtguQguguAAhAg");
	this.shape_17.setTransform(399.925,240.025);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").p("AikAAQAAhDAwgyQAxgwBDAAQBFAAAwAwQAxAyAABDQAABEgxAxQgwAxhFAAQhDAAgxgxQgwgxAAhEg");
	this.shape_18.setTransform(399.9,240);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").p("ACvAAQAABJgzAyQgzA0hJAAQhIAAgyg0Qg0gyAAhJQAAhIA0gzQAygzBIAAQBJAAAzAzQAzAzAABIg");
	this.shape_19.setTransform(399.9,240);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANgfAagbQAcgcAegNQAjgPAnAAQAnAAAhAOQAgANAbAaQAbAbANAfQAPAiAAAoQAAAngNAhQgNAfgbAcQgBAAgBABQgZAagfANQgiAPgnAAQgBAAgBAAQglAAghgNQgggOgagaQgBAAgBgCQgbgZgNgfQgPgjAAgog");
	this.shape_20.setTransform(399.9,240);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").p("AjEAAQAAgoAOgjQAPghAbgdQAdgdAhgPQAkgPAqAAQApAAAjAOQAiAPAcAbQAdAdAPAhQAPAkAAAqQAAApgOAjQgOAhgdAdQAAABgBAAQgbAcghAOQgkAPgpABQgBAAgBAAQgnAAgjgOQgigOgcgcQgBgBgBgBQgcgbgOghQgQgkAAgrg");
	this.shape_21.setTransform(399.9,240);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").p("AjPAAQAAgpAPgmQAPgkAdgdQAfgfAjgPQAmgRAsAAQAsAAAlAQQAjAOAeAeQAeAeAQAjQAQAmAAAsQAAAsgPAlQgPAjgeAeQAAABgBABQgdAcgiAQQgnAQgrAAQgBAAgBAAQgqAAglgPQgkgPgdgdQgBgBgCgBQgcgdgPgiQgRgnAAgtg");
	this.shape_22.setTransform(399.9,239.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").p("AjaAAQAAgsAQgnQAQgnAfgeQAgghAkgQQAogRAvAAQAuAAAnAQQAmAPAfAfQAgAhAQAkQASAoAAAvQAAAugQAnQgQAmggAfQgBAAAAACQgeAeglAQQgoARguAAQgBAAgBAAQgsAAgngPQgngQgegfQgBgBgBgCQgegegRgkQgRgpAAgvg");
	this.shape_23.setTransform(399.9,240);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").p("AjlAAQAAguARgpQARgoAggiQAighAmgRQArgTAwAAQAwAAApASQAoAQAhAhQAhAhARAnQATArAAAwQAAAwgRApQgRAnghAhQgBACgBABQgfAfgnARQgqASgwABQgBAAgBAAQgvAAgogRQgogSghggQgBAAgBgCQgggfgRgnQgSgrAAgxg");
	this.shape_24.setTransform(399.9,240);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").p("AjwAAQAAgwASgsQASgqAggiQAkgjApgTQAsgTAzAAQAyAAAsATQApARAjAiQAjAjARApQAUAsAAAzQAAAygSArQgSAqgiAiQgBACgBAAQghAhgpASQgsATgyAAQgBAAgBAAQgwAAgsgRQgqgSghghQgCgCgBgCQghgggSgpQgTgsAAg0g");
	this.shape_25.setTransform(399.9,240);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").p("Aj8AAQAAgzAUguQASgsAjgjQAlglArgTQAugUA1AAQA1AAAtAUQAsARAkAlQAkAkATAqQAUAvAAA1QAAA1gTAtQgSAsgkAkQgBABgBAAQgjAjgqATQgvATg0ABQgBAAgBAAQgzAAgugTQgrgSgjgkQgCgBgBgBQgjgjgTgqQgUgwAAg1g");
	this.shape_26.setTransform(399.9,240);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").p("AkGAAQAAg1AUgwQATguAkglQAngmAtgUQAwgUA3AAQA3AAAvAUQAuATAmAkQAlAnAUAsQAVAxAAA3QAAA2gUAwQgTAugmAmQgBAAgBABQgkAkgsAUQgxAUg2ABQgBAAgBAAQg1AAgvgUQgvgUgkgkQgCgCgBgBQgkgkgUgtQgUgwAAg4g");
	this.shape_27.setTransform(399.9,240);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").p("AkRAAQAAg3AUgyQAVgwAlgnQApgoAugUQAzgVA5AAQA5AAAyAUQAvAUAnAmQAoAoAUAvQAWAzAAA5QAAA5gVAyQgUAvgnAnQgBABgBABQglAmgvAUQgyAVg5AAQgBAAgBAAQg3AAgygUQgwgUgmgmQgBgCgCgBQgmglgUgvQgVgzAAg6g");
	this.shape_28.setTransform(399.9,240);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").p("AkdAAQAAg5AWg1QAVgyAogoQApgpAxgVQA1gXA7AAQA7AAA0AWQAyAVAoAoQApApAVAxQAXA0AAA8QAAA7gVA0QgVAygpAoQgBABgBABQgnAngwAVQg1AXg7AAQgBAAgBAAQg5AAg0gWQgygUgogoQgBgCgCgBQgngogVgwQgXg1AAg8g");
	this.shape_29.setTransform(399.9,240);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").p("AkoAAQAAg8AXg1QAVg1AqgpQArgsAygVQA3gYA+AAQA+AAA1AXQA0AVAqAqQArArAWAyQAXA3AAA+QAAA+gWA1QgWAzgqArQgBABgCABQgoAogyAXQg3AWg9ABQgBAAgBAAQg8AAg1gXQg0gVgqgqQgBgBgCgCQgogogWgyQgYg3AAg/g");
	this.shape_30.setTransform(399.9,240);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").p("AkzAAQAAg+AYg4QAXg2AqgsQAtgsA0gWQA5gZBAAAQBAAAA4AYQA1AWAsArQAsAtAXA0QAYA5AABAQAAA/gXA4QgXA2grArQgCACgBABQgqAqg0AXQg5AYg/AAQgBAAgBAAQg+AAg4gXQg2gXgrgrQgCgBgBgCQgqgqgWg0QgZg6AAhAg");
	this.shape_31.setTransform(399.9,240);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").p("Ak+AAQAAhAAZg6QAXg4AsgtQAvguA2gYQA6gZBDAAQBCAAA6AZQA4AWAtAtQAtAuAYA3QAZA6AABDQAABCgYA5QgXA4guAtQgBACgBABQgsArg2AYQg6AZhCAAQgBAAgBAAQhAAAg6gYQg4gYgsgsQgCgBgCgCQgrgsgXg2Qgag7AAhDg");
	this.shape_32.setTransform(399.9,240);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").p("AlJAAQAAhDAag8QAYg6AtguQAxgvA4gZQA9gaBEAAQBEAAA8AZQA6AYAvAvQAvAvAYA4QAaA+AABEQAABEgZA8QgYA6gvAvQgBABgBABQgtAsg4AZQg9AZhEABQgBAAgBAAQhDAAg8gZQg5gYguguQgCgCgCgCQgsgtgZg3Qgag+AAhFg");
	this.shape_33.setTransform(399.9,240);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").p("AlUAAQAAhEAag/QAag8AugwQAygxA7gZQA/gbBGAAQBHAAA+AaQA7AZAwAvQAxAyAZA6QAbA/AABHQAABHgZA9QgaA8gwAwQgBABgCACQguAug6AZQg/AbhGAAQgBAAgBAAQhFAAg+gZQg8gagvgvQgCgCgCgCQgugugZg7Qgbg+AAhIg");
	this.shape_34.setTransform(399.9,240);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAag+AxgxQAzgzA8gaQBBgcBJAAQBJAABAAbQA+AaAxAxQAzAzAaA8QAbBBAABJQAABJgaBAQgaA+gyAxQgBACgCABQgwAwg8AaQhBAbhIAAQgBAAgBAAQhIAAg/gaQg+gagygxQgBgCgCgCQgvgwgag8QgchBAAhKg");
	this.shape_35.setTransform(399.9,239.975);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").p("AlqAAQAAhJAchDQAbg/Ayg0QA1g0A+gaQBDgdBLAAQBLAABCAbQBAAbAzAzQA0A0AbA/QAdBDAABLQgBBLgbBCQgbA/gzA0QgCACgBABQgyAxg9AaQhEAdhKABQgBAAgBAAQhJgBhCgbQhAgbgzgyQgCgDgCgCQgxgxgag+QgdhDAAhMg");
	this.shape_36.setTransform(399.9,240);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").p("Al1AAQAAhMAdhEQAbhCA0g0QA3g2A/gcQBGgdBNAAQBNAABFAcQBBAcA1A0QA1A2AcBAQAeBGAABNQgBBNgcBEQgcBCg0A1QgCACgCABQgyAyhAAcQhFAdhNAAQgBAAgBAAQhMAAhEgcQhCgcg0g0QgCgCgCgCQgzgzgbg/QgdhGAAhOg");
	this.shape_37.setTransform(399.9,240);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").p("AmAAAQAAhNAehHQAchFA1g1QA4g4BCgcQBIgfBPAAQBQAABGAeQBEAcA2A3QA3A3AcBCQAfBHAABQQAABPgeBGQgcBFg3A1QgBACgCACQg0AzhCAdQhHAehPABQgBAAgBAAQhOAAhGgeQhFgcg1g2QgCgCgCgCQgzg0gdhCQgehIAAhQg");
	this.shape_38.setTransform(399.9,240);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").p("AmLAAQAAhQAehIQAehGA3g4QA5g5BEgeQBJgfBSAAQBSAABIAfQBGAdA4A3QA4A6AdBEQAgBJAABSQAABSgeBIQgeBGg4A3QgBACgCACQg2A1hEAdQhJAfhRAAQgBAAgBAAQhQAAhIgeQhGgeg3g3QgCgCgDgBQg1g2gdhEQgfhJAAhTg");
	this.shape_39.setTransform(399.9,240);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").p("AmXAAQAAhSAghLQAehIA5g5QA7g7BGgeQBLggBUAAQBUAABLAfQBHAfA6A5QA6A6AeBGQAgBMAABUQAABUgfBKQgfBIg5A6QgCABgBACQg4A3hFAeQhMAfhTABQgBAAgBAAQhSAAhLggQhIgeg4g5QgCgBgCgCQg3g4gehFQghhNAAhUg");
	this.shape_40.setTransform(399.9,240);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").p("AmhAAQAAhUAghNQAfhKA5g7QA+g8BIgeQBNgiBWAAQBWABBNAgQBJAfA7A6QA8A9AfBHQAhBOAABWQAABWggBNQgfBJg7A7QgCACgCACQg5A4hHAfQhOAhhVAAQgBAAgBAAQhVAAhMggQhKgfg6g6QgCgDgCgCQg5g5gehHQghhOAAhXg");
	this.shape_41.setTransform(399.9,239.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").p("AmsAAQAAhWAhhPQAghMA7g8QA+g+BKggQBQgiBYAAQBZABBOAhQBMAfA8A8QA9A+AgBKQAiBQAABYQAABZghBOQggBMg8A8QgCACgCACQg6A5hKAgQhPAihYAAQgBAAgBAAQhXAAhOghQhNggg8g8QgBgCgCgCQg6g6gghKQghhQAAhZg");
	this.shape_42.setTransform(399.9,239.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").p("Am4AAQAAhZAjhRQAghOA9g+QBAg+BMghQBSgjBaAAQBbAABQAiQBOAhA+A9QA/BAAgBMQAjBRAABbQAABbgiBQQghBOg+A+QgBACgCABQg8A8hLAgQhSAjhaAAQgCAAAAAAQhZAAhQgiQhPghg9g9QgDgCgBgCQg7g8ghhMQgjhRAAhcg");
	this.shape_43.setTransform(399.9,240);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").p("AnDAAQAAhbAjhTQAihRA+g+QBChBBNgiQBUgjBdAAQBdAABTAjQBPAiBAA+QBABBAhBOQAkBUAABdQAABdgjBTQghBPhABAQgCACgCACQg9A8hNAhQhUAjhcABQgCAAAAAAQhcgBhSgiQhQghg/g/QgCgCgDgDQg8g+ghhMQgkhVAAhdg");
	this.shape_44.setTransform(399.9,240);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").p("AnOAAQAAhdAkhVQAihTBBhAQBDhDBQgiQBVgkBfAAQBfAABVAjQBSAjBBBBQBCBCAiBQQAkBWAABfQAABfgjBUQgjBShBBBQgCADgCACQg/A+hPAhQhWAlheAAQgCAAAAAAQheAAhUgjQhSgjhBhAQgCgDgCgCQg/g/ghhQQglhVAAhgg");
	this.shape_45.setTransform(399.9,240);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").p("AnZAAQAAhgAkhXQAkhUBChCQBEhEBSgjQBYglBhAAQBiAABWAkQBUAkBDBCQBDBEAjBSQAlBYAABhQAABigkBWQgkBUhCBCQgCACgCADQhBA/hRAiQhXAmhhAAQgCAAAAAAQhgAAhWgkQhVgkhBhCQgDgCgCgDQhAhAgihRQgmhYAAhig");
	this.shape_46.setTransform(399.9,240);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").p("AnkAAQAAhiAlhZQAlhWBDhEQBGhFBUgkQBagmBjAAQBkAABZAmQBVAkBEBDQBFBGAkBUQAmBaAABjQAABkglBZQgkBVhEBEQgCADgDACQhBBAhTAkQhaAmhjAAQgCAAAAAAQhiAAhZglQhWgkhDhEQgDgCgCgDQhBhBgkhTQgmhbAAhkg");
	this.shape_47.setTransform(399.9,239.975);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").p("AnvAAQAAhkAmhbQAmhYBEhGQBIhGBWglQBbgnBmAAQBmAABbAmQBYAlBFBGQBHBHAkBVQAnBdAABlQAABmgmBbQglBYhFBFQgDADgCACQhDBChVAkQhcAnhlAAQgCAAAAAAQhkAAhcgmQhXglhFhFQgDgCgCgDQhDhDgkhVQgnhcAAhng");
	this.shape_48.setTransform(399.9,239.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").p("An7AAQAAhmAoheQAmhaBGhHQBKhIBXgmQBegoBoAAQBpAABcAoQBaAlBHBIQBIBIAmBYQAoBeAABoQgBBognBdQglBahIBHQgCACgCADQhFBDhXAmQheAnhoABQgBAAAAAAQhngBhcgnQhbgmhHhGQgCgCgDgEQhDhEgmhXQgohfAAhog");
	this.shape_49.setTransform(399.9,240);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").p("AoFAAQAAhpAohfQAnhcBHhJQBLhJBagnQBggpBqAAQBrAABfApQBbAnBJBHQBKBLAmBaQApBgAABqQgBBrgnBeQgnBchJBJQgCACgCADQhHBEhYAnQhhAohqABQgBAAAAAAQhpgBhfgnQhcgohIhHQgDgDgCgCQhFhHgnhZQgohgAAhrg");
	this.shape_50.setTransform(399.9,240);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").p("AoQAAQAAhrAphiQAohdBJhKQBMhMBbgnQBjgpBsAAQBtAABhApQBeAnBKBKQBLBMAnBbQAqBjAABsQgBBtgoBhQgoBdhKBLQgCACgDADQhIBGhaAnQhiAphtAAQgBAAAAAAQhrAAhhgoQhegohKhJQgCgDgDgDQhHhIgnhaQgphjAAhtg");
	this.shape_51.setTransform(399.9,240);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").p("AobAAQAAhtAqhkQAohgBLhLQBOhNBegoQBkgrBuAAQBvAABjArQBgAoBMBLQBMBOAoBdQArBkAABvQAABvgqBjQgoBghMBLQgCADgDACQhJBIhdAoQhkAqhvABQgBAAAAAAQhuAAhigqQhhgphLhLQgCgCgDgDQhIhKgohdQgqhjAAhwg");
	this.shape_52.setTransform(399.9,240);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").p("AomAAQAAhvArhmQAohiBNhNQBQhOBfgpQBmgsBxAAQByABBlAqQBhAqBOBMQBOBQAoBfQAsBmAABxQAABygrBlQgpBhhNBOQgDACgCACQhLBKhfAoQhmAshxAAQgBAAAAAAQhwAAhlgrQhigphNhNQgCgCgDgDQhKhLgohfQgrhmAAhyg");
	this.shape_53.setTransform(399.9,239.975);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").p("AoyAAQAAhxAshoQArhkBNhPQBRhQBigpQBogtBzAAQB0ABBnArQBkAqBOBPQBQBRAqBhQAsBoAABzQAAB0gsBnQgqBkhOBOQgDADgDACQhMBLhgAqQhpAshzAAQgBAAAAAAQhyAAhngsQhkgqhOhOQgDgDgDgDQhLhMgphhQgthoAAh0g");
	this.shape_54.setTransform(399.9,239.975);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").p("Ao8AAQAAh0AshqQArhmBQhQQBThRBjgrQBqgtB1AAQB2ABBpAsQBmArBQBQQBSBSAqBjQAtBrAAB1QAAB2gsBpQgrBmhRBQQgCADgDACQhOBNhiAqQhrAth1AAQgBAAAAAAQh1AAhpgsQhmgshPhPQgEgDgCgDQhMhOgqhiQgthrAAh2g");
	this.shape_55.setTransform(399.9,239.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").p("ApIAAQAAh2AuhsQAshpBRhRQBUhTBlgrQBtguB3AAQB4AABsAuQBnArBSBSQBTBUArBlQAuBsAAB4QAAB4gtBrQgsBohSBSQgCADgDACQhQBOhkArQhsAth4ABQgBAAAAAAQh3gBhrgtQhogrhShSQgCgDgDgCQhOhQgqhkQgvhtAAh4g");
	this.shape_56.setTransform(399.9,240);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").p("ApTAAQAAh5AvhuQAthqBRhTQBXhUBngsQBugvB6AAQB7AABtAvQBqAsBTBTQBUBVAsBoQAvBuAAB6QAAB7guBsQgtBrhTBTQgDADgDACQhQBPhmAsQhvAvh6AAQgBAAAAAAQh5AAhtgvQhrgshShSQgDgEgDgDQhPhQgshnQgvhuAAh7g");
	this.shape_57.setTransform(399.9,240);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").p("ApeAAQAAh6AwhxQAthsBUhUQBXhWBpgtQBxgwB8AAQB9AABvAvQBsAuBVBUQBWBXAsBpQAwBxAAB8QAAB8gvBwQgtBshVBVQgDACgDADQhSBQhoAtQhxAvh8ABQgBAAAAAAQh7gBhvguQhtguhUhUQgDgDgDgDQhRhTgshnQgwhyAAh8g");
	this.shape_58.setTransform(399.9,240);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAvhuBVhWQBahYBrgtQBygxB+AAQB/AAByAwQBtAvBXBWQBXBYAuBrQAwBzAAB+QAAB/gwBxQguBuhWBXQgDACgDADQhUBShqAuQhzAwh+AAQgBAAAAAAQh9AAhygwQhuguhWhWQgDgDgDgDQhShUgthqQgxhzAAh/g");
	this.shape_59.setTransform(399.9,239.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAvhxBYhXQBahZBtgvQB1gxCAAAQCBAAB0AxQBwAvBYBYQBZBaAuBtQAxB1AACAQAACBgwB0QgwBwhYBYQgCACgDADQhWBUhsAuQh0AxiBAAQgBAAAAAAQiAAAhzgwQhwgwhYhXQgDgDgDgDQhThWguhsQgyh1AAiBg");
	this.shape_60.setTransform(399.9,239.975);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").p("Ap/AAQAAiBAyh3QAwhyBZhZQBchaBvgwQB3gyCCAAQCEAAB1AyQByAwBZBZQBbBcAvBvQAyB3AACCQAACEgxB1QgwByhaBZQgDADgDADQhWBVhuAvQh3AyiDAAQgBAAAAAAQiCAAh1gxQhzgxhYhYQgEgDgDgEQhVhWgvhvQgyh2AAiEg");
	this.shape_61.setTransform(399.9,239.975);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").p("AqKAAQAAiEAzh4QAxh0BahaQBdhdBygwQB4g0CFAAQCGAAB4AzQBzAxBbBbQBcBdAwByQA0B4AACFQgBCFgyB4QgxB0hbBbQgDADgDADQhYBWhwAwQh5AziFAAQgBAAAAAAQiEAAh4gyQh0gyhahaQgEgDgDgEQhXhYgvhwQgzh5AAiFg");
	this.shape_62.setTransform(399.9,240);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").p("AqWAAQAAiGA1h7QAxh2BchcQBgheBygxQB7g0CHAAQCIAAB6A0QB2AyBcBcQBeBfAwBzQA1B7AACHQgBCIgzB6QgyB2hcBcQgDADgDADQhaBXhyAxQh7A0iHABQgBAAAAAAQiGgBh6gzQh2gyhdhcQgCgDgEgDQhYhagwhyQg1h7AAiIg");
	this.shape_63.setTransform(399.9,240);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").p("AqgAAQAAiIA0h9QAzh4BdheQBhhfB1gyQB9g1CJAAQCKAAB8A1QB4AyBeBeQBfBhAyB1QA1B9AACJQgBCKg0B7QgyB5heBeQgDADgEADQhbBZhzAyQh+A0iJABQgBAAAAAAQiJgBh7g0Qh5gzhdhdQgDgDgEgEQhZhbgxh0Qg1h9AAiKg");
	this.shape_64.setTransform(399.9,240);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").p("AqrAAQAAiKA1h/QA0h6BehfQBjhhB2gzQCAg2CLAAQCNABB+A1QB5A0BgBfQBhBiAyB3QA2B/AACLQgBCNg1B9QgzB6hfBgQgEADgDADQhdBbh1AyQh/A2iMAAQgBAAAAAAQiLgBh+g1Qh6gzhfhfQgDgDgEgEQhahdgyh1Qg2iAAAiMg");
	this.shape_65.setTransform(399.9,239.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").p("Aq2AAQAAiMA2iBQA0h9BghgQBlhiB5g0QCAg3COAAQCPABCAA2QB8A0BhBhQBiBkAzB4QA3CCAACNQAACPg2CAQg1B8hhBhQgDADgDADQheBch4AzQiBA3iOAAQgBAAgBAAQiNAAh/g2Qh8g1hhhgQgDgEgEgDQhchegzh4Qg2iBAAiPg");
	this.shape_66.setTransform(399.9,239.975);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").p("ArBAAQAAiPA3iDQA1h+BihiQBmhkB6g0QCDg4CQAAQCRABCCA3QB+A1BiBiQBkBmA0B6QA4CDAACQQAACRg3CCQg1B+hjBiQgDAEgEADQhfBdh6A0QiDA4iQAAQgBAAgBAAQiPAAiBg3Qh/g2hihhQgDgEgDgEQhehfg0h6Qg3iDAAiRg");
	this.shape_67.setTransform(399.9,239.975);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").p("ArNAAQAAiRA5iFQA1iABkhkQBohlB8g1QCFg5CSAAQCTABCFA3QB/A3BkBjQBmBnA0B9QA5CFAACSQAACTg4CEQg2CAhkBkQgDAEgEADQhhBfh7A0QiGA5iSAAQgBAAgBAAQiRAAiEg4QiAg2hjhkQgEgDgDgEQhghhg0h8Qg5iFAAiTg");
	this.shape_68.setTransform(399.9,239.975);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA3iDBlhkQBphoB/g2QCHg5CUAAQCWAACGA5QCCA3BlBlQBnBpA2B/QA5CHAACUQAACVg5CHQg3CChlBlQgDADgEADQhjBhh9A1QiHA6iVAAQgBAAgBAAQiTAAiGg5QiCg3hlhlQgEgDgDgEQhhhjg1h+Qg6iHAAiVg");
	this.shape_69.setTransform(399.9,240);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA4iEBmhnQBrhpCBg2QCJg6CWAAQCYAACIA5QCEA4BnBnQBpBqA2CBQA6CJAACXQAACYg6CIQg3CEhnBnQgEADgDADQhlBjh/A1QiJA6iXABQgBAAgBAAQiVgBiJg5QiEg4hnhmQgDgEgDgEQhjhkg1h/Qg7iJAAiYg");
	this.shape_70.setTransform(399.9,240);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA5iGBohoQBshqCCg4QCMg7CYAAQCaAACLA7QCFA4BpBpQBqBsA3CCQA7CMAACYQAACag6CKQg5CGhoBpQgEADgEAEQhlBjiBA3QiMA7iZAAQgBAAgBAAQiYAAiKg6QiGg5hohoQgEgEgEgEQhjhlg3iCQg7iLAAiag");
	this.shape_71.setTransform(399.9,239.975);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").p("Ar5AAQAAiaA7iNQA6iJBqhpQBuhsCDg4QCOg8CbAAQCdAACMA8QCIA5BqBqQBrBtA4CFQA8CNAACbQAACdg7CMQg6CIhqBqQgDADgEAEQhnBkiDA4QiOA8ibAAQgBAAgBAAQiaAAiMg7QiJg6hphpQgEgEgDgEQhlhng4iDQg8iOAAicg");
	this.shape_72.setTransform(399.9,239.975);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").p("AsEAAQAAicA8iQQA7iKBrhrQBvhtCHg5QCPg9CdAAQCfAACOA8QCKA7BsBrQBtBvA5CGQA8CQAACdQAACfg8COQg6CKhsBsQgDADgEAEQhpBmiFA5QiQA8idAAQgBAAgBAAQicAAiOg8QiLg7hrhrQgDgDgEgEQhnhpg5iFQg8iQAAieg");
	this.shape_73.setTransform(399.9,239.975);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA8iMBshtQBxhvCIg6QCSg9CfAAQChAACRA9QCLA7BtBtQBvBxA6CIQA9CSAACfQAAChg9CQQg7CMhtBtQgEAEgEAEQhqBniHA6QiRA9igAAQgBAAgBAAQieAAiRg9QiMg7hthtQgEgDgDgFQhohqg6iHQg9iSAAigg");
	this.shape_74.setTransform(399.9,239.975);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").p("AsaAAQAAihA+iTQA8iPBuhuQBzhwCKg7QCTg/CiAAQCjAACTA+QCOA9BuBuQBxBzA6CJQA/CUAACiQgBCjg+CSQg8COhuBvQgEAEgEADQhsBpiIA7QiUA+iiABQgBAAgBAAQihgBiSg+QiOg8huhuQgEgEgEgEQhphsg7iJQg+iTAAijg");
	this.shape_75.setTransform(399.9,240);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").p("AslAAQAAijA/iWQA8iQBxhvQB0hzCMg8QCVg/CkAAQCmAACUA/QCQA9BwBwQByB0A7CNQBACVAACkQgBCmg+CUQg9CQhwBwQgEAEgEAEQhtBqiLA7QiWA/ikAAQgBAAgBAAQijAAiUg+QiRg+hvhvQgEgEgFgEQhqhtg7iMQg/iWAAikg");
	this.shape_76.setTransform(399.9,240);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").p("AsxAAQAAilBBiYQA+iSBxhxQB2h0COg8QCXhBCmAAQCoABCWBAQCSA9ByByQBzB1A8COQBBCYAACmQgBCog/CWQg+CShyByQgDAEgFAEQhuBriNA8QiYBBimAAQgBAAgBAAQimgBiWg/QiSg+hyhxQgDgEgEgFQhshug8iNQhBiYAAing");
	this.shape_77.setTransform(399.9,239.975);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").p("As7AAQAAinBBiaQA+iVBzhyQB3h1CQg9QCahCCoAAQCqABCZBAQCUA/BzBzQB1B3A9CQQBBCaAACoQgBCqhACYQg/CVhzBzQgEAEgEAEQhwBtiOA9QibBBioAAQgBAAgBAAQingBiZhAQiUg/hzhyQgEgEgEgFQhuhwg8iPQhBiaAAipg");
	this.shape_78.setTransform(399.9,239.975);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").p("AtGAAQAAiqBBibQBAiXB0h0QB5h3CSg+QCchCCqAAQCsABCbBBQCWBAB1B0QB2B5A+CSQBCCcAACqQgBCshBCbQg/CWh1B1QgEAEgEADQhyBviQA+QicBCirAAQgBAAgCAAQipgBiahBQiWhAh1h0QgEgEgEgEQhwhyg8iRQhCibAAisg");
	this.shape_79.setTransform(399.9,239.975);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").p("AtRAAQAAisBCieQBBiYB1h2QB7h4CUg/QCehDCsAAQCvABCcBCQCYBAB2B2QB5B6A+CUQBDCfAACsQAACvhDCcQhACYh2B2QgEAEgEAEQh0BxiSA+QieBDitAAQgBAAgCAAQirAAichDQiZhAh2h2QgEgEgEgEQhwh0g+iSQhDieAAiug");
	this.shape_80.setTransform(399.9,239.975);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").p("AtcAAQAAiuBDigQBBibB4h3QB8h5CVhAQCghECvAAQCxABCfBDQCaBBB3B4QB6B7A/CWQBECgAACvQAACxhDCeQhCCbh3B3QgEAEgFAEQh0ByiVA/QigBEivAAQgBAAgCAAQitAAifhDQiahCh4h3QgEgEgEgFQhyh0g/iVQhDigAAiwg");
	this.shape_81.setTransform(399.9,239.975);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").p("AtoAAQAAixBFihQBCidB4h5QB+h7CYhAQCihFCxAAQCzAAChBEQCcBCB5B5QB7B9BACYQBFCjAACxQAACzhECgQhCCdh5B5QgFAEgEAEQh2BziWBAQijBFixAAQgBAAgCAAQivAAihhFQichCh5h4QgFgEgEgFQhzh2hAiXQhFiiAAiyg");
	this.shape_82.setTransform(399.9,240);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").p("AtzAAQAAizBGikQBCieB7h6QB/h9CahCQCkhFCzAAQC1AACjBFQCeBDB7B7QB9B/BBCaQBFCkAACzQAAC1hFCjQhDCeh7B7QgEAEgEAEQh4B1iYBBQikBFi0AAQgBAAgCAAQiyAAiihFQifhDh6h6QgFgFgEgEQh1h4hAiYQhGilAAi0g");
	this.shape_83.setTransform(399.9,239.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").p("At+AAQAAi1BGimQBEihB8h7QCBh/CchCQClhGC2AAQC4AAClBGQCgBEB8B8QB+CBBCCbQBGCnAAC1QAAC4hGCkQhEChh8B8QgEAEgFAEQh5B2iaBCQimBGi2AAQgBAAgCAAQi0AAilhGQighEh9h8QgDgEgFgFQh2h5hBiaQhHimAAi3g");
	this.shape_84.setTransform(399.9,239.975);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").p("AuJAAQAAi3BHioQBFijB9h9QCDiACdhDQCphHC3AAQC6AACnBHQCiBFB+B9QCACCBCCeQBHCpAAC3QAAC6hHCnQhECih+B+QgEAEgFAEQh6B4icBCQipBHi4AAQgBAAgCAAQi2AAiohHQihhFh+h9QgEgEgFgFQh3h6hDidQhHioAAi5g");
	this.shape_85.setTransform(399.9,239.975);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").p("AuUAAQAAi5BIirQBFikB/h/QCEiBCghEQCqhIC6AAQC8AACpBIQCkBFCACAQCBCDBDCgQBICqAAC6QAAC8hICpQhFCkh/CAQgEAEgFAEQh8B5ieBDQirBIi6AAQgBAAgCAAQi5AAiohIQilhFh/h/QgFgEgEgFQh5h8hDifQhIiqAAi7g");
	this.shape_86.setTransform(399.9,239.975);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").p("AufAAQAAi8BJisQBGinCBiAQCFiDCihEQCshJC8AAQC+AACsBIQCmBHCACBQCDCFBEChQBJCtAAC8QAAC+hICrQhHCniACAQgFAFgEAEQh+B6igBEQitBJi8AAQgBAAgCAAQi7AAirhIQinhHiAiAQgEgFgFgEQh7h+hDigQhJitAAi9g");
	this.shape_87.setTransform(399.9,239.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").p("AuqAAQAAi+BKiuQBHipCCiCQCHiECkhGQCuhJC+AAQDBAACtBJQCoBICCCCQCFCHBFCjQBJCvAAC+QAADBhJCtQhHCoiCCCQgFAFgFAEQh/B8iiBFQiuBJi/AAQgBAAgCAAQi+AAishJQiohIiDiBQgEgFgFgFQh8h/hEiiQhKiuAAjAg");
	this.shape_88.setTransform(399.9,239.975);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").p("Au1AAQAAjABLixQBHiqCEiEQCJiGClhGQCxhLDAAAQDDABCvBKQCqBICECEQCGCIBGCmQBLCxAADAQgBDDhKCvQhICqiECEQgEAFgFAEQiBB9ijBGQixBLjCAAQAAAAgCAAQi/gBivhKQirhIiEiEQgEgEgFgFQh9iBhFikQhLiwAAjCg");
	this.shape_89.setTransform(399.9,239.975);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#000000").p("AvAAAQAAjCBLizQBJitCFiEQCLiICnhHQCyhMDDAAQDFABCyBLQCsBJCFCFQCICKBGCoQBMCyAADDQgBDFhLCxQhICtiGCFQgEAFgFAEQiCB/imBGQizBMjEAAQAAAAgCAAQjCgBixhLQishJiFiFQgFgEgFgFQh/iChGimQhLizAAjEg");
	this.shape_90.setTransform(399.9,239.975);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#000000").p("AvMAAQAAjFBNi0QBJivCHiGQCMiJCqhIQC0hNDFAAQDHABC0BMQCuBKCHCGQCJCMBHCpQBNC1AADFQgBDHhMC0QhJCuiHCHQgFAEgFAFQiDCAioBHQi1BNjGAAQAAAAgCAAQjEgBizhMQivhKiHiGQgEgFgFgFQiAiDhHioQhNi1AAjGg");
	this.shape_91.setTransform(399.9,239.975);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").p("AvWAAQAAjHBNi3QBKiwCJiIQCNiLCrhIQC3hODHAAQDKABC1BMQCwBLCJCJQCKCNBJCrQBNC3AADHQgBDKhMC1QhLCwiICJQgFAEgFAFQiFCBipBJQi4BNjIAAQAAAAgCAAQjGgBi2hMQiwhLiIiIQgFgFgEgFQiCiFhIiqQhNi3AAjIg");
	this.shape_92.setTransform(399.9,239.975);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").p("AvhAAQAAjJBOi5QBLizCKiJQCPiMCthKQC4hODKAAQDMABC4BNQCyBMCKCKQCMCOBJCuQBOC5AADJQgBDMhNC3QhLCziKCKQgFAEgFAFQiHCDirBJQi5BOjLAAQAAAAgCAAQjIgBi4hNQiyhMiKiJQgFgFgFgFQiDiHhIisQhOi4AAjLg");
	this.shape_93.setTransform(399.9,239.975);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#000000").p("AvsAAQAAjLBPi7QBMi1CLiLQCRiOCvhKQC7hPDLAAQDOABC6BOQC0BNCLCLQCOCQBKCvQBPC8AADLQgBDOhOC5QhMC1iMCLQgEAFgGAFQiICEitBKQi7BPjNAAQAAAAgCAAQjLgBi5hOQi0hNiMiKQgFgFgEgGQiFiIhJitQhPi7AAjNg");
	this.shape_94.setTransform(399.9,239.975);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBNi3CNiMQCSiQCyhLQC8hPDOAAQDQAAC8BPQC2BOCNCNQCQCRBKCyQBQC9AADOQAADQhQC8QhNC2iNCNQgFAFgFAFQiJCGiwBKQi9BPjPABQAAAAgCAAQjNgBi7hPQi3hOiNiMQgFgFgEgFQiHiKhKivQhQi9AAjPg");
	this.shape_95.setTransform(399.9,240);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBOi5COiOQCUiQCzhMQC/hRDQAAQDTAAC+BRQC4BOCOCOQCRCUBLCzQBRC/AADQQAADThRC9QhNC5iPCOQgFAFgFAFQiLCHixBLQjABRjRAAQAAAAgCAAQjPAAi+hRQi4hOiPiOQgEgFgFgFQiIiLhLiyQhRi/AAjRg");
	this.shape_96.setTransform(399.9,239.975);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").p("AwOAAQAAjSBRjBQBQi7CQiPQCViTC1hNQDBhRDSAAQDVAADABRQC6BQCQCQQCSCUBNC2QBRDBAADSQAADVhRC/QhPC7iQCQQgFAFgFAFQiNCIizBNQjBBRjUAAQAAAAgCAAQjSAAi/hRQi6hQiQiPQgFgFgFgFQiJiNhNi0QhRjAAAjUg");
	this.shape_97.setTransform(399.9,239.975);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi8BQQjDBSjWAAQjUAAjDhSQi9hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjEQBQi8CRiRQCSiSC9hQQDDhSDUAAQDWAADDBSQC8BQCSCSQCRCRBQC8QBSDEAADUg");
	this.shape_98.setTransform(399.9,239.975);

	var maskedShapeInstanceList = [this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29,this.shape_30,this.shape_31,this.shape_32,this.shape_33,this.shape_34,this.shape_35,this.shape_36,this.shape_37,this.shape_38,this.shape_39,this.shape_40,this.shape_41,this.shape_42,this.shape_43,this.shape_44,this.shape_45,this.shape_46,this.shape_47,this.shape_48,this.shape_49,this.shape_50,this.shape_51,this.shape_52,this.shape_53,this.shape_54,this.shape_55,this.shape_56,this.shape_57,this.shape_58,this.shape_59,this.shape_60,this.shape_61,this.shape_62,this.shape_63,this.shape_64,this.shape_65,this.shape_66,this.shape_67,this.shape_68,this.shape_69,this.shape_70,this.shape_71,this.shape_72,this.shape_73,this.shape_74,this.shape_75,this.shape_76,this.shape_77,this.shape_78,this.shape_79,this.shape_80,this.shape_81,this.shape_82,this.shape_83,this.shape_84,this.shape_85,this.shape_86,this.shape_87,this.shape_88,this.shape_89,this.shape_90,this.shape_91,this.shape_92,this.shape_93,this.shape_94,this.shape_95,this.shape_96,this.shape_97,this.shape_98];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3}]},96).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).wait(1));

	// 波6
	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgKAAgHgHQgHgIAAgKQAAgKAHgHQAHgHAKAAQALAAAHAHQAHAHAAAKg");
	this.shape_99.setTransform(353.25,240);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#000000").p("AghAAQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOg");
	this.shape_100.setTransform(353.25,240);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_101.setTransform(353.275,240.025);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPQgPgQAAgWg");
	this.shape_102.setTransform(353.25,240);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgag");
	this.shape_103.setTransform(353.25,240);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#000000").p("AhHAAQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgdAAgVgVQgVgWAAgdg");
	this.shape_104.setTransform(353.25,240);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#000000").p("AhQAAQAAghAYgYQAXgXAhAAQAiAAAXAXQAYAYAAAhQAAAhgYAYQgXAYgiAAQghAAgXgYQgYgYAAghg");
	this.shape_105.setTransform(353.275,240.025);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#000000").p("AhaAAQAAglAbgaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQglAAgagbQgbgaAAgmg");
	this.shape_106.setTransform(353.25,240);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#000000").p("AhjAAQAAgpAdgdQAegdAoAAQApAAAeAdQAdAdAAApQAAAqgdAdQgeAdgpAAQgoAAgegdQgdgdAAgqg");
	this.shape_107.setTransform(353.25,240);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#000000").p("AhsAAQAAgtAgggQAfgfAtAAQAuAAAgAfQAfAgAAAtQAAAtgfAgQggAgguAAQgtAAgfggQggggAAgtg");
	this.shape_108.setTransform(353.25,240);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_109.setTransform(353.275,240.025);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_110.setTransform(353.25,240);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#000000").p("AiJAAQAAg4ApgpQAogoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_111.setTransform(353.25,240);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#000000").p("AiSAAQAAg8ArgrQArgrA8AAQA9AAArArQArArAAA8QAAA9grAqQgrAsg9AAQg8AAgrgsQgrgqAAg9g");
	this.shape_112.setTransform(353.25,240);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#000000").p("AibAAQAAhAAuguQAtgtBAAAQBBAAAtAtQAuAuAABAQAABAguAuQgtAuhBAAQhAAAgtguQguguAAhAg");
	this.shape_113.setTransform(353.275,240.025);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#000000").p("AilAAQAAhDAxgyQAwgwBEAAQBFAAAwAwQAxAyAABDQAABEgxAxQgwAxhFAAQhEAAgwgxQgxgxAAhEg");
	this.shape_114.setTransform(353.25,240);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#000000").p("ACvAAQAABJgzAyQgzA0hJAAQhIAAgzg0QgzgyAAhJQAAhIAzgzQAzgzBIAAQBJAAAzAzQAzAzAABIg");
	this.shape_115.setTransform(353.25,240);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANgfAZgbQAcgcAfgNQAigPAoAAQAnAAAhAOQAgANAbAaQAbAbANAfQAPAiAAAoQAAAngNAhQgOAfgaAcQgBAAgBABQgZAagfANQgiAPgnAAQgBAAgBAAQgmAAgggNQghgOgZgaQgCAAAAgCQgbgZgNgfQgPgjAAgog");
	this.shape_116.setTransform(353.25,240);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#000000").p("AjEAAQAAgoAOgjQAPghAbgdQAdgdAhgPQAkgPAqAAQApAAAjAOQAhAPAdAbQAdAdAOAhQAQAkAAAqQAAApgOAjQgOAhgdAdQgBABAAAAQgbAcghAOQgkAPgpABQgBAAgBAAQgoAAgjgOQghgOgcgcQgCgBAAgBQgcgbgOghQgQgkAAgrg");
	this.shape_117.setTransform(353.25,240);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#000000").p("AjPAAQAAgpAPgmQAPgkAdgdQAfgfAigPQAngRAsAAQAsAAAlAQQAjAOAeAeQAeAeAPAjQARAmAAAsQAAAsgPAlQgPAjgeAeQAAABgCABQgcAcgiAQQgnAQgrAAQgBAAgBAAQgqAAglgPQgkgPgdgdQgBgBgCgBQgcgdgPgiQgRgnAAgtg");
	this.shape_118.setTransform(353.25,239.975);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#000000").p("AjaAAQAAgsAQgnQAQgnAfgeQAgghAkgQQAogRAvAAQAuAAAnAQQAmAPAfAfQAgAhAQAkQARAoAAAvQAAAugPAnQgQAmggAfQgBAAgBACQgeAegkAQQgoARguAAQgBAAgBAAQgsAAgngPQgngQgegfQgBgBgCgCQgegegQgkQgRgpAAgvg");
	this.shape_119.setTransform(353.25,240);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").p("AjmAAQAAguASgpQARgoAggiQAhghAngRQArgTAwAAQAwAAApASQAoAQAgAhQAiAhARAnQATArAAAwQAAAwgRApQgSAnggAhQgBACgBABQgfAfgnARQgrASgvABQgBAAgBAAQgvAAgpgRQgogSggggQgBAAgCgCQgfgfgRgnQgTgrAAgxg");
	this.shape_120.setTransform(353.25,240);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#000000").p("AjwAAQAAgwASgsQARgqAhgiQAkgjApgTQAsgTAzAAQAyAAAsATQApARAiAiQAjAjASApQATAsAAAzQAAAygRArQgSAqgjAiQAAACgCAAQggAhgpASQgsATgyAAQgBAAgBAAQgwAAgsgRQgqgSgighQgBgCgBgCQghgggSgpQgTgsAAg0g");
	this.shape_121.setTransform(353.25,240);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#000000").p("Aj8AAQAAgzATguQATgsAjgjQAlglAqgTQAvgUA1AAQA1AAAtAUQArARAlAlQAkAkATAqQAUAvAAA1QAAA1gTAtQgSAsglAkQAAABgBAAQgjAjgqATQgvATg0ABQgBAAgBAAQgzAAgugTQgrgSgjgkQgCgBgBgBQgjgjgTgqQgUgwAAg1g");
	this.shape_122.setTransform(353.25,240);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#000000").p("AkHAAQAAg1AUgwQAUguAkglQAngmAtgUQAwgUA3AAQA2AAAwAUQAuATAmAkQAlAnAUAsQAVAxAAA3QAAA2gUAwQgUAuglAmQgBAAgBABQgkAkgsAUQgxAUg2ABQgBAAgBAAQg1AAgvgUQgvgUgkgkQgCgCgBgBQgkgkgUgtQgVgwAAg4g");
	this.shape_123.setTransform(353.25,240);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#000000").p("AkRAAQAAg3AUgyQAUgwAmgnQAogoAvgUQAygVA6AAQA5AAAxAUQAwAUAnAmQAoAoAUAvQAVAzAAA5QAAA5gUAyQgUAvgnAnQgBABgBABQglAmgvAUQgyAVg5AAQgBAAgBAAQg3AAgygUQgwgUgmgmQgCgCgBgBQgmglgUgvQgVgzAAg6g");
	this.shape_124.setTransform(353.25,240);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#000000").p("AkdAAQAAg5AWg1QAVgyAngoQAqgpAwgVQA1gXA8AAQA7AAA0AWQAyAVAoAoQApApAVAxQAXA0AAA8QAAA7gWA0QgUAygpAoQgCABAAABQgoAngvAVQg1AXg8AAQAAAAgBAAQg6AAgzgWQgzgUgngoQgBgCgCgBQgngogVgwQgXg1AAg8g");
	this.shape_125.setTransform(353.25,240);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#000000").p("AkoAAQAAg8AXg1QAVg1AqgpQArgsAygVQA3gYA+AAQA9AAA2AXQAzAVArAqQAqArAXAyQAXA3AAA+QAAA+gXA1QgVAzgqArQgCABgBABQgoAogyAXQg3AWg+ABQAAAAgBAAQg8AAg1gXQg0gVgqgqQgBgBgCgCQgogogXgyQgXg3AAg/g");
	this.shape_126.setTransform(353.25,240);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#000000").p("AkzAAQAAg+AYg4QAXg2AqgsQAtgsA0gWQA5gZBAAAQBAAAA3AYQA2AWArArQAtAtAXA0QAYA5AABAQAAA/gXA4QgXA2grArQgCACgBABQgqAqg0AXQg5AYhAAAQAAAAgBAAQg+AAg4gXQg2gXgrgrQgCgBgBgCQgqgqgXg0QgYg6AAhAg");
	this.shape_127.setTransform(353.25,240);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#000000").p("Ak+AAQAAhAAZg6QAXg4AsgtQAuguA3gYQA6gZBDAAQBCAAA6AZQA3AWAtAtQAuAuAYA3QAZA6AABDQAABCgYA5QgYA4gtAtQgBACgBABQgsArg2AYQg6AZhDAAQAAAAgBAAQhBAAg5gYQg4gYgtgsQgCgBgBgCQgsgsgXg2QgZg7AAhDg");
	this.shape_128.setTransform(353.25,240);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#000000").p("AlJAAQAAhDAag8QAXg6AuguQAxgvA3gZQA+gaBEAAQBEAAA8AZQA6AYAvAvQAuAvAZA4QAaA+AABEQAABEgZA8QgYA6gvAvQgBABgCABQgtAsg3AZQg+AZhEABQAAAAgBAAQhDAAg8gZQg6gYgtguQgDgCgBgCQgsgtgZg3Qgag+AAhFg");
	this.shape_129.setTransform(353.25,240);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#000000").p("AlUAAQAAhEAag/QAag8AugwQAygxA7gZQA/gbBGAAQBHAAA+AaQA7AZAwAvQAxAyAZA6QAbA/AABHQAABHgZA9QgaA8gwAwQgBABgCACQguAug6AZQhAAbhGAAQAAAAgBAAQhFAAg+gZQg8gagvgvQgCgCgCgCQgugugZg7Qgbg+AAhIg");
	this.shape_130.setTransform(353.25,240);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAag+AwgxQA0gzA8gaQBBgcBJAAQBJAAA/AbQA/AaAxAxQAzAzAZA8QAcBBAABJQAABJgaBAQgbA+gyAxQAAACgDABQgvAwg8AaQhBAbhJAAQAAAAgBAAQhIAAg/gaQg/gagxgxQgBgCgCgCQgwgwgZg8QgchBAAhKg");
	this.shape_131.setTransform(353.25,239.975);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#000000").p("AlrAAQAAhJAchDQAbg/Ayg0QA1g0A/gaQBDgdBLAAQBLAABCAbQA/AbA0AzQA0A0AaA/QAeBDAABLQgBBLgbBCQgbA/gzA0QgCACgCABQgxAxg9AaQhEAdhLABQAAAAgBAAQhJgBhDgbQg/gbgzgyQgCgDgCgCQgxgxgag+QgehDAAhMg");
	this.shape_132.setTransform(353.25,240);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#000000").p("Al1AAQAAhMAchEQAchCA0g0QA3g2A/gcQBFgdBOAAQBNAABFAcQBBAcA1A0QA1A2AcBAQAdBGAABNQAABNgcBEQgcBCg0A1QgCACgCABQgzAyg/AcQhFAdhOAAQAAAAgBAAQhMAAhEgcQhCgcg0g0QgCgCgCgCQgzgzgbg/QgdhGAAhOg");
	this.shape_133.setTransform(353.25,240);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#000000").p("AmBAAQAAhNAehHQAdhFA1g1QA4g4BCgcQBHgfBQAAQBPAABGAeQBFAcA1A3QA3A3AdBCQAfBHAABQQAABPgeBGQgcBFg3A1QgCACgBACQg0AzhCAdQhHAehQABQAAAAgBAAQhOAAhGgeQhFgcg1g2QgCgCgCgCQgzg0gdhCQgfhIAAhQg");
	this.shape_134.setTransform(353.25,240);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#000000").p("AmLAAQAAhQAehIQAehGA3g4QA5g5BEgeQBJgfBSAAQBRAABJAfQBGAdA3A3QA5A6AdBEQAfBJAABSQAABSgeBIQgdBGg4A3QgCACgBACQg2A1hEAdQhJAfhSAAQAAAAgBAAQhQAAhJgeQhGgeg3g3QgCgCgCgBQg1g2gdhEQgfhJAAhTg");
	this.shape_135.setTransform(353.25,240);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#000000").p("AmXAAQAAhSAghLQAehIA5g5QA6g7BGgeQBMggBUAAQBUAABLAfQBHAfA6A5QA6A6AeBGQAgBMAABUQAABUggBKQgeBIg5A6QgCABgBACQg4A3hFAeQhMAfhUABQAAAAgBAAQhTAAhKggQhIgeg4g5QgDgBgCgCQg3g4gehFQgghNAAhUg");
	this.shape_136.setTransform(353.25,240);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#000000").p("AmiAAQAAhUAhhNQAfhKA5g7QA+g8BIgeQBNgiBWAAQBWABBNAgQBJAfA7A6QA8A9AfBHQAhBOAABWQAABWghBNQgeBJg8A7QgBACgCACQg5A4hHAfQhOAhhWAAQAAAAgBAAQhVAAhMggQhKgfg6g6QgCgDgDgCQg4g5gfhHQghhOAAhXg");
	this.shape_137.setTransform(353.25,239.975);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#000000").p("AmsAAQAAhWAhhPQAghMA7g8QA+g+BKggQBQgiBYAAQBZABBOAhQBMAfA8A8QA9A+AgBKQAhBQAABYQAABZggBOQggBMg9A8QgBACgCACQg6A5hKAgQhQAihYAAQAAAAgBAAQhXAAhOghQhNggg8g8QgBgCgCgCQg6g6gghKQghhQAAhZg");
	this.shape_138.setTransform(353.25,239.975);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#000000").p("Am4AAQAAhZAjhRQAghOA9g+QBAg+BMghQBSgjBaAAQBbAABQAiQBOAhA+A9QA/BAAgBMQAjBRAABbQAABbgiBQQghBOg+A+QgBACgCABQg8A8hLAgQhTAjhaAAQgBAAAAAAQhaAAhQgiQhOghg9g9QgDgCgBgCQg8g8gghMQgjhRAAhcg");
	this.shape_139.setTransform(353.25,240);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#000000").p("AnDAAQAAhbAjhTQAihRA+g+QBChBBNgiQBUgjBdAAQBdAABTAjQBPAiBAA+QBABBAhBOQAkBUAABdQgBBdgiBTQghBPhABAQgCACgCACQg+A8hMAhQhUAjhdABQgBAAAAAAQhcgBhSgiQhQghg/g/QgDgCgCgDQg8g+ghhMQgkhVAAhdg");
	this.shape_140.setTransform(353.25,240);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#000000").p("AnOAAQAAhdAkhVQAihTBAhAQBEhDBQgiQBVgkBfAAQBfAABVAjQBRAjBBBBQBDBCAhBQQAlBWAABfQAABfgjBUQgjBShBBBQgCADgCACQg/A+hPAhQhWAlhfAAQgBAAAAAAQheAAhUgjQhSgjhBhAQgCgDgDgCQg+g/ghhQQglhVAAhgg");
	this.shape_141.setTransform(353.25,240);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#000000").p("AnZAAQAAhgAkhXQAkhUBChCQBEhEBSgjQBXglBiAAQBiAABWAkQBUAkBCBCQBEBEAiBSQAmBYAABhQAABigkBWQgkBUhCBCQgCACgDADQhAA/hRAiQhXAmhiAAQgBAAAAAAQhgAAhXgkQhUgkhChCQgCgCgDgDQg/hAgihRQgmhYAAhig");
	this.shape_142.setTransform(353.25,240);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#000000").p("AnkAAQAAhiAlhZQAlhWBDhEQBGhFBTgkQBagmBkAAQBkAABZAmQBVAkBEBDQBFBGAkBUQAmBaAABjQAABkglBZQglBVhDBEQgDADgCACQhBBAhTAkQhaAmhkAAQgBAAAAAAQhiAAhZglQhWgkhDhEQgDgCgCgDQhBhBgkhTQgmhbAAhkg");
	this.shape_143.setTransform(353.25,239.975);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#000000").p("AnvAAQAAhkAmhbQAlhYBFhGQBIhGBWglQBbgnBmAAQBmAABbAmQBYAlBFBGQBHBHAkBVQAnBdAABlQAABmgmBbQglBYhGBFQgCADgCACQhEBChUAkQhcAnhmAAQgBAAAAAAQhkAAhcgmQhYglhEhFQgDgCgCgDQhDhDgkhVQgnhcAAhng");
	this.shape_144.setTransform(353.25,239.975);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#000000").p("An7AAQAAhmAoheQAmhaBGhHQBKhIBXgmQBegoBoAAQBoAABdAoQBaAlBHBIQBIBIAmBYQAoBeAABoQgBBognBdQglBahIBHQgCACgDADQhEBDhXAmQheAnhoABQgBAAAAAAQhngBhcgnQhbgmhHhGQgCgCgDgEQhDhEgmhXQgohfAAhog");
	this.shape_145.setTransform(353.25,240);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#000000").p("AoGAAQAAhpAphfQAnhcBHhJQBLhJBagnQBggpBqAAQBqAABfApQBcAnBJBHQBJBLAnBaQApBgAABqQgBBrgnBeQgoBchIBJQgDACgBADQhHBEhYAnQhhAohqABQgBAAAAAAQhpgBhfgnQhcgohIhHQgDgDgDgCQhEhHgnhZQgphgAAhrg");
	this.shape_146.setTransform(353.25,240);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").p("AoQAAQAAhrAohiQAohdBJhKQBNhMBbgnQBjgpBsAAQBtAABhApQBdAnBLBKQBLBMAnBbQApBjAABsQAABtgoBhQgoBdhKBLQgCACgDADQhIBGhaAnQhjAphsAAQgBAAAAAAQhsAAhhgoQhdgohKhJQgDgDgDgDQhGhIgnhaQgphjAAhtg");
	this.shape_147.setTransform(353.25,240);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#000000").p("AocAAQAAhtAqhkQAphgBLhLQBOhNBegoQBkgrBuAAQBvAABjArQBgAoBLBLQBNBOAoBdQArBkAABvQAABvgqBjQgoBghMBLQgCADgDACQhKBIhcAoQhlAqhuABQgBAAAAAAQhuAAhigqQhhgphLhLQgDgCgCgDQhJhKgnhdQgrhjAAhwg");
	this.shape_148.setTransform(353.25,240);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#000000").p("AomAAQAAhvAqhmQAphiBNhNQBQhOBfgpQBmgsBxAAQByABBkAqQBiAqBNBMQBPBQAoBfQArBmAABxQAABygqBlQgpBhhNBOQgDACgCACQhLBKhfAoQhmAshxAAQgBAAAAAAQhwAAhlgrQhigphNhNQgCgCgDgDQhKhLgohfQgrhmAAhyg");
	this.shape_149.setTransform(353.25,239.975);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#000000").p("AoyAAQAAhxAshoQArhkBNhPQBRhQBigpQBogtBzAAQB0ABBnArQBkAqBOBPQBQBRAqBhQAsBoAABzQAAB0gsBnQgqBkhOBOQgDADgDACQhMBLhgAqQhpAshzAAQgBAAAAAAQhzAAhngsQhkgqhNhOQgDgDgDgDQhLhMgqhhQgshoAAh0g");
	this.shape_150.setTransform(353.25,239.975);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#000000").p("Ao9AAQAAh0AthqQArhmBQhQQBShRBkgrQBqgtB1AAQB2ABBpAsQBmArBQBQQBRBSArBjQAtBrAAB1QAAB2gtBpQgrBmhQBQQgCADgDACQhOBNhiAqQhrAth1AAQgBAAAAAAQh1AAhpgsQhmgshPhPQgEgDgCgDQhMhOgrhiQgthrAAh2g");
	this.shape_151.setTransform(353.25,239.975);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#000000").p("ApIAAQAAh2AuhsQArhpBShRQBUhTBlgrQBsguB4AAQB4AABsAuQBnArBSBSQBTBUArBlQAuBsAAB4QgBB4gtBrQgrBohSBSQgDADgCACQhQBOhkArQhsAth4ABQgBAAAAAAQh3gBhrgtQhogrhShSQgCgDgDgCQhOhQgrhkQguhtAAh4g");
	this.shape_152.setTransform(353.25,240);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#000000").p("ApTAAQAAh5AvhuQAthqBRhTQBXhUBngsQBugvB6AAQB7AABtAvQBqAsBTBTQBUBVAsBoQAvBuAAB6QAAB7gvBsQgsBrhTBTQgDADgDACQhQBPhmAsQhvAvh6AAQgBAAAAAAQh5AAhtgvQhrgshShSQgDgEgDgDQhQhQgrhnQgvhuAAh7g");
	this.shape_153.setTransform(353.25,240);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#000000").p("ApeAAQAAh6AwhxQAthsBUhUQBXhWBpgtQBxgwB8AAQB8AABwAvQBsAuBVBUQBVBXAtBpQAwBxAAB8QgBB8guBwQguBshVBVQgCACgDADQhTBQhnAtQhxAvh8ABQgBAAAAAAQh7gBhwguQhsguhUhUQgDgDgDgDQhRhTgshnQgwhyAAh8g");
	this.shape_154.setTransform(353.25,240);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAuhuBWhWQBZhYBsgtQBygxB+AAQB/AAByAwQBtAvBWBWQBYBYAtBrQAxBzAAB+QAAB/gwBxQguBuhWBXQgEACgDADQhTBShqAuQhzAwh+AAQgBAAAAAAQh9AAhygwQhuguhWhWQgDgDgDgDQhShUgthqQgxhzAAh/g");
	this.shape_155.setTransform(353.25,239.975);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAvhxBXhXQBbhZBtgvQB1gxCAAAQCBAABzAxQBwAvBYBYQBaBaAtBtQAyB1AACAQAACBgwB0QgwBwhYBYQgCACgEADQhVBUhsAuQh1AxiAAAQgBAAAAAAQiAAAhzgwQhwgwhYhXQgDgDgDgDQhUhWgthsQgyh1AAiBg");
	this.shape_156.setTransform(353.25,239.975);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#000000").p("Ap/AAQAAiBAyh3QAwhyBYhZQBdhaBvgwQB3gyCCAAQCDAAB2AyQByAwBZBZQBbBcAvBvQAyB3AACCQAACEgxB1QgwByhaBZQgDADgDADQhWBVhuAvQh4AyiCAAQgBAAAAAAQiCAAh2gxQhygxhYhYQgEgDgDgEQhVhWgvhvQgyh2AAiEg");
	this.shape_157.setTransform(353.25,239.975);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#000000").p("AqKAAQAAiEAyh4QAyh0BahaQBdhdBygwQB4g0CFAAQCGAAB4AzQBzAxBbBbQBcBdAwByQAzB4AACFQAACFgyB4QgyB0haBbQgDADgEADQhYBWhwAwQh4AziFAAQgBAAAAAAQiFAAh3gyQh0gyhahaQgEgDgDgEQhXhYgvhwQgzh5AAiFg");
	this.shape_158.setTransform(353.25,240);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#000000").p("AqWAAQAAiGA0h7QAyh2BchcQBfheBzgxQB7g0CHAAQCIAAB6A0QB2AyBcBcQBdBfAxBzQA1B7AACHQgBCIgzB6QgyB2hcBcQgDADgDADQhaBXhyAxQh7A0iHABQgBAAAAAAQiHgBh5gzQh3gyhchcQgDgDgDgDQhYhagwhyQg1h7AAiIg");
	this.shape_159.setTransform(353.25,240);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#000000").p("AqhAAQAAiIA1h9QAzh4BdheQBhhfB1gyQB9g1CJAAQCKAAB8A1QB4AyBeBeQBfBhAyB1QA1B9AACJQgBCKg0B7QgyB5hfBeQgCADgEADQhbBZhzAyQh+A0iJABQgBAAAAAAQiJgBh7g0Qh5gzhdhdQgEgDgDgEQhZhbgyh0Qg1h9AAiKg");
	this.shape_160.setTransform(353.25,240);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#000000").p("AqrAAQAAiKA1h/QA0h6BehfQBjhhB2gzQB/g2CMAAQCNABB9A1QB6A0BgBfQBhBiAyB3QA1B/AACLQAACNg1B9Qg0B6hfBgQgDADgDADQhdBbh1AyQh/A2iMAAQgBAAAAAAQiLgBh+g1Qh6gzhfhfQgDgDgEgEQhbhdgyh1Qg1iAAAiMg");
	this.shape_161.setTransform(353.25,239.975);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#000000").p("Aq3AAQAAiMA3iBQA0h9BghgQBlhiB5g0QCAg3COAAQCPABCAA2QB7A0BhBhQBiBkA0B4QA3CCAACNQAACPg3CAQg0B8hhBhQgDADgDADQhfBch3AzQiBA3iOAAQgBAAgBAAQiNAAh/g2Qh8g1hhhgQgDgEgEgDQhchegzh4Qg3iBAAiPg");
	this.shape_162.setTransform(353.25,239.975);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#000000").p("ArBAAQAAiPA3iDQA1h+BhhiQBmhkB7g0QCDg4CQAAQCRABCCA3QB+A1BiBiQBkBmA0B6QA3CDAACQQAACRg3CCQg0B+hjBiQgDAEgEADQhfBdh6A0QiDA4iQAAQgBAAgBAAQiPAAiBg3Qh/g2hihhQgDgEgEgEQhdhfg0h6Qg3iDAAiRg");
	this.shape_163.setTransform(353.25,239.975);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#000000").p("ArNAAQAAiRA5iFQA1iABkhkQBohlB8g1QCFg5CSAAQCTABCEA3QCAA3BkBjQBmBnA0B9QA5CFAACSQAACTg4CEQg2CAhkBkQgEAEgDADQhhBfh7A0QiGA5iSAAQgBAAgBAAQiRAAiEg4QiAg2hjhkQgEgDgEgEQhfhhg0h8Qg5iFAAiTg");
	this.shape_164.setTransform(353.25,239.975);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA3iDBlhkQBphoB/g2QCHg5CUAAQCVAACHA5QCCA3BlBlQBnBpA1B/QA6CHAACUQAACVg5CHQg3CChlBlQgDADgEADQhjBhh+A1QiHA6iUAAQgBAAgBAAQiTAAiGg5QiDg3hkhlQgEgDgDgEQhhhjg1h+Qg6iHAAiVg");
	this.shape_165.setTransform(353.25,240);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA4iEBmhnQBrhpCAg2QCKg6CWAAQCXAACJA5QCEA4BnBnQBpBqA1CBQA7CJAACXQgBCYg5CIQg4CEhmBnQgEADgEADQhkBjh/A1QiKA6iWABQgBAAgBAAQiVgBiJg5QiEg4hnhmQgDgEgDgEQhjhkg1h/Qg7iJAAiYg");
	this.shape_166.setTransform(353.25,240);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA4iGBphoQBrhqCDg4QCLg7CZAAQCaAACLA7QCFA4BpBpQBpBsA4CCQA7CMAACYQAACag6CKQg5CGhpBpQgDADgEAEQhlBjiBA3QiMA7iZAAQgBAAgBAAQiYAAiKg6QiGg5hphoQgDgEgEgEQhjhlg3iCQg7iLAAiag");
	this.shape_167.setTransform(353.25,239.975);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#000000").p("Ar5AAQAAiaA7iNQA6iJBqhpQBuhsCDg4QCOg8CbAAQCcAACMA8QCJA5BqBqQBrBtA4CFQA8CNAACbQgBCdg6CMQg6CIhqBqQgDADgFAEQhmBkiDA4QiOA8ibAAQgBAAgBAAQiaAAiMg7QiJg6hphpQgEgEgEgEQhkhng4iDQg8iOAAicg");
	this.shape_168.setTransform(353.25,239.975);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#000000").p("AsEAAQAAicA8iQQA7iKBrhrQBvhtCHg5QCPg9CdAAQCfAACOA8QCKA7BrBrQBuBvA5CGQA8CQAACdQAACfg8COQg7CKhrBsQgDADgFAEQhoBmiFA5QiQA8idAAQgBAAgBAAQidAAiOg8QiKg7hrhrQgDgDgFgEQhmhpg5iFQg8iQAAieg");
	this.shape_169.setTransform(353.25,239.975);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA7iMBthtQBxhvCIg6QCRg9CgAAQChAACRA9QCLA7BtBtQBvBxA6CIQA9CSAACfQAAChg9CQQg7CMhtBtQgEAEgEAEQhqBniHA6QiRA9igAAQgBAAgBAAQifAAiQg9QiMg7hthtQgEgDgDgFQhphqg5iHQg9iSAAigg");
	this.shape_170.setTransform(353.25,239.975);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#000000").p("AsbAAQAAihA/iTQA8iPBuhuQByhwCLg7QCTg/CiAAQCjAACSA+QCOA9BvBuQBwBzA7CJQA/CUAACiQgBCjg+CSQg8COhuBvQgEAEgEADQhsBpiIA7QiUA+iiABQgBAAgBAAQihgBiSg+QiOg8huhuQgFgEgDgEQhphsg7iJQg/iTAAijg");
	this.shape_171.setTransform(353.25,240);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#000000").p("AslAAQAAijA/iWQA8iQBwhvQB1hzCMg8QCVg/CkAAQCmAACUA/QCQA9BwBwQByB0A7CNQA/CVAACkQAACmg+CUQg9CQhwBwQgFAEgDAEQhtBqiMA7QiVA/ikAAQgBAAgBAAQijAAiVg+QiQg+hvhvQgFgEgEgEQhqhtg7iMQg/iWAAikg");
	this.shape_172.setTransform(353.25,240);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#000000").p("AsxAAQAAilBAiYQA/iSBwhxQB2h0COg8QCYhBCmAAQCoABCWBAQCSA9ByByQBzB1A8COQBBCYAACmQgBCog/CWQg+CShyByQgEAEgEAEQhvBriMA8QiYBBimAAQgBAAgBAAQimgBiWg/QiSg+hyhxQgDgEgFgFQhshug7iNQhBiYAAing");
	this.shape_173.setTransform(353.25,239.975);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").p("As8AAQAAinBBiaQA/iVBzhyQB3h1CQg9QCahCCoAAQCqABCZBAQCUA/BzBzQB1B3A9CQQBBCaAACoQgBCqhACYQg/CVhzBzQgEAEgEAEQhwBtiOA9QibBBioAAQgBAAgBAAQingBiZhAQiVg/hzhyQgDgEgFgFQhthwg9iPQhBiaAAipg");
	this.shape_174.setTransform(353.25,239.975);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#000000").p("AtGAAQAAiqBBibQA/iXB1h0QB5h3CSg+QCchCCqAAQCsABCbBBQCVBAB2B0QB2B5A+CSQBBCcAACqQAACshBCbQg/CWh1B1QgEAEgEADQhyBviQA+QidBCiqAAQgBAAgCAAQipgBiahBQiWhAh1h0QgEgEgEgEQhwhyg9iRQhBibAAisg");
	this.shape_175.setTransform(353.25,239.975);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#000000").p("AtSAAQAAisBDieQBBiYB1h2QB7h4CUg/QCdhDCtAAQCuABCdBCQCYBAB2B2QB4B6A/CUQBDCfAACsQAACvhDCcQhACYh3B2QgDAEgEAEQh0BxiSA+QieBDitAAQgBAAgCAAQirAAidhDQiYhAh2h2QgEgEgEgEQhwh0g/iSQhDieAAiug");
	this.shape_176.setTransform(353.25,239.975);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#000000").p("AtcAAQAAiuBDigQBBibB4h3QB7h5CWhAQCghECvAAQCwABCgBDQCZBBB4B4QB6B7A/CWQBDCgAACvQAACxhDCeQhBCbh4B3QgDAEgFAEQh1ByiUA/QigBEivAAQgBAAgCAAQitAAifhDQiahCh4h3QgEgEgEgFQhyh0g/iVQhDigAAiwg");
	this.shape_177.setTransform(353.25,239.975);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#000000").p("AtoAAQAAixBFihQBBidB5h5QB+h7CYhAQCihFCxAAQCzAAChBEQCcBCB5B5QB7B9BACYQBFCjAACxQAACzhFCgQhBCdh5B5QgFAEgEAEQh2BziWBAQijBFixAAQgBAAgCAAQiwAAighFQidhCh4h4QgFgEgEgFQh0h2g/iXQhFiiAAiyg");
	this.shape_178.setTransform(353.25,240);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#000000").p("AtzAAQAAizBGikQBCieB6h6QCAh9CahCQCjhFC0AAQC1AACjBFQCeBDB7B7QB8B/BBCaQBGCkAACzQAAC1hGCjQhCCeh7B7QgEAEgFAEQh3B1iZBBQijBFi0AAQgBAAgCAAQiyAAijhFQiehDh6h6QgFgFgEgEQh1h4hAiYQhGilAAi0g");
	this.shape_179.setTransform(353.25,239.975);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#000000").p("At+AAQAAi1BGimQBEihB8h7QCBh/CbhCQCmhGC2AAQC4AAClBGQCgBEB8B8QB+CBBBCbQBHCnAAC1QgBC4hFCkQhEChh8B8QgEAEgFAEQh5B2iaBCQimBGi2AAQgBAAgCAAQi1AAikhGQihhEh8h8QgDgEgFgFQh2h5hBiaQhHimAAi3g");
	this.shape_180.setTransform(353.25,239.975);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#000000").p("AuJAAQAAi3BHioQBFijB9h9QCCiACehDQCphHC3AAQC6AACnBHQChBFB/B9QCACCBCCeQBHCpAAC3QAAC6hHCnQhFCih9B+QgFAEgEAEQh7B4ibBCQiqBHi3AAQgBAAgCAAQi3AAinhHQihhFh/h9QgDgEgFgFQh4h6hCidQhHioAAi5g");
	this.shape_181.setTransform(353.25,239.975);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#000000").p("AuUAAQAAi5BIirQBFikB/h/QCEiBCghEQCqhIC6AAQC8AACpBIQCkBFCACAQCBCDBDCgQBICqAAC6QgBC8hHCpQhFCkh/CAQgFAEgFAEQh7B5ieBDQirBIi6AAQgBAAgCAAQi5AAiohIQilhFh/h/QgFgEgEgFQh5h8hDifQhIiqAAi7g");
	this.shape_182.setTransform(353.25,239.975);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#000000").p("AufAAQAAi8BIisQBHinCBiAQCFiDCihEQCshJC8AAQC+AACrBIQCnBHCACBQCDCFBEChQBJCtAAC8QAAC+hICrQhHCniBCAQgEAFgEAEQh/B6ifBEQitBJi8AAQgBAAgCAAQi7AAirhIQinhHiAiAQgFgFgEgEQh7h+hDigQhJitAAi9g");
	this.shape_183.setTransform(353.25,239.975);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#000000").p("AuqAAQAAi+BJiuQBIipCCiCQCHiECjhGQCvhJC+AAQDBAACtBJQCoBICCCCQCECHBGCjQBJCvAAC+QAADBhJCtQhICoiCCCQgEAFgFAEQh/B8iiBFQivBJi+AAQgBAAgCAAQi+AAithJQiohIiCiBQgFgFgEgFQh8h/hFiiQhJiuAAjAg");
	this.shape_184.setTransform(353.25,239.975);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#000000").p("Au2AAQAAjABLixQBIiqCEiEQCIiGCmhGQCwhLDBAAQDCABCwBKQCqBICECEQCGCIBGCmQBLCxAADAQgBDDhKCvQhICqiECEQgEAFgFAEQiBB9ijBGQixBLjCAAQAAAAgCAAQi/gBivhKQirhIiEiEQgEgEgFgFQh9iBhGikQhLiwAAjCg");
	this.shape_185.setTransform(353.25,239.975);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#000000").p("AvAAAQAAjCBLizQBJitCFiEQCLiICnhHQCyhMDDAAQDFABCxBLQCsBJCFCFQCJCKBGCoQBLCyAADDQAADFhLCxQhICtiGCFQgEAFgFAEQiCB/inBGQiyBMjEAAQAAAAgCAAQjCgBixhLQishJiFiFQgFgEgFgFQh/iChGimQhLizAAjEg");
	this.shape_186.setTransform(353.25,239.975);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#000000").p("AvMAAQAAjFBNi0QBJivCHiGQCMiJCphIQC1hNDFAAQDHABC0BMQCuBKCHCGQCICMBICpQBNC1AADFQgBDHhMC0QhJCuiHCHQgFAEgFAFQiECAinBHQi1BNjGAAQAAAAgCAAQjEgBizhMQivhKiHiGQgEgFgFgFQiAiDhHioQhNi1AAjGg");
	this.shape_187.setTransform(353.25,239.975);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#000000").p("AvXAAQAAjHBOi3QBKiwCIiIQCOiLCrhIQC3hODHAAQDJABC2BMQCwBLCJCJQCKCNBICrQBOC3AADHQgBDKhNC1QhKCwiICJQgFAEgFAFQiFCBipBJQi4BNjIAAQAAAAgCAAQjGgBi2hMQiwhLiJiIQgEgFgEgFQiCiFhIiqQhOi3AAjIg");
	this.shape_188.setTransform(353.25,239.975);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#000000").p("AvhAAQAAjJBOi5QBLizCJiJQCPiMCuhKQC4hODKAAQDMABC4BNQCyBMCKCKQCMCOBICuQBOC5AADJQAADMhOC3QhLCziJCKQgFAEgFAFQiHCDirBJQi5BOjLAAQAAAAgCAAQjJgBi3hNQizhMiJiJQgFgFgFgFQiDiHhIisQhOi4AAjLg");
	this.shape_189.setTransform(353.25,239.975);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#000000").p("AvtAAQAAjLBQi7QBLi1CMiLQCRiOCvhKQC7hPDLAAQDOABC5BOQC0BNCMCLQCOCQBJCvQBQC8AADLQgBDOhPC5QhLC1iMCLQgFAFgFAFQiICEitBKQi8BPjMAAQAAAAgCAAQjLgBi5hOQi0hNiMiKQgFgFgFgGQiFiIhIitQhQi7AAjNg");
	this.shape_190.setTransform(353.25,239.975);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBNi3CNiMQCSiQCxhLQC9hPDOAAQDQAAC8BPQC2BOCNCNQCQCRBKCyQBQC9AADOQgBDQhPC8QhNC2iNCNQgFAFgFAFQiKCGivBKQi9BPjPABQAAAAgCAAQjNgBi8hPQi2hOiNiMQgFgFgFgFQiGiKhKivQhQi9AAjPg");
	this.shape_191.setTransform(353.25,240);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBOi5COiOQCUiQCzhMQC/hRDQAAQDTAAC+BRQC3BOCPCOQCQCUBMCzQBRC/AADQQAADThRC9QhOC5iOCOQgFAFgGAFQiKCHixBLQjABRjRAAQAAAAgCAAQjQAAi9hRQi4hOiPiOQgEgFgFgFQiIiLhLiyQhRi/AAjRg");
	this.shape_192.setTransform(353.25,239.975);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#000000").p("AwOAAQAAjSBRjBQBPi7CRiPQCUiTC2hNQDBhRDSAAQDVAAC/BRQC7BQCPCQQCTCUBNC2QBRDBAADSQAADVhRC/QhPC7iRCQQgFAFgFAFQiMCIi0BNQjBBRjTAAQAAAAgCAAQjSAAi/hRQi7hQiPiPQgFgFgFgFQiJiNhNi0QhRjAAAjUg");
	this.shape_193.setTransform(353.25,239.975);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi8BQQjDBSjWAAQjVAAjDhSQi8hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjEQBQi8CRiRQCSiSC8hQQDDhSDVAAQDWAADDBSQC8BQCSCSQCRCRBQC8QBSDEAADUg");
	this.shape_194.setTransform(353.25,239.975);

	var maskedShapeInstanceList = [this.shape_99,this.shape_100,this.shape_101,this.shape_102,this.shape_103,this.shape_104,this.shape_105,this.shape_106,this.shape_107,this.shape_108,this.shape_109,this.shape_110,this.shape_111,this.shape_112,this.shape_113,this.shape_114,this.shape_115,this.shape_116,this.shape_117,this.shape_118,this.shape_119,this.shape_120,this.shape_121,this.shape_122,this.shape_123,this.shape_124,this.shape_125,this.shape_126,this.shape_127,this.shape_128,this.shape_129,this.shape_130,this.shape_131,this.shape_132,this.shape_133,this.shape_134,this.shape_135,this.shape_136,this.shape_137,this.shape_138,this.shape_139,this.shape_140,this.shape_141,this.shape_142,this.shape_143,this.shape_144,this.shape_145,this.shape_146,this.shape_147,this.shape_148,this.shape_149,this.shape_150,this.shape_151,this.shape_152,this.shape_153,this.shape_154,this.shape_155,this.shape_156,this.shape_157,this.shape_158,this.shape_159,this.shape_160,this.shape_161,this.shape_162,this.shape_163,this.shape_164,this.shape_165,this.shape_166,this.shape_167,this.shape_168,this.shape_169,this.shape_170,this.shape_171,this.shape_172,this.shape_173,this.shape_174,this.shape_175,this.shape_176,this.shape_177,this.shape_178,this.shape_179,this.shape_180,this.shape_181,this.shape_182,this.shape_183,this.shape_184,this.shape_185,this.shape_186,this.shape_187,this.shape_188,this.shape_189,this.shape_190,this.shape_191,this.shape_192,this.shape_193,this.shape_194];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_99}]},80).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_193}]},1).to({state:[{t:this.shape_194}]},1).to({state:[]},1).wait(16));

	// 波5
	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgIAHgKAAQgKAAgHgHQgHgIAAgKQAAgKAHgHQAHgHAKAAQAKAAAIAHQAHAHAAAKg");
	this.shape_195.setTransform(306.6,240);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#000000").p("AgiAAQAAgNALgKQAJgKAOAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgJgKQgLgKAAgOg");
	this.shape_196.setTransform(306.6,240);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_197.setTransform(306.625,240.025);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQAQgPAVAAQAVAAARAPQAPAQAAAVQAAAWgPAQQgRAPgVAAQgVAAgQgPQgPgQAAgWg");
	this.shape_198.setTransform(306.6,240);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQASgTAZAAQAZAAATATQATASAAAZQAAAagTASQgTATgZAAQgZAAgSgTQgTgSAAgag");
	this.shape_199.setTransform(306.6,240);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#000000").p("AhHAAQAAgdAVgVQAVgVAdAAQAdAAAVAVQAWAVAAAdQAAAdgWAWQgVAVgdAAQgdAAgVgVQgVgWAAgdg");
	this.shape_200.setTransform(306.6,240);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#000000").p("AhQAAQAAghAXgYQAYgXAhAAQAhAAAYAXQAYAYAAAhQAAAhgYAYQgYAYghAAQghAAgYgYQgXgYAAghg");
	this.shape_201.setTransform(306.625,240.025);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#000000").p("AhaAAQAAglAbgaQAagbAlAAQAmAAAaAbQAaAaAAAlQAAAmgaAaQgaAbgmAAQglAAgagbQgbgaAAgmg");
	this.shape_202.setTransform(306.6,240);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#000000").p("AhjAAQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAAqgeAdQgdAdgpAAQgpAAgdgdQgdgdAAgqg");
	this.shape_203.setTransform(306.6,240);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#000000").p("AhtAAQAAgtAgggQAggfAtAAQAtAAAgAfQAgAgAAAtQAAAtggAgQggAggtAAQgtAAggggQggggAAgtg");
	this.shape_204.setTransform(306.6,240);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_205.setTransform(306.625,240.025);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_206.setTransform(306.6,240);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#000000").p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_207.setTransform(306.6,240);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#000000").p("AiSAAQAAg8ArgrQArgrA8AAQA9AAAqArQAsArAAA8QAAA9gsAqQgqAsg9AAQg8AAgrgsQgrgqAAg9g");
	this.shape_208.setTransform(306.6,240);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#000000").p("AibAAQAAhAAtguQAugtBAAAQBAAAAuAtQAuAuAABAQAABAguAuQguAuhAAAQhAAAguguQgtguAAhAg");
	this.shape_209.setTransform(306.625,240.025);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#000000").p("AilAAQAAhDAwgyQAxgwBEAAQBEAAAxAwQAwAyAABDQAABEgwAxQgxAxhEAAQhEAAgxgxQgwgxAAhEg");
	this.shape_210.setTransform(306.6,240);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#000000").p("ACvAAQAABJg0AyQgyA0hJAAQhIAAgzg0QgzgyAAhJQAAhIAzgzQAzgzBIAAQBJAAAyAzQA0AzAABIg");
	this.shape_211.setTransform(306.6,240);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQAMgfAbgcQAbgbAfgNQAhgPAmAAQAqAAAhAOQAfANAbAaQAbAbANAeQAPAiABAmQAAACAAABQAAAmgNAiQgOAfgaAaQgBACgBABQgaAageANQgjAPgoAAQglAAgigNQgggOgagaQgBAAgBgCQgagZgNgfQgPgiAAgpg");
	this.shape_212.setTransform(306.6,240);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#000000").p("AjEAAQAAgoAOgjQAOghAcgdQAdgeAhgOQAjgPAoAAQAsAAAjAOQAhAPAdAbQAcAcAPAiQAPAjABAoQAAACAAABQAAApgOAjQgPAhgbAcQgBABgBABQgbAcghAOQgkAQgrAAQgoAAgjgOQgigOgcgcQgBgBgBgBQgbgbgPghQgPgkAAgrg");
	this.shape_213.setTransform(306.6,240);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#000000").p("AjPAAQAAgpAPgmQAPgkAdgeQAfgeAjgPQAlgRAqAAQAuAAAlAQQAkAOAeAeQAdAeAQAiQARAmAAAqQAAACAAABQAAArgPAlQgPAkgdAdQgBACgCABQgcAcgjAQQgnAQgsAAQgqAAglgPQgkgPgegdQgBgBgBgBQgcgdgQgiQgQgnAAgtg");
	this.shape_214.setTransform(306.6,239.975);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#000000").p("AjbAAQAAgsARgnQAPgnAfgfQAgggAmgQQAmgRAtAAQAwAAAoAQQAmAPAfAfQAfAgAQAlQASAnAAAtQAAACAAACQAAAsgQAnQgPAnggAeQgBABgBACQgeAegkAQQgpARgvAAQgsAAgogPQgmgQgfgfQgBgBgBgCQgegegQgkQgRgogBgwg");
	this.shape_215.setTransform(306.6,240);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#000000").p("AjmAAQAAguASgpQAQgoAhgiQAhgiAngQQApgSAvgBQAzAAApASQAnAQAhAhQAhAhARAmQATAqAAAwQAAABAAACQAAAvgRAoQgRAoggAhQgBABgBACQggAfgmARQgrATgxAAQguAAgqgRQgogSghggQgBAAgBgCQgfgfgRgnQgSgrgBgxg");
	this.shape_216.setTransform(306.6,240);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#000000").p("AjxAAQAAgwATgsQARgqAigjQAjgjApgSQArgSAxgBQA1AAArATQAqARAiAiQAjAiASApQATAsAAAyQAAABAAACQAAAwgSAsQgRAqghAiQgCABgCABQghAhgoASQgtATgzAAQgxAAgrgRQgqgSgighQgCgCgBgBQghghgRgpQgTgsgBg0g");
	this.shape_217.setTransform(306.6,240);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#000000").p("Aj8AAQAAgzATguQASgsAkgkQAlgkArgTQAtgTAzgBQA4AAAtAUQArARAlAlQAjAkATAqQAUAtABA1QAAABAAACQAAAzgTAuQgTAsgjAiQgCACgBABQgiAjgrATQgvAUg1AAQgzAAgugTQgsgSgjgkQgBgBgCgBQgigjgTgqQgTgvgBg2g");
	this.shape_218.setTransform(306.6,240);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#000000").p("AkHAAQAAg1AUgwQATguAlgmQAmglAtgUQAwgUA1AAQA5AAAwAUQAuATAlAkQAmAnATAsQAVAvAAA3QAAABAAACQAAA1gTAwQgUAugkAkQgCACgBACQgkAjgtAUQgwAVg4AAQg1AAgwgUQgugUglgkQgBgCgCAAQgjglgUgtQgUgwgBg4g");
	this.shape_219.setTransform(306.6,240);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#000000").p("AkSAAQAAg3AVgyQAUgwAmgnQAogoAvgUQAxgVA4AAQA8AAAxAUQAwAUAnAmQAnAoAVAvQAVAxAAA5QAAABAAACQAAA4gUAxQgUAwgmAmQgCACgBACQgmAlguAUQgzAVg6AAQg3AAgygUQgwgUgngmQgBgCgCgBQglglgUgvQgVgzgBg6g");
	this.shape_220.setTransform(306.6,240);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#000000").p("AkdAAQAAg5AWg1QAUgyApgpQApgpAxgUQAzgXA6AAQA+AAAzAWQAyAVApAoQAoApAWAwQAWA0ABA7QAAABAAACQgBA6gVAzQgVAzgoAnQgBACgCACQgnAmgwAVQg1AXg8AAQg6AAgzgWQgzgUgogoQgBgCgCgBQgmgngVgxQgXg0AAg9g");
	this.shape_221.setTransform(306.6,240);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#000000").p("AkoAAQAAg8AXg1QAVg1AqgqQArgrAzgVQA1gYA8AAQBAAAA2AXQAzAVArAqQAqArAWAyQAXA2ABA9QAAABAAACQgBA8gWA1QgVA0gqAqQgCABgBACQgoAogyAXQg3AXg/AAQg8AAg2gXQg0gVgqgqQgBgBgBgBQgpgpgWgyQgXg3AAg/g");
	this.shape_222.setTransform(306.6,240);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#000000").p("AkzAAQAAg+AXg4QAXg2ArgsQAsgsA1gWQA4gZA+AAQBCAAA4AYQA2AWArArQAsAtAXAzQAZA4AABAQAAACAAABQAAA+gXA4QgXA2grArQgBACgDABQgpAqg0AXQg6AYhAAAQg+AAg4gXQg2gXgsgrQgBgBgBgCQgqgqgXg0QgYg5AAhBg");
	this.shape_223.setTransform(306.6,240);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#000000").p("Ak+AAQAAhAAYg6QAXg4AtguQAuguA3gXQA6gYBAgBQBFAAA5AZQA4AWAtAtQAuAuAXA2QAZA7ABBBQAAACAAABQAABBgYA5QgYA4gsAtQgCACgCACQgrArg2AXQg7AZhDAAQhAAAg6gYQg5gYgsgsQgCgBgBgCQgrgrgYg3QgZg6AAhEg");
	this.shape_224.setTransform(306.6,240);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#000000").p("AlJAAQAAhDAZg8QAYg6AugvQAwgvA5gYQA7gZBDgBQBHAAA8AZQA5AYAwAvQAuAvAYA4QAaA8ABBEQAAACAAABQAABDgZA8QgZA6gtAtQgCADgCACQgtArg4AZQg9AahFAAQhDAAg8gZQg6gYguguQgCgBgBgCQgtgugYg3Qgag+AAhFg");
	this.shape_225.setTransform(306.6,240);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#000000").p("AlUAAQAAhEAag/QAZg8AvgxQAygwA6gZQA+gbBGAAQBIAAA+AaQA8AZAwAvQAwAyAZA6QAbA+ABBGQAAACAAABQAABGgaA9QgZA8gvAvQgDACgCADQgtAtg7AZQg/AbhHAAQhFAAg+gZQg8gagwgvQgCgCgBgCQgugugZg7Qgbg+AAhIg");
	this.shape_226.setTransform(306.6,240);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAZg+AygyQAygyA9gaQBAgcBIAAQBLAAA/AbQA+AaAyAxQAyAzAaA8QAcBAAABIQAAACAAABQAABIgbA/QgaA/gxAxQgCACgCACQgwAvg7AaQhCAbhJAAQhHAAhAgaQg/gagxgxQgCgCgBgCQgwgwgag8QgbhBAAhKg");
	this.shape_227.setTransform(306.6,239.975);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#000000").p("AlrAAQAAhJAchDQAbg/Azg1QA0gzA/gaQBCgdBKAAQBNAABCAbQA/AbA0AzQA0A0AaA/QAdBBAABLQAAACAAACQAABJgcBCQgbA/gyAzQgCADgCABQgxAxg+AaQhDAehMAAQhJAAhDgcQhAgbgzgyQgBgDgCgBQgxgxgbg/QgchDgBhMg");
	this.shape_228.setTransform(306.6,240);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#000000").p("Al2AAQAAhMAdhEQAchCA0g1QA2g2BBgbQBEgdBMAAQBPAABEAcQBCAcA1A0QA1A2AbBAQAeBFAABMQAAACAAACQAABLgcBEQgcBCg0A0QgCACgDADQgyAyg/AbQhGAdhOAAQhMAAhEgcQhCgcg1g0QgBgCgCgBQgyg0gcg/QgdhGgBhOg");
	this.shape_229.setTransform(306.6,240);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#000000").p("AmBAAQAAhNAehHQAchFA2g2QA4g3BCgcQBGgeBPgBQBRAABGAeQBFAcA1A3QA3A3AcBBQAfBHAABPQAAACAAACQAABNgdBGQgcBFg2A1QgDACgCADQg0AyhBAdQhIAfhQAAQhOAAhGgeQhFgcg1g2QgCgCgCgBQg0g1gchCQgehHgBhRg");
	this.shape_230.setTransform(306.6,240);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#000000").p("AmMAAQAAhQAfhIQAdhGA3g5QA5g4BFgeQBIgfBRAAQBTAABJAfQBFAdA4A3QA4A6AeBDQAfBJAABRQAAACAAACQAABQgeBHQgeBHg3A3QgCACgCADQg2A0hDAdQhJAfhTAAQhQAAhJgeQhGgeg3g3QgCgBgCgCQg1g2gdhEQgfhJgBhTg");
	this.shape_231.setTransform(306.6,240);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#000000").p("AmXAAQAAhSAghLQAehIA5g6QA6g6BHgeQBKggBTAAQBWAABKAfQBIAfA6A5QA5A6AeBGQAgBLABBTQAAACAAACQAABSggBKQgeBIg5A4QgCADgDACQg3A3hFAeQhMAghUAAQhSAAhLggQhIgeg5g5QgCgBgCgCQg3g3gehGQgfhMgBhVg");
	this.shape_232.setTransform(306.6,240);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").p("AmiAAQAAhUAghNQAfhKA7g7QA8g8BIgeQBNghBVgBQBYABBNAgQBJAfA7A6QA7A9AfBHQAhBNAABVQAAACAAACQAABVggBLQgfBKg5A7QgDACgCADQg5A3hIAfQhNAhhXAAQhVAAhMggQhKgfg7g6QgCgCgCgCQg4g5gfhIQghhOAAhXg");
	this.shape_233.setTransform(306.6,239.975);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#000000").p("AmtAAQAAhWAhhPQAghMA8g9QA+g9BKggQBPghBXgBQBaABBPAhQBMAfA8A8QA9A+AfBKQAiBPAABXQAAACAAACQAABXggBOQghBMg7A8QgCACgDADQg6A5hJAfQhQAihZAAQhXAAhPghQhMggg8g8QgCgBgCgCQg5g7gghKQgihPAAhag");
	this.shape_234.setTransform(306.6,239.975);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#000000").p("Am4AAQAAhZAihRQAhhOA9g+QA/g+BNghQBQgjBaAAQBcAABRAiQBOAhA+A9QA+BAAgBMQAjBQABBaQAAACAAACQgBBZghBQQghBOg9A9QgDADgCADQg8A6hLAgQhSAjhbAAQhZAAhRgiQhOghg+g9QgCgCgCgCQg7g8gghMQgjhRAAhcg");
	this.shape_235.setTransform(306.6,240);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#000000").p("AnDAAQAAhbAjhTQAhhRA/g/QBBhABPgiQBSgjBcAAQBfAABSAjQBQAiA/A+QBBBCAhBNQAjBTABBcQAAACAAACQgBBbgiBSQgiBQg+A/QgDADgDADQg9A7hMAhQhVAkhdAAQhbAAhTgjQhQghhAg/QgCgCgCgCQg8g+ghhNQgkhUAAheg");
	this.shape_236.setTransform(306.6,240);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#000000").p("AnOAAQAAhdAkhVQAihTBBhBQBChCBQgiQBVgkBeAAQBhAABUAjQBSAjBBBBQBCBCAiBQQAlBVAABeQAAACAAACQAABegjBTQgjBShBBBQgCADgDACQg/A+hPAhQhVAlhgAAQheAAhVgjQhSgjhAhAQgCgDgCgCQg/g/gihQQgkhVAAhgg");
	this.shape_237.setTransform(306.6,240);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#000000").p("AnZAAQAAhgAkhXQAkhUBChCQBEhEBSgjQBXglBgAAQBkAABWAkQBUAkBCBCQBDBEAjBRQAlBYABBgQAAACAAACQgBBggjBWQgkBUhCBCQgDACgDADQg/A/hRAiQhYAmhiAAQhgAAhXgkQhUgkhChCQgCgCgCgBQhAhBgjhSQglhYAAhig");
	this.shape_238.setTransform(306.6,240);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#000000").p("AnkAAQAAhiAlhZQAkhWBEhEQBFhFBVgkQBZgmBiAAQBmAABYAmQBWAkBEBDQBFBGAjBTQAnBaAABjQAAABAAACQAABiglBYQglBWhDBEQgDADgDADQhBBAhTAjQhaAmhkAAQhiAAhZglQhWgkhEhEQgCgCgCgCQhBhCgkhTQgmhaAAhlg");
	this.shape_239.setTransform(306.6,239.975);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#000000").p("AnvAAQAAhkAmhbQAlhYBFhGQBHhGBWglQBbgnBlAAQBoAABbAmQBXAlBGBGQBGBHAkBVQAoBcAABlQAAABAAACQAABlgmBaQgmBYhEBFQgDADgDADQhDBBhVAkQhbAnhnAAQhkAAhcgmQhYglhFhFQgCgCgCgCQhDhEgkhVQgnhcAAhng");
	this.shape_240.setTransform(306.6,239.975);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#000000").p("An7AAQAAhmAoheQAlhaBHhHQBJhIBYgmQBdgnBngBQBqAABdAoQBaAlBHBIQBHBIAmBYQAoBdABBnQAAACAAADQgBBlgnBcQgmBbhGBHQgEADgDADQhEBChWAmQhfAohoAAQhnAAhdgoQhagmhHhGQgCgCgCgCQhEhGgmhXQgnhegBhpg");
	this.shape_241.setTransform(306.6,240);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#000000").p("AoGAAQAAhpAphfQAmhcBIhJQBLhJBagnQBfgpBpAAQBsAABfApQBcAnBJBHQBJBLAmBaQApBfAABpQAAACAAADQAABogoBeQgnBchHBIQgEAEgDACQhGBEhYAnQhgAphrAAQhpAAhfgoQhcgohJhHQgCgCgCgCQhGhHgmhaQgohggBhrg");
	this.shape_242.setTransform(306.6,240);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#000000").p("AoRAAQAAhrAphiQAohdBKhLQBLhKBdgoQBhgpBrAAQBvAABgApQBeAnBKBKQBLBNAoBaQApBhAABsQAAACAAADQAABqgpBhQgoBdhJBKQgDADgDADQhHBGhaAnQhjAphtAAQhrAAhigoQhegohKhJQgCgDgCgCQhHhIgnhbQgphjgBhtg");
	this.shape_243.setTransform(306.6,240);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#000000").p("AocAAQAAhtAqhkQAohgBMhMQBNhMBegoQBkgrBtAAQBxAABjArQBgAoBLBLQBNBOAoBdQAqBjAABuQAAACAAADQAABtgpBhQgpBhhLBLQgDADgEAEQhIBHhdAnQhkArhvAAQhtAAhkgqQhggphLhLQgDgCgCgCQhIhKgoheQgqhjgBhwg");
	this.shape_244.setTransform(306.6,240);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#000000").p("AonAAQAAhvArhmQAphiBNhNQBPhOBggpQBlgrBwgBQBzABBlAqQBiAqBNBMQBPBQAoBfQArBmAABwQAAABAAADQAABvgqBkQgpBihNBNQgDADgEAEQhKBIheAoQhnAshxAAQhwAAhlgrQhigphNhNQgDgCgCgCQhKhMgohfQgshmAAhyg");
	this.shape_245.setTransform(306.6,239.975);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#000000").p("AoyAAQAAhxAshoQAqhkBOhPQBRhQBigpQBngsBzgBQB0ABBnArQBkAqBPBPQBPBRAqBhQAtBnAABzQAAABAAADQgBBxgrBnQgrBkhNBOQgEADgDAEQhMBJhgAqQhoAsh0AAQhyAAhogsQhkgqhOhOQgCgCgDgDQhLhMgqhiQgshoAAh0g");
	this.shape_246.setTransform(306.6,239.975);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#000000").p("Ao9AAQAAh0AthqQAqhmBQhQQBShRBkgrQBqgsB1gBQB3ABBpAsQBmArBQBQQBRBTAqBiQAtBqAAB1QAAACAAACQAAB0gsBoQgrBmhQBQQgDADgEAEQhMBLhjAqQhqAth2AAQh0AAhqgsQhmgshQhPQgCgCgDgDQhNhOgqhjQgthrAAh2g");
	this.shape_247.setTransform(306.6,239.975);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#000000").p("ApIAAQAAh2AthsQAshpBShRQBThTBmgrQBsguB3AAQB5AABrAuQBoArBSBSQBSBVArBkQAuBrABB4QAAACAAACQgBB2gtBqQgsBohRBSQgDADgDADQhPBNhkArQhtAuh4AAQh2AAhsguQhogrhShSQgCgCgDgDQhOhPgrhlQguhsAAh5g");
	this.shape_248.setTransform(306.6,240);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#000000").p("ApTAAQAAh5AuhuQAthqBThTQBVhUBogsQBugvB5AAQB8AABsAvQBrAsBSBTQBVBWArBnQAvBuABB5QAAACAAACQgBB4guBsQgsBrhSBSQgFAEgDAEQhQBOhmArQhuAvh7AAQh5AAhugvQhqgshThSQgCgDgDgCQhPhSgshnQgvhuAAh7g");
	this.shape_249.setTransform(306.6,240);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#000000").p("ApeAAQAAh6AvhxQAthsBVhVQBXhVBqgtQBvgwB8AAQB9AABwAvQBsAuBUBUQBWBYAtBoQAvBwABB8QAAACAAACQgBB6guBvQguBshUBUQgEAEgDAEQhSBPhnAsQhyAwh8AAQh7AAhwgvQhsguhVhUQgCgCgDgDQhRhSgshpQgwhxAAh9g");
	this.shape_250.setTransform(306.6,240);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAuhuBWhWQBYhXBsguQBygxB+AAQCAAABxAwQBuAvBWBWQBXBZAuBqQAxByAAB+QAAACAAACQAAB9gwBwQgvBuhVBWQgEAEgEADQhSBRhrAuQhyAwh/AAQh9AAhygwQhuguhWhWQgDgCgCgDQhThUguhrQgwhzAAh/g");
	this.shape_251.setTransform(306.6,239.975);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAvhxBXhXQBahZBugvQB0gxCAAAQCCAABzAxQBwAvBYBYQBZBbAuBsQAyB0AACAQAAACAAACQgBB/gwByQgvBxhYBXQgDAEgEADQhVBThrAuQh1AxiBAAQh/AAh0gwQhxgwhXhXQgDgDgCgCQhVhWguhtQgxh0AAiCg");
	this.shape_252.setTransform(306.6,239.975);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#000000").p("Ap/AAQAAiBAyh3QAvhyBZhZQBchaBwgwQB2gyCCAAQCEAAB2AyQByAwBZBZQBbBcAuBvQAzB2AACCQAAACAAACQgBCBgxB1QgwByhZBZQgEAEgEADQhWBUhtAvQh3AyiDAAQiCAAh2gxQhygxhZhYQgDgDgCgCQhWhYgvhvQgyh2AAiEg");
	this.shape_253.setTransform(306.6,239.975);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#000000").p("AqLAAQAAiEAzh4QAxh0BbhbQBdhcBygwQB4g0CEAAQCGAAB4AzQB0AxBbBbQBcBeAvBwQA0B5AACEQAAACAAACQgBCDgyB3QgxB0haBaQgDAFgFADQhXBWhwAvQh5AziFAAQiEAAh4gyQh0gyhbhaQgDgCgCgDQhXhYgwhyQgzh4gBiGg");
	this.shape_254.setTransform(306.6,240);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#000000").p("AqWAAQAAiGA0h7QAyh2BchcQBehdB0gyQB6g0CHAAQCJAAB6A0QB1AyBdBcQBdBgAxByQA0B6ABCHQAAACAAACQgBCGgzB4QgyB3hcBcQgEADgEAEQhZBXhxAwQh8A1iHAAQiGAAh6g0Qh3gyhchcQgDgDgCgCQhZhagwhzQg0h7gBiIg");
	this.shape_255.setTransform(306.6,240);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#000000").p("AqhAAQAAiIA1h9QAyh4BeheQBghfB2gyQB8g1CJAAQCLAAB7A1QB5AyBdBeQBfBiAyB0QA1B8AACJQAAACAAACQAACIg0B6QgzB5hdBdQgEAEgFAEQhaBYhzAyQh9A1iKAAQiIAAh9g1Qh4gzhehdQgCgDgDgDQhahbgyh1Qg0h9gBiKg");
	this.shape_256.setTransform(306.6,240);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#000000").p("AqsAAQAAiKA2h/QAzh6BfhfQBihhB4gzQB+g1CLgBQCNABB+A1QB6A0BfBfQBhBjAyB1QA2B/AACMQAAABAAADQAACJg1B9Qg0B6heBfQgFAFgEADQhcBah0AyQiAA2iMAAQiLAAh+g2Qh6gzhghfQgCgDgDgCQhchegyh2Qg2h/AAiNg");
	this.shape_257.setTransform(306.6,239.975);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#000000").p("Aq3AAQAAiMA3iBQA0h9BghgQBkhiB5g0QCBg2CNgBQCQABB/A2QB8A0BhBhQBiBkAzB4QA3CBAACOQAAABAAADQAACMg2B+Qg0B9hgBgQgFAEgEAEQheBbh3AzQiAA3iPAAQiNAAiAg2Qh9g1hghgQgDgDgDgDQhdhfgzh4Qg3iBAAiPg");
	this.shape_258.setTransform(306.6,239.975);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#000000").p("ArCAAQAAiPA3iDQA1h+BjhiQBkhjB8g1QCDg3CPgBQCSABCBA3QB/A1BiBiQBkBmA0B6QA3CDAACQQAAABAAADQAACOg3CBQg1B+hiBiQgEAEgFAEQheBdh5AzQiEA4iQAAQiPAAiDg3Qh+g2hihhQgDgDgDgDQhehgg0h7Qg4iDAAiRg");
	this.shape_259.setTransform(306.6,239.975);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#000000").p("ArNAAQAAiRA4iFQA2iABkhkQBmhlB+g1QCEg5CSAAQCUABCEA3QCAA3BkBjQBlBoA1B8QA5CFAACSQAAABAAADQgBCQg3CDQg2CAhkBkQgEAEgFAEQhgBeh7A0QiFA5iTAAQiRAAiFg4QiAg2hkhkQgDgCgDgDQhghig0h9Qg5iFAAiTg");
	this.shape_260.setTransform(306.6,239.975);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA3iDBlhlQBohnCAg2QCGg5CUAAQCWAACGA5QCCA3BmBlQBnBpA1B+QA5CHABCUQAAACAAADQgBCSg4CFQg3CDhlBkQgFAFgEAEQhiBfh9A1QiHA6iVAAQiUAAiGg5QiDg3hlhlQgDgDgDgDQhhhjg2h/Qg5iHAAiVg");
	this.shape_261.setTransform(306.6,240);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA3iEBnhnQBqhoCBg3QCJg6CWAAQCYAACJA5QCEA4BnBnQBoBrA2CAQA6CJABCWQAAACAAADQgBCVg5CHQg4CEhmBnQgFAEgFAEQhjBhh/A1QiJA7iXAAQiWAAiJg6QiEg4hnhmQgDgDgDgDQhjhlg2iAQg6iJAAiYg");
	this.shape_262.setTransform(306.6,240);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA4iGBohpQBrhpCEg4QCLg7CYAAQCbAACKA7QCGA4BoBpQBqBsA3CCQA8CLAACZQAAACAAACQgBCXg5CJQg6CGhoBpQgEAEgEAEQhmBiiAA3QiMA7iZAAQiYAAiLg6QiGg5hphoQgDgDgDgDQhkhmg3iDQg7iLAAiag");
	this.shape_263.setTransform(306.6,239.975);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#000000").p("Ar5AAQAAiaA7iNQA6iJBphpQBthrCGg5QCNg8CaAAQCdAACMA8QCJA5BpBqQBsBuA4CDQA8COAACbQAAACAAACQgBCZg6CLQg6CJhqBpQgFAFgEAEQhmBkiCA3QiPA8ibAAQiaAAiNg7QiJg6hqhpQgDgDgDgDQhlhog4iEQg8iOAAicg");
	this.shape_264.setTransform(306.6,239.975);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#000000").p("AsEAAQAAicA8iQQA6iKBshrQBuhtCHg5QCPg9CdAAQCfAACOA8QCLA7BrBrQBtBwA5CFQA9CQAACdQAAACAAACQAACcg8CNQg7CKhrBrQgEAFgFAEQhoBliFA5QiPA8ieAAQidAAiPg8QiKg7hrhrQgDgDgDgDQhohpg5iGQg8iQAAieg");
	this.shape_265.setTransform(306.6,239.975);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA7iMBthtQBwhuCJg7QCRg9CgAAQChAACQA9QCMA7BtBtQBvByA6CHQA9CRAACgQAAACAAACQgBCeg8CPQg8CMhsBtQgFAFgFAEQhpBniGA5QiSA9igAAQifAAiRg9QiMg7hthtQgDgDgDgDQhphrg6iIQg9iRAAihg");
	this.shape_266.setTransform(306.6,239.975);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#000000").p("AsbAAQAAihA/iTQA8iPBuhuQBxhwCMg7QCTg/CiAAQCjAACSA+QCOA9BvBuQBwBzA7CJQA+CUAACiQAAACAAACQgBCgg9CRQg8COhuBuQgFAFgFAFQhrBniIA7QiTA/ijAAQihAAiTg/QiPg8huhuQgDgEgDgDQhrhrg6iLQg+iTgBijg");
	this.shape_267.setTransform(306.6,240);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#000000").p("AsmAAQAAijBAiWQA8iQBwhwQBzhxCOg9QCVg/CkAAQClAACUA/QCRA9BwBwQBxB1A8CLQA/CWAACkQAAACAAACQgBCig+CUQg9CQhwBvQgFAFgFAFQhrBpiLA7QiWA/ikAAQijAAiWg+QiQg+hwhvQgDgDgDgEQhshug7iMQg/iVgBilg");
	this.shape_268.setTransform(306.6,240);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#000000").p("AsxAAQAAilBAiYQA+iSBxhyQB1hyCPg9QCYhACmgBQCoABCWBAQCSA9ByByQBzB2A8CNQBBCYAACmQAAACAAADQgCCkg/CVQg+CShxByQgFAFgFAEQhtBriNA7QiXBBinAAQimAAiXhAQiSg+hyhxQgDgDgDgEQhthvg8iOQhBiYAAing");
	this.shape_269.setTransform(306.6,239.975);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f().s("#000000").p("As8AAQAAinBBiaQA/iVBzhyQB2h1CRg9QCZhBCpgBQCqABCYBAQCUA/BzBzQB2B4A8CPQBBCaAACoQAAACAAADQAACmhBCXQg+CVhzBzQgFAFgFAEQhvBsiOA9QiaBBipAAQioAAiZhBQiVg/hzhyQgDgEgDgDQhvhxg9iQQhBiaAAipg");
	this.shape_270.setTransform(306.6,239.975);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f().s("#000000").p("AtHAAQAAiqBCibQA/iXB1h0QB3h2CUg/QCbhCCrAAQCsABCaBBQCWBAB1B0QB3B6A9CRQBCCbAACrQAAACAAADQAACohBCaQhACWh0B0QgFAGgFAEQhxBuiQA9QicBCirAAQiqAAichCQiWhAh1h0QgDgDgDgDQhwhzg+iSQhCibAAisg");
	this.shape_271.setTransform(306.6,239.975);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f().s("#000000").p("AtSAAQAAisBDieQBAiYB2h2QB5h3CVhAQCehDCtAAQCuABCdBCQCYBAB2B2QB4B8A+CSQBDCeAACtQAAACAAADQAACrhCCbQhBCYh1B2QgGAGgFAEQhxBviTA+QieBDitAAQisAAiehDQiYhAh2h2QgEgDgDgDQhyh0g+iUQhDieAAiug");
	this.shape_272.setTransform(306.6,239.975);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f().s("#000000").p("AtdAAQAAiuBEigQBBibB3h3QB7h5CXhAQCghECvAAQCwABCfBDQCaBBB4B4QB5B8BACVQBDCgAACvQAAACAAADQAACthDCdQhBCbh4B3QgFAFgFAFQh0BwiTA/QihBEivAAQivAAifhDQibhCh3h3QgEgDgDgEQhzh1g/iWQhEigAAiwg");
	this.shape_273.setTransform(306.6,239.975);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f().s("#000000").p("AtoAAQAAixBEihQBCidB5h5QB9h6CZhBQChhFCyAAQCzAACgBEQCcBCB6B5QB7B/BACWQBFCjAACxQAAACAAADQgBCvhECfQhCCdh4B4QgGAGgFAFQh1ByiWA/QiiBFiyAAQixAAiihFQichCh5h4QgDgEgEgDQh0h3hAiYQhFiiAAiyg");
	this.shape_274.setTransform(306.6,240);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f().s("#000000").p("AtzAAQAAizBFikQBDieB7h7QB9h8CchCQCjhFC0AAQC1AACjBFQCeBDB7B7QB8CABBCYQBGClAACzQAAACAAADQgBCxhFCiQhCCeh7B7QgFAFgGAFQh2BziYBBQikBFi0AAQizAAikhFQiehDh7h6QgDgEgEgDQh2h5hBiZQhFikAAi1g");
	this.shape_275.setTransform(306.6,239.975);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f().s("#000000").p("At+AAQAAi1BGimQBEihB8h7QB/h+CdhDQCmhGC2AAQC3AAClBGQCgBEB9B8QB+CCBBCaQBHCmAAC2QAAACAAADQgBC0hFCjQhEChh8B8QgFAFgGAFQh3B1ibBBQilBGi3AAQi1AAimhGQihhEh8h8QgDgDgEgEQh3h5hCicQhGimAAi3g");
	this.shape_276.setTransform(306.6,239.975);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f().s("#000000").p("AuJAAQAAi3BHioQBEijB+h9QCBh/CfhEQCohHC4AAQC5AACoBHQChBFB+B9QCACDBCCdQBICoAAC4QAAACAAADQgBC2hGCmQhFCih9B+QgGAFgFAFQh6B2ibBCQipBHi4AAQi4AAiohHQiihFh+h9QgDgDgEgEQh5h7hCieQhHioAAi5g");
	this.shape_277.setTransform(306.6,239.975);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f().s("#000000").p("AuUAAQAAi5BIirQBFikB/h/QCDiBChhEQCqhIC6AAQC8AACoBIQClBFB/CAQCCCEBDCfQBICqAAC6QAAACAAADQgBC4hHCoQhGCkh+B/QgGAGgFAFQh8B3idBDQiqBIi7AAQi6AAiqhIQikhFh/h/QgEgEgEgDQh6h9hDigQhIiqAAi7g");
	this.shape_278.setTransform(306.6,239.975);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f().s("#000000").p("AufAAQAAi8BIisQBHinCAiAQCEiCCjhFQCshJC9AAQC+AACrBIQCnBHCACBQCDCGBECgQBJCtAAC8QAAADAAACQAAC7hJCpQhGCniBCAQgFAGgGAFQh8B5igBDQisBJi9AAQi8AAishIQinhHiAiAQgEgEgEgDQh7h/hEihQhJitAAi9g");
	this.shape_279.setTransform(306.6,239.975);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f().s("#000000").p("AuqAAQAAi+BJiuQBHipCCiCQCGiDClhHQCuhJC/AAQDBAACsBJQCoBICDCCQCECIBFCiQBKCvAAC+QAAADAAACQgBC9hJCsQhHCoiCCCQgGAGgFAFQh+B6iiBFQiuBJi/AAQi+AAivhJQiohIiCiBQgEgEgDgEQh+iAhFijQhJiuAAjAg");
	this.shape_280.setTransform(306.6,239.975);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f().s("#000000").p("Au2AAQAAjABLixQBIiqCEiEQCHiFCnhHQCwhKDBgBQDCABCvBKQCrBICECEQCGCKBFCkQBLCxAADAQAAADAAADQgBC+hJCuQhJCqiDCEQgGAGgGAFQh/B8ijBFQixBLjBAAQjBAAiwhLQiqhIiEiEQgEgDgDgEQh/iBhGimQhLiwAAjCg");
	this.shape_281.setTransform(306.6,239.975);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#000000").p("AvBAAQAAjCBMizQBIitCGiFQCJiGCphIQCyhMDDAAQDFABCxBLQCsBJCFCFQCICLBHCmQBLCzAADDQAAADAAADQgBDAhKCwQhJCtiFCFQgGAGgGAFQiBB9ilBGQizBMjDAAQjDAAiyhMQithJiFiFQgEgDgDgEQiBiDhGinQhMizAAjEg");
	this.shape_282.setTransform(306.6,239.975);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#000000").p("AvMAAQAAjFBNi0QBJivCHiGQCKiJCrhIQC1hNDFAAQDHABCzBMQCvBKCHCGQCICNBICoQBNC1AADFQAAADAAADQgCDDhLCxQhKCviGCHQgGAGgGAFQiDB+inBHQi0BNjGAAQjFAAi0hNQivhKiHiGQgEgEgDgDQiCiFhHipQhNi1AAjGg");
	this.shape_283.setTransform(306.6,239.975);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#000000").p("AvXAAQAAjHBNi3QBLiwCIiIQCMiKCthJQC2hODIAAQDJABC2BMQCwBLCICJQCLCOBICqQBNC3AADHQAAADAAADQAADFhNC0QhLCwiICJQgGAGgGAFQiDCAipBIQi3BNjIAAQjHAAi3hNQiwhLiJiIQgDgEgEgEQiDiGhJirQhNi3AAjIg");
	this.shape_284.setTransform(306.6,239.975);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#000000").p("AviAAQAAjJBOi5QBLizCKiJQCOiLCvhLQC4hODKAAQDLABC4BNQCyBMCKCKQCMCQBJCsQBOC5AADJQAAADAAADQgBDHhNC2QhLCziKCJQgFAHgHAFQiFCBirBJQi4BOjLAAQjKAAi4hOQizhMiJiJQgEgEgEgEQiFiHhJiuQhOi4AAjLg");
	this.shape_285.setTransform(306.6,239.975);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#000000").p("AvtAAQAAjLBPi7QBMi1CMiLQCPiNCwhLQC7hPDMAAQDOABC5BOQC0BNCMCLQCOCSBJCtQBPC8AADLQAAADAAADQAADKhPC3QhMC1iLCLQgGAHgGAFQiHCDitBJQi7BPjMAAQjMAAi6hPQi1hNiLiKQgEgEgEgEQiGiJhKivQhPi7AAjNg");
	this.shape_286.setTransform(306.6,239.975);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBNi3CNiMQCQiPCzhMQC9hPDOAAQDQAAC7BPQC3BOCNCNQCQCTBKCwQBPC9ABDOQAAADAAADQgBDLhPC7QhOC2iMCNQgGAGgHAGQiICEivBKQi8BQjPAAQjOAAi9hQQi2hOiNiMQgEgEgEgEQiIiKhKixQhQi9AAjPg");
	this.shape_287.setTransform(306.6,240);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBNi5CPiOQCSiPC1hNQC/hRDQAAQDSAAC+BRQC4BOCPCOQCQCVBMCyQBRC/AADQQAAADAAADQgBDOhQC8QhOC5iOCOQgHAGgGAGQiKCFiwBLQi/BRjRAAQjQAAi/hRQi5hOiOiOQgEgEgEgEQiJiMhLizQhRi/AAjRg");
	this.shape_288.setTransform(306.6,239.975);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#000000").p("AwOAAQAAjSBRjBQBPi7CQiPQCUiSC3hOQDAhRDTAAQDVAAC/BRQC6BQCQCQQCTCWBNC0QBRDBAADSQAAADAAADQgBDQhQC+QhQC7iQCQQgGAGgGAGQiLCHizBMQjBBRjTAAQjTAAjAhRQi7hQiQiPQgEgEgEgEQiKiNhNi2QhRjAAAjUg");
	this.shape_289.setTransform(306.6,239.975);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi9BQQjDBSjVAAQjVAAjDhSQi8hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjEQBQi8CRiRQCSiSC8hQQDDhSDVAAQDVAADDBSQC9BQCSCSQCRCRBQC8QBSDEAADUg");
	this.shape_290.setTransform(306.6,239.975);

	var maskedShapeInstanceList = [this.shape_195,this.shape_196,this.shape_197,this.shape_198,this.shape_199,this.shape_200,this.shape_201,this.shape_202,this.shape_203,this.shape_204,this.shape_205,this.shape_206,this.shape_207,this.shape_208,this.shape_209,this.shape_210,this.shape_211,this.shape_212,this.shape_213,this.shape_214,this.shape_215,this.shape_216,this.shape_217,this.shape_218,this.shape_219,this.shape_220,this.shape_221,this.shape_222,this.shape_223,this.shape_224,this.shape_225,this.shape_226,this.shape_227,this.shape_228,this.shape_229,this.shape_230,this.shape_231,this.shape_232,this.shape_233,this.shape_234,this.shape_235,this.shape_236,this.shape_237,this.shape_238,this.shape_239,this.shape_240,this.shape_241,this.shape_242,this.shape_243,this.shape_244,this.shape_245,this.shape_246,this.shape_247,this.shape_248,this.shape_249,this.shape_250,this.shape_251,this.shape_252,this.shape_253,this.shape_254,this.shape_255,this.shape_256,this.shape_257,this.shape_258,this.shape_259,this.shape_260,this.shape_261,this.shape_262,this.shape_263,this.shape_264,this.shape_265,this.shape_266,this.shape_267,this.shape_268,this.shape_269,this.shape_270,this.shape_271,this.shape_272,this.shape_273,this.shape_274,this.shape_275,this.shape_276,this.shape_277,this.shape_278,this.shape_279,this.shape_280,this.shape_281,this.shape_282,this.shape_283,this.shape_284,this.shape_285,this.shape_286,this.shape_287,this.shape_288,this.shape_289,this.shape_290];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_195}]},64).to({state:[{t:this.shape_196}]},1).to({state:[{t:this.shape_197}]},1).to({state:[{t:this.shape_198}]},1).to({state:[{t:this.shape_199}]},1).to({state:[{t:this.shape_200}]},1).to({state:[{t:this.shape_201}]},1).to({state:[{t:this.shape_202}]},1).to({state:[{t:this.shape_203}]},1).to({state:[{t:this.shape_204}]},1).to({state:[{t:this.shape_205}]},1).to({state:[{t:this.shape_206}]},1).to({state:[{t:this.shape_207}]},1).to({state:[{t:this.shape_208}]},1).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).to({state:[{t:this.shape_212}]},1).to({state:[{t:this.shape_213}]},1).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[{t:this.shape_217}]},1).to({state:[{t:this.shape_218}]},1).to({state:[{t:this.shape_219}]},1).to({state:[{t:this.shape_220}]},1).to({state:[{t:this.shape_221}]},1).to({state:[{t:this.shape_222}]},1).to({state:[{t:this.shape_223}]},1).to({state:[{t:this.shape_224}]},1).to({state:[{t:this.shape_225}]},1).to({state:[{t:this.shape_226}]},1).to({state:[{t:this.shape_227}]},1).to({state:[{t:this.shape_228}]},1).to({state:[{t:this.shape_229}]},1).to({state:[{t:this.shape_230}]},1).to({state:[{t:this.shape_231}]},1).to({state:[{t:this.shape_232}]},1).to({state:[{t:this.shape_233}]},1).to({state:[{t:this.shape_234}]},1).to({state:[{t:this.shape_235}]},1).to({state:[{t:this.shape_236}]},1).to({state:[{t:this.shape_237}]},1).to({state:[{t:this.shape_238}]},1).to({state:[{t:this.shape_239}]},1).to({state:[{t:this.shape_240}]},1).to({state:[{t:this.shape_241}]},1).to({state:[{t:this.shape_242}]},1).to({state:[{t:this.shape_243}]},1).to({state:[{t:this.shape_244}]},1).to({state:[{t:this.shape_245}]},1).to({state:[{t:this.shape_246}]},1).to({state:[{t:this.shape_247}]},1).to({state:[{t:this.shape_248}]},1).to({state:[{t:this.shape_249}]},1).to({state:[{t:this.shape_250}]},1).to({state:[{t:this.shape_251}]},1).to({state:[{t:this.shape_252}]},1).to({state:[{t:this.shape_253}]},1).to({state:[{t:this.shape_254}]},1).to({state:[{t:this.shape_255}]},1).to({state:[{t:this.shape_256}]},1).to({state:[{t:this.shape_257}]},1).to({state:[{t:this.shape_258}]},1).to({state:[{t:this.shape_259}]},1).to({state:[{t:this.shape_260}]},1).to({state:[{t:this.shape_261}]},1).to({state:[{t:this.shape_262}]},1).to({state:[{t:this.shape_263}]},1).to({state:[{t:this.shape_264}]},1).to({state:[{t:this.shape_265}]},1).to({state:[{t:this.shape_266}]},1).to({state:[{t:this.shape_267}]},1).to({state:[{t:this.shape_268}]},1).to({state:[{t:this.shape_269}]},1).to({state:[{t:this.shape_270}]},1).to({state:[{t:this.shape_271}]},1).to({state:[{t:this.shape_272}]},1).to({state:[{t:this.shape_273}]},1).to({state:[{t:this.shape_274}]},1).to({state:[{t:this.shape_275}]},1).to({state:[{t:this.shape_276}]},1).to({state:[{t:this.shape_277}]},1).to({state:[{t:this.shape_278}]},1).to({state:[{t:this.shape_279}]},1).to({state:[{t:this.shape_280}]},1).to({state:[{t:this.shape_281}]},1).to({state:[{t:this.shape_282}]},1).to({state:[{t:this.shape_283}]},1).to({state:[{t:this.shape_284}]},1).to({state:[{t:this.shape_285}]},1).to({state:[{t:this.shape_286}]},1).to({state:[{t:this.shape_287}]},1).to({state:[{t:this.shape_288}]},1).to({state:[{t:this.shape_289}]},1).to({state:[{t:this.shape_290}]},1).to({state:[]},1).wait(32));

	// 波4
	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_291.setTransform(259.9,240);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#000000").p("AghAAQAAgNAKgKQAKgKANAAQAPAAAKAKQAKAKAAANQAAAOgKAKQgKAKgPAAQgNAAgKgKQgKgKAAgOg");
	this.shape_292.setTransform(259.9,240);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_293.setTransform(259.925,240.025);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQARgPAUAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgUAAgRgPQgPgQAAgWg");
	this.shape_294.setTransform(259.9,240);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#000000").p("Ag9AAQAAgZASgSQATgTAYAAQAaAAATATQASASAAAZQAAAagSASQgTATgaAAQgYAAgTgTQgSgSAAgag");
	this.shape_295.setTransform(259.9,240);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#000000").p("AhHAAQAAgdAWgVQAVgVAcAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgcAAgVgVQgWgWAAgdg");
	this.shape_296.setTransform(259.9,240);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#000000").p("AhQAAQAAghAYgYQAXgXAhAAQAiAAAYAXQAXAYAAAhQAAAhgXAYQgYAYgiAAQghAAgXgYQgYgYAAghg");
	this.shape_297.setTransform(259.925,240.025);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#000000").p("AhZAAQAAglAagaQAagbAlAAQAmAAAbAbQAaAaAAAlQAAAmgaAaQgbAbgmAAQglAAgagbQgagaAAgmg");
	this.shape_298.setTransform(259.9,240);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#000000").p("AhjAAQAAgpAegdQAdgdAoAAQAqAAAdAdQAdAdAAApQAAAqgdAdQgdAdgqAAQgoAAgdgdQgegdAAgqg");
	this.shape_299.setTransform(259.9,240);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#000000").p("AhsAAQAAgtAgggQAggfAsAAQAuAAAgAfQAgAgAAAtQAAAtggAgQggAgguAAQgsAAggggQggggAAgtg");
	this.shape_300.setTransform(259.9,240);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_301.setTransform(259.925,240.025);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#000000").p("Ah/AAQAAg0AmgmQAlglA0AAQA2AAAlAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAglglQgmgmAAg1g");
	this.shape_302.setTransform(259.9,240);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f().s("#000000").p("AiIAAQAAg4AogpQAogoA4AAQA6AAAoAoQAoApAAA4QAAA5goAoQgpApg5AAQg4AAgogpQgogoAAg5g");
	this.shape_303.setTransform(259.9,240);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f().s("#000000").p("AiSAAQAAg8AsgrQAqgrA8AAQA+AAAqArQArArAAA8QAAA9grAqQgrAsg9AAQg8AAgqgsQgsgqAAg9g");
	this.shape_304.setTransform(259.9,240);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f().s("#000000").p("AibAAQAAhAAuguQAtgtBAAAQBBAAAuAtQAtAuAABAQAABAgtAuQguAuhBAAQhAAAgtguQguguAAhAg");
	this.shape_305.setTransform(259.925,240.025);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f().s("#000000").p("AikAAQAAhDAwgyQAxgwBDAAQBFAAAxAwQAwAyAABDQAABEgwAxQgxAxhFAAQhDAAgxgxQgwgxAAhEg");
	this.shape_306.setTransform(259.9,240);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f().s("#000000").p("ACvAAQAABJgzAyQgzA0hJAAQhHAAgzg0Qg0gyAAhJQAAhIA0gzQAzgzBHAAQBJAAAzAzQAzAzAABIg");
	this.shape_307.setTransform(259.9,240);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANggAagaQAcgcAfgOQAjgOAmAAQAoAAAiAOQAgAOAZAZQAbAbAOAgQAOAjAAAmQAAAmgOAiQgMAfgbAcQgbAbgfANQgiAPgnAAQgBAAgBAAQglAAghgNQgggOgagaQgBAAgBgCQgagagOgfQgPgiAAgog");
	this.shape_308.setTransform(259.9,240);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f().s("#000000").p("AjEAAQAAgoAPgjQAOgiAbgcQAegeAhgOQAkgPApAAQArAAAjAPQAiAPAbAaQAcAdAPAiQAPAkAAApQAAApgOAjQgOAhgcAdQgdAdghAOQgkAPgpABQgBAAgBAAQgnAAgjgOQgigOgcgcQgBgBgBgBQgcgbgOgiQgQgjAAgrg");
	this.shape_309.setTransform(259.9,240);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f().s("#000000").p("AjPAAQAAgqAQglQAPgkAcgdQAfgfAkgQQAmgQArAAQAtAAAmAQQAjAQAdAcQAeAeAPAkQAQAmAAArQAAArgPAmQgPAjgdAeQgfAegiAQQgnAQgrAAQgBAAgBAAQgqAAglgPQgkgPgdgdQgBgBgBgBQgdgdgPgjQgRgmAAgtg");
	this.shape_310.setTransform(259.9,239.975);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f().s("#000000").p("AjaAAQAAgtAQgnQAQgmAfgeQAgghAmgRQAogQAtAAQAvAAAoAQQAlARAfAdQAfAhARAlQARAoAAAuQAAAugRAnQgPAmgfAfQggAgglAQQgoARguAAQgBAAgBAAQgsAAgngPQgmgQgfgfQgBgBgBgCQgegegRglQgRgoAAgvg");
	this.shape_311.setTransform(259.9,240);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f().s("#000000").p("AjlAAQAAgvARgpQARgoAgghQAigiAngRQArgSAvAAQAxAAAqASQAoARAfAgQAiAhARAoQASArAAAvQAAAwgSApQgQAnghAhQghAignARQgqASgwABQgBAAgBAAQguAAgpgRQgogSghggQgBAAgBgCQgggggRgmQgSgrAAgxg");
	this.shape_312.setTransform(259.9,240);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f().s("#000000").p("AjwAAQAAgxASgrQASgrAhghQAkgkApgSQAsgTAyAAQA0AAAsATQApATAhAgQAjAjASApQATAtAAAyQAAAygTArQgRAqgiAiQgjAjgpASQgsATgyAAQgBAAgBAAQgwAAgsgRQgqgSghghQgCgCgBgCQghgggSgpQgTgsAAg0g");
	this.shape_313.setTransform(259.9,240);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f().s("#000000").p("Aj7AAQAAgzATguQASgsAjgjQAlglAsgTQAugUA0AAQA2AAAuAUQArATAjAjQAkAkATAsQAUAuAAA0QAAA0gTAuQgSAsgkAkQglAkgqATQgvATg0ABQgBAAgBAAQgzAAgtgTQgsgSgjgkQgCgBgBgBQgjgjgSgrQgUgvAAg1g");
	this.shape_314.setTransform(259.9,240);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f().s("#000000").p("AkGAAQAAg1AUgwQATguAkglQAngmAtgUQAxgUA2AAQA4AAAwAUQAuAUAkAjQAmAnATAtQAVAwAAA3QAAA2gUAwQgTAuglAmQgmAlgtAUQgxAUg2ABQgBAAgBAAQg1AAgvgUQgugUglgkQgCgCgBgBQgkglgTgsQgVgwAAg4g");
	this.shape_315.setTransform(259.9,240);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f().s("#000000").p("AkRAAQAAg4AUgyQAVgvAlgnQApgoAvgUQAzgVA4AAQA6AAAyAVQAwAUAmAlQAnAoAVAwQAVAyAAA5QAAA5gVAyQgUAvgmAnQgoAogvAUQgyAVg5AAQgBAAgBAAQg3AAgygUQgwgUgmgmQgBgCgCgBQglgmgVgvQgVgyAAg6g");
	this.shape_316.setTransform(259.9,240);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f().s("#000000").p("AkdAAQAAg6AWg0QAVgyAogoQAqgqAxgUQA0gXA7AAQA8AAA1AXQAxAVAoAnQAoApAWAxQAWA1AAA7QAAA7gWA0QgUAygpAoQgpApgwAVQg1AXg7AAQgBAAgBAAQg6AAgzgWQgygUgogoQgBgCgCgBQgngogVgwQgWg0gBg9g");
	this.shape_317.setTransform(259.9,240);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f().s("#000000").p("AkoAAQAAg8AXg2QAWg0ApgpQArgsA0gWQA2gXA9AAQA/AAA2AXQA0AWApApQAqArAWAzQAXA3AAA9QAAA9gXA2QgVAzgqArQgrAqgyAXQg3AWg9ABQgBAAgBAAQg8gBg1gWQg0gVgqgqQgBgBgCgCQgogogWgzQgYg2AAg/g");
	this.shape_318.setTransform(259.9,240);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f().s("#000000").p("AkzAAQAAg+AYg4QAXg2AqgsQAtgsA1gXQA5gYA/AAQBBAAA4AYQA2AXAqAqQAsAtAXA1QAYA5AAA/QAAA/gXA4QgXA2grArQgtAtg0AXQg5AYg/AAQgBAAgBAAQg+AAg4gXQg2gXgrgrQgBgBgCgCQgqgqgWg0QgZg5AAhBg");
	this.shape_319.setTransform(259.9,240);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f().s("#000000").p("Ak+AAQAAhBAZg5QAXg5AsgsQAvgvA3gXQA7gZBBAAQBDAAA7AZQA3AYAsArQAuAuAXA3QAZA7AABCQAABCgYA5QgXA4gtAtQguAug3AYQg6AZhCAAQgBAAgBAAQhAAAg6gYQg4gYgsgsQgCgBgCgCQgrgsgXg2Qgag7AAhDg");
	this.shape_320.setTransform(259.9,240);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f().s("#000000").p("AlJAAQAAhDAag8QAYg6AtguQAxgwA5gYQA8gaBEAAQBFAAA9AaQA6AZAtAtQAvAvAZA6QAZA9AABDQAABEgZA8QgYA6guAvQgwAug4AZQg9AZhEABQgBAAgBAAQhDAAg7gZQg6gYguguQgCgCgCgCQgsgtgZg4Qgag9AAhFg");
	this.shape_321.setTransform(259.9,240);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f().s("#000000").p("AlUAAQAAhFAag/QAag8AvgvQAxgxA7gZQA/gbBGAAQBIAAA+AbQA8AZAvAuQAwAyAaA7QAaA/AABGQAABGgaA+QgZA8gvAwQgyAxg6AZQg/AbhGAAQgCAAAAAAQhFAAg+gZQg8gagvgvQgCgCgCgCQgugvgZg6Qgbg+AAhIg");
	this.shape_322.setTransform(259.9,240);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAag/AxgwQAzgzA9gbQBBgbBIAAQBKAABBAbQA9AbAxAwQAyAzAaA9QAbBBAABIQAABJgbBAQgZA+gyAxQgzAzg8AaQhBAbhIAAQgCAAAAAAQhHAAhAgaQg+gagxgxQgCgCgCgCQgvgwgag8QgchBAAhKg");
	this.shape_323.setTransform(259.9,239.975);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#000000").p("AlqAAQAAhJAchDQAbhAAygzQA1g0A/gbQBDgcBKAAQBMAABDAcQA/AbAzAyQAzA0AbA/QAdBDAABLQAABKgcBDQgbA/gzA0Qg0A0g+AaQhEAdhKABQgCAAAAAAQhJgBhCgbQhAgbgzgyQgCgDgCgCQgxgygag9QgdhDAAhMg");
	this.shape_324.setTransform(259.9,240);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#000000").p("Al1AAQAAhMAdhFQAchCAzgzQA3g3BBgcQBEgcBNAAQBOAABFAcQBCAdAzAzQA1A2AcBBQAeBFAABNQAABNgdBEQgcBCg0A1Qg2A1hAAcQhFAdhNAAQgCAAAAAAQhMAAhEgcQhCgcg0g0QgCgCgCgCQgygzgchAQgdhFAAhOg");
	this.shape_325.setTransform(259.9,240);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#000000").p("AmAAAQAAhOAehGQAchFA1g1QA4g4BDgdQBHgeBPAAQBQAABHAeQBEAdA1A2QA3A3AdBDQAeBHAABPQAABPgeBGQgcBFg2A1Qg4A3hCAdQhHAehPABQgCAAAAAAQhOgBhGgdQhEgcg2g2QgCgCgCgCQgzg1gdhBQgehHAAhRg");
	this.shape_326.setTransform(259.9,240);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#000000").p("AmLAAQAAhRAehIQAehGA3g3QA5g5BFgeQBJgfBRAAQBTAABJAfQBFAeA3A2QA4A6AeBEQAfBKAABRQAABSgfBIQgdBGg3A3Qg6A5hEAdQhJAfhRAAQgCAAAAAAQhQAAhIgeQhGgeg3g3QgCgCgCgBQg2g2gdhEQgfhJAAhTg");
	this.shape_327.setTransform(259.9,240);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#000000").p("AmWAAQAAhSAfhLQAfhJA4g4QA7g7BHgeQBLggBTAAQBVAABLAgQBIAfA4A4QA6A6AeBIQAgBLAABTQAABTggBLQgeBIg5A6Qg6A5hGAfQhMAfhTABQgCAAAAAAQhTAAhKggQhIgeg4g5QgCgBgCgCQg3g5gehFQgghLAAhVg");
	this.shape_328.setTransform(259.9,240);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#000000").p("AmhAAQAAhVAghMQAfhKA6g7QA9g8BIgfQBNggBWgBQBXAABNAhQBKAgA6A5QA7A8AfBJQAhBOAABVQAABWggBNQgfBJg7A7Qg8A8hIAfQhOAhhVAAQgCAAAAAAQhVAAhMggQhKgfg6g6QgCgDgCgCQg5g5gehHQghhNAAhYg");
	this.shape_329.setTransform(259.9,239.975);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#000000").p("AmsAAQAAhXAhhPQAghMA7g7QA+g+BLggQBPghBYgBQBZAABQAiQBLAgA8A7QA8A+AgBLQAiBQAABXQAABYghBPQggBMg8A8Qg+A9hKAgQhPAihYAAQgCAAAAAAQhXAAhOghQhMggg8g8QgCgCgCgCQg6g7gghJQghhPAAhag");
	this.shape_330.setTransform(259.9,239.975);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#000000").p("Am4AAQAAhaAjhQQAhhOA8g+QBAg+BNgiQBRgiBaAAQBcAABRAiQBOAiA8A8QA/BAAhBMQAiBSAABaQAABbgiBQQghBOg9A+QhAA/hLAgQhSAjhaAAQgCAAgBAAQhYAAhQgiQhPghg9g9QgCgCgCgCQg7g9ghhLQgihRgBhcg");
	this.shape_331.setTransform(259.9,240);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#000000").p("AnDAAQAAhcAjhTQAihQA+g+QBChBBOgiQBUgjBcAAQBeAABTAjQBQAiA+A+QBABBAiBPQAjBUAABcQAABdgjBTQghBPg/BAQhCBAhNAhQhUAjhcABQgCAAgBAAQhbgBhSgiQhQghg/g/QgCgCgCgDQg9g+ghhNQgjhTgBheg");
	this.shape_332.setTransform(259.9,240);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#000000").p("AnOAAQAAheAkhVQAjhSBAhAQBDhDBQgiQBVgkBfAAQBgAABVAkQBSAjBABAQBBBCAjBRQAkBVAABfQAABfgkBUQgiBShBBBQhCBChQAiQhWAlheAAQgCAAgBAAQhdAAhUgjQhSgjhBhAQgCgDgCgCQg+g/gihQQglhUAAhhg");
	this.shape_333.setTransform(259.9,240);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#000000").p("AnZAAQAAhgAlhXQAkhUBBhCQBEhEBTgjQBXglBhAAQBiAABYAlQBTAkBCBBQBDBEAjBSQAlBYAABhQAABhgkBXQgkBUhCBCQhEBDhSAjQhXAmhhAAQgCAAgBAAQhfAAhWgkQhVgkhBhCQgDgCgCgDQhAhAgihRQgmhYAAhig");
	this.shape_334.setTransform(259.9,240);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#000000").p("AnkAAQAAhiAmhZQAkhWBDhEQBGhFBVgkQBZgmBjAAQBkAABaAmQBWAlBDBCQBEBGAkBUQAmBaAABjQAABjglBaQgkBVhEBEQhGBFhTAkQhaAmhjAAQgCAAgBAAQhiAAhYglQhWgkhDhEQgDgCgCgDQhBhCgkhTQgmhZAAhlg");
	this.shape_335.setTransform(259.9,239.975);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#000000").p("AnvAAQAAhkAnhcQAlhYBEhFQBIhGBWglQBcgnBlAAQBnAABbAnQBYAlBFBFQBGBGAlBXQAmBcAABlQAABmgmBbQglBYhFBFQhIBHhVAkQhcAnhlAAQgCAAgBAAQhkAAhagmQhYglhFhFQgDgCgCgDQhChEglhUQgnhcAAhng");
	this.shape_336.setTransform(259.9,239.975);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#000000").p("An6AAQAAhmAnheQAmhbBGhGQBKhIBYgmQBegoBnAAQBpAABeAoQBZAnBHBGQBHBIAmBZQAoBeAABnQAABngoBeQglBahHBHQhJBIhYAmQheAnhoABQgBAAgCAAQhlgBhcgnQhbgmhGhGQgDgCgCgEQhEhEglhXQgoheAAhpg");
	this.shape_337.setTransform(259.9,240);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#000000").p("AoFAAQAAhpAohgQAnhbBIhJQBKhJBbgnQBfgpBqAAQBrAABgApQBcAoBHBGQBJBLAnBaQApBgAABqQAABqgpBfQgmBchIBJQhLBJhZAnQhhAohqABQgBAAgCAAQhngBhfgnQhcgohIhHQgDgDgCgCQhFhIgmhYQgphfAAhsg");
	this.shape_338.setTransform(259.9,240);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#000000").p("AoQAAQAAhrAphiQAoheBJhJQBMhLBcgoQBigpBsAAQBtAABiApQBeAoBJBJQBLBMAnBcQAqBiAABsQAABsgpBiQgoBdhKBLQhMBLhbAnQhiAphtAAQgBAAgCAAQhqAAhggoQhegohKhJQgCgDgDgDQhHhIgmhbQgqhiAAhtg");
	this.shape_339.setTransform(259.9,240);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#000000").p("AobAAQAAhuAqhjQAohhBLhKQBOhNBegoQBkgrBuAAQBwAABkArQBfAoBLBLQBMBNAoBeQArBlAABuQAABvgqBjQgoBghMBLQhOBNhdAoQhkAqhvABQgBAAgCAAQhsgBhigpQhhgphLhLQgCgCgDgDQhIhKgohdQgqhjAAhwg");
	this.shape_340.setTransform(259.9,240);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#000000").p("AomAAQAAhvArhmQAphiBMhNQBQhOBggpQBmgrBwgBQByAABmAsQBiApBMBMQBNBPAqBhQArBmAABwQAABxgrBmQgpBhhNBOQhQBOhfAoQhmAshxAAQgBAAgCAAQhugBhlgqQhigphNhNQgCgCgDgDQhJhLgphfQgrhmAAhyg");
	this.shape_341.setTransform(259.9,239.975);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#000000").p("AoxAAQAAhyArhoQArhkBNhOQBRhQBjgqQBngrBzgBQB0AABoAsQBkArBOBOQBPBQAqBiQAsBpAAByQAABzgsBoQgqBkhOBOQhRBQhhAqQhpAshzAAQgBAAgCAAQhwgBhngrQhkgqhOhOQgDgDgDgDQhLhMgphhQgshnAAh1g");
	this.shape_342.setTransform(259.9,239.975);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#000000").p("Ao8AAQAAh0AshqQArhmBQhQQBShRBkgrQBqgsB1gBQB2AABqAtQBmAsBQBPQBQBRArBlQAtBrAAB0QAAB1gtBqQgqBmhQBQQhTBRhjArQhrAth1AAQgBAAgCAAQhzAAhogsQhngshPhPQgDgDgDgDQhMhOgqhiQgthqAAh3g");
	this.shape_343.setTransform(259.9,239.975);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f().s("#000000").p("ApIAAQAAh2AuhtQAshoBRhRQBUhTBmgrQBsguB3AAQB4AABtAuQBnAsBRBRQBTBTArBnQAuBsAAB3QAAB3gtBsQgsBohSBSQhUBThlArQhsAth4ABQgBAAgCAAQh1gBhrgtQhogrhRhSQgDgDgDgCQhOhQgqhkQguhsgBh5g");
	this.shape_344.setTransform(259.9,240);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f().s("#000000").p("ApTAAQAAh5AvhuQAthqBShTQBWhUBogsQBugvB5AAQB7AABuAvQBqAtBSBSQBUBUAsBpQAvBvAAB5QAAB6guBtQgtBrhTBTQhWBUhmAsQhvAvh6AAQgBAAgCAAQh3AAhtgvQhqgshThSQgDgEgDgDQhPhRgshmQguhugBh7g");
	this.shape_345.setTransform(259.9,240);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f().s("#000000").p("ApeAAQAAh7AwhwQAthsBUhUQBXhWBqgtQBwgwB8AAQB9AABwAwQBsAtBUBUQBVBXAuBqQAvBxAAB7QAAB8gvBwQgtBshVBVQhXBVhpAtQhxAvh8ABQgBAAgCAAQh6gBhuguQhtguhUhUQgDgDgDgDQhQhTgthoQgvhvgBh+g");
	this.shape_346.setTransform(259.9,240);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAvhuBVhWQBZhXBsgvQBygwB+AAQB/AABzAwQBtAvBWBWQBXBXAuBtQAwBzAAB9QAAB+gwByQguBuhWBXQhZBXhrAuQhzAwh+AAQgBAAgCAAQh8AAhxgwQhuguhWhWQgDgDgDgDQhShUgthqQgxhyAAiAg");
	this.shape_347.setTransform(259.9,239.975);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAwhxBXhXQBahZBugvQB0gxCAAAQCBAAB1AxQBwAwBXBXQBYBZAvBvQAxB0AACAQAACBgxB0QgvBwhXBYQhbBYhtAvQh0AxiBAAQgBAAgCAAQh+AAhzgwQhwgwhYhXQgDgDgDgDQhThWguhsQgyh0AAiCg");
	this.shape_348.setTransform(259.9,239.975);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f().s("#000000").p("Ap/AAQAAiBAyh3QAwhyBZhZQBchaBwgwQB2gyCCAAQCEAAB2AyQByAxBZBYQBZBbAwBwQAyB3AACCQAACDgyB2QgvByhZBZQhdBbhuAvQh3AyiDAAQgBAAgCAAQiAAAh1gxQhzgxhYhYQgEgDgDgEQhUhXgwhuQgyh2AAiEg");
	this.shape_349.setTransform(259.9,239.975);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f().s("#000000").p("AqKAAQAAiEAzh4QAxh0BahaQBdhdBygxQB4gzCFAAQCGAAB5AzQBzAyBaBaQBcBdAwByQA0B5AACEQAACFgzB4QgxB0hbBbQhdBchxAwQh5AziFAAQgBAAgCAAQiDAAh3gyQh0gyhahaQgDgDgEgEQhWhYgwhwQgzh4AAiGg");
	this.shape_350.setTransform(259.9,240);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f().s("#000000").p("AqVAAQAAiGA0h7QAyh2BbhcQBfhdB0gyQB6g0CHAAQCIAAB7A0QB2AyBbBcQBdBeAyB1QA0B6AACHQAACHg0B7QgyB2hcBcQhfBdhzAxQh7A0iHABQgBAAgCAAQiFgBh5gzQh2gyhchcQgDgDgEgDQhXhagxhyQg0h6AAiJg");
	this.shape_351.setTransform(259.9,240);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f().s("#000000").p("AqgAAQAAiJA0h8QAzh5BdhdQBhhfB2gyQB8g1CJAAQCKAAB9A1QB4A0BdBcQBfBgAyB2QA1B9AACJQAACKg1B7QgyB5heBeQhhBfh0AyQh+A0iJABQgBAAgCAAQiHgBh7g0Qh5gzhdhdQgDgDgEgEQhZhbgxh0Qg1h8AAiLg");
	this.shape_352.setTransform(259.9,240);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f().s("#000000").p("AqrAAQAAiKA1h/QA0h6BehfQBjhhB3gzQB/g1CLgBQCMAAB/A2QB6A0BfBfQBgBhAzB4QA2B/AACLQAACMg2B+QgzB6hfBgQhjBgh2AzQh/A2iMAAQgBAAgCAAQiKgBh9g1Qh6gzhfhfQgDgDgEgEQhahdgyh2Qg2h+AAiNg");
	this.shape_353.setTransform(259.9,239.975);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f().s("#000000").p("Aq2AAQAAiNA2iAQA1h9BghgQBjhiB6g0QCAg2CNgBQCQAACBA3QB8A1BgBgQBhBiA0B7QA3CBAACNQAACOg3CBQg0B8hgBhQhlBih4AzQiBA3iOAAQgBAAgCAAQiMgBh/g1Qh8g1hhhgQgDgEgDgDQhchfg0h3Qg2iAAAiQg");
	this.shape_354.setTransform(259.9,239.975);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f().s("#000000").p("ArBAAQAAiPA3iDQA1h+BihiQBlhjB8g1QCCg3CPgBQCSAACDA4QB+A1BiBiQBjBkA0B8QA4CEAACPQAACQg3CDQg1B+hjBiQhlBkh7A0QiDA4iQAAQgBAAgCAAQiOgBiBg2Qh/g2hihhQgDgEgDgEQhehfg0h6Qg3iCAAiSg");
	this.shape_355.setTransform(259.9,239.975);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f().s("#000000").p("ArMAAQAAiRA4iFQA2iABjhkQBnhlB9g1QCFg4CRgBQCUAACFA5QCAA2BjBjQBlBmA2B+QA4CGAACRQAACTg4CEQg2CAhkBkQhnBlh8A1QiGA5iSAAQgBAAgCAAQiQgBiEg3QiAg2hjhkQgEgDgDgEQhfhhg1h8Qg4iEAAiUg");
	this.shape_356.setTransform(259.9,239.975);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA4iDBkhkQBphoB/g2QCHg5CTAAQCWAACIA5QCBA3BlBlQBmBnA3CBQA5CHAACUQAACUg5CIQg3CChlBlQhpBnh+A1QiHA6iVAAQgBAAgDAAQiSgBiFg4QiCg3hlhlQgEgDgDgEQhhhjg1h+Qg5iGgBiWg");
	this.shape_357.setTransform(259.9,240);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA4iFBmhmQBqhoCCg3QCIg6CWAAQCZAACJA6QCEA4BmBmQBoBpA3CDQA6CJAACWQAACXg6CJQg3CEhnBnQhrBoiAA2QiJA6iXABQgBAAgDAAQiUgBiHg5QiFg4hmhmQgEgEgDgEQhihkg2h/Qg6iIgBiZg");
	this.shape_358.setTransform(259.9,240);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA5iGBohoQBrhqCEg4QCKg7CYAAQCbAACLA7QCGA5BoBoQBpBqA4CEQA7CMAACYQAACZg7CLQg4CGhoBpQhsBqiCA3QiMA7iZAAQgBAAgDAAQiWAAiKg6QiGg5hohoQgEgEgDgEQhjhmg4iBQg6iKgBibg");
	this.shape_359.setTransform(259.9,239.975);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f().s("#000000").p("Ar5AAQAAiaA8iNQA6iJBphpQBthrCFg5QCNg8CaAAQCdAACOA8QCHA6BqBpQBrBsA4CGQA8COAACaQAACbg7COQg6CIhpBqQhuBriEA4QiOA8ibAAQgBAAgDAAQiZAAiLg7QiIg6hqhpQgEgEgDgEQhlhng4iEQg7iMgBidg");
	this.shape_360.setTransform(259.9,239.975);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f().s("#000000").p("AsEAAQAAicA9iQQA6iKBrhrQBvhtCHg6QCPg8CcAAQCfAACQA8QCKA7BrBrQBsBuA6CIQA8CPAACdQAACeg8CPQg6CKhsBsQhvBsiGA6QiQA8idAAQgBAAgDAAQibAAiNg8QiLg7hrhrQgDgDgEgEQhmhpg5iFQg9iPAAifg");
	this.shape_361.setTransform(259.9,239.975);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA8iMBshtQBwhuCKg7QCRg9CeAAQChAACSA9QCMA8BtBsQBtBvA7CKQA9CSAACfQAACgg9CRQg7CMhtBtQhxBviIA6QiRA9igAAQgCAAgCAAQidAAiQg9QiMg7hthtQgDgDgEgFQhohqg5iHQg+iRAAihg");
	this.shape_362.setTransform(259.9,239.975);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#000000").p("AsaAAQAAihA+iTQA9iPBthuQByhwCLg7QCTg/ChAAQCkAACTA/QCOA8BuBuQBwBxA7CMQA/CTAACiQAACig/CTQg8COhuBvQhyBwiKA7QiUA+iiABQgCAAgCAAQifgCiSg9QiOg8huhuQgEgEgEgEQhphsg6iJQg/iSAAikg");
	this.shape_363.setTransform(259.9,240);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#000000").p("AslAAQAAijA/iWQA9iQBwhvQBzhyCNg9QCVg/CjAAQCmAACWA/QCQA+BvBvQBxByA8CPQBACWAACjQAACkhACWQg8CQhwBwQh0ByiMA7QiWA/ikAAQgCAAgCAAQiiAAiTg+QiRg+hvhvQgEgEgEgEQhqhtg8iMQg/iUAAimg");
	this.shape_364.setTransform(259.9,240);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#000000").p("AswAAQAAilBAiYQA+iSBxhxQB1hzCPg9QCXhAClgBQCoAACYBBQCSA+BxBxQByBzA9CQQBBCZAAClQAACnhACXQg+CShxByQh2BziOA8QiYBBimAAQgCAAgCAAQikgBiVg/QiTg+hxhxQgEgEgEgFQhshug8iNQhAiXAAiog");
	this.shape_365.setTransform(259.9,239.975);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#000000").p("As7AAQAAinBBiaQA/iVByhyQB2h1CSg+QCZhACngBQCqAACaBBQCUA/BzBzQB0B1A+CSQBBCaAACoQAACphBCZQg/CVhzBzQh3B0iPA+QibBBioAAQgCAAgCAAQimgBiYhAQiUg/hzhyQgEgEgEgFQhthwg9iPQhBiZAAiqg");
	this.shape_366.setTransform(259.9,239.975);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#000000").p("AtGAAQAAiqBBicQBAiWB0h0QB4h2CTg/QCbhBCpgBQCuAACcBCQCVBAB1B0QB1B3A/CUQBCCcAACqQAACrhCCcQg/CWh1B1Qh5B2iRA+QicBCirAAQgCAAgCAAQiogBiahBQiWhAh1h0QgEgEgEgEQhvhyg9iRQhCiaAAiq");
	this.shape_367.setTransform(259.9,239.975);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#000000").p("AtRAAQAAisBCieQBBiYB1h2QB6h3CVhAQCdhCCrgBQCwAACeBDQCYBBB2B1QB3B5A/CWQBDCeAACsQAACthDCeQhACYh2B2Qh6B4iUA/QieBDitAAQgCAAgCAAQirgBibhCQiZhAh2h2QgEgEgEgEQhwh0g+iSQhDidAAis");
	this.shape_368.setTransform(259.9,239.975);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#000000").p("AtcAAQAAiuBDigQBCibB3h3QB7h5CXhAQCfhDCtgBQCyAACgBEQCaBBB3B4QB5B5BACYQBEChAACuQAACwhECfQhBCbh3B3Qh8B6iWA/QigBEivAAQgCAAgCAAQitgBiehCQiahCh4h3QgEgEgEgFQhxh0hAiVQhDifAAiu");
	this.shape_369.setTransform(259.9,239.975);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#000000").p("AtoAAQAAixBFiiQBCicB5h5QB8h6CZhBQCihFCvAAQC0AACiBFQCcBCB5B4QB6B8BCCaQBECiAACxQAACyhEChQhCCdh5B5Qh+B6iXBBQijBFixAAQgCAAgDAAQiugBighEQichCh5h4QgFgEgEgFQhzh2hAiXQhEihgBiw");
	this.shape_370.setTransform(259.9,240);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#000000").p("AtzAAQAAizBGikQBDieB6h6QB+h9CbhCQCjhFCyAAQC2AAClBFQCeBEB6B6QB8B9BCCcQBFCkAACzQAAC0hFCkQhDCeh7B7Qh/B8iZBCQikBFi0AAQgCAAgDAAQixgBihhEQifhDh6h6QgFgFgEgEQh0h4hBiZQhFiigBiz");
	this.shape_371.setTransform(259.9,239.975);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#000000").p("At+AAQAAi1BGimQBFihB7h7QCAh+CdhDQClhGC0AAQC5AACmBGQCgBEB8B8QB9B/BDCdQBGCnAAC1QAAC2hGCmQhEChh8B8QiAB+icBCQimBGi2AAQgDAAgCAAQizgBikhFQighEh8h8QgEgEgFgFQh2h5hBiaQhGilgBi1");
	this.shape_372.setTransform(259.9,239.975);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#000000").p("AuJAAQAAi3BHipQBFiiB9h9QCCh/CfhEQCnhHC2AAQC7AACoBHQCiBFB+B9QB+CABECgQBHCpAAC3QAAC5hHCoQhECih+B+QiCB/idBDQipBHi4AAQgDAAgCAAQi1gBimhGQiihFh+h9QgEgEgFgFQh3h7hDicQhGingBi3");
	this.shape_373.setTransform(259.9,239.975);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#000000").p("AuUAAQAAi5BIirQBGikB+h/QCDiBChhEQCqhIC4AAQC9AACrBIQCkBGB/B/QCACBBECiQBICqAAC6QAAC7hICqQhFCkh/CAQiECBifBDQirBIi6AAQgDAAgCAAQi3gBiohHQilhFh/h/QgEgEgFgFQh4h8hEifQhHipgBi5");
	this.shape_374.setTransform(259.9,239.975);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f().s("#000000").p("AufAAQAAi8BJisQBHinCAiAQCEiCCjhFQCrhJC7AAQC/AACtBJQCmBGCACBQCCCDBGCkQBICsAAC8QAAC9hICsQhHCniACAQiGCDihBEQitBJi8AAQgDAAgCAAQi6AAiqhIQimhHiBiAQgEgFgFgEQh6h+hEigQhIirgBi8");
	this.shape_375.setTransform(259.9,239.975);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f().s("#000000").p("AuqAAQAAi+BKivQBHioCCiCQCGiDClhHQCthJC9AAQDCAACuBJQCoBICCCCQCECEBGCmQBJCvAAC+QAAC/hJCvQhHCoiCCCQiICEijBGQiuBJi/AAQgDAAgCAAQi8AAishJQiohIiDiBQgEgFgFgFQh7h/hFiiQhKitAAi+");
	this.shape_376.setTransform(259.9,239.975);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f().s("#000000").p("Au1AAQAAjABLixQBIiqCDiEQCIiFCmhHQCwhKC/gBQDEAACxBLQCqBICDCEQCFCGBHCoQBLCxAADAQAADChLCwQhICqiECEQiICGilBGQixBLjCAAQgCAAgCAAQi+gBiuhKQirhIiEiEQgEgEgFgFQh9iBhFikQhLivAAjA");
	this.shape_377.setTransform(259.9,239.975);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f().s("#000000").p("AvAAAQAAjCBLizQBJitCFiEQCJiHCphIQCyhLDBgBQDGAACzBMQCsBJCFCFQCGCIBICqQBMCzAADCQAADEhMCyQhICtiGCFQiKCHinBHQizBMjEAAQgCAAgCAAQjBgBiwhLQishJiFiFQgFgEgFgFQh+iChHinQhLixAAjC");
	this.shape_378.setTransform(259.9,239.975);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f().s("#000000").p("AvLAAQAAjFBMi0QBKivCGiGQCLiJCrhIQCzhMDEgBQDIAAC1BNQCuBKCHCGQCICKBICrQBNC1AADFQAADGhNC1QhJCuiHCHQiMCJipBHQi1BNjGAAQgCAAgCAAQjDgBiyhMQiuhKiHiGQgFgFgFgFQh/iDhIioQhMizAAjF");
	this.shape_379.setTransform(259.9,239.975);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f().s("#000000").p("AvWAAQAAjHBNi3QBLiwCIiIQCMiKCshKQC2hMDGgBQDKAAC3BNQCwBLCJCJQCJCKBKCuQBNC3AADHQAADIhNC3QhLCwiICJQiOCKiqBJQi4BNjIAAQgCAAgCAAQjFgBi0hMQixhLiIiIQgFgFgEgFQiCiFhIiqQhNi1AAjH");
	this.shape_380.setTransform(259.9,239.975);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f().s("#000000").p("AvhAAQAAjJBOi5QBLizCKiJQCOiLCuhLQC4hNDIgBQDNAAC5BOQCyBMCKCKQCKCMBLCwQBOC5AADJQAADLhOC4QhLCziKCKQiPCLitBKQi5BOjLAAQgCAAgCAAQjHgBi3hNQiyhMiKiJQgFgFgEgFQiDiHhJisQhOi3AAjJ");
	this.shape_381.setTransform(259.9,239.975);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f().s("#000000").p("AvsAAQAAjLBPi7QBMi1CLiLQCPiNCxhLQC6hODKgBQDPAAC7BPQC0BNCLCLQCNCOBLCxQBPC8AADLQAADNhPC6QhMC1iMCLQiQCOivBKQi7BPjNAAQgCAAgCAAQjKgBi4hOQi0hNiMiKQgFgFgEgGQiFiIhJitQhPi6AAjL");
	this.shape_382.setTransform(259.9,239.975);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBOi3CMiMQCRiPCzhMQC7hPDNAAQDRAAC9BPQC2BOCNCNQCOCPBMC0QBQC9AADOQAADPhQC9QhNC2iNCNQiSCPixBLQi9BPjPABQgCAAgDAAQjLgBi6hPQi3hOiNiMQgFgFgEgFQiGiKhLivQhPi7gBjO");
	this.shape_383.setTransform(259.9,240);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBOi5COiOQCTiPC0hNQC+hRDPAAQDTAADABRQC4BOCOCOQCQCRBMC2QBRC/AADQQAADRhRC/QhNC5iPCOQiUCQiyBMQjABRjRAAQgCAAgDAAQjNgBi9hQQi4hOiPiOQgEgFgFgFQiHiLhMiyQhQi9gBjQ");
	this.shape_384.setTransform(259.9,239.975);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#000000").p("AwOAAQAAjSBSjBQBPi7CQiPQCUiSC2hOQDAhRDRAAQDWAADBBRQC6BQCQCQQCRCSBOC4QBRDBAADSQAADUhRDAQhPC7iQCQQiVCSi1BNQjBBRjUAAQgCAAgDAAQjPgBi/hQQi6hQiQiPQgFgFgFgFQiJiNhMi0QhRi/gBjS");
	this.shape_385.setTransform(259.9,239.975);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi8BQQjDBSjWAAQjUAAjDhSQi9hQiRiRQiRiShQi8QhTjDAAjWQAAjUBTjEQBQi8CRiRQCRiSC9hQQDDhSDUAAQDWAADDBSQC8BQCSCSQCRCRBQC8QBSDEAADUg");
	this.shape_386.setTransform(259.9,239.975);

	var maskedShapeInstanceList = [this.shape_291,this.shape_292,this.shape_293,this.shape_294,this.shape_295,this.shape_296,this.shape_297,this.shape_298,this.shape_299,this.shape_300,this.shape_301,this.shape_302,this.shape_303,this.shape_304,this.shape_305,this.shape_306,this.shape_307,this.shape_308,this.shape_309,this.shape_310,this.shape_311,this.shape_312,this.shape_313,this.shape_314,this.shape_315,this.shape_316,this.shape_317,this.shape_318,this.shape_319,this.shape_320,this.shape_321,this.shape_322,this.shape_323,this.shape_324,this.shape_325,this.shape_326,this.shape_327,this.shape_328,this.shape_329,this.shape_330,this.shape_331,this.shape_332,this.shape_333,this.shape_334,this.shape_335,this.shape_336,this.shape_337,this.shape_338,this.shape_339,this.shape_340,this.shape_341,this.shape_342,this.shape_343,this.shape_344,this.shape_345,this.shape_346,this.shape_347,this.shape_348,this.shape_349,this.shape_350,this.shape_351,this.shape_352,this.shape_353,this.shape_354,this.shape_355,this.shape_356,this.shape_357,this.shape_358,this.shape_359,this.shape_360,this.shape_361,this.shape_362,this.shape_363,this.shape_364,this.shape_365,this.shape_366,this.shape_367,this.shape_368,this.shape_369,this.shape_370,this.shape_371,this.shape_372,this.shape_373,this.shape_374,this.shape_375,this.shape_376,this.shape_377,this.shape_378,this.shape_379,this.shape_380,this.shape_381,this.shape_382,this.shape_383,this.shape_384,this.shape_385,this.shape_386];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_291}]},48).to({state:[{t:this.shape_292}]},1).to({state:[{t:this.shape_293}]},1).to({state:[{t:this.shape_294}]},1).to({state:[{t:this.shape_295}]},1).to({state:[{t:this.shape_296}]},1).to({state:[{t:this.shape_297}]},1).to({state:[{t:this.shape_298}]},1).to({state:[{t:this.shape_299}]},1).to({state:[{t:this.shape_300}]},1).to({state:[{t:this.shape_301}]},1).to({state:[{t:this.shape_302}]},1).to({state:[{t:this.shape_303}]},1).to({state:[{t:this.shape_304}]},1).to({state:[{t:this.shape_305}]},1).to({state:[{t:this.shape_306}]},1).to({state:[{t:this.shape_307}]},1).to({state:[{t:this.shape_308}]},1).to({state:[{t:this.shape_309}]},1).to({state:[{t:this.shape_310}]},1).to({state:[{t:this.shape_311}]},1).to({state:[{t:this.shape_312}]},1).to({state:[{t:this.shape_313}]},1).to({state:[{t:this.shape_314}]},1).to({state:[{t:this.shape_315}]},1).to({state:[{t:this.shape_316}]},1).to({state:[{t:this.shape_317}]},1).to({state:[{t:this.shape_318}]},1).to({state:[{t:this.shape_319}]},1).to({state:[{t:this.shape_320}]},1).to({state:[{t:this.shape_321}]},1).to({state:[{t:this.shape_322}]},1).to({state:[{t:this.shape_323}]},1).to({state:[{t:this.shape_324}]},1).to({state:[{t:this.shape_325}]},1).to({state:[{t:this.shape_326}]},1).to({state:[{t:this.shape_327}]},1).to({state:[{t:this.shape_328}]},1).to({state:[{t:this.shape_329}]},1).to({state:[{t:this.shape_330}]},1).to({state:[{t:this.shape_331}]},1).to({state:[{t:this.shape_332}]},1).to({state:[{t:this.shape_333}]},1).to({state:[{t:this.shape_334}]},1).to({state:[{t:this.shape_335}]},1).to({state:[{t:this.shape_336}]},1).to({state:[{t:this.shape_337}]},1).to({state:[{t:this.shape_338}]},1).to({state:[{t:this.shape_339}]},1).to({state:[{t:this.shape_340}]},1).to({state:[{t:this.shape_341}]},1).to({state:[{t:this.shape_342}]},1).to({state:[{t:this.shape_343}]},1).to({state:[{t:this.shape_344}]},1).to({state:[{t:this.shape_345}]},1).to({state:[{t:this.shape_346}]},1).to({state:[{t:this.shape_347}]},1).to({state:[{t:this.shape_348}]},1).to({state:[{t:this.shape_349}]},1).to({state:[{t:this.shape_350}]},1).to({state:[{t:this.shape_351}]},1).to({state:[{t:this.shape_352}]},1).to({state:[{t:this.shape_353}]},1).to({state:[{t:this.shape_354}]},1).to({state:[{t:this.shape_355}]},1).to({state:[{t:this.shape_356}]},1).to({state:[{t:this.shape_357}]},1).to({state:[{t:this.shape_358}]},1).to({state:[{t:this.shape_359}]},1).to({state:[{t:this.shape_360}]},1).to({state:[{t:this.shape_361}]},1).to({state:[{t:this.shape_362}]},1).to({state:[{t:this.shape_363}]},1).to({state:[{t:this.shape_364}]},1).to({state:[{t:this.shape_365}]},1).to({state:[{t:this.shape_366}]},1).to({state:[{t:this.shape_367}]},1).to({state:[{t:this.shape_368}]},1).to({state:[{t:this.shape_369}]},1).to({state:[{t:this.shape_370}]},1).to({state:[{t:this.shape_371}]},1).to({state:[{t:this.shape_372}]},1).to({state:[{t:this.shape_373}]},1).to({state:[{t:this.shape_374}]},1).to({state:[{t:this.shape_375}]},1).to({state:[{t:this.shape_376}]},1).to({state:[{t:this.shape_377}]},1).to({state:[{t:this.shape_378}]},1).to({state:[{t:this.shape_379}]},1).to({state:[{t:this.shape_380}]},1).to({state:[{t:this.shape_381}]},1).to({state:[{t:this.shape_382}]},1).to({state:[{t:this.shape_383}]},1).to({state:[{t:this.shape_384}]},1).to({state:[{t:this.shape_385}]},1).to({state:[{t:this.shape_386}]},1).to({state:[]},1).wait(48));

	// 波3
	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_387.setTransform(213.25,240);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#000000").p("AghAAQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKQgKgKAAgOg");
	this.shape_388.setTransform(213.25,240);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_389.setTransform(213.275,240.025);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPQgPgQAAgWg");
	this.shape_390.setTransform(213.25,240);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQASgTAZAAQAaAAASATQATASAAAZQAAAagTASQgSATgaAAQgZAAgSgTQgTgSAAgag");
	this.shape_391.setTransform(213.25,240);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f().s("#000000").p("AhHAAQAAgdAVgVQAWgVAcAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgcAAgWgVQgVgWAAgdg");
	this.shape_392.setTransform(213.25,240);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f().s("#000000").p("AhQAAQAAghAYgYQAXgXAhAAQAiAAAXAXQAYAYAAAhQAAAhgYAYQgXAYgiAAQghAAgXgYQgYgYAAghg");
	this.shape_393.setTransform(213.275,240.025);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f().s("#000000").p("AhaAAQAAglAbgaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQglAAgagbQgbgaAAgmg");
	this.shape_394.setTransform(213.25,240);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f().s("#000000").p("AhjAAQAAgpAdgdQAegdAoAAQAqAAAdAdQAdAdAAApQAAAqgdAdQgdAdgqAAQgoAAgegdQgdgdAAgqg");
	this.shape_395.setTransform(213.25,240);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f().s("#000000").p("AhsAAQAAgtAgggQAggfAsAAQAuAAAgAfQAfAgAAAtQAAAtgfAgQggAgguAAQgsAAggggQggggAAgtg");
	this.shape_396.setTransform(213.25,240);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_397.setTransform(213.275,240.025);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_398.setTransform(213.25,240);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").p("AiJAAQAAg4ApgpQAogoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_399.setTransform(213.25,240);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f().s("#000000").p("AiSAAQAAg8AsgrQAqgrA8AAQA9AAAqArQAsArAAA8QAAA9gsAqQgqAsg9AAQg8AAgqgsQgsgqAAg9g");
	this.shape_400.setTransform(213.25,240);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f().s("#000000").p("AibAAQAAhAAuguQAtgtBAAAQBBAAAtAtQAuAuAABAQAABAguAuQgtAuhBAAQhAAAgtguQguguAAhAg");
	this.shape_401.setTransform(213.275,240.025);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f().s("#000000").p("AilAAQAAhDAxgyQAxgwBDAAQBEAAAxAwQAxAyAABDQAABEgxAxQgxAxhEAAQhDAAgxgxQgxgxAAhEg");
	this.shape_402.setTransform(213.25,240);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f().s("#000000").p("ACvAAQAABJg0AyQgyA0hJAAQhIAAgyg0Qg0gyAAhJQAAhIA0gzQAygzBIAAQBJAAAyAzQA0AzAABIg");
	this.shape_403.setTransform(213.25,240);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANgfAagbQAbgcAfgNQAigPAoAAQAnAAAhAOQAfANAcAaQAbAbANAfQAPAiAAAoQAAAngNAhQgOAfgaAcQgBAAgBABQgZAagfANQgiAPgnAAQgBAAgBAAQglAAgigNQgfgOgagaQgCAAgBgCQgagZgNgfQgPgjAAgog");
	this.shape_404.setTransform(213.25,240);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f().s("#000000").p("AjEAAQAAgoAOgjQAPghAbgdQAdgdAhgPQAkgPAqAAQApAAAjAOQAhAPAdAbQAdAdAPAhQAPAkAAAqQAAApgOAjQgPAhgcAdQgBABAAAAQgbAcghAOQgkAPgpABQgBAAgBAAQgoAAgjgOQghgOgcgcQgBgBgBgBQgcgbgPghQgPgkAAgrg");
	this.shape_405.setTransform(213.25,240);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f().s("#000000").p("AjPAAQAAgpAPgmQAPgkAdgdQAfgfAjgPQAmgRAsAAQArAAAmAQQAjAOAeAeQAeAeAQAjQAQAmAAAsQAAAsgPAlQgPAjgeAeQAAABgBABQgdAcgjAQQgmAQgrAAQgBAAgBAAQgqAAglgPQgkgPgdgdQgBgBgCgBQgcgdgQgiQgQgnAAgtg");
	this.shape_406.setTransform(213.25,239.975);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f().s("#000000").p("AjaAAQAAgsAQgnQAQgnAegeQAhghAkgQQAogRAvAAQAuAAAnAQQAmAPAfAfQAgAhAQAkQARAoAAAvQAAAugQAnQgPAmggAfQgBAAgBACQgeAegkAQQgoARguAAQgBAAgBAAQgsAAgngPQgngQgegfQgBgBgCgCQgegegQgkQgRgpAAgvg");
	this.shape_407.setTransform(213.25,240);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f().s("#000000").p("AjmAAQAAguASgpQARgoAggiQAhghAngRQArgTAwAAQAwAAApASQAnAQAiAhQAhAhARAnQATArAAAwQAAAwgSApQgQAngiAhQAAACgBABQgfAfgnARQgrASgvABQgBAAgBAAQgvAAgogRQgogSghggQgBAAgBgCQgggfgRgnQgTgrAAgxg");
	this.shape_408.setTransform(213.25,240);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f().s("#000000").p("AjxAAQAAgwATgsQARgqAhgiQAkgjApgTQAsgTAzAAQAyAAArATQAqARAiAiQAjAjASApQAUAsAAAzQAAAygTArQgRAqgiAiQgBACgCAAQggAhgpASQgsATgyAAQgBAAgBAAQgwAAgsgRQgqgSghghQgCgCgCgCQgggggSgpQgUgsAAg0g");
	this.shape_409.setTransform(213.25,240);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f().s("#000000").p("Aj8AAQAAgzAUguQASgsAjgjQAlglAqgTQAvgUA1AAQA1AAAtAUQAsARAkAlQAkAkATAqQAUAvAAA1QAAA1gTAtQgSAsglAkQgBABAAAAQgjAjgqATQgvATg0ABQgBAAgBAAQgzAAgugTQgsgSgjgkQgBgBgBgBQgjgjgTgqQgUgwAAg1g");
	this.shape_410.setTransform(213.25,240);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f().s("#000000").p("AkGAAQAAg1AUgwQATguAkglQAngmAtgUQAwgUA3AAQA2AAAwAUQAuATAmAkQAlAnAUAsQAUAxAAA3QAAA2gTAwQgUAuglAmQgBAAgBABQgkAkgsAUQgxAUg2ABQgBAAgBAAQg1AAgwgUQgugUgkgkQgCgCgBgBQgkgkgUgtQgUgwAAg4g");
	this.shape_411.setTransform(213.25,240);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f().s("#000000").p("AkRAAQAAg3AUgyQAVgwAlgnQAogoAvgUQAzgVA5AAQA5AAAyAUQAvAUAnAmQAoAoAUAvQAVAzAAA5QAAA5gUAyQgUAvgnAnQgBABgBABQglAmgvAUQgzAVg4AAQgBAAgBAAQg4AAgxgUQgwgUgmgmQgBgCgCgBQgmglgUgvQgVgzAAg6g");
	this.shape_412.setTransform(213.25,240);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f().s("#000000").p("AkdAAQAAg5AWg1QAVgyAogoQApgpAxgVQA0gXA8AAQA7AAA0AWQAyAVAoAoQApApAVAxQAXA0AAA8QAAA7gWA0QgVAygoAoQgBABgBABQgnAngxAVQg0AXg7AAQgBAAgBAAQg5AAg0gWQgzgUgngoQgCgCgBgBQgngogVgwQgXg1AAg8g");
	this.shape_413.setTransform(213.25,240);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f().s("#000000").p("AkoAAQAAg8AXg1QAVg1ApgpQAsgsAygVQA3gYA+AAQA+AAA1AXQA0AVAqAqQArArAVAyQAYA3AAA+QAAA+gXA1QgVAzgqArQgCABgBABQgoAogyAXQg3AWg9ABQgBAAgBAAQg8AAg1gXQg1gVgpgqQgBgBgCgCQgpgogVgyQgYg3AAg/g");
	this.shape_414.setTransform(213.25,240);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f().s("#000000").p("AkzAAQAAg+AYg4QAWg2ArgsQAtgsA0gWQA5gZBAAAQA/AAA4AYQA2AWAsArQAsAtAWA0QAZA5AABAQAAA/gXA4QgXA2gsArQgBACgBABQgqAqg0AXQg5AYg/AAQgBAAgBAAQg+AAg4gXQg2gXgrgrQgCgBgBgCQgqgqgWg0QgZg6AAhAg");
	this.shape_415.setTransform(213.25,240);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f().s("#000000").p("Ak+AAQAAhAAZg6QAXg4AsgtQAuguA3gYQA6gZBDAAQBCAAA5AZQA4AWAtAtQAuAuAXA3QAaA6AABDQAABCgYA5QgXA4guAtQgBACgCABQgrArg2AYQg6AZhCAAQgBAAgBAAQhBAAg5gYQg4gYgsgsQgDgBgBgCQgsgsgWg2Qgag7AAhDg");
	this.shape_416.setTransform(213.25,240);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f().s("#000000").p("AlJAAQAAhDAag8QAXg6AuguQAwgvA4gZQA+gaBEAAQBEAAA8AZQA6AYAvAvQAuAvAZA4QAaA+AABEQAABEgZA8QgYA6gvAvQgBABgBABQgtAsg4AZQg+AZhDABQgBAAgBAAQhDAAg8gZQg6gYguguQgBgCgCgCQgsgtgZg3Qgag+AAhFg");
	this.shape_417.setTransform(213.25,240);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f().s("#000000").p("AlUAAQAAhEAag/QAag8AugwQAygxA7gZQA+gbBHAAQBHAAA+AaQA7AZAwAvQAxAyAZA6QAbA/AABHQAABHgZA9QgaA8gwAwQgBABgCACQguAug6AZQg/AbhGAAQgBAAgBAAQhFAAg+gZQg8gagvgvQgCgCgCgCQgugugZg7Qgbg+AAhIg");
	this.shape_418.setTransform(213.25,240);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAag+AwgxQA0gzA8gaQBBgcBJAAQBJAABAAbQA9AaAyAxQAyAzAaA8QAcBBAABJQAABJgaBAQgbA+gyAxQgBACgBABQgwAwg8AaQhBAbhIAAQgBAAgBAAQhIAAg/gaQg+gagygxQgBgCgCgCQgvgwgag8QgchBAAhKg");
	this.shape_419.setTransform(213.25,239.975);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f().s("#000000").p("AlqAAQAAhJAbhDQAcg/Ayg0QA0g0A/gaQBDgdBLAAQBLAABCAbQA/AbA0AzQA0A0AaA/QAdBDAABLQAABLgbBCQgbA/gzA0QgCACgCABQgxAxg+AaQhDAdhKABQgBAAgBAAQhJgBhDgbQg/gbgzgyQgCgDgCgCQgxgxgag+QgdhDAAhMg");
	this.shape_420.setTransform(213.25,240);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f().s("#000000").p("Al1AAQAAhMAchEQAchCA0g0QA2g2BAgcQBGgdBNAAQBNAABFAcQBBAcA1A0QA1A2AcBAQAdBGAABNQAABNgcBEQgcBCg0A1QgCACgCABQgyAyhAAcQhGAdhMAAQgBAAgBAAQhMAAhEgcQhCgcg0g0QgCgCgCgCQgzgzgbg/QgdhGAAhOg");
	this.shape_421.setTransform(213.25,240);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f().s("#000000").p("AmBAAQAAhNAehHQAdhFA1g1QA4g4BCgcQBHgfBQAAQBPAABGAeQBFAcA2A3QA3A3AcBCQAfBHAABQQAABPgeBGQgcBFg3A1QgBACgCACQg0AzhCAdQhHAehPABQgBAAgBAAQhOAAhGgeQhFgcg1g2QgCgCgCgCQg0g0gchCQgfhIAAhQg");
	this.shape_422.setTransform(213.25,240);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f().s("#000000").p("AmMAAQAAhQAfhIQAdhGA3g4QA6g5BEgeQBJgfBSAAQBSAABIAfQBFAdA4A3QA5A6AdBEQAgBJAABSQAABSgeBIQgeBGg4A3QgCACgBACQg3A1hDAdQhJAfhRAAQgBAAgBAAQhRAAhHgeQhGgeg3g3QgDgCgCgBQg1g2gdhEQgghJAAhTg");
	this.shape_423.setTransform(213.25,240);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f().s("#000000").p("AmXAAQAAhSAghLQAehIA5g5QA6g7BGgeQBMggBUAAQBUAABKAfQBIAfA6A5QA6A6AeBGQAgBMAABUQAABUgfBKQgfBIg5A6QgCABgBACQg4A3hFAeQhMAfhTABQgBAAgBAAQhSAAhLggQhIgeg5g5QgBgBgDgCQg3g4gehFQgghNAAhUg");
	this.shape_424.setTransform(213.25,240);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f().s("#000000").p("AmhAAQAAhUAfhNQAghKA5g7QA9g8BJgeQBNgiBWAAQBWABBNAgQBJAfA7A6QA8A9AfBHQAgBOAABWQAABWgfBNQgfBJg7A7QgCACgCACQg5A4hHAfQhOAhhVAAQgBAAgBAAQhVAAhMggQhKgfg6g6QgDgDgBgCQg5g5gfhHQgghOAAhXg");
	this.shape_425.setTransform(213.25,239.975);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f().s("#000000").p("AmtAAQAAhWAhhPQAghMA8g8QA+g+BKggQBPgiBZAAQBYABBPAhQBLAfA9A8QA9A+AgBKQAhBQAABYQAABZggBOQggBMg9A8QgCACgCACQg6A5hJAgQhQAihYAAQgBAAAAAAQhXAAhPghQhMggg8g8QgCgCgCgCQg6g6gfhKQgihQAAhZg");
	this.shape_426.setTransform(213.25,239.975);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f().s("#000000").p("Am4AAQAAhZAihRQAhhOA9g+QBAg+BMghQBRgjBbAAQBbAABQAiQBOAhA+A9QA+BAAhBMQAjBRAABbQAABbgiBQQghBOg+A+QgBACgDABQg8A8hLAgQhRAjhaAAQgCAAAAAAQhaAAhQgiQhOghg9g9QgDgCgBgCQg7g8ghhMQgjhRAAhcg");
	this.shape_427.setTransform(213.25,240);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f().s("#000000").p("AnDAAQAAhbAjhTQAihRA+g+QBChBBNgiQBUgjBdAAQBdAABSAjQBQAiA/A+QBBBBAhBOQAkBUAABdQgBBdgiBTQgiBPg/BAQgCACgCACQg+A8hNAhQhTAjhdABQgBAAAAAAQhcgBhSgiQhQghg/g/QgDgCgCgDQg8g+ghhMQgkhVAAhdg");
	this.shape_428.setTransform(213.25,240);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f().s("#000000").p("AnOAAQAAhdAkhVQAihTBBhAQBChDBQgiQBWgkBfAAQBfAABVAjQBSAjBBBBQBCBCAiBQQAkBWAABfQAABfgjBUQgjBShBBBQgCADgCACQg/A+hPAhQhWAlheAAQgCAAAAAAQheAAhUgjQhTgjhAhAQgCgDgDgCQg+g/gihQQgkhVAAhgg");
	this.shape_429.setTransform(213.25,240);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f().s("#000000").p("AnZAAQAAhgAkhXQAkhUBBhCQBFhEBSgjQBYglBhAAQBiAABWAkQBUAkBCBCQBEBEAiBSQAmBYAABhQAABigkBWQgkBUhCBCQgDACgBADQhBA/hRAiQhYAmhgAAQgCAAAAAAQhgAAhWgkQhVgkhBhCQgDgCgCgDQhAhAgjhRQglhYAAhig");
	this.shape_430.setTransform(213.25,240);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f().s("#000000").p("AnkAAQAAhiAlhZQAlhWBDhEQBGhFBTgkQBagmBkAAQBkAABYAmQBWAkBEBDQBFBGAkBUQAmBaAABjQAABkglBZQgkBVhFBEQgBADgDACQhCBAhSAkQhaAmhjAAQgCAAAAAAQhiAAhZglQhWgkhEhEQgCgCgDgDQhBhBgjhTQgmhbAAhkg");
	this.shape_431.setTransform(213.25,239.975);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f().s("#000000").p("AnvAAQAAhkAmhbQAlhYBFhGQBIhGBWglQBbgnBmAAQBmAABbAmQBYAlBFBGQBHBHAkBVQAnBdAABlQAABmgmBbQglBYhFBFQgDADgCACQhEBChUAkQhcAnhlAAQgCAAAAAAQhlAAhbgmQhYglhEhFQgDgCgCgDQhDhDgkhVQgnhcAAhng");
	this.shape_432.setTransform(213.25,239.975);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f().s("#000000").p("An7AAQAAhmAoheQAmhaBGhHQBJhIBYgmQBegoBoAAQBoAABdAoQBaAlBHBIQBIBIAmBYQAoBeAABoQgBBognBdQglBahIBHQgCACgDADQhEBDhXAmQheAnhoABQgBAAAAAAQhngBhdgnQhagmhHhGQgCgCgDgEQhDhEgmhXQgohfAAhog");
	this.shape_433.setTransform(213.25,240);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f().s("#000000").p("AoGAAQAAhpAphfQAnhcBHhJQBLhJBagnQBggpBqAAQBrAABfApQBbAnBJBHQBJBLAnBaQApBgAABqQgBBrgnBeQgoBchIBJQgDACgBADQhHBEhZAnQhgAohqABQgBAAAAAAQhpgBhfgnQhcgohIhHQgDgDgDgCQhEhHgnhZQgphgAAhrg");
	this.shape_434.setTransform(213.25,240);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f().s("#000000").p("AoQAAQAAhrAphiQAohdBIhKQBNhMBbgnQBjgpBsAAQBtAABhApQBdAnBKBKQBMBMAnBbQApBjAABsQAABtgoBhQgoBdhKBLQgCACgDADQhIBGhaAnQhjAphsAAQgBAAAAAAQhrAAhigoQhdgohKhJQgDgDgCgDQhHhIgnhaQgphjAAhtg");
	this.shape_435.setTransform(213.25,240);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f().s("#000000").p("AocAAQAAhtArhkQAohgBLhLQBOhNBdgoQBkgrBvAAQBvAABjArQBgAoBMBLQBMBOAoBdQArBkAABvQAABvgqBjQgoBghMBLQgCADgDACQhKBIhcAoQhkAqhvABQgBAAgBAAQhtAAhigqQhhgphLhLQgCgCgDgDQhIhKgohdQgrhjAAhwg");
	this.shape_436.setTransform(213.25,240);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f().s("#000000").p("AonAAQAAhvAshmQAohiBNhNQBQhOBfgpQBmgsBxAAQBxABBlAqQBiAqBNBMQBPBQAoBfQArBmAABxQAABygqBlQgpBhhNBOQgDACgCACQhLBKhfAoQhmAshxAAQgBAAgBAAQhvAAhlgrQhigphNhNQgDgCgCgDQhKhLgohfQgshmAAhyg");
	this.shape_437.setTransform(213.25,239.975);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f().s("#000000").p("AoyAAQAAhxAshoQAqhkBOhPQBRhQBigpQBogtBzAAQB0ABBnArQBjAqBPBPQBQBRAqBhQAsBoAABzQAAB0gsBnQgqBkhPBOQgCADgDACQhMBLhgAqQhpAshzAAQgBAAgBAAQhyAAhmgsQhkgqhPhOQgCgDgDgDQhLhMgqhhQgshoAAh0g");
	this.shape_438.setTransform(213.25,239.975);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f().s("#000000").p("Ao9AAQAAh0AthqQArhmBPhQQBUhRBjgrQBqgtB1AAQB2ABBpAsQBmArBQBQQBRBSArBjQAtBrAAB1QAAB2gtBpQgrBmhQBQQgDADgCACQhOBNhiAqQhrAth1AAQgBAAgBAAQh0AAhpgsQhmgshPhPQgEgDgCgDQhNhOgqhiQgthrAAh2g");
	this.shape_439.setTransform(213.25,239.975);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f().s("#000000").p("ApIAAQAAh2AuhsQArhpBShRQBUhTBlgrQBsguB4AAQB4AABsAuQBnArBSBSQBTBUArBlQAuBsAAB4QgBB4gtBrQgrBohSBSQgCADgEACQhPBOhkArQhsAth4ABQgBAAgBAAQh2gBhrgtQhogrhShSQgCgDgDgCQhOhQgrhkQguhtAAh4g");
	this.shape_440.setTransform(213.25,240);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f().s("#000000").p("ApTAAQAAh5AvhuQAthqBRhTQBXhUBngsQBugvB6AAQB7AABtAvQBqAsBTBTQBUBVAsBoQAvBuAAB6QAAB7gvBsQgsBrhTBTQgDADgDACQhQBPhnAsQhuAvh6AAQgBAAgBAAQh4AAhugvQhqgshShSQgDgEgDgDQhQhQgrhnQgvhuAAh7g");
	this.shape_441.setTransform(213.25,240);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f().s("#000000").p("ApeAAQAAh6AwhxQAthsBUhUQBXhWBpgtQBxgwB8AAQB8AABwAvQBsAuBVBUQBVBXAtBpQAwBxAAB8QgBB8guBwQguBshVBVQgCACgDADQhSBQhoAtQhxAvh8ABQgBAAgBAAQh6gBhwguQhsguhUhUQgDgDgDgDQhRhTgshnQgwhyAAh8g");
	this.shape_442.setTransform(213.25,240);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAuhuBWhWQBahYBqgtQBzgxB+AAQB/AAByAwQBtAvBWBWQBYBYAtBrQAxBzAAB+QAAB/gwBxQguBuhWBXQgEACgDADQhTBShqAuQhzAwh+AAQgBAAgBAAQh9AAhxgwQhuguhWhWQgDgDgDgDQhShUgthqQgxhzAAh/g");
	this.shape_443.setTransform(213.25,239.975);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAvhxBXhXQBbhZBtgvQB1gxCAAAQCBAABzAxQBxAvBXBYQBaBaAtBtQAyB1AACAQAACBgwB0QgwBwhYBYQgCACgEADQhVBUhsAuQh1AxiAAAQgBAAgBAAQh/AAhzgwQhxgwhXhXQgDgDgDgDQhUhWgthsQgyh1AAiBg");
	this.shape_444.setTransform(213.25,239.975);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f().s("#000000").p("Ap/AAQAAiBAyh3QAwhyBZhZQBchaBvgwQB2gyCDAAQCEAAB1AyQByAwBZBZQBbBcAvBvQAyB3AACCQAACEgxB1QgwByhaBZQgDADgDADQhWBVhuAvQh3AyiDAAQgBAAgBAAQiBAAh1gxQhzgxhZhYQgDgDgDgEQhVhWgvhvQgyh2AAiEg");
	this.shape_445.setTransform(213.25,239.975);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f().s("#000000").p("AqLAAQAAiEAzh4QAxh0BahaQBehdBygwQB4g0CFAAQCFAAB4AzQB0AxBbBbQBcBdAwByQAzB4AACFQAACFgyB4QgyB0haBbQgDADgEADQhXBWhxAwQh4AziFAAQgBAAgBAAQiDAAh4gyQh0gyhahaQgEgDgDgEQhXhYgvhwQg0h5AAiFg");
	this.shape_446.setTransform(213.25,240);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f().s("#000000").p("AqWAAQAAiGA0h7QAyh2BchcQBgheBygxQB7g0CHAAQCIAAB6A0QB2AyBcBcQBdBfAxBzQA1B7AACHQgBCIgzB6QgyB2hcBcQgDADgDADQhaBXhyAxQh7A0iHABQgBAAgBAAQiGgBh5gzQh3gyhchcQgDgDgDgDQhYhagwhyQg1h7AAiIg");
	this.shape_447.setTransform(213.25,240);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f().s("#000000").p("AqhAAQAAiIA1h9QAzh4BdheQBhhfB1gyQB9g1CJAAQCKAAB8A1QB4AyBeBeQBfBhAyB1QA1B9AACJQgBCKg0B7QgyB5hfBeQgCADgEADQhbBZh0AyQh9A0iJABQgBAAgBAAQiIgBh8g0Qh4gzhdhdQgDgDgEgEQhZhbgyh0Qg1h9AAiKg");
	this.shape_448.setTransform(213.25,240);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f().s("#000000").p("AqrAAQAAiKA1h/QA0h6BehfQBjhhB2gzQB/g2CMAAQCNABB+A1QB5A0BgBfQBhBiAyB3QA1B/AACLQAACNg1B9Qg0B6hfBgQgDADgDADQhdBbh1AyQh/A2iMAAQgBAAgBAAQiKgBh+g1Qh6gzhfhfQgEgDgDgEQhbhdgyh1Qg1iAAAiMg");
	this.shape_449.setTransform(213.25,239.975);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f().s("#000000").p("Aq3AAQAAiMA3iBQA0h9BghgQBlhiB4g0QCBg3COAAQCPABCAA2QB7A0BhBhQBiBkA0B4QA3CCAACNQAACPg3CAQg0B8hhBhQgDADgDADQheBch4AzQiBA3iOAAQgBAAgBAAQiNAAh/g2Qh8g1hhhgQgDgEgEgDQhchegzh4Qg3iBAAiPg");
	this.shape_450.setTransform(213.25,239.975);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f().s("#000000").p("ArCAAQAAiPA3iDQA2h+BhhiQBnhkB6g0QCDg4CQAAQCRABCCA3QB+A1BiBiQBkBmA0B6QA3CDAACQQAACRg3CCQg0B+hjBiQgDAEgEADQhfBdh6A0QiDA4iQAAQgBAAgBAAQiPAAiBg3Qh/g2hihhQgDgEgEgEQhdhfg0h6Qg4iDAAiRg");
	this.shape_451.setTransform(213.25,239.975);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f().s("#000000").p("ArNAAQAAiRA4iFQA2iABkhkQBohlB8g1QCFg5CSAAQCTABCEA3QCAA3BkBjQBmBnA0B9QA5CFAACSQAACTg4CEQg2CAhkBkQgEAEgDADQhiBfh6A0QiGA5iSAAQgBAAgBAAQiRAAiEg4QiAg2hkhkQgDgDgEgEQhfhhg0h8Qg5iFAAiTg");
	this.shape_452.setTransform(213.25,239.975);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA3iDBlhkQBphoB/g2QCHg5CUAAQCVAACGA5QCCA3BmBlQBnBpA1B/QA6CHAACUQAACVg5CHQg3CChlBlQgDADgEADQhjBhh+A1QiHA6iUAAQgBAAgBAAQiTAAiGg5QiCg3hlhlQgEgDgEgEQhghjg2h+Qg5iHAAiVg");
	this.shape_453.setTransform(213.25,240);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA3iEBnhnQBrhpCBg2QCIg6CXAAQCYAACIA5QCEA4BnBnQBpBqA1CBQA7CJAACXQgBCYg5CIQg4CEhmBnQgEADgEADQhkBjh/A1QiJA6iXABQgBAAgBAAQiWgBiIg5QiEg4hnhmQgDgEgDgEQhjhkg2h/Qg6iJAAiYg");
	this.shape_454.setTransform(213.25,240);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA4iGBohoQBthqCCg4QCMg7CYAAQCaAACLA7QCFA4BpBpQBpBsA4CCQA7CMAACYQAACag6CKQg5CGhpBpQgDADgEAEQhlBjiCA3QiMA7iYAAQgBAAgBAAQiYAAiKg6QiGg5hphoQgDgEgEgEQhjhlg3iCQg7iLAAiag");
	this.shape_455.setTransform(213.25,239.975);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f().s("#000000").p("Ar5AAQAAiaA7iNQA6iJBqhpQBuhsCDg4QCOg8CbAAQCdAACMA8QCIA5BqBqQBrBtA4CFQA8CNAACbQgBCdg6CMQg6CIhqBqQgDADgFAEQhmBkiDA4QiOA8ibAAQgBAAgBAAQiaAAiMg7QiJg6hphpQgEgEgEgEQhlhng3iDQg8iOAAicg");
	this.shape_456.setTransform(213.25,239.975);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f().s("#000000").p("AsEAAQAAicA8iQQA7iKBrhrQBvhtCGg5QCQg9CdAAQCeAACPA8QCKA7BrBrQBuBvA5CGQA8CQAACdQAACfg8COQg7CKhrBsQgDADgFAEQhoBmiFA5QiQA8idAAQgBAAgBAAQicAAiPg8QiKg7hrhrQgDgDgFgEQhmhpg5iFQg8iQAAieg");
	this.shape_457.setTransform(213.25,239.975);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA7iMBthtQBxhvCIg6QCRg9CgAAQChAACRA9QCLA7BtBtQBvBxA6CIQA9CSAACfQAAChg9CQQg7CMhtBtQgEAEgEAEQhqBniHA6QiRA9igAAQgBAAgBAAQifAAiQg9QiMg7hthtQgEgDgEgFQhohqg5iHQg9iSAAigg");
	this.shape_458.setTransform(213.25,239.975);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f().s("#000000").p("AsbAAQAAihA/iTQA8iPBuhuQBzhwCKg7QCTg/CiAAQCjAACSA+QCOA9BvBuQBwBzA7CJQA/CUAACiQgBCjg+CSQg8COhuBvQgEAEgEADQhsBpiIA7QiUA+iiABQgBAAgBAAQihgBiSg+QiPg8huhuQgEgEgDgEQhphsg7iJQg/iTAAijg");
	this.shape_459.setTransform(213.25,240);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f().s("#000000").p("AsmAAQAAijBAiWQA8iQBwhvQB1hzCMg8QCVg/CkAAQCmAACUA/QCQA9BwBwQByB0A7CNQA/CVAACkQAACmg+CUQg9CQhwBwQgFAEgDAEQhtBqiMA7QiVA/ikAAQgBAAgBAAQijAAiUg+QiRg+hvhvQgFgEgEgEQhqhtg7iMQhAiWAAikg");
	this.shape_460.setTransform(213.25,240);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f().s("#000000").p("AsxAAQAAilBAiYQA+iSBxhxQB2h0CPg8QCXhBCmAAQCoABCWBAQCSA9ByByQBzB1A8COQBBCYAACmQgBCog/CWQg+CShyByQgEAEgEAEQhvBriMA8QiYBBimAAQgBAAgBAAQimgBiWg/QiSg+hyhxQgEgEgEgFQhshug7iNQhBiYAAing");
	this.shape_461.setTransform(213.25,239.975);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f().s("#000000").p("As8AAQAAinBBiaQA/iVByhyQB4h1CQg9QCahCCoAAQCqABCZBAQCUA/BzBzQB1B3A9CQQBBCaAACoQgBCqhACYQg/CVhzBzQgEAEgEAEQhwBtiPA9QiaBBioAAQgBAAgBAAQingBiZhAQiVg/hzhyQgDgEgFgFQhthwg9iPQhBiaAAipg");
	this.shape_462.setTransform(213.25,239.975);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f().s("#000000").p("AtGAAQAAiqBBibQA/iXB1h0QB5h3CSg+QCbhCCrAAQCsABCbBBQCVBAB2B0QB2B5A+CSQBBCcAACqQAACshBCbQg/CWh1B1QgEAEgEADQhyBviQA+QicBCirAAQgBAAgCAAQipgBibhBQiWhAh0h0QgEgEgEgEQhwhyg9iRQhBibAAisg");
	this.shape_463.setTransform(213.25,239.975);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f().s("#000000").p("AtSAAQAAisBDieQBBiYB1h2QB7h4CTg/QCfhDCsAAQCuABCdBCQCYBAB2B2QB4B6A/CUQBDCfAACsQAACvhDCcQhACYh3B2QgDAEgEAEQh0BxiSA+QifBDisAAQgBAAgCAAQirAAidhDQiYhAh2h2QgEgEgEgEQhxh0g+iSQhDieAAiug");
	this.shape_464.setTransform(213.25,239.975);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f().s("#000000").p("AtdAAQAAiuBEigQBBibB4h3QB7h5CWhAQCghECvAAQCxABCfBDQCZBBB4B4QB6B7A/CWQBDCgAACvQAACxhDCeQhBCbh4B3QgDAEgFAEQh1ByiUA/QigBEivAAQgBAAgCAAQiuAAiehDQiahCh4h3QgEgEgEgFQhyh0g/iVQhEigAAiwg");
	this.shape_465.setTransform(213.25,239.975);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f().s("#000000").p("AtoAAQAAixBFihQBBidB5h5QB+h7CYhAQCihFCxAAQCzAAChBEQCcBCB5B5QB7B9BACYQBFCjAACxQAACzhFCgQhBCdh5B5QgFAEgEAEQh2BziWBAQijBFixAAQgBAAgCAAQivAAihhFQidhCh5h4QgEgEgEgFQh0h2g/iXQhFiiAAiyg");
	this.shape_466.setTransform(213.25,240);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f().s("#000000").p("AtzAAQAAizBGikQBCieB6h6QCAh9CahCQCjhFC0AAQC1AACjBFQCeBDB7B7QB8B/BBCaQBGCkAACzQAAC1hGCjQhCCeh7B7QgEAEgFAEQh3B1iZBBQijBFi0AAQgBAAgCAAQiyAAiihFQifhDh6h6QgFgFgEgEQh1h4hAiYQhGilAAi0g");
	this.shape_467.setTransform(213.25,239.975);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f().s("#000000").p("At+AAQAAi1BGimQBEihB8h7QCBh/CchCQClhGC2AAQC3AAClBGQChBEB8B8QB+CBBBCbQBHCnAAC1QgBC4hFCkQhEChh8B8QgEAEgFAEQh5B2iaBCQimBGi2AAQgBAAgCAAQi0AAilhGQighEh9h8QgEgEgEgFQh2h5hBiaQhHimAAi3g");
	this.shape_468.setTransform(213.25,239.975);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f().s("#000000").p("AuJAAQAAi3BHioQBEijB+h9QCCiACehDQCphHC3AAQC6AACnBHQChBFB/B9QCACCBCCeQBHCpAAC3QAAC6hHCnQhFCih9B+QgFAEgEAEQh7B4icBCQipBHi3AAQgBAAgCAAQi3AAinhHQihhFh/h9QgDgEgFgFQh4h6hCidQhHioAAi5g");
	this.shape_469.setTransform(213.25,239.975);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f().s("#000000").p("AuUAAQAAi5BIirQBFikB/h/QCEiBCghEQCqhIC6AAQC8AACpBIQCkBFCACAQCBCDBDCgQBICqAAC6QgBC8hHCpQhFCkh/CAQgFAEgFAEQh7B5ieBDQirBIi6AAQgBAAgCAAQi5AAiphIQikhFh/h/QgFgEgEgFQh5h8hDifQhIiqAAi7g");
	this.shape_470.setTransform(213.25,239.975);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f().s("#000000").p("AufAAQAAi8BIisQBHinCAiAQCGiDChhEQCthJC8AAQC+AACsBIQCmBHCACBQCDCFBEChQBJCtAAC8QAAC+hICrQhHCniBCAQgEAFgEAEQh/B6ifBEQitBJi8AAQgBAAgCAAQi7AAirhIQinhHiAiAQgFgFgEgEQh7h+hDigQhJitAAi9g");
	this.shape_471.setTransform(213.25,239.975);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f().s("#000000").p("AuqAAQAAi+BJiuQBIipCCiCQCHiECjhGQCuhJC/AAQDBAACtBJQCoBICCCCQCECHBGCjQBJCvAAC+QAADBhJCtQhICoiCCCQgEAFgFAEQh/B8iiBFQiuBJi/AAQgBAAgCAAQi+AAithJQiohIiCiBQgFgFgEgFQh8h/hFiiQhJiuAAjAg");
	this.shape_472.setTransform(213.25,239.975);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f().s("#000000").p("Au2AAQAAjABLixQBIiqCEiEQCIiGCmhGQCxhLDAAAQDCABCwBKQCqBICECEQCGCIBGCmQBLCxAADAQgBDDhKCvQhICqiECEQgEAFgFAEQiBB9ijBGQiyBLjBAAQAAAAgCAAQi/gBivhKQirhIiEiEQgFgEgEgFQh+iBhFikQhLiwAAjCg");
	this.shape_473.setTransform(213.25,239.975);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f().s("#000000").p("AvBAAQAAjCBMizQBJitCFiEQCKiICohHQCyhMDDAAQDFABCxBLQCsBJCFCFQCJCKBGCoQBLCyAADDQAADFhLCxQhICtiGCFQgEAFgFAEQiCB/inBGQiyBMjEAAQAAAAgCAAQjCgBixhLQithJiEiFQgFgEgFgFQh/iChGimQhMizAAjEg");
	this.shape_474.setTransform(213.25,239.975);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f().s("#000000").p("AvMAAQAAjFBNi0QBJivCHiGQCMiJCqhIQC0hNDFAAQDHABCzBMQCvBKCHCGQCICMBICpQBNC1AADFQgBDHhMC0QhJCuiHCHQgFAEgFAFQiECAinBHQi1BNjGAAQgBAAgBAAQjEgBizhMQivhKiHiGQgEgFgFgFQiAiDhHioQhNi1AAjGg");
	this.shape_475.setTransform(213.25,239.975);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f().s("#000000").p("AvXAAQAAjHBNi3QBLiwCIiIQCOiLCrhIQC3hODHAAQDKABC1BMQCwBLCJCJQCKCNBICrQBOC3AADHQgBDKhNC1QhKCwiICJQgFAEgFAFQiFCBiqBJQi3BNjIAAQgBAAgBAAQjHgBi1hMQiwhLiJiIQgEgFgEgFQiCiFhJiqQhNi3AAjIg");
	this.shape_476.setTransform(213.25,239.975);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f().s("#000000").p("AviAAQAAjJBOi5QBLizCKiJQCPiMCuhKQC4hODKAAQDLABC5BNQCyBMCKCKQCMCOBICuQBOC5AADJQAADMhOC3QhLCziJCKQgFAEgFAFQiHCDirBJQi5BOjLAAQgBAAgBAAQjIgBi4hNQizhMiJiJQgFgFgFgFQiDiHhJisQhOi4AAjLg");
	this.shape_477.setTransform(213.25,239.975);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f().s("#000000").p("AvtAAQAAjLBPi7QBMi1CLiLQCRiOCvhKQC8hPDLAAQDOABC6BOQCzBNCMCLQCOCQBJCvQBQC8AADLQgBDOhPC5QhLC1iMCLQgFAFgFAFQiICEitBKQi8BPjMAAQgBAAgBAAQjLgBi5hOQi1hNiLiKQgFgFgFgGQiFiIhJitQhPi7AAjNg");
	this.shape_478.setTransform(213.25,239.975);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBNi3CNiMQCSiQCxhLQC9hPDOAAQDQAAC8BPQC2BOCNCNQCQCRBKCyQBQC9AADOQgBDQhPC8QhNC2iNCNQgFAFgFAFQiKCGivBKQi9BPjPABQgBAAgBAAQjNgBi8hPQi2hOiNiMQgFgFgFgFQiGiKhKivQhQi9AAjPg");
	this.shape_479.setTransform(213.25,240);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBNi5CPiOQCUiQCzhMQC/hRDQAAQDTAAC+BRQC3BOCPCOQCQCUBMCzQBRC/AADQQAADThRC9QhOC5iOCOQgFAFgGAFQiKCHixBLQjABRjRAAQgBAAgBAAQjQAAi9hRQi4hOiPiOQgFgFgFgFQiHiLhLiyQhRi/AAjRg");
	this.shape_480.setTransform(213.25,239.975);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f().s("#000000").p("AwOAAQAAjSBRjBQBPi7CRiPQCUiTC2hNQDAhRDTAAQDVAAC/BRQC7BQCPCQQCTCUBNC2QBRDBAADSQAADVhRC/QhPC7iRCQQgFAFgFAFQiMCIi0BNQjABRjUAAQgBAAgBAAQjSAAi/hRQi7hQiPiPQgFgFgFgFQiKiNhMi0QhRjAAAjUg");
	this.shape_481.setTransform(213.25,239.975);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi8BQQjEBSjVAAQjUAAjDhSQi9hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjEQBQi8CRiRQCSiSC9hQQDDhSDUAAQDVAADEBSQC8BQCSCSQCRCRBQC8QBSDEAADUg");
	this.shape_482.setTransform(213.25,239.975);

	var maskedShapeInstanceList = [this.shape_387,this.shape_388,this.shape_389,this.shape_390,this.shape_391,this.shape_392,this.shape_393,this.shape_394,this.shape_395,this.shape_396,this.shape_397,this.shape_398,this.shape_399,this.shape_400,this.shape_401,this.shape_402,this.shape_403,this.shape_404,this.shape_405,this.shape_406,this.shape_407,this.shape_408,this.shape_409,this.shape_410,this.shape_411,this.shape_412,this.shape_413,this.shape_414,this.shape_415,this.shape_416,this.shape_417,this.shape_418,this.shape_419,this.shape_420,this.shape_421,this.shape_422,this.shape_423,this.shape_424,this.shape_425,this.shape_426,this.shape_427,this.shape_428,this.shape_429,this.shape_430,this.shape_431,this.shape_432,this.shape_433,this.shape_434,this.shape_435,this.shape_436,this.shape_437,this.shape_438,this.shape_439,this.shape_440,this.shape_441,this.shape_442,this.shape_443,this.shape_444,this.shape_445,this.shape_446,this.shape_447,this.shape_448,this.shape_449,this.shape_450,this.shape_451,this.shape_452,this.shape_453,this.shape_454,this.shape_455,this.shape_456,this.shape_457,this.shape_458,this.shape_459,this.shape_460,this.shape_461,this.shape_462,this.shape_463,this.shape_464,this.shape_465,this.shape_466,this.shape_467,this.shape_468,this.shape_469,this.shape_470,this.shape_471,this.shape_472,this.shape_473,this.shape_474,this.shape_475,this.shape_476,this.shape_477,this.shape_478,this.shape_479,this.shape_480,this.shape_481,this.shape_482];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_387}]},32).to({state:[{t:this.shape_388}]},1).to({state:[{t:this.shape_389}]},1).to({state:[{t:this.shape_390}]},1).to({state:[{t:this.shape_391}]},1).to({state:[{t:this.shape_392}]},1).to({state:[{t:this.shape_393}]},1).to({state:[{t:this.shape_394}]},1).to({state:[{t:this.shape_395}]},1).to({state:[{t:this.shape_396}]},1).to({state:[{t:this.shape_397}]},1).to({state:[{t:this.shape_398}]},1).to({state:[{t:this.shape_399}]},1).to({state:[{t:this.shape_400}]},1).to({state:[{t:this.shape_401}]},1).to({state:[{t:this.shape_402}]},1).to({state:[{t:this.shape_403}]},1).to({state:[{t:this.shape_404}]},1).to({state:[{t:this.shape_405}]},1).to({state:[{t:this.shape_406}]},1).to({state:[{t:this.shape_407}]},1).to({state:[{t:this.shape_408}]},1).to({state:[{t:this.shape_409}]},1).to({state:[{t:this.shape_410}]},1).to({state:[{t:this.shape_411}]},1).to({state:[{t:this.shape_412}]},1).to({state:[{t:this.shape_413}]},1).to({state:[{t:this.shape_414}]},1).to({state:[{t:this.shape_415}]},1).to({state:[{t:this.shape_416}]},1).to({state:[{t:this.shape_417}]},1).to({state:[{t:this.shape_418}]},1).to({state:[{t:this.shape_419}]},1).to({state:[{t:this.shape_420}]},1).to({state:[{t:this.shape_421}]},1).to({state:[{t:this.shape_422}]},1).to({state:[{t:this.shape_423}]},1).to({state:[{t:this.shape_424}]},1).to({state:[{t:this.shape_425}]},1).to({state:[{t:this.shape_426}]},1).to({state:[{t:this.shape_427}]},1).to({state:[{t:this.shape_428}]},1).to({state:[{t:this.shape_429}]},1).to({state:[{t:this.shape_430}]},1).to({state:[{t:this.shape_431}]},1).to({state:[{t:this.shape_432}]},1).to({state:[{t:this.shape_433}]},1).to({state:[{t:this.shape_434}]},1).to({state:[{t:this.shape_435}]},1).to({state:[{t:this.shape_436}]},1).to({state:[{t:this.shape_437}]},1).to({state:[{t:this.shape_438}]},1).to({state:[{t:this.shape_439}]},1).to({state:[{t:this.shape_440}]},1).to({state:[{t:this.shape_441}]},1).to({state:[{t:this.shape_442}]},1).to({state:[{t:this.shape_443}]},1).to({state:[{t:this.shape_444}]},1).to({state:[{t:this.shape_445}]},1).to({state:[{t:this.shape_446}]},1).to({state:[{t:this.shape_447}]},1).to({state:[{t:this.shape_448}]},1).to({state:[{t:this.shape_449}]},1).to({state:[{t:this.shape_450}]},1).to({state:[{t:this.shape_451}]},1).to({state:[{t:this.shape_452}]},1).to({state:[{t:this.shape_453}]},1).to({state:[{t:this.shape_454}]},1).to({state:[{t:this.shape_455}]},1).to({state:[{t:this.shape_456}]},1).to({state:[{t:this.shape_457}]},1).to({state:[{t:this.shape_458}]},1).to({state:[{t:this.shape_459}]},1).to({state:[{t:this.shape_460}]},1).to({state:[{t:this.shape_461}]},1).to({state:[{t:this.shape_462}]},1).to({state:[{t:this.shape_463}]},1).to({state:[{t:this.shape_464}]},1).to({state:[{t:this.shape_465}]},1).to({state:[{t:this.shape_466}]},1).to({state:[{t:this.shape_467}]},1).to({state:[{t:this.shape_468}]},1).to({state:[{t:this.shape_469}]},1).to({state:[{t:this.shape_470}]},1).to({state:[{t:this.shape_471}]},1).to({state:[{t:this.shape_472}]},1).to({state:[{t:this.shape_473}]},1).to({state:[{t:this.shape_474}]},1).to({state:[{t:this.shape_475}]},1).to({state:[{t:this.shape_476}]},1).to({state:[{t:this.shape_477}]},1).to({state:[{t:this.shape_478}]},1).to({state:[{t:this.shape_479}]},1).to({state:[{t:this.shape_480}]},1).to({state:[{t:this.shape_481}]},1).to({state:[{t:this.shape_482}]},1).to({state:[]},1).wait(64));

	// 波2
	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgHAHgLAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKg");
	this.shape_483.setTransform(166.6,240);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f().s("#000000").p("AgiAAQAAgNALgKQAJgKAOAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgOAAgJgKQgLgKAAgOg");
	this.shape_484.setTransform(166.6,240);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_485.setTransform(166.625,240.025);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPQgPgQAAgWg");
	this.shape_486.setTransform(166.6,240);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQASgTAZAAQAaAAATATQASASAAAZQAAAagSASQgTATgaAAQgZAAgSgTQgTgSAAgag");
	this.shape_487.setTransform(166.6,240);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f().s("#000000").p("AhHAAQAAgdAVgVQAVgVAdAAQAeAAAVAVQAVAVAAAdQAAAdgVAWQgVAVgeAAQgdAAgVgVQgVgWAAgdg");
	this.shape_488.setTransform(166.6,240);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f().s("#000000").p("AhQAAQAAghAYgYQAXgXAhAAQAiAAAXAXQAYAYAAAhQAAAhgYAYQgXAYgiAAQghAAgXgYQgYgYAAghg");
	this.shape_489.setTransform(166.625,240.025);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f().s("#000000").p("AhaAAQAAglAbgaQAagbAlAAQAlAAAbAbQAaAaAAAlQAAAmgaAaQgbAbglAAQglAAgagbQgbgaAAgmg");
	this.shape_490.setTransform(166.6,240);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f().s("#000000").p("AhjAAQAAgpAegdQAcgdApAAQAqAAAdAdQAdAdAAApQAAAqgdAdQgdAdgqAAQgpAAgcgdQgegdAAgqg");
	this.shape_491.setTransform(166.6,240);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f().s("#000000").p("AhtAAQAAgtAhggQAfgfAtAAQAtAAAgAfQAgAgAAAtQAAAtggAgQggAggtAAQgtAAgfggQghggAAgtg");
	this.shape_492.setTransform(166.6,240);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_493.setTransform(166.625,240.025);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f().s("#000000").p("Ah/AAQAAg0AlgmQAmglA0AAQA1AAAlAlQAmAmAAA0QAAA1gmAmQglAlg1AAQg0AAgmglQglgmAAg1g");
	this.shape_494.setTransform(166.6,240);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f().s("#000000").p("AiJAAQAAg4ApgpQAogoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgogpQgpgoAAg5g");
	this.shape_495.setTransform(166.6,240);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f().s("#000000").p("AiSAAQAAg8ArgrQArgrA8AAQA9AAAqArQAsArAAA8QAAA9gsAqQgqAsg9AAQg8AAgrgsQgrgqAAg9g");
	this.shape_496.setTransform(166.6,240);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f().s("#000000").p("AibAAQAAhAAuguQAtgtBAAAQBBAAAtAtQAuAuAABAQAABAguAuQgtAuhBAAQhAAAgtguQguguAAhAg");
	this.shape_497.setTransform(166.625,240.025);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f().s("#000000").p("AilAAQAAhDAxgyQAwgwBEAAQBEAAAxAwQAwAyAABDQAABEgwAxQgxAxhEAAQhEAAgwgxQgxgxAAhEg");
	this.shape_498.setTransform(166.6,240);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f().s("#000000").p("ACvAAQAABJg0AyQgyA0hJAAQhIAAgyg0Qg0gyAAhJQAAhIA0gzQAygzBIAAQBJAAAyAzQA0AzAABIg");
	this.shape_499.setTransform(166.6,240);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANgfAagbQAcgcAegNQAjgPAnAAQAnAAAhAOQAgANAbAaQAbAbANAgQAPAiAAAnQAAAmgOAiQgNAfgaAcQgBAAgBABQgaAageANQgjAPgoAAQglAAgigNQgfgOgagaQgBAAgCgCQgagagNgfQgPgiAAgog");
	this.shape_500.setTransform(166.6,240);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f().s("#000000").p("AjEAAQAAgoAOgjQAPghAbgdQAdgdAhgPQAkgPAqAAQApAAAjAOQAiAPAcAbQAdAdAOAiQAQAjAAAqQAAApgPAjQgOAhgcAdQgBABAAAAQgcAcghAOQgkAQgqAAQgoAAgjgOQgigOgbgcQgCgBgBgBQgbgbgPgiQgPgjAAgrg");
	this.shape_501.setTransform(166.6,240);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f().s("#000000").p("AjPAAQAAgqAPglQAPgkAdgeQAfgeAigQQAngQAsAAQArAAAlAPQAkAPAeAeQAeAeAPAjQARAnAAArQAAArgQAmQgPAjgdAeQgBABgBABQgdAcgiAPQgnARgsAAQgqAAglgPQgkgPgdgdQgBgBgCgBQgcgdgQgjQgQgnAAgsg");
	this.shape_502.setTransform(166.6,240);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f().s("#000000").p("AjbAAQAAgsARgnQAQgnAegeQAgghAlgQQAogRAvAAQAtAAAoAQQAmAPAfAfQAfAhARAlQARAoAAAuQAAAugQAnQgQAmgfAfQgBAAgBABQgeAfglAQQgoARgvAAQgsAAgogPQgmgQgegfQgBgBgBgCQgfgegQglQgSgoAAgvg");
	this.shape_503.setTransform(166.6,240);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f().s("#000000").p("AjmAAQAAguASgpQARgoAfgiQAighAngRQAqgTAxAAQAwAAApASQAoAQAgAhQAiAhARAnQASArAAAwQAAAwgRApQgRAnghAhQAAACgBAAQggAggnARQgqATgxAAQguAAgqgRQgogSggggQgBAAgBgCQgggggRgmQgTgrAAgxg");
	this.shape_504.setTransform(166.6,240);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f().s("#000000").p("AjxAAQAAgwATgsQASgqAggiQAkgjApgSQAsgUAzAAQAyAAArATQArARAiAiQAjAjARApQAUAsAAAzQAAAygTArQgRAqgiAiQgBACgBAAQghAhgpASQgsATg0AAQgwAAgsgRQgqgSghghQgCgCgBgBQghghgSgpQgUgsAAg0g");
	this.shape_505.setTransform(166.6,240);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f().s("#000000").p("Aj8AAQAAgzAUguQASgsAjgjQAlglArgTQAugUA1AAQA1AAAtAUQAsARAkAlQAjAkAUArQAUAvAAA0QAAA0gUAuQgSAsgjAkQgCAAAAABQgjAjgrATQgvAUg1AAQgzAAgugTQgsgSgjgkQgBgBgBgBQgjgjgTgrQgUgvAAg1g");
	this.shape_506.setTransform(166.6,240);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f().s("#000000").p("AkGAAQAAg1AUgwQATguAkglQAngmAtgUQAwgUA3AAQA3AAAvAUQAuATAmAkQAlAnAUAtQAUAwAAA3QAAA2gUAwQgSAugmAmQgBAAAAABQglAkgsAUQgxAVg4AAQg1AAgwgUQgugUgkgkQgBgCgCAAQgkglgUgtQgUgwAAg4g");
	this.shape_507.setTransform(166.6,240);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f().s("#000000").p("AkSAAQAAg3AVgyQAUgwAmgnQAogoAvgUQAygVA6AAQA5AAAxAUQAwAUAnAmQAnAoAVAwQAVAyAAA5QAAA5gUAyQgVAvgmAnQgBABgBABQgmAmgvAUQgyAVg6AAQg3AAgygUQgwgUgmgmQgCgCgBgBQgmgmgUgvQgWgyAAg6g");
	this.shape_508.setTransform(166.6,240);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f().s("#000000").p("AkdAAQAAg5AWg0QAVgzAogoQApgpAxgVQA1gXA7AAQA7AAA0AWQAyAVAoAoQApApAVAxQAXA1AAA7QAAA7gWA0QgVAygoAoQgBABgBABQgnAngxAVQg1AXg8AAQg5AAg0gWQgygUgogoQgCgCgBgBQgngogVgwQgWg0gBg9g");
	this.shape_509.setTransform(166.6,240);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f().s("#000000").p("AkoAAQAAg8AXg1QAVg1ApgpQAsgsAygVQA3gYA+AAQA9AAA2AXQA0AVAqAqQAqArAWAzQAYA2AAA+QAAA9gXA2QgWAzgqArQgBABgBABQgpAogyAXQg3AXg+AAQg8AAg2gXQg0gVgpgqQgCgBgBgBQgpgpgWgzQgXg2AAg/g");
	this.shape_510.setTransform(166.6,240);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f().s("#000000").p("AkzAAQAAg+AXg4QAXg2ArgsQAtgsA0gWQA5gZBAAAQA/AAA4AYQA2AWArArQAsAtAXA0QAZA6AAA/QAAA/gYA4QgXA2grArQgBACgBABQgqAqg1AXQg5AYhAAAQg+AAg4gXQg2gXgrgrQgCgBgBgCQgqgqgXg0QgYg5AAhBg");
	this.shape_511.setTransform(166.6,240);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f().s("#000000").p("Ak+AAQAAhAAZg6QAXg4AsgtQAvguA2gXQA6gaBDAAQBCAAA5AZQA5AWAtAtQAtAuAXA3QAaA7AABCQAABCgYA5QgYA4gtAtQgBACgBAAQgsAsg2AYQg7AZhDAAQhAAAg6gYQg4gYgsgsQgCgBgCgCQgrgsgXg2Qgag7AAhDg");
	this.shape_512.setTransform(166.6,240);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f().s("#000000").p("AlJAAQAAhDAag8QAYg6AtguQAwgvA5gZQA9gaBEAAQBEAAA8AaQA6AXAvAvQAvAvAYA5QAaA9AABEQAABEgZA8QgYA6gvAvQgBABgBAAQgtAtg5AZQg9AahFAAQhDAAg8gZQg5gYgvguQgBgBgBgCQgtgugZg4Qgag9AAhFg");
	this.shape_513.setTransform(166.6,240);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f().s("#000000").p("AlUAAQAAhEAag/QAag8AugwQAygxA7gZQA+gbBHAAQBHAAA+AaQA8AZAvAvQAxAyAZA7QAbA+AABHQAABGgaA+QgZA8gwAwQgBABgBACQgvAug6AZQg/AbhIAAQhEAAg/gZQg8gagvgvQgCgCgCgCQgugugZg7Qgbg+AAhIg");
	this.shape_514.setTransform(166.6,240);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f().s("#000000").p("AlfAAQAAhHAbhAQAag+AwgyQA0gyA8gaQBBgcBJAAQBIAABAAbQA+AaAyAxQAyAzAaA9QAcBBAABIQAABJgbBAQgaA+gyAxQgBABgBACQgxAwg8AZQhBAchJAAQhHAAhAgaQg/gbgxgwQgBgCgCgCQgwgwgag9QgbhBAAhJg");
	this.shape_515.setTransform(166.6,240);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f().s("#000000").p("AlqAAQAAhJAchDQAbg/Ayg0QA1g0A+gaQBDgdBLAAQBLAABCAbQBAAbAzAzQA0A0AbA/QAcBDAABLQAABKgbBDQgcA/gyA0QgCABgBACQgyAxg+AaQhDAehMAAQhJAAhCgcQhAgbgzgyQgCgDgBgBQgygygag+QgdhDAAhMg");
	this.shape_516.setTransform(166.6,240);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f().s("#000000").p("Al2AAQAAhMAdhEQAchCA0g0QA2g2BAgcQBFgdBOAAQBNAABEAcQBCAcA1A0QA1A2AcBBQAdBFAABNQAABNgdBEQgbBCg1A1QgBABgCABQgzAzhAAcQhFAdhOAAQhMAAhEgcQhCgcg0g0QgCgCgCgBQgyg0gchAQgdhFgBhOg");
	this.shape_517.setTransform(166.6,240);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f().s("#000000").p("AmBAAQAAhNAehHQAdhFA1g1QA4g4BCgcQBHgfBQAAQBPAABGAeQBEAcA2A3QA3A3AdBCQAeBIAABPQAABPgeBGQgcBFg2A1QgBACgCABQg1A0hCAdQhHAfhQAAQhOAAhGgeQhFgcg1g2QgCgCgCgBQg0g1gchCQgfhHAAhRg");
	this.shape_518.setTransform(166.6,240);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f().s("#000000").p("AmLAAQAAhQAehIQAdhGA3g4QA6g5BEgdQBJggBSAAQBSAABIAfQBGAdA4A3QA4A6AdBEQAgBJAABSQAABSgfBIQgdBGg4A3QgBACgCABQg3A2hDAdQhJAfhTAAQhQAAhIgeQhGgeg3g3QgCgBgCgCQg2g2gdhEQgfhJAAhTg");
	this.shape_519.setTransform(166.6,240);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f().s("#000000").p("AmXAAQAAhSAghLQAehIA5g5QA7g7BGgeQBLggBUAAQBUAABKAgQBJAeA5A5QA5A6AfBHQAgBMAABTQAABTggBLQgeBIg5A6QgBABgCABQg4A3hGAfQhLAghVAAQhSAAhLggQhIgeg5g5QgBgBgCgCQg3g4gehGQghhLAAhVg");
	this.shape_520.setTransform(166.6,240);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f().s("#000000").p("AmhAAQAAhVAghMQAfhKA5g7QA9g8BJgfQBNggBWAAQBWAABNAfQBKAfA6A7QA8A8AfBJQAgBNAABWQAABWgfBNQggBJg6A7QgCABgCACQg5A4hHAgQhOAhhXAAQhUAAhNghQhKgeg6g6QgDgCgBgCQg5g6gehIQghhNAAhXg");
	this.shape_521.setTransform(166.6,240);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f().s("#000000").p("AmtAAQAAhXAhhPQAghMA8g8QA+g9BKggQBPghBZAAQBYAABPAgQBMAgA8A8QA9A+AgBLQAhBPAABYQAABYghBPQggBMg8A8QgBABgCACQg7A6hKAgQhPAhhZAAQhXAAhPggQhMghg8g7QgBgBgCgDQg6g6gghKQgihQAAhZg");
	this.shape_522.setTransform(166.6,240);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f().s("#000000").p("Am4AAQAAhZAjhRQAghOA9g+QBAg+BMghQBRgjBbAAQBbAABQAiQBOAhA+A9QA+BAAhBMQAjBRAABbQAABbgiBQQghBOg+A+QgBACgCABQg9A8hLAgQhRAjhcAAQhZAAhQgiQhPghg9g9QgCgCgCgCQg7g8ghhMQgjhRAAhcg");
	this.shape_523.setTransform(166.6,240);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f().s("#000000").p("AnDAAQAAhbAjhTQAihQA+g/QBChBBNghQBUgkBdAAQBdAABSAjQBQAiA/A+QBBBBAhBPQAkBUAABcQAABdgjBTQgiBPg/BAQgCACgBABQg+A9hOAhQhUAkhdAAQhbAAhTgjQhQghg/g/QgCgCgCgCQg9g+ghhOQgkhTAAheg");
	this.shape_524.setTransform(166.6,240);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f().s("#000000").p("AnOAAQAAhdAkhVQAihTBBhAQBChDBQgiQBWgkBfAAQBfAABVAkQBSAiBBBBQBBBCAjBQQAkBWAABfQAABfgkBUQgiBShBBBQgCACgBACQhAA+hPAiQhWAlhgAAQhdAAhVgjQhTgjhAhAQgCgDgCgCQg/g/ghhQQglhVAAhgg");
	this.shape_525.setTransform(166.6,240);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f().s("#000000").p("AnZAAQAAhgAkhWQAkhVBBhCQBFhEBSgjQBYglBhAAQBiAABWAkQBUAkBDBCQBDBEAjBSQAlBYAABhQAABhgkBXQgkBUhCBCQgCACgBACQhBA/hSAjQhYAmhiAAQhgAAhWgkQhVgkhBhCQgDgCgCgBQhAhBgihSQgmhYAAhig");
	this.shape_526.setTransform(166.6,240);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f().s("#000000").p("AnkAAQAAhiAlhZQAlhWBDhEQBGhFBUgkQBagmBjAAQBkAABYAlQBXAkBDBEQBFBGAkBUQAmBaAABjQAABjglBaQglBVhEBEQgBACgCACQhDBBhTAkQhaAmhkAAQhiAAhZglQhWglhEhDQgBgCgCgCQhChCgkhUQgmhZAAhlg");
	this.shape_527.setTransform(166.6,240);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f().s("#000000").p("AnvAAQAAhkAmhcQAlhYBFhFQBIhHBWgkQBbgnBmAAQBmAABbAmQBYAlBFBFQBHBHAkBXQAnBbAABmQAABmgmBbQglBYhFBFQgCACgCACQhEBDhVAkQhcAnhnAAQhkAAhcgmQhXglhFhFQgDgCgBgCQhEhEgkhWQgnhbAAhng");
	this.shape_528.setTransform(166.6,240);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f().s("#000000").p("An7AAQAAhmAoheQAmhaBGhHQBJhIBYgmQBegoBoAAQBpABBcAnQBaAlBHBIQBIBIAmBZQAoBeAABnQAABngoBeQgmBahHBHQgBACgCABQhGBFhYAmQhdAohpAAQhmAAhegoQhagmhHhGQgBgCgDgCQhEhGgmhXQgnhegBhpg");
	this.shape_529.setTransform(166.6,240);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f().s("#000000").p("AoGAAQAAhpAphfQAnhcBHhJQBLhJBagnQBggpBqAAQBrABBfAoQBbAnBJBHQBJBLAnBaQApBgAABqQAABqgpBfQgmBchJBJQgCACgCABQhGBGhaAnQhgAphrAAQhoAAhggoQhcgohIhHQgDgCgBgCQhGhHgnhaQgohfgBhsg");
	this.shape_530.setTransform(166.6,240);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f().s("#000000").p("AoRAAQAAhrAphiQAohdBJhKQBNhMBbgnQBigpBtAAQBtAABhApQBeAnBJBKQBLBMAnBcQAqBiAABsQAABsgpBiQgoBdhJBLQgCACgCACQhJBHhbAnQhiAphtAAQhrAAhigoQhegohJhJQgDgDgCgCQhHhIgnhcQgphigBhtg");
	this.shape_531.setTransform(166.6,240);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f().s("#000000").p("AocAAQAAhtArhjQAohhBLhLQBOhNBdgoQBkgrBvAAQBvAABjArQBgAoBMBLQBMBNAoBeQArBkAABvQAABvgrBjQgoBghLBLQgCADgDACQhJBIhdAoQhkArhwAAQhtAAhjgqQhhgphLhLQgCgCgCgCQhJhLgohdQgrhjAAhwg");
	this.shape_532.setTransform(166.6,240);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f().s("#000000").p("AomAAQAAhwArhlQAohiBNhNQBQhPBfgoQBmgsBxAAQBxAABmAsQBiAoBNBNQBOBPAoBgQAsBnAABwQAABxgsBlQgoBihNBNQgDACgBADQhMBKhfAoQhnArhxAAQhwAAhlgqQhigphNhNQgCgCgCgDQhLhLgohfQgrhmAAhyg");
	this.shape_533.setTransform(166.6,240);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f().s("#000000").p("AoyAAQAAhxAshoQArhkBNhPQBRhQBigqQBogsBzAAQB0AABnAsQBkAqBOBPQBQBQAqBiQAsBoAABzQAABzgsBoQgqBkhPBOQgCACgCACQhNBLhhArQhoAsh0AAQhxAAhogsQhkgrhOhNQgDgDgCgCQhMhNgqhhQgshoAAh0g");
	this.shape_534.setTransform(166.6,240);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f().s("#000000").p("Ao9AAQAAh0AthqQArhmBQhQQBThSBjgqQBqgtB1AAQB2AABpAtQBmAqBQBQQBRBTArBkQAtBqAAB1QAAB1gtBqQgrBmhQBQQgCACgCACQhPBNhiArQhrAth2AAQh0AAhqgtQhmgrhPhQQgDgCgCgCQhNhOgrhkQgthqAAh2g");
	this.shape_535.setTransform(166.6,240);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f().s("#000000").p("ApIAAQAAh2AuhsQArhoBShSQBUhTBlgrQBtguB3AAQB4ABBsAtQBoArBRBSQBTBTArBnQAuBsAAB3QAAB3gtBsQgsBohSBSQgCACgCACQhQBPhlArQhtAuh4AAQh2AAhsguQhogrhShSQgCgCgCgDQhPhQgrhkQgthsgBh5g");
	this.shape_536.setTransform(166.6,240);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f().s("#000000").p("ApTAAQAAh5AvhuQAthqBRhTQBXhUBngsQBugvB6AAQB7AABtAvQBqAsBTBTQBUBVAsBoQAvBuAAB6QAAB6guBtQgtBrhTBTQgCACgCACQhSBQhnAsQhuAvh7AAQh5AAhugvQhqgshShSQgDgDgCgCQhQhSgshnQgvhuAAh7g");
	this.shape_537.setTransform(166.6,240);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f().s("#000000").p("ApeAAQAAh6AvhxQAuhsBUhUQBXhWBpgtQBxgwB8AAQB8AABwAwQBsAtBUBUQBWBXAtBqQAwBxAAB7QAAB8gwBwQgtBshVBVQgCACgCACQhTBRhpAtQhxAwh8AAQh7AAhwgvQhsguhUhUQgDgCgCgDQhShTgshpQgwhwAAh9g");
	this.shape_538.setTransform(166.6,240);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f().s("#000000").p("AppAAQAAh9AwhyQAuhuBWhWQBahYBqgtQBzgxB+AAQB/AAByAwQBuAuBWBWQBXBZAuBrQAwBzAAB+QAAB+gwByQguBuhWBWQgDADgCACQhVBThqAtQhzAxh/AAQh9AAhygwQhuguhWhWQgCgCgDgDQhThUgthsQgxhxAAiAg");
	this.shape_539.setTransform(166.6,240);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f().s("#000000").p("Ap0AAQAAh/Axh0QAvhxBXhXQBbhaBtgtQB1gyCAAAQCBAAB0AxQBwAvBYBXQBYBaAvBuQAxB1AACAQAACAgxB0QgvBwhYBYQgCACgCADQhWBUhtAuQh1AyiBAAQh/AAh0gwQhxgwhXhXQgCgDgDgCQhVhXgthsQgyh1AAiBg");
	this.shape_540.setTransform(166.6,240);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f().s("#000000").p("Ap/AAQAAiCAyh1QAwhzBZhZQBchbBvgvQB2gyCDAAQCEAAB1AyQByAvBZBaQBbBbAvBwQAyB2AACDQAACDgyB2QgwByhZBZQgCACgDADQhXBWhvAvQh2AyiEAAQiBAAh2gxQhzgxhYhYQgDgDgDgCQhWhYgvhvQgyh2AAiEg");
	this.shape_541.setTransform(166.6,240);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f().s("#000000").p("AqKAAQAAiEAyh4QAyh0BahaQBdhdBygwQB4g0CFAAQCFABB4AyQB1AxBaBbQBcBdAwByQA0B5AACEQAACFgzB4QgxB0hbBbQgDADgCACQhZBXhwAwQh6AziFAAQiEAAh4gyQh0gyhahaQgDgCgDgDQhXhZgwhxQgzh4AAiGg");
	this.shape_542.setTransform(166.6,240);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f().s("#000000").p("AqWAAQAAiGA0h6QAyh3BchcQBgheBygwQB7g1CHAAQCIABB6AzQB2AyBcBcQBeBfAwB0QA1B6AACHQAACHg0B7QgyB2hdBcQgBADgDACQhbBYhyAxQh7A1iIAAQiGAAh6g0Qh2gyhdhcQgCgDgDgCQhYhagxhzQg0h6gBiJg");
	this.shape_543.setTransform(166.6,240);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f().s("#000000").p("AqhAAQAAiIA1h9QAzh4BdheQBhhfB1gyQB9g1CJAAQCKABB8A0QB4AyBeBeQBfBgAyB2QA1B9AACJQAACKg1B7QgzB5hdBeQgDACgCADQhcBah1AyQh9A1iKAAQiIAAh9g1Qh4gzhdhdQgDgDgDgDQhahcgyh0Qg0h9gBiKg");
	this.shape_544.setTransform(166.6,240);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f().s("#000000").p("AqsAAQAAiKA2h/QAzh6BfhfQBjhiB2gyQB/g1CMAAQCMAAB+A1QB6A0BfBfQBhBhAyB4QA2B/AACLQAACLg1B/Qg0B6hfBgQgCACgDADQhdBbh3AzQh/A1iMAAQiLAAh+g1Qh6g0hfheQgDgDgDgDQhchdgyh3Qg1h+gBiNg");
	this.shape_545.setTransform(166.6,240);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f().s("#000000").p("Aq3AAQAAiNA3iAQA0h8BghhQBlhiB4g0QCBg3COAAQCPAACAA3QB8A0BhBgQBiBkAzB5QA3CBAACOQAACOg3CBQg0B7hhBhQgCADgDACQhfBdh4A0QiBA3iPAAQiNAAiAg3Qh8g0hhhgQgCgDgDgDQhdhfg0h5Qg3iAAAiPg");
	this.shape_546.setTransform(166.6,240);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f().s("#000000").p("ArBAAQAAiPA3iCQA1h/BhhiQBnhkB6g0QCDg4CQAAQCRAACCA3QB+A1BiBjQBkBlA0B7QA4CEAACPQAACQg3CCQg2B/hiBiQgCADgDACQhhBfh6A0QiDA3iRAAQiPAAiCg3Qh/g1hihhQgCgDgDgEQhfhgg0h6Qg3iDAAiRg");
	this.shape_547.setTransform(166.6,240);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f().s("#000000").p("ArNAAQAAiRA5iFQA1iABkhkQBohmB8g0QCFg5CSAAQCTAACFA4QCAA2BjBkQBlBmA1B+QA5CFAACSQAACTg4CEQg2CAhkBkQgDACgCAEQhiBfh8A1QiGA5iTAAQiRAAiFg4QiAg2hjhkQgDgCgEgDQhghjg0h8Qg5iEAAiUg");
	this.shape_548.setTransform(166.6,240);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f().s("#000000").p("ArYAAQAAiTA5iHQA3iCBlhlQBphoB/g2QCHg5CUAAQCWAACFA5QCCA3BmBlQBnBoA2CAQA5CHAACUQAACUg5CIQg3CChlBlQgDADgDADQhjBhh+A1QiIA6iVAAQiTAAiHg5QiCg3hlhlQgEgDgDgDQhhhjg1h/Qg6iHAAiVg");
	this.shape_549.setTransform(166.6,240);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f().s("#000000").p("ArjAAQAAiWA6iJQA4iEBmhnQBrhpCBg2QCIg6CXAAQCYABCIA5QCEA3BnBnQBoBqA3CCQA6CIAACXQAACXg6CJQg3CEhnBnQgDADgDADQhlBiiAA2QiJA7iYAAQiVAAiKg6QiEg4hnhmQgDgDgDgDQhjhlg1iAQg6iJgBiYg");
	this.shape_550.setTransform(166.6,240);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f().s("#000000").p("AruAAQAAiYA7iLQA4iGBphpQBshqCCg3QCMg7CYAAQCaAACLA7QCGA4BoBoQBqBsA3CDQA7CMAACYQAACZg7CLQg4CGhoBpQgDADgDACQhnBkiCA4QiMA7iZAAQiYAAiLg6QiGg5hphpQgCgCgDgDQhkhng4iCQg7iLAAiag");
	this.shape_551.setTransform(166.6,240);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f().s("#000000").p("Ar5AAQAAiaA7iNQA6iJBphqQBuhrCEg4QCOg8CbAAQCcAACMA7QCIA6BqBqQBsBsA4CGQA8CNAACbQAACbg8CNQg5CJhqBqQgDACgDADQhoBmiEA4QiOA8ibAAQiaAAiNg7QiJg6hphqQgDgDgDgCQhmhpg4iEQg8iMAAidg");
	this.shape_552.setTransform(166.6,240);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f().s("#000000").p("AsEAAQAAidA8iPQA7iKBrhrQBvhuCGg5QCQg8CdAAQCeAACPA8QCKA7BsBrQBsBuA6CHQA8CQAACdQAACeg8CPQg6CKhsBrQgDADgDADQhpBniGA6QiQA8ieAAQidAAiOg8QiLg7hrhrQgDgDgDgDQhohpg5iHQg8iPAAieg");
	this.shape_553.setTransform(166.6,240);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f().s("#000000").p("AsPAAQAAieA9iSQA7iMBthtQBxhvCIg6QCSg9CfAAQChAACRA9QCMA7BsBtQBvBwA6CJQA9CSAACfQAACfg9CSQg7CMhtBtQgDADgDADQhrBoiIA7QiSA9igAAQieAAiSg9QiMg7hthtQgDgDgDgDQhphrg6iIQg9iRAAihg");
	this.shape_554.setTransform(166.6,240);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f().s("#000000").p("AsbAAQAAihA/iTQA8iPBuhuQBzhwCKg7QCTg/CiAAQCjABCTA+QCOA8BuBuQBwByA7CLQA/CTAACiQAACig/CTQg8COhuBvQgDADgDADQhtBqiJA7QiUA/ijAAQihAAiTg/QiOg8huhuQgEgEgDgDQhqhsg7iKQg+iTgBijg");
	this.shape_555.setTransform(166.6,240);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f().s("#000000").p("AslAAQAAijA/iVQA8iRBwhvQB1hzCMg7QCVhACkAAQCmABCUA/QCQA8BwBwQByBzA7COQBACWAACjQAACkhACWQg8CQhwBwQgDADgDADQhuBsiMA7QiWA/ilAAQijAAiVg+QiRg+hvhvQgEgDgDgEQhshug7iMQg/iUAAimg");
	this.shape_556.setTransform(166.6,240);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f().s("#000000").p("AsxAAQAAimBAiXQA/iSBwhyQB2hzCPg8QCXhBCmAAQCoABCWA/QCSA+ByBxQBzB1A8CQQBBCXAACmQAACmhACYQg+CShyByQgDADgDADQhvBtiOA8QiYBBinAAQimAAiXhAQiSg/hyhwQgDgDgDgEQhthvg8iOQhAiXgBiog");
	this.shape_557.setTransform(166.6,240);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f().s("#000000").p("As8AAQAAinBBiaQA/iVBzhzQB3h1CQg9QCahBCoAAQCqABCZBAQCUA/BzBzQB0B2A+CRQBBCaAACoQAACphBCZQg/CVhzBzQgDADgDADQhxBuiQA+QiaBBipAAQinAAiahBQiVg/hzhzQgDgDgDgDQhvhxg9iQQhAiZgBiqg");
	this.shape_558.setTransform(166.6,240);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f().s("#000000").p("AtHAAQAAiqBCicQA/iWB1h1QB5h2CSg+QCbhBCrAAQCsAACbBBQCWA/B0B1QB2B4A+CTQBCCbAACrQAACrhBCbQhACWh0B2QgEACgDADQhyBwiSA/QicBBirAAQiqAAichBQiWhAh0h0QgEgDgDgDQhwhzg+iSQhBibgBisg");
	this.shape_559.setTransform(166.6,240);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f().s("#000000").p("AtSAAQAAisBDieQBBiYB1h2QB7h5CTg+QCfhDCsAAQCvAACcBDQCYBAB2B2QB4B5A/CVQBDCfAACsQAACthDCeQhACYh2B2QgDADgDAEQh0BxiUA/QifBDitAAQisAAidhDQiZhBh2h1QgDgDgEgDQhxh1g/iUQhDidAAiug");
	this.shape_560.setTransform(166.6,240);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f().s("#000000").p("AtcAAQAAivBDifQBBiaB4h4QB7h6CWg/QCghECvAAQCxAACfBEQCaBBB3B4QB6B6A/CXQBECgAACvQAACwhECfQhBCah3B4QgDAEgEADQh1BziWA/QigBDiwAAQiuAAighDQiahBh4h4QgDgDgEgDQhzh1g/iWQhDigAAiwg");
	this.shape_561.setTransform(166.6,240);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f().s("#000000").p("AtoAAQAAixBFihQBBidB5h5QB+h7CYhAQCihFCxAAQCzAAChBFQCcBBB5B5QB7B9BACZQBFCiAACxQAACyhEChQhCCdh5B5QgEADgDAEQh3BziXBBQijBFiyAAQixAAihhFQidhCh4h4QgEgEgEgDQh0h3hAiYQhFihAAizg");
	this.shape_562.setTransform(166.6,240);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f().s("#000000").p("AtzAAQAAizBGijQBCifB6h6QCAh9CahBQCkhGCzAAQC1AACjBGQCeBCB7B7QB8B+BCCbQBFCkAACzQAAC0hFCkQhDCeh7B7QgDADgDADQh5B2iZBBQilBGi0AAQizAAijhGQifhCh6h6QgEgEgDgDQh2h5hBiaQhGijAAi1g");
	this.shape_563.setTransform(166.6,240);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f().s("#000000").p("At+AAQAAi1BGimQBEigB8h9QCAh+CchBQCmhHC2AAQC3ABClBFQCgBEB8B8QB+B/BCCeQBHClAAC2QAAC2hGCmQhEChh8B8QgEADgDADQh6B4ibBBQinBHi2AAQi1AAimhGQihhEh8h8QgDgEgEgDQh3h6hCibQhGimAAi3g");
	this.shape_564.setTransform(166.6,240);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f().s("#000000").p("AuJAAQAAi3BHipQBEihB+h/QCCiACehCQCohHC4AAQC5AACoBHQCiBEB9B+QCACBBDCfQBHCpAAC3QAAC4hHCpQhFChh9B/QgEADgDAEQh8B4idBDQipBHi4AAQi4AAiohHQiihFh+h9QgDgDgEgEQh5h7hCieQhHinAAi6g");
	this.shape_565.setTransform(166.6,240);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f().s("#000000").p("AuUAAQAAi6BIiqQBFikB/h/QCEiCCghDQCqhIC6AAQC8AACpBIQCkBFB/B/QCBCDBEChQBICqAAC6QAAC6hICqQhFCliACAQgDADgEAEQh9B6ifBDQiqBIi7AAQi6AAiqhIQikhFh/h/QgEgEgEgEQh6h9hDifQhIipAAi8g");
	this.shape_566.setTransform(166.6,240);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f().s("#000000").p("AufAAQAAi8BIisQBHinCBiAQCFiDChhEQCthJC8AAQC+AACsBIQCmBHCACAQCDCFBECiQBJCtAAC8QAAC9hICsQhHCniACAQgEADgDAEQh/B7ihBFQitBJi9AAQi8AAishIQinhHiAiBQgDgDgEgEQh8h+hEiiQhJirAAi+g");
	this.shape_567.setTransform(166.6,240);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f().s("#000000").p("AuqAAQAAi+BJivQBIioCCiCQCHiFCkhFQCthJC/AAQDBAACtBJQCoBICCCCQCECFBGClQBJCuAAC/QAAC/hJCvQhHCoiCCCQgEAEgEADQiAB9ijBGQiuBJjAAAQi+AAiuhJQiphIiCiCQgEgDgDgEQh9iAhGijQhJiuAAjAg");
	this.shape_568.setTransform(166.6,240);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f().s("#000000").p("Au2AAQAAjABLiwQBIirCEiEQCIiGCmhGQCxhLDAAAQDDABCvBKQCqBICECEQCGCHBGCnQBKCxAADAQAADChKCvQhICriECEQgDAEgEADQiBB/ilBGQiyBLjBAAQjAAAiwhLQirhIiEiEQgEgDgDgEQh/iBhGimQhKiwgBjCg");
	this.shape_569.setTransform(166.6,240);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f().s("#000000").p("AvAAAQAAjDBLiyQBJitCFiEQCLiJCnhGQCyhMDDAAQDFABCyBLQCsBICFCGQCHCJBHCpQBMCyAADDQAADEhMCyQhJCsiFCFQgDAFgEADQiDCAinBHQizBLjEAAQjCAAizhLQishJiFiFQgFgEgDgDQiBiEhGinQhLiyAAjEg");
	this.shape_570.setTransform(166.6,240);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f().s("#000000").p("AvMAAQAAjFBNi0QBJivCHiHQCMiICphIQC1hNDFAAQDHABCzBMQCuBJCHCHQCJCLBICrQBNC0AADFQAADGhNC1QhKCuiHCHQgDADgEAEQiECBipBIQi1BNjGAAQjFAAi0hNQivhKiHiGQgDgEgEgDQiCiFhHipQhMi0gBjHg");
	this.shape_571.setTransform(166.6,240);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f().s("#000000").p("AvXAAQAAjHBOi3QBKiwCIiJQCOiKCrhJQC3hNDHAAQDKABC1BMQCwBLCJCIQCKCMBJCtQBNC3AADHQAADIhNC3QhLCwiICJQgEADgEAEQiGCDirBIQi3BOjIAAQjHAAi3hOQiwhLiJiHQgDgEgEgEQiDiGhIirQhNi2gBjJg");
	this.shape_572.setTransform(166.6,240);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f().s("#000000").p("AviAAQAAjKBOi4QBLizCKiJQCPiNCuhJQC4hNDKAAQDLAAC4BNQCyBLCKCKQCMCOBJCvQBOC4AADKQAADLhOC4QhLCziKCKQgEADgDAEQiICEitBJQi5BOjKAAQjKAAi4hOQizhLiJiJQgEgFgEgDQiFiHhJiuQhNi3gBjMg");
	this.shape_573.setTransform(166.6,240);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f().s("#000000").p("AvtAAQAAjLBQi7QBLi1CMiLQCRiOCvhKQC7hPDLAAQDOABC6BOQC0BMCLCMQCOCPBKCwQBOC8AADLQAADMhOC7QhMC0iMCMQgDAEgEAEQiJCGivBJQi7BQjNAAQjLAAi7hQQi0hMiMiLQgEgDgEgEQiGiKhJivQhPi5gBjOg");
	this.shape_574.setTransform(166.6,240);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f().s("#000000").p("Av4AAQAAjOBQi9QBNi2CNiNQCSiQCxhKQC9hQDOAAQDQAAC8BQQC2BNCNCNQCPCRBLCyQBQC9AADOQAADPhQC9QhNC2iNCNQgEAEgEADQiKCIixBLQi9BQjPAAQjOAAi9hQQi2hOiNiMQgEgEgEgEQiIiKhKixQhQi8AAjQg");
	this.shape_575.setTransform(166.6,240);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f().s("#000000").p("AwDAAQAAjQBRi/QBOi4COiPQCUiRCzhLQC/hRDQAAQDTAAC+BRQC4BOCOCOQCQCSBMC1QBRC/AADQQAADRhRC/QhNC4iPCPQgEAEgEADQiMCJiyBMQjABRjRAAQjQAAi/hRQi4hOiPiOQgEgEgDgEQiJiMhMizQhRi+AAjSg");
	this.shape_576.setTransform(166.6,240);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f().s("#000000").p("AwOAAQAAjTBRjAQBPi7CRiPQCUiTC2hNQDAhRDTAAQDVAADABRQC6BPCQCRQCSCTBNC3QBRDAAADTQAADThRDBQhPC7iQCPQgEAFgEAEQiNCKi1BNQjBBRjUAAQjTAAjAhRQi7hQiPiQQgFgDgEgEQiKiNhNi2QhRi/AAjVg");
	this.shape_577.setTransform(166.6,240);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iSCSQiRCRi8BQQjEBSjVAAQjVAAjDhSQi8hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjDQBQi9CRiSQCSiRC8hQQDDhSDVAAQDVAADEBSQC8BQCRCRQCSCSBQC9QBSDDAADUg");
	this.shape_578.setTransform(166.6,240);

	var maskedShapeInstanceList = [this.shape_483,this.shape_484,this.shape_485,this.shape_486,this.shape_487,this.shape_488,this.shape_489,this.shape_490,this.shape_491,this.shape_492,this.shape_493,this.shape_494,this.shape_495,this.shape_496,this.shape_497,this.shape_498,this.shape_499,this.shape_500,this.shape_501,this.shape_502,this.shape_503,this.shape_504,this.shape_505,this.shape_506,this.shape_507,this.shape_508,this.shape_509,this.shape_510,this.shape_511,this.shape_512,this.shape_513,this.shape_514,this.shape_515,this.shape_516,this.shape_517,this.shape_518,this.shape_519,this.shape_520,this.shape_521,this.shape_522,this.shape_523,this.shape_524,this.shape_525,this.shape_526,this.shape_527,this.shape_528,this.shape_529,this.shape_530,this.shape_531,this.shape_532,this.shape_533,this.shape_534,this.shape_535,this.shape_536,this.shape_537,this.shape_538,this.shape_539,this.shape_540,this.shape_541,this.shape_542,this.shape_543,this.shape_544,this.shape_545,this.shape_546,this.shape_547,this.shape_548,this.shape_549,this.shape_550,this.shape_551,this.shape_552,this.shape_553,this.shape_554,this.shape_555,this.shape_556,this.shape_557,this.shape_558,this.shape_559,this.shape_560,this.shape_561,this.shape_562,this.shape_563,this.shape_564,this.shape_565,this.shape_566,this.shape_567,this.shape_568,this.shape_569,this.shape_570,this.shape_571,this.shape_572,this.shape_573,this.shape_574,this.shape_575,this.shape_576,this.shape_577,this.shape_578];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_483}]},16).to({state:[{t:this.shape_484}]},1).to({state:[{t:this.shape_485}]},1).to({state:[{t:this.shape_486}]},1).to({state:[{t:this.shape_487}]},1).to({state:[{t:this.shape_488}]},1).to({state:[{t:this.shape_489}]},1).to({state:[{t:this.shape_490}]},1).to({state:[{t:this.shape_491}]},1).to({state:[{t:this.shape_492}]},1).to({state:[{t:this.shape_493}]},1).to({state:[{t:this.shape_494}]},1).to({state:[{t:this.shape_495}]},1).to({state:[{t:this.shape_496}]},1).to({state:[{t:this.shape_497}]},1).to({state:[{t:this.shape_498}]},1).to({state:[{t:this.shape_499}]},1).to({state:[{t:this.shape_500}]},1).to({state:[{t:this.shape_501}]},1).to({state:[{t:this.shape_502}]},1).to({state:[{t:this.shape_503}]},1).to({state:[{t:this.shape_504}]},1).to({state:[{t:this.shape_505}]},1).to({state:[{t:this.shape_506}]},1).to({state:[{t:this.shape_507}]},1).to({state:[{t:this.shape_508}]},1).to({state:[{t:this.shape_509}]},1).to({state:[{t:this.shape_510}]},1).to({state:[{t:this.shape_511}]},1).to({state:[{t:this.shape_512}]},1).to({state:[{t:this.shape_513}]},1).to({state:[{t:this.shape_514}]},1).to({state:[{t:this.shape_515}]},1).to({state:[{t:this.shape_516}]},1).to({state:[{t:this.shape_517}]},1).to({state:[{t:this.shape_518}]},1).to({state:[{t:this.shape_519}]},1).to({state:[{t:this.shape_520}]},1).to({state:[{t:this.shape_521}]},1).to({state:[{t:this.shape_522}]},1).to({state:[{t:this.shape_523}]},1).to({state:[{t:this.shape_524}]},1).to({state:[{t:this.shape_525}]},1).to({state:[{t:this.shape_526}]},1).to({state:[{t:this.shape_527}]},1).to({state:[{t:this.shape_528}]},1).to({state:[{t:this.shape_529}]},1).to({state:[{t:this.shape_530}]},1).to({state:[{t:this.shape_531}]},1).to({state:[{t:this.shape_532}]},1).to({state:[{t:this.shape_533}]},1).to({state:[{t:this.shape_534}]},1).to({state:[{t:this.shape_535}]},1).to({state:[{t:this.shape_536}]},1).to({state:[{t:this.shape_537}]},1).to({state:[{t:this.shape_538}]},1).to({state:[{t:this.shape_539}]},1).to({state:[{t:this.shape_540}]},1).to({state:[{t:this.shape_541}]},1).to({state:[{t:this.shape_542}]},1).to({state:[{t:this.shape_543}]},1).to({state:[{t:this.shape_544}]},1).to({state:[{t:this.shape_545}]},1).to({state:[{t:this.shape_546}]},1).to({state:[{t:this.shape_547}]},1).to({state:[{t:this.shape_548}]},1).to({state:[{t:this.shape_549}]},1).to({state:[{t:this.shape_550}]},1).to({state:[{t:this.shape_551}]},1).to({state:[{t:this.shape_552}]},1).to({state:[{t:this.shape_553}]},1).to({state:[{t:this.shape_554}]},1).to({state:[{t:this.shape_555}]},1).to({state:[{t:this.shape_556}]},1).to({state:[{t:this.shape_557}]},1).to({state:[{t:this.shape_558}]},1).to({state:[{t:this.shape_559}]},1).to({state:[{t:this.shape_560}]},1).to({state:[{t:this.shape_561}]},1).to({state:[{t:this.shape_562}]},1).to({state:[{t:this.shape_563}]},1).to({state:[{t:this.shape_564}]},1).to({state:[{t:this.shape_565}]},1).to({state:[{t:this.shape_566}]},1).to({state:[{t:this.shape_567}]},1).to({state:[{t:this.shape_568}]},1).to({state:[{t:this.shape_569}]},1).to({state:[{t:this.shape_570}]},1).to({state:[{t:this.shape_571}]},1).to({state:[{t:this.shape_572}]},1).to({state:[{t:this.shape_573}]},1).to({state:[{t:this.shape_574}]},1).to({state:[{t:this.shape_575}]},1).to({state:[{t:this.shape_576}]},1).to({state:[{t:this.shape_577}]},1).to({state:[{t:this.shape_578}]},1).to({state:[]},1).wait(80));

	// 波1
	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f().s("#000000").p("AAZAAQAAAKgHAIQgIAHgKAAQgJAAgIgHQgHgIAAgKQAAgKAHgHQAIgHAJAAQAKAAAIAHQAHAHAAAKg");
	this.shape_579.setTransform(120,240);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f().s("#000000").p("AgiAAQAAgNALgKQAJgKAOAAQAOAAAKAKQALAKAAANQAAAOgLAKQgKAKgOAAQgOAAgJgKQgLgKAAgOg");
	this.shape_580.setTransform(120,240);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f().s("#000000").p("AgrAAQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNQgNgNAAgSg");
	this.shape_581.setTransform(120.025,240.025);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f().s("#000000").p("Ag0AAQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPQgPgQAAgWg");
	this.shape_582.setTransform(120,240);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f().s("#000000").p("Ag+AAQAAgZATgSQASgTAZAAQAZAAATATQATASAAAZQAAAagTASQgTATgZAAQgZAAgSgTQgTgSAAgag");
	this.shape_583.setTransform(120,240);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f().s("#000000").p("AhHAAQAAgdAVgVQAVgVAdAAQAeAAAUAVQAWAVAAAdQAAAdgWAWQgUAVgeAAQgdAAgVgVQgVgWAAgdg");
	this.shape_584.setTransform(120,240);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f().s("#000000").p("AhQAAQAAghAXgYQAYgXAhAAQAhAAAYAXQAYAYAAAhQAAAhgYAYQgYAYghAAQghAAgYgYQgXgYAAghg");
	this.shape_585.setTransform(120.025,240.025);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f().s("#000000").p("AhZAAQAAglAagaQAagbAlAAQAmAAAaAbQAbAaAAAlQAAAmgbAaQgaAbgmAAQglAAgagbQgagaAAgmg");
	this.shape_586.setTransform(120,240);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f().s("#000000").p("AhjAAQAAgpAegdQAcgdApAAQAqAAAcAdQAeAdAAApQAAAqgeAdQgcAdgqAAQgpAAgcgdQgegdAAgqg");
	this.shape_587.setTransform(120,240);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f().s("#000000").p("AhtAAQAAgtAgggQAhgfAsAAQAtAAAgAfQAgAgAAAtQAAAtggAgQggAggtAAQgsAAghggQggggAAgtg");
	this.shape_588.setTransform(120,240);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f().s("#000000").p("Ah2AAQAAgwAjgjQAjgjAwAAQAxAAAjAjQAjAjAAAwQAAAxgjAjQgjAjgxAAQgwAAgjgjQgjgjAAgxg");
	this.shape_589.setTransform(120.025,240.025);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f().s("#000000").p("Ah/AAQAAg0AmgmQAlglA0AAQA1AAAmAlQAlAmAAA0QAAA1glAmQgmAlg1AAQg0AAglglQgmgmAAg1g");
	this.shape_590.setTransform(120,240);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f().s("#000000").p("AiJAAQAAg4AogpQApgoA4AAQA5AAAoAoQApApAAA4QAAA5gpAoQgoApg5AAQg4AAgpgpQgogoAAg5g");
	this.shape_591.setTransform(120,240);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f().s("#000000").p("AiSAAQAAg8ArgrQArgrA8AAQA9AAAqArQAsArAAA8QAAA9gsAqQgqAsg9AAQg8AAgrgsQgrgqAAg9g");
	this.shape_592.setTransform(120,240);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f().s("#000000").p("AibAAQAAhAAtguQAugtBAAAQBAAAAuAtQAuAuAABAQAABAguAuQguAuhAAAQhAAAguguQgtguAAhAg");
	this.shape_593.setTransform(120.025,240.025);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f().s("#000000").p("AikAAQAAhDAvgyQAygwBDAAQBEAAAxAwQAxAyAABDQAABEgxAxQgxAxhEAAQhDAAgygxQgvgxAAhEg");
	this.shape_594.setTransform(120,240);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f().s("#000000").p("ACvAAQAABJg0AyQgyA0hJAAQhIAAgzg0QgzgyAAhJQAAhIAzgzQAzgzBIAAQBJAAAyAzQA0AzAABIg");
	this.shape_595.setTransform(120,240);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f().s("#000000").p("Ai5AAQAAglAOgiQANgfAagcQAcgbAegNQAjgPAnAAQAmAAAiANQAfAOAbAaQAbAbAOAfQAPAhAAAmQAAACAAABQAAAmgNAiQgOAfgaAaQgBACgBABQgZAagfANQgjAPgoAAQglAAgigNQgfgOgbgaQgBgBgBgBQgagZgNggQgOghgBgpg");
	this.shape_596.setTransform(120,240);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f().s("#000000").p("AjEAAQAAgoAPgjQAOghAcgdQAcgdAhgOQAkgQAqAAQAoAAAjAOQAiAPAdAbQAcAdAPAhQAQAjAAAoQAAACAAABQAAApgOAjQgPAhgbAcQgBABgCABQgaAbghAPQgkAQgrAAQgnAAgjgOQgjgOgcgcQAAgBgCgBQgbgbgOghQgQgkAAgrg");
	this.shape_597.setTransform(120,240);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f().s("#000000").p("AjPAAQAAgqAQglQAOgkAegeQAegeAjgPQAmgRAsAAQArAAAlAPQAkAPAeAeQAeAeAPAjQARAkAAArQAAACAAABQAAArgPAlQgPAkgeAdQAAABgCABQgcAdgjAPQgmARgtAAQgqAAglgPQgkgPgdgeQgCAAgBgBQgcgdgPgjQgRgmAAgtg");
	this.shape_598.setTransform(120,240);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f().s("#000000").p("AjaAAQAAgsAQgnQAQgmAfggQAggfAkgRQAogRAvAAQAtABAnAPQAmAQAfAfQAfAgARAkQARAoABAsQAAACAAACQgBAsgPAnQgQAmgeAfQgCABgBABQgeAegkAQQgpASgvAAQgsAAgngQQgmgQgfgeQgBgCgBgBQgegegRgkQgQgogBgwg");
	this.shape_599.setTransform(120,240);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f().s("#000000").p("AjlAAQAAguARgpQARgoAhgiQAhggAmgSQAqgRAxAAQAwAAAoAQQAoARAiAhQAgAgARAnQASApAAAwQAAABAAACQAAAvgQAoQgRAoggAhQgBAAgBACQggAfgmARQgrASgxAAQguAAgpgQQgogRghggQgBgBgBgCQgggegRgnQgRgrgBgxg");
	this.shape_600.setTransform(120,240);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f().s("#000000").p("AjvAAQAAgwARgsQASgpAhgjQAjgiApgTQAsgTAzAAQAyAAArASQApARAjAiQAiAjASAoQATAsABAyQAAABAAACQAAAwgSAsQgRApgiAiQgBABgCACQghAhgoARQgtAUgzAAQgxAAgrgSQgqgRghgiQgCgBgBgCQgggggTgpQgSgsAAg0g");
	this.shape_601.setTransform(120,240);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f().s("#000000").p("Aj7AAQAAgzATgtQASgsAkgkQAkgkArgTQAugUA1AAQA0AAAtATQAsATAkAjQAkAkASAqQAUAuABA0QAAABAAACQAAAzgTAtQgTAsgjAjQgBACgBABQgiAigrASQgvAUg1AAQgzAAgtgSQgrgTglgjQgBgBgBgBQgigigTgrQgTgugBg2g");
	this.shape_602.setTransform(120,240);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f().s("#000000").p("AkGAAQAAg1AUgvQATguAlgmQAmglAsgUQAxgVA3AAQA2AAAvAUQAuATAlAlQAmAmATAsQAVAvABA3QAAABAAACQAAA1gUAvQgTAuglAlQgBABgCABQgkAlgsASQgxAWg3AAQg1AAgvgUQgugTglglQgBgBgCgCQgkgkgTgsQgUgwgBg4g");
	this.shape_603.setTransform(120,240);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f().s("#000000").p("AkQAAQAAg3AUgyQAUgvAmgoQAognAvgUQAygVA5AAQA5AAAxAUQAvAUAoAnQAmAnAVAuQAVAyAAA4QAAABAAACQAAA4gUAxQgUAvgmAmQgCACgBABQgmAlguAUQgyAXg6AAQg3AAgxgVQgwgUgngmQgBgBgCgCQglglgUgvQgVgyAAg6g");
	this.shape_604.setTransform(120,240);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f().s("#000000").p("AkcAAQAAg5AWgzQAVgyAogqQApgoAwgVQA1gWA7AAQA6AAAzAVQAyAVApAoQApApAVAwQAWAzAAA7QAAABAAACQAAA5gVAzQgVAygnAoQgCACgCACQgmAmgwAVQg1AWg8AAQg5AAg0gVQgygVgognQgBgCgCgBQgmgngVgwQgWg0gBg9g");
	this.shape_605.setTransform(120,240);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f().s("#000000").p("AknAAQAAg8AXg1QAVg0AqgqQAqgqAzgWQA2gYA+AAQA9ABA1AWQA0AVAqAqQApAqAXAyQAXA2ABA9QAAABAAACQgBA8gWA1QgVA0gpApQgDACgBACQgoAngyAWQg3AYg+AAQg7AAg2gXQgzgWgrgoQAAgCgCgBQgogpgWgyQgXg2gBg/g");
	this.shape_606.setTransform(120,240);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f().s("#000000").p("AkxAAQAAg+AXg3QAWg2ArgsQAtgrA0gXQA4gYBAAAQA/AAA3AXQA2AWAsArQArAtAXAzQAYA4AAA/QAAABAAACQAAA+gXA3QgWA2grAqQgCACgCACQgpApg0AXQg4AYhBAAQg+AAg3gXQg2gWgrgrQgCgCgBgBQgqgpgWg1QgYg5AAhAg");
	this.shape_607.setTransform(120,240);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f().s("#000000").p("Ak8AAQAAhAAYg6QAXg3AtgtQAtgtA3gYQA6gZBCAAQBBAAA6AYQA3AXAtAsQAtAvAYA1QAZA6AABBQAAACAAABQAABBgYA5QgXA4gsAsQgCABgCACQgrArg1AXQg7AZhDAAQhAAAg6gXQg3gYgtgsQgCgCgBgBQgqgsgYg1QgZg7AAhDg");
	this.shape_608.setTransform(120,240);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f().s("#000000").p("AlHAAQAAhCAZg8QAYg5AugwQAvguA4gYQA9gaBEAAQBEAAA7AZQA5AYAvAuQAvAvAYA4QAaA7AABEQAAACAAABQAABDgZA7QgYA5guAuQgBACgDACQgsAsg4AYQg9AahEAAQhCAAg8gYQg6gZgtgtQgCgCgBgBQgtgtgYg5Qgag8AAhFg");
	this.shape_609.setTransform(120,240);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f().s("#000000").p("AlSAAQAAhEAag+QAZg8AvgwQAxgwA6gZQA+gbBHAAQBGAAA9AaQA8AZAwAvQAwAxAZA6QAaA9ABBGQAAACAAABQAABFgaA9QgZA8gvAvQgCACgCACQgtAug6AYQg/AbhHAAQhFAAg9gZQg7gZgwgwQgCgCgCgBQgtgugZg6Qgag+gBhIg");
	this.shape_610.setTransform(120,240);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f().s("#000000").p("AldAAQAAhHAbhAQAZg9AygyQAygyA8gaQBBgbBIAAQBIAABAAbQA9AZAyAyQAxAyAaA8QAbBAABBHQAAACAAABQAABHgbBAQgZA9gxAxQgCACgDACQguAug8AbQhBAbhJAAQhHAAg/gaQg+gagxgxQgCgBgCgCQgvgwgag8QgbhBAAhJg");
	this.shape_611.setTransform(120,240);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f().s("#000000").p("AloAAQAAhIAchCQAahAAzgzQAzg0A+gbQBEgcBKAAQBLAABAAcQBAAaAzAzQA0A0AaA9QAdBCAABKQAAACAAACQAABIgcBBQgaBAgyAzQgDACgBACQgyAwg8AbQhEAchLAAQhIAAhDgbQg/gcgzgyQgBgBgCgBQgxgygbg9QgchDAAhMg");
	this.shape_612.setTransform(120,240);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f().s("#000000").p("AlzAAQAAhLAdhEQAbhBA0g2QA2g0A/gcQBFgdBNAAQBNAABDAdQBBAbA1A0QA0A1AcBAQAeBEAABMQAAACAAACQAABLgdBDQgbBBg0A0QgCADgCACQgzAxg+AcQhFAdhOAAQhLAAhEgcQhCgcg0g0QgBgBgCgCQgygzgcg/QgdhFAAhOg");
	this.shape_613.setTransform(120,240);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f().s("#000000").p("Al+AAQAAhNAehGQAbhEA2g2QA3g2BCgdQBHgeBPAAQBPAABFAeQBEAbA2A2QA2A3AcBCQAfBGAABOQAAACAAACQAABNgeBFQgcBEg1A1QgDACgBADQg0AyhBAdQhHAehQAAQhNAAhGgdQhEgdg2g1QgBgBgCgCQg0g1gchBQgehHAAhQg");
	this.shape_614.setTransform(120,240);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f().s("#000000").p("AmJAAQAAhQAehIQAdhFA3g4QA5g4BEgdQBJgfBRAAQBRAABHAeQBGAdA3A3QA4A5AdBDQAfBIABBRQAAACAAABQgBBQgdBHQgeBGg2A3QgDACgCACQg1A1hDAcQhJAghSAAQhQAAhIgeQhFgeg3g2QgCgCgCgCQg1g2gdhDQgfhJAAhSg");
	this.shape_615.setTransform(120.025,240.025);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f().s("#000000").p("AmUAAQAAhSAghKQAehHA4g6QA6g5BGgeQBKgfBUAAQBTAABKAeQBHAfA5A4QA6A7AeBFQAfBJAABTQAAACAAACQAABRgeBKQgfBHg3A4QgDADgCACQg3A2hFAeQhLAfhUAAQhSAAhKgeQhHgeg5g4QgCgCgBgCQg3g3gehGQgghLAAhUg");
	this.shape_616.setTransform(120,240);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f().s("#000000").p("AmfAAQAAhUAhhMQAehJA6g7QA8g7BIgfQBMghBWAAQBWAABLAgQBJAfA7A6QA7A9AfBGQAhBMAABVQAAACAAACQAABUggBLQgfBJg6A7QgCACgDACQg4A4hHAeQhMAhhXAAQhUAAhMggQhKgfg6g6QgCgBgCgDQg3g4gfhHQghhNAAhXg");
	this.shape_617.setTransform(120,240);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f().s("#000000").p("AmqAAQAAhWAihOQAfhMA7g8QA9g8BKggQBPgiBYAAQBYAABNAhQBMAgA8A7QA8A+AgBJQAhBOABBXQAAACAAACQAABWghBNQggBMg7A7QgCADgDACQg6A4hIAgQhQAhhYAAQhWAAhOggQhMggg8g7QgCgCgBgCQg6g6gfhJQghhPgBhZg");
	this.shape_618.setTransform(120,240);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f().s("#000000").p("Am1AAQAAhYAjhQQAfhOA9g+QA/g+BMggQBRgjBaAAQBaABBPAhQBOAgA9A9QA/BAAgBKQAiBRABBZQAAACAAACQgBBYghBPQggBOg9A9QgDADgCACQg7A6hLAgQhRAjhbAAQhZAAhQgiQhNghg9g8QgCgCgCgCQg7g8gghLQgihRgBhbg");
	this.shape_619.setTransform(120,240);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f().s("#000000").p("Am/AAQAAhbAjhRQAghQA/hAQBBg+BNgiQBTgjBcAAQBdAABQAiQBQAhBAA/QA+BBAiBMQAjBTAABbQAAACAAACQAABbgiBRQghBQg/A+QgCADgDACQg8A7hNAhQhTAkhdAAQhbAAhRgjQhQghg/g+QgCgDgCgCQg8g8ghhOQgjhTAAhdg");
	this.shape_620.setTransform(120,240);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f().s("#000000").p("AnLAAQAAhcAkhVQAihRBAhBQBChBBQgiQBVgkBeAAQBeAABUAjQBRAiBBBAQBBBDAiBOQAkBUAABeQAAACAAACQAABcgjBUQgjBRg/BBQgDACgCADQg/A8hNAiQhWAkhfAAQhcAAhVgjQhSgjg/g/QgDgCgCgCQg+g/ghhOQgkhVgBhgg");
	this.shape_621.setTransform(120,240);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f().s("#000000").p("AnWAAQAAhfAlhXQAjhTBChCQBDhCBRgjQBXgmBhAAQBhABBWAkQBTAjBCBCQBCBDAjBRQAlBXABBfQAAACAAACQgBBfgkBWQgjBThCBBQgCADgDACQhAA/hQAiQhXAmhhAAQhfAAhXglQhTgjhChBQgBgDgDgCQg+g/gjhSQglhWgBhig");
	this.shape_622.setTransform(120,240);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f().s("#000000").p("AnhAAQAAhhAmhZQAkhVBDhEQBFhEBTgjQBZgnBjAAQBjABBYAlQBVAkBDBDQBFBFAjBTQAmBYABBiQAAACAAACQgBBhglBXQgkBWhCBDQgEADgCACQhBBAhSAkQhaAlhjAAQhhAAhZglQhVgkhDhDQgCgCgCgBQhBhDgjhSQgmhZgBhkg");
	this.shape_623.setTransform(120,240);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f().s("#000000").p("AnrAAQAAhkAmhaQAkhXBFhGQBHhFBVgkQBbgnBlAAQBmAABZAmQBXAkBGBFQBFBHAkBVQAnBaAABkQAAACAAACQAABkgmBZQgkBYhFBDQgDADgDAEQhCBBhUAkQhbAmhmAAQhjAAhbgmQhXgkhFhFQgCgCgCgCQhChDgkhVQgnhbAAhmg");
	this.shape_624.setTransform(120,240);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f().s("#000000").p("An2AAQAAhmAnhcQAlhZBGhIQBIhGBYglQBdgoBnAAQBnAABcAnQBZAlBHBGQBHBKAlBVQAoBdAABmQAAACAAADQAABkgnBcQglBZhGBGQgDAEgDADQhEBBhVAmQheAnhoAAQhmAAhcgnQhagmhGhFQgCgCgCgCQhEhFgkhWQgoheAAhog");
	this.shape_625.setTransform(120,240);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f().s("#000000").p("AoBAAQAAhoAoheQAmhcBHhIQBKhJBZglQBfgpBqAAQBqAABdAoQBcAmBIBIQBJBKAlBYQApBfAABoQAAACAAADQAABngoBdQgmBchIBHQgCAEgEACQhFBEhXAmQhgAohqAAQhoAAhfgoQhbgmhIhIQgCgBgCgCQhFhHglhZQgpheAAhrg");
	this.shape_626.setTransform(120,240);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f().s("#000000").p("AoMAAQAAhqAphgQAnheBJhKQBLhJBcgnQBhgqBrAAQBsABBfAoQBeAnBKBJQBJBMAnBaQApBhABBqQAAACAAADQgBBpgoBgQgnBdhIBJQgEADgDADQhGBFhaAnQhiAphsAAQhqAAhggpQhegnhJhIQgDgDgCgCQhGhIgmhaQgqhiAAhsg");
	this.shape_627.setTransform(120,240);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f().s("#000000").p("AoXAAQAAhsAphjQAohfBLhLQBNhMBdgnQBkgrBtAAQBvAABhAqQBfAoBLBLQBMBNAnBcQArBiAABtQAAACAAADQAABsgqBhQgoBghKBKQgDADgEADQhHBGhcAoQhjAqhvAAQhsAAhjgqQhfgohLhKQgCgCgDgCQhIhJgmhdQgrhjAAhvg");
	this.shape_628.setTransform(120,240);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f().s("#000000").p("AoiAAQAAhvAqhkQAqhhBLhOQBPhMBfgpQBlgrBwAAQBxAABjArQBhApBNBLQBNBQAoBeQAsBlAABuQAAACAAADQAABugrBjQgpBhhLBNQgEADgDADQhJBIheAoQhlArhxAAQhvAAhkgrQhigohMhMQgCgCgDgDQhIhKgphfQgrhlAAhxg");
	this.shape_629.setTransform(120,240);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f().s("#000000").p("AotAAQAAhwArhoQAqhjBOhOQBPhPBigpQBngsByAAQBzAABmAsQBjApBOBOQBPBRApBgQAsBmAAByQAAABAAADQAABwgsBlQgpBkhNBNQgEADgEAEQhLBJhfApQhnAshzAAQhwAAhogsQhjgphNhNQgDgDgCgCQhLhMgphgQgshoAAhzg");
	this.shape_630.setTransform(120,240);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f().s("#000000").p("Ao4AAQAAhzAshpQArhlBPhQQBRhQBjgqQBqgtB0AAQB1AABoAtQBlAqBQBPQBQBSAqBiQAtBpAAB0QAAABAAADQAABygtBoQgqBlhPBPQgEADgDAEQhMBLhhApQhqAth1AAQhzAAhogtQhmgqhPhPQgCgCgDgCQhMhOgqhiQgthqAAh1g");
	this.shape_631.setTransform(120,240);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f().s("#000000").p("ApDAAQAAh1AthrQArhnBRhRQBThSBlgrQBrgtB3AAQB3AABqAsQBnArBRBRQBSBUArBkQAtBrAAB2QAAACAAACQAAB0gsBqQgsBnhQBRQgDAEgEADQhOBLhjArQhsAth3AAQh1AAhrgsQhngshRhQQgDgCgCgDQhOhPgqhkQguhsAAh3g");
	this.shape_632.setTransform(120,240);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f().s("#000000").p("ApOAAQAAh4AuhsQAshpBThUQBUhSBngsQBtgvB5AAQB6ABBrAtQBpAsBTBTQBUBVArBlQAvBtAAB5QAAACAAACQgBB3gtBrQgsBphTBSQgDAEgDAEQhQBNhlArQhtAvh6AAQh3AAhtguQhqgshShSQgCgDgDgCQhPhRgrhmQgvhtAAh6g");
	this.shape_633.setTransform(120,240);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f().s("#000000").p("ApZAAQAAh6AvhuQAthsBUhUQBWhUBpgtQBvgwB7AAQB8ABBtAuQBsAtBUBUQBUBXAtBnQAwBwAAB6QAAACAAACQgBB5guBuQguBrhSBTQgEAEgEADQhRBPhmAsQhxAvh7AAQh6AAhuguQhsguhUhTQgCgCgDgDQhQhSgshnQgwhwAAh8g");
	this.shape_634.setTransform(120,240);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f().s("#000000").p("ApkAAQAAh7AwhyQAuhtBWhWQBXhWBqgtQBygxB9AAQB/ABBvAvQBtAuBWBWQBWBYAtBqQAxBwAAB9QAAACAAACQgBB8gvBvQguBthVBVQgDAEgEADQhTBQhpAtQhxAxh+AAQh8AAhxgwQhtguhVhVQgDgDgCgCQhShTgthrQgwhxgBh+g");
	this.shape_635.setTransform(120,240);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f().s("#000000").p("ApvAAQAAh+AxhzQAvhvBWhYQBZhXBuguQBzgyB/AAQCAABByAwQBvAvBXBWQBZBbAtBrQAxBzABB/QAAACAAACQgBB9gwByQgvBvhWBXQgEAEgEADQhTBShsAtQhzAyiAAAQh+AAhzgxQhvgvhXhXQgDgCgCgDQhUhVguhrQgwh0gBiAg");
	this.shape_636.setTransform(120,240);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f().s("#000000").p("Ap6AAQAAiAAyh2QAvhwBZhZQBbhaBuguQB2gyCBAAQCDAAB0AxQBwAvBZBZQBaBcAuBtQAyB1AACBQAAACAAACQAACAgxBzQgwBxhYBZQgDADgEAEQhVBThtAuQh2AyiCAAQiAAAh2gxQhxgwhYhYQgDgCgCgDQhVhWgvhuQgxh1gBiDg");
	this.shape_637.setTransform(120,240);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f().s("#000000").p("AqFAAQAAiDAzh3QAwhzBahaQBchbBxgvQB3g0CEAAQCFABB2AyQBzAwBaBaQBbBeAvBuQAzB4ABCDQAAACAAACQgBCCgyB2QgwBzhaBaQgEADgEAEQhWBVhvAuQh3A0iFAAQiDAAh2gzQh0gxhahZQgCgDgDgCQhWhYgwhwQgyh3gBiFg");
	this.shape_638.setTransform(120,240);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f().s("#000000").p("AqQAAQAAiEA0h6QAxh1BbhbQBehdBygwQB6g1CGAAQCIABB3AyQB1AyBbBcQBdBfAwBwQA0B5ABCGQAAACAAACQgBCFgyB3QgyB1hbBbQgEAEgEAEQhZBVhvAwQh7A0iGAAQiEAAh6gyQh1gyhbhbQgDgDgCgDQhZhZgwhyQgzh5gBiHg");
	this.shape_639.setTransform(120,240);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f().s("#000000").p("AqaAAQAAiHA0h7QAyh3BcheQBghdB0gxQB8g1CIAAQCKAAB5AzQB3AzBeBcQBeBhAwBzQA1B7AACIQAAACAAACQAACHgzB5QgzB4hcBcQgFAEgEAEQhZBXhyAwQh8A1iJAAQiHAAh7gzQh3gzhdhcQgCgDgEgDQhZhbgxhzQg0h8AAiJg");
	this.shape_640.setTransform(120,240);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f().s("#000000").p("AqlAAQAAiJA1h9QAyh5BfhfQBhhfB2gyQB+g2CKAAQCMAAB7A0QB5A0BfBeQBfBiAyB1QA2B9AACKQAAACAAACQAACJg0B8Qg0B4hdBfQgFAEgEADQhbBZh0AxQh+A2iLAAQiJAAh9g0Qh6g0hehdQgDgDgCgDQhbhcgyh2Qg1h+AAiLg");
	this.shape_641.setTransform(120,240);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f().s("#000000").p("AqwAAQAAiMA2h/QAzh7BghgQBihhB5gzQB/g2CNAAQCOAAB+A1QB7A0BgBgQBhBkAyB3QA3B/AACMQAAACAAACQAACLg1B+Qg0B7hgBfQgEAFgFADQhcBah2AzQiAA2iNAAQiLAAiAg1Qh7g0hghgQgDgDgCgCQhchegzh4Qg2h/AAiOg");
	this.shape_642.setTransform(120,240);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f().s("#000000").p("Aq7AAQAAiOA2iBQA1h9BhhhQBkhjB7g0QCCg3COAAQCQABCAA1QB9A1BhBhQBkBmAyB5QA4CBAACOQAAACAAACQgBCNg1CAQg1B9hhBhQgEAFgFAEQheBbh4AzQiCA3iPAAQiOAAiBg2Qh9g1hihhQgCgDgDgDQhehggzh4Qg3iDAAiPg");
	this.shape_643.setTransform(120,240);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f().s("#000000").p("ArGAAQAAiPA3iEQA2h/BjhkQBlhjB8g1QCFg4CQAAQCTAACBA3QB/A2BkBjQBkBnA0B6QA4CDAACRQAAACAAACQAACQg3CBQg2CAhjBiQgEAEgFAFQhfBch5A0QiEA4iSAAQiQAAiDg3Qh/g3hjhhQgDgDgDgDQhfhhg0h7Qg4iEAAiSg");
	this.shape_644.setTransform(120,240);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f().s("#000000").p("ArRAAQAAiSA4iGQA3iABkhlQBnhmB+g1QCGg5CTAAQCVABCEA3QCAA3BlBkQBmBpA1B8QA5CGAACSQAAACAAADQAACRg4CEQg3CAhkBkQgEAFgEAEQhhBfh8A0QiGA5iUAAQiSAAiGg4QiBg3hkhkQgDgCgDgDQhghjg1h9Qg5iGAAiUg");
	this.shape_645.setTransform(120,240);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f().s("#000000").p("ArcAAQAAiUA5iHQA3iEBmhmQBphnCAg2QCIg6CVAAQCXABCFA4QCEA3BmBmQBnBqA2B/QA6CHAACVQAAACAAADQgBCTg4CFQg4CEhlBmQgFAEgEAEQhiBfh+A2QiIA6iWAAQiUAAiIg5QiDg4hmhlQgDgDgDgDQhihkg1h/Qg6iIAAiWg");
	this.shape_646.setTransform(120,240);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f().s("#000000").p("ArnAAQAAiXA6iJQA4iFBnhoQBqhoCDg3QCKg7CXAAQCZABCIA5QCFA5BoBmQBpBtA2B/QA7CKAACXQAAACAAADQgBCVg5CIQg5CFhmBnQgFAEgEAFQhkBhiAA2QiKA7iYAAQiXAAiJg6QiFg5hohnQgDgCgCgDQhkhmg2iBQg7iKAAiYg");
	this.shape_647.setTransform(120,240);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f().s("#000000").p("AryAAQAAiYA7iMQA5iHBphqQBrhpCEg5QCMg6CaAAQCcAACJA6QCHA5BqBpQBpBuA4CCQA7CLAACZQAAADAAACQAACYg6CJQg5CIhpBoQgFAFgEAEQhlBiiCA4QiMA6iaAAQiYAAiMg6QiHg5hphpQgDgDgDgCQhlhng4iEQg7iMAAiag");
	this.shape_648.setTransform(120,240);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f().s("#000000").p("Ar9AAQAAibA8iOQA6iIBqhrQBthsCHg5QCNg8CcAAQCeABCMA7QCIA6BrBqQBsBvA4CEQA9COAACbQAAADAAACQgBCag7CMQg6CIhqBrQgEAFgFAEQhnBjiEA5QiNA8idAAQibAAiOg8QiJg6hqhqQgDgDgDgDQhmhpg5iEQg8iOAAidg");
	this.shape_649.setTransform(120,240);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f().s("#000000").p("AsIAAQAAidA9iQQA6iLBshsQBvhtCIg6QCQg9CeAAQCgABCOA8QCLA6BsBtQBuBwA5CGQA9CQAACeQAAACAAACQgBCcg8COQg7CLhsBsQgEAEgFAFQhoBliFA5QiRA8ieAAQidAAiQg8QiLg7hshsQgDgDgDgCQhohqg5iHQg9iQAAifg");
	this.shape_650.setTransform(120,240);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f().s("#000000").p("AsTAAQAAifA+iSQA7iNBuhuQBwhuCKg7QCSg+CgAAQCjABCPA9QCNA7BuBuQBvByA6CIQA+CRAAChQAAACAAACQgBCfg9CPQg8CNhsBtQgFAFgFAFQhqBmiHA6QiSA+ihAAQifAAiSg+QiNg8huhsQgDgEgDgDQhphrg6iJQg+iSAAihg");
	this.shape_651.setTransform(120,240);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f().s("#000000").p("AseAAQAAiiA/iUQA8iOBvhvQByhxCLg7QCVg/CiAAQCkABCTA+QCOA8BvBvQBxB0A7CJQA/CVAACiQAAACAAACQgBCgg+CTQg8COhvBvQgFAFgEAFQhsBoiIA6QiVA/ijAAQiiAAiUg/QiOg8hvhvQgDgDgEgDQhqhtg7iLQg/iUAAijg");
	this.shape_652.setTransform(120,240);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f().s("#000000").p("AspAAQAAijBAiWQA9iRBwhxQBzhyCOg8QCXg/CkAAQCnAACTA/QCRA9BxBwQByB1A8CMQA/CWAAClQAAACAAACQAACjg/CTQg+CRhvBwQgFAFgFAFQhtBpiKA8QiXA/ilAAQikAAiWg/QiRg+hwhvQgDgEgDgDQhthug7iMQg/iWgBimg");
	this.shape_653.setTransform(120,240);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f().s("#000000").p("As0AAQAAimBBiYQA9iTByhyQB2hzCPg9QCYhBCnAAQCpACCWA/QCTA+ByBxQB0B3A8COQBACYABCnQAAACAAACQgCClg/CWQg+CThxBxQgFAFgFAFQhuBriNA8QiYBBioAAQimAAiYhBQiTg+hyhxQgDgDgDgEQhuhvg8iPQhAiYgBiog");
	this.shape_654.setTransform(120,240);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f().s("#000000").p("As+AAQAAioBBiaQA+iVB0h0QB2h0CSg+QCahBCpAAQCrAACYBBQCVA+BzB0QB2B4A9CQQBBCaAACpQAAACAAACQgBCnhACYQg/CVhzBzQgFAFgFAFQhwBsiOA9QibBBipAAQioAAiahBQiVg/h0hzQgDgDgDgDQhvhyg9iQQhBiaAAiqg");
	this.shape_655.setTransform(120.025,240.025);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f().s("#000000").p("AtJAAQAAirBCicQA/iWB1h2QB4h2CUg+QCchCCrAAQCtAACbBBQCWBAB1B1QB3B7A+CRQBCCbAACsQAAACAAACQAACqhBCaQhACWh1B1QgFAFgFAFQhxBtiRA+QicBCisAAQirAAichCQiWg/h1h1QgEgDgDgEQhwhzg+iSQhCicAAisg");
	this.shape_656.setTransform(120,240);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f().s("#000000").p("AtUAAQAAisBCifQBBiYB2h3QB6h4CVg/QCfhDCtAAQCwAACcBCQCYBBB3B2QB5B9A+CSQBDCfAACtQAAACAAACQAACshCCbQhBCZh2B3QgFAFgGAFQhyBviSA+QifBDiuAAQisAAifhDQiZhBh2h1QgDgDgEgEQhyh0g+iUQhDifAAiug");
	this.shape_657.setTransform(120,240);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f().s("#000000").p("AtfAAQAAivBDigQBCibB3h4QB8h5CXhAQCghECwAAQCyAACeBDQCbBCB4B3QB6B+A/CVQBECgAACwQAAACAAACQAACuhDCeQhCCbh3B4QgGAFgFAFQh0BwiUA/QihBEiwAAQivAAighEQibhBh4h4QgDgDgEgEQhzh1g/iXQhEigAAiwg");
	this.shape_658.setTransform(120,240);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f().s("#000000").p("AtqAAQAAixBEiiQBCidB6h6QB8h6CahBQCjhFCxAAQC1ABCfBDQCdBCB6B6QB7B/BACXQBFCiAACyQAAACAAADQgBCwhDCfQhDCdh5B6QgFAFgFAFQh2ByiWA/QijBFiyAAQixAAiihFQidhCh6h5QgDgDgDgDQh1h4hAiYQhFiiAAizg");
	this.shape_659.setTransform(120,240);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f().s("#000000").p("At1AAQAAizBFikQBDifB7h8QB+h8CchCQClhFCzAAQC3ABChBEQCfBEB8B6QB8CBBBCZQBGCkAAC0QAAACAAADQgBCyhEChQhECgh6B6QgFAFgGAFQh3BziYBBQikBGi1AAQizAAilhGQiehDh7h6QgEgDgDgEQh3h5hBiaQhFikAAi1g");
	this.shape_660.setTransform(120,240);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f().s("#000000").p("AuAAAQAAi2BGilQBEihB8h9QCAh9CdhEQCnhGC2AAQC5ABCjBFQChBEB9B9QB/CCBCCbQBGCmAAC2QAAACAAADQgBC0hFCkQhECgh9B9QgFAFgFAFQh5B1iaBBQimBHi3AAQi2AAilhHQiihDh8h9QgEgDgDgDQh4h6hCidQhGimAAi3g");
	this.shape_661.setTransform(120,240);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f().s("#000000").p("AuLAAQAAi3BHipQBFijB+h+QCBh/CghEQCohHC4AAQC7ABCmBGQCjBFB+B+QCACDBDCeQBHCnAAC5QAAACAAADQgBC2hGCmQhFCjh+B9QgFAGgGAGQh6B2icBBQioBIi5AAQi4AAiohIQijhEh+h+QgDgDgEgEQh5h8hDidQhHipAAi5g");
	this.shape_662.setTransform(120,240);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f().s("#000000").p("AuWAAQAAi6BIirQBFikCAh/QCDiCChhEQCqhIC7AAQC9ABCpBHQCkBFB/CAQCCCFBECfQBICqAAC7QAAADAAACQgBC4hHCpQhGCkh/B/QgGAGgFAGQh7B2ieBDQirBJi7AAQi6AAirhIQikhGiAh/QgDgEgEgDQh6h9hEigQhIiqAAi8g");
	this.shape_663.setTransform(120,240);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f().s("#000000").p("AuhAAQAAi8BJitQBGinCBiBQCFiCCjhFQCshIC9AAQDAAACqBIQCnBGCBCBQCDCHBEChQBICtAAC8QAAADAAACQAAC6hICqQhHCoiACAQgGAGgGAFQh8B5igBDQitBJi9AAQi8AAithIQinhHiAiAQgEgEgEgDQh8h/hEiiQhJitAAi9g");
	this.shape_664.setTransform(120,240);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f().s("#000000").p("AusAAQAAi/BKiuQBHioCCiDQCGiECmhGQCuhKC/AAQDCACCsBIQCoBHCDCCQCFCJBFCiQBKCvAAC/QAAADAAADQgBC8hJCsQhHCoiCCDQgHAGgFAFQh+B6ihBEQivBLjAAAQi/AAiuhKQiphHiCiCQgEgEgDgEQh+iAhFikQhKivAAi/g");
	this.shape_665.setTransform(120,240);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f().s("#000000").p("Au3AAQAAjABLixQBIirCEiEQCHiFCnhHQCxhLDBAAQDEABCuBKQCrBICECEQCGCKBGCkQBLCxAADBQAAADAAADQgBC+hKCuQhJCriDCEQgGAGgFAFQiAB8ijBFQixBKjCAAQjAAAixhKQirhJiEiDQgEgEgDgDQh/iChGilQhLixAAjCg");
	this.shape_666.setTransform(120,240);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f().s("#000000").p("AvCAAQAAjDBMiyQBJitCFiGQCJiHCphHQCzhMDDAAQDGABCwBLQCtBJCGCFQCHCMBHCnQBMCyAADDQAAADAAADQgBDBhLCvQhJCtiFCGQgGAFgGAGQiBB8imBHQiyBMjEAAQjCAAi0hMQishJiGiFQgDgEgEgDQiAiDhHipQhMiyAAjEg");
	this.shape_667.setTransform(120,240);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f().s("#000000").p("AvNAAQAAjFBNi0QBJiwCHiHQCLiHCrhJQC1hNDFAAQDJABCxBMQCwBJCHCHQCJCOBHCoQBNC1AADFQAAADAAADQgBDDhMCyQhKCviGCGQgGAGgGAFQiDB/inBHQi1BNjGAAQjFAAi0hNQiwhKiGiGQgEgEgEgEQiCiEhHiqQhNi1AAjGg");
	this.shape_668.setTransform(120,240);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f().s("#000000").p("AvYAAQAAjHBOi3QBKiwCJiJQCMiKCthJQC3hNDHAAQDLAAC0BNQCwBKCJCJQCLCOBICrQBNC2AADIQAAADAAADQAADFhNC0QhLCwiICJQgGAGgGAGQiDCAiqBHQi2BNjJAAQjHAAi3hNQixhLiIiIQgEgDgEgEQiDiHhIirQhOi2AAjJg");
	this.shape_669.setTransform(120,240);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f().s("#000000").p("AvjAAQAAjKBPi4QBLizCKiKQCOiLCuhKQC5hPDKAAQDNACC2BNQCzBLCKCKQCMCRBJCrQBPC5AADKQAAADAAADQgCDHhNC2QhLCziKCKQgGAGgGAGQiFCAirBJQi5BPjLAAQjKAAi4hPQizhMiKiJQgEgEgEgEQiEiHhJitQhPi5AAjLg");
	this.shape_670.setTransform(120,240);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f().s("#000000").p("AvtAAQAAjLBPi8QBMi0CLiMQCPiNCxhKQC7hPDMAAQDQAAC4BPQC0BMCMCLQCOCSBJCuQBPC7AADMQAAADAAADQAADKhPC3QhMC1iLCLQgGAHgHAGQiHCCisBJQi8BPjMAAQjMAAi7hPQi0hMiMiMQgEgDgDgEQiHiJhJiwQhPi7AAjMg");
	this.shape_671.setTransform(120,240);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f().s("#000000").p("Av4AAQAAjOBPi9QBNi2CNiNQCRiPCzhMQC9hPDOAAQDRABC7BOQC2BNCNCOQCQCTBKCwQBQC9AADOQAAADAAADQgBDLhOC7QhOC2iNCNQgGAHgGAFQiICEivBLQi9BPjPAAQjOAAi9hPQi2hOiNiNQgEgDgEgFQiIiKhLixQhPi9AAjPg");
	this.shape_672.setTransform(120,240);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f().s("#000000").p("AwDAAQAAjQBQi/QBOi4CPiPQCSiQC1hNQC/hQDQAAQDUABC8BPQC4BPCPCOQCRCVBMCyQBQC/AADQQAAADAAADQgBDOhPC8QhPC4iOCPQgGAHgHAFQiJCGixBLQi/BQjRAAQjQAAi/hQQi5hPiOiOQgEgEgEgEQiJiMhMizQhQi/AAjRg");
	this.shape_673.setTransform(120,240);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f().s("#000000").p("AwOAAQAAjTBRjAQBPi7CQiQQCUiRC2hOQDBhRDTAAQDWABC+BQQC7BPCQCQQCSCXBNC0QBRDAAADTQAAADAAADQgBDQhQC+QhPC7iQCPQgGAHgHAGQiLCGizBNQjABRjUAAQjTAAjAhRQi7hPiQiQQgEgEgEgEQiKiNhNi2QhRjBAAjTg");
	this.shape_674.setTransform(120,240);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f().s("#000000").p("AQaAAQAADWhSDDQhQC8iRCSQiSCRi9BQQjDBSjVAAQjUAAjDhSQi9hQiSiRQiRiShQi8QhSjDAAjWQAAjUBSjDQBQi9CRiSQCSiRC9hQQDDhSDUAAQDVAADDBSQC9BQCSCRQCRCSBQC9QBSDDAADUg");
	this.shape_675.setTransform(120,240);

	var maskedShapeInstanceList = [this.shape_579,this.shape_580,this.shape_581,this.shape_582,this.shape_583,this.shape_584,this.shape_585,this.shape_586,this.shape_587,this.shape_588,this.shape_589,this.shape_590,this.shape_591,this.shape_592,this.shape_593,this.shape_594,this.shape_595,this.shape_596,this.shape_597,this.shape_598,this.shape_599,this.shape_600,this.shape_601,this.shape_602,this.shape_603,this.shape_604,this.shape_605,this.shape_606,this.shape_607,this.shape_608,this.shape_609,this.shape_610,this.shape_611,this.shape_612,this.shape_613,this.shape_614,this.shape_615,this.shape_616,this.shape_617,this.shape_618,this.shape_619,this.shape_620,this.shape_621,this.shape_622,this.shape_623,this.shape_624,this.shape_625,this.shape_626,this.shape_627,this.shape_628,this.shape_629,this.shape_630,this.shape_631,this.shape_632,this.shape_633,this.shape_634,this.shape_635,this.shape_636,this.shape_637,this.shape_638,this.shape_639,this.shape_640,this.shape_641,this.shape_642,this.shape_643,this.shape_644,this.shape_645,this.shape_646,this.shape_647,this.shape_648,this.shape_649,this.shape_650,this.shape_651,this.shape_652,this.shape_653,this.shape_654,this.shape_655,this.shape_656,this.shape_657,this.shape_658,this.shape_659,this.shape_660,this.shape_661,this.shape_662,this.shape_663,this.shape_664,this.shape_665,this.shape_666,this.shape_667,this.shape_668,this.shape_669,this.shape_670,this.shape_671,this.shape_672,this.shape_673,this.shape_674,this.shape_675];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_579}]}).to({state:[{t:this.shape_580}]},1).to({state:[{t:this.shape_581}]},1).to({state:[{t:this.shape_582}]},1).to({state:[{t:this.shape_583}]},1).to({state:[{t:this.shape_584}]},1).to({state:[{t:this.shape_585}]},1).to({state:[{t:this.shape_586}]},1).to({state:[{t:this.shape_587}]},1).to({state:[{t:this.shape_588}]},1).to({state:[{t:this.shape_589}]},1).to({state:[{t:this.shape_590}]},1).to({state:[{t:this.shape_591}]},1).to({state:[{t:this.shape_592}]},1).to({state:[{t:this.shape_593}]},1).to({state:[{t:this.shape_594}]},1).to({state:[{t:this.shape_595}]},1).to({state:[{t:this.shape_596}]},1).to({state:[{t:this.shape_597}]},1).to({state:[{t:this.shape_598}]},1).to({state:[{t:this.shape_599}]},1).to({state:[{t:this.shape_600}]},1).to({state:[{t:this.shape_601}]},1).to({state:[{t:this.shape_602}]},1).to({state:[{t:this.shape_603}]},1).to({state:[{t:this.shape_604}]},1).to({state:[{t:this.shape_605}]},1).to({state:[{t:this.shape_606}]},1).to({state:[{t:this.shape_607}]},1).to({state:[{t:this.shape_608}]},1).to({state:[{t:this.shape_609}]},1).to({state:[{t:this.shape_610}]},1).to({state:[{t:this.shape_611}]},1).to({state:[{t:this.shape_612}]},1).to({state:[{t:this.shape_613}]},1).to({state:[{t:this.shape_614}]},1).to({state:[{t:this.shape_615}]},1).to({state:[{t:this.shape_616}]},1).to({state:[{t:this.shape_617}]},1).to({state:[{t:this.shape_618}]},1).to({state:[{t:this.shape_619}]},1).to({state:[{t:this.shape_620}]},1).to({state:[{t:this.shape_621}]},1).to({state:[{t:this.shape_622}]},1).to({state:[{t:this.shape_623}]},1).to({state:[{t:this.shape_624}]},1).to({state:[{t:this.shape_625}]},1).to({state:[{t:this.shape_626}]},1).to({state:[{t:this.shape_627}]},1).to({state:[{t:this.shape_628}]},1).to({state:[{t:this.shape_629}]},1).to({state:[{t:this.shape_630}]},1).to({state:[{t:this.shape_631}]},1).to({state:[{t:this.shape_632}]},1).to({state:[{t:this.shape_633}]},1).to({state:[{t:this.shape_634}]},1).to({state:[{t:this.shape_635}]},1).to({state:[{t:this.shape_636}]},1).to({state:[{t:this.shape_637}]},1).to({state:[{t:this.shape_638}]},1).to({state:[{t:this.shape_639}]},1).to({state:[{t:this.shape_640}]},1).to({state:[{t:this.shape_641}]},1).to({state:[{t:this.shape_642}]},1).to({state:[{t:this.shape_643}]},1).to({state:[{t:this.shape_644}]},1).to({state:[{t:this.shape_645}]},1).to({state:[{t:this.shape_646}]},1).to({state:[{t:this.shape_647}]},1).to({state:[{t:this.shape_648}]},1).to({state:[{t:this.shape_649}]},1).to({state:[{t:this.shape_650}]},1).to({state:[{t:this.shape_651}]},1).to({state:[{t:this.shape_652}]},1).to({state:[{t:this.shape_653}]},1).to({state:[{t:this.shape_654}]},1).to({state:[{t:this.shape_655}]},1).to({state:[{t:this.shape_656}]},1).to({state:[{t:this.shape_657}]},1).to({state:[{t:this.shape_658}]},1).to({state:[{t:this.shape_659}]},1).to({state:[{t:this.shape_660}]},1).to({state:[{t:this.shape_661}]},1).to({state:[{t:this.shape_662}]},1).to({state:[{t:this.shape_663}]},1).to({state:[{t:this.shape_664}]},1).to({state:[{t:this.shape_665}]},1).to({state:[{t:this.shape_666}]},1).to({state:[{t:this.shape_667}]},1).to({state:[{t:this.shape_668}]},1).to({state:[{t:this.shape_669}]},1).to({state:[{t:this.shape_670}]},1).to({state:[{t:this.shape_671}]},1).to({state:[{t:this.shape_672}]},1).to({state:[{t:this.shape_673}]},1).to({state:[{t:this.shape_674}]},1).to({state:[{t:this.shape_675}]},1).to({state:[]},1).wait(95));

	// 境界面
	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f().s("#000000").p("A/PAAMA+fAAA");
	this.shape_676.setTransform(260,240);

	this.timeline.addTween(cjs.Tween.get(this.shape_676).wait(96).to({_off:true},1).wait(95));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(699,444.2,-238,-84.59999999999997);
// library properties:
lib.properties = {
	id: 'E02CDA436B534815AEAB6E95C5ADCD0D',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['E02CDA436B534815AEAB6E95C5ADCD0D'] = {
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
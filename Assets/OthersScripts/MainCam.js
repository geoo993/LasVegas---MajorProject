#pragma strict

public var CameraOnBus:GameObject;
public var CameraOnBusTopView:GameObject;
public var CameraOnHowTo:GameObject;
public var CameraOnEndScreen:GameObject;
public var CameraOnFinish:GameObject;

public var statee: String = "idle";

public var backState:boolean = false;

public var MainCamera: Camera;

public var CameraColor1:Color = new Color();
public var CameraColor2:Color = new Color();
public var CameraColor3:Color = new Color();
public var CameraColor4:Color = new Color();

public var backgroundColor:Color = new Color();
public var backgroundColor1:Color = new Color();
public var backgroundColor2:Color = new Color();
public var backgroundColor3:Color = new Color();
public var backgroundColor4:Color = new Color();
public var backgroundColor5:Color = new Color();
public var backgroundColor6:Color = new Color();

public var bTarget:GameObject;
public var bScript:Movement;

public var duration: float = 200.0F;

public var duration2: float = 5.0F;

function Start () 
{

	CameraOnBus = GameObject.Find("Bus");
	CameraOnBusTopView = GameObject.Find("BusTopView");
	CameraOnHowTo = GameObject.Find("HowToPlay");
	CameraOnEndScreen = GameObject.Find("EndScreen");
	CameraOnFinish = GameObject.Find("FinishScene");
	
	statee = "onHowto";
	
	MainCamera = GetComponent.<Camera>();
	MainCamera.clearFlags = CameraClearFlags.SolidColor;
	
	CameraColor1 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	CameraColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	CameraColor3 = Color(0.196, 0.6, 0.9137,1);
	CameraColor4 = Color(0.196, 0.6, 0.9137,1);
	
	backgroundColor = Color(0.6, 0.83, 1,1);
	backgroundColor1 = Color(0.623, 0.796, 0.921,1);
	backgroundColor2 = Color(0.368, 0.647, 0.854,1);
	backgroundColor3 = Color(0.117, 0.568, 0.827,1);
	backgroundColor4 = Color(0.211, 0.462, 0.611,1);
	backgroundColor5 = Color(0.105, 0.164, 0.38,1);
	backgroundColor6 = Color(0.152, 0.18, 0.39,1);
	
	bTarget = GameObject.Find("Bus");
	bScript = bTarget.GetComponent(Movement);
		
}

function Update () 
{
	if(bScript.gameStart == false)
	{
		var tt: float = Mathf.PingPong(Time.time, duration2) / duration2;
		MainCamera.backgroundColor = Color.Lerp(backgroundColor, backgroundColor6, tt);
		
	}
	if(bScript.gameStart == true)
	{
		var t: float = Mathf.PingPong(Time.time, duration) / duration;
		if(backState == false)
		{
		MainCamera.backgroundColor = Color.Lerp(CameraColor4, backgroundColor6, t);
		}
		if(t> .98)
		{
		backState = true;
		}
	}
	
	
	if(Input.GetKeyDown(KeyCode.C))
	{
		CameraColor1 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		CameraColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	}
	if(statee == "onHowto")
	{
		onHowTo();
	}
	if(statee == "onBuss")
	{
		onBus();
	}
	
	if(statee == "onBusTopView")
	{
		onBussTopView();
	}
	if(statee == "onEnding")
	{
		onEnds();
	}
	
	if(statee == "onFinish")
	{
		onFinish();
	}

	
}
function onBus()
{
	
	this.transform.position.x = CameraOnBus.transform.position.x + 5;
	this.transform.position.y = CameraOnBus.transform.position.y + 6.85;
	
}
function onBussTopView()
{
	
	this.transform.position.x = CameraOnBusTopView.transform.position.x;
	this.transform.position.y = CameraOnBusTopView.transform.position.y;
	
}

function onHowTo()
{
	
	this.transform.position.x = CameraOnHowTo.transform.position.x;
	this.transform.position.y = CameraOnHowTo.transform.position.y+2;
}
function onEnds()
{
	
	this.transform.position.x = CameraOnEndScreen.transform.position.x;
	this.transform.position.y = CameraOnEndScreen.transform.position.y;
}
function onFinish()
{
	
	this.transform.position.x = CameraOnFinish.transform.position.x;
	this.transform.position.y = CameraOnFinish.transform.position.y;
}


#pragma strict


public var pressToPlay:GameObject;
public var starrt:GameObject;
public var arrowKey:GameObject;
public var space:GameObject;
public var cBut:GameObject;

public var back1:GameObject;
public var back2:GameObject;

public var colourCounter:int;
public var startState: boolean = false;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var buss:GameObject;
public var bussScript:Movement;

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var startColor:Color = new Color();
public var backColor:Color = new Color();

function Start () {

	arrowKey = GameObject.Find("ArrowKeys");
	starrt = GameObject.Find("PressToStart");
	pressToPlay = GameObject.Find("PressToPlay");
	space = GameObject.Find("spaceButton");
	cBut = GameObject.Find("cButton");
	
	back1 = GameObject.Find("BackBuildings");
	back2 = GameObject.Find("BackBuildings2");
	
	lTarget = GameObject.Find("Level");
	LevelsScript = lTarget.GetComponent(LevelControl);
	
	buss = GameObject.Find("Bus");
	bussScript = buss.GetComponent(Movement);
	
	mainCamera = GameObject.Find("MainCamera");
	mainCameraScript = mainCamera.GetComponent(MainCam);
	
	startColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	backColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function Update () {
	
	starrt.GetComponent.<Renderer>().material.color = startColor;	
	arrowKey.GetComponent.<Renderer>().material.color = startColor;
	space.GetComponent.<Renderer>().material.color = startColor;
	cBut.GetComponent.<Renderer>().material.color = startColor;
	pressToPlay.GetComponent.<Renderer>().material.color = startColor;
	
	back1.GetComponent.<Renderer>().material.color = backColor;
	back2.GetComponent.<Renderer>().material.color = backColor;
	
     if(startState == false)
     {
     	colourCounter += 1;
		if(colourCounter > 150)
		{
			starrt.GetComponent.<Renderer>().material.color = startColor;
			colourCounter = 0;
		}
     }
     
    if(Input.GetKeyDown(KeyCode.Return))
	{
		if(mainCameraScript.statee == "onHowto")
		{
			LevelsScript.levels = 0;  
			bussScript.positionControl = "bus1";
			mainCameraScript.statee = "onBuss";
		}
	}
	if(Input.GetKeyDown(KeyCode.C))
	{
		startColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		backColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	}
}


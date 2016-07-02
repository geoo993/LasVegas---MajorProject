#pragma strict

public var randomColor:Color = new Color();

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var bTarget:GameObject;
public var bScript:Movement;

public var colorNum:int;

function Start () {

	randomColor = Color.white;
	
	mainCamera = GameObject.Find("MainCamera");
	mainCameraScript = mainCamera.GetComponent(MainCam);
	
	bTarget = GameObject.Find("Bus");
	bScript = bTarget.GetComponent(Movement);
}

function Update () {

colorNum++;

if(colorNum <50)
{
	this.GetComponent(UI.Text).color = Color.red;
}
if(colorNum >50)
{
	this.GetComponent(UI.Text).color = Color(1.0,1.0,0,1);
}
if(colorNum >100)
{
	this.GetComponent(UI.Text).color = Color.blue;
}
if(colorNum >150)
{
	this.GetComponent(UI.Text).color = Color(1,0.6,0.2,1);
}
if(colorNum >200)
{
	colorNum = 0;
}


if(this.transform.position.x < -750)
{
	bScript.gameStart = true;
}


if(bScript.gameStart == false)
	{
		this.transform.Translate(-0.4f,0,0);
		this.transform.position.y = mainCamera.transform.position.y+10;
	}
	if(bScript.gameStart == true)
	{
		this.transform.position.y = 10000;
	}
}
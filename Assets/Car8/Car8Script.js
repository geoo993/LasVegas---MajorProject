#pragma strict

var spawnState:String = "idle";
var spawnState2: boolean = false;
var generateRandom:float;

var CarlaneNum:Number = 0;
var zPos8:float;
var xPos:float;
var carEightSpeed:float;

var Accel:float = 0.001;
var movingState:int;
var carsCounter:int;

var carEightBody:GameObject;
var carEightBody1:GameObject;
var carEightBody2:GameObject;
var carEightBody3:GameObject;
var rightWheel:GameObject;
var rightWheel1:GameObject;
var rightWheel2:GameObject;
var rightWheel3:GameObject;
var leftWheel:GameObject;
var leftWheel1:GameObject;
var leftWheel2:GameObject;
var leftWheel3:GameObject;
var wheelsNum:float;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var busss:GameObject;
public var busssScript:Movement;

public var car8State:boolean = false;

function Start () {
		
		carEightBody = GameObject.Find("CadillacBody");
		carEightBody1 = GameObject.Find("CadillacBody1");
		carEightBody2 = GameObject.Find("CadillacBody2");
		carEightBody3 = GameObject.Find("CadillacBody3");
		
		leftWheel = GameObject.Find("CadillacLeftWheel");
		leftWheel1 = GameObject.Find("CadillacLeftWheel1");
		leftWheel2 = GameObject.Find("CadillacLeftWheel2");
		leftWheel3 = GameObject.Find("CadillacLeftWheel3");
		
		rightWheel = GameObject.Find("CadillacRightWheel");
		rightWheel1 = GameObject.Find("CadillacRightWheel1");
		rightWheel2 = GameObject.Find("CadillacRightWheel2");
		rightWheel3 = GameObject.Find("CadillacRightWheel3");
		
		changeColour();
		
		lTarget = GameObject.Find("Level");
		LevelsScript = lTarget.GetComponent(LevelControl);
		
		busTopView = GameObject.Find("BusTopView");
		busTopViewScript = busTopView.GetComponent(BusToViewMovement);
		
		busss = GameObject.Find("Bus");
		busssScript = busss.GetComponent(Movement);
		
		movingState = Mathf.Round(Random.Range(1,6));
}

function Update () {
		
		
		carsCounter += 1;
		
		if(carsCounter > 400)
		{
			movingState = Mathf.Round(Random.Range(1,6));
			carsCounter = 0;
		}
		if(movingState == 1){
			carEightSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carEightSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carEightSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carEightSpeed = 0.1f;
			movingState = 0;
		}
		
		if(busssScript.positionControl == "bus2")
		{
			car8State = false;
		}
		
		if(car8State == false)
		{	
			if(busTopViewScript.spawnState == "spawn1")
			{
				this.transform.position.x = Random.Range(-50.0f, 300.0f);
			}
			if(busTopViewScript.spawnState == "spawn2")
			{
				this.transform.position.x = Random.Range(400.0f, 600.0f);
			}
			if(busTopViewScript.spawnState == "spawn3")
			{
				this.transform.position.x = Random.Range(550.0f, 880.0f);
			}
			if(busTopViewScript.spawnState == "spawn4")
			{
				this.transform.position.x = Random.Range(750.0f, 1000.0f);
			}
			if(busTopViewScript.spawnState == "spawn5")
			{
				this.transform.position.x = Random.Range(1000.0f, 1350.0f);
			}
			if(busTopViewScript.spawnState == "spawn6")
			{
				this.transform.position.x = Random.Range(1150.0f, 1400.0f);
			}
			car8State = true;
		}
		
		if(car8State == true)
		{
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos8 = -0.44;
				this.transform.position.z = zPos8;
			}
			if (CarlaneNum == 1)
			{
				zPos8 = 0;
				this.transform.position.z = zPos8;
			}
			if (CarlaneNum == 2)
			{
				zPos8 = 0.44;
				this.transform.position.z = zPos8;
			}
			
				this.transform.position.z = zPos8;
				this.transform.Translate(carEightSpeed,0,0);
				CarEightWheelsRotation();
			}
		}
		if(Input.GetKeyDown(KeyCode.C))
		{
			changeColour();
		}
}

function OnCollisionEnter(thisCollision:Collision)
{
	if(thisCollision.gameObject.name == "Bus")
	{
		movingState = Mathf.Round(Random.Range(1,6));
	}
}
function changeColour()
{
	
	carEightBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carEightBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carEightBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carEightBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	
}
function CarEightWheelsRotation()
{
	rightWheel.transform.Rotate(0,0,wheelsNum);
	rightWheel1.transform.Rotate(0,0,wheelsNum);
	rightWheel2.transform.Rotate(0,0,wheelsNum);
	rightWheel3.transform.Rotate(0,0,wheelsNum);
	
    leftWheel.transform.Rotate(0,0,wheelsNum);
    leftWheel1.transform.Rotate(0,0,wheelsNum);
    leftWheel2.transform.Rotate(0,0,wheelsNum);
    leftWheel3.transform.Rotate(0,0,wheelsNum);
}



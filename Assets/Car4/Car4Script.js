#pragma strict

var CarlaneNum:Number = 0;
var zPos4:float;
var xPos:float;
var carFourSpeed:float;

var Accel:float = 0.001;
var movingState:int;
var carsCounter:int;

var carFourBody:GameObject;
var carFourBody1:GameObject;
var carFourBody2:GameObject;
var carFourBody3:GameObject;
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

public var car4State:boolean = false;

function Start () {
		
		carFourBody = GameObject.Find("MuscleCarBody");
		carFourBody1 = GameObject.Find("MuscleCarBody1");
		carFourBody2 = GameObject.Find("MuscleCarBody2");
		carFourBody3 = GameObject.Find("MuscleCarBody3");
		
		leftWheel = GameObject.Find("MuscleCarLeftWheel");
		leftWheel1 = GameObject.Find("MuscleCarLeftWheel1");
		leftWheel2 = GameObject.Find("MuscleCarLeftWheel2");
		leftWheel3 = GameObject.Find("MuscleCarLeftWheel3");
		
		rightWheel = GameObject.Find("MuscleCarRightWheel");
		rightWheel1 = GameObject.Find("MuscleCarRightWheel1");
		rightWheel2 = GameObject.Find("MuscleCarRightWheel2");
		rightWheel3 = GameObject.Find("MuscleCarRightWheel3");
		
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
			carFourSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carFourSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carFourSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carFourSpeed = 0.1f;
			movingState = 0;
		}
		
		if(busssScript.positionControl == "bus2")
		{
			car4State = false;
		}
		
		if(car4State == false)
		{	
			if(busTopViewScript.spawnState == "spawn1")
			{
				this.transform.position.x = Random.Range(-50.0f, 300.0f);
			}
			if(busTopViewScript.spawnState == "spawn2")
			{
				this.transform.position.x = Random.Range(500.0f, 600.0f);
			}
			if(busTopViewScript.spawnState == "spawn3")
			{
				this.transform.position.x = Random.Range(650.0f, 880.0f);
			}
			if(busTopViewScript.spawnState == "spawn4")
			{
				this.transform.position.x = Random.Range(800.0f, 1000.0f);
			}
			if(busTopViewScript.spawnState == "spawn5")
			{
				this.transform.position.x = Random.Range(1100.0f, 1350.0f);
			}
			if(busTopViewScript.spawnState == "spawn6")
			{
				this.transform.position.x = Random.Range(1200.0f, 1400.0f);
			}
			car4State = true;
		}
		
		if(car4State == true)
		{
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos4 = -0.44;
				this.transform.position.z = zPos4;
			}
			if (CarlaneNum == 1)
			{
				zPos4 = 0;
				this.transform.position.z = zPos4;
			}
			if (CarlaneNum == 2)
			{
				zPos4 = 0.44;
				this.transform.position.z = zPos4;
			}
			
				this.transform.position.z = zPos4;
				this.transform.Translate(carFourSpeed,0,0);
				CarFourWheelsRotation();
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
	
	carFourBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carFourBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carFourBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carFourBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	
}
function CarFourWheelsRotation()
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




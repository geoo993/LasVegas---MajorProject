#pragma strict

var CarlaneNum:Number = 0;
var zPos10:float;
var xPos:float;
var carTenSpeed:float;

var Accel:float = 0.001;
var movingState:int;
var carsCounter:int;

var carTenBody:GameObject;
var carTenBody1:GameObject;
var carTenBody2:GameObject;
var carTenBody3:GameObject;
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

public var car10State:boolean = false;

function Start () {

		carTenBody = GameObject.Find("Chrysler2Body");
		carTenBody1 = GameObject.Find("Chrysler2Body1");
		carTenBody2 = GameObject.Find("Chrysler2Body2");
		carTenBody3 = GameObject.Find("Chrysler2Body3");
		
		leftWheel = GameObject.Find("Chrysler2LeftWheel");
		leftWheel1 = GameObject.Find("Chrysler2LeftWheel1");
		leftWheel2 = GameObject.Find("Chrysler2LeftWheel2");
		leftWheel3 = GameObject.Find("Chrysler2LeftWheel3");
		
		rightWheel = GameObject.Find("Chrysler2RightWheel");
		rightWheel1 = GameObject.Find("Chrysler2RightWheel1");
		rightWheel2 = GameObject.Find("Chrysler2RightWheel2");
		rightWheel3 = GameObject.Find("Chrysler2RightWheel3");
		
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
			carTenSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carTenSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carTenSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carTenSpeed = 0.1f;
			movingState = 0;
		}
		
		if(busssScript.positionControl == "bus2")
		{
			car10State = false;
		}
		
		if(car10State == false)
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
			car10State = true;
		}
		
		if(car10State == true)
		{
			
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos10 = -0.44;
				this.transform.position.z = zPos10;
			}
			if (CarlaneNum == 1)
			{
				zPos10 = 0;
				this.transform.position.z = zPos10;
			}
			if (CarlaneNum == 2)
			{
				zPos10 = 0.44;
				this.transform.position.z = zPos10;
			}
			
				this.transform.position.z = zPos10;
				this.transform.Translate(carTenSpeed,0,0);
				CarTenWheelsRotation();
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
	carTenBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTenBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTenBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTenBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	
}
function CarTenWheelsRotation()
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




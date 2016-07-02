#pragma strict


var CarlaneNum:Number = 0;
var zPos3:float;
var xPos:float;
var carThreeSpeed:float;

var Accel:float = 0.001;
var movingState:int;
var carsCounter:int;

var carThreeBody:GameObject;
var carThreeBody1:GameObject;
var carThreeBody2:GameObject;
var carThreeBody3:GameObject;
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

public var car3State:boolean = false;

function Start () {
		
		carThreeBody = GameObject.Find("MBody");
		carThreeBody1 = GameObject.Find("MBody1");
		carThreeBody2 = GameObject.Find("MBody2");
		carThreeBody3 = GameObject.Find("MBody3");
		
		leftWheel = GameObject.Find("MleftWheel");
		leftWheel1 = GameObject.Find("MleftWheel1");
		leftWheel2 = GameObject.Find("MleftWheel2");
		leftWheel3 = GameObject.Find("MleftWheel3");
		
		rightWheel = GameObject.Find("MrightWheel");
		rightWheel1 = GameObject.Find("MrightWheel1");
		rightWheel2 = GameObject.Find("MrightWheel2");
		rightWheel3 = GameObject.Find("MrightWheel3");
		
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
			carThreeSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carThreeSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carThreeSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carThreeSpeed = 0.1f;
			movingState = 0;
		}

		if(busssScript.positionControl == "bus2")
		{
			car3State = false;
		}
		
		if(car3State == false)
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
			car3State = true;
		}
		
		if(car3State == true)
		{
			
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos3 = -0.44;
				this.transform.position.z = zPos3;
			}
			if (CarlaneNum == 1)
			{
				zPos3 = 0;
				this.transform.position.z = zPos3;
			}
			if (CarlaneNum == 2)
			{
				zPos3 = 0.44;
				this.transform.position.z = zPos3;
			}
			
				this.transform.position.z = zPos3;
				this.transform.Translate(carThreeSpeed,0,0);
				CarThreeWheelsRotation();
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
	
	carThreeBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carThreeBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carThreeBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carThreeBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}
function CarThreeWheelsRotation()
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




#pragma strict

public var CarlaneNum:Number = 0;
public var zPos2:float;
public var xPos:float;
public var carTwoSpeed:float;

public var Accel:float = 0.001;
public var movingState:int;
public var carsCounter:int;

public var carTwoBody:GameObject;
public var carTwoBody1:GameObject;
public var carTwoBody2:GameObject;
public var carTwoBody3:GameObject;
public var rightWheel:GameObject;
public var rightWheel1:GameObject;
public var rightWheel2:GameObject;
public var rightWheel3:GameObject;
public var leftWheel:GameObject;
public var leftWheel1:GameObject;
public var leftWheel2:GameObject;
public var leftWheel3:GameObject;
public var wheelsNum:float;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var busss:GameObject;
public var busssScript:Movement;

public var car2State:boolean = false;

function Start () {
		
		carTwoBody = GameObject.Find("dBody");
		carTwoBody1 = GameObject.Find("dBody1");
		carTwoBody2 = GameObject.Find("dBody2");
		carTwoBody3 = GameObject.Find("dBody3");
		
		leftWheel = GameObject.Find("dLeftWheel");
		leftWheel1 = GameObject.Find("dLeftWheel1");
		leftWheel2 = GameObject.Find("dLeftWheel2");
		leftWheel3 = GameObject.Find("dLeftWheel3");
		
		rightWheel = GameObject.Find("dRightWheel");
		rightWheel1 = GameObject.Find("dRightWheel1");
		rightWheel2 = GameObject.Find("dRightWheel2");
		rightWheel3 = GameObject.Find("dRightWheel3");
		
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

		carsCounter ++;
		
		if(carsCounter > 400)
		{
			movingState = Mathf.Round(Random.Range(1,6));
			carsCounter = 0;
		}
		
		if(movingState == 1){
			carTwoSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carTwoSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carTwoSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carTwoSpeed = 0.1f;
			movingState = 0;
		}
		
		if(busssScript.positionControl == "bus2")
		{
			car2State = false;
		}
		
		if(car2State == false)
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
			car2State = true;
		}
		
		if(car2State == true)
		{
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos2 = -0.44;
				this.transform.position.z = zPos2;
			}
			if (CarlaneNum == 1)
			{
				zPos2 = 0;
				this.transform.position.z = zPos2;
			}
			if (CarlaneNum == 2)
			{
				zPos2 = 0.44;
				this.transform.position.z = zPos2;
			}
			
			
				this.transform.position.z = zPos2;
				this.transform.Translate(carTwoSpeed,0,0);
				CarTwoWheelsRotation();
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
	
	carTwoBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTwoBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTwoBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carTwoBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}
function CarTwoWheelsRotation()
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
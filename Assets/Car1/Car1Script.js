#pragma strict


public var Accel:float = 0.001;
public var CarlaneNum:Number = 0;
public var zPos1:float;
public var xPos:float;
public var carOneSpeed:float;

public var movingState:int;
public var carsCounter:int;

public var carOneBody:GameObject;
public var carOneBody1:GameObject;
public var carOneBody2:GameObject;
public var carOneBody3:GameObject;

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

public var car1State:boolean = false;

function Start () {
		
		carOneBody = GameObject.Find("ClassicCarBody");
		carOneBody1 = GameObject.Find("ClassicCarBody11");
		carOneBody2 = GameObject.Find("ClassicCarBody12");
		carOneBody3 = GameObject.Find("ClassicCarBody13");
		leftWheel = GameObject.Find("leftTyres");
		leftWheel1 = GameObject.Find("leftTyres11");
		leftWheel2 = GameObject.Find("leftTyres12");
		leftWheel3 = GameObject.Find("leftTyres13");
		
		rightWheel = GameObject.Find("rightTyres");
		rightWheel1 = GameObject.Find("rightTyres11");
		rightWheel2 = GameObject.Find("rightTyres12");
		rightWheel3 = GameObject.Find("rightTyres13");
		
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
			carOneSpeed = 0.1f;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 2){
			carOneSpeed = 0.03f;
			wheelsNum -= 1f;
			movingState = 0;
		}
		if(movingState == 3){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			movingState = 0;
		}
		if(movingState == 4){
			carOneSpeed = 0.1f + Accel;
			wheelsNum -= 1.5f;
			movingState = 0;
		}
		if(movingState == 5){
			CarlaneNum = Mathf.Round(Random.Range(0,3));
			wheelsNum -= 1.5f;
			carOneSpeed = 0.1f;
			movingState = 0;
		}
		
		if(busssScript.positionControl == "bus2")
		{
			car1State = false;
		}
		
		if(car1State == false)
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
			car1State = true;
		}
		
		if(car1State == true)
		{
			if(busssScript.gameStart == true)
			{
			if (CarlaneNum == 0)
			{
				zPos1 = -0.44;
				this.transform.position.z = zPos1;
			}
			if (CarlaneNum == 1)
			{
				zPos1 = 0;
				this.transform.position.z = zPos1;
			}
			if (CarlaneNum == 2)
			{
				zPos1 = 0.44;
				this.transform.position.z = zPos1;
			}
			
			
				this.transform.position.z = zPos1;
				this.transform.Translate(carOneSpeed,0,0);
				CarOneWheelsRotation();
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
	
	carOneBody.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carOneBody1.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carOneBody2.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	carOneBody3.GetComponent.<Renderer>().material.color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function CarOneWheelsRotation()
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


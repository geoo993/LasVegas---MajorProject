#pragma strict

public var passengersControl:int;

public var createPass:boolean = false;
public var moveToShow:boolean = false;


public var Passengerss : GameObject;
public var newPass : GameObject;
public var pNumber:int = 0;

public var Passengerss3 : GameObject;
public var offPass : GameObject;
public var pNumber2:int = 0;

public var caesarsPasseng : GameObject;
public var pNumber3:int = 0;

public var xSpeed:float;
public var ySpeed:float;

public var xRange:float;
public var yRange:float;

public var caesarsEnt:GameObject;

public var state1: boolean = false;
public var state2: boolean = false;
public var state3: boolean = false;

public var arrivalState: boolean = false;

public var randSpawn:int;
public var pCounter:int;
public var pCount:int;
public var passengersAtShow:int;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var bTarget:GameObject;
public var bScript:Movement;

public var textTarget:GameObject;
public var TextScript:Textss;

public var onBoardPassengers:int;


function Start () {
	
	busTopView = GameObject.Find("BusTopView");
	busTopViewScript = busTopView.GetComponent(BusToViewMovement);
	
	lTarget = GameObject.Find("Level");
	LevelsScript = lTarget.GetComponent(LevelControl);
	
	bTarget = GameObject.Find("Bus");
	bScript = bTarget.GetComponent(Movement);
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);
		
}

function Update () {
		
	
		if(randSpawn == 0)
		{
			xSpeed = 0.01f;
			ySpeed = Random.Range(-0.05f,0.05f);
			
			xRange = Random.Range(122, 128);
			yRange = 139;
		}

		if(randSpawn == 1)
		{
			xSpeed = 0.01f;
			ySpeed = Random.Range(-0.05f,0.05f);
			
			xRange = Random.Range(324.5, 329);
			yRange = 129.5;
		}

		if(randSpawn == 2)
		{
			xSpeed = Random.Range(-0.02,0.05f);
			ySpeed = 0.01f;
			
			xRange = 512;
			yRange = Random.Range(112, 119);
		
		}
		if(randSpawn == 3)
		{
			xSpeed = 0.01f;
			ySpeed = Random.Range(-0.05f,0.05f);
			
			xRange = Random.Range(719, 722);
			yRange = 123;
		}
		
		if(pCount < 100)
		{
			pCounter ++;
			
		}
		if(pCounter > 100)
		{
			randSpawn = Random.Range(0, 4);
			myPasseng();
			
			pCount ++;
			pCounter = 0;	
		}
		if(state1 == true)
		{
			newPass.transform.Translate(xSpeed,ySpeed,0);
		}
		
		if(state2 == true)
		{
			var movingSteps = 5 * Time.deltaTime;
			offPass.transform.position = Vector3.MoveTowards(offPass.transform.position, Vector3(bScript.x,bScript.y,bScript.z), movingSteps);
		}
		
		if(state3 == true)
		{
			passengersControl++;
			if(passengersControl > 60)
			{
				createPass = true;
				passengersControl = 0;
			}
			if(createPass == true)
			{
				offPasseng2();
				bScript.passengersCount -= 1;
				
				passengersAtShow += 1;
				TextScript.scoreCounter += 500;
				moveToShow = true;
				createPass = false;
			}
			if(moveToShow == true)
			{
				var movingSteps2 = 7 * Time.deltaTime;
				caesarsPasseng.transform.position = Vector3.MoveTowards(caesarsPasseng.transform.position, Vector3(bScript.x,bScript.y,bScript.z), movingSteps2);
			}		
	  			
		}
		if(bScript.passengersCount <= 0)
		{
			busTopViewScript.releasingPassengers = false;
			state3 = false;
			
		}
	
		if(bScript.passengersCount <= 0)
		{
			bScript.passengersCount = 0;
		}
		if(Input.GetKeyDown(KeyCode.Space))
	  	{	
	  		if(bScript.passengersCount > 0 && bScript.positionControl == "bus2" && busTopViewScript.collisionOnEntrance == true)
			{
	  			offPasseng();
	  			bScript.passengersCount -= 1;
	  		}
	  		if(bScript.passengersCount > 0 && bScript.positionControl == "bus2" && busTopViewScript.CaesarsCollision == true)
			{
				state3 = true;
				
				if(state3 == true)
				{	
					busTopViewScript.releasingPassengers = true;
					createPass = true;
				}
	  		
	  		}
	  	}	
	  	
}


function myPasseng()
{	
		var position: Vector3 = Vector3(xRange, yRange, -0.1);
		newPass = GameObject.Instantiate(Passengerss, position, transform.rotation);
		//newPass.name = "prefab#"+i;
		newPass.name = "passengers"+pNumber;
		pNumber++;
		
		state1 = true;
  		
}

function offPasseng()
{
		
		offPass = GameObject.Instantiate(Passengerss3, busTopView.transform.position, transform.rotation);
		offPass.name = "passengers3"+pNumber2;
		pNumber2 ++;
		
		state2 = true;

}

function offPasseng2()
{
		caesarsPasseng = GameObject.Instantiate(Passengerss3, busTopView.transform.position, transform.rotation);
		caesarsPasseng.name = "passengers3"+pNumber3;
		pNumber3 ++;
	
}





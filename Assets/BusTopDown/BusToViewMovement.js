#pragma strict

public var releasingPassengers: boolean = false;

public var forwardSpeed:float;
public var turnSpeed: float = 1;

public var myRotation:int;
public var collisionOnEntrance: boolean = false;
public var CaesarsCollision: boolean = false;

public var busss:GameObject;
public var busssScript:Movement;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var textTarget:GameObject;
public var TextScript:Textss;

public var busStop:int;
public var BusType2: boolean = false;

public var pTarget:GameObject;
public var passengScript:pControl;

public var spawnState:String;

public var forwardState:boolean = false;


function Start () {
		
		busss = GameObject.Find("Bus");
		busssScript = busss.GetComponent(Movement);
		
		lTarget = GameObject.Find("Level");
		LevelsScript = lTarget.GetComponent(LevelControl);
		
		mainCamera = GameObject.Find("MainCamera");
		mainCameraScript = mainCamera.GetComponent(MainCam);
		
		pTarget = GameObject.Find("Passengers");
		passengScript = pTarget.GetComponent(pControl);	
		
		textTarget = GameObject.Find("GameText");
		TextScript = textTarget.GetComponent(Textss);
		
		spawnState = "spawn1";
		
}

function Update () {
		
		busColoor();
		
		if(busssScript.passengersCount < 10)
		{
			forwardSpeed = 5;
		}
		if(busssScript.passengersCount > 10)
		{
			forwardSpeed = 4.5;
		}
		if(busssScript.passengersCount > 20)
		{
			forwardSpeed = 4;
		}
		if(busssScript.passengersCount > 30)
		{
			forwardSpeed = 3.5;
		}
		if(busssScript.passengersCount > 40)
		{
			forwardSpeed = 3;
		}
			
		if(busssScript.positionControl == "bus1")
		{
			this.transform.eulerAngles.z = -90;
		}
		if(busssScript.positionControl == "bus2")
		{
			if (BusType2 == false)
			{
				this.transform.eulerAngles.z = -90;
				this.transform.position.y = 102;
				
			 	if(LevelsScript.levels == 1)
				{
					this.transform.position.x = 100;	
			 	}
			 	if(LevelsScript.levels == 2)
				{	
					this.transform.position.x = 300;
			 	}
			 	if(LevelsScript.levels == 3)
				{
					this.transform.position.x = 500;
			 	}
			 	if(LevelsScript.levels == 4)
				{	
					this.transform.position.x = 700;
			 	}
			 	if(LevelsScript.levels == 5)
				{
					this.transform.position.x = 900;
			 	}
			 	BusType2 = true;
	 		}
			
			if(BusType2 == true)
			{
				myRotation = this.transform.eulerAngles.z;
				
				if(releasingPassengers == false)
				{
					var forwardMoveAmount = Input.GetAxis("Vertical")* forwardSpeed;
					var turnAmount = Input.GetAxis("Horizontal")* -turnSpeed;
 				}
 				
 				this.transform.Rotate(0,0,turnAmount); 
 				
				if(forwardState == false)
				{
					this.transform.position += this.transform.up * forwardMoveAmount * Time.deltaTime;
				}
				if(forwardState == true)
				{
					//this.transform.position += this.transform.up * -forwardMoveAmount * Time.deltaTime;
					//this.transform.position += this.transform.up * -.1 * Time.deltaTime;
					this.transform.position += this.transform.up * 0 * Time.deltaTime;
				}
  				
  				
  			}
  		
  		}
  	
  		
}
function OnCollisionExit(thisCollisionExit:Collision)
{
			
			if(thisCollisionExit.gameObject.name == "RivieraStop")
			{	
				collisionOnEntrance = false;
			}
			if(thisCollisionExit.gameObject.name == "StardustStop")
			{
				collisionOnEntrance = false;
			}
			if(thisCollisionExit.gameObject.name == "SandsStop")
			{
				collisionOnEntrance = false;
			}
			if(thisCollisionExit.gameObject.name == "FlamingoStop")
			{
				collisionOnEntrance = false;
			}
			if(thisCollisionExit.gameObject.name == "FinishSign")
			{
				CaesarsCollision = false;
			}
			
}


function OnCollisionEnter(thisCollision:Collision)
{
			
			if(thisCollision.gameObject.name == "RivieraStop")
			{
				collisionOnEntrance = true;
			}
			if(thisCollision.gameObject.name == "StardustStop")
			{
				collisionOnEntrance = true;
			}
			if(thisCollision.gameObject.name == "SandsPickUpHere")
			{
				collisionOnEntrance = true;
			}
			if(thisCollision.gameObject.name == "FlamingoStop")
			{
				collisionOnEntrance = true;
			}
			if(thisCollision.gameObject.name == "FinishSign")
			{
				CaesarsCollision = true;
			}
			
			
			if(thisCollision.gameObject.name == "RivieraExit1")
			{
				mainCameraScript.statee = "onBuss";
				BusType2 = false;
				busssScript.positionControl = "bus1";
				spawnState = "spawn2";
			}
			if(thisCollision.gameObject.name == "StardustExit2")
			{
				mainCameraScript.statee = "onBuss";	
				BusType2 = false;
				busssScript.positionControl = "bus1";
				spawnState = "spawn3";
			}
			if(thisCollision.gameObject.name == "SandsExit3")
			{
				mainCameraScript.statee = "onBuss";
				BusType2 = false;
				busssScript.positionControl = "bus1";
				spawnState = "spawn4";
			}
			if(thisCollision.gameObject.name == "FlamingoExit4")
			{
				mainCameraScript.statee = "onBuss";
				BusType2 = false;
				busssScript.positionControl = "bus1";
				spawnState = "spawn5";
			}
			if(thisCollision.gameObject.name == "CaesarsExit5")
			{
				mainCameraScript.statee = "onBuss";
				BusType2 = false;
				busssScript.positionControl = "bus1";
				spawnState = "spawn6";
				TextScript.scoreState = true;
			}
			
			
}
function busColoor()
{
	this.GetComponent.<Renderer>().material.color = busssScript.busColor;
}

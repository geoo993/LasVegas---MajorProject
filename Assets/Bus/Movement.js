#pragma strict


public var busWheelA:GameObject;
public var busWheelB:GameObject;
public var busWheelC:GameObject;
public var busBody:GameObject;

public var passengersCount:int;
public var busIconn:GameObject;

public var xSpeed:float;
public var speedMax:float = .5;
public var speedAcceleration:float;

public var x:float;
public var y:float;
public var z:float;

public var zMove:float;

public var busHealthBarr:GameObject;

public var pHead1:GameObject;
public var pHead2:GameObject;
public var pHead3:GameObject;
public var pHead4:GameObject;
public var pHead5:GameObject;
public var pHead6:GameObject;
public var pHead7:GameObject;
public var pHead8:GameObject;
public var pHead9:GameObject;
public var pHead10:GameObject;
public var pHead11:GameObject;
public var pHead12:GameObject;
public var pHead13:GameObject;
public var pHead14:GameObject;
public var pHead15:GameObject;
public var pHead16:GameObject;
public var pHead17:GameObject;
public var pHead18:GameObject;
public var pHead19:GameObject;
public var pHead20:GameObject;

public var rivieraParkin:GameObject;
public var StardustParkin:GameObject;
public var SandsParkin:GameObject;
public var FlamingoParkin:GameObject;
public var CaesarsParkin:GameObject;

public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var textTarget:GameObject;
public var TextScript:Textss;

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var pTarget:GameObject;
public var passengScript:pControl;

public var BuslanesNum:Number = 2;

public var busColor:Color = new Color();
public var carsArray = new Array(); 

public var positionControl: String = "idle";
public var BusType1: boolean = false;

public var MovingState : boolean = false;
public var Right : boolean = false;
public var Left : boolean = false;
public var Up: boolean =  false;
public var Down : boolean = false;

public var gameStart : boolean = false;
public var atCaesars: boolean = false;


function Start () {
	
	pHead1 = GameObject.Find("OnBoardPassenger1");
	pHead2 = GameObject.Find("OnBoardPassenger2");
	pHead3 = GameObject.Find("OnBoardPassenger3");
	pHead4 = GameObject.Find("OnBoardPassenger4");
	pHead5 = GameObject.Find("OnBoardPassenger5");
	pHead6 = GameObject.Find("OnBoardPassenger6");
	pHead7 = GameObject.Find("OnBoardPassenger7");
	pHead8 = GameObject.Find("OnBoardPassenger8");
	pHead9 = GameObject.Find("OnBoardPassenger9");
	pHead10 = GameObject.Find("OnBoardPassenger10");
	pHead11 = GameObject.Find("OnBoardPassenger11");
	pHead12 = GameObject.Find("OnBoardPassenger12");
	pHead13 = GameObject.Find("OnBoardPassenger13");
	pHead14 = GameObject.Find("OnBoardPassenger14");
	pHead15 = GameObject.Find("OnBoardPassenger15");
	pHead16 = GameObject.Find("OnBoardPassenger16");
	pHead17 = GameObject.Find("OnBoardPassenger17");
	pHead18 = GameObject.Find("OnBoardPassenger18");
	pHead19 = GameObject.Find("OnBoardPassenger19");
	pHead20 = GameObject.Find("OnBoardPassenger20");
	
	
	busHealthBarr = GameObject.Find("BusHealthBar1");
	rivieraParkin = GameObject.Find("RivieraParking");
	StardustParkin = GameObject.Find("StardustParking");
	SandsParkin = GameObject.Find("SandsParking");
	FlamingoParkin = GameObject.Find("FlamingoParking");
	CaesarsParkin = GameObject.Find("CaesarsPalaceParking");
	
	busIconn = GameObject.Find("BusIcon");
	busBody = GameObject.Find("BusBody");
	busWheelA = GameObject.Find("bWheelA");
	busWheelB = GameObject.Find("bWheelB");
	busWheelC = GameObject.Find("bWheelC");
	
	busColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	
	busTopView = GameObject.Find("BusTopView");
	busTopViewScript = busTopView.GetComponent(BusToViewMovement);
	
	lTarget = GameObject.Find("Level");
	LevelsScript = lTarget.GetComponent(LevelControl);
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);
	
	mainCamera = GameObject.Find("MainCamera");
	mainCameraScript = mainCamera.GetComponent(MainCam);
	
	pTarget = GameObject.Find("Passengers");
	passengScript = pTarget.GetComponent(pControl);	
	
	changeColour();
	positionControl = "bus1";
}

function Update () 
{		
	
		if(passengersCount > 5)
		{
			pHead1.transform.position.y = 31;
			pHead2.transform.position.y = 31;
		
		}
		else{
			pHead1.transform.position.y = 0;
			pHead2.transform.position.y = 0;
		}
		if(passengersCount > 10)
		{
			pHead3.transform.position.y = 31;
			pHead4.transform.position.y = 31;
		
		}
		else{
			pHead3.transform.position.y = 0;
			pHead4.transform.position.y = 0;
		}
		if(passengersCount > 15)
		{
			pHead5.transform.position.y = 31.38;
			pHead6.transform.position.y = 31.38;
		
		}
		else{
			pHead5.transform.position.y = 0;
			pHead6.transform.position.y = 0;
		}
		
		if(passengersCount > 20)
		{
			pHead7.transform.position.y = 31.38;
			pHead8.transform.position.y = 31.38;
		
		}
		else{
			pHead7.transform.position.y = 0;
			pHead8.transform.position.y = 0;
		}
		if(passengersCount > 25)
		{
			pHead9.transform.position.y = 31.38;
			pHead10.transform.position.y = 31.38;
		
		}
		else{
			pHead9.transform.position.y = 0;
			pHead10.transform.position.y = 0;
		}
		if(passengersCount > 30)
		{
			pHead11.transform.position.y = 31.38;
			pHead12.transform.position.y = 31.38;
		
		}
		else{
			pHead11.transform.position.y = 0;
			pHead12.transform.position.y = 0;
		}
		if(passengersCount > 35)
		{
			pHead13.transform.position.y = 31.38;
			pHead14.transform.position.y = 31.38;
		
		}
		else{
			pHead13.transform.position.y = 0;
			pHead14.transform.position.y = 0;
		}
		if(passengersCount > 40)
		{
			pHead15.transform.position.y = 31.38;
			pHead16.transform.position.y = 31.38;
		
		}
		else{
			pHead15.transform.position.y = 0;
			pHead16.transform.position.y = 0;
		}
		if(passengersCount > 44)
		{
			pHead17.transform.position.y = 31.38;
			pHead18.transform.position.y = 31.38;
		
		}
		else{
			pHead17.transform.position.y = 0;
			pHead18.transform.position.y = 0;
		}
		if(passengersCount > 48)
		{
			pHead19.transform.position.y = 31.38;
			pHead20.transform.position.y = 31.38;
		
		}
		else{
			pHead19.transform.position.y = 0;
			pHead20.transform.position.y = 0;
		}
		
		
		
		if(passengersCount < 10)
		{
			speedMax = .4;
		}
		if(passengersCount > 10)
		{
			speedMax = .35;
		}
		if(passengersCount > 20)
		{
			speedMax = .3;
		}
		if(passengersCount > 30)
		{
			speedMax = .25;
		}
		if(passengersCount > 40)
		{
			speedMax = .2;
		}
		
		if(positionControl == "bus1")
		{
			if (BusType1 == false)
			{
				if(LevelsScript.levels == 0)
				{	
					this.transform.position.x = 10;	
			 	}
			 	if(LevelsScript.levels == 1)
				{
					this.transform.position.x = 420;
			 	}
			 	if(LevelsScript.levels == 2)
				{
					this.transform.position.x = 715;	
			 	}
			 	if(LevelsScript.levels == 3)
				{
					this.transform.position.x = 880;
			 	}
			 	if(LevelsScript.levels == 4)
				{
					this.transform.position.x = 1110;
			 	}
			 	if(LevelsScript.levels == 5)
				{
					this.transform.position.x = 1420;
			 	}
			 	BusType1 = true;
	 		}
	
	 		if (BusType1 == true)
			{
				var forwardMovement = Input.GetAxis("Horizontal")* xSpeed;
				this.transform.Translate(forwardMovement,0,zMove);
		
			}
			
			if (MovingState == true)
			{
		
			if (Right == true)
			{
				
				xSpeed +=  speedAcceleration;
				
				if (xSpeed > speedMax)
				{
					xSpeed = speedMax;
				}
					BusRightWheel();
				
			}

			if (Left == true)
			{
				
				xSpeed +=  speedAcceleration;
				
				if (xSpeed > speedMax)
				{
					xSpeed = speedMax;
				}
			
					BusLeftWheel();
			}
			
			}
			if (MovingState == false)
			{
			if (xSpeed > 0 + speedAcceleration)
			{
				xSpeed -=  speedAcceleration;
				BusRightWheel();
			}
			else if (xSpeed < 0 - speedAcceleration)
			{
				xSpeed +=  speedAcceleration;
				BusLeftWheel();
			}
			else
			{
				xSpeed = 0;
			}
			}
		
	
			if (Up == true)
			{
			
			if(BuslanesNum == 0)
			{
				BuslanesNum = 1;
				Up = false;
			}
			else if(BuslanesNum == 1)
			{
				BuslanesNum = 2;
				Up = false;
			}
			else if(BuslanesNum == 2)
			{
				BuslanesNum = 2;
				Up = false;
			}
			}
			if (Down == true)
			{
		  
			if(BuslanesNum == 2)
			{
				BuslanesNum = 1;
				Down = false;
			}
			else if(BuslanesNum == 1)
			{
				BuslanesNum = 0;
				Down = false;
			}
			else if(BuslanesNum == 0)
			{
				BuslanesNum = 0;
				Down = false;
			}
				
			}
		
			if (BuslanesNum == 0)
			{
				zMove = -0.4;
				this.transform.position.z = zMove ;
			}
			if (BuslanesNum == 1)
			{
				zMove = 0;
				this.transform.position.z = zMove;
			}
			if (BuslanesNum == 2)
			{
				zMove = 0.4;
				this.transform.position.z = zMove ;
			}
			
			if(gameStart == true)
			{
			if(Input.GetKeyDown(KeyCode.RightArrow))
			{
			   		MovingState = true;
			 		Right = true;    	    	 	
			}
			if(Input.GetKeyDown(KeyCode.LeftArrow))
			 {
		        	MovingState = true;
		        	Left = true;
		     }
		     if(Input.GetKeyDown(KeyCode.UpArrow))
			 {
		           	Up = true;   
		     }
		     if(Input.GetKeyDown(KeyCode.DownArrow))
			 {
		           Down = true;
		     }
		     
		     
		    
		     if(Input.GetKeyUp(KeyCode.RightArrow))
		     {
		     		MovingState = false;
		      		Right = false;
		      	
		     }
		     if(Input.GetKeyUp(KeyCode.LeftArrow))
		     {
		     		MovingState = false;
		   		 	Left = false;
		     }
		      if(Input.GetKeyUp(KeyCode.UpArrow))
			 {
		           	Up = false;
		           
		     }
		     if(Input.GetKeyUp(KeyCode.DownArrow))
			 {
		           Down = false;
		     }
		     }
	   }
	  
	   
	   if(Input.GetKeyDown(KeyCode.C))
		{
			 changeColour();
		}
		if(Input.GetKeyDown(KeyCode.R))
		{
			TextScript.restartOnPlay();
		}
		if(Input.GetKeyDown(KeyCode.S))
		{
			gameStart = true;
		}
	  
}

function BusRightWheel()
{
	busWheelA.transform.Rotate(0,0,-7);
    busWheelB.transform.Rotate(0,0,-7);
    busWheelC.transform.Rotate(0,0,-7);
}
function BusLeftWheel()
{
	busWheelA.transform.Rotate(0,0,7);
    busWheelB.transform.Rotate(0,0,7);
    busWheelC.transform.Rotate(0,0,7);
}
function changeColour()
{
	busColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	busBody.GetComponent.<Renderer>().material.color = busColor;
	busIconn.GetComponent.<Renderer>().material.color = busColor;
	
}
function OnTriggerEnter(thisTrigger:Collider){

	if(thisTrigger.gameObject.name == "Barriers")
	{
			BusType1 = false;
	}
}
 
function OnCollisionEnter(thisCollision:Collision)
{

			if(thisCollision.gameObject.name == "Car1")
			{
					hitCollision();		
			}
			if(thisCollision.gameObject.name == "Car11")
			{
					hitCollision();		
			}
			if(thisCollision.gameObject.name == "Car12")
			{
					hitCollision();		
			}
			if(thisCollision.gameObject.name == "Car13")
			{
					hitCollision();		
			}
			if(thisCollision.gameObject.name == "Car2")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car21")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car22")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car23")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car3")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car31")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car32")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car33")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car4")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car41")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car42")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car43")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car5")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car51")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car52")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car53")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car6")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car61")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car62")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car63")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car7")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car72")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car73")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car74")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car8")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car81")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car82")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car83")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car9")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car91")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car92")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car93")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car10")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car101")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car102")
			{
					hitCollision();
			}
			if(thisCollision.gameObject.name == "Car103")
			{
					hitCollision();
			}

			
			if(thisCollision.gameObject.name == "HotelsIconsOneRiviera")
			{	
				busHealthBarr.transform.position.x = rivieraParkin.transform.position.x;
				BusType1 = false;
				LevelsScript.levels = 1;
				positionControl = "bus2";
				x = 124f;
				y = 140f;
				mainCameraScript.statee = "onBusTopView";
				busTopViewScript.spawnState = "spawn2";
				TextScript.checkPointState = false;
				TextScript.checkPointCounter += 30;
				TextScript.passengersAtShowState = false;
				TextScript.scoreCounter += 500;
			}
	  		if(thisCollision.gameObject.name == "HotelsIconsTwoStardust")
			{	
				busHealthBarr.transform.position.x = StardustParkin.transform.position.x;
				BusType1 = false;
				LevelsScript.levels = 2;
				positionControl = "bus2";
				x = 327f;
				y = 130f;
				mainCameraScript.statee = "onBusTopView";
				busTopViewScript.spawnState = "spawn3";
				TextScript.checkPointState = false;
				TextScript.checkPointCounter += 30;
				TextScript.passengersAtShowState = false;
				TextScript.scoreCounter += 500;
			}
			if(thisCollision.gameObject.name == "HotelsIconsThreeSands")
			{	
				busHealthBarr.transform.position.x = SandsParkin.transform.position.x;	
				BusType1 = false;
				LevelsScript.levels = 3;
				positionControl = "bus2";
				x = 509f;
				y = 114f;
				mainCameraScript.statee = "onBusTopView";
				busTopViewScript.spawnState = "spawn4";
				TextScript.checkPointState = false;
				TextScript.checkPointCounter += 30;
				TextScript.passengersAtShowState = false;
				TextScript.scoreCounter += 500;
				
			}
	  		if(thisCollision.gameObject.name == "HotelsIconsFourFlamingo")
			{	
				busHealthBarr.transform.position.x = FlamingoParkin.transform.position.x;	
				BusType1 = false;
				LevelsScript.levels = 4;
				positionControl = "bus2";
				x = 720.8f;
				y = 123.7;
				mainCameraScript.statee = "onBusTopView";
				busTopViewScript.spawnState = "spawn5";
				TextScript.checkPointState = false;
				TextScript.checkPointCounter += 30;
				TextScript.passengersAtShowState = false;
				TextScript.scoreCounter += 500;
				
			}
			if(thisCollision.gameObject.name == "HotelsIconsFiveCaesars")
			{	
				busHealthBarr.transform.position.x = CaesarsParkin.transform.position.x;
				BusType1 = false;
				LevelsScript.levels = 5;
				positionControl = "bus2";
				x = 936f;
				y = 144.3f;
				mainCameraScript.statee = "onBusTopView";
				busTopViewScript.spawnState = "spawn6";
				TextScript.checkPointState = true;
				TextScript.checkPointCounter = 1000;
				TextScript.passengersAtShowState = true;
				TextScript.scoreCounter += 500;
				atCaesars = true;
			}
			
			if(thisCollision.gameObject.name == "GameEnd")
			{
				mainCameraScript.statee = "onFinish";	
				
			}
		
			//Debug.Log(thisCollision.gameObject.name+" hiting me");

}
	
function hitCollision()
{
	if(mainCameraScript.statee == "onBuss")
	{
		xSpeed = 0;
		TextScript.heathBarNum -= 0.02f;
		TextScript.healthCount -= 2;
		TextScript.healthDamage += 2;
		TextScript.scoreCounter -= 100;
	}
	
}
	
			
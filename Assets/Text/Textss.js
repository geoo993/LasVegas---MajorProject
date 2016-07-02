#pragma strict

public var xPos:float;

public var healthCount:int = 100;
public var healthDamage:int;
public var busTextCounter:int;

public var textCount:Number;
public var counter:Number = 0;
public var countDown2:Number = 60;
public var countDown3:Number = 3;
public var checkPointCounter:Number;
public var scoreCounter:Number;
public var checkPointState: boolean = false;
public var scoreState: boolean = false;


public var passengersNumT:GameObject;
public var passengersAtShow:GameObject;
public var passengersAtShow2:GameObject;
public var passengersAtShowState: boolean = false;
public var busHealthBarr:GameObject;
public var busHealthT:GameObject;
public var heathBarNum:float = 2.0f;

public var objectiveText:GameObject;
public var passengerReleased:GameObject;

public var checkPointText:GameObject;
public var checkPointText2:GameObject;

public var gameEndd:GameObject;
public var gameFinish:GameObject;

public var gameTime1:GameObject;

public var scoreText:GameObject;
public var scoreText2:GameObject;

public var passengerText:GameObject;
public var busHealthText:GameObject;
public var CameraPos:GameObject;

public var bTarget:GameObject;
public var bScript:Movement;

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var lTarget:GameObject;
public var LevelsScript:LevelControl;

public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var pTarget:GameObject;
public var passengScript:pControl;

public var busIconn:GameObject;
public var PassengersI:GameObject;

public var bussBody:GameObject;
public var busTexxt:GameObject;

public var randomColor:Color = new Color();
public var randomColor2:Color = new Color();
public var randomColor3:Color = new Color();

function Start () {
		
		gameEndd = GameObject.Find("EndScreen");
		gameFinish = GameObject.Find("FinishScene");
		
		gameTime1 = GameObject.Find("GameTimeNum");
		
		passengerReleased = GameObject.Find("PassengerReleased");
		objectiveText = GameObject.Find("ObjectiveText");
		
		passengersNumT = GameObject.Find("PassengersNumText");
		passengersAtShow = GameObject.Find("PassengersAtShowNum");
		passengersAtShow2 = GameObject.Find("PassengersShowText");
		
		busHealthT = GameObject.Find("BusHealthText");
		busHealthBarr = GameObject.Find("BusHealthBar1");
		
		busTexxt = GameObject.Find("myBusText");
		bussBody = GameObject.Find("BusBody");
		
		busIconn = GameObject.Find("BusIcon");
		PassengersI = GameObject.Find("PassengersIcon");
		
		CameraPos = GameObject.Find("MainCamera");
		
		checkPointText = GameObject.Find("CheckPointText");
		checkPointText2 = GameObject.Find("CheckPointText2");
		
		scoreText = GameObject.Find("ScoreText");
		scoreText2 = GameObject.Find("ScoreText2");
		
		passengerText = GameObject.Find("PasengersText");
		busHealthText = GameObject.Find("BushealthText");
		randomColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		randomColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		randomColor3 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		
		bTarget = GameObject.Find("Bus");
		bScript = bTarget.GetComponent(Movement);
		
		mainCamera = GameObject.Find("MainCamera");
		mainCameraScript = mainCamera.GetComponent(MainCam);
		
		lTarget = GameObject.Find("Level");
		LevelsScript = lTarget.GetComponent(LevelControl);
		
		busTopView = GameObject.Find("BusTopView");
		busTopViewScript = busTopView.GetComponent(BusToViewMovement);
		
		pTarget = GameObject.Find("Passengers");
		passengScript = pTarget.GetComponent(pControl);	
		
		
}

function Update () {
		
		passengerReleased.GetComponent(UI.Text).text = ""+passengScript.passengersAtShow+ "  At The Show";
		
		textCount ++;
		
		if (textCount > 1300)
		{
			if(mainCameraScript.statee == "onBuss")
			{
				this.transform.position.x = CameraPos.transform.position.x - 100;
			
			}
			textCount = 0;
		}
		this.transform.Translate(xPos,0,0);
		
		if(mainCameraScript.statee == "onFinish")
		{
			passengersNumT.transform.position.x = gameFinish.transform.position.x-4 ;
			passengersAtShow.transform.position.x = gameFinish.transform.position.x-4;
			
			
			passengersNumT.GetComponent(UI.Text).text = "Score  "+Mathf.Round(scoreCounter);
			passengersAtShow.GetComponent(UI.Text).text = "You Dropped "+passengScript.passengersAtShow;
			passengersAtShow2.transform.position.x = passengersAtShow.transform.position.x+3.3;
			
			gameTime1.GetComponent(UI.Text).text = "";
			
		}
		if(mainCameraScript.statee == "onEnding")
		{
			busHealthT.transform.position.x = gameEndd.transform.position.x-1;
			passengersNumT.transform.position.x = gameEndd.transform.position.x-1 ;
			passengersAtShow.transform.position.x = gameEndd.transform.position.x-1;
			
			
			passengersNumT.GetComponent(UI.Text).text = "Score  "+Mathf.Round(scoreCounter);
			passengersAtShow.GetComponent(UI.Text).text = "You Dropped "+passengScript.passengersAtShow;
			passengersAtShow2.transform.position.x = passengersAtShow.transform.position.x+3.3;
			
			gameTime1.GetComponent(UI.Text).text = "";
			
		}
		if(mainCameraScript.statee == "onBusTopView")
		{
			
			gameTimer();
			
			busHealthT.transform.position.x = busTopView.transform.position.x-1;
			
			if(passengersAtShowState == false)
			{
				passengersAtShow.transform.position.x = 0;
	  		}
	  		if(passengersAtShowState == true)
			{
				passengersAtShow.transform.position.x = busTopView.transform.position.x-1 ;
	  		}
	  		passengersAtShow.GetComponent(UI.Text).text = ""+passengScript.passengersAtShow;
	  		passengersAtShow2.transform.position.x = passengersAtShow.transform.position.x+1;
	  		
	  	
	  		passengersNumT.transform.position.x = busTopView.transform.position.x-1 ;
		
			if(bScript.passengersCount >= 50)
			{
				passengersNumT.GetComponent(UI.Text).text = "Bus is Full ";
			}
			else{
				passengersNumT.GetComponent(UI.Text).text = ""+bScript.passengersCount+"  Passengers";
			}
			
		}
		
		if(mainCameraScript.statee == "onHowto" || mainCameraScript.statee == "onBusTopView" || mainCameraScript.statee == "onEnding" || mainCameraScript.statee == "onFinish")
		{
			busIconn.GetComponent.<Renderer>().enabled = false;
			PassengersI.GetComponent.<Renderer>().enabled = false;
			
			passengerText.transform.position.x = 0;
			passengerText.transform.position.y = 0;
			
			busHealthText.transform.position.x = 0;
			busHealthText.transform.position.y = 0;
			
			checkPointText.transform.position.x = 0;
			checkPointText.transform.position.y = 0;
			
			scoreText.transform.position.x = 0;
			scoreText.transform.position.y = 0;
			
			objectiveText.transform.position.x = 0;
			objectiveText.transform.position.y = 0;
		}
		
		if(mainCameraScript.statee == "onBuss")
		{
			gameTimer();
			
			busIconn.GetComponent.<Renderer>().enabled = true;
			PassengersI.GetComponent.<Renderer>().enabled = true;
			
			passengerText.transform.position.x = mainCamera.transform.position.x + 20;
			passengerText.transform.position.y = mainCamera.transform.position.y + 12.5;
		
			busHealthText.transform.position.x = mainCamera.transform.position.x + 20;
			busHealthText.transform.position.y = mainCamera.transform.position.y + 17;
			
			scoreText.transform.position.x = mainCamera.transform.position.x-24;
			scoreText.transform.position.y = mainCamera.transform.position.y+17;
			
			if(checkPointState == false)
			{
				checkPointText.transform.position.x = mainCamera.transform.position.x;
				checkPointText.transform.position.y = mainCamera.transform.position.y+17;
			}
			if(checkPointState == true)
			{
				checkPointText.transform.position.x = 0;
				checkPointText.transform.position.y = 0;
			}
			
			if(bScript.gameStart == true)
			{
				this.GetComponent(UI.Text).enabled = true;
			
				if(scoreState == false)
				{
					scoreCounter++;
				}
				
				if(bScript.positionControl == "bus1")
				{
					checkPointCounter -= 1*Time.deltaTime;
				}
			}
			
		}
		else{
			this.GetComponent(UI.Text).enabled = false;
		}
		
		if(checkPointCounter <= 0)
		{
			checkPointCounter = 0;
			deadState();
		}
		passengerText.GetComponent(UI.Text).text = ""+bScript.passengersCount;
		busHealthText.GetComponent(UI.Text).text = ""+healthCount;
		checkPointText.GetComponent(UI.Text).text = "Time ";
		checkPointText2.GetComponent(UI.Text).text = "."+Mathf.Round(checkPointCounter);
		
		scoreText.GetComponent(UI.Text).text = "Score ";
		scoreText2.GetComponent(UI.Text).text = ""+Mathf.Round(scoreCounter);
		
		this.GetComponent(UI.Text).text = "The Show Starts in  "+countDown3 +" . "+countDown2;
		this.GetComponent(UI.Text).material.color = randomColor;
		busHealthT.GetComponent(UI.Text).material.color = randomColor;
		PassengersI.GetComponent.<Renderer>().material.color = randomColor2;
	  
	  	
		busHealthBarr.transform.localScale.x = heathBarNum;
	  	//busHealthT.transform.position.x = busTopView.transform.position.x-1 ;
	  	busHealthT.GetComponent(UI.Text).text = ""+healthDamage;
	   	
	   	if(healthDamage > 99)
	  	{
	   		deadState();
	   		healthDamage = 100;
	  	}
	  	
	  	if(heathBarNum <= 0)
	  	{
	   		heathBarNum = 0.0f;
	  	}
		
//		busTexxt.GetComponent(UI.Text).material.color = randomColor3;
//		busTexxt.GetComponent(UI.Text).text = "Welcome to fabulous las vegas nevada, this ";
//		busTexxt.transform.Translate(-0.01f,0,0);
//		
//		busTextCounter++;
//		if(busTextCounter > 1000)
//		{
//			busTexxt.transform.position.x = bussBody.transform.position.x+2;
//			busTextCounter = 0;
//		}
		
		if(Input.GetKeyDown(KeyCode.C))
		{
			randomColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
			randomColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
			randomColor3 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		}
		if(healthCount <= 0)
		{
			deadState();
		}
		
		
}

function deadState()
{		
		mainCameraScript.statee = "onEnding";
		
}
function restartOnPlay()
{		
//		counter = 0;
//		countDown2 = 60;
//		countDown3 = 2;
//		checkPointCounter = 30;
//		heathBarNum = 2.0f;
//		healthCount = 100;
//		healthDamage = 0;
//		scoreCounter = 0;
//		scoreState = false;
//		
//		checkPointState = false;
//		LevelsScript.levels = 0; 
//		bScript.gameStart = false;
//		bScript.BusType1 = false; 
//		bScript.positionControl = "bus1";
//		mainCameraScript.statee = "onBuss";
//		
//		bScript.atCaesars = false;
//		
//		objectiveText.transform.position.x = mainCamera.transform.position.x;
//		
//		busTopViewScript.spawnState = "spawn1";
//		
//		passengScript.pNumber = 0;
		Application.LoadLevel ("1960sVegas");
		
}

function gameTimer()
{

		counter ++;
		
		if(counter > 50)
		{
			countDown2 -= 1;
			counter = 0;
		}
		if(countDown2 <= 0)
		{
			countDown3 -= 1;
			countDown2 = 60;
		}
		if(countDown3<0)
		{
			this.GetComponent(UI.Text).enabled = false;
			gameTime1.GetComponent(UI.Text).text = "";
			mainCameraScript.statee = "onFinish";
		}
		
		gameTime1.GetComponent(UI.Text).text = "The Show Starts in  "+countDown3 +" . "+countDown2;

}



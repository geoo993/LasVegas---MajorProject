#pragma strict

public var bTarget:GameObject;
public var bScript:Movement;

public var passengerControl:GameObject;
public var passengersScript:pControl;

public var textTarget:GameObject;
public var TextScript:Textss;


public var passengers4Color:Color = new Color();

public var Passengerss4 : GameObject;
public var goToo : GameObject;

function Start () {

	bTarget = GameObject.Find("Bus");
	bScript = bTarget.GetComponent(Movement);
	
	passengerControl = GameObject.Find("Passengers");
	passengersScript = passengerControl.GetComponent(pControl);
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);
	
	passengers4Color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function Update () {
	
	this.GetComponent.<Renderer>().material.color = passengers4Color;
	moveToHotel();
	
	if(this.transform.position.x == 936 && this.transform.position.y == 144.3)
	{
		if(bScript.atCaesars == false)
		{
			this.transform.position.x = Random.Range(914,960);
			this.transform.position.y = Random.Range(105,130);
		}
		if(bScript.atCaesars == true)
		{
			this.transform.position.y = 10000;
		}
		
	}
}

function OnCollisionEnter(thisCollision:Collision)
{

	if(thisCollision.gameObject.name == "BusTopView")
	{			
		if(bScript.passengersCount < 50)
		{
			bScript.passengersCount += 1;
			Destroy(this.gameObject);
			TextScript.scoreCounter += 500;
		}
			
	}
}

function moveToHotel()
{	
  	var movingSpeed = 1 * Time.deltaTime;
	this.transform.position = Vector3.MoveTowards(this.transform.position, Vector3(936,144.3,-0.25), movingSpeed);
	
}
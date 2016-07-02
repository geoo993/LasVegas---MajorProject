#pragma strict

public var bTarget:GameObject;
public var bScript:Movement;

public var passengerControl:GameObject;
public var passengersScript:pControl;

public var textTarget:GameObject;
public var TextScript:Textss;

public var passengers2Color:Color = new Color();

function Start () {

	bTarget = GameObject.Find("Bus");
	bScript = bTarget.GetComponent(Movement);
	
	passengerControl = GameObject.Find("Passengers");
	passengersScript = passengerControl.GetComponent(pControl);
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);
	
	passengers2Color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function Update () {
	
	this.GetComponent.<Renderer>().material.color = passengers2Color;
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



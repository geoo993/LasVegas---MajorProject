#pragma strict

public var passengers3Color:Color = new Color();

public var pTarget:GameObject;
public var passengScript:pControl;

function Start () {
	
	pTarget = GameObject.Find("Passengers");
	passengScript = pTarget.GetComponent(pControl);	
	
	passengers3Color = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
}

function Update () {
	
	this.GetComponent.<Renderer>().material.color = passengers3Color;

	if(this.transform.position.x == 124 || this.transform.position.x == 327 || this.transform.position.x == 509 || this.transform.position.x == 720.8)
	{
		this.transform.position.y = 200;
	}
	
	if(this.transform.position.y >= 142f)
	{
		passengScript.arrivalState = true;
		this.transform.position.y = 400;
	}

}


function OnCollisionEnter(thisCollision:Collision)
{

	if(thisCollision.gameObject.name == "CaesarsEntrance")
	{			
			//busTopViewScript.onBoardPassengers -= 1;
	}
}



#pragma strict

public var passengersHeadColor:Color = new Color();

function Start () {

	passengersHeadColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));

}

function Update () {

	this.GetComponent.<Renderer>().material.color = passengersHeadColor;
	
	if(Input.GetKeyDown(KeyCode.C))
	{
		passengersHeadColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));;
	}

}
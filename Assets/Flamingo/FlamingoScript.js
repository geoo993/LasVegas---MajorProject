#pragma strict

public var flamingoBodyColour:GameObject;
public var flamingoPColour:GameObject;
public var flamingoSignColour:GameObject;
public var flamingoSign2Colour:GameObject;

public var FlamingoColor:Color = new Color();
public var FlamingoColor2:Color = new Color();

public var counterr:int;
public var flamingoWritingSign:Number;

function Start () {


	flamingoBodyColour = GameObject.Find("FlamingoBody");
	flamingoPColour = GameObject.Find("FlamingoParking");
	
	flamingoSignColour = GameObject.Find("FlamingoSignNight");
	flamingoSign2Colour = GameObject.Find("FlamingoSignNight2");
	
	parkingColour();
}

function Update () {

counterr++;
if(flamingoWritingSign == 0)
{
	flamingoSignColour.GetComponent.<Renderer>().material.color = FlamingoColor2;
	flamingoSign2Colour.GetComponent.<Renderer>().material.color = FlamingoColor2;
}
if(flamingoWritingSign == 1)
{
	flamingoSignColour.GetComponent.<Renderer>().material.color = Color.yellow;
	flamingoSign2Colour.GetComponent.<Renderer>().material.color = Color.cyan;
}
if(flamingoWritingSign == 2)
{
	flamingoSignColour.GetComponent.<Renderer>().material.color = Color.cyan;
	flamingoSign2Colour.GetComponent.<Renderer>().material.color = Color.cyan;
}

if(counterr > 200)
{
	flamingoWritingSign = Mathf.Round(Random.Range(0,3));
	FlamingoColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	counterr = 0;
}

if(Input.GetKeyDown(KeyCode.C))
{
	parkingColour();
	flamingoWritingSign = Mathf.Round(Random.Range(0,2));
}

}

function parkingColour()
{
	FlamingoColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	FlamingoColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	flamingoBodyColour.GetComponent.<Renderer>().material.color = FlamingoColor;
	flamingoPColour.GetComponent.<Renderer>().material.color = FlamingoColor;
	
}


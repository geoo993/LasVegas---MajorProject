#pragma strict

public var sandsHotelP:GameObject;
public var sandsSign:GameObject;

public var sandsHotelBodyy:GameObject;
public var sandsPostWriting:GameObject;

public var sandsColor:Color = new Color();
public var sandsColor2:Color = new Color();

public var counterr:int;
public var SandsWritingSign:Number;

function Start () {

	sandsHotelP = GameObject.Find("SandsParking");
	sandsSign = GameObject.Find("SandsSign3");

	sandsHotelBodyy = GameObject.Find("SandsHotelBody");
	sandsPostWriting = GameObject.Find("SandsWritingDay");
	
	parkingColour();
}

function Update () {

counterr++;
if(SandsWritingSign == 0)
{
	sandsPostWriting.GetComponent.<Renderer>().material.color = sandsColor2;
	sandsSign.GetComponent.<Renderer>().material.color = sandsColor2;
}
if(SandsWritingSign == 1)
{
	sandsPostWriting.GetComponent.<Renderer>().material.color = Color.red;
	sandsSign.GetComponent.<Renderer>().material.color = Color.red;
}
if(SandsWritingSign == 2)
{
	sandsPostWriting.GetComponent.<Renderer>().material.color = Color.gray;
	sandsSign.GetComponent.<Renderer>().material.color = Color.gray;
}

if(counterr > 200)
{
	SandsWritingSign = Mathf.Round(Random.Range(0,3));
	sandsColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	counterr = 0;
}

if(Input.GetKeyDown(KeyCode.C))
{
	parkingColour();
	SandsWritingSign = Mathf.Round(Random.Range(0,2));
}

}

function parkingColour()
{
	sandsColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	sandsColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	sandsHotelBodyy.GetComponent.<Renderer>().material.color = sandsColor;
	sandsHotelP.GetComponent.<Renderer>().material.color = sandsColor;
}


#pragma strict

public var caesarsBodyColour:GameObject;
public var caesarsPColour:GameObject;
public var caesarsWrittingSignColour:GameObject;

public var caesarsColor:Color = new Color();
public var caesarsColor2:Color = new Color();

public var counterr:int;
public var CaesarsWritingSign:int;

function Start () {

	caesarsBodyColour = GameObject.Find("CaesarsPalaceBody");
	caesarsPColour = GameObject.Find("CaesarsPalaceParking");
	caesarsWrittingSignColour = GameObject.Find("CaesarsPalaceWriting");
	
	parkingColour();
}

function Update () {

counterr++;
if(CaesarsWritingSign == 0)
{
	caesarsWrittingSignColour.GetComponent.<Renderer>().material.color = Color.red;
}

if(CaesarsWritingSign == 1)
{
	caesarsWrittingSignColour.GetComponent.<Renderer>().material.color = Color(1, 0.77, 0.02,1);
}

if(counterr > 200)
{
	CaesarsWritingSign = Mathf.Round(Random.Range(0,2));
	//caesarsColor2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	counterr = 0;
}

if(Input.GetKeyDown(KeyCode.C))
{
	parkingColour();
	CaesarsWritingSign = Mathf.Round(Random.Range(0,2));
}


}

function parkingColour()
{
	caesarsColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	caesarsBodyColour.GetComponent.<Renderer>().material.color = caesarsColor;
	caesarsPColour.GetComponent.<Renderer>().material.color = caesarsColor;
}




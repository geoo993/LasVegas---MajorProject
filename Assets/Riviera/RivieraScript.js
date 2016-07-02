#pragma strict


public var rivieraHotelBody:GameObject;
public var rivieraSignColour:GameObject;
public var rivieraWritinSign:GameObject;
public var rivieraWritinSign2:GameObject;

public var rivieraPostWritin:GameObject;
public var rivieraPostWritin2:GameObject;
public var rivieraWritingS:GameObject;

public var rivieraP:GameObject;

public var rColor:Color = new Color();
public var rSignColor:Color = new Color();

public var counterr:int;
public var writingSignNum:Number = 0;

function Start () {
	
	rivieraP = GameObject.Find("RivieraParking");
	rivieraWritingS = GameObject.Find("RivieraWritin");
	
	rivieraHotelBody = GameObject.Find("RivieraHotelBody");
	rivieraSignColour = GameObject.Find("RivieraSign2");
	rivieraWritinSign = GameObject.Find("RivieraWritingSign");
	rivieraWritinSign2 = GameObject.Find("RivieraWritingSign2");
	
	rivieraPostWritin = GameObject.Find("RivieraWriting2Day");
	rivieraPostWritin2 = GameObject.Find("RivieraWriting2Night");

	parkingColour();
}

function Update () {

	rivieraPostWritin.GetComponent.<Renderer>().material.color = rSignColor;
	rivieraWritingS.GetComponent.<Renderer>().material.color = rSignColor;
	
counterr ++;

if(writingSignNum == 0)
{
	rivieraWritinSign.transform.position.z  = 3.1;
	rivieraWritinSign2.transform.position.z  = 3;
	
	rivieraPostWritin.transform.position.z = 4;
	rivieraPostWritin2.transform.position.z = 4.05;
}
if(writingSignNum == 1)
{
	rivieraWritinSign.transform.position.z = 3;
	rivieraWritinSign2.transform.position.z = 3.1;
	
	rivieraPostWritin.transform.position.z = 4.05;
	rivieraPostWritin2.transform.position.z = 4;
}

if(counterr > 150)
{
	writingSignNum = Mathf.Round(Random.Range(0,2));
	rSignColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	
	counterr = 0;
}

if(Input.GetKeyDown(KeyCode.C))
{
	parkingColour();
	writingSignNum = Mathf.Round(Random.Range(0,2));
	
}

}

function parkingColour()
{
	rColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	rSignColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	rivieraHotelBody.GetComponent.<Renderer>().material.color = rColor;
	rivieraP.GetComponent.<Renderer>().material.color = rColor;
}

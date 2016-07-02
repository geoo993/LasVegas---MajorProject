#pragma strict

public var sOutline:GameObject;
public var sWriting1:GameObject;
public var sWriting2:GameObject;
public var sWriting3:GameObject;
public var sWorldIcon1:GameObject;
public var sWorldIcon2:GameObject;

public var sPostWriting1:GameObject;
public var sPostWriting2:GameObject;

public var Star1:GameObject;
public var Star2:GameObject;

public var stardustP:GameObject;
public var stardustWriting:GameObject;

public var startDustColor:Color = new Color();
public var starsColour1:Color = new Color();
public var starsColour2:Color = new Color();
public var starsColour3:Color = new Color();

public var counterr:int;
public var stardustWritingSign:Number;

function Start () {
	
	stardustP = GameObject.Find("StardustParking");
	stardustWriting = GameObject.Find("StarDustWritin");
	
	sOutline = GameObject.Find("StardustOutline");
	sWriting1 = GameObject.Find("StarDustWriting2Night");
	sWriting2 = GameObject.Find("StarDustWriting2Day1");
	sWriting3 = GameObject.Find("StarDustWriting2Day");	
	
	sPostWriting1 = GameObject.Find("StarDustWritingDay1");
	sPostWriting2 = GameObject.Find("StarDustWritingNight");
	Star1 = GameObject.Find("Stars1");	
	Star2 = GameObject.Find("Stars2");	
	
	sWorldIcon1 = GameObject.Find("StarDustWorldMapBoardDay");	
	sWorldIcon2 = GameObject.Find("StarDustWorldMapBoardDayNight");
	
	parkingColour();
}

function Update () {

	Star1.GetComponent.<Renderer>().material.color = starsColour1;
	Star2.GetComponent.<Renderer>().material.color = starsColour2;
	sWriting3.GetComponent.<Renderer>().material.color = starsColour3;
	stardustWriting.GetComponent.<Renderer>().material.color = starsColour3;
	
counterr++;
if(stardustWritingSign == 0)
{
	sWriting1.transform.position.z  = 3;
	sWriting2.transform.position.z  = 3.19;
	sWriting3.transform.position.z  = 3.19;
	
	sPostWriting1.transform.position.z  = 3.76;
	sPostWriting2.transform.position.z  = 3.72;
	
	sWorldIcon1.transform.position.z  = 4.2;
	sWorldIcon2.transform.position.z  = 4.4;
}
if(stardustWritingSign == 1)
{
	sWriting1.transform.position.z  = 3.19;
	sWriting2.transform.position.z  = 3;
	sWriting3.transform.position.z  = 3.19;
	
	sWorldIcon1.transform.position.z  = 4.4;
	sWorldIcon2.transform.position.z  = 4.2;
}
if(stardustWritingSign == 2)
{
	sPostWriting1.transform.position.z  = 3.72;
	sPostWriting2.transform.position.z  = 3.76;
	
	sWriting1.transform.position.z  = 3.19;
	sWriting2.transform.position.z  = 3.19;
	sWriting3.transform.position.z  = 3;
}

if(counterr > 200)
{
	stardustWritingSign = Mathf.Round(Random.Range(0,3));
	starsColour1 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	starsColour2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	starsColour3 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	counterr = 0;
}

if(Input.GetKeyDown(KeyCode.C))
{
	parkingColour();
	stardustWritingSign = Mathf.Round(Random.Range(0,2));
	
}

}

function parkingColour()
{	
	stardustWritingSign = Mathf.Round(Random.Range(0,2));
	startDustColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	starsColour1 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	starsColour2 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	starsColour3 = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
	sOutline.GetComponent.<Renderer>().material.color = startDustColor;
	stardustP.GetComponent.<Renderer>().material.color = startDustColor;
	
}
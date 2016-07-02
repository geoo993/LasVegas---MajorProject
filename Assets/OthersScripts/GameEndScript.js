#pragma strict

public var retrry:GameObject;
public var outOfTime:GameObject;
public var Damagedd:GameObject;

public var colourCounter:int;
public var retryColor:Color = new Color();

public var textTarget:GameObject;
public var TextScript:Textss;

function Start () {
	
	Damagedd = GameObject.Find("YouTrashedTheBus");
	outOfTime = GameObject.Find("YouRunOutOfTime");
	
	retrry = GameObject.Find("PressEnterToRetry");
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);
	retryColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));

}

function Update () {
	
	retrry.GetComponent.<Renderer>().material.color = retryColor;
	outOfTime.GetComponent.<Renderer>().material.color = retryColor;
	Damagedd.GetComponent.<Renderer>().material.color = retryColor;
	
	if(Input.GetKeyDown(KeyCode.C))
	{
		retryColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));;
	}
    
	colourCounter += 1;
	if(colourCounter > 150)
	{
		retryColor = Color(Random.Range(0.0,1.0),Random.Range(0.0,1.0), Random.Range(0.0,1.0));
		colourCounter = 0;
	}
	
	if(TextScript.healthCount <=0 || TextScript.healthDamage > 99)
	{
		Damagedd.transform.position.y = 105.5;
		outOfTime.transform.position.y = 10000;
	}
	
	if(TextScript.checkPointCounter <= 0)
	{
		outOfTime.transform.position.y = 105.5;
		Damagedd.transform.position.y = 10000;
	}
	
     
}

if(Input.GetKeyDown(KeyCode.R))
{
	restart();
}


function restart()
{
	TextScript.restartOnPlay();		
}
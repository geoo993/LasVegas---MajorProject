#pragma strict

public var image1:GameObject;
public var image2:GameObject;
public var image3:GameObject;
public var image4:GameObject;
public var image5:GameObject;

public var imageControl:int;
public var imageType:int;

public var mainCamera:GameObject;
public var mainCameraScript:MainCam;

public var textTarget:GameObject;
public var TextScript:Textss;

function Start () {

image1 = GameObject.Find("RatPack1");
image2 = GameObject.Find("RatPack2");
image3 = GameObject.Find("RatPack3");
image4 = GameObject.Find("RatPack4");
image5 = GameObject.Find("RatPack5");

mainCamera = GameObject.Find("MainCamera");
mainCameraScript = mainCamera.GetComponent(MainCam);

textTarget = GameObject.Find("GameText");
TextScript = textTarget.GetComponent(Textss);

imageType = Mathf.Round(Random.Range(0,5));

}

function Update () {

	if(imageType == 0)
		{
			image1.transform.position.x = 1400;
			image1.transform.position.y = 105;
		}
		else{
			image1.transform.position.y = 1000;
		}
		
		if(imageType == 1)
		{
			image2.transform.position.x = 1400;
			image2.transform.position.y = 105;
		}
		else{
			image2.transform.position.y = 1000;
		}
		
		if(imageType == 2)
		{
			image3.transform.position.x = 1400;
			image3.transform.position.y = 105;
		}
		else{
			image3.transform.position.y = 1000;
		}
		
		if(imageType == 3)
		{
			image4.transform.position.x = 1400;
			image4.transform.position.y = 105;
		}
		else{
			image4.transform.position.y = 1000;
		}
		
		if(imageType == 4)
		{
			image5.transform.position.x = 1400;
			image5.transform.position.y = 105;
		}
		else{
			image5.transform.position.y = 1000;
		}
		
		
	
		if(mainCameraScript.statee == "onFinish")
		{
			imageControl++;
			
			if(imageControl > 500)
			{
				imageType = Mathf.Round(Random.Range(0,5));
				
				imageControl = 0;
			
			}
		}
		
		if(Input.GetKeyDown(KeyCode.R))
		{
			TextScript.restartOnPlay();
		}



}
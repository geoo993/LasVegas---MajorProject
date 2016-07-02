#pragma strict


public var busTopView:GameObject;
public var busTopViewScript:BusToViewMovement;

public var busss:GameObject;
public var busssScript:Movement;

public var textTarget:GameObject;
public var TextScript:Textss;

public var rivieraH:GameObject;
public var rivieraScript:RivieraScript;

public var sandsH:GameObject;
public var sandsScript:SandScript;

public var stardustH:GameObject;
public var stardustScript:StardustScript;

public var flamingoH:GameObject;
public var flamingoScript:FlamingoScript;

public var caesarsH:GameObject;
public var caesarsScript:CaesarsScript;


function Start () {

	rivieraH = GameObject.Find("RivieraHotel");
	rivieraScript = rivieraH.GetComponent(RivieraScript);
	
	sandsH = GameObject.Find("SandsHotel");
	sandsScript = sandsH.GetComponent(SandScript);
	
	stardustH = GameObject.Find("StardustHotel");
	stardustScript = stardustH.GetComponent(StardustScript);
	
	flamingoH = GameObject.Find("FlamingoHotel");
	flamingoScript = flamingoH.GetComponent(FlamingoScript);
	
	caesarsH = GameObject.Find("CaesarsPalaceBuilding");
	caesarsScript = caesarsH.GetComponent(CaesarsScript);
	
	busss = GameObject.Find("Bus");
	busssScript = busss.GetComponent(Movement);
		
	busTopView = GameObject.Find("BusTopView");
	busTopViewScript = busTopView.GetComponent(BusToViewMovement);
	
	textTarget = GameObject.Find("GameText");
	TextScript = textTarget.GetComponent(Textss);

}

function Update () {

}

function OnTriggerEnter(thisTrigger:Collider){

	if(thisTrigger.gameObject.name == "BusTopView")
	{
		//busTopViewScript.BusType2 = false;
		busTopViewScript.forwardState = true;
		rivieraScript.parkingColour();
		sandsScript.parkingColour();
		stardustScript.parkingColour();
		flamingoScript.parkingColour();
		caesarsScript.parkingColour();
		
		TextScript.heathBarNum -= 0.2f;
		TextScript.healthCount -= 1;
		TextScript.healthDamage += 1;
		TextScript.scoreCounter -= 50;
	}
}

function OnTriggerExit(thisTrigger2: Collider) {
	
	if(thisTrigger2.gameObject.name == "BusTopView")
	{
		busTopViewScript.forwardState = false;
	}
}

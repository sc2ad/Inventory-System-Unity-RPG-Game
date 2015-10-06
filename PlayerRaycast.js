#pragma strict
public var HUD: HUDDisplayScript;
private var  lit : boolean = false;
private var  litObj : InteractableScript;
function Start () {

}

function Update () {
	 var myObject : GameObject;
	 var ray = Camera.main.ScreenPointToRay (Vector2(512,384));
	 // Screen Center 			^^^^^^^^^^^^^^^^^^
	 var hit : RaycastHit;
	 if (Physics.Raycast (ray, hit, 5	)) {
	 	//Debug.Log(hit.collider.gameObject.name);
	   if(hit.collider.gameObject.tag == "Interactable"){
			//try{
			var hitObj = hit.collider.gameObject;
				if(hit.distance <= hitObj.GetComponent.<InteractableScript>().clickRange && litObj==null){
					lit=true;					
					hitObj.GetComponent.<InteractableScript>().HighLight();
					litObj = hitObj.GetComponent.<InteractableScript>();
					
				}
				if(Input.GetMouseButtonDown(0)){
						hitObj.GetComponent.<InteractableScript>().Activate();					
				}
				
			//}catch(err)Debug.Log(err);	    
	   	}else{
	   		 lit = false;
	   		 if(litObj !=null)litObj.HighLightOff();
	   		 litObj = null;
	   		 
	   	}
	 } else {
	 	 lit = false;
		 if(litObj !=null)litObj.HighLightOff();
		 litObj = null;
	 }
 }

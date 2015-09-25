import System.Collections.Generic;

var Player : GameObject;
var inv : List.<GameObject>;
var invJ : List.<GameObject>;
var invQ : List.<GameObject>;
var invBE : List.<GameObject>;
var invAE : List.<GameObject>;

var textur : GameObject;
var texturJ : GameObject;
var texturQ : GameObject;
var texturB : GameObject;
var texturA : GameObject;
	
var junkStartX = -200;
var junkIncreaseX = 110;
var junkStartY = 123;
var junkIncreaseY = -110;
var junkIncreaseDuration = 4;

var qStartX = -200;
var qIncreaseX = 110;
var qStartY = 123;
var qIncreaseY = -110;
var qIncreaseDur = 4;

var weStartX = -200;
var weIncreaseX = 110;
var weStartY = 123;
var weIncreaseY = -110;
var weIncreaseDur = 4;

var beStartX = -200;
var beIncreaseX = 110;
var beStartY = 123;
var beIncreaseY = -110;
var beIncreaseDur = 4;

var aeStartX = -200;
var aeIncreaseX = 110;
var aeStartY = 123;
var aeIncreaseY = -110;
var aeIncreaseDur = 4;

var jx = 0;
// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
	if (textur.activeSelf) {
		for (i = 0; i<inv.Count; i++) {
			var script = inv[i].GetComponent(ItemClassProperties);
			script.image.SetActive(true);
		}
	}
	/*
	if (texturJ.activeSelf) {
		for (j=0; j<invJ.Count;j++) {
			script = invJ[j].GetComponent(ItemClassProperties);
			script.image.SetActive(true);
			var imaged = script.image.GetComponent(RectTransform);
			if (j%junkIncreaseDuration == 0) {jx = 0;}
			imaged.anchoredPosition = Vector2(junkIncreaseX*jx+junkStartX, junkIncreaseY*(Mathf.Floor(j/(junkIncreaseDuration)))+junkStartY);
			jx++;
		}
	}
	*/
	loop(textur, inv, weIncreaseDur, weIncreaseX, weStartX, weIncreaseY, weStartY);
	loop(texturJ, invJ, junkIncreaseDuration, junkIncreaseX, junkStartX, junkIncreaseY, junkStartY);
	loop(texturQ, invQ, qIncreaseDur, qIncreaseX, qStartX, qIncreaseY, qStartY);
	loop(texturB, invBE, beIncreaseDur, beIncreaseX, beStartX, beIncreaseY, beStartY);
	loop(texturA, invAE, aeIncreaseDur, aeIncreaseX, aeStartX, aeIncreaseY, aeStartY);
	
	
	if (Input.GetKeyDown("e") && (textur.activeSelf || texturJ.activeSelf || texturQ.activeSelf || texturB.activeSelf || texturA.activeSelf)) {
		Player.SetActive(true);
		textur.SetActive(false);
		texturJ.SetActive(false);
		texturQ.SetActive(false);
		texturB.SetActive(false);
		texturA.SetActive(false);
		/*
		for (i = 0; i<inv.length; i++) {
			var script2 = inv[i].GetComponent(ItemClassProperties);
			script2.image.SetActive(false);
		}
		*/
		
	} else if (Input.GetKeyDown("e")) {
		Player.SetActive(false);
		textur.SetActive(true);
	}
	
}


function loop(textur1, Inventory, increaseDur, increasex, startx, increasey, starty) {

	if (textur1.activeSelf) {
		for (j=0; j<Inventory.Count; j++) {
			var script = Inventory[j].GetComponent(ItemClassProperties);
			script.image.SetActive(true);
			var imaged = script.image.GetComponent(RectTransform);
			if (j%increaseDur == 0) {jx = 0;}
			imaged.anchoredPosition = Vector2(increasex*jx+startx, increasey*(Mathf.Floor(j/increaseDur))+starty);
			jx++;
		}
	} else {
		jx = 0;
	}
}

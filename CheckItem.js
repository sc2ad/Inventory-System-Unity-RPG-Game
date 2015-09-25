var gos : GameObject[];

// Use this for initialization
function Start () {
	for (i= 0;i < gos.length; i++) {
		var script = gos[i].GetComponent(ItemClassProperties);
		Debug.Log(script.val);
		Debug.Log(script.damage);
		Debug.Log(script.durability);
	}
}

// Update is called once per frame
function Update () {
}


var tag2 : String = "Item";
var inventory : GameObject;

function OnTriggerEnter (col : Collider) {
	if (col.tag == tag2) {
		var script = inventory.GetComponent(InventoryClass);
		var script2 = col.gameObject.GetComponent(ItemClassProperties);
		if (script2.typerz == 3) {
			script.invJ.Add(col.gameObject);
		} else if (script2.typerz == 4) {
			script.invQ.Add(col.gameObject);
		} else if (script2.typerz == 1) {
			script.invBE.Add(col.gameObject);
		} else if (script2.typerz == 2) {
			script.invAE.Add(col.gameObject);
		} else {
			script.inv.Add(col.gameObject);
		}
		col.gameObject.transform.position.x = 0;
		col.gameObject.transform.position.y = -100;
		col.gameObject.transform.position.z = 0;
		//col.gameObject.SetActive(false);
	}
}

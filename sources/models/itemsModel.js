export default class ItemsModel {
	constructor(finder) {
		this.finderCollection = finder;
		this.dataCollection = new webix.DataCollection();
		this.customFinderDataPull = {};
	}

	parseItems(dataArray, parentId) {
		const finderDataPull = {};
		dataArray.forEach((item) => {
			const id = webix.uid();
			item.id = id;
			finderDataPull[item._id] = item;
		});
		Object.assign(this.customFinderDataPull, finderDataPull);
		if (parentId) {
			this.finderCollection.parse({data: dataArray, parent: parentId});
		}
		else {
			this.finderCollection.parse(dataArray);
		}
	}

	addItem(item) {
		const id = webix.uid();
		item.id = id;
		this.finderCollection.add(item);
		this.customFinderDataPull[item._id] = item;
	}

	updateItems(items) {
		if (!Array.isArray(items)) {
			items = [items];
		}
		items.forEach((updatedItem) => {
			const foundedItem = this.customFinderDataPull[updatedItem._id];
			if (foundedItem) {
				delete updatedItem.id;
				this.finderCollection.updateItem(foundedItem.id, updatedItem);
				Object.assign(foundedItem, updatedItem);
			}
		});
	}

	removeItem(id, baseId) {
		let item = null;
		if (id) {
			item = this.finderCollection.getItem(id);
			delete this.customFinderDataPull[item._id];
			this.finderCollection.remove(id);
		}
		else if (baseId) {
			item = this.customFinderDataPull[baseId];
			this.finderCollection.remove(item.id);
			delete this.customFinderDataPull[baseId];
		}
		else {
			webix.message("Nothing to remove");
		}
	}

	findItem(id, baseId) {
		let item = null;
		if (id) {
			item = this.finderCollection.getItem(id);
		}
		else if (baseId) {
			item = this.customFinderDataPull[baseId];
		}
		else {
			webix.message("Nothing was found");
		}
		return item;
	}

	clearAll() {
		this.finderCollection.clearAll();
		this.customFinderDataPull = {};
	}

	parseToDataCollection(data) {
		this.dataCollection.parse(webix.copy(data));
	}

	getFinderCollection() {
		return this.finderCollection;
	}

	getDataCollection() {
		return this.dataCollection;
	}
}

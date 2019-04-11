let finderView;
let galleryDataview;
let galleryPager;
let metadataTable;
let mainView;
let imageWindow;
let galleryDataviewContextMenu;
let metadataTableThumbnailTemplate;

function setMainView(view) {
	mainView = view;
}

function setGalleryDataview(galleryDataView) {
	galleryDataview = galleryDataView;
}

function setMetadataTable(metadataTableView) {
	metadataTable = metadataTableView;
}

function setFinderView(finderview) {
	finderView = finderview;
}

function setGalleryPager(pagerView) {
	galleryPager = pagerView;
}

function getGalleryDataview() {
	return galleryDataview;
}

function getMetadataTableView() {
	return metadataTable;
}

function getFinderView() {
	return finderView;
}

function getGalleryPager() {
	return galleryPager;
}

function getMainView() {
	return mainView;
}

function getImageWindow() {
	return imageWindow;
}

function setImageWindow(imageWindowView) {
	imageWindow = imageWindowView;
}

function setGalleryDataviewContextMenu(galleryContextMenu) {
	galleryDataviewContextMenu = galleryContextMenu;
}

function getGalleryDataviewContextMenu() {
	return galleryDataviewContextMenu;
}

function setMetadataTableThumbnailTemplate(thumbnailTemplate) {
	metadataTableThumbnailTemplate = thumbnailTemplate;
}

function getMetadataTableThumbnailTemplate() {
	return metadataTableThumbnailTemplate;
}

export default {
	setGalleryDataview,
	setMetadataTable,
	setFinderView,
	setGalleryPager,
	getGalleryDataview,
	getMetadataTableView,
	getFinderView,
	getGalleryPager,
	setMainView,
	getMainView,
	getImageWindow,
	setImageWindow,
	setGalleryDataviewContextMenu,
	getGalleryDataviewContextMenu,
	setMetadataTableThumbnailTemplate,
	getMetadataTableThumbnailTemplate
};
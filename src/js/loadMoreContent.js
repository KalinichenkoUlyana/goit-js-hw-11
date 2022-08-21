function loadMoreContent() {

  photoApiService.fetchPhotos()
    .then(photos => {
      checkHitsLength(photos);
      addRenderList(photos);
    })
    .then(smoothScroll)
    .catch(error => console.log(error));
    
}

export default loadMoreContent;
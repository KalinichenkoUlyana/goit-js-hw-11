

function checkHitsLength(data) {

  if (data.hits.length < photoApiService.per_page) {
    moreBtn.classList.add('is-hidden');
  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  return;
  }
}

export default checkHitsLength;
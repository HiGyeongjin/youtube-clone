class YoutubeService {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: "GET",
      redirect: "follow",
    };
  }

  mostPopular() {
    //유튜브에서 가장 유명한 영상들의 데이터를 받아옴.
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?&part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${`AIzaSyDqC6RvlhzrU4wupY19pMYO6tCTTMIPqPA`}`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items)
      .catch((error) => console.log("error", error));
  }
}

export default YoutubeService;

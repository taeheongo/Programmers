function solution(genres, plays) {
  var answer = [];

  const hash = {};

  genres.forEach((genre, i) => {
    const score = plays[i],
      title = i;
    const newSong = { score, title };

    if (!hash[genre]) {
      hash[genre] = {
        sum: score,
        songs: [newSong],
      };

      return;
    }

    hash[genre].sum += score;

    if (score < hash[genre].songs[0].score) {
      if (hash[genre].songs[1]) {
        if (score <= hash[genre].songs[1].score) {
          return; // 그대로 유지
        } else {
          hash[genre].songs = [hash[genre].songs[0], newSong];
        }
      } else {
        hash[genre].songs = [hash[genre].songs[0], newSong];
      }
    } else if (score === hash[genre].songs[0].score) {
      if (hash[genre].songs[1] && hash[genre].songs[1].score === score) {
        return; // 그대로 유지
      } else {
        hash[genre].songs = [hash[genre].songs[0], newSong];
      }
    } else {
      hash[genre].songs = [newSong, hash[genre].songs[0]];
    }
  });

  const keys = Object.keys(hash);
  keys.sort((a, b) => hash[b].sum - hash[a].sum);

  keys.forEach((key) => {
    if (hash[key].songs.length === 2) {
      answer.push(hash[key].songs[0].title);
      answer.push(hash[key].songs[1].title);
    } else {
      answer.push(hash[key].songs[0].title);
    }
  });

  return answer;
}

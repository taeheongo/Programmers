function solution(new_id) {
  var answer = "";

  new_id = new_id.toLowerCase();
  new_id = new_id.replace(/[^a-z0-9\-\_\.]/g, "");
  new_id = new_id.replace(/\.{2,}/g, ".");
  new_id = new_id.replace(/^\.?(.*?)\.?$/, "$1");

  if (new_id === "") {
    new_id = "a";
  }

  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id.match(/(.*?)\.$/)) {
      new_id = new_id.slice(0, new_id.length - 1);
    }
  }

  if (new_id.length <= 2) {
    let last = new_id[new_id.length - 1];
    while (new_id.length < 3) {
      new_id = new_id + last;
    }
  }

  answer = new_id;
  return answer;
}

function solution(priorities, location) {
    var answer = 0;

    const new_priorities = priorities.map((p, i) => {
        return {
            p,
            id: i
        }
    })
    let doc = new_priorities[location]

    while (new_priorities.length) {
        let hasBigger = new_priorities.some((elem) => new_priorities[0].p < elem.p);
        let top = new_priorities.shift();
        if (hasBigger) {
            new_priorities.push(top);
        } else {
            answer++;
            if (top.id === doc.id) {
                break;
            }
        }
    }

    return answer;
}
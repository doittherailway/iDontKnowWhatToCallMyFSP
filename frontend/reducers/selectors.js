
function earliestToLatest(a, b) {
    return a.createdAt - b.createdAt;
}

function latestToEarliest(a, b) {
    return b.createdAt - a.createdAt;
}
//https://stackoverflow.com/a/53513062

export const sortByLatest = (array) => {
    return array.sort(latestToEarliest);
};

////
export const timeDifference = (previous) => {
    let current = Date.now();
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let elapsed = current - previous;
    if (elapsed < msPerMinute) {
        return Math.round(elapsed / 1000) <= 1 ? Math.round(elapsed / 1000) + ' second ago' : Math.round(elapsed / 1000) + ' seconds ago';
    } else if (elapsed < msPerHour) {
        return Math.round(elapsed / msPerMinute) <= 1 ? Math.round(elapsed / msPerMinute) + ' minute ago' : Math.round(elapsed / msPerMinute) + ' minutes ago';
    } else if (elapsed < msPerDay) {
        return Math.round(elapsed / msPerHour) <= 1 ? Math.round(elapsed / msPerHour) + ' hour ago' : Math.round(elapsed / msPerHour) + ' hours ago';
    } else {
        let date = new Date(previous);
        return date.toDateString();
    }
};

// https://stackoverflow.com/a/6109105

export const countCheckins = (userId, checkins) => {
    let counter = 0;
    checkins.map(checkin => {
        if (checkin.userId === userId) {
            counter += 1
        }
    })
    return counter;
}

export const countUniqueCheckins = (userId, checkins) => {
    let unique = [];

    checkins.map(checkin => {
        if (!unique.includes(checkin.beerId) && userId === checkin.userId) {
            unique.push(checkin.beerId);
        }
    });

    return unique.length;
};

// export const debounce = (func, wait) => {
//     let timeout;

//     return function() {
//         let context = this, args = arguments;
//         let later = function() {
//             timeout = null;
//             func.apply(context, args);
//         };

//         let callNow = !timeout;
//         clearTimeout(timeout);
//         timeout = setTimeout(later, wait);
//         if (callNow) func.apply(context, args);
//     };
// };

// https://davidwalsh.name/javascript-debounce-function


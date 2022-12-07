export const loadProjects = async () => await fetch("https://parseapi.back4app.com/classes/Project", {
    headers: {
        "X-Parse-Application-Id": "yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9",
        "X-Parse-REST-API-Key": "3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c"
    }
}).then(r => r.json());

export const unarchiveProject = async (id) => await fetch(`https://parseapi.back4app.com/functions/unarchiveProject?id=${id}`, {
    method: "POST",
    headers: {
        "X-Parse-Application-Id": "yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9",
        "X-Parse-REST-API-Key": "3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c"
    }
});

export const archiveProject = async (id) => await fetch(`https://parseapi.back4app.com/functions/archiveProject?id=${id}`, {
    method: "POST",
    headers: {
        "X-Parse-Application-Id": "yB953MbsVE0hvNYJLy9Udleb7uF0bwB4AWDoAuD9",
        "X-Parse-REST-API-Key": "3TA8ugnSSIN1TB8tQNDGTudYk00i9dghfwloy84c"
    }
});

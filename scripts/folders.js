/**
 * Gets the folder with the ID
 */
function getEntity(apiUri, token, drawer, id, callback) {
    // https://hack.softheon.io/api/enterprise/content/v1/folder/{drawer}/{id}
    var url = apiUri + "/content/v1/folder/" + drawer + "/" + id;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "GET",
        "headers": {
            "authorization": "Bearer " + token
        }, 
        success: function(data, textStatus, xhr) {
            callback(xhr.status, data);
        },
        error: function(xhr, textStatus) {
            callback(xhr.status);
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

/**
 * Inserts a folder of the specified type
 */
function insertEntity(apiUri, token, drawer, type, callback) {
    // https://hack.softheon.io/api/enterprise/content/v1/folder/{drawer}
    var url = apiUri + "/content/v1/folder/" + drawer;

    var folder = {
        "Acl": -1,
        "Type": type,
        "Name": "EnterpriseClientSample - Javascript",
        "Profiles": [
            {
                "Acl": -1,
                "Type": 1,
                "Strings": [
                    "Hello"
                ],
                "Integers": [
                    2
                ],
                "Doubles": [
                    0
                ],
                "Dates": [
                    "2017-02-06T18:47:04"
                ]
            },
            {
                "Acl": -1,
                "Type": 2,
                "Strings": [
                    "Small String",
                    "Big\r\nMultiline\r\nString."
                ],
                "Integers": [
                    2017,
                    1,
                    2,
                    1,
                    4
                ],
                "Doubles": [
                    2.17
                ],
                "Dates": [
                    "2017-02-17T00:00:00"
                ]
            }
        ],
    };

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
            "authorization": "Bearer " + token,
            "content-type": "application/json"
        },
        "processData": false,
        "data": JSON.stringify(folder),
        success: function (data, textStatus, xhr) {
            callback(xhr.status, data);
        },
        error: function (xhr, textStatus) {
            callback(xhr.status);
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

/**
 * Updates a folder with the specified ID
 */
function updateEntity(apiUri, token, drawer, id, folder, callback) {
    // https://hack.softheon.io/api/enterprise/content/v1/folder/{drawer}/{id}
    var url = apiUri + "/content/v1/folder/" + drawer + "/" + id;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "PUT",
        "headers": {
            "authorization": "Bearer " + token,
            "content-type": "application/json"
        },
        "processData": false,
        "data": JSON.stringify(folder),
        success: function (data, textStatus, xhr) {
            callback(xhr.status, data);
        },
        error: function (xhr, textStatus) {
            callback(xhr.status);
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

/**
 * Deletes the folder with the ID
 */
function deleteEntity(apiUri, token, drawer, id, callback) {
    // https://hack.softheon.io/api/enterprise/content/v1/folder/{drawer}/{id}
    var url = apiUri + "/content/v1/folder/" + drawer + "/" + id;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "DELETE",
        "headers": {
            "authorization": "Bearer " + token
        }, 
        success: function(data, textStatus, xhr) {
            callback(xhr.status, data);
        },
        error: function(xhr, textStatus) {
            callback(xhr.status);
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
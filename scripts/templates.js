/**
 * Gets the template of the specified type
 */
function getTemplate(apiUri, token, type, callback) {
    // https://hack.softheon.io/api/enterprise/template/v1/ftl/{type}
    var url = apiUri + "/template/v1/ftl/" + type;

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
 * Inserts the template of the specified type
 */
function insertTemplate(apiUri, token, type, callback) {
    // https://hack.softheon.io/api/enterprise/template/v1/ftl
    var url = apiUri + "/template/v1/ftl";

    var template = {
        "Category": "Common",
        "Type": type,
        "Name": "Hello World",
        "Profiles": [
            {
                "Type": 1,
                "Name": "Content",
                "Fields": [
                    {
                        "Name": "Phrase 1",
                        "Type": "String",
                        "Index": 0,
                        "Position": 0,
                        "Default": "Hello",
                        "Length": 10
                    },
                    {
                        "Name": "Phrase 2",
                        "Type": "ComboBox",
                        "Index": 0,
                        "Position": 1,
                        "Items": [
                            {
                                "Name": "World",
                                "Value": 0,
                                "Type": "ComboBoxItem"
                            },
                            {
                                "Name": "CEWIT",
                                "Value": 1,
                                "Type": "ComboBoxItem"
                            },
                            {
                                "Name": "Hackers",
                                "Value": 2,
                                "Type": "ComboBoxItem"
                            }
                        ]
                    }
                ]
            },
            {
                "Type": 2,
                "Name": "Demo",
                "Fields": [
                    {
                        "Name": "Basic String",
                        "Type": "String",
                        "Index": 0,
                        "Position": 0
                    },
                    {
                        "Name": "Multiline String",
                        "Type": "String",
                        "Index": 1,
                        "Position": 1,
                        "Length": 500,
                        "IsMultiline": true
                    },
                    {
                        "Name": "Basic Integer",
                        "Type": "Integer",
                        "Index": 0,
                        "Position": 2
                    },
                    {
                        "Name": "Basic Double",
                        "Type": "Double",
                        "Index": 0,
                        "Position": 3
                    },
                    {
                        "Name": "Basic Date",
                        "Type": "DateTime",
                        "Index": 0,
                        "Position": 4
                    },
                    {
                        "Name": "Check Box",
                        "Type": "CheckBox",
                        "Index": 1,
                        "Position": 5
                    },
                    {
                        "Name": "Radio Button",
                        "Type": "RadioButton",
                        "Index": 2,
                        "Position": 6,
                        "Items": [
                            {
                                "Name": "Radio 1",
                                "Value": 0,
                                "Type": "RadioButton"
                            },
                            {
                                "Name": "Radio 2",
                                "Value": 1,
                                "Type": "RadioButton"
                            },
                            {
                                "Name": "Radio 3",
                                "Value": 2,
                                "Type": "RadioButton"
                            }
                        ]
                    },
                    {
                        "Name": "Combo Box",
                        "Type": "ComboBox",
                        "Index": 3,
                        "Position": 7,
                        "Items": [
                            {
                                "Name": "Combo 1",
                                "Value": 0,
                                "Type": "ComboBoxItem"
                            },
                            {
                                "Name": "Combo 2",
                                "Value": 1,
                                "Type": "ComboBoxItem"
                            },
                            {
                                "Name": "Combo 3",
                                "Value": 2,
                                "Type": "ComboBoxItem"
                            }
                        ]
                    },
                    {
                        "Name": "List Box",
                        "Type": "ListBox",
                        "Index": 4,
                        "Position": 8,
                        "Items": [
                            {
                                "Name": "List 1",
                                "Value": 1,
                                "Type": "ListBoxItem"
                            },
                            {
                                "Name": "List 2",
                                "Value": 2,
                                "Type": "ListBoxItem"
                            },
                            {
                                "Name": "List 3",
                                "Value": 4,
                                "Type": "ListBoxItem"
                            }
                        ]
                    }
                ]
            }
        ],
        "Drawers": [1]
    }

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "processData": false,
        "data": JSON.stringify(template),
        "headers": {
            "authorization": "Bearer " + token,
            "content-type": "application/json"
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
 * Gets the template of the specified type
 */
function updateTemplate(apiUri, token, template, callback) {
    // https://hack.softheon.io/api/enterprise/template/v1/ftl/{type}
    var url = apiUri + "/template/v1/ftl/" + template.Type;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": url,
        "method": "PUT",
        "processData": false,
        "data": JSON.stringify(template),
        "headers": {
            "authorization": "Bearer " + token,
            "content-type": "application/json"
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
 * Deletes the template of the specified type
 */
function deleteTemplate(apiUri, token, type, callback) {
    // https://hack.softheon.io/api/enterprise/template/v1/ftl/{type}
    var url = apiUri + "/template/v1/ftl/" + type;

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
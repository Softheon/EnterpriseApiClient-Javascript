// Global Parameters
var global_enterpriseEndpointUri = "http://localhost/api/enterprise";
var global_tokenEndpointUri = "https://hack.softheon.io/api/identity/core/connect/token";
var global_clientId = "hack001";
var global_clientSecret = "hack001";
var global_scope = "enterpriseapi";
var global_drawer = 1;
var global_token;

/**
 * On Document Ready
 */
$(function () {
    requestAccessToken(global_enterpriseEndpointUri,
        global_tokenEndpointUri,
        global_clientId,
        global_clientSecret,
        global_scope,
        function (token) {
            global_token = token;
            $("button").prop("disabled", false);
        });
});

/**
 * Handles Click event for Insert Template button 
 */
function onclick_InsertTemplate(params) {
    var type = $("#txtInsertTemplateType").val();
    insertTemplate(global_enterpriseEndpointUri, global_token, type,
        function (status, data) {
            var root = $("#resInsertTemplate");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Handles Click event for Get Template button 
 */
function onclick_GetTemplate(params) {
    var type = $("#txtGetTemplateType").val();
    getTemplate(global_enterpriseEndpointUri, global_token, type,
        function (status, data) {
            var root = $("#resGetTemplate");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Handles Click event for Update Template button 
 */
function onclick_UpdateTemplate(params) {
    var type = $("#txtUpdateTemplateType").val();
    var name = $("#txtUpdateTemplateName").val();

    // Get template first
    getTemplate(global_enterpriseEndpointUri, global_token, type,
        function (status, data) {
            if (status === 200) {
                data.Name = name;
                updateTemplate(global_enterpriseEndpointUri, global_token, data,
                    function (status, data) {
                        var root = $("#resUpdateTemplate");
                        setStatus(root, status.toString());
                        displayResult(root, data);
                    });
            }
        });
}

/**
 * Handles Click event for Delete Template button 
 */
function onclick_DeleteTemplate(params) {
    var type = $("#txtDeleteTemplateType").val();
    deleteTemplate(global_enterpriseEndpointUri, global_token, type,
        function (status, data) {
            var root = $("#resDeleteTemplate");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Handles Click event for Insert Entity button 
 */
function onclick_InsertEntity(params) {
    var type = $("#txtInsertEntityType").val();
    insertEntity(global_enterpriseEndpointUri, global_token, global_drawer, type,
        function (status, data) {
            var root = $("#resInsertEntity");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Handles Click event for Get Entity button 
 */
function onclick_GetEntity(params) {
    var id = $("#txtGetEntityID").val();
    getEntity(global_enterpriseEndpointUri, global_token, global_drawer, id,
        function (status, data) {
            var root = $("#resGetEntity");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Handles Click event for Update Entity button 
 */
function onclick_UpdateEntity(params) {
    var id = $("#txtUpdateEntityID").val();
    var phrase = $("#txtUpdateEntityPhrase").val();

    // Get Entity first
    getEntity(global_enterpriseEndpointUri, global_token, global_drawer, id,
        function (status, data) {
            if (status === 200) {
                data.Profiles[0].Strings[0] = phrase;
                updateEntity(global_enterpriseEndpointUri, global_token, global_drawer, id, data,
                    function (status, data) {
                        var root = $("#resUpdateEntity");
                        setStatus(root, status.toString());
                        displayResult(root, data);
                    });
            }
        });
}

/**
 * Handles Click event for Delete Entity button 
 */
function onclick_DeleteEntity(params) {
    var id = $("#txtDeleteEntityID").val();
    deleteEntity(global_enterpriseEndpointUri, global_token, global_drawer, id,
        function (status, data) {
            var root = $("#resDeleteEntity");
            setStatus(root, status.toString());
            displayResult(root, data);
        });
}

/**
 * Sets the status label
 */
function setStatus(root, status) {
    var element = root.find(".label");
    element.html(status);

    element.removeClass("label-success");
    element.removeClass("label-danger");
    element.removeClass("label-warning");

    if (status.substring(0, 1) == "2") {
        element.addClass("label-success");
    }
    else if (status.substring(0, 1) == "5") {
        element.addClass("label-danger");
    }
    else {
        element.addClass("label-warning");
    }
}

/**
 * Displays the result object
 */
function displayResult(root, data) {
    if (data) {
        root.find(".response").html(JSON.stringify(data));
    }
    else {
        root.find(".response").html("No Content");
    }

    root.collapse('show');
}
(function(window, undefined) {
  var dictionary = {
    "fd4a953a-2ebe-4745-9075-688ce412f17c": "signup3",
    "9420af02-9648-4e08-a13c-b30000f8ec01": "welcome",
    "5a0a9db0-fc2c-4f27-a6a6-eb2e99ac3e84": "signup2",
    "9a5a646f-db85-450e-8bb8-9d6a12edd32d": "Teacher",
    "125a57e2-d8dc-4101-8a31-5fb5b668ab20": "nec",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "c30aa5bc-dc0b-492d-aa8e-361924ce4fbc": "signup",
    "0b5f925e-5140-4682-b7b1-c2dc1298119c": "login",
    "c7d9e790-0f42-4cce-aa97-22df7b7098ed": "introduction",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
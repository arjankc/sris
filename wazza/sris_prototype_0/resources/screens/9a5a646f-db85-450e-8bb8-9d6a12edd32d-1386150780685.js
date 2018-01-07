jQuery("#simulation")
  .on("click", ".s-9a5a646f-db85-450e-8bb8-9d6a12edd32d .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rich_text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/125a57e2-d8dc-4101-8a31-5fb5b668ab20"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_1"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_1"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Rich_text_1"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes": {
                        "background-color": "#EBEBEB",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(96 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#EBEBEB",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(96 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_10"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes": {
                        "background-color": "#EBEBEB",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(102 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#EBEBEB",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(102 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_11"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_7",
                    "effect": {
                      "type": "bounce",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_11"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes": {
                        "background-color": "#EBEBEB",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px"
                      },
                      "expressions": {
                        "width": "Math.max(112 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CDCDCD",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CDCDCD",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CDCDCD",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CDCDCD",
                        "border-radius": "4px 4px 4px 4px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "2px",
                        "padding-left": "16px",
                        "-pie-background": "#EBEBEB",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(112 - 1 - 1 - 16 - 2, 0) + 'px'",
                        "height": "Math.max(29 - 1 - 1 - 2 - 2, 0) + 'px'"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Group_12"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_6",
                    "effect": {
                      "type": "bounce",
                      "duration": 500
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-Group_12"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_3",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-wb"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-videos"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-book",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-wb",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-book"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-videos"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-Image_5",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-videos"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-videos",
                    "effect": {
                      "type": "slide",
                      "duration": 500,
                      "direction": "up"
                    }
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-wb"
                  }
                }
              ]
            }
          ]
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-book"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-videos"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-videos"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-book"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": "#s-book"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-wb"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": "#s-wb"
                  }
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-9a5a646f-db85-450e-8bb8-9d6a12edd32d .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "19px 19px 19px 19px",
                        "padding-top": "10px",
                        "padding-right": "10px",
                        "padding-bottom": "10px",
                        "padding-left": "10px"
                      },
                      "expressions": {
                        "width": "Math.max(321 - 1 - 1 - 10 - 10, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 10 - 10, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#74B9EF",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#74B9EF",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#74B9EF",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#74B9EF",
                        "border-radius": "19px 19px 19px 19px",
                        "padding-top": "10px",
                        "padding-right": "10px",
                        "padding-bottom": "10px",
                        "padding-left": "10px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(321 - 1 - 1 - 10 - 10, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 10 - 10, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image#moz": "-moz-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#wk": "-webkit-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#FFFFFF), color-stop(100%,#E6E6E6))",
                        "background-image#op": "-o-linear-gradient(top,#FFFFFF,#E6E6E6)",
                        "background-image#draft": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#FFFFFF,#E6E6E6)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-9a5a646f-db85-450e-8bb8-9d6a12edd32d .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Rectangle_7": {
                      "attributes": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "19px 19px 19px 19px",
                        "padding-top": "10px",
                        "padding-right": "10px",
                        "padding-bottom": "10px",
                        "padding-left": "10px"
                      },
                      "expressions": {
                        "width": "Math.max(321 - 1 - 1 - 10 - 10, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 10 - 10, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Rectangle_7": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#CCCCCC",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-width": "1px",
                        "border-bottom-style": "solid",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#CCCCCC",
                        "border-radius": "19px 19px 19px 19px",
                        "padding-top": "10px",
                        "padding-right": "10px",
                        "padding-bottom": "10px",
                        "padding-left": "10px"
                      },
                      "expressions-ie": {
                        "width": "Math.max(321 - 1 - 1 - 10 - 10, 0) + 'px'",
                        "height": "Math.max(37 - 1 - 1 - 10 - 10, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-image": "none"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 input": {
                      "attributes": {
                        "color": "#030303",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes-ie": {
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-9a5a646f-db85-450e-8bb8-9d6a12edd32d .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_11": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_4": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_12": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_13": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_14": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_5": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_15": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_16": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_17": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_6": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_18") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_18": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes": {
                        "background-color": "#0087CB",
                        "background-image#moz": "-moz-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#wk": "-webkit-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#old": "-webkit-gradient(linear,left top,left bottom,color-stop(0%,#0087CB), color-stop(100%,#006CA3))",
                        "background-image#op": "-o-linear-gradient(top,#0087CB,#006CA3)",
                        "background-image#draft": "linear-gradient(to bottom,#0087CB,#006CA3)"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "line-height": "11pt"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19 input": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "left",
                        "text-decoration": "none",
                        "font-family": "Arial",
                        "font-size": "11pt",
                        "font-style": "normal",
                        "font-weight": "400"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Input_19": {
                      "attributes-ie": {
                        "-pie-background": "linear-gradient(to bottom,#0087CB,#006CA3)",
                        "-pie-poll": "false"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Label_3": {
                      "attributes": {
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "0px",
                        "padding-left": "2px",
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "4px 4px 0px 0px"
                      },
                      "expressions": {
                        "width": "Math.max(134 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(39 - 1 - 0 - 2 - 0, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Label_3": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "4px 4px 0px 0px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "0px",
                        "padding-left": "2px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(134 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(39 - 1 - 0 - 2 - 0, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Label_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Label_4": {
                      "attributes": {
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "0px",
                        "padding-left": "2px",
                        "background-color": "#EEEEEE",
                        "background-image": "none",
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "4px 4px 0px 0px"
                      },
                      "expressions": {
                        "width": "Math.max(170 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(39 - 1 - 0 - 2 - 0, 0) + 'px'"
                      }
                    }
                  },{
                    "#s-9a5a646f-db85-450e-8bb8-9d6a12edd32d #s-Label_4": {
                      "attributes-ie": {
                        "border-top-width": "1px",
                        "border-top-style": "solid",
                        "border-top-color": "#EEEEEE",
                        "border-right-width": "1px",
                        "border-right-style": "solid",
                        "border-right-color": "#EEEEEE",
                        "border-bottom-width": "0px",
                        "border-bottom-style": "none",
                        "border-bottom-color": "#000000",
                        "border-left-width": "1px",
                        "border-left-style": "solid",
                        "border-left-color": "#EEEEEE",
                        "border-radius": "4px 4px 0px 0px",
                        "padding-top": "2px",
                        "padding-right": "2px",
                        "padding-bottom": "0px",
                        "padding-left": "2px",
                        "-pie-background": "#EEEEEE",
                        "-pie-poll": "false"
                      },
                      "expressions-ie": {
                        "width": "Math.max(170 - 1 - 1 - 2 - 2, 0) + 'px'",
                        "height": "Math.max(39 - 1 - 0 - 2 - 0, 0) + 'px'"
                      }
                    }
                  } ]
                }
              ]
            }
          ]
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-9a5a646f-db85-450e-8bb8-9d6a12edd32d .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Input_11")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_12")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_13")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_14")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_15")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_16")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_17")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_6")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_18")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_19")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_3")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Label_4")) {
      jEvent.undoCases(jFirer);
    }
  });
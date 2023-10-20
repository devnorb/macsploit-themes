/** Duck Theme */
define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
    t.isDark = !0;
    t.cssClass = "ace-tomorrow_night-theme";
    t.cssText = `
      .ace-tomorrow_night-theme .ace_gutter {
        background: transparent;
        color: #4169E1;  
      }
      
      .ace-tomorrow_night-theme .ace_print-margin {
        width: 1px;
        background: transparent;
      }
      
      .ace-tomorrow_night-theme {
        background: url('https://cdn.discordapp.com/attachments/911776464817500164/1164714794574688337/DougHitchcoxMallard01-1024x525.png') no-repeat center center fixed;
        background-size: cover;
        color: #ede8e8; 
        text-shadow: #ff6f00;
        border: #edebeb;
      }
      
      .ace-tomorrow_night-theme .ace_marker-layer {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selection {
        background-color: #F0FFFF;
      }
      
      .ace-tomorrow_night-theme.ace_multiselect .ace_selection.ace_start {
        box-shadow: none;
      }
      
      .ace-tomorrow_night-theme .ace_step {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-start {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_bracket-unmatched {
        margin: -1px 0 0 -1px;
        border: none;
      }
      
      .ace-tomorrow_night-theme .ace_active-line {
        background: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_gutter-active-line {
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_selected-word {
        border: none;
        background-color: rgba(225,93,214, 0.1);
      }
      
      .ace-tomorrow_night-theme .ace_invisible {
        color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_keyword,
      .ace-tomorrow_night-theme .ace_meta,
      .ace-tomorrow_night-theme .ace_storage,
      .ace-tomorrow_night-theme .ace_storage.ace_type {
        color: #9FE2BF; 
      }
      
      .ace-tomorrow_night-theme .ace_keyword.ace_operator {
        color: #9FE2BF; 
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_character,
      .ace-tomorrow_night-theme .ace_constant.ace_language,
      .ace-tomorrow_night-theme .ace_constant.ace_numeric,
      .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
      .ace-tomorrow_night-theme .ace_support.ace_constant,
      .ace-tomorrow_night-theme .ace_variable.ace_parameter {
        color: #0F52BA;  
      }
      
      .ace-tomorrow_night-theme .ace_constant.ace_other {
        color: #CCCCFF;
      }
      
      .ace-tomorrow_night-theme .ace_invalid {
        color: #c70f02;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme .ace_invalid.ace_deprecated {
        color: #c70f02;
        background-color: transparent;
      }
      
      .ace-tomorrow_night-theme {
        text-shadow: #6a80f7;
      }
      
      .ace-tomorrow_night-theme .ace_keyword.ace_operator {
        color: #CCCCFF;
      }
      .ace-tomorrow_night-theme {
        text-shadow: 
          -0.4px -0.4px 0 #0F52BA,
          0.4px -0.4px 0 #4682B4,
          -0.4px 0.4px 0 #0F52BA,
          0.4px 0.4px 0 #4682B4;
      }
    `;
    
    var r = e("../lib/dom");
    r.importCssString(t.cssText, t.cssClass);
  });
  

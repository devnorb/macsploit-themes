/** Floppa Theme */
define("ace/theme/tomorrow_night", ["require", "exports", "module", "ace/lib/dom"], function(e, t, n) {
  t.isDark = !0;
  t.cssClass = "ace-tomorrow_night-theme";
  t.cssText = `
    .ace-tomorrow_night-theme .ace_gutter {
      background: transparent;
      color: #5C4033;  
    }
    
    .ace-tomorrow_night-theme .ace_print-margin {
      width: 1px;
      background: transparent;
    }
    
    .ace-tomorrow_night-theme {
      background: url('https://cdn.discordapp.com/attachments/1145689059952447539/1166511530012053595/IMG_9240.webp?ex=654ac185&is=65384c85&hm=4c148bcec856ede9867cf2d196dc4fae4dcf37a2bcf2312bde7e1ef95b9597c9&') no-repeat center center fixed;
      background-size: cover;
      color: #ede8e8; 
      text-shadow: #966919;
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
      color: #966919; 
    }
    
    .ace-tomorrow_night-theme .ace_keyword.ace_operator {
      color: #6F4E37; 
    }
    
    .ace-tomorrow_night-theme .ace_constant.ace_character,
    .ace-tomorrow_night-theme .ace_constant.ace_language,
    .ace-tomorrow_night-theme .ace_constant.ace_numeric,
    .ace-tomorrow_night-theme .ace_keyword.ace_other.ace_unit,
    .ace-tomorrow_night-theme .ace_support.ace_constant,
    .ace-tomorrow_night-theme .ace_variable.ace_parameter {
      color: #966919;  
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
    
    .ace-tomorrow_night-theme .ace_keyword.ace_operator {
      color: #C4A484;
    }

    .ace-tomorrow_night-theme {
      text-shadow: #966919;
    }

    .ace-tomorrow_night-theme {
      text-shadow: 
        -0.3px -0.3x 0 #966919,
        0.3px -0.3x 0 #966919,
        -0.3px 0.3px 0 #966919,
        0.3px 0.3px 0 #966919;
    }
  `;
  
  var r = e("../lib/dom");
  r.importCssString(t.cssText, t.cssClass);
});

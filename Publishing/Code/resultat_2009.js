







function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){
       
       mpld3.draw_figure("resultat_2009", {"axes": [{"xlim": [0.0, 1.3959999999999999], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [{"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.920", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, -0.09999999999999998], "rotation": -0.0, "id": "el12009140631955016336"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.953", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 0.9], "rotation": -0.0, "id": "el12009140631955016784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.890", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 1.9000000000000001], "rotation": -0.0, "id": "el12009140631955017360"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.895", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 2.9000000000000004], "rotation": -0.0, "id": "el12009140631955046864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.651", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 3.9000000000000004], "rotation": -0.0, "id": "el12009140631955047952"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.106", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 4.8999999999999995], "rotation": -0.0, "id": "el12009140631955049040"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.670", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 5.8999999999999995], "rotation": -0.0, "id": "el12009140631954971664"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.855", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 6.8999999999999995], "rotation": -0.0, "id": "el12009140631954969424"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.387", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 7.8999999999999995], "rotation": -0.0, "id": "el12009140631955050384"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.996", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 8.9], "rotation": -0.0, "id": "el12009140631955100688"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.693", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 9.9], "rotation": -0.0, "id": "el12009140631955101776"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.817", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 10.9], "rotation": -0.0, "id": "el12009140631955102864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.107", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 11.9], "rotation": -0.0, "id": "el12009140631954624784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.602", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 12.9], "rotation": -0.0, "id": "el12009140631954625872"}, {"v_baseline": "hanging", "h_anchor": "middle", "color": "#000000", "text": "F-score", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [0.49999999999999989, -0.0625], "rotation": -0.0, "id": "el12009140631961529744"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "Classification 2009,\tK : 0.877,\tOA : 0.910", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 14.399999999999999, "position": [0.49999999999999989, 1.0144675925925926], "rotation": -0.0, "id": "el12009140631955847824"}], "zoomable": true, "images": [], "xdomain": [0.0, 1.3959999999999999], "ylim": [-2.0, 14.0], "paths": [{"edgecolor": "#000000", "facecolor": "#FF5500", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data01", "id": "el12009140631955524240"}, {"edgecolor": "#000000", "facecolor": "#FFFF7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data02", "id": "el12009140631955525520"}, {"edgecolor": "#000000", "facecolor": "#009C00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data03", "id": "el12009140631955593168"}, {"edgecolor": "#000000", "facecolor": "#003200", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data04", "id": "el12009140631955594832"}, {"edgecolor": "#000000", "facecolor": "#AAFF00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data05", "id": "el12009140631955662096"}, {"edgecolor": "#000000", "facecolor": "#55AA7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data06", "id": "el12009140631955804816"}, {"edgecolor": "#000000", "facecolor": "#FF00FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data07", "id": "el12009140631955761232"}, {"edgecolor": "#000000", "facecolor": "#FF0000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data08", "id": "el12009140631955701200"}, {"edgecolor": "#000000", "facecolor": "#FFB802", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data09", "id": "el12009140631961711696"}, {"edgecolor": "#000000", "facecolor": "#0000FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data10", "id": "el12009140631961679824"}, {"edgecolor": "#000000", "facecolor": "#BEBEBE", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data11", "id": "el12009140631961584272"}, {"edgecolor": "#000000", "facecolor": "#AAAA00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data12", "id": "el12009140631955215632"}, {"edgecolor": "#000000", "facecolor": "#AAAAFF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data13", "id": "el12009140631955217296"}, {"edgecolor": "#000000", "facecolor": "#550000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data14", "id": "el12009140631955264080"}], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": null, "grid": {"gridOn": false}, "fontsize": 12.0, "position": "bottom", "nticks": 8, "tickvalues": null}, {"scale": "linear", "tickformat": ["ete", "hiver", "foret feuillus", "foret coniferes", "pelouses", "lande ligneuse", "bati", "surfaces minerales", "plages et dunes", "eau", "glaciers ou neiges et", "prairie", "verger", "vigne"], "grid": {"gridOn": false}, "fontsize": 12.0, "position": "left", "nticks": 14, "tickvalues": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}], "lines": [], "markers": [], "id": "el12009140631973773008", "ydomain": [-2.0, 14.0], "collections": [], "xscale": "linear", "bbox": [0.23099999999999998, 0.099999999999999978, 0.66900000000000004, 0.80000000000000004]}], "height": 480.0, "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}], "data": {"data12": [[0.0, 10.6], [0.817, 10.6], [0.817, 11.4], [0.0, 11.4]], "data11": [[0.0, 9.6], [0.693, 9.6], [0.693, 10.4], [0.0, 10.4]], "data14": [[0.0, 12.6], [0.602, 12.6], [0.602, 13.4], [0.0, 13.4]], "data10": [[0.0, 8.6], [0.996, 8.6], [0.996, 9.4], [0.0, 9.4]], "data08": [[0.0, 6.6], [0.855, 6.6], [0.855, 7.3999999999999995], [0.0, 7.3999999999999995]], "data09": [[0.0, 7.6], [0.387, 7.6], [0.387, 8.4], [0.0, 8.4]], "data06": [[0.0, 4.6], [0.106, 4.6], [0.106, 5.3999999999999995], [0.0, 5.3999999999999995]], "data07": [[0.0, 5.6], [0.67, 5.6], [0.67, 6.3999999999999995], [0.0, 6.3999999999999995]], "data04": [[0.0, 2.6], [0.895, 2.6], [0.895, 3.4000000000000004], [0.0, 3.4000000000000004]], "data05": [[0.0, 3.6], [0.651, 3.6], [0.651, 4.4], [0.0, 4.4]], "data02": [[0.0, 0.6], [0.953, 0.6], [0.953, 1.4], [0.0, 1.4]], "data03": [[0.0, 1.6], [0.89, 1.6], [0.89, 2.4000000000000004], [0.0, 2.4000000000000004]], "data13": [[0.0, 11.6], [0.107, 11.6], [0.107, 12.4], [0.0, 12.4]], "data01": [[0.0, -0.4], [0.92, -0.4], [0.92, 0.4], [0.0, 0.4]]}, "id": "el12009140631973707344"});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://mpld3.github.io/js/d3.v3.min"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3git.js", function(){
         
         mpld3.draw_figure("resultat_2009", {"axes": [{"xlim": [0.0, 1.3959999999999999], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [{"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.920", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, -0.09999999999999998], "rotation": -0.0, "id": "el12009140631955016336"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.953", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 0.9], "rotation": -0.0, "id": "el12009140631955016784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.890", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 1.9000000000000001], "rotation": -0.0, "id": "el12009140631955017360"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.895", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 2.9000000000000004], "rotation": -0.0, "id": "el12009140631955046864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.651", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 3.9000000000000004], "rotation": -0.0, "id": "el12009140631955047952"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.106", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 4.8999999999999995], "rotation": -0.0, "id": "el12009140631955049040"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.670", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 5.8999999999999995], "rotation": -0.0, "id": "el12009140631954971664"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.855", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 6.8999999999999995], "rotation": -0.0, "id": "el12009140631954969424"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.387", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 7.8999999999999995], "rotation": -0.0, "id": "el12009140631955050384"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.996", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 8.9], "rotation": -0.0, "id": "el12009140631955100688"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.693", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 9.9], "rotation": -0.0, "id": "el12009140631955101776"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.817", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 10.9], "rotation": -0.0, "id": "el12009140631955102864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.107", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 11.9], "rotation": -0.0, "id": "el12009140631954624784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.602", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 12.9], "rotation": -0.0, "id": "el12009140631954625872"}, {"v_baseline": "hanging", "h_anchor": "middle", "color": "#000000", "text": "F-score", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [0.49999999999999989, -0.0625], "rotation": -0.0, "id": "el12009140631961529744"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "Classification 2009,\tK : 0.877,\tOA : 0.910", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 14.399999999999999, "position": [0.49999999999999989, 1.0144675925925926], "rotation": -0.0, "id": "el12009140631955847824"}], "zoomable": true, "images": [], "xdomain": [0.0, 1.3959999999999999], "ylim": [-2.0, 14.0], "paths": [{"edgecolor": "#000000", "facecolor": "#FF5500", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data01", "id": "el12009140631955524240"}, {"edgecolor": "#000000", "facecolor": "#FFFF7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data02", "id": "el12009140631955525520"}, {"edgecolor": "#000000", "facecolor": "#009C00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data03", "id": "el12009140631955593168"}, {"edgecolor": "#000000", "facecolor": "#003200", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data04", "id": "el12009140631955594832"}, {"edgecolor": "#000000", "facecolor": "#AAFF00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data05", "id": "el12009140631955662096"}, {"edgecolor": "#000000", "facecolor": "#55AA7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data06", "id": "el12009140631955804816"}, {"edgecolor": "#000000", "facecolor": "#FF00FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data07", "id": "el12009140631955761232"}, {"edgecolor": "#000000", "facecolor": "#FF0000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data08", "id": "el12009140631955701200"}, {"edgecolor": "#000000", "facecolor": "#FFB802", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data09", "id": "el12009140631961711696"}, {"edgecolor": "#000000", "facecolor": "#0000FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data10", "id": "el12009140631961679824"}, {"edgecolor": "#000000", "facecolor": "#BEBEBE", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data11", "id": "el12009140631961584272"}, {"edgecolor": "#000000", "facecolor": "#AAAA00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data12", "id": "el12009140631955215632"}, {"edgecolor": "#000000", "facecolor": "#AAAAFF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data13", "id": "el12009140631955217296"}, {"edgecolor": "#000000", "facecolor": "#550000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data14", "id": "el12009140631955264080"}], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": null, "grid": {"gridOn": false}, "fontsize": 12.0, "position": "bottom", "nticks": 8, "tickvalues": null}, {"scale": "linear", "tickformat": ["ete", "hiver", "foret feuillus", "foret coniferes", "pelouses", "lande ligneuse", "bati", "surfaces minerales", "plages et dunes", "eau", "glaciers ou neiges et", "prairie", "verger", "vigne"], "grid": {"gridOn": false}, "fontsize": 12.0, "position": "left", "nticks": 14, "tickvalues": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}], "lines": [], "markers": [], "id": "el12009140631973773008", "ydomain": [-2.0, 14.0], "collections": [], "xscale": "linear", "bbox": [0.23099999999999998, 0.099999999999999978, 0.66900000000000004, 0.80000000000000004]}], "height": 480.0, "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}], "data": {"data12": [[0.0, 10.6], [0.817, 10.6], [0.817, 11.4], [0.0, 11.4]], "data11": [[0.0, 9.6], [0.693, 9.6], [0.693, 10.4], [0.0, 10.4]], "data14": [[0.0, 12.6], [0.602, 12.6], [0.602, 13.4], [0.0, 13.4]], "data10": [[0.0, 8.6], [0.996, 8.6], [0.996, 9.4], [0.0, 9.4]], "data08": [[0.0, 6.6], [0.855, 6.6], [0.855, 7.3999999999999995], [0.0, 7.3999999999999995]], "data09": [[0.0, 7.6], [0.387, 7.6], [0.387, 8.4], [0.0, 8.4]], "data06": [[0.0, 4.6], [0.106, 4.6], [0.106, 5.3999999999999995], [0.0, 5.3999999999999995]], "data07": [[0.0, 5.6], [0.67, 5.6], [0.67, 6.3999999999999995], [0.0, 6.3999999999999995]], "data04": [[0.0, 2.6], [0.895, 2.6], [0.895, 3.4000000000000004], [0.0, 3.4000000000000004]], "data05": [[0.0, 3.6], [0.651, 3.6], [0.651, 4.4], [0.0, 4.4]], "data02": [[0.0, 0.6], [0.953, 0.6], [0.953, 1.4], [0.0, 1.4]], "data03": [[0.0, 1.6], [0.89, 1.6], [0.89, 2.4000000000000004], [0.0, 2.4000000000000004]], "data13": [[0.0, 11.6], [0.107, 11.6], [0.107, 12.4], [0.0, 12.4]], "data01": [[0.0, -0.4], [0.92, -0.4], [0.92, 0.4], [0.0, 0.4]]}, "id": "el12009140631973707344"});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://mpld3.github.io/js/d3.v3.min.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.3git.js", function(){
                 
                 mpld3.draw_figure("resultat_2009", {"axes": [{"xlim": [0.0, 1.3959999999999999], "yscale": "linear", "axesbg": "#FFFFFF", "texts": [{"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.920", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, -0.09999999999999998], "rotation": -0.0, "id": "el12009140631955016336"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.953", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 0.9], "rotation": -0.0, "id": "el12009140631955016784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.890", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 1.9000000000000001], "rotation": -0.0, "id": "el12009140631955017360"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.895", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 2.9000000000000004], "rotation": -0.0, "id": "el12009140631955046864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.651", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 3.9000000000000004], "rotation": -0.0, "id": "el12009140631955047952"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.106", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 4.8999999999999995], "rotation": -0.0, "id": "el12009140631955049040"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.670", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 5.8999999999999995], "rotation": -0.0, "id": "el12009140631954971664"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.855", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 6.8999999999999995], "rotation": -0.0, "id": "el12009140631954969424"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.387", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 7.8999999999999995], "rotation": -0.0, "id": "el12009140631955050384"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.996", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 8.9], "rotation": -0.0, "id": "el12009140631955100688"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.693", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 9.9], "rotation": -0.0, "id": "el12009140631955101776"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.817", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 10.9], "rotation": -0.0, "id": "el12009140631955102864"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.107", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 11.9], "rotation": -0.0, "id": "el12009140631954624784"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "0.602", "coordinates": "data", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [1.196, 12.9], "rotation": -0.0, "id": "el12009140631954625872"}, {"v_baseline": "hanging", "h_anchor": "middle", "color": "#000000", "text": "F-score", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 12.0, "position": [0.49999999999999989, -0.0625], "rotation": -0.0, "id": "el12009140631961529744"}, {"v_baseline": "auto", "h_anchor": "middle", "color": "#000000", "text": "Classification 2009,\tK : 0.877,\tOA : 0.910", "coordinates": "axes", "zorder": 3, "alpha": 1, "fontsize": 14.399999999999999, "position": [0.49999999999999989, 1.0144675925925926], "rotation": -0.0, "id": "el12009140631955847824"}], "zoomable": true, "images": [], "xdomain": [0.0, 1.3959999999999999], "ylim": [-2.0, 14.0], "paths": [{"edgecolor": "#000000", "facecolor": "#FF5500", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data01", "id": "el12009140631955524240"}, {"edgecolor": "#000000", "facecolor": "#FFFF7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data02", "id": "el12009140631955525520"}, {"edgecolor": "#000000", "facecolor": "#009C00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data03", "id": "el12009140631955593168"}, {"edgecolor": "#000000", "facecolor": "#003200", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data04", "id": "el12009140631955594832"}, {"edgecolor": "#000000", "facecolor": "#AAFF00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data05", "id": "el12009140631955662096"}, {"edgecolor": "#000000", "facecolor": "#55AA7F", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data06", "id": "el12009140631955804816"}, {"edgecolor": "#000000", "facecolor": "#FF00FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data07", "id": "el12009140631955761232"}, {"edgecolor": "#000000", "facecolor": "#FF0000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data08", "id": "el12009140631955701200"}, {"edgecolor": "#000000", "facecolor": "#FFB802", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data09", "id": "el12009140631961711696"}, {"edgecolor": "#000000", "facecolor": "#0000FF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data10", "id": "el12009140631961679824"}, {"edgecolor": "#000000", "facecolor": "#BEBEBE", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data11", "id": "el12009140631961584272"}, {"edgecolor": "#000000", "facecolor": "#AAAA00", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data12", "id": "el12009140631955215632"}, {"edgecolor": "#000000", "facecolor": "#AAAAFF", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data13", "id": "el12009140631955217296"}, {"edgecolor": "#000000", "facecolor": "#550000", "edgewidth": 1.0, "pathcodes": ["M", "L", "L", "L", "Z"], "yindex": 1, "coordinates": "data", "dasharray": "none", "zorder": 1, "alpha": 0.4, "xindex": 0, "data": "data14", "id": "el12009140631955264080"}], "sharey": [], "sharex": [], "axesbgalpha": null, "axes": [{"scale": "linear", "tickformat": null, "grid": {"gridOn": false}, "fontsize": 12.0, "position": "bottom", "nticks": 8, "tickvalues": null}, {"scale": "linear", "tickformat": ["ete", "hiver", "foret feuillus", "foret coniferes", "pelouses", "lande ligneuse", "bati", "surfaces minerales", "plages et dunes", "eau", "glaciers ou neiges et", "prairie", "verger", "vigne"], "grid": {"gridOn": false}, "fontsize": 12.0, "position": "left", "nticks": 14, "tickvalues": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]}], "lines": [], "markers": [], "id": "el12009140631973773008", "ydomain": [-2.0, 14.0], "collections": [], "xscale": "linear", "bbox": [0.23099999999999998, 0.099999999999999978, 0.66900000000000004, 0.80000000000000004]}], "height": 480.0, "width": 640.0, "plugins": [{"type": "reset"}, {"enabled": false, "button": true, "type": "zoom"}, {"enabled": false, "button": true, "type": "boxzoom"}], "data": {"data12": [[0.0, 10.6], [0.817, 10.6], [0.817, 11.4], [0.0, 11.4]], "data11": [[0.0, 9.6], [0.693, 9.6], [0.693, 10.4], [0.0, 10.4]], "data14": [[0.0, 12.6], [0.602, 12.6], [0.602, 13.4], [0.0, 13.4]], "data10": [[0.0, 8.6], [0.996, 8.6], [0.996, 9.4], [0.0, 9.4]], "data08": [[0.0, 6.6], [0.855, 6.6], [0.855, 7.3999999999999995], [0.0, 7.3999999999999995]], "data09": [[0.0, 7.6], [0.387, 7.6], [0.387, 8.4], [0.0, 8.4]], "data06": [[0.0, 4.6], [0.106, 4.6], [0.106, 5.3999999999999995], [0.0, 5.3999999999999995]], "data07": [[0.0, 5.6], [0.67, 5.6], [0.67, 6.3999999999999995], [0.0, 6.3999999999999995]], "data04": [[0.0, 2.6], [0.895, 2.6], [0.895, 3.4000000000000004], [0.0, 3.4000000000000004]], "data05": [[0.0, 3.6], [0.651, 3.6], [0.651, 4.4], [0.0, 4.4]], "data02": [[0.0, 0.6], [0.953, 0.6], [0.953, 1.4], [0.0, 1.4]], "data03": [[0.0, 1.6], [0.89, 1.6], [0.89, 2.4000000000000004], [0.0, 2.4000000000000004]], "data13": [[0.0, 11.6], [0.107, 11.6], [0.107, 12.4], [0.0, 12.4]], "data01": [[0.0, -0.4], [0.92, -0.4], [0.92, 0.4], [0.0, 0.4]]}, "id": "el12009140631973707344"});
            })
         });
}
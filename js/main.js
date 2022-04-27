// inverting colors for home page
$(".logo-hover").mouseenter(function(){
    $("html").css("background", "#96AA85");
    $("body").css("background", "#96AA85");
    $(".logo-circle").css("fill", "#FCF9F7");
    $(".logo-path").css("stroke", "#96AA85");
});

$(".logo-hover").mouseleave(function(){
    $("body").css("background", "#FCF9F7");
        $("html").css("background", "#FCF9F7");
        $(".logo-circle").css("fill", "#96AA85");
        $(".logo-path").css("stroke", "#FCF9F7");
});

// creating and adding logo svg path where needed
let svg = d3.select(".navbar-brand")
            .append("svg")
            .attr("viewBox", "0 0 500 500")
            .attr("class", "nav-svg");

// logo circle
svg.append("circle")
   .attr("cx", 250)
   .attr("cy", 250)
   .attr("r", 172)
   .attr("class", "svg-sage");

// logo path
let path = d3.path();
path.moveTo(183.793, 280.699);
path.bezierCurveTo(176.793, 268.834, 176.375, 247.436, 186.782, 229.784);
path.bezierCurveTo(187.329, 228.856, 190.808, 220.614, 205.818, 209.231);
path.bezierCurveTo(211.143, 205.194, 218.369, 201.057, 224.809, 197.106);
path.bezierCurveTo(244.751, 184.874, 291.798, 150.486, 272.057, 126.903);
path.bezierCurveTo(261.4, 114.171, 237.546, 126.164, 226.305, 140.417);
path.bezierCurveTo(218.257, 150.621, 214.548, 159.505, 212.436, 170.082);
path.bezierCurveTo(208.111, 191.744, 209.97, 210.688, 209.958, 234.577);
path.bezierCurveTo(209.948, 251.918, 210.376, 268.773, 210.714, 281.513);
path.bezierCurveTo(210.821, 285.539, 211.752, 311.865, 212.26, 313.181);
path.bezierCurveTo(212.51, 313.824, 215.516, 271.875, 215.798, 267.287);
path.bezierCurveTo(216.908, 249.198, 218.479, 239.459, 226.701, 226.03);
path.bezierCurveTo(231.65, 217.949, 247.175, 207.042, 257.15, 208.537);
path.bezierCurveTo(281.757, 212.226, 273.317, 240.264, 263.901, 253.633);
path.bezierCurveTo(258.854, 260.799, 249.411, 271.099, 238.507, 272.83);
path.bezierCurveTo(234.877, 273.406, 227.473, 273.856, 224.483, 271.645);
path.bezierCurveTo(223.203, 270.697, 231.483, 284.126, 244.742, 287.372);
path.bezierCurveTo(248.211, 288.221, 255.213, 287.883, 259.858, 285.683);
path.bezierCurveTo(268.182, 281.743, 279.568, 269.775, 285.861, 249.276);
path.bezierCurveTo(286.085, 248.545, 285.908, 302.797, 285.621, 308.446);
path.bezierCurveTo(284.171, 336.97, 279.909, 363.092, 265.193, 368.682);
path.bezierCurveTo(249.566, 374.619, 239.864, 360.361, 237.994, 357.425);
path.bezierCurveTo(236.696, 355.385, 232.935, 350.591, 228.786, 335.488);

svg.append("path")
   .attr("class", "svg-path")
   .attr("tranform", "matrix(0.999862, 0.016589, -0.016589, 0.999862, 4.109773, -3.820517)")
   .attr("d", path);
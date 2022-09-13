// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Mathieu Lebaron"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO: explode, reticulate splines, discombobulate,
//The icons are anglo-saxon runes.

import * as d3 from "d3";

let background = d3.select('main').append('svg')
    .attr('width', 800)
    .attr('height', 700)
    .style('background', '#eee')
    .style('fill', 'transparent')

let icon1 = background.append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M100,50 L80,40 L80,150 L60,140")

let icon2 = background.append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M260,40 L240,50 L220,40 L220,150 L240,140 L260,150")

let icon3 = background.append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M390,40 L390,150 M360,40 L390,60 M420,40 L390,60")

let icon4 = background.append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M530,40 L530,100 L570,80 L570,150")

let icon5 = background.append("path")
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 3)
    .attr("d", "M670,40 L730,95 L670,150 M730,40 L670,95 L730,150")

function animate()
{
    icon1
        .transition()
        .duration(2000)
        .attr("d", "M100,50 L80,40 L80,150 L60,140")
        .transition()
        .duration(1800)
        .attr("d", "M100,550 L80,540 L80,650 L60,640")

    icon2
        .transition()
        .duration(2100)
        .attr("d", "M260,40 L240,50 L220,40 L220,150 L240,140 L260,150")
        .transition()
        .duration(1700)
        .attr("d", "M260,540 L240,550 L220,540 L220,650 L240,640 L260,650")

    icon3
        .transition()
        .duration(2200)
        .attr("d", "M390,40 L390,150 M360,40 L390,60 M420,40 L390,60")
        .transition()
        .duration(1600)
        .attr("d", "M390,540 L390,650 M360,540 L390,560 M420,540 L390,560")

    icon4
        .transition()
        .duration(2300)
        .attr("d", "M530,40 L530,100 L570,80 L570,150")
        .transition()
        .duration(1500)
        .attr("d", "M530,540 L530,600 L570,580 L570,650")

    icon5
        .transition()
        .duration(2400)
        .attr("d", "M670,40 L730,95 L670,150 M730,40 L670,95 L730,150")
        .transition()
        .duration(1400)
        .attr("d", "M670,540 L730,595 L670,650 M730,540 L670,595 L730,650")
        .on('end', animate)
}
animate()
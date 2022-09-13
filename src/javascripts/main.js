// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Mathieu Lebaron"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

//Then: comes everything else
// TODO: explode, reticulate splines, discombobulate,


import * as d3 from "d3";

let background = d3.select('main').append('svg')
    .attr('width', 800)
    .attr('height', 700)
    .style('background', '#eee')
    .style('fill', 'transparent')

let icon1 = background.append('rect')
    .attr('x', 10)
    .attr('y', 10)
    .attr("width", 100)
    .attr("height", 100)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')

let icon2 = background.append("circle")
    .attr('cx', 180)
    .attr('cy', 50)
    .attr('r', 50)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')

let icon3 = background.append("ellipse")
    .attr('cx', 300)
    .attr('cy', 70)
    .attr('rx', 50)
    .attr('ry', 50)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')

let icon4 = background.append('ellipse')
    .attr('cx', 420)
    .attr('cy', 80)
    .attr('rx', 50)
    .attr('ry', 50)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')

let icon5 = background.append('rect')
    .attr('x', 490)
    .attr('y', 0)
    .attr("width", 100)
    .attr("height", 100)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')

function animate()
{
    icon1
        .transition()
        .duration(2000)
        .attr('y', 10)
        .transition()
        .duration(800)
        .attr('y', 590)

    icon2
        .transition()
        .duration(2100)
        .attr('cy', 60)
        .transition()
        .duration(700)
        .attr('cy', 640)

    icon3
        .transition()
        .duration(2200)
        .attr('cy', 60)
        .transition()
        .duration(600)
        .attr('cy', 640)

    icon4
        .transition()
        .duration(2300)
        .attr('cy', 60)
        .transition()
        .duration(500)
        .attr('cy', 640)

    icon5
        .transition()
        .duration(2400)
        .attr('y', 0)
        .transition()
        .duration(400)
        .attr('y', 590)
        .on('end', animate)
}
animate()
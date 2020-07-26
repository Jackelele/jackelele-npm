const {white, cyan, green,bold, blue} = require("colorette")

// Text + chalk definitions
var work = white(`${blue('Ionic')}, Managing Director, Elele.Team`)
var twitter = cyan('https://twitter.com/Jackelele_')
var github = cyan('https://github.com/jackelele')
var site = cyan('https://jackelele.co.uk')
var npx = white('npx jackelele')

var newline = '\n'
var heading = `${white('  Jackelele /')} ${cyan('jackelele')}`
var working = `${white(bold('     Work:'))}  ${work}`
var twittering = `${white(bold('  Twitter:'))}  ${twitter}`
var githubing = `${white(bold('   GitHub:'))}  ${github}`
var webing = `${white(bold('      Web:'))}  ${site}`
var carding = `${white(bold('     Card:'))}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + webing  + newline  + newline + carding


console.log(output)
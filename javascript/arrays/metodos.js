const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React js', 'Node js']

// tecnologias.push('Nest Js');

const array = [...tecnologias, 'Nest.js']
//Es importante evitar mutar el arraglo original
// tecnologias.shift()

const tecnologias2 = tecnologias.filter(tech => {
    if (tech !== 'HTML') {
        return tech;
    }
})

const tech = tecnologias2.map(tech => {
    if (tech === 'Node js') {
        return 'Nest js'
    } else {
        return tech;
    }
})
console.log(tech)
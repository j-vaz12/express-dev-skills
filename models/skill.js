const skills = [
    {id: 123456, skill: 'HTML', techstack: 'FrontEnd'},
    {id: 134535, skill: 'JS', techstack: 'FrontEnd'},
    {id: 145631, skill: 'NODE.JS', techstack: 'BackEnd'},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id); 
}
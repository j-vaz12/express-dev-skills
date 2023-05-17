const skills = [
    {id: 123456, skill: 'HTML', techstack: 'FrontEnd'},
    {id: 134535, skill: 'JS', techstack: 'FrontEnd'},
    {id: 145631, skill: 'NODE.JS', techstack: 'BackEnd'},
];

module.exports = {
    getAll,
};

function getAll() {
    return skills;
}
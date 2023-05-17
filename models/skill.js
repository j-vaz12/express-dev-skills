const skills = [
    {skill: 'html', techstack: 'frontend'},
    {skill: 'js', techstack: 'frontend'},
    {skill: 'node.js', techstack: 'backend'},
];

module.exports = {
    getAll,
};

function getAll() {
    return skills;
}
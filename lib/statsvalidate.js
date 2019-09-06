const validateStats = (array) => {
    const amountOfLinks = array.length;
    const links = array.map((obj) => obj.href);
    const broken = array.filter((obj) => obj.status == 'FAIL');
    const setUnique = new Set(links);
    return `Total: ${amountOfLinks} \nUnique: ${setUnique.size} \nBroken: ${broken.length}`;
}

module.exports = validateStats;
module.exports = class RecipeDto {
    name;
    desc;

    constructor(model) {
        this.name = model.name
        this.desc = model.desc
    }
}